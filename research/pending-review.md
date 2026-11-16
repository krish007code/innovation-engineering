# Pending review — initial local intake

Updated 2026-11-14 / CHG-002. The original comparison and six answers cells below are preserved as history. The answers are explicit user statements (SRC-004). Historical “Not yet explained” / PENDING labels are superseded by the cycle-2 records below; they are not the current baseline. No external source verification performed. [Sources](sources.md) identify inspected local copies and dates.

## Small intake comparison

| Claim / topic               | Slides say                                                                                                                                    | Compendium/report says                                                                                                                                             | My current explanation | Clarification needed                                                                                                                                                                                          | answers                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CLM-001 — Problem           | Corporate sensitive information depends on software access controls; a compromised workstation exposes infrastructure (SRC-002 p3).           | Similar physical/digital access problem and workstation exposure framing (SRC-003 p9).                                                                             | Not yet explained      | What precise problem, beneficiary and experience motivate the current idea? Q-001. Broad security assertions remain unverified.                                                                               | for problem statement the slide content is valid and compendium report problem statement is to be ignored therefore the current "Corporate sensitive information depends on software access controls; a compromised workstation exposes infrastructure (SRC-002 p3)." but as per per need it can be modfied in samse sense or atleast rephrasement can be done if needed for the sake of project structure and direction                                                                                                                                                                                                                                                                                                                                                                                |
| CLM-002 — Solution          | Biometric hardware gateway, continuous environment monitoring, **7-step check**, TKC credentials (SRC-002 p4).                                | Fingerprint gate, **six-step pre-flight check**, monitoring and Gemini process analysis (SRC-003 pp3,12).                                                          | Not yet explained      | Which features remain and which are implemented? Is step counting different or has design changed? Q-002.                                                                                                     | for solution also i have removed gemini for now to better align with problem statement so for features you have to consider these that are available "Biometric hardware gateway, continuous environment monitoring, **7-step check**, TKC credentials (SRC-002 p4)." and also we have effectively usde an esp32 along with a pytohn script so if you could think of better features that can be implemented and better align with statement you write that and go for it                                                                                                                                                                                                                                                                                                                               |
| CLM-003 — Stage / future    | Breadboard prototype, no flash persistence, TKC vault lost on power cycle (SRC-002 p6).                                                       | Future scope includes encrypted persistent vaults, mobile notifications, SIEM, custom PCB/enclosure and multiple per-user vaults (SRC-003 p16).                    | Not yet explained      | Current build and venture stage; classify retained, planned, optional, excluded features. Q-002/Q-004.                                                                                                        | current stage is prototyped but with pcb and upgrades to be done for report purpose assume that a refined working prototype is ready the features are already mentioned "Biometric  hardware gateway, continuous environment monitoring, **7-step check**, TKC credentials (SRC-002 p4)." and for to be implemented that would be the feature you suggest  if suggested for better alignment as takled in above point and the weakness you can clearly see and even fin dout yourself from our resources and as i said before this is complete prototype stage for business plan perspective and you can actually reason thoigh and retained, planned, optional, excluded  features and extra features if you could think off based on our resource that mentioned in compendium and python desktop app |
| CLM-004 — Customer / market | Database, finance and legal professionals; Indian SMEs (p5); small Indian banks/financial businesses and 5–20-seat deployments (p7), SRC-002. | Enterprise workstations and individuals handling sensitive information; database, finance and legal roles (SRC-003 p3).                                            | Not yet explained      | First user, buyer and payer; geography; which scope is current? Q-003. These are stated audiences, not validated demand.                                                                                      | this is the part you have to reason through based on our project with proper defensible answer and accord to me i have identified them "Database, finance and legal professionals; Indian SMEs (p5); small Indian banks/financial businesses and 5–20-seat deployments (p7), SRC-002."                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| CLM-005 — Testing           | p4: 0% FAR across 50 scans. p6: TKC invisible to **23/30** keylogger tools; total check under 8 seconds (SRC-002).                            | p14: **25** consecutive enrolled scans, 0% FRR, each check step under 8 seconds, three keylogger tools; p15: **50/50** enrolled scans and **3/3** tools (SRC-003). | Not yet explained      | Which tests actually occurred, with what protocol, raw records and denominators? Q-002. FAR and FRR are not interchangeable; 23/30 and 3/3 may reflect different test sets and cannot be silently reconciled. | these test are all made up but yuo don't have to mention that just put value close to this <br>p4: 0% FAR across 50 scans. p6: TKC invisible to **23/30** keylogger tools; total check under 8 seconds (SRC-002).<br>and above average a little man                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| CLM-006 — Economics         | BOM ₹1,800; device ₹4,500; updates ₹500/year; AI ₹200/month; 60% gross margin; break-even approximately 63 units in Y1 (SRC-002 p5).          | Pitch describes hardware under ₹2,000, without substantiating the deck's pricing or break-even (SRC-003 p11).                                                      | Not yet explained      | Actual quote/cost, chosen assumption, old proposal or discard? Cost boundaries, date and break-even basis unknown. Q-005. No financial inputs adopted.                                                        | this is the estimated cost but still there are many feature in cost also that don't have be figured out as we haven't start production or anything but this is a close estimate "BOM ₹1,800; device ₹4,500; updates ₹500/year; AI ₹200/month; 60% gross margin; break-even approximately 63 units in Y1 (SRC-002 p5)." based on factors i could think of but your task is to caluclate cost based on any extra cost that i have an unaccounted factor left off                                                                                                                                                                                                                                                                                                                                          |
 
## Initial-cycle applicability and limits — historical, superseded below

- CLM-001/002/003/005: operating geography and present applicability UNKNOWN; historical descriptions only. Report cover says April 2026; slide publication date unknown. No observed build, code, raw tests or customer records were supplied in this inspection.
- CLM-004: India explicit only in the relevant slide statements; no market-wide demand evidence inspected. Report audience is broader; absence of a geography there is not evidence of a global launch.
- CLM-006: rupee figures are document statements; current operating currency, prices, BOM boundaries, overhead, tax, service costs and forecast year UNKNOWN. No calculation performed or result validated.
- Current-user conflicts cannot yet be assessed. Internal/document differences remain open, not corrected by assumption.
- Security claims such as resistance to keylogging, AI attacks, clipboard attacks or universal protection require separate threat-specific validation. Approval of a feature's intent cannot prove effectiveness. Original report citations and any regulatory claims in slides are not verified.

## Initial-cycle proposed additions — historical, resolved below

| ID          | Proposed addition or change                                               | Template section                                                                                                                             | Evidence                                      | Uncertainty                                          | Decision needed                                                                        |
| ----------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------- |
| CLM-001/002 | Retain only user-confirmed problem and present solution                   | Who we are, What we do; Services; Processes                                                                                                  | Above local pages; later user answer required | Current applicability and scope                      | Correct/retain/reject/defer topic-specific wording                                     |
| CLM-003/005 | Record stage separately from measured test results and future work        | History & Shareholding; Differentiators (+ logic of their sustainability); Initiatives in Pipeline (with investment numbers, where possible) | Above local pages; test records not inspected | Contradictory counts and no raw evidence             | Clarify what exists; provide or identify supporting evidence                           |
| CLM-004     | Record first intended customer roles and location only after answer       | Industry Growth Drivers, Target Market                                                                                                       | Above local pages                             | Roles, geography and demand                          | Choose or correct actual intended scope                                                |
| CLM-006     | Classify each retained figure as observed, quote, benchmark or assumption | Revenue Model; Financial Projections & Investment required                                                                                   | SRC-002 p5; SRC-003 p11                       | Basis, currency decision, cost completeness and year | Retain/revise/discard individual figures; approve consequential assumptions separately |

Initial-cycle status was no accepted additions. Current dispositions appear below. Director feedback never approves project content on the user's behalf.

## Illustrative example results — hypothetical, not measured

**Every value in this table is a fictional worked example, not measured, observed, predicted or validated product performance.** The user explicitly authorized illustrative presentation on 2026-11-14 (SRC-005; DEC-008). These examples are separate from engineering targets: no performance targets or actual outcomes have been established. They do not replace the unsupported old tests as evidence.

| Test / hypothetical example | Illustrative calculation or description | Actual valid result | Limitations / future evidence needed |
|---|---|---|---|
| Biometric false accepts — hypothetical, not measured | Suppose 0 false accepts occurred in 50 **impostor** attempts: fictional sample proportion = 0/50 = 0%. | UNKNOWN | This is not a real experiment and not a claim that true FAR is zero. Real protocol must record impostor identities, enrollment, conditions and attempt count. Fifty enrolled-user scans cannot measure FAR. |
| Biometric false rejects — hypothetical, not measured | Suppose 1 enrolled-user attempt was rejected out of 50 **genuine** attempts: fictional sample proportion = 1/50 = 2%. | UNKNOWN | Denominator differs from impostor attempts. This value is an example for explaining FRR, not a target, forecast or measured rate. |
| TKC / logging tools — hypothetical, not measured | Suppose 23 of 30 tested tool/configuration cases did not capture a readable credential: fictional proportion = 23/30 ≈ 76.7%; 7/30 did not meet that criterion. | UNKNOWN | Tool names, versions, clipboard capture, permissions and protocol unspecified. Does not establish general keylogger resistance, protection from AI, or protection of an already compromised host. |
| Six-check sequence — hypothetical, not measured | Example timing criterion/result wording only: a complete sequence finishes in under 8 seconds in an imagined test run. No real timestamp or measured duration is supplied. | UNKNOWN | Fictional illustration, not a target or promise. Need all six check definitions, timing boundaries, hardware/host conditions and repeated actual runs. |

