import { useState, useEffect, useRef } from "react";

// ─── ALL PRE-WRITTEN NOTES ───────────────────────────────────────────────────
const ALL_NOTES = {
  udhr: `## Universal Declaration of Human Rights (UDHR)

The Universal Declaration of Human Rights (UDHR) is one of the most significant documents in the history of human civilization. Adopted by the United Nations General Assembly on December 10, 1948, it was the first international document to set out the fundamental rights and freedoms that every human being is entitled to, regardless of race, sex, nationality, religion, or any other status.

**Background and Adoption**
• The UDHR was created in the aftermath of World War II and the Holocaust, as the world recognized the need for a universal standard of human rights protection.
• It was drafted by a committee chaired by Eleanor Roosevelt and adopted by 48 nations, with 8 abstentions and no votes against.
• December 10 is now celebrated every year as Human Rights Day across the world.

**Structure of the UDHR**
• The UDHR consists of a Preamble and 30 Articles covering civil, political, economic, social, and cultural rights.
• Articles 1–2 establish the principles of freedom, equality, and non-discrimination.
• Articles 3–21 cover civil and political rights such as the right to life, liberty, freedom from torture, and freedom of expression.
• Articles 22–27 cover economic, social, and cultural rights such as the right to work, education, and cultural life.
• Articles 28–30 speak about the social and international order required for rights to be realized.

**Key Provisions**
• Article 1: All human beings are born free and equal in dignity and rights.
• Article 3: Everyone has the right to life, liberty, and security of person.
• Article 5: No one shall be subjected to torture or cruel, inhuman, or degrading treatment.
• Article 18: Everyone has the right to freedom of thought, conscience, and religion.
• Article 26: Everyone has the right to education.

**Significance of the UDHR**
• Although the UDHR is not legally binding, it has inspired more than 60 international human rights instruments and has become the foundation of international human rights law.
• It has influenced the constitutions and laws of many countries, including India.
• It represents the first global acknowledgement that all people everywhere have fundamental rights.

**Key Takeaway**
The UDHR is the cornerstone of international human rights law — a living document that continues to guide nations, courts, and civil society in the protection of human dignity. Its adoption in 1948 marked a turning point in history, affirming that human rights are universal, indivisible, and inalienable.`,

  rti: `## Right to Information (RTI) as a Human Right

The Right to Information (RTI) refers to the right of every citizen to access information held by public authorities. It is increasingly recognized as a fundamental human right because transparency and access to information are essential for accountability, democracy, and the protection of all other rights.

**Meaning and Concept**
• RTI means the right of people to know what their government is doing, how public money is being spent, and what decisions are being made on their behalf.
• It is based on the principle that governments are servants of the people and must be transparent and accountable.
• RTI is closely linked to freedom of expression — you cannot freely express yourself without access to information.

**RTI as a Human Right**
• The United Nations has recognized RTI as a component of freedom of expression under Article 19 of the UDHR.
• The UN Human Rights Committee has stated that freedom of expression includes the right to access information held by public bodies.
• Without RTI, citizens cannot hold governments accountable, making it a prerequisite for democracy and justice.

**RTI in India**
• India enacted the Right to Information Act in 2005, giving every citizen the right to request information from any public authority.
• Under this Act, public authorities must reply within 30 days of receiving a request.
• Each state has a State Information Commission and there is a Central Information Commission at the national level to handle appeals and complaints.
• The Act covers all constitutional bodies, government departments, public sector undertakings, and NGOs substantially funded by the government.

**Importance of RTI**
• It helps expose corruption and misuse of public funds.
• It empowers ordinary citizens to question and check the actions of government officials.
• It promotes participatory democracy where citizens are active stakeholders.
• It supports journalists, activists, and civil society organizations in their work.

**Limitations**
• Certain categories of information are exempt, such as information related to national security, cabinet deliberations, and personal privacy.
• Many citizens, especially in rural areas, are unaware of their right to use the RTI Act.

**Key Takeaway**
RTI is not just a legal tool — it is a powerful human right that transforms passive citizens into active participants in democracy. In India, the RTI Act of 2005 has become one of the most important instruments for accountability and good governance.`,

  iccpr: `## International Covenant on Civil and Political Rights (ICCPR)

The International Covenant on Civil and Political Rights (ICCPR) is a multilateral treaty adopted by the United Nations General Assembly on December 16, 1966, and entered into force on March 23, 1976. It commits its parties to respect the civil and political rights of individuals, including the right to life, freedom of religion, freedom of speech, freedom of assembly, and the right to a fair trial.

**Background**
• After the adoption of the UDHR in 1948, the UN recognized the need for legally binding instruments to enforce human rights.
• Together with the ICESCR and the UDHR, the ICCPR forms the International Bill of Human Rights.
• India ratified the ICCPR in 1979.

**Structure**
• The ICCPR has a Preamble and 53 Articles divided into 6 Parts.
• It is monitored by the Human Rights Committee, a body of 18 independent experts.
• States that ratify the ICCPR must submit regular reports to the Human Rights Committee on how rights are being implemented.

**Key Rights Protected**
• Right to life (Article 6) — No one shall be arbitrarily deprived of life.
• Freedom from torture and cruel treatment (Article 7).
• Right to liberty and security of person — No arbitrary arrest or detention (Article 9).
• Right to a fair trial and due process (Article 14).
• Freedom of thought, conscience, and religion (Article 18).
• Freedom of expression — the right to hold opinions and express them freely (Article 19).
• Right to peaceful assembly and freedom of association (Articles 21–22).
• Right to participate in public affairs and vote in genuine elections (Article 25).
• Equality before the law and equal protection without discrimination (Article 26).

**Optional Protocols**
• The First Optional Protocol allows individuals to submit complaints to the Human Rights Committee if their rights under the ICCPR have been violated.
• The Second Optional Protocol aims at the abolition of the death penalty.

**Significance**
• The ICCPR is legally binding on all states that have ratified it, unlike the UDHR which is a declaration.
• It provides a mechanism for international accountability — states can be questioned on their human rights record.
• It has been used as a basis for domestic courts in many countries to protect civil liberties.

**Key Takeaway**
The ICCPR is one of the most important legally binding human rights treaties in the world. It transforms the aspirations of the UDHR into enforceable obligations, ensuring that civil and political rights are protected not just on paper but in practice.`,

  icescr: `## International Covenant on Economic, Social and Cultural Rights (ICESCR)

The International Covenant on Economic, Social and Cultural Rights (ICESCR) is a multilateral treaty adopted by the United Nations General Assembly on December 16, 1966, and entered into force on January 3, 1976. It commits state parties to work toward the granting of economic, social, and cultural rights to individuals.

**Background**
• Like the ICCPR, the ICESCR was developed to give legal force to the economic and social rights outlined in the UDHR.
• Together with the ICCPR and the UDHR, it forms the International Bill of Human Rights.
• India ratified the ICESCR in 1979.

**Monitoring Body**
• The ICESCR is monitored by the Committee on Economic, Social and Cultural Rights (CESCR), a body of 18 independent experts.
• States must submit periodic reports to the CESCR on how rights are being implemented.

**Key Rights Protected**
• Right to work and just conditions of employment (Articles 6–7) — fair wages, safe working conditions, and equal pay for equal work.
• Right to form and join trade unions (Article 8).
• Right to social security (Article 9).
• Protection of the family — special protection for mothers and children from exploitation (Article 10).
• Right to an adequate standard of living including food, clothing, and housing (Article 11).
• Right to the highest attainable standard of physical and mental health (Article 12).
• Right to education — primary education shall be free and compulsory (Article 13).
• Right to participate in cultural life and enjoy the benefits of scientific progress (Article 15).

**Progressive Realization**
• Unlike the ICCPR which requires immediate implementation, the ICESCR requires states to progressively realize these rights to the maximum of their available resources.
• This recognizes that economic and social rights are resource-dependent and may take time to fully achieve.

**Significance in India**
• Many ICESCR rights are reflected in India's Directive Principles of State Policy (DPSP) under the Constitution.
• Indian courts have increasingly used ICESCR standards to interpret Fundamental Rights, especially Article 21 (Right to Life).

**Key Takeaway**
The ICESCR represents the world's commitment that human dignity is not just about political freedom — it also means freedom from hunger, poverty, and ignorance. Economic, social, and cultural rights are as essential as civil and political rights for a life of dignity.`,

  cedaw: `## Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW), 1979

The Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW) is an international treaty adopted by the United Nations General Assembly on December 18, 1979, and entered into force on September 3, 1981. It is often described as the international bill of rights for women, as it is the most comprehensive international document on women's rights.

**Background**
• CEDAW was created in response to the widespread discrimination and inequality faced by women across the world.
• It has been ratified by 189 countries, making it one of the most widely ratified human rights treaties.
• India ratified CEDAW in 1993.

**Definition of Discrimination**
• CEDAW defines discrimination against women as any distinction, exclusion, or restriction made on the basis of sex which has the effect of impairing the recognition, enjoyment, or exercise by women of human rights and fundamental freedoms.
• This definition covers both direct and indirect discrimination.

**Key Provisions**
• States must incorporate the principle of equality of men and women in their legal systems and abolish all discriminatory laws (Article 2).
• States must ensure the full development and advancement of women in political, social, economic, and cultural fields (Article 3).
• Temporary special measures (affirmative action) may be adopted to accelerate equality and shall not be considered discrimination (Article 4).
• States must modify social and cultural patterns based on the idea of inferiority or superiority of either sex (Article 5).
• CEDAW protects women's rights in education (Article 10), employment (Article 11), healthcare (Article 12), and economic life (Article 13).
• Article 16 ensures equality in marriage and family life — equal rights in choosing a spouse, in property, and in deciding the number of children.

**Substantive Equality**
• CEDAW goes beyond formal equality to substantive equality — acknowledging that women may need different treatment to achieve actual equality.
• It recognizes that negative stereotypes and patriarchal values are root causes of discrimination and must be addressed.

**Monitoring Body**
• The CEDAW Committee monitors implementation by reviewing reports from countries every four years.

**Importance for India**
• CEDAW has influenced Indian legislation including the Protection of Women from Domestic Violence Act 2005 and laws on sexual harassment at the workplace.
• Indian courts have cited CEDAW in landmark judgments related to women's rights.

**Key Takeaway**
CEDAW is the most powerful international legal instrument for the protection of women's rights. It recognizes that true equality for women requires addressing not just laws, but also deeply rooted social attitudes and patriarchal structures that hold women back.`,

  crc: `## Convention on the Rights of the Child (CRC), 1989

The Convention on the Rights of the Child (CRC) is an international human rights treaty adopted by the United Nations General Assembly on November 20, 1989, and entered into force on September 2, 1990. It is the most widely ratified human rights treaty in history, with 196 state parties. It sets out the civil, political, economic, social, and cultural rights of every child.

**Background**
• The CRC was created to recognize children as rights-holders and to ensure special protection for them because of their vulnerability.
• India ratified the CRC in 1992.

**Definition of a Child**
• Under the CRC, a child is defined as every human being below the age of 18 years.

**Four Core Principles**
• Non-discrimination (Article 2) — All rights apply to all children without discrimination of any kind.
• Best interests of the child (Article 3) — In all actions concerning children, the best interests of the child shall be a primary consideration.
• Right to life, survival, and development (Article 6) — Every child has the inherent right to life and must be given the best chance to grow.
• Right to be heard (Article 12) — Children have the right to express their views freely and to have those views taken seriously.

**Key Rights Under the CRC**
• Right to a name and nationality from birth (Article 7).
• Right to be protected from all forms of violence, abuse, neglect, and exploitation (Article 19).
• Right to special protection for children without families and for refugee children (Articles 20–22).
• Rights of disabled children to special care and dignity (Article 23).
• Right to the highest attainable standard of health (Article 24).
• Right to education — primary education must be free and compulsory (Article 28).
• Right to protection from economic exploitation and child labour (Article 32).
• Right to protection from sexual exploitation and abuse (Article 34).
• No child under 15 shall be recruited into armed forces (Article 38).

**Significance for India**
• India enacted the POCSO Act 2012 and the Right to Education Act 2009 in line with CRC obligations.
• The National Commission for Protection of Child Rights (NCPCR) was established to monitor child rights in India.

**Key Takeaway**
The CRC transformed the world's approach to children — from seeing them as objects of charity to recognizing them as full human beings with rights. Every child, regardless of where they are born, deserves protection, care, and the chance to reach their full potential.`,

  fundamental_rights: `## Human Rights and Fundamental Rights in India

India's Constitution, adopted on November 26, 1949, incorporates a strong framework of Fundamental Rights that align closely with international human rights standards, particularly the UDHR.

**What are Fundamental Rights?**
• Fundamental Rights are basic rights guaranteed to all citizens of India by Part III (Articles 12–35) of the Constitution.
• They are called "fundamental" because they are essential for the intellectual, moral, and spiritual development of individuals.
• These rights are justiciable — a person can directly approach the Supreme Court or High Court if these rights are violated.

**The Six Categories of Fundamental Rights**
• Right to Equality (Articles 14–18) — Equality before law, prohibition of discrimination on grounds of religion, race, caste, sex or place of birth, equality of opportunity in public employment, abolition of untouchability, and abolition of titles.
• Right to Freedom (Articles 19–22) — Freedom of speech and expression, assembly, association, movement, residence, and profession. Protection against arbitrary arrest and detention.
• Right against Exploitation (Articles 23–24) — Prohibition of traffic in human beings and forced labour, and prohibition of child labour in hazardous industries.
• Right to Freedom of Religion (Articles 25–28) — Freedom of conscience and the right to freely profess, practice, and propagate religion.
• Cultural and Educational Rights (Articles 29–30) — Protection of interests of minorities and the right to establish educational institutions.
• Right to Constitutional Remedies (Article 32) — The right to move the Supreme Court for enforcement of Fundamental Rights — called the "heart and soul" of the Constitution by Dr. B.R. Ambedkar.

**Relationship Between Fundamental Rights and Human Rights**
• Fundamental Rights are largely inspired by and consistent with the UDHR.
• Article 21 (Right to Life and Personal Liberty) has been interpreted very broadly by the Supreme Court to include the right to health, education, livelihood, clean environment, and dignity.
• India's Fundamental Rights cover many of the rights in the ICCPR, making them enforceable under domestic law.

**Limitations**
• Fundamental Rights are not absolute — they can be restricted by the state on reasonable grounds such as public order, morality, and national security.
• Some rights are available only to citizens, not to all persons in India.
• During a national emergency, certain Fundamental Rights can be suspended.

**Key Takeaway**
Fundamental Rights are the Indian Constitution's most powerful guarantee to its citizens. Article 32, which makes these rights enforceable, ensures that they are not merely aspirational but real and actionable — the bridge between international human rights norms and domestic legal protection.`,

  directive_principles: `## Fundamental Duties and Directive Principles of State Policy (DPSP)

India's Constitution contains not just rights but also duties and guidelines for governance. The Directive Principles of State Policy (DPSP) and Fundamental Duties represent the social and moral dimension of the Indian constitutional framework.

**Directive Principles of State Policy (DPSP)**
• DPSPs are contained in Part IV (Articles 36–51) of the Indian Constitution, inspired by the Irish Constitution.
• They are guidelines directed at the state for making laws and policies to establish a just social order.
• Unlike Fundamental Rights, DPSPs are not justiciable — they cannot be enforced in court. However, it is the duty of the state to apply them in making laws.

**Classification of DPSPs**
• Socialistic Principles — Aim at providing social and economic justice. Examples: equal pay for equal work (Article 39(d)), right to adequate livelihood (Article 39(a)), free legal aid (Article 39A), right to work and education (Article 41).
• Gandhian Principles — Reflect Gandhiji's vision of rural upliftment. Examples: organization of village panchayats (Article 40), promotion of cottage industries (Article 43), prohibition of cow slaughter (Article 48).
• Liberal-Intellectual Principles — Aim at international peace and a modern welfare state. Examples: uniform civil code (Article 44), separation of judiciary from executive (Article 50), protection of monuments of historical importance (Article 49).

**Relationship Between DPSPs and Human Rights**
• Many DPSPs directly correspond to economic and social rights in the ICESCR.
• The Supreme Court has increasingly read DPSPs together with Fundamental Rights to expand the scope of rights — especially Article 21.
• In the Minerva Mills case (1980), the Supreme Court held that Fundamental Rights and DPSPs are complementary.

**Fundamental Duties**
• Fundamental Duties were added to the Constitution by the 42nd Amendment in 1976, based on the recommendations of the Swaran Singh Committee.
• They are listed in Article 51A of Part IVA of the Constitution.
• There are 11 Fundamental Duties, including: to abide by the Constitution, to cherish the national flag and anthem, to promote harmony and brotherhood, to protect the environment, to develop scientific temper, and to safeguard public property.
• Like DPSPs, Fundamental Duties are not enforceable in court, but serve as moral obligations on every citizen.

**Relationship Between Duties and Human Rights**
• Fundamental Duties remind citizens that rights come with responsibilities.
• The duty to protect the environment supports the human right to a clean and healthy environment.
• The duty to promote harmony and brotherhood supports the right to equality and non-discrimination.

**Key Takeaway**
DPSPs and Fundamental Duties represent the social conscience of India's Constitution. While rights protect individuals from the state, duties remind individuals of their obligations to society — together they reflect the constitutional vision of a just, equal, and harmonious India.`,

  judiciary: `## Role of Judiciary in Protection of Human Rights in India

The judiciary plays a crucial and active role in the protection and promotion of human rights in India. The Supreme Court and High Courts have used their constitutional powers to safeguard rights and hold the state accountable.

**Constitutional Powers of the Judiciary**
• Article 32 gives the Supreme Court the power to issue writs for the enforcement of Fundamental Rights — making it the "guardian of the Constitution."
• Article 226 gives High Courts similar writ jurisdiction, making rights accessible at the state level.
• The five types of writs are powerful tools for rights protection:

• Habeas Corpus — "You shall have the body" — used to challenge illegal detention and protect personal liberty.
• Mandamus — directs a public official or body to perform a duty they are legally obligated to perform.
• Certiorari — quashes an order made by a lower court or tribunal that has acted beyond its jurisdiction.
• Prohibition — prevents a lower court from exceeding its jurisdiction.
• Quo Warranto — questions the authority of a person holding a public office.

**Judicial Activism and Public Interest Litigation (PIL)**
• Indian judiciary is known for judicial activism — going beyond the literal interpretation of law to ensure justice and protect rights.
• Public Interest Litigation (PIL) allows any citizen or organization to approach the court on behalf of those whose rights are being violated but who cannot access the courts themselves.
• PIL has been used to protect rights of prisoners, bonded labourers, children, women, the environment, and the poor.

**Landmark Judgments**
• Maneka Gandhi v. Union of India (1978) — Article 21 protects not just the right to life but the right to live with dignity; personal liberty cannot be taken away by any arbitrary procedure.
• Vishaka v. State of Rajasthan (1997) — The Supreme Court laid down guidelines for prevention of sexual harassment at the workplace.
• Olga Tellis v. Bombay Municipal Corporation (1985) — The right to livelihood is part of Article 21.
• MC Mehta cases — Used PIL to protect the right to a clean environment.

**Limitations of the Judiciary**
• Judicial processes are often slow and expensive, limiting access for the poor.
• Courts can only interpret and apply the law — they cannot legislate or administer.
• Implementation of court orders depends on the executive, which may be slow or resistant.

**Key Takeaway**
The Indian judiciary, through writ jurisdiction, PIL, and judicial activism, has been the most powerful defender of human rights in India. It has consistently expanded the meaning of rights and ensured accountability of the state, making it an indispensable pillar of human rights protection.`,

  nhrc: `## National Human Rights Commission (NHRC) and Jharkhand State Human Rights Commission

The Protection of Human Rights Act, 1993 established a three-tier framework for human rights protection in India: the National Human Rights Commission (NHRC) at the national level, State Human Rights Commissions at the state level, and Human Rights Courts at the district level.

**National Human Rights Commission (NHRC)**

**Establishment and Composition**
• The NHRC was established on October 12, 1993 under the Protection of Human Rights Act, 1993.
• It is a statutory and quasi-judicial body — meaning it can investigate and recommend but not punish.
• The NHRC is headed by a Chairperson who must be a retired Chief Justice of India.
• It also includes members who are retired judges of the Supreme Court and retired Chief Justices of High Courts, as well as persons experienced in human rights matters.

**Functions of NHRC**
• Inquire into complaints of violation of human rights by state or central government officials.
• Intervene in court proceedings involving human rights violations.
• Visit any institution under state government control to study living conditions of inmates.
• Review laws, treaties, and international instruments on human rights and make recommendations.
• Undertake and promote research in the field of human rights.
• Spread human rights literacy through publications, media, seminars, and education.
• Encourage efforts of NGOs working in the field of human rights.

**Powers of NHRC**
• The NHRC has the powers of a civil court — it can summon witnesses, require production of documents, and receive evidence.
• It can recommend payment of compensation to victims of human rights violations.
• It can recommend prosecution of the concerned government official.
• However, it cannot investigate complaints against the armed forces.

**Limitations of NHRC**
• It can only make recommendations — it has no power to enforce them.
• Complaints must be filed within one year of the violation.

**Jharkhand State Human Rights Commission (JSHRC)**
• Established under the Protection of Human Rights Act, 1993 to address human rights violations at the state level in Jharkhand.
• Headed by a retired Chief Justice of a High Court, with members who are retired High Court judges.
• The JSHRC investigates complaints against state government officials and police for violations within Jharkhand.
• It is particularly important given Jharkhand's challenges with tribal rights, displacement due to mining projects, and police accountability.
• It works closely with the NHRC and can forward cases beyond its jurisdiction to the national body.

**Key Takeaway**
The NHRC and State Human Rights Commissions form a vital institutional backbone for human rights protection in India. While they lack enforcement powers, they provide accessible forums for victims to seek redress and play a crucial role in building a culture of rights and state accountability.`,

  ngos_media: `## Human Rights and NGOs, Media, Minorities' Commission, and Women's Commission

Beyond government institutions, civil society plays an equally important role in the promotion and defence of human rights in India. NGOs, the media, the National Commission for Minorities, and the National Commission for Women are key pillars of this framework.

**Human Rights and NGOs**
• Non-Governmental Organizations (NGOs) are voluntary, non-profit organizations that work independently of the government to promote human rights.
• In India, organizations like Amnesty International India, Human Rights Watch, People's Union for Civil Liberties (PUCL), and thousands of local groups work to document violations and advocate for policy change.

**Role of NGOs in Human Rights**
• Documentation and reporting of human rights violations.
• Legal aid and support to victims who cannot afford lawyers.
• Advocacy and lobbying for better laws and policies.
• Awareness and education campaigns in communities.
• Filing PILs in courts on behalf of marginalized communities.
• Monitoring implementation of government schemes and programs.

**Human Rights and Media**
• A free and independent media is essential for human rights — it exposes violations, holds governments accountable, and gives voice to the marginalized.
• The media acts as a watchdog — investigative journalism has uncovered corruption, police brutality, child labour, and other violations.
• Social media has expanded human rights reporting, allowing ordinary citizens to document and share violations instantly.

**Challenges for Media**
• Threats to press freedom — journalists face harassment, violence, and arrest when reporting on sensitive issues.
• Media ownership concentration can compromise editorial independence.
• Fake news and misinformation can harm communities and incite violence against minority groups.

**National Commission for Minorities (NCM)**
• Established under the National Commission for Minorities Act, 1992.
• The NCM safeguards the rights and interests of religious minorities — Muslims, Christians, Sikhs, Buddhists, Jains, and Zoroastrians (Parsis).
• Functions: Evaluates safeguards for minorities under the Constitution, investigates complaints of deprivation of rights, and makes recommendations to the government.

**National Commission for Women (NCW)**
• Established under the National Commission for Women Act, 1990.
• The NCW is a statutory body that reviews laws and constitutional safeguards for women, investigates complaints of violation of women's rights, and makes recommendations to the government.
• It takes up cases of violence against women, dowry, trafficking, and workplace harassment.
• The NCW played a key role in pushing for stronger legislation on women's safety, including amendments to rape laws after the 2012 Delhi gang rape case.

**Key Takeaway**
NGOs, media, the NCM, and the NCW form the conscience of Indian democracy — they give voice to the unheard, watch over those who hold power, and push the state to live up to its human rights obligations. A strong civil society is as important as strong institutions for the realization of human rights.`,

  challenges: `## Challenges to Human Rights Promotion in India

India has one of the most comprehensive constitutional and legal frameworks for human rights in the world. Yet a significant gap remains between rights on paper and rights in practice. Several deep-rooted social, economic, and political challenges continue to hinder the full realization of human rights.

**1. Poverty**
• India is home to one of the largest populations living in poverty, with hundreds of millions struggling to meet basic needs.
• Poverty directly violates economic and social rights — the right to food, shelter, health, and education.
• The poor lack resources and knowledge to claim their rights or access the legal system.
• Poverty also makes people vulnerable to exploitation — bonded labour, child labour, and trafficking are all closely linked to poverty.

**2. Illiteracy**
• A significant portion of India's population, especially women and rural communities, remains illiterate or undereducated.
• Illiteracy means people are unaware of their rights and cannot use legal tools like RTI or PIL to protect themselves.
• Lack of education perpetuates the cycle of poverty and social exclusion.

**3. Communal and Caste Conflicts**
• Communal tensions between religious groups and caste-based discrimination remain serious challenges to human rights in India.
• Caste discrimination — especially against Dalits — includes social exclusion, violence, denial of equal opportunities, and forced engagement in degrading occupations.
• Communal riots have repeatedly led to mass violations of civil and political rights, including the right to life and security.
• The caste system remains deeply entrenched despite constitutional prohibitions on untouchability.

**4. Patriarchal Values**
• India's deeply patriarchal social structure is one of the biggest obstacles to women's rights.
• Women face discrimination in property rights, inheritance, education, employment, and political participation.
• Practices like child marriage, dowry, honour killings, and female foeticide are expressions of patriarchal values that violate women's human rights.
• Gender-based violence remains alarmingly high despite strong laws.

**5. Lack of Inclusive Development**
• Economic growth in India has been uneven — while some sections of society have benefited, large sections including tribal communities, Dalits, women, and the disabled remain excluded.
• Development projects like dams, mines, and industrial plants have led to forced displacement of tribal and rural communities, violating their rights to land, livelihood, and culture.
• The benefits of development have not reached the most marginalized, widening inequality and human rights gaps.

**Key Takeaway**
The challenges to human rights in India are deeply structural — rooted in centuries of social inequality, economic deprivation, and cultural attitudes. Addressing them requires not just strong laws but sustained social transformation, inclusive development, and genuine political will to uphold the dignity of every Indian citizen.`,

  terrorism_health: `## Human Rights, Terrorism, and Health/Environment

Two of the most serious modern challenges to human rights are terrorism and the deterioration of health and environmental conditions. Both threaten fundamental rights and require careful balancing of competing values.

**Human Rights and Terrorism**

**How Terrorism Violates Human Rights**
• Terrorism directly violates the most fundamental of all human rights — the right to life (Article 3, UDHR).
• Terrorist acts create an atmosphere of fear and insecurity that undermines the right to liberty, movement, and peaceful assembly.
• Terrorist attacks target civilians indiscriminately, violating their right to security of person.
• In regions affected by terrorism, schools, hospitals, and public services are disrupted, violating economic and social rights.

**Counter-Terrorism and Human Rights**
• The tension between national security and human rights is one of the most challenging issues in contemporary human rights law.
• In the name of fighting terrorism, governments often curtail civil liberties — surveillance, detention without trial, and restrictions on freedom of expression.
• In India, laws like UAPA (Unlawful Activities Prevention Act) have been criticized by human rights organizations for enabling arbitrary arrest, prolonged detention, and suppression of dissent.
• The UN has established clear principles: counter-terrorism measures must comply with human rights law — they must be necessary, proportionate, and non-discriminatory.

**Human Rights and Health**
• The right to health is recognized under Article 12 of the ICESCR — everyone has the right to the highest attainable standard of physical and mental health.
• In India, Article 21 (Right to Life) has been interpreted by the Supreme Court to include the right to health and medical care.
• Challenges to the right to health in India include inadequate public health infrastructure, shortage of doctors in rural areas, high cost of private healthcare, malnutrition, and lack of clean water and sanitation.

**Human Rights and Environment**
• The right to a clean and healthy environment is increasingly recognized as a human right — essential for life, health, and dignity.
• Environmental degradation directly violates human rights — air pollution, water contamination, deforestation, and climate change disproportionately affect the poor and marginalized.
• In India, the Supreme Court has used Article 21 and Article 48A (DPSP on environment protection) to develop environmental human rights jurisprudence through MC Mehta v. Union of India and other landmark cases.
• Industrial pollution, unplanned urbanization, and displacement of communities due to development projects are major environmental human rights concerns in India.
• The right to a clean environment is especially critical for tribal and forest-dwelling communities whose livelihoods depend entirely on natural resources.

**Key Takeaway**
Terrorism and environmental degradation are two of the gravest contemporary threats to human rights — one through deliberate violence, the other through slow but devastating destruction of the conditions necessary for a dignified life. Addressing both requires upholding human rights at their core, not sacrificing them in the name of security or development.`,

  discrimination_violence: `## Discrimination and Violence against Women, Children, Dalits and Minorities, Child Labour and Bonded Labour

Among the most urgent human rights concerns in India is the systematic discrimination and violence experienced by some of the most vulnerable sections of society.

**Discrimination and Violence against Women**
• Despite constitutional guarantees and strong legislation, women in India continue to face widespread discrimination and violence.
• Forms of violence include domestic violence, rape and sexual assault, dowry-related violence and dowry deaths, acid attacks, honour killings, trafficking, and workplace harassment.
• Structural discrimination manifests in unequal wages, denial of property rights, exclusion from decision-making, and limited access to education and healthcare.
• Key laws: Protection of Women from Domestic Violence Act 2005, Sexual Harassment of Women at Workplace Act 2013, Dowry Prohibition Act 1961.

**Discrimination and Violence against Children**
• Children in India face rights violations including child marriage, physical and sexual abuse, trafficking, child labour, and denial of education.
• Girls face additional discrimination — female foeticide, early marriage, and denial of educational opportunities.
• The POCSO Act 2012 provides special protection to children from sexual offences.
• Child trafficking remains a serious concern — children are trafficked for labour, sexual exploitation, and begging.

**Discrimination against Dalits**
• Dalits (Scheduled Castes) face caste-based discrimination despite constitutional prohibition of untouchability under Article 17.
• Forms of discrimination include social exclusion, denial of access to public spaces and resources, manual scavenging, violence (atrocities), and economic exploitation.
• The Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989 (amended 2018) was enacted to prevent and punish crimes against Dalits and Adivasis.
• Honour-based violence disproportionately affects Dalits — especially when they assert their rights or marry outside their caste.

**Discrimination against Religious Minorities**
• Religious minorities in India sometimes face discrimination in employment, housing, and access to public services.
• Communal violence targeting minorities remains a recurring concern.
• The National Commission for Minorities (NCM) works to address grievances and safeguard the rights of minority communities.

**Child Labour**
• Despite the Child Labour (Prohibition and Regulation) Act 1986 (amended 2016), child labour persists in agriculture, domestic work, brick kilns, carpet weaving, and the informal sector.
• Root causes: poverty, lack of access to quality education, and social attitudes that normalize child labour.
• Child labour violates the child's right to education, play, health, and a childhood free from exploitation.

**Bonded Labour**
• Bonded labour (debt bondage) is a form of modern slavery in which a person is forced to work to repay a debt under exploitative conditions with no realistic prospect of repayment.
• It is prohibited under Article 23 of the Constitution and the Bonded Labour System (Abolition) Act, 1976.
• Despite the law, bonded labour persists in agriculture, brick kilns, stone quarries, and domestic work — often involving Dalits, Adivasis, and migrants.

**Key Takeaway**
Discrimination and violence against the most vulnerable — women, children, Dalits, minorities, and those in exploitative labour — represent the most serious human rights failures in India. Addressing these requires not just strong laws but determined enforcement, social change, and a sustained commitment to the constitutional promise of equality and dignity for all.`,
};

