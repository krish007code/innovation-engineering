import fs from 'node:fs/promises';
import {Workbook, SpreadsheetFile} from '@oai/artifact-tool';
const out='/home/krish/projects/Innovation Engineering/outputs/cortex-research-20261114';
const wb=Workbook.create();
const names=['Summary','Assumptions','Monthly','Unit costs','Template bridge','Checks'];
const sh=Object.fromEntries(names.map(n=>[n,wb.worksheets.add(n)]));
const fmt='#,##0;(#,##0);"–"';
const col=n=>{let x='';for(;n;n=Math.floor((n-1)/26))x=String.fromCharCode(65+(n-1)%26)+x;return x;};
function v(s,a,value){sh[s].getRange(a).values=[[value]];}
function f(s,a,formula){sh[s].getRange(a).formulas=[[formula]];sh[s].getRange(a).format.font.color=s==='Summary'?'#172B4D':formula.includes('!')?'#167044':'#172B4D';}
function title(s,text,last='M',rows=60){let z=sh[s];z.showGridLines=false;z.getRange(`A1:${last}${rows}`).format.font={name:'Arial',size:10,color:'#172B4D'};z.getRange(`A1:B${rows}`).format.columnWidth=3;z.getRange(`C1:C${rows}`).format.columnWidth=39;z.getRange(`D1:${last}${rows}`).format.columnWidth=15;z.getRange(`A1:${last}${rows}`).format.rowHeight=21;v(s,'C2',text);z.getRange('C2').format.font={name:'Arial',size:15,bold:true};v(s,'C4','Selected case');if(s!=='Assumptions')f(s,'D4',"=Assumptions!D6");z.getRange(`D7:${last}${rows}`).setNumberFormat(fmt);}
function band(s,row,text,last='M'){v(s,`C${row}`,text);sh[s].getRange(`C${row}:${last}${row}`).format={fill:'#263F63',font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'},rowHeight:24};}
function note(s,row,text,last='M'){v(s,`C${row}`,text);sh[s].getRange(`C${row}:${last}${row}`).merge();sh[s].getRange(`C${row}`).format.wrapText=true;sh[s].getRange(`C${row}`).format.rowHeight=34;}
for(const s of names)title(s,{'Summary':'Cortex Sentinel · financial scenarios','Assumptions':'Editable scenario assumptions','Monthly':'Monthly operating and cash model','Unit costs':'Pilot and device cost inputs','Template bridge':'Teacher template and model mapping','Checks':'Model reconciliations'}[s],s==='Monthly'?'BH':'M',s==='Monthly'?130:s==='Assumptions'?110:65);
sh.Summary.tabColor='#263F63';sh.Assumptions.tabColor='#597599';
v('Assumptions','C5','Case selector: 1 / 2 / 3');v('Assumptions','D5',2);f('Assumptions','D6','=CHOOSE(D5,"Downside","Base","Upside")');
sh.Assumptions.getRange('D5').format.fill='#FFF2CC';sh.Assumptions.getRange('D5').format.font.color='#0000FF';sh.Assumptions.getRange('D5').dataValidation={rule:{type:'list',values:['1','2','3']}};
note('Assumptions',7,'All operating scenarios are analyst hypotheses, PENDING user review. Constant FY 2027–28 rupees; no market-growth forecast.');
v('Assumptions','C9','Driver / case');for(let y=0;y<10;y++)v('Assumptions',`${col(y+4)}9`,`FY ${2027+y}–${String(2028+y).slice(2)}`);
const drivers=[
 ['Paid device sales / year',[Array(10).fill(0),Array.from({length:10},(_,i)=>24*(i+1)),Array.from({length:10},(_,i)=>60*(i+1))],'ASM-011: stress paths, not customer orders'],
 ['Assembly capacity hours / month',[40,40,100],'ASM-012: available outsourced hours; not founder commitments'],
 ['Assembly hours / device',[2,2,2],'ASM-012: labor included in unit costs, not fixed payroll'],
 ['Net retained device price',[4500,4500,4500],'ASM-007: hypothetical net price; actual GST basis unknown'],
 ['Core build + inbound / device',[3557,3077,2747],'Unit costs: materials + extras + assembly + inbound'],
 ['Fulfillment + reserve / sale',[540,370,200],'Unit costs: customer logistics + conservative reserve expense'],
 ['Fixed operating hours / month',[40,40,80],'ASM-012: includes 12 hours update maintenance, rest admin/discovery'],
 ['Fixed operating hourly pay',[250,250,250],'ASM-012: illustrative allowance, not quoted compensation'],
 ['Nonpay overhead / month',[20000,20000,20000],'ASM-012: illustrative unitemized allowance; revise with quotes'],
 ['New service attachment',[0.25,0.5,0.75],'ASM-013: unvalidated uptake, expected contract counts may be fractional'],
 ['Annual renewal proportion',[0.5,0.7,0.85],'ASM-013: renewal at 12-month anniversary'],
 ['Annual net service fee',[500,500,500],'DEC-015 entitlement; net treatment is hypothetical'],
 ['Annual cost / service account',[550,300,175],'ASM-013: support hours × 250 plus 50 variable platform allowance'],
 ['Support hours / account / year',[2,1,0.5],'ASM-013: included in service cost, not fixed operating payroll'],
 ['Device receivable months',[1,0.5,0],'Analyst cash-timing assumption: month-end revenue fraction outstanding'],
 ['Next-month inventory multiple',[1,1,1],'Analyst inventory assumption; terminal stock held at last-month sales level'],
 ['Commercial launch month in FY1',[4,4,4],'Analyst gate: no paid sales Apr–Jun 2027; pilot separate'],
 ['Initial contribution funding',[44470,44470,44470],'Pilot proposal only; no money committed; hypothetical nonrepayable financing'],
 ['Pilot setup spend',[10000,10000,10000],'ASM-005/010; expensed setup, not capitalized assets'],
 ['Pilot build + inbound / device',[3077,3077,3077],'Fixed working pilot choice, separate from commercial cost scenarios'],
 ['Pilot fulfillment allowance',[1700,1700,1700],'ASM-010; cash expense at stage 2; no sale implied'],
 ['Pilot reserve held',[2000,2000,2000],'ASM-010; earmarked cash only, not expense unless used'],
 ];
const dr={};
for(let d=0;d<drivers.length;d++){const [label,cases,source]=drivers[d],r=10+d*4;dr[label]=r;v('Assumptions',`C${r}`,label+' · active');sh.Assumptions.getRange(`C${r}:M${r}`).format.fill='#E8EEF7';sh.Assumptions.getRange(`C${r}:M${r}`).format.font.bold=true;
 for(let k=0;k<3;k++){v('Assumptions',`C${r+k+1}`,['Downside','Base','Upside'][k]);for(let y=0;y<10;y++){let a=cases[k];v('Assumptions',`${col(y+4)}${r+k+1}`,Array.isArray(a)?a[y]:a);sh.Assumptions.getRange(`${col(y+4)}${r+k+1}`).format.font.color='#0000FF';}}
 for(let y=0;y<10;y++){let c=col(y+4);f('Assumptions',`${c}${r}`,`=IF(CHOOSE($D$5,COUNT(${c}${r+1}),COUNT(${c}${r+2}),COUNT(${c}${r+3}))=0,"MISSING",CHOOSE($D$5,${c}${r+1},${c}${r+2},${c}${r+3}))`);}
 v('Assumptions',`O${r}`,source);sh.Assumptions.getRange(`O${r}`).format.columnWidth=95;
 if([9,10].includes(d))sh.Assumptions.getRange(`D${r}:M${r+3}`).setNumberFormat('0.0%');
}
note('Assumptions',100,'Missing tax/financing terms: model is pre-income-tax, no GST credit, no debt interest or dividends. These are exclusions, not verified zero obligations.');
note('Assumptions',102,'No paid demand, founder salaries or service retention has been measured. No automatic pan-India/worldwide expansion revenue is included.');
sh.Assumptions.freezePanes.freezeRows(9);
// Unit economics and source register alongside the inputs.
band('Unit costs',7,'Device inputs and allowances','H');
sh['Unit costs'].getRange('C8:H8').values=[['Item','Low allowance','Working','High allowance','Basis','Source / limit']];
const items=[
 ['ESP32 CP2102 30-pin',499,499,499,'Vendor listing','https://probots.co.in/esp32-30-pin-cp2102-development-board.html'],
 ['R307 fingerprint sensor',1073,1073,1073,'Vendor listing','https://robopro.in/shop/r307-optical-fingerprint-sensor-module/'],
 ['SH1106 OLED',330,330,330,'Vendor listing','https://techiesms.com/product/1-3-inch-oled-display-i2c-sh1106-white/'],
 ['Passive buzzer',15,15,15,'Vendor listing','https://robopro.in/shop/5v-passive-piezoelectric-buzzer/'],
 ['PEM200 enclosure',330,330,330,'Vendor listing','https://probots.co.in/surface-mount-plastic-enclosure-medium-pem200.html'],
 ['Micro-B data cable allowance',100,100,100,'Analyst assumption','SRC-023/024: stock/specification limits; not firm quote'],
 ['Wiring, driver and mounting',150,250,400,'Analyst assumption','ASM-005; fit, driver and level shifting unverified'],
 ['Assembly and QA',200,400,700,'Analyst assumption','Working: 2 hours × INR 200; not supplier quote'],
 ['Inbound freight allocation',50,80,110,'Analyst assumption','Part of total logistics allowance'],
 ['Customer fulfillment',100,170,240,'Analyst assumption','No checkout/delivery quotation'],
 ['Warranty/rework cash allowance',100,200,300,'Analyst assumption','Conservative expensed outflow in commercial model'],
 ];
sh['Unit costs'].getRange('C9:H19').values=items;
for(let r=9;r<=19;r++)sh['Unit costs'].getRange(`D${r}:F${r}`).format.font.color='#0000FF';
v('Unit costs','C21','Core build + inbound');v('Unit costs','C22','Fulfillment + reserve');v('Unit costs','C23','Total variable allowance');for(let c of ['D','E','F']){f('Unit costs',`${c}21`,`=SUM(${c}9:${c}17)`);f('Unit costs',`${c}22`,`=SUM(${c}18:${c}19)`);f('Unit costs',`${c}23`,`=SUM(${c}21:${c}22)`);}
sh['Unit costs'].getRange('G8:G23').format.columnWidth=23;sh['Unit costs'].getRange('H8:H23').format.columnWidth=100;
note('Unit costs',25,'Listed prices inspected 14-Nov-2026, generally GST-inclusive; no input credit assumed. Allowances are unverified; no compatible finished-unit quote exists.');
band('Unit costs',28,'Pilot funding allocation','F');
for(const [r,l,a] of [[29,'Setup + first 2 devices',16154],[30,'Next 8 devices after checks',24616],[31,'Fulfillment allowance',1700],[32,'Reserve held, not spent',2000]]){v('Unit costs',`C${r}`,l);v('Unit costs',`E${r}`,a);}f('Unit costs','E33','=SUM(E29:E32)');v('Unit costs','C33','Pilot funding proposal');
note('Unit costs',35,'Two devices first, then eight only after electrical, firmware and enclosure tests. Model assumes stages in Apr/Jun 2027; timing is hypothetical.');
note('Unit costs',37,'Teacher-directed funding request; no award, loan terms or customer commitments. Actual prototype SKU unknown. Original workbook is preserved.');
// Tie cost drivers to authoritative unit-cost cells rather than duplicate costs.
for(let y=0;y<10;y++){let c=col(y+4);for(let k=0;k<3;k++){let u=['F','E','D'][k];f('Assumptions',`${c}${dr['Core build + inbound / device']+k+1}`,`='Unit costs'!${u}21`);f('Assumptions',`${c}${dr['Fulfillment + reserve / sale']+k+1}`,`='Unit costs'!${u}22`);}}
const heads=['Month','FY index','FY month','Annual sales input','Planned sales','Capacity devices','Shipped devices','Net unit price','Core cost / unit','Other variable / unit','Device revenue','Device variable cost','New service contracts','Renewed contracts','Annual contract starts','Active contracts','Service billings','Service revenue','Service cost','Fixed operating pay','Other overhead','Pilot expense','Total revenue','Pretax result','Receivables closing','Inventory units closing','Inventory value closing','Core purchase cash','Customer cash receipts','Operating cash flow','Contribution financing','Net cash flow','Cumulative cash before extra funding','Required extra funding balance','Operating contribution / unit','Device-only break-even / month','Cumulative pretax result','Deferred service revenue','Cash after required financing','Balance-sheet difference','Produced devices','Production over capacity','Annual service fee','Annual service cost','Assembly hours used','Support hours used','Fixed operating hours','Paid operations FTE','Cumulative operating cash','Peak extra funding needed','Cumulative received financing','Pilot reserve floor','Free cash after reserve','Positive operating cash month'];
sh.Monthly.getRange(`C7:${col(heads.length+2)}7`).values=[heads];sh.Monthly.getRange(`C7:${col(heads.length+2)}7`).format={fill:'#263F63',font:{name:'Arial',size:10,color:'#FFFFFF',bold:true},wrapText:true,rowHeight:55};sh.Monthly.getRange('C8:C127').format.columnWidth=14;sh.Monthly.freezePanes.freezeRows(7);
const mc=Object.fromEntries(heads.map((x,i)=>[x,col(i+3)]));
for(let i=0;i<120;i++){let r=8+i,p=r-1,year=Math.floor(i/12),ac=col(year+4);const ref=n=>`${mc[n]}${r}`, prev=n=>`${mc[n]}${p}`,a=n=>`Assumptions!${ac}${dr[n]}`;const set=(n,x)=>f('Monthly',ref(n),'='+x);
 v('Monthly',`C${r}`,new Date(Date.UTC(2027,3+i,1)));v('Monthly',`D${r}`,year+1);v('Monthly',`E${r}`,i%12+1);
 set('Annual sales input',a('Paid device sales / year'));
 const offset=year===0?`${a('Commercial launch month in FY1')}-1`:'0';const months=`(12-(${offset}))`;
 set('Planned sales',`IF(E${r}<=(${offset}),0,ROUNDDOWN(F${r}*(E${r}-(${offset}))/${months},0)-ROUNDDOWN(F${r}*(E${r}-(${offset})-1)/${months},0))`);
 set('Capacity devices',`ROUNDDOWN(${a('Assembly capacity hours / month')}/${a('Assembly hours / device')},0)`);
 set('Shipped devices',`MIN(${ref('Planned sales')},${ref('Capacity devices')})`);set('Net unit price',a('Net retained device price'));set('Core cost / unit',a('Core build + inbound / device'));set('Other variable / unit',a('Fulfillment + reserve / sale'));
 set('Device revenue',`${ref('Shipped devices')}*${ref('Net unit price')}`);set('Device variable cost',`${ref('Shipped devices')}*SUM(${ref('Core cost / unit')}:${ref('Other variable / unit')})`);
 set('New service contracts',`${ref('Shipped devices')}*${a('New service attachment')}`);set('Renewed contracts',i<12?'0':`${mc['Annual contract starts']}${r-12}*${a('Annual renewal proportion')}`);set('Annual contract starts',`SUM(${ref('New service contracts')}:${ref('Renewed contracts')})`);
 set('Active contracts',`SUM(${mc['Annual contract starts']}${Math.max(8,r-11)}:${ref('Annual contract starts')})`);
 set('Annual service fee',a('Annual net service fee'));set('Annual service cost',a('Annual cost / service account'));
 set('Service billings',`${ref('Annual contract starts')}*${ref('Annual service fee')}`);set('Service revenue',`SUM(${mc['Service billings']}${Math.max(8,r-11)}:${ref('Service billings')})/12`);set('Service cost',`${ref('Active contracts')}*${ref('Annual service cost')}/12`);
 set('Fixed operating pay',`${a('Fixed operating hours / month')}*${a('Fixed operating hourly pay')}`);set('Other overhead',a('Nonpay overhead / month'));
 set('Pilot expense',i===0?`${a('Pilot setup spend')}+2*${a('Pilot build + inbound / device')}`:i===2?`8*${a('Pilot build + inbound / device')}+${a('Pilot fulfillment allowance')}`:'0');
 set('Total revenue',`${ref('Device revenue')}+${ref('Service revenue')}`);set('Pretax result',`${ref('Total revenue')}-${ref('Device variable cost')}-${ref('Service cost')}-${ref('Fixed operating pay')}-${ref('Other overhead')}-${ref('Pilot expense')}`);
 set('Receivables closing',`${ref('Device revenue')}*${a('Device receivable months')}`);
 set('Inventory units closing',i===119?`${ref('Shipped devices')}*${a('Next-month inventory multiple')}`:`${mc['Shipped devices']}${r+1}*${a('Next-month inventory multiple')}`);
 set('Inventory value closing',`${ref('Inventory units closing')}*${ref('Core cost / unit')}`);
 set('Core purchase cash',`${ref('Shipped devices')}*${ref('Core cost / unit')}+${ref('Inventory value closing')}-${i===0?'0':prev('Inventory value closing')}`);
 set('Customer cash receipts',`${ref('Device revenue')}-${ref('Receivables closing')}+${i===0?'0':prev('Receivables closing')}+${ref('Service billings')}`);
 set('Operating cash flow',`${ref('Customer cash receipts')}-${ref('Core purchase cash')}-${ref('Shipped devices')}*${ref('Other variable / unit')}-${ref('Service cost')}-${ref('Fixed operating pay')}-${ref('Other overhead')}-${ref('Pilot expense')}`);
 set('Contribution financing',i===0?a('Initial contribution funding'):'0');set('Net cash flow',`${ref('Operating cash flow')}+${ref('Contribution financing')}`);set('Cumulative cash before extra funding',`${ref('Net cash flow')}+${i===0?'0':prev('Cumulative cash before extra funding')}`);
 set('Required extra funding balance',`MAX(0,-${ref('Cumulative cash before extra funding')})`);set('Operating contribution / unit',`${ref('Net unit price')}-${ref('Core cost / unit')}-${ref('Other variable / unit')}`);
 set('Device-only break-even / month',`IF(${ref('Operating contribution / unit')}<=0,"No finite break-even",ROUNDUP((${ref('Fixed operating pay')}+${ref('Other overhead')})/${ref('Operating contribution / unit')},0))`);
 set('Cumulative pretax result',`${ref('Pretax result')}+${i===0?'0':prev('Cumulative pretax result')}`);
 set('Deferred service revenue',`${ref('Service billings')}-${ref('Service revenue')}+${i===0?'0':prev('Deferred service revenue')}`);set('Cash after required financing',`MAX(0,${ref('Cumulative cash before extra funding')})`);
 set('Cumulative received financing',`${ref('Contribution financing')}+${i===0?'0':prev('Cumulative received financing')}`);
 set('Balance-sheet difference',`${ref('Cash after required financing')}+${ref('Receivables closing')}+${ref('Inventory value closing')}-${ref('Deferred service revenue')}-${ref('Required extra funding balance')}-${ref('Cumulative received financing')}-${ref('Cumulative pretax result')}`);
 set('Produced devices',`${ref('Shipped devices')}+${ref('Inventory units closing')}-${i===0?'0':prev('Inventory units closing')}`);set('Production over capacity',`MAX(0,${ref('Produced devices')}-${ref('Capacity devices')})`);
 set('Assembly hours used',`${ref('Produced devices')}*${a('Assembly hours / device')}`);set('Support hours used',`${ref('Active contracts')}*${a('Support hours / account / year')}/12`);set('Fixed operating hours',a('Fixed operating hours / month'));set('Paid operations FTE',`${ref('Fixed operating hours')}/160`);
 set('Cumulative operating cash',`${ref('Operating cash flow')}+${i===0?'0':prev('Cumulative operating cash')}`);set('Peak extra funding needed',`MAX(${mc['Required extra funding balance']}$8:${ref('Required extra funding balance')})`);
 set('Pilot reserve floor',`Assumptions!D${dr['Pilot reserve held']}`);set('Free cash after reserve',`${ref('Cumulative cash before extra funding')}-${ref('Pilot reserve floor')}`);set('Positive operating cash month',`IF(${ref('Operating cash flow')}>0,1,0)`);
}
sh.Monthly.getRange('C8:C127').setNumberFormat('mmm-yy');sh.Monthly.getRange('O8:R127').setNumberFormat('0.00');sh.Monthly.getRange('AS8:AX127').setNumberFormat('0.00');
// Annual outputs link to the same monthly build; all cases use this one build.
note('Summary',5,'Illustrative scenarios, not a business forecast. No customer demand or funding commitment is established. INR, constant FY 2027–28 purchasing power.');
note('Summary',7,'Pre-tax model. INR 4,500 is hypothetical net retained device revenue; actual GST/credit and funding terms are unresolved. Pilot units are R&D, not sales.');
for(let y=0;y<10;y++)v('Summary',`${col(y+4)}9`,`FY ${2027+y}–${String(2028+y).slice(2)}`);
const sums=[[10,'Devices sold','Shipped devices'],[11,'Device revenue','Device revenue'],[12,'Recognized service revenue','Service revenue'],[13,'Total revenue','Total revenue'],[14,'Device variable costs','Device variable cost'],[15,'Service delivery costs','Service cost'],[16,'Fixed operating pay','Fixed operating pay'],[17,'Other overhead','Other overhead'],[18,'Pilot R&D expense','Pilot expense'],[19,'Pre-tax result','Pretax result'],[21,'Operating cash flow','Operating cash flow'],[22,'Contribution financing','Contribution financing']];
for(const [r,label,m]of sums){v('Summary',`C${r}`,label);for(let y=0;y<10;y++){let st=8+y*12,en=st+11;f('Summary',`${col(y+4)}${r}`,`=SUM(Monthly!${mc[m]}${st}:${mc[m]}${en})`);}}
const ends=[[23,'Closing cash before extra funding','Cumulative cash before extra funding'],[24,'Peak additional funding needed','Peak extra funding needed'],[25,'Closing service obligation','Deferred service revenue'],[26,'Closing receivables','Receivables closing'],[27,'Closing inventory','Inventory value closing']];
for(const [r,l,m]of ends){v('Summary',`C${r}`,l);for(let y=0;y<10;y++)f('Summary',`${col(y+4)}${r}`,`=Monthly!${mc[m]}${19+12*y}`);}
for(let r of [13,19,23,24])sh.Summary.getRange(`C${r}:M${r}`).format={fill:'#E8EEF7',font:{name:'Arial',size:10,bold:true,color:'#172B4D'},borders:{bottom:{style:'thin',color:'#8597AC'}}};
for(const r of [19,23])sh.Summary.getRange(`D${r}:M${r}`).conditionalFormats.add('cellIs',{operator:'lessThan',formula:0,format:{font:{color:'#9C2222'},fill:'#FCE9E7'}});
// Chart helper is a labeled annual table beneath the narrative, not a second calculation.
sh.Summary.getRange('C48:F48').values=[['Fiscal year','Revenue','Pre-tax result','Cash before extra funding']];
for(let y=0;y<10;y++){let r=49+y,c=col(y+4);f('Summary',`C${r}`,`=${c}9`);f('Summary',`D${r}`,`=${c}13`);f('Summary',`E${r}`,`=${c}19`);f('Summary',`F${r}`,`=${c}23`);}
const chart=sh.Summary.charts.add('line',sh.Summary.getRange('C48:E58'));chart.title='Revenue and pre-tax result (INR)';chart.setPosition('C30','H43');chart.series.items[0].line={fill:'#2B5F93',width:2};chart.series.items[1].line={fill:'#B14740',width:2};
const cash=sh.Summary.charts.add('line',[sh.Summary.getRange('C48:C58'),sh.Summary.getRange('F48:F58')]);cash.title='Cash before additional funding (INR)';cash.setPosition('I30','N43');cash.series.items[0].line={fill:'#B14740',width:2};
for(let ch of [chart,cash]){ch.titleTextStyle.fontSize=12;ch.titleTextStyle.typeface='Arial';ch.xAxis={axisType:'textAxis',textStyle:{fontSize:9,typeface:'Arial'}};ch.yAxis={numberFormatCode:'#,##0',numberFormatSourceLinked:false,textStyle:{fontSize:9,typeface:'Arial'}};}
note('Summary',44,'Additional funding is an unmet requirement, not secured cash. Negative balances show infeasibility without new funds, lower costs or stronger validated sales.');
note('Summary',46,'Service billed annually upfront, recognized over 12 months. Terminal receivables and service obligations remain visible; model is not a liquidation valuation.');
// Template mapping and corrected break-even calculator.
band('Template bridge',7,'Original teacher template mapping','H');
sh['Template bridge'].getRange('C8:F8').values=[['Original cell / topic','Model location','Correction / treatment','Status']];
const map=[['C6:C11 startup','Monthly pilot expense','Setup expensed; engineering pilot separate from sale inventory','Scenario'],['F6:F11 fixed expenses','Monthly fixed pay + overhead','Hours × rate, plus nonpay overhead; no duplicate 30,000','Scenario'],['K6:K11 variable inputs','Unit costs + Monthly','Full allowance breakdown, not materials only','Evidence + assumptions'],['C15:C20 customers/sales','Assumptions + Monthly shipments','Monthly B2B units, not smoothie daily customers','Unvalidated'],['K16:K19 sales/other revenue','Monthly device/service schedules','Annual service cash separate from recognized revenue','Scenario'],['K21 profit','Monthly pre-tax result','Includes service costs, pilot expense and all model opex','Pre-tax'],['K22 break-even','Calculator below','Replaces chained comparison with rounded positive-contribution formula','Corrected method'],['K23 payback','Cumulative operating cash','No constant-profit shortcut; no payback if never recovered','Scenario'],['K24 contribution','Monthly contribution per unit','Net retained price less core and other variable costs','Scenario'],['10-year requirement','Summary and 120 months','Apr 2027–Mar 2037; fiscal years as user confirmed','User confirmed']];
sh['Template bridge'].getRange('C9:F18').values=map;sh['Template bridge'].getRange('C8:F18').format.wrapText=true;sh['Template bridge'].getRange('C9:F18').format.rowHeight=43;sh['Template bridge'].getRange('D8:F18').format.columnWidth=37;
band('Template bridge',21,'First operating-year unit break-even','F');
const calcs=[[22,'Net retained device price',`Assumptions!D${dr['Net retained device price']}`],[23,'Variable cost / device',`Assumptions!D${dr['Core build + inbound / device']}+Assumptions!D${dr['Fulfillment + reserve / sale']}`],[24,'Contribution / device','E22-E23'],[25,'Monthly fixed expenses',`Assumptions!D${dr['Fixed operating hours / month']}*Assumptions!D${dr['Fixed operating hourly pay']}+Assumptions!D${dr['Nonpay overhead / month']}`],[26,'Break-even sales / month','IF(E24<=0,"No finite break-even",ROUNDUP(E25/E24,0))']];for(let [r,l,x]of calcs){v('Template bridge',`C${r}`,l);f('Template bridge',`E${r}`,'='+x);}
note('Template bridge',28,'Break-even excludes service contribution, pilot/startup outlay and working-capital timing. It is not a required pilot batch or a demand estimate.');
note('Template bridge',30,'Original BASIC financial workbook remains unchanged. Its K22 chained-comparison defect and missing links are replaced by the mapped formulas here.');
note('Template bridge',32,'Accounting scope: no fixed-asset capitalization, depreciation, debt, income-tax or dividend schedules. Current pilot setup is expensed; actual obligations require evidence.');
note('Template bridge',34,'Source register: research/sources.md SRC-008/009 template references; SRC-029 component listings; ASM-005–007 costs, ASM-011–014 proposed scenarios.');
// Terminal diagnostics; no business formula depends on this sheet.
band('Checks',7,'Reconciliations and scenario limits','G');
const checks=[['Maximum balance-sheet difference',`=MAX(Monthly!${mc['Balance-sheet difference']}8:${mc['Balance-sheet difference']}127)`],['Minimum balance-sheet difference',`=MIN(Monthly!${mc['Balance-sheet difference']}8:${mc['Balance-sheet difference']}127)`],['Annual revenue reconciliation',`=SUM(Summary!D13:M13)-SUM(Monthly!${mc['Total revenue']}8:${mc['Total revenue']}127)`],['Service cash less revenue less closing liability',`=SUM(Monthly!${mc['Service billings']}8:${mc['Service billings']}127)-SUM(Monthly!${mc['Service revenue']}8:${mc['Service revenue']}127)-Monthly!${mc['Deferred service revenue']}127`],['Sales above annual plan',`=SUM(Monthly!${mc['Shipped devices']}8:${mc['Shipped devices']}127)-SUM(Assumptions!D10:M10)`],['Total production capacity excess',`=SUM(Monthly!${mc['Production over capacity']}8:${mc['Production over capacity']}127)`],['Pilot spending plus reserve minus proposal',`=SUM(Monthly!${mc['Pilot expense']}8:${mc['Pilot expense']}127)+Assumptions!D${dr['Pilot reserve held']}-'Unit costs'!E33`],['Peak additional funding requirement',`=MAX(Monthly!${mc['Required extra funding balance']}8:${mc['Required extra funding balance']}127)`],['Operating cash positive months',`=SUM(Monthly!${mc['Positive operating cash month']}8:${mc['Positive operating cash month']}127)`],['Operating cash recovered at horizon?',`=IF(Monthly!${mc['Cumulative operating cash']}127>=0,"Recovered by horizon","Not recovered at horizon")`]];
for(let i=0;i<checks.length;i++){v('Checks',`C${9+i}`,checks[i][0]);f('Checks',`G${9+i}`,checks[i][1]);}sh.Checks.getRange('C9:F18').format.columnWidth=18;sh.Checks.getRange('C9:F18').merge(true);sh.Checks.getRange('G9:G18').format.columnWidth=29;sh.Checks.getRange('G9:G15').setNumberFormat('0.00');sh.Checks.getRange('G9:G15').conditionalFormats.addCustom('ABS(G9)>0.01',{fill:'#FCE9E7',font:{color:'#9C2222',bold:true}});
note('Checks',21,'A zero reconciliation difference confirms arithmetic only. It does not validate sales, prices, costs, tax treatment, performance or funding.');
note('Checks',23,'One-month inventory is an illustrative stocking policy, not a supplier lead-time quote. Annual sales are capped by monthly assembly capacity.');
note('Checks',25,'Additional funding balances assume temporary financing only for balance-sheet illustration; no such facility exists. Displayed cash is conditional on obtaining it.');
note('Checks',27,'Outstanding: customer validation; actual compensation/availability; statutory tax treatment; supplier quotes; funding terms; product safety and compatibility tests.');
// Export, inspect and test scenario response with restoration.
wb.recalculate();
const tests=[];
for(let cs=1;cs<=3;cs++){v('Assumptions','D5',cs);wb.recalculate();tests.push({case:cs,summary:sh.Summary.getRange('D19:M24').values,checks:sh.Checks.getRange('G9:G18').values,breakEven:sh['Template bridge'].getRange('E26').values});}
v('Assumptions','D5',2);wb.recalculate();
const saved=sh.Assumptions.getRange('M12').values[0][0];
v('Assumptions','M12',120);wb.recalculate();const changedSales=sh.Summary.getRange('M10').values[0][0];
v('Assumptions','M12',saved);v('Assumptions','D12',null);wb.recalculate();const blankDriver=sh.Assumptions.getRange('D10').values[0][0];
v('Assumptions','D12',24);v('Assumptions','D24',3000);wb.recalculate();const noBreakEven=sh['Template bridge'].getRange('E26').values[0][0];
v('Assumptions','D24',4500);wb.recalculate();
if(changedSales!==120 || blankDriver!=='MISSING' || noBreakEven!=='No finite break-even')throw new Error('Input mutation checks failed');
console.log(JSON.stringify({changedSales,blankDriver,noBreakEven}));
await fs.writeFile(out+'/work/scenario-checks.json',JSON.stringify(tests,null,2));
const scan=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:40},summary:'formula error scan'});await fs.writeFile(out+'/work/error-scan.json',JSON.stringify(scan,null,2));
console.log(JSON.stringify({tests,scan}));
await (await SpreadsheetFile.exportXlsx(wb)).save(out+'/Cortex_Sentinel_Financial_Scenarios.xlsx');
for(let [s,range]of [['Summary','C2:N46'],['Assumptions','C2:M25'],['Monthly','C2:O17'],['Unit costs','C2:M37'],['Template bridge','C2:M34'],['Checks','C2:M27']]){const img=await wb.render({sheetName:s,range,scale:1.3});await fs.writeFile(out+'/work/'+s.replaceAll(' ','_')+'.png',new Uint8Array(await img.arrayBuffer()));}
console.log('EXPORTED '+out+'/Cortex_Sentinel_Financial_Scenarios.xlsx');
