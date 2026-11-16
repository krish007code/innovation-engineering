import json, re
from pathlib import Path
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.enum.text import WD_ALIGN_PARAGRAPH
from PIL import Image, ImageDraw


root=Path(__file__).parent
data=json.loads((root/'content-final.json').read_text())
doc=Document(); sec=doc.sections[0]
sec.page_width=Inches(8.5);sec.page_height=Inches(11)
sec.top_margin=Inches(.7);sec.bottom_margin=Inches(.65);sec.left_margin=sec.right_margin=Inches(.85)
sec.header_distance=sec.footer_distance=Inches(.4)
for sn in ['Normal','Title','Subtitle','Heading 1','Heading 2','Heading 3']:
 st=doc.styles[sn];st.font.name='Arial';st.font.color.rgb=RGBColor(0,0,0)
doc.styles['Normal'].font.size=Pt(10.5)
doc.styles['Normal'].paragraph_format.line_spacing=1.05
doc.styles['Normal'].paragraph_format.space_after=Pt(5)
for sn,sz in [('Title',34),('Heading 1',25),('Heading 2',14),('Heading 3',11)]:
 doc.styles[sn].font.size=Pt(sz);doc.styles[sn].paragraph_format.space_after=Pt(12);doc.styles[sn].paragraph_format.space_before=Pt(12)
doc.styles['Heading 1'].font.bold=False
hp=sec.header.paragraphs[0];hp.text='C O R T E X   S E N T I N E L     /     B U S I N E S S   P L A N';hp.runs[0].font.size=Pt(8)
fp=sec.footer.paragraphs[0];fp.text='C O R T E X   S E N T I N E L';fp.runs[0].font.size=Pt(8)
fp.paragraph_format.tab_stops.add_tab_stop(Inches(6.4));fp.add_run('\t')
fld=OxmlElement('w:fldSimple');fld.set(qn('w:instr'),'PAGE');fp._p.append(fld)
im=Image.new('RGB',(1500,1000),'#d1d2d0');im.save(root/'placeholder.png')

def p(txt,style=None):
 if not isinstance(txt,str):txt=json.dumps(txt,ensure_ascii=False)
 return doc.add_paragraph(txt,style)
def table(t):
 if t.get('title'):doc.add_heading(t['title'],2)
 headers=t.get('headers',[]);rows=t.get('rows',[])
 if not headers or not rows:return
 tb=doc.add_table(rows=1,cols=len(headers));tb.autofit=False
 for c,h in zip(tb.rows[0].cells,headers):c.text=str(h)
 for row in rows:
  cells=tb.add_row().cells
  for c,val in zip(cells,row):c.text=str(val)
 for i,row in enumerate(tb.rows):
  pr=row._tr.get_or_add_trPr();cant=OxmlElement('w:cantSplit');pr.append(cant)
  if i==0:pr.append(OxmlElement('w:tblHeader'))
  for c in row.cells:
   cp=c._tc.get_or_add_tcPr();shade=OxmlElement('w:shd');shade.set(qn('w:fill'),'E2E3DF' if i==0 else ('F5F5F3' if i%2==0 else 'FFFFFF'));cp.append(shade)
   borders=OxmlElement('w:tcBorders')
   for edge in ['top','left','bottom','right']:
    el=OxmlElement('w:'+edge);el.set(qn('w:val'),'single');el.set(qn('w:sz'),'4');el.set(qn('w:color'),'D9D9D9');borders.append(el)
   cp.append(borders)
   margins=OxmlElement('w:tcMar')
   for side in ['top','left','bottom','right']:
    x=OxmlElement('w:'+side);x.set(qn('w:w'),'90');x.set(qn('w:type'),'dxa');margins.append(x)
   cp.append(margins)
   for para in c.paragraphs:
    para.paragraph_format.space_after=Pt(4);para.paragraph_format.space_before=Pt(3)
    for run in para.runs:run.font.size=Pt(9);run.bold=i==0
 # No trailing empty paragraph after tables.
def body(x):
 for text in x.get('paragraphs',[]):p(text)
 for text in x.get('bullets',[]):p(text,'List Bullet')
 for t in x.get('tables',[]):table(t)
 for sub in x.get('subsections',[]):
  doc.add_heading(sub['title'],2);body(sub)