// ─── STUDY PLAN ─────────────────────────────────────────────────────────────
const DAILY_PLAN = [
  {
    day: 1,
    label: "Day 1",
    theme: "Unit II — Starting Strong 🌟",
    topics: [
      { id: "udhr", unit: "Unit II", title: "Universal Declaration of Human Rights (UDHR)", subtitle: "The foundation of international human rights law" },
      { id: "rti", unit: "Unit II", title: "Right to Information (RTI) as a Human Right", subtitle: "Transparency as a fundamental freedom" },
    ],
  },
  {
    day: 2,
    label: "Day 2",
    theme: "Unit II — International Covenants 📜",
    topics: [
      { id: "iccpr", unit: "Unit II", title: "International Covenant on Civil and Political Rights (ICCPR)", subtitle: "Civil liberties on the world stage" },
      { id: "icescr", unit: "Unit II", title: "International Covenant on Economic, Social and Cultural Rights (ICESCR)", subtitle: "Economic dignity as a human right" },
    ],
  },
  {
    day: 3,
    label: "Day 3",
    theme: "Unit II — Protecting the Vulnerable 💜",
    topics: [
      { id: "cedaw", unit: "Unit II", title: "Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW)", subtitle: "Women's rights are human rights" },
      { id: "crc", unit: "Unit II", title: "Convention on the Rights of the Child (CRC), 1989", subtitle: "Every child deserves protection" },
    ],
  },
  {
    day: 4,
    label: "Day 4",
    theme: "Unit III — Rights at Home 🇮🇳",
    topics: [
      { id: "fundamental_rights", unit: "Unit III", title: "Human Rights and Fundamental Rights in India", subtitle: "Constitutional guarantees for every citizen" },
      { id: "directive_principles", unit: "Unit III", title: "Fundamental Duties and Directive Principles of State Policy", subtitle: "Responsibilities alongside rights" },
    ],
  },
  {
    day: 5,
    label: "Day 5",
    theme: "Unit III — Justice & The Courts ⚖️",
    topics: [
      { id: "judiciary", unit: "Unit III", title: "Role of Judiciary in Protection of Human Rights", subtitle: "Courts as guardians of rights" },
    ],
  },
  {
    day: 6,
    label: "Day 6",
    theme: "Unit IV — Institutions & Civil Society 🏛️",
    topics: [
      { id: "nhrc", unit: "Unit IV", title: "National Human Rights Commission (NHRC) & Jharkhand State Human Rights Commission", subtitle: "Composition and functions" },
      { id: "ngos_media", unit: "Unit IV", title: "Human Rights, NGOs, Media, Minorities' & Women's Commission", subtitle: "Civil society as a pillar of human rights" },
    ],
  },
  {
    day: 7,
    label: "Day 7",
    theme: "Unit V — Issues & Concerns 🔥",
    topics: [
      { id: "challenges", unit: "Unit V", title: "Challenges to Human Rights in India", subtitle: "Poverty, illiteracy, caste conflicts & more" },
      { id: "terrorism_health", unit: "Unit V", title: "Human Rights, Terrorism & Health/Environment", subtitle: "Modern threats to fundamental freedoms" },
      { id: "discrimination_violence", unit: "Unit V", title: "Discrimination & Violence against Women, Children, Dalits and Minorities", subtitle: "Child Labour and Bonded Labour" },
    ],
  },
];

