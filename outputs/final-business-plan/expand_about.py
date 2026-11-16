from docx import Document
from pathlib import Path
p=Path(__file__).parent
d=Document(p/'Cortex_Sentinel_Business_Plan_2026.docx')
ps=d.paragraphs
ps[27].text='We are a team of five computer-science students from BML Munjal University, led by Kavyansh Kumar Baghel. Through CorteX, our Cortex Sentinel project, we are developing a hardware-assisted security system for sensitive Windows workstations. The project combines fingerprint authentication with checks on the workstation environment, real-time monitoring and visible device-status feedback to support more controlled access to business credentials.'
ps[28].text='Our initial focus is accounting and finance SMEs in Gurugram, where confidential client and financial information makes workstation access an important concern. We aim to develop an affordable, practical demonstrator while learning how users work, what installation permissions they need and which security controls they already use. Our approach brings together ESP32 hardware, a Python-based Windows application and a structured process for testing, recovery and customer support.'
from docx.oxml import OxmlElement
from docx.text.paragraph import Paragraph
el=OxmlElement('w:p');ps[28]._p.addnext(el);new=Paragraph(el,ps[28]._parent)
new.text='We plan to build two engineering units first, followed by eight more after documented acceptance checks. The proposed teacher-funded pilot will help us evaluate reliability, ease of use and complete delivery costs before considering commercial sales. Our business plan sets out the team’s responsibilities, target market, development milestones and expected financial outcomes, with future expansion guided by technical results, customer feedback and sustainable unit economics.'
d.save(p/'Cortex_Sentinel_Business_Plan_2026.docx')