# Read calculated annual summary directly from saved XLSX cached values.
import openpyxl
w=openpyxl.load_workbook(root.parent/'cortex-research-20261114/Cortex_Sentinel_Financial_Scenarios.xlsx',data_only=True)
s=w['Summary'];years=[s.cell(9,i).value for i in range(4,14)]
def graph(name, series, labels, ylabel):
 im=Image.new('RGB',(1500,580),'white');d=ImageDraw.Draw(im)
 from PIL import ImageFont
 font=ImageFont.truetype('/usr/share/fonts/urw-base35/NimbusSans-Regular.otf',19)
 vals=[x for ss in series for x in ss];lo=min(0,min(vals));hi=max(vals);span=hi-lo or 1
 for k in range(5):
  val=lo+span*k/4;y=470-360*k/4;d.line((120,y,1430,y),fill='#dddddd');d.text((5,y-10),f'{val:,.1f}',fill='black',font=font)
 for j,ss in enumerate(series):
  color=['#44565a','#9b5a4b'][j];pts=[(120+i*1310/(len(ss)-1),470-(v-lo)/span*360) for i,v in enumerate(ss)];d.line(pts,fill=color,width=4);d.text((120,20+j*28),labels[j],fill=color,font=font)
 for i in range(len(series[0])):d.text((110+i*1310/(len(series[0])-1),490),str((2024 if name=='market_graph' else 2027)+i),fill='black',font=font)
 d.text((120,540),ylabel,fill='black',font=font);im.save(root/(name+'.png'))
for nm,rs in [('financial_graphs',[13,19]),('cash_graph',[23,24])]:
 graph(nm,[[s.cell(rr,i).value/100000 for i in range(4,14)] for rr in rs],[s.cell(rr,3).value for rr in rs],'Fiscal year starting April | INR lakh | Illustrative base scenario')
graph('market_graph',[[350,425,500,575,650,725]],['Simulated market seats: 2024–2029, not observed data'],'Illustrative classroom assumptions; five seats per firm')
for idx,page in enumerate(data['pages']):
 # Page starts are applied to headings to avoid empty break paragraphs.
 no=page.get('template_page',idx+1)
 if no==1:
  doc.add_picture(str(root/'placeholder.png'),width=Inches(6.8));p('Product image placeholder','Caption');doc.add_heading('Cortex Sentinel',0);p('Business Plan','Subtitle');body(page);continue
 heading=doc.add_heading(page['title'],1)
 if idx:heading.paragraph_format.page_break_before=True
 if page.get('subtitle'):p(page['subtitle'],'Subtitle')
 if no==2:
  for line in data.get('contents',[]):
   if isinstance(line,str):p(line)
   else:p(line.get('title',line.get('heading',str(line))))
 body(page)
 if no==7:
  table({'title':'Industry overview','headers':['Identity','Workstation environment','Delivery and assurance'],'rows':[['Fingerprint / Windows Hello / FIDO security keys','Network / USB / process checks and endpoint protection','Integration, updates, support and buyer validation']]})
 if no==9:
  for label in ['Historical graph','Forecast graph']:
   doc.add_heading(label,2);p('Illustrative classroom scenario. Values are assumed for planning and do not represent observed historical market data or a researched market forecast.')
  if (root/'market_graph.png').exists(): doc.add_picture(str(root/'market_graph.png'),width=Inches(5.5))
 if no==21:
  doc.add_picture(str(root/'financial_graphs.png'),width=Inches(6.7));p('Base scenario: hypothetical revenue and pre-tax result. Constant FY 2027–28 rupees.','Caption')
  doc.add_picture(str(root/'cash_graph.png'),width=Inches(6.7));p('Base scenario: cash before additional funding and peak additional funding requirement. Financing is uncommitted.','Caption')
if data.get('references'):
 doc.add_page_break();doc.add_heading('References',1)
 for rr in data['references']:p(rr if isinstance(rr,str) else json.dumps(rr,ensure_ascii=False))
doc.core_properties.title='Cortex Sentinel Business Plan';doc.core_properties.author='Cortex Sentinel team'
for st in doc.styles:
 if st.type==1:
  for el in list(st.element.iter()):
   if el.tag==qn('w:pBdr'):
    el.getparent().remove(el)
 for el in st.element.findall('.//' + qn('w:color')):
  el.set(qn('w:val'),'000000')
  for att in ['themeColor','themeTint','themeShade']:
   el.attrib.pop(qn('w:'+att),None)
doc.save(root/'Cortex_Sentinel_Business_Plan.docx')
print('Created DOCX',len(data['pages']),'template sections')