const QUOTES = [
  { text: "She believed she could, so she did.", author: "R.S. Grey" },
  { text: "Knowledge is power. Keep going.", author: "Francis Bacon" },
  { text: "Every note you write is a step closer to your goal.", author: "StudyFlow" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "You are capable of amazing things.", author: "StudyFlow" },
  { text: "Study now, shine later. You've got this! 💜", author: "StudyFlow" },
];

function renderNotes(text) {
  return text.split("\n").map((line, i) => {
    if (line.startsWith("## ")) return <h2 key={i} style={{ fontFamily: "'Playfair Display',serif", fontSize: "1.25rem", color: "#d4aaff", borderBottom: "1px solid rgba(180,120,255,0.25)", paddingBottom: "10px", marginBottom: "14px" }}>{line.replace("## ", "")}</h2>;
    if (line.startsWith("**") && line.endsWith("**")) return <p key={i} style={{ fontWeight: 700, fontSize: "0.85rem", color: "#ff9ed2", textTransform: "uppercase", letterSpacing: "0.5px", margin: "18px 0 8px" }}>{line.replace(/\*\*/g, "")}</p>;
    if (line.startsWith("• ")) return <p key={i} style={{ fontSize: "0.87rem", lineHeight: 1.75, color: "rgba(240,234,255,0.88)", paddingLeft: "12px", marginBottom: "8px" }}>{line}</p>;
    if (line.trim() === "") return <br key={i} />;
    return <p key={i} style={{ fontSize: "0.87rem", lineHeight: 1.75, color: "rgba(240,234,255,0.75)", marginBottom: "10px" }}>{line}</p>;
  });
}