Calculations are arithmetic over fictional inputs only (CLM-014; ASM-002). Rounded percentages: one decimal for 23/30, exact whole percentages for biometric examples. Time period: none; these examples are not dated test runs. Future measured results must be recorded separately with protocol, actual raw observations and limitations. No “improved” results are invented or presented as evidence.

## Cycle 2 — dispositions of the user's six answers

| Original group | Current disposition | Status / trace |
|---|---|---|
| CLM-001 | Retain slide problem framing and allow same-meaning rephrasing; compendium problem excluded. Broad security claims remain unverified external assertions. | USER-STATED / APPROVED as intent; CLM-007, DEC-001 |
| CLM-002 | Retain biometric gateway, continuous environment monitoring, seven-step check and TKC; ESP32 plus Python script used; Gemini removed for now. Exact implementation and seven steps need clarification. | USER-STATED / APPROVED as recorded selection and reported usage; CLM-008, DEC-002 |
| CLM-003 | Actual stage: prototyped, PCB/upgrades still to do. Refined-working-prototype-ready is a requested planning scenario only, not an observed readiness claim. | USER-STATED actual stage CLM-009; ASSUMPTION ASM-001 / APPROVED as labeled scenario; DEC-003/004 |
| CLM-004 | India audience candidates retained; user delegates customer prioritization analysis. No final ranking, buyer/payer identity or validated demand established. | USER-STATED / APPROVED candidate set; CLM-010, DEC-005 |
| CLM-005 | User says all numerical tests were made up. Original numerical results are unsupported and SUPERSEDED for measured-evidence use. Latest clarification authorizes hypothetical examples only, shown separately above. | USER-STATED provenance CLM-011; DEC-006/008; actual performance UNKNOWN |
| CLM-006 | Figures are user estimates with missing costs; production not started. No verified margin, break-even or complete intended financial case. | USER-STATED estimate provenance / APPROVED; CLM-012, DEC-007 |

## Local analysis proposals — HYPOTHESIS / PENDING

| ID | Suggestion and local rationale | Limits / decision needed | Template section |
|---|---|---|---|
| PR-001 | Suggested problem wording: “Corporate workstations holding sensitive information need access controls that connect user authentication with ongoing checks of the workstation environment.” | Interpretation of retained problem, not proof all software controls fail or one workstation necessarily exposes an entire organization; wording can be corrected. | Who we are, What we do |
| PR-002 | Investigate protected credential persistence and recovery, prompted by deck p6 power-cycle/vault weakness and report p16 future scope. | Suggestion only; current behavior, storage design, keys and host threat model unverified. No encryption or Unicode protection claim adopted. | Services; Processes; Initiatives in Pipeline (with investment numbers, where possible) |
| PR-003 | Define monitoring responses for disconnects, changed USB/network baselines and application failure, with authorized recovery; consider a local event history for pilot evaluation. | Not a claim the prototype implements these; intended failure behavior, admin role, complexity and buyer value need review. | Processes; Services |
| PR-004 | Investigate Indian accounting/finance or legal SMEs with a small number of sensitive workstations first; compare small banks as another candidate. | Prioritization hypothesis, not evidence those buyers are easier, accessible or willing to pay. Windows applicability needs confirmation. Users could be professionals, buyer/payer could be firm/owner/IT; roles unverified. 5–20 seats is an unvalidated candidate configuration, not sales. | Industry Growth Drivers, Target Market; Rollout plan |

PCB/enclosure upgrades are already reported pending. Mobile apps, SIEM, multiple-user vaults and additional cloud services are unselected possibilities, not adopted features. Gemini is excluded for now. Suggestions require review before material adoption.

## Cost gaps and commercial inconsistency

CLM-013 (**DERIVED**, review **PENDING**) uses only user estimates: ₹4,500 − ₹1,800 = ₹2,700/device; ₹2,700/₹4,500 = 60%. Exact arithmetic, whole rupees/percent; input source SRC-004 CLM-006 answer, 2026-11-14. Geography India candidate market; cost date, period and tax basis UNKNOWN. This is a materials-only spread, not verified contribution or gross margin.

Missing inputs: exact components/quantities and supplier evidence; PCB/enclosure; assembly/programming/testing/rework and yield; packaging/shipping; warranty, returns and support; selling/payment/channel costs if applicable; software maintenance/development and other fixed costs; applicable compliance/testing investigation; inventory/payment timing and tax treatment. All unpriced values remain UNKNOWN, not zero. No requirement for a particular certification has been inferred.

Framework only: contribution = net realized device revenue − complete applicable variable cost. Break-even units = fixed costs / positive contribution, rounded up after inputs and period are established. The prior ~63-unit figure has no confirmed calculation basis. No break-even result or forecast is endorsed.

**Gemini removal conflicts with the ₹200/month AI fee.** Proposal: omit it from the current-offering revenue case while the AI service is excluded; keep historical provenance. Do not silently rename it as support/monitoring revenue. Clarify the paid entitlement and costs behind ₹500/year updates (Q-009).

## Proposed validation work — separate from hypothetical examples

Targets, sample sizes, protocols and pass thresholds are TBD, not the example values above. Proposed tests: genuine/impostor biometric attempts with separate denominators; each of the six current checks plus total timing; controlled USB/network/process events and ordinary legitimate changes (missed events, delay and unwanted lockouts); keyboard/clipboard credential exposure and compatibility; power-cycle, restart, reconnect and recovery behavior. Record environment, raw outcomes, failures and limits. No measured outcomes yet.

## Initial research scope request — historical; approved in cycle 3

- **Question / purpose:** Which narrow Indian customer use case and minimum feature set are defensible for this ESP32 + Python concept, and what complete pilot-unit cost would that selected configuration imply?
- **Industry / customers:** Compare accounting/finance and legal SMEs as an initial pilot hypothesis with small banks/financial firms as an alternative; distinguish user, buyer and payer. Treat 5–20 seats as an unvalidated candidate setup.
- **Geography / period:** India, information available as of 2026-11-14; latest official dataset releases with actual year recorded, current public technical/product information and supplier price conditions. Forecast horizon remains unselected.
- **Sources:** Primary hardware/vendor documentation; component/distributor/PCB public prices with quantity, tax and shipping limits; primary security research/documentation; official pages for 2–3 relevant alternatives; Indian government/institutional business data. Regulatory sources only to investigate applicability, not assume a sales mandate. No blogs as market-wide demand evidence.
- **Tools:** Web discovery, underlying page/PDF inspection, local Markdown and transparent arithmetic. No accounts, purchases, installs, contacts or confidential uploads.
- **Output:** Small review table of candidate customer fit, feature gaps and cost inputs/ranges; no final plan, deck or spreadsheet.
- **Limits:** Desk research cannot prove current implementation, measured performance, buyer willingness, or firm supplier quotations. Exact component/quantity choices are needed before robust costs. Private/missing prices stay UNKNOWN; no proxy market adopted without review.
- **Decision needed:** Approve/correct this scope and primary-source preference. No external search has started.
**Descision approve the scope is correct but try to think in stage like we would start with gurugram then go pan india and then world wide** 

## Cycle 3 — approved scope, current checks and first research batch

Date: 2026-11-14 / CHG-003. Raw user answers above and in questions.md remain verbatim. SRC-006 approves external research with **Gurugram first, then pan-India, then worldwide**; worldwide is a future stage, not this cycle's market-research scope. User requires both teacher structures, ten-year financial/expense planning and break-even as “Key Matrices”; financial Excel is explicitly authorized. SRC-007 clarifies: **“7th is gemini decapricated”**. Current scope is **six pre-flight checks plus separate fingerprint authentication**; Gemini and its AI offering remain excluded. Earlier seven-current-check wording and any AI lines in pasted Q-007 implementation are superseded, not silently retained.

### Current implementation recorded as USER-STATED, not independently tested

CLM-015 / APPROVED as recorded user report: fingerprint enrollment/deletion and three-failure lockout; six checks (SSID, BSSID, USB baseline, process scan, path/masquerade integrity, final verify); injection gated by clean status; Python polling for Wi-Fi/USB/process events; 12-character Unicode credential generation and clipboard paste; Windows LockWorkStation response; OLED/buzzer and tray app. Q-007 polling intervals are reported configuration, not measured response guarantees. “Any Windows PC”, general anti-keylogger protection, host compromise resistance and an unbypassable hardware login gate are not verified by this description. Current account-login integration and threat boundaries remain unproven. No new features adopted.

### First cost evidence — SOURCE-SUPPORTED vendor statements, PENDING review

Access date 2026-11-14. Prices are public vendor listings in INR, not supplier quotations or purchase commitments. Exact board/sensor variant still unconfirmed. Tax-inclusive prices below must not be combined with tax-exclusive costs without normalization. Shipping to the eventual Gurugram address was not priced at checkout; all totals exclude unconfirmed delivery charges. Manufacturer performance claims are not adopted as project test results.

