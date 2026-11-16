from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
from docx import Document
from docx.shared import Inches
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls
p=Path(__file__).parent
im=Image.new('RGB',(1700,2200),'#aeb3b7');d=ImageDraw.Draw(im)
blue='#062c56'; light='#dce3e9'
d.polygon([(0,0),(900,0),(0,465)],fill=light)
d.polygon([(600,1020),(1700,440),(1700,2200),(600,2200)],fill=light)
font='/usr/share/fonts/urw-base35/NimbusSans-Regular.otf';bold='/usr/share/fonts/urw-base35/NimbusSans-Bold.otf'
def txt(x,y,t,size=50,b=False,anchor=None):d.text((x,y),t,font=ImageFont.truetype(bold if b else font,size),fill=blue,anchor=anchor)
txt(150,145,'CorteX',48)
for x in [1430,1500]:
 for y in [140,200,260,320]:d.text((x,y),'+',font=ImageFont.truetype(font,48),fill='white')
for x in [150,220]:
 for y in [1840,1900,1960,2020]:d.text((x,y),'+',font=ImageFont.truetype(font,48),fill='white')
txt(1530,1030,'2026',88,True,'ra');txt(1530,1145,'CorteX',180,True,'ra')
for i,line in enumerate(['Fingerprint-led workstation security','with environment checks and real-time','monitoring, designed to support safer','access to sensitive business credentials.']):txt(1530,1390+i*59,line,46,False,'ra')
txt(1530,1960,'BUSINESS PLAN',44,True,'ra');txt(1530,2030,'Cortex Sentinel Team',42,False,'ra')
im.save(p/'cover-2026.png')
doc=Document(p/'Cortex_Sentinel_Business_Plan.docx')
body=doc._element.body
for el in list(body):
 if 'Table of Contents' in ''.join(el.itertext()) or 'TABLE OF CONTENTS' in ''.join(el.itertext()):break
 body.remove(el)
# insert anchored cover before the contents
para=doc.add_paragraph();body.remove(para._p);body.insert(0,para._p)
r=para.add_run();inline=r.add_picture(str(p/'cover-2026.png'),width=Inches(8.5),height=Inches(11))._inline
xml=f'''<wp:anchor {nsdecls('wp','a','pic','r')} distT="0" distB="0" distL="0" distR="0" simplePos="0" relativeHeight="0" behindDoc="1" locked="0" layoutInCell="1" allowOverlap="1"><wp:simplePos x="0" y="0"/><wp:positionH relativeFrom="page"><wp:posOffset>0</wp:posOffset></wp:positionH><wp:positionV relativeFrom="page"><wp:posOffset>0</wp:posOffset></wp:positionV></wp:anchor>'''
a=parse_xml(xml)
for child in list(inline):a.append(child)
a.insert(5,parse_xml('<wp:wrapNone '+nsdecls('wp')+'/>'))
inline.getparent().replace(inline,a)
doc.sections[0].different_first_page_header_footer=True
doc.save(p/'Cortex_Sentinel_Business_Plan_2026.docx')
print(len(doc.paragraphs))