export default function StudyFlow() {
  const [currentDay, setCurrentDay] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [readTimer, setReadTimer] = useState(0);
  const [canCopy, setCanCopy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [completedTopics, setCompletedTopics] = useState({});
  const [showCelebration, setShowCelebration] = useState(false);
  const [quoteIdx] = useState(Math.floor(Math.random() * QUOTES.length));
  const timerRef = useRef(null);

  const todayPlan = DAILY_PLAN.find(d => d.day === currentDay);
  const totalTopics = DAILY_PLAN.reduce((a, d) => a + d.topics.length, 0);
  const completedCount = Object.keys(completedTopics).length;
  const progress = Math.round((completedCount / totalTopics) * 100);
  const allDayDone = todayPlan?.topics.every(t => completedTopics[t.id]);
  const notes = selectedTopic ? ALL_NOTES[selectedTopic.id] : null;

  useEffect(() => {
    if (selectedTopic) {
      setReadTimer(30);
      setCanCopy(false);
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setReadTimer(p => {
          if (p <= 1) { clearInterval(timerRef.current); setCanCopy(true); return 0; }
          return p - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [selectedTopic]);

  function openTopic(topic) {
    setSelectedTopic(topic);
    setCanCopy(false);
    setCopied(false);
  }

  function handleCopy() {
    if (!canCopy || !notes) return;
    navigator.clipboard.writeText(notes);
    setCopied(true);
    if (!completedTopics[selectedTopic.id]) {
      setCompletedTopics(p => ({ ...p, [selectedTopic.id]: true }));
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2800);
    }
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{ fontFamily: "'DM Sans',sans-serif", minHeight: "100vh", background: "#0f0a1e", backgroundImage: "radial-gradient(ellipse at 20% 10%,rgba(180,120,255,0.18) 0%,transparent 50%),radial-gradient(ellipse at 80% 80%,rgba(255,150,200,0.12) 0%,transparent 50%)", color: "#f0eaff", paddingBottom: 80 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap'); *{box-sizing:border-box;margin:0;padding:0} ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-thumb{background:rgba(180,120,255,0.3);border-radius:4px} @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}} @keyframes popIn{from{transform:translate(-50%,-50%) scale(0.7);opacity:0}to{transform:translate(-50%,-50%) scale(1);opacity:1}} @keyframes bounce{0%,80%,100%{transform:scale(0.8);opacity:0.5}40%{transform:scale(1.1);opacity:1}} @keyframes pulse{0%,100%{box-shadow:0 0 0 0 rgba(180,120,255,0.4)}50%{box-shadow:0 0 0 8px rgba(180,120,255,0)}}`}</style>

      {/* CELEBRATION */}
      {showCelebration && (
        <div style={{ position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",background:"linear-gradient(135deg,rgba(15,10,30,0.97),rgba(40,20,80,0.97))",border:"1px solid rgba(180,120,255,0.5)",borderRadius:24,padding:"40px 52px",textAlign:"center",zIndex:999,animation:"popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:"0 30px 80px rgba(180,120,255,0.4)" }}>
          <div style={{ fontSize:"3rem",marginBottom:12 }}>🎉</div>
          <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.4rem",marginBottom:6 }}>Topic Completed!</div>
          <div style={{ fontSize:"0.82rem",color:"rgba(200,180,255,0.7)" }}>You're doing amazing. Keep going! 💜</div>
        </div>
      )}

      {/* HEADER */}
      <div style={{ background:"rgba(255,255,255,0.04)",backdropFilter:"blur(20px)",borderBottom:"1px solid rgba(180,120,255,0.2)",padding:"20px 28px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100 }}>
        <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.5rem",fontWeight:700,background:"linear-gradient(135deg,#d4aaff,#ff9ed2,#a0c4ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent" }}>
          Study<em>Flow</em>
        </div>
        <div style={{ display:"flex",alignItems:"center",gap:16 }}>
          <div style={{ background:"rgba(255,180,100,0.15)",border:"1px solid rgba(255,180,100,0.35)",borderRadius:20,padding:"5px 14px",fontSize:"0.78rem",fontWeight:600,color:"#ffcc88" }}>🔥 On a roll!</div>
          <div style={{ display:"flex",alignItems:"center",gap:8,fontSize:"0.78rem",color:"rgba(200,180,255,0.6)" }}>
            <div style={{ width:38,height:38,borderRadius:"50%",background:`conic-gradient(#b47aff ${progress*3.6}deg,rgba(255,255,255,0.08) 0deg)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.65rem",fontWeight:700,color:"#d4aaff" }}>{progress}%</div>
            <span>{completedCount}/{totalTopics} done</span>
          </div>
        </div>
      </div>

      {/* QUOTE */}
      <div style={{ margin:"24px 28px 0",background:"linear-gradient(135deg,rgba(180,120,255,0.1),rgba(255,150,200,0.07))",border:"1px solid rgba(180,120,255,0.22)",borderRadius:16,padding:"16px 22px",display:"flex",gap:14,alignItems:"center" }}>
        <span style={{ fontSize:"1.6rem",flexShrink:0 }}>✨</span>
        <div>
          <div style={{ fontFamily:"'Playfair Display',serif",fontStyle:"italic",fontSize:"0.97rem",color:"#e0d0ff",lineHeight:1.5 }}>"{QUOTES[quoteIdx].text}"</div>
          <div style={{ fontSize:"0.72rem",color:"rgba(200,180,255,0.55)",marginTop:4 }}>— {QUOTES[quoteIdx].author}</div>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div style={{ margin:"18px 28px 0",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(180,120,255,0.14)",borderRadius:12,padding:"14px 20px",display:"flex",alignItems:"center",gap:16 }}>
        <div style={{ fontSize:"0.75rem",color:"rgba(200,180,255,0.55)",whiteSpace:"nowrap" }}>Overall Progress</div>
        <div style={{ flex:1,height:7,background:"rgba(255,255,255,0.07)",borderRadius:100,overflow:"hidden" }}>
          <div style={{ height:"100%",borderRadius:100,background:"linear-gradient(90deg,#b47aff,#ff9ed2)",width:`${progress}%`,transition:"width 0.6s ease" }} />
        </div>
        <div style={{ fontSize:"0.78rem",fontWeight:700,color:"#d4aaff",minWidth:32 }}>{progress}%</div>
      </div>

      {/* DAY TABS */}
      <div style={{ padding:"22px 28px 0" }}>
        <div style={{ fontSize:"0.7rem",fontWeight:600,letterSpacing:"2px",textTransform:"uppercase",color:"rgba(200,180,255,0.45)",marginBottom:12 }}>Weekly Study Plan</div>
        <div style={{ display:"flex",gap:9,overflowX:"auto",paddingBottom:4,scrollbarWidth:"none" }}>
          {DAILY_PLAN.map(d => {
            const done = d.topics.every(t => completedTopics[t.id]);
            const active = currentDay === d.day;
            return (
              <div key={d.day} onClick={() => { setCurrentDay(d.day); setSelectedTopic(null); setCanCopy(false); }}
                style={{ flexShrink:0,padding:"8px 18px",borderRadius:40,border:`1px solid ${active?"rgba(180,120,255,0.6)":"rgba(180,120,255,0.2)"}`,background:active?"linear-gradient(135deg,rgba(180,120,255,0.28),rgba(255,150,200,0.16))":"rgba(255,255,255,0.03)",color:active?"#f0eaff":"rgba(240,234,255,0.5)",fontSize:"0.8rem",fontWeight:active?600:400,cursor:"pointer",transition:"all 0.2s",display:"flex",alignItems:"center",gap:6 }}>
                {d.label}{done && <span style={{ width:7,height:7,borderRadius:"50%",background:"#7be8a0",display:"inline-block" }} />}
              </div>
            );
          })}
        </div>
      </div>

      {/* TODAY HEADER */}
      <div style={{ padding:"22px 28px 0" }}>
        <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.55rem",fontWeight:700,marginBottom:4 }}>{todayPlan?.theme}</div>
        <div style={{ fontSize:"0.8rem",color:"rgba(200,180,255,0.5)" }}>{todayPlan?.topics.length} topic{todayPlan?.topics.length > 1?"s":""} today · Tap a card to view your notes</div>
      </div>

      {allDayDone && (
        <div style={{ margin:"14px 28px 0",background:"rgba(123,232,160,0.08)",border:"1px solid rgba(123,232,160,0.28)",borderRadius:12,padding:"12px 20px",textAlign:"center",fontSize:"0.83rem",color:"#7be8a0",fontWeight:600 }}>
          ✅ All topics for today completed! You crushed it! Move to the next day when ready. 🌟
        </div>
      )}

      {/* TOPIC CARDS */}
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))",gap:14,padding:"18px 28px 0" }}>
        {todayPlan?.topics.map(topic => {
          const done = completedTopics[topic.id];
          const active = selectedTopic?.id === topic.id;
          return (
            <div key={topic.id} style={{ background:active?"rgba(180,120,255,0.12)":done?"rgba(123,232,160,0.05)":"rgba(255,255,255,0.03)",border:`1px solid ${active?"#b47aff":done?"rgba(123,232,160,0.38)":"rgba(180,120,255,0.18)"}`,borderRadius:18,padding:22,cursor:"pointer",transition:"all 0.28s",boxShadow:active?"0 0 0 1px rgba(180,120,255,0.3),0 12px 40px rgba(180,120,255,0.22)":"none",animation:"fadeUp 0.4s ease" }}
              onClick={() => openTopic(topic)}>
              <div style={{ display:"inline-block",fontSize:"0.66rem",fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:done?"#7be8a0":"#b47aff",background:done?"rgba(123,232,160,0.12)":"rgba(180,120,255,0.14)",borderRadius:6,padding:"3px 10px",marginBottom:12 }}>{topic.unit}</div>
              <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1rem",fontWeight:700,color:"#f0eaff",lineHeight:1.4,marginBottom:8 }}>{topic.title}</div>
              <div style={{ fontSize:"0.76rem",color:"rgba(200,180,255,0.5)",lineHeight:1.4 }}>{topic.subtitle}</div>
              {done && <div style={{ marginTop:12,fontSize:"0.75rem",color:"#7be8a0",fontWeight:600 }}>✓ Completed</div>}
              <div style={{ marginTop:16,width:"100%",padding:"9px 0",borderRadius:10,background:active?"linear-gradient(135deg,rgba(180,120,255,0.45),rgba(255,150,200,0.3))":"linear-gradient(135deg,rgba(180,120,255,0.22),rgba(255,150,200,0.14))",border:"1px solid rgba(180,120,255,0.35)",color:"#f0eaff",fontSize:"0.8rem",fontWeight:600,textAlign:"center",transition:"all 0.2s" }}>
                {done ? "📖 View Again" : "✨ Open Notes"}
              </div>
            </div>
          );
        })}
      </div>

      {/* NOTES PANEL */}
      {selectedTopic && notes && (
        <div style={{ margin:"24px 28px 0",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(180,120,255,0.2)",borderRadius:22,overflow:"hidden",animation:"fadeUp 0.35s ease" }}>
          <div style={{ padding:"18px 24px",background:"rgba(180,120,255,0.08)",borderBottom:"1px solid rgba(180,120,255,0.15)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12 }}>
            <div>
              <div style={{ fontFamily:"'Playfair Display',serif",fontSize:"1.05rem",color:"#f0eaff",marginBottom:2 }}>{selectedTopic.title}</div>
              <div style={{ fontSize:"0.72rem",color:"rgba(200,180,255,0.5)" }}>{selectedTopic.unit} · Human Rights MDC 3F · Ranchi University</div>
            </div>
            <div style={{ display:"flex",alignItems:"center",gap:10 }}>
              {!canCopy && readTimer > 0 && (
                <div style={{ padding:"5px 13px",borderRadius:20,background:"rgba(255,200,100,0.14)",border:"1px solid rgba(255,200,100,0.3)",fontSize:"0.76rem",color:"#ffcc88",fontWeight:600 }}>📖 Read first: {readTimer}s</div>
              )}
              <button onClick={handleCopy} style={{ padding:"8px 20px",borderRadius:10,fontSize:"0.8rem",fontWeight:600,fontFamily:"'DM Sans',sans-serif",cursor:canCopy?"pointer":"not-allowed",border:"none",background:copied?"linear-gradient(135deg,#7be8a0,#4ecdc4)":canCopy?"linear-gradient(135deg,#b47aff,#ff9ed2)":"rgba(255,255,255,0.07)",color:canCopy||copied?"#0f0a1e":"rgba(200,180,255,0.4)",transition:"all 0.2s",animation:canCopy&&!copied?"pulse 2s infinite":"none" }}>
                {copied ? "✓ Copied!" : canCopy ? "📋 Copy Notes" : "⏳ Wait..."}
              </button>
            </div>
          </div>
          <div style={{ padding:"24px 28px",maxHeight:520,overflowY:"auto" }}>
            {renderNotes(notes)}
          </div>
        </div>
      )}

      {!selectedTopic && (
        <div style={{ textAlign:"center",marginTop:48,color:"rgba(200,180,255,0.35)" }}>
          <div style={{ fontSize:"2.5rem",marginBottom:10 }}>📚</div>
          <div style={{ fontSize:"0.85rem" }}>Select a topic above to open your notes.</div>
        </div>
      )}
    </div>
  );
}