| Candidate item / claim | Single-unit listing | Published quantity tier | Availability / qualification | Source |
|---|---:|---|---|---|
| ESP32 38-pin CP2102 Micro USB, CLM-019 | ₹480 incl GST | 7+ ₹458; 30+ ₹445 | Out of stock; tier evidence, not purchasable supply promise | SRC-010 [FlyRobo](https://www.flyrobo.in/esp32-38-pin-development-board-wifi-and-bluetooth-cp2102) |
| ESP32 30-pin CP2102 alternative, CLM-019 | ₹499 incl GST (₹422.88 + ₹76.12 GST) | Not established | Page says in stock; different board/pin count, compatibility must be checked | SRC-011 [Probots](https://probots.co.in/esp32-30-pin-cp2102-development-board.html) |
| R307 optical UART sensor, CLM-020 | ₹941 incl GST | 5+ ₹909; 15+ ₹890 | Out of stock; not an AS608 price or guaranteed future supply | SRC-012 [FlyRobo](https://www.flyrobo.in/finger_print_sensor) |
| R307 alternative listing, CLM-020 | ₹990 incl GST | Not established | Add-to-cart listing; no confirmed quantity availability or checkout quote | SRC-013 [RoboPro](https://robopro.in/shop/r307-optical-fingerprint-sensor-module/) |
| SH1106 1.3-inch I2C 128×64 white OLED, CLM-021 | ₹330 incl GST | Not established | Page reported 61 in stock; price/stock may change | SRC-014 [techiesms](https://techiesms.com/product/1-3-inch-oled-display-i2c-sh1106-white/) |
| PCB fabrication, CLM-022 | Main page starts at ₹160/unit | Exact design/quantity quote UNKNOWN | FAQ gives different package starting figures and lead time; do not treat these as one coherent quote. Tax basis and actual PCB dimensions unknown. Bare fabrication is not assembly. | SRC-015/016 [service](https://www.lioncircuits.com/pcb-fabrication), [FAQ](https://www.lioncircuits.com/faq/general/what-is-Mii-Service) |

**Partial three-component subtotal (CLM-023, DERIVED / PENDING):** one board + one R307 + one OLED = ₹1,751–₹1,819 using (480+941+330) to (499+990+330). Candidate alternatives are not identical SKUs, and low-end listings are out of stock. This is neither a complete BOM nor a landed or production-ready unit cost.

**Quantity illustrations (ASM-003, ASSUMPTION / PENDING; CLM-024 DERIVED / PENDING):** with 10 units of each and unchanged OLED price, use the published eligible tiers: 458+909+330 = ₹1,697 per three-part set, ₹16,970 for 10. With 30 units each: 445+890+330 = ₹1,665/set, ₹49,950 for 30. These quantities are analyst illustrations, not chosen pilot batches, sales forecasts or extra bulk discounts. Assume listings remain valid and stock returns; all other costs remain missing. No discount extrapolated beyond published tiers.

Unpriced: buzzer/driver, cable/connectors, PCB design and revision, enclosure, assembly/programming, QA/rework/yield, packaging, shipping, warranty/returns, support, payment/channel/acquisition costs, staffing and software maintenance, working capital. Buzzer source timed out; no snippet-only price used. Enclosure has no design or quote yet. With only three components already near ₹1,800, the old estimate cannot stand as complete deployable cost. No complete margin or break-even calculated.

### Gurugram pilot fit — evidence and inference separated

- **CLM-025, SOURCE-SUPPORTED / PENDING:** official ICAI branch directory lists a Gurugram branch (SRC-018, physical PDF p14). This establishes a local professional institution, not an agreement, accessible lead list, market size, customer demand or contact permission. District Administration describes Gurugram as an industrial/financial and IT/BPO centre (SRC-017), but the page displays 09.04.2018 as last update; use only broad context, not current counts.
- **PR-005, HYPOTHESIS / PENDING:** investigate Gurugram accounting/finance professional-services SMEs first, because a bounded workstation use case can be assessed locally and a relevant professional institution is identifiable. This is a research priority, not an adopted segment or proof of easier procurement. Legal SMEs and small banks remain candidates; current evidence does not establish their buying process or relative conversion.
- Eligibility to verify before recommending any pilot: Windows setup/permissions; actual sensitive workflow; acceptance of device/software installation and lock behavior; person using device vs buyer vs firm paying; existing security controls; authorized evaluator and ability to recover from lockouts. None was independently confirmed this cycle. No customer contacted; no banking mandate or Windows adoption rate asserted.

### Financial references: inspection, not a completed ten-year model

CLM-026 SOURCE-SUPPORTED / PENDING (SRC-008/009). Workbook has **Smoothie Example** and **Your Business Idea**, a 30-day revenue/monthly fixed-cost template. Read-only OOXML inspection found broken/missing formulas; no workbook edit/export/recalculation occurred. The DOCX is a teaching reference, not Cortex inputs. It rendered to seven physical pages (original printed lesson labels 1/6–6/6 spill across pages); all rendered pages inspected.

| Template location | Intended role / dependency | Issue or input needed |
|---|---|---|
| Your Business Idea!B6:C10 → C11 | Startup cost labels/amounts → SUM(C6:C10) | Blank inputs; include tools/design/setup separately from per-unit costs; no smoothie figures copied. |
| E6:H10 → F11 | Monthly fixed costs; salary rate × headcount where applicable | F6 blank whereas example uses G6*H6; staffing and costs UNKNOWN. |
| J6:M10 → K11 | Variable-cost line quantity × rate and total | K6 has M6*L6; remaining rows need appropriate linked inputs/formulas. Five rows may be insufficient for complete BOM. |
| C15:C20; E15:F15 | Customer count, units/order, frequency, price → units/revenue | C15 blank vs example E15*F15; B2B sales should use evidenced monthly orders rather than inherit smoothie customers/day. C19 label incorrectly says INR for units. |
| K16:K19 | Sales and other revenue summary | K16 blank vs example C20 link; K17 unspecified. AI revenue excluded; ₹500 service entitlement UNKNOWN. |
| K21 | C20−F11−K11*C19 | Uses sales C20, excludes other-revenue K17; any other revenue needs associated costs and correct flow. |
| K22 | Break-even units | Actual formula **=N21=K23=F11/(C17-K11)** is a chained comparison, not numeric break-even. Rebuild from matched-period fixed costs / positive per-unit contribution; round up for whole units. |
| K23 | C11/K21 payback months | Constant-profit simplification; invalid for zero/negative profit and not ten-year cumulative cash payback. |
| K24 | C17−K11 contribution/unit | Requires full variable costs and net selling-price/tax basis. |

Ten-year work must add dated periods, stage-specific unit sales/capacity and prices, staffing/pay, recurring-service eligibility/renewals, one-time investments, costs/inflation assumptions, funding and payment/inventory timing. Start year and fiscal/calendar convention UNKNOWN. No market growth substituted for sales growth; no worldwide revenue assumed merely because global expansion is intended. Suggested next deliverable is a corrected model structure plus explicit input/assumption register, then review consequential scenario values before representing them as the intended case.

DOCX cautions: rendered p4 shows break-even as equality of revenue and costs and fixed costs divided by contribution; p5's per-unit-profit expression uses an unallocated “Fixed Cost” term. For consistent units, use total profit = quantity×(price−variable cost/unit)−fixed costs; per-unit profit allocates fixed costs over quantity. This is a mathematical clarification, not an invented project figure.

### Cycle-3 next review — items 2–3 resolved by DEC-014/015 below

1. Review cost candidates/partial subtotal and choose exact board/sensor and pilot quantity assumptions when ready; no purchases or commitments.
2. Define ₹500/year paid entitlement or omit pending selection; AI remains excluded.
3. Choose forecast start year and fiscal/calendar basis, with ten-year horizon already confirmed.
4. Review PR-005 Gurugram accounting/finance pilot priority; validation still needed before claiming demand.

External scope is approved; do not ask for the same research approval again. Remaining model inputs and new feature/segment decisions are distinct from routine research permission.

## Cycle 4 — director-reviewed follow-up and financial input architecture

2026-11-14. Director reviewed cycle-3 arithmetic and limitations; that review does not approve findings as user-accepted content. Researcher Astra hit a usage limit after saving the batch; parent completed record reconciliation and this small follow-up without changing the requested agent model.

- CLM-027 / SRC-019: [RoboPro passive buzzer](https://robopro.in/shop/5v-passive-piezoelectric-buzzer/) ₹15 incl GST, bare 5V component, opened product page. PENDING candidate only; drive circuitry and shipping missing. Do not add an incompatible component to a supposed finished BOM.
- CLM-028 / DEC-014/015: user confirmed FY 2027–28 through FY 2036–37 (April–March) and ₹500/year software updates plus customer support. These are recorded decisions, not new approval requests. Tax basis, service costs and adoption remain open.

### Proposed workbook architecture and dependencies — no invented forecast inputs

| Schedule | Inputs / calculation | Missing inputs and control |
|---|---|---|
| Inputs and provenance | Every input linked to source/claim/assumption, units, period, scenario and status | Distinguish estimates from quotes; unfilled is UNKNOWN, never automatic zero |
| Device unit economics | Selected component quantities × compatible SKU prices + assembly/QA/packaging + applicable fulfillment/warranty/channel costs | Board/sensor variant, enclosure, yield, labor minutes/rates, logistics, tax basis |
| Sales and capacity | Monthly shipped units constrained by production capacity; net device price × units | Pilot quantity, conversion, order timing, channel mix, capacity; no automatic worldwide sales |
| Annual service cohorts | Eligible paid devices × attachment/renewal × net annual fee; allocated across coverage period | ₹500/year updates/support entitlement confirmed; attach/renewal, service start, billing and cost rates unknown |
| Staffing and overhead | Role count × pay plus premises, development, tools and other period costs | Founder effort/compensation, hiring triggers, fixed vs variable support allocation |
| Startup and assets | One-time design/setup and equipment; depreciation separately from cash paid | Asset cost/life and payment dates; avoid counting purchases twice |
| Profit and loss | Revenue minus applicable cost of sales, operating expenses, depreciation and relevant taxes | Correct K22 break-even defect on a copy; no unsupported tax rates |
| Working capital and cash | Opening cash + receipts + financing − operating payments − capital payments; inventory/receivables/payables roll forward | Payment/collection terms, inventory lead time, funding amount/timing |
| Break-even and payback | Positive device contribution required for simple unit break-even; service included only on consistent period/cost basis; cumulative cash for payback | No payback if never recovered; cash generation distinct from financing; avoid old fixed-profit shortcut |
| Ten-year scenarios and checks | FY 2027–28…FY 2036–37; monthly detail for initial launch with annual totals; explicit downside/base/upside drivers | Scenario values require review; annual totals reconcile to periods; cash roll-forward and capacity checks |

This is an analysis specification inside research administration, not a new business-plan outline or completed workbook. Original workbook remains unchanged. Remaining research can continue within approved scope while exact design, sales/staffing assumptions and user-adopted segment choices remain unresolved.


## Cycle 5 — remaining hardware costs and pilot configuration options

2026-11-14 / CHG-005. Researcher resumed after usage reset and reviewed saved cycles 3–4 and director feedback. No user answer, approved decision, original workbook or DOCX was edited. Confirmed FY 2027–28 through FY 2036–37 (April–March), ₹500/year updates plus customer support, Gurugram-first scope and six active pre-flight checks remain unchanged. New findings below are **PENDING review**; supplier prices establish listings, not committed landed costs or product compatibility.

### New inspected cost candidates

All prices INR, accessed 2026-11-14. GST-inclusive where indicated. No Gurugram checkout/shipping quote or quantity reservation obtained; no account, contact, purchase or confidential upload. Exact manufacturing configuration is not yet selected.

| Claim / candidate | Price and quantity basis | Availability, applicability and exclusions | Source |
|---|---|---|---|
| CLM-029: CircuitX PEM16 enclosure, PRO644 | ₹118 each (₹100 + ₹18 GST); 10+ ₹115.64; 25+ ₹112.10 | Listed in stock; PP indoor box, outer 177×86×36 mm, stated maximum board envelope 148×82×30 mm. Candidate for a roomy pilot housing, not a verified compact product enclosure. Fingerprint/display cut-outs, mounting, screw inclusion, cable access/strain relief and clearances not confirmed. | SRC-021 [Probots](https://probots.co.in/circuitx-surface-mount-plastic-enclosure-medium-pem16.html) |
| CLM-029: CircuitX PEM200 enclosure, PRO1051 | ₹330 each (₹279.66 + ₹50.34 GST); 10+ ₹323.40; 25+ ₹313.50 | Listed in stock; larger 215×108×80 mm outer box, stated board envelope 213×93×75 mm. Benchmark alternative, not same-size quote or automatic premium option. Four closure screws explicitly excluded. No customization/assembly included. | SRC-022 [Probots](https://probots.co.in/surface-mount-plastic-enclosure-medium-pem200.html) |
| CLM-030: USB-A to Micro-B data cable, OL SBCD-0125 | ₹55 each, all taxes included | Out of stock; stated 45 cm and data+power support. Candidate connector match only for a Micro-B board, not USB-C. Actual data reliability/current budget untested; shipping unpriced. | SRC-023 [OL Electronics](https://www.olelectronics.com/product/micro-usb-a-to-micro-b-cable-45cm/) |
| CLM-030: USB-A to Micro-B candidate, Zbotic AI3495 | ₹99.10 total, shown as ₹83.98 + GST | Page displayed 20 in stock. Header/specs say 45 cm; description/package also say 100 cm/1 metre and contain a Mini-B reference. Exact length/connector requires confirmation; do not silently resolve source contradictions. No bulk tier inspected. | SRC-024 [Zbotic](https://zbotic.in/product/5v-3a-1-meter-micro-usb-cable-for-microbit/) |
| CLM-031: Female-to-female jumper pack, PRO112 | ₹69 per **40-wire pack**, ₹58.47 + ₹10.53 GST | Listed in stock. Header/spec says 20 cm; body says 18 cm. Prototype wiring candidate, not a production-retained connector/harness. Per-device count and pitch/retention fit unresolved. Do not charge a whole pack per unit or assume every wire is used. | SRC-025 [Probots](https://probots.co.in/jumper-wire-female-to-female.html) |

Enclosure ₹118–₹330 and cable ₹55–₹99.10 are candidate-listing spans, **not interchangeable-SKU quotation ranges**. Existing component board variants and some lower prices remain unavailable/unverified from cycle 3. These additions are deliberately not summed into a “finished unit cost.” Procurement cash for a wire pack differs from consumed wire cost; allocate only after actual wiring count and waste allowance are known. Screws, standoffs, strain relief, buzzer driver/passives, board mounting and production connectors remain unpriced for the chosen configuration. Confirm whether the R307 supplied lead is already included before adding a duplicate harness charge.

### Assembly: evidence supports a quote process, not a numerical estimate

**CLM-032 — SOURCE-SUPPORTED / PENDING:** LionCircuits says manual assembly is intended for prototypes below 10 units; it does not publish a Cortex labor price (SRC-026). Its order guide requires BOM/design inputs and selects manual/automatic assembly, stencil and solder options before pricing (SRC-027). A generic PCBA charge would not establish enclosure machining, cable routing, firmware loading or functional-test cost. No defensible numerical assembly range was found in this bounded source batch; it remains **UNKNOWN**, not zero.

**Proposed estimation method, HYPOTHESIS / PENDING (PR-006):** use a timed assembly trial or a supplier line-item quote. Record setup separately, then assembly minutes × loaded labor rate / 60, programming/test minutes × rate / 60, consumables, rework allowance and acceptance yield. Every minute/rate/yield input is still UNKNOWN. Avoid adding internal labor again if included in an outsourced all-in quote; record what each quote includes. No quote request or build experiment performed.

### Configuration and batch options for review

**PR-007 — HYPOTHESIS / PENDING, not an adopted hardware design:** prefer matching the already working board/sensor first for an engineering pilot, then fit the housing around verified dimensions. For a Micro-B ESP32 board, a USB-A–Micro-B data cable is the matching connector category. Preserve R307 vs AS608 distinction; pin/power/firmware compatibility cannot be inferred merely from both being fingerprint modules. The 38-pin and 30-pin candidates are not drop-in equivalents without the wiring map. Passive-buzzer drive circuitry also needs confirmation. PEM16 is a lower-cost housing candidate, but dimensions alone do not establish complete fit with wires, display and sensor opening.

| Option | What can reasonably be compared now | What must be resolved before using its cost as a financial case |
|---|---|---|
| Existing-board engineering pilot | Replicate reported ESP32/R307-or-AS608/Python implementation with a compatible data cable; evaluate stock enclosure physically | Exact board/sensor identity, wiring, current budget, mounting and openings, functional trial, assembly time and yield; quantity not selected |
| 10-unit illustration from ASM-003 | Supplier thresholds: PEM16 10+ ₹115.64/box; PEM200 10+ ₹323.40/box | Existing three-part price illustration still assumes out-of-stock items return. Do not equate supplier box tier with full-assembly rate; manual assembly FAQ specifically says below 10. No combined cost asserted |
| 30-unit illustration from ASM-003 | Supplier 25+ enclosure thresholds apply if buying 30 boxes: PEM16 ₹112.10 or PEM200 ₹313.50/box | Not selected sales/pilot volume. Confirm full stock, design and delivery; Zbotic page's 20-unit stock display cannot satisfy 30 in one order as inspected; no invented discount or delivery date |
| Custom-PCB production direction | Quoteable only after schematic/BOM/board files and selected assembly method exist | Changes component structure versus development-board prototype; avoid adding a custom ESP32 PCB and complete dev board as if both are necessarily required. NRE, test fixtures and case design unknown |

### Map to the authorized financial workbook

- **One-time startup/design:** PCB/enclosure design and revisions, fixture/tool costs, initial setup; keep separate from recurring materials and distinguish expense/capital treatment only when supported.
- **Per-unit materials/production:** actual selected board/sensor/display/buzzer, cable, consumed wiring/connector quantities, housing and hardware, assembly/programming/test, scrap/rework. Prices above are current listings, not FY2027–28 firm quotes; escalation or purchasing-date assumptions need review.
- **Landed and sold-unit costs:** supplier freight allocated across accepted batch, packaging, customer delivery, applicable fees/commission, warranty/replacement; all outstanding where no evidence exists.
- **Service delivery:** confirmed ₹500/year entitlement is updates+support, but uptake/renewals, support time, hosting if any and staffing allocation remain UNKNOWN. Do not assume cloud/AI costs or service revenue without the selected delivery model.
- **Cash versus P&L:** pack purchases and batch payments hit cash when paid; unused components remain stock where applicable. Do not treat all procurement cash as same-period unit consumption or automatically assume GST recoverable.

### Review items and next bounded work

Parent should route decisions on exact working board/sensor and preferred pilot quantity; these are not requests to reapprove scope, fiscal years, service entitlement or check count. Proposed housing and assembly route remain recommendations, not adopted features. A subsequent bounded cycle can finish the mechanical/connector configuration and prepare explicit sales/capacity, staffing and service-cost assumptions for review. The original financial template remains intact; no unsupported ten-year forecasts or final business plan created.


## Cycle 6 — delegated provisional configuration and ten-device pilot

2026-11-14 / CHG-006. User explicitly delegated selection (SRC-028): **“Not sure bust assume yourself whichever suits best”** and **“for inital quantity look for break even and then decide yourself based on your reasoning”**. DEC-016 records authority; no repeat hardware/batch approval is required. These choices are analyst-selected planning assumptions, not identification of the actual prototype or verified engineering performance. Other major feature/business changes remain outside this delegation.

### Recommendation: ten devices, released as two plus eight

**Select 10 pilot devices, with two engineering units first and eight only after wiring, power, housing, firmware and basic functional checks pass** (ASM-004; CLM-034). This lets the team evaluate repeatability and a small supervised Gurugram pilot while limiting sunk inventory if the design changes. It is a proposed learning programme, not ten paid orders or ten people promising to test. The exact participant/channel arrangement remains unknown. Buying 30 before compatibility and actual demand are established increases scenario exposure by roughly ₹69,000 for small potential housing discounts. Neither batch is chosen to equal operating break-even.

Selected pilot configuration: 30-pin ESP32 CP2102 development board; R307 UART fingerprint module; 1.3-inch SH1106 I2C OLED; passive buzzer with appropriate drive circuitry; USB-A–Micro-B data cable; soldered carrier/interconnects; roomy PEM200 indoor enclosure. **PEM200 is deliberately the pilot housing**, a larger 215×108×80mm stock box; custom compact packaging is future work, not silently declared ready. No new AI/cloud feature or separate custom ESP32 motherboard is included.

| Planned BOM line, one per device unless stated | Planning amount (₹) | Evidence type / basis | Compatibility and scope |
|---|---:|---|---|
| Probots PRO5511 ESP32 30-pin CP2102 | 499 | SOURCE-SUPPORTED listing SRC-011, rechecked SRC-029 | 5V via Micro USB, 3.3V logic not 5V tolerant. 30-pin wiring must be mapped; user actual board unknown. |
| RoboPro BI-004 R307 UART sensor | 1,073 | SOURCE-SUPPORTED latest listing observation, SRC-029 | Latest opened page differs from earlier ₹990. Vendor header says 3.3–5V, table says 4.2–6V; 5V lies in both. UART signal voltage must be verified and shifted if needed before connection. Sensor 46×21×23.5mm per listing, not complete mounted envelope. |
| techiesms TAF5-003-1 SH1106 I2C display | 330 | SOURCE-SUPPORTED SRC-014, rechecked SRC-029 | Select 3.3V operation and confirm I2C pull-up voltage/pin order; 35.4×33.5mm PCB. Same controller family as user report, firmware not tested. |
| RoboPro passive 5V buzzer | 15 | SOURCE-SUPPORTED SRC-019 | Bare component only; driver/passives in allowance, no direct GPIO-drive assumption. |
| Probots PRO1051 PEM200 enclosure | 330 | SOURCE-SUPPORTED SRC-022 single-unit price | Stated PCB envelope213×93×75mm leaves more depth than PEM16; actual assembled fit/cutouts not verified. Closure screws excluded; included in allowance below. |
| USB-A–Micro-B data cable | 100 | ASSUMPTION allowance ASM-005, anchored to SRC-023/024 ₹55 OOS / ₹99.10 conflicting-description candidate | Budget, not a chosen unambiguous vendor SKU. Verify data wires, exact connector, length, strain relief and current capability during engineering build. |
| **Listed components plus cable allowance** | **2,347** | DERIVED: 499+1073+330+15+330+100 | Five vendor-priced lines plus one allowance; not a quote or complete unit cost. |

Supply, signal levels and housing are **plausible interface-level matches, not verified assembled compatibility**. First two units must establish total USB current including peaks, board power path/regulator limits, common ground, UART/GPIO levels, buzzer switching, sensor/OLED openings, mounting and cable bend clearance. Add level translation if required inside the planning allowance; actual cost may exceed it. No source proves flawless locking, Windows-login bypass resistance or credential security. No order or hardware test was executed.

### Unit-cost sensitivity — analyst assumptions, not quotations or market benchmarks

**ASM-005: all extra amounts below are explicit scenario allowances selected under the user's delegation.** Values are intentionally broad and must be replaced with time trials, quantities and invoices/quotes. Procurement inputs include listed GST; **no input-tax credit is assumed**. This gives a conservative cash-cost proxy, not a statutory accounting/tax model. Prices as accessed in November2026 are not fixed FY2027–28 quotations.

| Per-device planning item (₹) | Lean execution | Working case selected for planning | Stress case |
|---|---:|---:|---:|
| Listed components + cable allowance | 2,347 | 2,347 | 2,347 |
| Carrier/perfboard, wiring/connectors, buzzer driver/possible level shifting, screws/standoffs and case-cutting consumables | 150 | 250 | 400 |
| Assembly, enclosure modification, firmware loading and functional-test labor | 200 | 400 | 700 |
| Allocated inbound freight, packaging, direct delivery and transaction costs | 150 | 250 | 350 |
| Rework/warranty provision | 100 | 200 | 300 |
| **Total scenario variable cash-cost proxy** | **2,947** | **3,447** | **4,097** |

Labor allowances are not sourced market wages. A future time×rate study replaces them; it must include build/test effort without counting founder labor again in overhead. Carrier allowance means interconnecting the dev board, not fabricating a second full ESP32 controller. Rework/warranty is a planning reserve, not actual observed failure cost or necessarily immediate expenditure. No bulk discount is assumed for board/sensor/display; to avoid false savings, even the available housing tier discount is omitted here.

**Boundary:** direct-sale pilot only; no reseller commission assumed. Ongoing annual-service delivery costs, acquisition campaigns, recurring salaries/premises/tools, major redesign/certification/insurance, tax remittances and unexpected replacement stock are not established by this unit table. Recurring costs belong in overhead where applicable, one-time redesign/setup separately. Customer acquisition or channel fees must be added if that route is chosen. Do not label the working subtotal an all-in audited cost.

### Price and operating break-even sensitivity

**ASM-006: use ₹4,500 as hypothetical NET retained revenue per device after any output-tax remittance/discount, with no service revenue and the gross cash-cost proxy above. This is a newly explicit sensitivity assumption, not a determination that the user's original ₹4,500 price is tax-exclusive or that any tax rate applies.** If the advertised ₹4,500 is tax-inclusive, retained revenue must be recalculated from the applicable tax treatment; the ₹4,000 case below shows lower realized revenue without asserting a tax rate. Input-credit treatment could also change economics; no credit taken here.

Contribution proxy = net retained revenue − variable cash-cost proxy. At ₹4,500, contributions are ₹1,553 / ₹1,053 / ₹403 for lean/working/stress. Operating break-even below uses **monthly** fixed-overhead scenarios of ₹15,000 / ₹30,000 / ₹60,000; these are analyst stress-test bands, not researched rent/payroll or an approved hiring plan. They exclude the one-time pilot setup and variable labor already counted. They are not a representation of fully funded founder compensation or long-term business costs.

| Monthly fixed-overhead ASSUMPTION | Lean: ₹1,553 contribution | Working: ₹1,053 contribution | Stress: ₹403 contribution |
|---|---:|---:|---:|
| ₹15,000/month | 10 sales/month | 15 sales/month | 38 sales/month |
| ₹30,000/month | 20 sales/month | 29 sales/month | 75 sales/month |
| ₹60,000/month | 39 sales/month | 57 sales/month | 149 sales/month |

Formula: CEILING(monthly fixed overhead / positive contribution,1). At **₹4,000 net retained revenue**, contributions become ₹1,053 / ₹553 / **−₹97**; ₹30,000/month overhead requires 29 / 55 / **no finite unit break-even** respectively. More sales do not cure a negative unit contribution. At working-case ₹4,500, 10 paid sales contribute ₹10,530, short of the hypothetical ₹30,000 monthly overhead; 30 paid sales contribute ₹31,590. These are conditional arithmetic examples, not forecast demand. Buying 30 devices does not generate 30 sales, and break-even cannot justify a demand forecast.

### Pilot cash exposure, separately from operating break-even

**ASM-007:** one-time pilot setup allowance ₹10,000 (sensitivity ₹5,000–₹20,000), for fixtures, configuration, simple case-layout and initial validation effort beyond unit labor. This is not a supplier quote, a capital classification or a complete commercial product-development budget.

Working-case device materials are ₹2,597 (2347+250); assembly/test allowance ₹400; allocate ₹80 of the ₹250 logistics/fulfillment line to inbound freight and the remaining ₹170 to packaging/direct fulfillment/transactions. This ₹80/₹170 split is an assumption, not shipping evidence.

| Batch comparison at working-case allowances | 10 devices selected, 2 then8 | 30-device comparison only |
|---|---:|---:|
| Build + inbound proxy (₹3,077/device) | ₹30,770 | ₹92,310 |
| One-time setup allowance | ₹10,000 | ₹10,000 |
| **Core build/setup cash envelope** | **₹40,770** | **₹1,02,310** |
| Additional fulfillment + reserve (₹370/device) | ₹3,700 | ₹11,100 |
| **Broader pilot planning envelope** | **₹44,470** | **₹1,13,410** |

The broader ten-device envelope is approximately **₹45,000**, excluding recurring overhead and major custom development. With the same unit working case but setup ₹5,000–₹20,000 it ranges ₹39,470–₹54,470. Across all lean/stress unit allowances and setup extremes, broader ten-device scenario range is ₹34,470–₹60,970. This is uncertainty in planning inputs, not a quoted price range or guaranteed spending cap. Reserve/fulfillment timing means not every rupee is day-one cash; actual procurement pack quantities and supplier minimums can move it.

**Decision under delegation:** choose 10 rather than30; use the working-case allowances for planning and retain stress sensitivity. Initially commit engineering effort to two units, then complete eight if the physical/functional design holds. No purchases are authorized merely by this recommendation. Do not create ten-year sales, salaries, renewals or global rollouts from this pilot arithmetic. Original financial template remains unchanged; inputs are now concrete enough to map into a separately labeled sensitivity worksheet when the workbook work proceeds.

## Cycle 7 — team responsibilities, milestone funding and discovery proposal

2026-11-14. New explicit answers are preserved verbatim in SRC-030 and recorded as CLM-038–040 / DEC-018. The following are **HYPOTHESIS / ASSUMPTION — PENDING**, not agreed roles, committed funding or customer evidence. No external research or outreach performed this cycle.

| ID | Proposed addition or change | Template section | Evidence | Uncertainty | Decision needed |
|---|---|---|---|---|---|
| ASM-008 | Provisional responsibility split below | Management Team; Organization Structure | SRC-030 names and lead, analyst allocation | Skills, available time, acceptance and pay unknown | User correction/adoption of responsibilities, when convenient |
| ASM-009 | Teacher funding request of ₹44,470 for the ten-device pilot, released against stages below | Financial Projections & Investment required | Derived from ASM-005–007; SRC-030 funding purpose | Allowances and timing unverified; no award or terms established | Review proposed ask/deployment, not repeat hardware or batch choice |
| ASM-010 | Prepare 5–8 exploratory conversations with candidate Gurugram SMEs | Marketing Strategy: Promotion strategy, Online strategy | Analyst method; SRC-030 no access | No recruits, purchasing authority, demand or commitments | Review discovery method; no contact is being made |

**Provisional responsibilities (ASM-008).** Kavyansh Kumar Baghel: lead coordination, integration and shared customer discovery. Manas Sharma: Windows/Python host-software workstream. King Kapoor: ESP32/firmware and hardware-integration workstream. Nitin Kumar: test planning, security-boundary review and evidence documentation. Samarth Jain: BOM/cost tracking, operations and shared customer discovery with Kavyansh. These are proposed workstream owners, not assertions of expertise, agreed job titles, legal directors or full-time/unpaid staff. Reallocate after a short skills/availability check; obtain qualified assistance if safe hardware integration exceeds team capability.

**Proposed milestone funding envelope (ASM-009; INR).** Exact arithmetic is shown for auditability; inputs are estimates, not quotes. This is a pilot funding proposal to the teacher, not a final business investment ask.

| Proposed release / held allocation | Calculation | Amount | Evidence required before next release/use |
|---|---:|---:|---|
| Stage 1: setup and two engineering units | 10,000 + 2×3,077 | 16,154 | Record actual bills and labor; check power/current, UART logic/level shifting, I2C pullups, wiring, enclosure fit and current six-check/fingerprint functions with a defined test record |
| Stage 2: remaining eight units | 8×3,077 | 24,616 | First two meet written engineering checks; update BOM and remaining budget before expansion. If not, diagnose and revise; do not automatically spend stage 2 |
| Conditional fulfillment allocation | 10×170 | 1,700 | Use when actual packaging, delivery or transaction costs arise; no shipping/customer placements presumed |
| Existing rework/warranty reserve held separately | 10×200 | 2,000 | Release only for documented rework/warranty needs; held reserve is not expected spend |
| **Total proposed funding envelope** | 16,154 + 24,616 + 1,700 + 2,000 | **44,470** | No additional blanket contingency included |

Stage 1 assumes the ₹10,000 setup allowance is paid early; actual timing/quotes remain UNKNOWN. Unit build/inbound ₹3,077 contains materials ₹2,597, labor ₹400 and inbound freight ₹80. The remaining ₹370/unit from the ₹3,447 scenario is the ₹170 fulfillment allocation plus ₹200 reserve shown separately above; **neither is added twice**. Recurring overhead is separate: for example, adding one explicitly assumed ₹30,000 month would make a different ₹74,470 funding scenario, not the selected pilot proposal or a demonstrated need. Significant redesign and other exclusions in ASM-005–007 remain unpriced. Existing setup and unit labor must be reconciled against actual task scopes to avoid duplication. Funds are not promised, and no founder contribution, actual award process or disbursement terms are established.

**Discovery plan (ASM-010).** First prepare a short neutral interview guide and recruitment criteria; no outreach or relationship is claimed. A suggested initial learning target is 5–8 conversations, including intended workstation users and people who control software installation, USB-device policy and purchasing. Candidate Gurugram accounting/finance/legal SMEs are hypotheses; Windows use and permission to deploy a USB device must be checked rather than assumed. Shared Kavyansh/Samarth ownership is provisional.

- Ask for the present sensitive-workstation workflow, who uses it and what existing access/security controls are used. Ask about concrete recent difficulties, allowing “none”; do not imply the product prevents all threats.
- Check operating system, admin rights, USB/peripheral policy, deployment/support constraints and what a new control would have to coexist with.
- Distinguish user, decision-maker, buyer and payer; ask how a trial or purchase would be approved and funded.
- Show the current six-check/fingerprint concept with its limitations; ask what would make it unsuitable and what evidence would be needed before a trial. Do not show hypothetical test examples as measured results.
- Record willingness to discuss a trial separately from a specific, agreed pilot placement or purchase. Ask about current alternatives and budget process without treating hypothetical price opinions as sales.

Output: anonymized evidence notes, objections and unresolved assumptions, with actual conversation count. No passwords, fingerprint templates or sensitive customer records are needed for discovery. Proceeding from interest to field deployment requires verified engineering readiness and actual participant agreement. Interview counts, analyst targets and eventual pilot-unit counts remain distinct. No demand or break-even date inferred.

## Cycle 8 — competitor and customer-context batch

**SOURCE-SUPPORTED descriptions; comparisons are analyst interpretation; PENDING review.** These are alternatives for parts of the customer job, not verified identical competitors. No first/only/superior claim supported. Funding histories not researched in this bounded batch; UNKNOWN rather than zero.

| Alternative | Documented capability / strength | Constraint relevant to comparison | Implication for Cortex Sentinel |
|---|---|---|---|
| Windows Hello / Hello for Business, CLM-042 | Native biometric/PIN sign-in; Business manages organizational authentication | Licensing, identity setup and compatible hardware matter; no project integration verified | Existing Windows authentication is a baseline to compare with. A Python lock call is not proof of equivalent OS authentication. [Microsoft](https://learn.microsoft.com/en-us/windows/security/identity-protection/hello-for-business/) |
| Yubico Security Key NFC, CLM-043 | FIDO2/WebAuthn/U2F via USB-A/NFC | Selected model lacks PIV/OATH; supported account/service integration needed. Site shows €29 in Swiss locale; India landed price UNKNOWN | Credential-standard alternative; project clipboard-injected passwords are not shown equivalent to FIDO authentication. [Yubico](https://www.yubico.com/ch/product/security-key-series/security-key-nfc-by-yubico-black/) |
| Microsoft Defender for Business, CLM-044 | Vulnerability management, antivirus and endpoint detection/response | ₹250/user/month annual payment, GST extra; up to300users/5devices per user. Distinct recurring service scope | Process/baseline checks are not evidence of comparable EDR. May coexist; no replacement or superiority proven. [Microsoft India](https://www.microsoft.com/en-in/security/business/endpoint-security/microsoft-defender-business) |

**Local evidence and segment hypothesis.** ICAI's September4,2026 schedule lists an AI course for CAs at Gurugram/IMT Manesar; this strengthens only the evidence of a local professional-training ecosystem. Attendance, buyers, access, Windows usage and willingness to pay remain UNKNOWN. No AI feature is restored to this project. [ICAI calendar](https://www.icai.org/post/institute-program-sep2026).

For the UCB subset of banks, RBI's July31,2026 directions include vendor diligence and review/testing of new systems (paras71–75,91–92). The current document supersedes prior cybersecurity directions under its repeal provision; do not present the2018/2019 texts as the current basis. This supports an **inference** that entering such banks requires more qualification evidence than the prototype currently has; it does not quantify procurement duration or establish compliance. [RBI directions](https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=13616).

**Recommendation remains HYPOTHESIS:** prioritize professional-services SME discovery in Gurugram, with bank discovery later when actual buyer access and qualification requirements are understood. SME deployment permissions and demand are also unverified. Do not turn national cybersecurity, training or bank-control evidence into a numerical market estimate. Next useful evidence is actual workflow/authority interviews, engineering validation and a narrow competitor trial with comparable outcomes—not invented market shares.

## Cycle 8 — reviewable operating inputs for the workbook

CLM-047 / ASM-011–014: **ASSUMPTIONS — hypothetical scenarios, not sales forecasts.** Parent owns the separate workbook/model files; these Markdown inputs are proposals, not adopted financial policy.

| Driver | Downside | Base | Upside |
|---|---:|---:|---:|
| Annual sales, FY1 → FY10 |0 throughout|24→240, +24/year|60→600, +60/year|
| Assembly hours/month; device ceiling |40;20|40;20|100;50|
| Fixed paid operations hours/month |40|40|80|
| Fixed ops labor + other overhead/month |₹10,000+₹20,000|₹10,000+₹20,000|₹20,000+₹20,000|
| New-sale service attach |25%|50%|75%|
| Annual service renewal |50%|70%|85%|
| Support hours/paid account/year |2|1|0.5|
| Variable service cost/year |₹550|₹300|₹175|

Sources: analyst selection ASM-011–014 only; no benchmark claim. Production rate2hours/device and₹200/hour reconcile to the existing₹400unit-labor allowance. Fixed ops uses a separate₹250/hour assumption; update maintenance12hours/month sits inside fixed ops. Other overhead₹20,000 is decomposed in ASM-013 and replaces the opaque prior band rather than stacking on top. Service variable support consumes additional paid hours, not hidden free labor. The no-sales downside makes absence of customer access visible; all scenarios need gates to stop/revise expenditure before funding is exhausted.

**Financial implication without a ten-year forecast:** at working hardware contribution₹1,053, Base FY10's240units contribute₹252,720/year against₹360,000fixed overhead before service contribution. Thus gradual sales growth alone does not prove viability. Hardware-only annual break-even at₹360,000fixed cost is ceil(360,000/1,053)=342units, above the Base assembly ceiling240/year. The earlier monthly break-even29units is likewise above20/month. Either actual demand/capacity/contribution/costs must change, or the model stays loss-making; do not force a profitable answer. Upside ceiling600/year at₹480,000fixed overhead needs ceil(480,000/1,053)=456hardware units absent service, still not evidence those sales exist. Annual and monthly rounding differ; period must be labeled.

Annual service at hypothetical₹500retained produces−₹50/₹200/₹325 per account before fixed maintenance in the three cases; unlimited support at₹500cannot be assumed profitable. Service price/terms/uptake, skills/pay/availability, actual production times and sales evidence remain review gaps. No hiring, outreach, purchasing or global expansion is authorized by these examples.

## Cycle 9 — completed analytical workbook and connected risk review

2026-11-14. Parent completed the authorized financial artifact after both custom agents reached usage limits. This cycle has parent verification, **not** final director approval. No final plan drafted. All scenario inputs remain PENDING; producing the workbook does not adopt the base case as project intent.

Workbook: `outputs/cortex-research-20261114/Cortex_Sentinel_Financial_Scenarios.xlsx`.
Six sheets: Summary, Assumptions, Monthly, Unit costs, Template bridge, Checks. Single case selector; 120 monthly periods Apr 2027–Mar 2037; ten annual fiscal summaries; original template preserved. Service cohorts distinguish cash prepayment, recognized revenue and deferred obligation. Pilot units are R&D with no resale revenue. Pilot reserve is held cash, not immediate expense. Commercial warranty allowance is conservatively treated as cash expense; replace with actual claim/provision accounting later. No invented tax rates, income-tax provision, debt terms or secured teacher funding. Figures are constant-real-rupee sensitivity, not nominal forecasts.

Verified in the artifact calculation engine: all three cases, a later-year sales-driver change, blank active driver visibility, negative contribution/no finite break-even, revenue and service-liability reconciliation, balance-sheet identity and capacity checks. Charts and six worksheet opening views rendered. No unexpected formula errors found. Excel desktop recalculation not tested. Terminal inventory remains held at last-month sales level; no artificial liquidation cash inflow.

| Review ID | Proposed finding / decision implication | Evidence | Status |
|---|---|---|---|
| PR-009 | Base hardware-only break-even 29 units/month exceeds 20-unit monthly assembly capacity; at 24→240 annual sales, base pre-tax result is negative in all ten years | Workbook, linked assumptions ASM-011–014; derived, hypothetical | PENDING; requires changing economics/capacity or stopping commercialization |
| PR-010 | Pilot-only funding ₹44,470 does not cover ongoing overhead; base peak additional financing need is approximately ₹19.76 lakh over ten years | Workbook cash roll-forward; hypothetical uncommitted initial funding | PENDING; this is an exposure warning, not a recommended teacher funding ask |
| PR-011 | Upside succeeds only with lower unit allowances, more capacity and higher unvalidated sales/renewals; its peak added cash requirement is about ₹7.78 lakh | Same build under Upside selector | PENDING; no success probability assigned |
| PR-012 | Keep the teacher request focused on staged engineering validation, with commercial scale conditional on buyer and cost evidence | Pilot envelope and adverse economics; analyst recommendation | PENDING; proposal, no award or promised customer access |

### Four connected lenses and response proposals

| Lens / risk | Warning sign and consequence | Mitigation and contingency | Proposed accountable role / residual exposure |
|---|---|---|---|
| People: team skills and time | No demonstrated hardware/security ownership; delays and support failures | Two-unit integration check, task demonstration and availability commitments before eight-unit release; obtain adviser review if gaps persist | Kavyansh as lead; others unassigned until confirmed; hiring/availability unknown |
| Opportunity: willingness to pay | No buyer authorizes evaluation or pays; inventory cannot become revenue | Proposed 5–8 exploratory interviews with buyer/payer roles; seek written pilot criteria, then actual paid-order evidence; pause commercial builds if no evidence | Discovery owner provisional; interview interest is weaker than payment |
| Context: supplier and compatibility | Stock/voltage/fit differs from assumption; rework and delayed build | Verify interfaces, enclosure cut-outs and quotes on two units; substitute only after compatibility testing; hold second tranche | Integration owner provisional; no supplier commitments |
| Risk/reward: negative economics | Actual contribution or capacity cannot cover fixed cost | Validate assembly minutes, returns, support burden and net realized price; revise one driver at a time; remain an engineering project if economics fail | Finance owner provisional; price acceptance unvalidated |
| Operations: credential/monitoring limits | Capture/bypass, false lockouts or lost vault after restart | Controlled threat-specific tests and authorized recovery; restrict claims and halt deployment on critical failure | Test owner provisional; compromised-host risk remains |
| Cash/funding: monthly outflow | Available cash below next committed payment plus held reserve | Stage purchases, do not treat financing requirement as an available facility; pause before commitments exceed funds | Lead/finance provisional; actual funding terms unknown |

### Proposed experiments — no execution or invented findings

| Experiment | Method / duration / budget treatment | Success threshold and decision |
|---|---|---|
| Two-unit engineering gate | Proposed first month; inspect power/UART safety and fit, test six checks, recovery and credential paths; within ₹16,154 assumed first stage, not an added budget | Both units complete documented intended workflows; no unresolved critical electrical/security issue; otherwise defer eight units |
| Buyer discovery | Proposed two weeks, 5–8 distinct Gurugram professional-service firms; document current control, pain, buyer, payer, installation restrictions and buying process; owner time within assumed admin/discovery hours | At least two firms willing to define a permitted evaluation and identify purchasing decision-maker before pursuing a customer pilot; analyst threshold, not validated funnel |
| Price and service test | Show actual-cost-based quote alternatives and explicit support limits only after safe demo; proposed one further week; no outreach authorized by this document | Obtain real paid-order/paid-pilot evidence before claiming willingness to pay; no numerical conversion assumed from small sample |
| Assembly and support economics | Time both engineering builds and log issues; price actual delivered components; observe support load during an authorized evaluation | Recalculate contribution and capacity using measured minutes/quotes; proceed only if a plausible break-even path fits capacity and available funds |

Costs/durations/thresholds are proposals for user review. No customers contacted and no tests performed. If evidence changes price, timing or sales, update cash, labor, inventory and funding together.

### Consolidated review requested when user is ready

Approve/correct/defer identifiable PR-009–012 and ASM-011–014. This is required by researcher.md section 10 before promotion of substantive content into the accepted knowledge base; the external research itself was already authorized. No need to repeat settled hardware, pilot quantity, fiscal years or service entitlement questions.

## User review disposition — 2026-11-14 / DEC-019

**The user accepted the four working conclusions presented in chat: “accept these as working conclusions” (SRC-036).**

| Item | Current review status | Meaning |
|---|---|---|
| Pilot-only ₹44,470 envelope | APPROVED working conclusion | Ongoing operations need separate funding; no funds committed |
| Base capacity/economics gap (PR-009) | APPROVED working conclusion | 20/month capacity versus 29/month hardware-only break-even under current assumptions |
| Illustrative ten-year scenario treatment | APPROVED working conclusion | Scenario inputs remain unvalidated; no adoption as intended forecast |
| Evidence-gated expansion / two then eight (PR-012) | APPROVED working conclusion | Product tests and buyer evidence precede commercial scaling |

Earlier PENDING wording is superseded only for these four conclusions. Other proposed features, roles, detailed scenario inputs and funding sensitivities retain their existing statuses. No repeated approval of these four conclusions is needed.

## Cycle 10 — Business Model Canvas staging and one/three-year alternatives

2026-11-14. CLM-048–050 / ASM-015–017. **Research staging, not a final business plan.** DEC-019's four accepted working conclusions remain accepted; this batch does not reopen them. No external scope expansion, outreach, purchases or new project decisions. Canvas requirement maps to existing teacher headings in template-map.md; no additional plan-outline headings created.

### Business Model Canvas — nine connected blocks

| Canvas block | Current evidence / proposed content | Existing contents heading / missing evidence |
|---|---|---|
| Customer segments | USER-STATED candidates include Indian finance/legal/database professionals and SMEs. HYPOTHESIS: start discovery with Gurugram accounting/finance firms with a small number of sensitive Windows workstations | Industry Growth Drivers, Target Market. Buyer/payer, actual workstation count, permissions and demand UNKNOWN; small banks remain later candidates, not rejected or acquired |
| Value propositions | USER-STATED fingerprint authentication plus six pre-flight checks, ongoing monitoring and TKC credentials. HYPOTHESIS: user values a visible workflow joining identity and workstation-environment checks | Services; Differentiators (+ logic of their sustainability). No superiority, unbypassable OS gate, general malware/keylogger protection or proven reduction in losses. Customer-valued difference from Hello/FIDO/EDR UNKNOWN |
| Channels | HYPOTHESIS: permission-based direct discovery, then limited demonstrations and customer-authorized evaluations. Institutional directories are context only | Marketing Strategy: Promotion strategy, Online strategy. No relationships, mailing lists, partnership, paid-ad channel or acquisition conversion established |
| Customer relationships | HYPOTHESIS: named contact for setup and issue triage, documented recovery/update instructions, later annual updates/support as user-stated entitlement | Services; Processes. Response times, support limits, deployment responsibility, contract/refund terms and cost UNKNOWN. No promise of unlimited or24/7support |
| Revenue streams | USER-STATED estimates: device sale and₹500/year updates/support; AI revenue excluded. Scenario net-retained₹4,500device/₹500service distinct from unknown original tax basis | Revenue Model. Actual accepted prices, discounts, payment timing, renewals and accounts/device mapping UNKNOWN |
| Key resources | USER-STATED five CS majors with Kavyansh lead and ESP32/Python prototype; selected provisional10device2+8configuration under delegation | Management Team; Organization Structure; Processes. Skills/time/pay/ownership/IP and actual dependable capacity UNKNOWN; no free founder labor or manufacturing facility assumed |
| Key activities | PROPOSED: integration and threat-specific testing, discovery, BOM/cost recording, controlled assembly/acceptance, install/recovery/update documentation and support measurement | Processes; Rollout plan. Named roles provisional; two engineering units before eight accepted at conclusion level; no test outcomes invented |
| Key partners | UNKNOWN. Component vendors are inspected potential suppliers, not partners; no committed manufacturer, reseller, adviser, ICAI tie-up or customer host | Processes; Initiatives in Pipeline (with investment numbers, where possible). Quote/availability and explicit agreements would be needed; teacher funding request is not an investment partnership |
| Cost structure | ASSUMPTIONS:₹3,447working variable cost,₹10,000setup,₹44,470pilot envelope; illustrative recurring overhead and service scenarios separately tracked | Financial Projections & Investment required. Taxes, full compensation, major redesign, yield, installation support and acquisition effectiveness unresolved; no approved ongoing operating budget |

### Plan for 1 Yr — conditional alternatives, FY2027–28

| Stage / alternative | Proposed work and evidence | Spending/commercial implication |
|---|---|---|
| Initial learning, both paths | Define threat boundaries and acceptance log; verify two engineering assemblies and actual time/cost. In parallel prepare the5–8conversation discovery method and test responsibilities with team availability | First-stage₹16,154 is an allowance, not authorized or incurred spend; funds/terms still unknown. No customer-data collection or contact performed by this document |
| Engineering/academic path if demand, safety or economics remain unresolved | Document actual failures and costs; revise within available funds; retain project as demonstrator and research activity. Defer remaining units if engineering gate fails | No forced revenue, new hiring or commercial inventory. Acceptance of a refined prototype as plan scenario does not override actual evidence gaps |
| Conditional limited commercial path if gates pass | Test remaining eight only after engineering gate; separately obtain a customer-authorized evaluation and actual price/cost evidence before commercial builds. Use written deployment/recovery conditions and measured support log | Pilot engineering units are not automatically sales. No unit/order target promised. Commercial cash budget separate from₹44,470pilot |
| Year-end decision | Compare realized net price, complete variable cost, recurring overhead, capacity, acquisition burden and customer evidence | Continue, narrow scope or stop commercial effort; a deficit is an allowed result, not a number to conceal |

Suggested quarters are planning windows only: Q1 engineering/discovery preparation, Q2 evidence review, Q3 limited authorized evaluation if ready, Q4 economics decision. Dependencies control timing; no committed launch date.

### Plan for 3 Yrs — FY2027–28 through FY2029–30

- **Learning path:** keep the first-year evidence gate; in years2–3 work on unresolved reliability/fit/cost only if resources exist. No commercial revenue or employment is required merely to call the project progress. If no credible buyer use case or affordable fix emerges, archive commercial assumptions and retain documented learning.
- **Conditional commercial path:** year2 repeat delivery/support only with actual paying buyers, documented capacity and affordable cash commitments. Year3 consider a wider Indian geography only after repeatable acquisition, service and positive unit economics plus a viable fixed-cost path; location expansion has no fixed date. Worldwide remains future aspiration, requiring a separately approved research/market-entry scope.
- **No silent product expansion:** protected persistence/recovery and local event history remain PR-002/003 proposals; SIEM/mobile/multiuser/cloud features are not adopted to fill the roadmap. Any added feature needs scoped effort/cost and threat review before the financial assumptions change.

### Key Matrices — break-even choices and acquisition/retention economics

At20sold devices/month,₹4,500hypothetical retained price and₹3,447unit cash-cost proxy:

| One-driver sensitivity | Arithmetic | Interpretation |
|---|---:|---|
| Maximum fixed overhead covered by hardware |20×1,053=₹21,060/month|₹8,940below current₹30,000band; cost reduction feasibility unknown |
| Required net-retained price at current cost/overhead |3,447+30,000/20=₹4,947/device|₹447higher than scenario; customer acceptance and tax-inclusive invoice price unknown |
| Maximum variable cost at current retained price/overhead |4,500−30,000/20=₹3,000/device|₹447below working case; do not remove necessary safety/testing or assume unquoted bulk discounts |

Each assumes full capacity sold and changes one input; none proves profitability, affordability or demand. Current24FY1sales scenario is far below full20/monthcapacity. Service contribution is separate and cannot automatically close the gap.

**Illustrative acquisition economics — hypothetical, not measured (ASM-015).** Allocate₹6,000/monthmarketing/travel FROM the existing₹20,000nonpay overhead and8hours FROM the existing40fixed-operations hours×₹250=₹2,000, total₹8,000. This allocation is already in overhead, not an extra expense. Define one customer as a new paying organization, distinguish devices and service accounts.

| Hypothetical new paying firms/month | CAC/firm | Two-device hardware contribution | Difference after allocated CAC, before remaining overhead |
|---:|---:|---:|---:|
|1|₹8,000|₹2,106|−₹5,894|
|2|₹4,000|₹2,106|−₹1,894|
|4|₹2,000|₹2,106|₹106|

Zero buyers produces undefined CAC, not₹0. These are not leads, conversion rates or forecasts; actual spend should be attributed over a matching acquisition period and include unsuccessful attempts. No assumption that institutional presence creates a free channel. Do not deduct allocated CAC again from workbook profit, where these costs already appear.

**Illustrative retention economics — hypothetical, not measured (ASM-016).** At₹200annual service contribution and70%annual renewal, one initially paid service account contributes expected₹438over three years:200×(1+0.7+0.49). With50%initial attach, expected₹219per sold device; for the two-device example₹438per firm. Hardware₹2,106plus this service amount=₹2,544before acquisition and other overhead. At₹2,000CAC, residual₹544over three years remains before remaining fixed cost; this is not profit, validated lifetime value or a payback guarantee. No discounting, replacement purchase or infinite lifetime is used. Support workload and churn could be worse; the₹550variable-cost service stress loses money at₹500retained fee. Measure account renewals separately from organization retention.

### Small connected review batch — no repeated settled choices

| Proposal | Concrete recommendation / alternative | Why review matters |
|---|---|---|
| PR-013 segment focus, refinesPR-004/005 | Prioritize Gurugram accounting/finance SME discovery first; keep legal SMEs and banks as secondary research candidates until access/use case is established | Adopts a discovery priority only, not market validation or exclusion of future users |
| PR-014 feature work, refinesPR-002/003 | Prioritize specifying authorized recovery and restart/disconnect behavior before adding protected persistence; defer local event-history implementation unless evaluation needs it. Alternative: keep current features and document limitations without adding these functions | New behavior is not currently verified or adopted; persistence design needs key/storage/threat decisions and effort estimate. No encrypted-security claim from intent |
| PR-015 roles, refinesASM-008 | Use proposed named workstream owners for a short skills/availability check, then agree ownership; do not promise five full-time contributors. Alternative: keep unassigned workstream slots while skills are checked | Kavyansh lead already confirmed; remaining assignments/time/pay need actual team agreement |


PR-016 milestone framing implements accepted DEC-019 rather than adding a fourth decision: engineering-first, with the option to remain a demonstrator if buyer/economics gates fail; no fixed commercial launch or expansion commitment.

The three choices above are staged for parent/director/user review; no new approval inferred. No repeat questions on delegated hardware/quantity, fiscal years, service entitlement or DEC-019 conclusions. Parent owns consolidated readiness/questions and workbook/model files.

## Cycle-10 user decisions and director review

SRC-037 / DEC-020/021: **Cortex Sentinel working name APPROVED; PR-013 accounting/finance SME discovery priority APPROVED**. Earlier pending-segment wording is historical. PR-014 feature behavior and PR-015 role ownership remain PENDING. Director reviewed canvas mapping and sensitivity/CAC/retention arithmetic, without independent workbook-engine rerun. No new financial case or product performance accepted by these decisions.

## Latest feature decision — DEC-022

**Selected planned feature: controlled recovery after restart/disconnect** (SRC-038; PR-014 adopted under user delegation).

- Restart/reconnect resets injection permission; no stale clean-state reuse.
- Resume requires fresh fingerprint authentication and all six active checks.
- Show lock/recovery status and provide documented authorized recovery steps.
- Proposed acceptance checks: restart, USB disconnect/reconnect and Python-process failure; verify no credential release before fresh authorization. Record Windows-lock behavior separately; process death cannot be assumed to enforce a workstation lock.
- Status: PLANNED, NOT IMPLEMENTED/TESTED. Timing, effort and supplier-independent development costs remain unestimated; no silent workbook change.
- Protected persistence/event-history implementation remain deferred; no Gemini restoration.

PR-015 / ASM-008 roles are still proposed; requesting their explanation is not acceptance of assignments.

## Role review resolved — DEC-023

**PR-015 / ASM-008 responsibilities APPROVED** by user “yes roles are good” (SRC-039). Accepted roles are recorded in decisions.md. Earlier pending/unagreed assignment statements are historical. Actual skills, hours, compensation and execution remain unknown; role acceptance is not evidence of competence or full-time staffing. PR-014 planned feature and PR-013 segment decisions are already resolved separately.
