/* ═══════════════════════════════════════════════════════
   NEGARIT — Shared law database + i18n strings
   Used by index.html, search.html, and all law pages
═══════════════════════════════════════════════════════ */

/* ── i18n ── */
const I18N = {
  en: {
    nav_search: "Search", nav_features: "Features", nav_users: "Who it's for",
    nav_about: "About", nav_waitlist: "Join waitlist",
    lang_en: "EN", lang_am: "አማርኛ",
    hero_badge: "Ethiopia's Legal Information Platform",
    hero_h1a: "Ethiopia's law,", hero_h1b: "unified.",
    hero_sub: "The drum that once called Ethiopians to hear the law now calls them to find it — every proclamation, directive, and court decision, searchable in Amharic and English, free for citizens.",
    hero_s1n: "1,000+", hero_s1l: "Federal proclamations",
    hero_s2n: "11",     hero_s2l: "Regional jurisdictions",
    hero_s3n: "EN/AM",  hero_s3l: "Full bilingual access",
    hero_s4n: "Free",   hero_s4l: "Always, for citizens",
    trust1: "Data sourced from", trust1b: "Federal Negarit Gazette",
    trust2: "Updated within", trust2b: "48 hrs", trust2c: "of new proclamations",
    trust3: "AKN-standard", trust3b: "permanent, citable URLs",
    trust4b: "Free and open", trust4c: "access — always",
    trust5: "Works", trust5b: "offline", trust5c: "— built for Ethiopia",
    ps1n:"1,000+", ps1l:"Federal proclamations in existence",
    ps2n:"0",      ps2l:"Central databases tracking amendments",
    ps3n:"9+",     ps3l:"Regional states, separate statute books",
    ps4n:"120M+",  ps4l:"Citizens without meaningful legal access",
    search_label: "Search all Ethiopian laws",
    search_ph: "e.g. 'maternity leave' · 'investment proclamation' · 'የሠራተኛ ሕግ'",
    search_btn: "Search",
    f_jur: "All jurisdictions", f_cat: "All categories", f_status: "All statuses",
    try_label: "Try:",
    akn_title: "Citable permanent URLs",
    akn_h: "Every law gets a stable address",
    akn_desc: "Following the Akoma Ntoso (AKN) standard used by Kenya Law and Laws.Africa, every Ethiopian law on Negarit has a structured, permanent URL that lawyers and academics can cite in briefs, papers, and court submissions.",
    akn_ex1: "Investment Proclamation No. 1180/2020 — English text:",
    akn_ex2: "Same law, as it stood on 1 Jan 2023 — Amharic text:",
    lib_ey: "Law library — preview", lib_h: "Sample from the database",
    lib_desc: "Every entry cites its source Negarit Gazette volume and issue — the reference standard lawyers and courts require.",
    lib_more: "Showing {n} of 1,000+ laws indexed. Full access at launch.",
    lib_join: "Join the waitlist →",
    diff_ey: "See it in action", diff_h: "Amendment tracker — live example",
    diff_desc: "The most powerful feature on Negarit — and the one that exists nowhere else in Ethiopia. See exactly what changed in any law, when it changed, and what it means.",
    diff_before: "Before — Proc. 377/2003", diff_after: "After — Proc. 1156/2019",
    diff_effective: "Effective: 7 Oct 2019",
    diff_source: "Federal Negarit Gazette — Vol. 25, No. 37, October 7, 2019",
    diff_link: "View full amendment history",
    feat_ey: "What ነጋሪት does", feat_h: "Six tools that change how Ethiopia accesses law",
    f1n:"Centralized legal library", f1d:"All federal laws, regulations, directives, and regional statutes with Negarit Gazette source citations and AKN permanent URLs. Updated within 48 hours of new publications.",
    f2n:"Amendment tracking",        f2d:"Every version of every law with side-by-side before/after comparisons and effective dates. View a law as it stood on any specific date — essential for litigation.",
    f3n:"Court decisions",           f3d:"Federal Supreme Court cassation decisions with extracted legal principles and plain-language summaries, searchable alongside statute law.",
    f4n:"Amharic & English",         f4d:"Full content and full UI in both languages. Search in the language you think in. Switch the entire interface with one click — not just a tagline.",
    f5n:"Legal form builder",        f5d:"Editable templates for contracts, affidavits, court pleadings, and corporate documents — in Amharic and English, downloadable as PDF or Word.",
    f6n:"Offline access",            f6d:"Download law packs for offline use. Built for Ethiopia's connectivity reality — the law doesn't stop when the signal does.",
    users_ey:"Who it's for", users_h:"Built for everyone",
    users_desc:"From the Federal Supreme Court to the citizen who just needs to understand their rights.",
    u1:"Lawyers & legal researchers", u1n:"Case prep, statute research",
    u2:"Judges & court clerks",       u2n:"Cassation lookup, ruling drafts",
    u3:"Law students & academics",    u3n:"Moot court, thesis, research",
    u4:"Business compliance officers",u4n:"Regulatory tracking, audits",
    u5:"Government & policy makers",  u5n:"Drafting, inter-agency reference",
    u6:"Journalists & civil society", u6n:"Rights reporting, accountability",
    u7:"General citizens",            u7n:"Know your rights, Amharic summaries",
    founder_ey:"Who is behind this", founder_h:"Built by a legal professional, for Ethiopia",
    founder_bio1:"A legal professional based in Addis Ababa with over a decade of experience in legal practice and university teaching. LLM in Business and Corporate Law from Bahir Dar University and multiple published peer-reviewed legal research papers and international certifications in FinTech Law, AI & Law, Privacy Law, and Digital Governance.",
    founder_bio2:"Founder of ሕጉ ምን ይላል? (What Does the Law Say?) — an Amharic-language legal education channel on TikTok and YouTube making Ethiopian law accessible to ordinary citizens. ነጋሪት is the natural extension of that mission.",
    sus_ey:"Sustainability", sus_h:"How ነጋሪት sustains itself",
    sus_desc:"Core access remains permanently free for citizens. Revenue comes from the institutions that benefit most.",
    sus1n:"Premium subscriptions", sus1d:"Advanced search filters, bulk downloads, and API access for law firms and corporations.",
    sus2n:"Institutional licensing", sus2d:"Annual licenses for universities, government ministries, and court systems.",
    sus3n:"Legal form services", sus3d:"Paid certified document delivery integrated with ministry e-services.",
    sus4n:"Donor & grant funding", sus4d:"UNDP, EU, GIZ, and rule-of-law programs actively fund platforms like ነጋሪት.",
    wl_h:"Join the waitlist", wl_sub:"Be among the first to access ነጋሪት when we launch. We will notify you directly — no spam, no fees.",
    wl_ph:"your@email.com", wl_role_ph:"I am a…",
    wl_role1:"Lawyer / Legal researcher", wl_role2:"Judge / Court clerk",
    wl_role3:"Law student / Academic", wl_role4:"Business compliance officer",
    wl_role5:"Government / Policy maker", wl_role6:"Journalist / Civil society",
    wl_role7:"General citizen", wl_role8:"Donor / Partner organization",
    wl_btn:"Reserve my place", wl_note:"No spam. No fees. Just a notification when we launch.",
    wl_ok:"✅ You are on the list! We will be in touch when ነጋሪት launches. Meanwhile follow ሕጉ ምን ይላል? on TikTok and YouTube for legal insights in Amharic.",
    partner_h:"Partner or fund ነጋሪት",
    partner_desc:"Are you an institution, donor, or organization working on access to justice in Ethiopia? We would love to hear from you.",
    partner_btn1:"Send a partnership inquiry", partner_btn2:"Discuss funding",
    footer_tag:"Ethiopia's law, unified.",
    footer_tagam:"ሕጋዊ መረጃ ለሁሉም",
    footer_tagline:"The drum that once called Ethiopians to hear the law now calls them to find it.",
    fl1h:"Platform", fl2h:"Company", fl3h:"Follow",
    fl1a:"Search laws",fl1b:"Law library",fl1c:"Amendment tracker",fl1d:"Court decisions",fl1e:"Offline access",
    fl2a:"About",fl2b:"Partner with us",fl2c:"Fund ነጋሪት",fl2d:"Contact",
    fl3a:"TikTok · ሕጉ ምን ይላል?", fl3b:"YouTube · ሕጉ ምን ይላል?", fl3c:"israkidan@gmail.com",
    fcopy:"Built in Addis Ababa, Ethiopia · © 2026 ነጋሪት · All rights reserved",
    read_law:"Read law", download_pdf:"PDF", amend_history:"Amendment history",
    status_active:"Active", status_amended:"Amended", status_repealed:"Repealed",
    no_results:"No laws found. Try different terms or clear a filter.",
    result_count:"{n} result{s} found",
    showing:"Showing",
    back_top:"Back to top",
    law_detail_back:"← Back to library",
    law_detail_source:"Source",
    law_detail_effective:"Effective date",
    law_detail_status:"Status",
    law_detail_jurisdiction:"Jurisdiction",
    law_detail_category:"Category",
    law_detail_akn:"Citable URL",
    law_detail_amendments:"Amendment history",
    law_detail_no_amend:"No amendments recorded yet.",
    law_detail_disclaimer:"This is legal information, not legal advice. Always verify against the official Federal Negarit Gazette. Consult a licensed Ethiopian lawyer for matters specific to your situation.",
    law_detail_download:"Download PDF",
    law_detail_share:"Share this law",
    law_detail_toc:"Table of contents",
  },
  am: {
    nav_search: "ፈልግ", nav_features: "ባህሪያት", nav_users: "ለማን ነው",
    nav_about: "ስለ ነጋሪት", nav_waitlist: "ዝርዝሩ ላይ ይቀላቀሉ",
    lang_en: "EN", lang_am: "አማርኛ",
    hero_badge: "የኢትዮጵያ ሕጋዊ መረጃ መድረክ",
    hero_h1a: "የኢትዮጵያ ሕጎች,", hero_h1b: "በአንድ ቦታ።",
    hero_sub: "ለሁሉም ሕዝብ ሕጉን ያበሰረው ነጋሪት አሁን እያንዳንዱን አዋጅ፣ መመሪያ እና የፍርድ ቤት ውሳኔ ያገኛቸዋል — በአማርኛ እና በእንግሊዝኛ ሊፈለጉ ይችላሉ፣ ለዜጎች ሁልጊዜ ነፃ።",
    hero_s1n: "1,000+", hero_s1l: "የፌደራል አዋጆች",
    hero_s2n: "11",     hero_s2l: "ክልላዊ ስልጣናት",
    hero_s3n: "AM/EN",  hero_s3l: "ሙሉ ሁለት ቋንቋ ድጋፍ",
    hero_s4n: "ነፃ",    hero_s4l: "ሁልጊዜ፣ ለዜጎች",
    trust1: "መረጃ የተወሰደ ከ", trust1b: "የፌዴራል ነጋሪት ጋዜጣ",
    trust2: "ዝመና ውስጥ", trust2b: "48 ሰዓት", trust2c: "ከአዲስ አዋጆች በኋላ",
    trust3: "AKN ደረጃ", trust3b: "ቋሚ፣ ሊጠቀሱ የሚችሉ URLs",
    trust4b: "ነፃ እና ክፍት", trust4c: "ድርሻ — ሁልጊዜ",
    trust5: "ያሰራል", trust5b: "ያለ ኢንተርኔት", trust5c: "— ለኢትዮጵያ የተሰራ",
    ps1n:"1,000+", ps1l:"ያሉ የፌዴራል አዋጆች",
    ps2n:"0",      ps2l:"ማሻሻያዎችን የሚከታተሉ ማዕከላዊ ዳታቤዞች",
    ps3n:"9+",     ps3l:"ክልሎች፣ የተለያዩ የሕግ መጽሐፍት",
    ps4n:"120M+",  ps4l:"ትርጉም ያለው ሕጋዊ ድርሻ የሌላቸው ዜጎች",
    search_label: "ሁሉንም የኢትዮጵያ ሕጎች ፈልግ",
    search_ph: "ለምሳሌ 'የሠራተኛ ሕግ' · 'ኢንቨስትመንት አዋጅ' · 'maternity leave'",
    search_btn: "ፈልግ",
    f_jur: "ሁሉም ስልጣናት", f_cat: "ሁሉም ምድቦች", f_status: "ሁሉም ሁኔታዎች",
    try_label: "ሞክሩ:",
    akn_title: "ሊጠቀሱ የሚችሉ ቋሚ URLs",
    akn_h: "ለእያንዳንዱ ሕግ ቋሚ አድራሻ",
    akn_desc: "ኬንያ ሕግ እና Laws.Africa በሚጠቀሙት AKN ደረጃ መሰረት፣ በነጋሪት ላይ ያለ እያንዳንዱ የኢትዮጵያ ሕግ ጠበቆች እና ምሁራን በክርክር ሰነዶች፣ ጽሑፎች እና ፍርድ ቤቶች ሊጠቅሱት የሚችሉ ቋሚ URL አለው።",
    akn_ex1: "ኢንቨስትመንት አዋጅ ቁ. 1180/2020 — በእንግሊዝኛ:",
    akn_ex2: "ተመሳሳይ ሕግ፣ ጥር 1 2023 ላይ — በአማርኛ:",
    lib_ey: "የሕግ ቤተ-መፃሕፍት — ቅድመ እይታ", lib_h: "ከዳታቤዙ ናሙና",
    lib_desc: "እያንዳንዱ ግቤት ምንጭ ነጋሪት ጋዜጣ ጥራዝ እና እትም ይጠቅሳል — ጠበቆች እና ፍርድ ቤቶች የሚፈልጉትን ማጣቀሻ ደረጃ።",
    lib_more: "{n} ሕጎችን ከ1,000+ ዕቃዎች ያሳያል። ሙሉ ድርሻ ሲጀምር ይሆናል።",
    lib_join: "ዝርዝሩ ላይ ይቀላቀሉ →",
    diff_ey: "በተግባር ይመልከቱ", diff_h: "የማሻሻያ ክትትል — ቀጥታ ምሳሌ",
    diff_desc: "በነጋሪት ላይ በጣም ኃይለኛ ባህሪ — እና በኢትዮጵያ ሌላ ቦታ የሌለ። በማንኛውም ሕግ ምን እንደተቀየረ፣ መቼ እንደተቀየረ እና ምን ማለት እንደሆነ ይመልከቱ።",
    diff_before: "ከዚህ በፊት — አዋጅ 377/2003", diff_after: "ከዚህ በኋላ — አዋጅ 1156/2019",
    diff_effective: "ሥራ ላይ የዋለ: ጥቅምት 7, 2019",
    diff_source: "ፌዴራል ነጋሪት ጋዜጣ — ጥራዝ 25፣ ቁጥር 37፣ ጥቅምት 7, 2019",
    diff_link: "ሙሉ የማሻሻያ ታሪክ ይመልከቱ",
    feat_ey: "ነጋሪት ምን ያደርጋል", feat_h: "ኢትዮጵያ ሕግን የምታገኝበትን ሁኔታ የሚቀይሩ ስድስት መሳሪያዎች",
    f1n:"ማዕከላዊ የሕግ ቤተ-መፃሕፍት", f1d:"ሁሉም የፌዴራል ሕጎች፣ ደንቦች፣ መመሪያዎች፣ እና ክልላዊ ሕጎች ከነጋሪት ጋዜጣ ምንጭ ጥቅሶች ጋር። በ48 ሰዓት ውስጥ ዝምናዊ።",
    f2n:"የማሻሻያ ክትትል",        f2d:"የእያንዳንዱ ሕግ ሁሉም ስሪቶች ከፊት/ኋላ ንፅፅር ጋር። ሕጉ በማንኛውም ቀን ምን ይመስል እንደነበር ይመልከቱ።",
    f3n:"የፍርድ ቤት ውሳኔዎች",   f3d:"የፌዴራል ጠቅላይ ፍርድ ቤት የሰበር ውሳኔዎች ከሕጋዊ መርሆዎች ጋር በቀላል ቋንቋ ማጠቃለያ።",
    f4n:"አማርኛ እና እንግሊዝኛ",   f4d:"ሙሉ ይዘት እና ሙሉ UI በሁለቱም ቋንቋዎች። በሚያስቡበት ቋንቋ ይፈልጉ። በአንድ ጠቅ ቀይሩ።",
    f5n:"የሕግ ቅጽ ሰሪ",         f5d:"ለውልች፣ ምስክርነቶች፣ የፍርድ ቤት ማመልከቻዎች ሊሞሉ የሚችሉ ቅጾች — PDF ወይም Word ይውርዱ።",
    f6n:"ያለ ኢንተርኔት ድርሻ",     f6d:"ያለ ኢንተርኔት ለመጠቀም ሕጎችን ያውርዱ። ለኢትዮጵያ ግንኙነት ሁኔታ የተሰራ።",
    users_ey:"ለማን ነው", users_h:"ለሁሉም የተሰራ",
    users_desc:"ከፌዴራል ጠቅላይ ፍርድ ቤት እስከ መብቱን ማወቅ ለሚፈልግ ዜጋ።",
    u1:"ጠበቆች እና ሕጋዊ ተመራማሪዎች", u1n:"የጉዳይ ዝግጅት፣ ሕግ ምርምር",
    u2:"ዳኞች እና ፍርድ ቤት ጸሐፊዎች", u2n:"የሰበር ፍለጋ፣ ውሳኔ ረቂቅ",
    u3:"የሕግ ተማሪዎች እና ምሁራን",   u3n:"ሙክት ፍርድ፣ ምርምር",
    u4:"የንግድ ተቆጣጣሪዎች",         u4n:"የቁጥጥር ክትትል",
    u5:"መንግሥት እና ፖሊሲ አዋቂዎች",   u5n:"ረቂቅ፣ ምክክር",
    u6:"ጋዜጠኞች እና ሲቪክ ማህበረሰብ",  u6n:"የመብት ዘገባ",
    u7:"ዜጎች",                     u7n:"መብቶቹን ይወቁ",
    founder_ey:"ከበስተጀርባ ማን ነው", founder_h:"በሕጋዊ ሙያ ባለሙያ፣ ለኢትዮጵያ የተሰራ",
    founder_bio1:"ከ10 ዓመት በላይ የሕግ ልምምድ እና ዩኒቨርሲቲ ማስተማር ልምድ ያለው በአዲስ አበባ የሚኖር ሕጋዊ ባለሙያ። ከባህር ዳር ዩኒቨርሲቲ LLM ሲኖርው ፣ FinTech ሕግ፣ AI እና ሕግ፣ ግላዊነት ሕግ፣ ዲጂታል አስተዳደር ዓለም አቀፍ ምስክርነቶች አሉት።",
    founder_bio2:"የ ሕጉ ምን ይላል? መስራች — ለዜጎች ሕጉን ተደራሽ የሚያደርግ በTikTok እና YouTube ያለ የአማርኛ ቻናል። ነጋሪት የዚህ ተልዕኮ ቀጣይ ነው።",
    sus_ey:"ዘለቄታዊነት", sus_h:"ነጋሪት እራሱን እንዴት ያቆያል",
    sus_desc:"ዋና ድርሻ ለዜጎች ሁልጊዜ ነፃ ነው። ገቢ ከሚጠቅሙ ተቋማት ይመጣል።",
    sus1n:"ፕሪሚየም ምዝገባዎች", sus1d:"ላቀ ፍለጋ ማጣሪያዎች፣ ጅምላ ማውረድ፣ API ድርሻ።",
    sus2n:"ተቋማዊ ፈቃዶች", sus2d:"ዩኒቨርሲቲዎች፣ ሚኒስቴሮች እና ፍርድ ቤቶች ዓመታዊ ፈቃዶች።",
    sus3n:"የሕግ ቅጽ አገልግሎቶች", sus3d:"ከሚኒስቴር ኤሌክትሮኒክ አገልግሎቶች ጋር የተቀናጀ ምስክር ሰነድ ማቅረብ።",
    sus4n:"ለጋሽ እና የድጋፍ ፈንድ", sus4d:"UNDP፣ EU፣ GIZ እና የሕግ ደንብ ፕሮግራሞች ይደግፋሉ።",
    wl_h:"ዝርዝሩ ላይ ይቀላቀሉ", wl_sub:"ነጋሪት ሲጀምር ከፊተኞቹ ለመሆን ምዝገባ ያድርጉ። ቀጥታ እናሳውቅዎታለን — ስፓም፣ ክፍያ የለም።",
    wl_ph:"ኢሜልዎ@gmail.com", wl_role_ph:"እኔ ነኝ…",
    wl_role1:"ጠበቃ / ሕጋዊ ተመራማሪ", wl_role2:"ዳኛ / ፍርድ ቤት ጸሐፊ",
    wl_role3:"የሕግ ተማሪ / ምሁር", wl_role4:"የንግድ ተቆጣጣሪ",
    wl_role5:"መንግሥት / ፖሊሲ አዋቂ", wl_role6:"ጋዜጠኛ / ሲቪክ ማህበረሰብ",
    wl_role7:"ዜጋ", wl_role8:"ለጋሽ / አጋር ድርጅት",
    wl_btn:"ቦታዬን ያስያዙ", wl_note:"ስፓም የለም። ክፍያ የለም። ሲጀምር ብቻ ማሳወቂያ።",
    wl_ok:"✅ ዝርዝሩ ላይ ናቸው! ነጋሪት ሲጀምር እናሳውቅዎታለን። በTikTok እና YouTube ሕጉ ምን ይላል? ይከተሉ።",
    partner_h:"ከነጋሪት ጋር ይተባበሩ ወይም ይደግፉ",
    partner_desc:"በኢትዮጵያ ፍትሕ ድርሻ ላይ የሚሰሩ ተቋም፣ ለጋሽ ወይም ድርጅት ከሆኑ እናነጋግርዎ።",
    partner_btn1:"የሽርክና ጥያቄ ይላኩ", partner_btn2:"ፈንድ ስለ ማድረግ ይወያዩ",
    footer_tag:"የኢትዮጵያ ሕጎች — በአንድ ቦታ።",
    footer_tagam:"ሕጋዊ መረጃ ለሁሉም",
    footer_tagline:"ለሁሉም ሕዝብ ሕጉን ያበሰረው ነጋሪት አሁን እያንዳንዱን ሕግ ያሳያቸዋል።",
    fl1h:"መድረክ", fl2h:"ኩባንያ", fl3h:"ይከተሉ",
    fl1a:"ሕጎችን ፈልግ",fl1b:"የሕግ ቤተ-መፃሕፍት",fl1c:"የማሻሻያ ክትትል",fl1d:"የፍርድ ቤት ውሳኔዎች",fl1e:"ያለ ኢንተርኔት ድርሻ",
    fl2a:"ስለ ነጋሪት",fl2b:"ከኛ ጋር ይተባበሩ",fl2c:"ነጋሪትን ይደግፉ",fl2d:"ያግኙን",
    fl3a:"TikTok · ሕጉ ምን ይላል?", fl3b:"YouTube · ሕጉ ምን ይላል?", fl3c:"israkidan@gmail.com",
    fcopy:"በአዲስ አበባ፣ ኢትዮጵያ ተሰርቷል · © 2026 ነጋሪት · መብቱ በሕግ የተጠበቀ ነው",
    read_law:"ሕጉን አንብቡ", download_pdf:"PDF", amend_history:"የማሻሻያ ታሪክ",
    status_active:"ተፈጻሚ", status_amended:"ተሻሽሏል", status_repealed:"ተሽሯል",
    no_results:"ምንም ሕግ አልተገኘም። ሌሎች ቃላት ይሞክሩ ወይም ማጣሪያ ያጽዱ።",
    result_count:"{n} ውጤት{s} ተገኝቷል",
    showing:"ያሳያል",
    back_top:"ወደ ላይ ተመለስ",
    law_detail_back:"← ወደ ቤተ-መፃሕፍት",
    law_detail_source:"ምንጭ",
    law_detail_effective:"ሥራ ላይ የዋለ ቀን",
    law_detail_status:"ሁኔታ",
    law_detail_jurisdiction:"ስልጣን",
    law_detail_category:"ምድብ",
    law_detail_akn:"ሊጠቀስ የሚችል URL",
    law_detail_amendments:"የማሻሻያ ታሪክ",
    law_detail_no_amend:"እስካሁን ምንም ማሻሻያ አልተመዘገበም።",
    law_detail_disclaimer:"ይህ ሕጋዊ መረጃ ነው፣ የሕግ ምክር አይደለም። ሁልጊዜ ከይፋዊ ነጋሪት ጋዜጣ ጋር ያረጋግጡ። ለሁኔታዎ ፈቃድ ያለው ጠበቃ ያማክሩ።",
    law_detail_download:"PDF ያውርዱ",
    law_detail_share:"ሕጉን ያጋሩ",
    law_detail_toc:"የይዘት ማውጫ",
  }
};

/* ── LAW DATABASE ── */
const LAWS = [
  {
    id:"constitution-1995",
    no:"1/1995", jur:"Federal", cat:"Constitutional", status:"Active", date:"1995-08-21",
    gazette:"Federal Negarit Gazeta, Year 1, No. 1 — 21 August 1995",
    akn:"negarit.et/akn/et/act/1995/1",
    title:"Constitution of the Federal Democratic Republic of Ethiopia",
    am:"የኢፌዴሪ ሕገ-መንግሥት",
    excerpt:"The supreme law of the Federal Democratic Republic of Ethiopia, establishing the federal structure, fundamental rights and freedoms, and organs of government.",
    excerpt_am:"የኢፌዴሪ ዋና ሕግ፣ የፌዴራሉን አወቃቀር፣ መሰረታዊ መብቶችና ነፃነቶች፣ እና የመንግሥት አካላትን የሚያቋቁም።",
    articles:[
      {num:"Article 1", title:"Nomenclature of the State", body:"This Constitution establishes a federal and democratic state structure. Accordingly, the Ethiopian state shall be known as The Federal Democratic Republic of Ethiopia."},
      {num:"Article 8", title:"Sovereignty of the People", body:"All sovereign power resides in the Nations, Nationalities and Peoples of Ethiopia. This Constitution is an expression of their sovereignty."},
      {num:"Article 9", title:"Supremacy of the Constitution", body:"(1) The Constitution is the supreme law of the land. Any law, customary practice or a decision of an organ of state or a public official which contravenes this Constitution shall be of no effect. (2) All citizens, organs of state, political organisations, other associations as well as their officials have the duty to ensure observance of the Constitution and to obey it. (3) It is prohibited to assume state power in any manner other than that provided under the Constitution. (4) All international agreements ratified by Ethiopia are an integral part of the law of the land."},
      {num:"Article 14", title:"Rights to Life, the Security of Person and Liberty", body:"Every person has the inviolable and inalienable right to life, the security of person and liberty."},
      {num:"Article 25", title:"Right to Equality", body:"All persons are equal before the law and are entitled without any discrimination to the equal protection of the law. In this respect, the law shall guarantee to all persons equal and effective protection without discrimination on grounds of race, nation, nationality, or other social origin, colour, sex, language, religion, political or other opinion, property, birth or other status."},
      {num:"Article 40", title:"Right to Property", body:"Every Ethiopian citizen has the right to ownership of private property. Unless prescribed otherwise by law on account of public interest, this right shall include the right to acquire, to use and, in a manner consistent with the rights of other citizens, to dispose of such property by sale or bequest or to transfer it otherwise."},
      {num:"Article 43", title:"Right to Development", body:"The Peoples of Ethiopia as a whole, and each Nation, Nationality and People in Ethiopia in particular have the right to improved living standards and to sustainable development."},
    ],
    amendments:[]
  },
  {
    id:"criminal-code-414-2004",
    no:"414/2004", jur:"Federal", cat:"Criminal", status:"Active", date:"2004-05-09",
    gazette:"Federal Negarit Gazette, Special Issue No. 1 — 9 May 2004",
    akn:"negarit.et/akn/et/act/2004/414",
    title:"Criminal Code of the Federal Democratic Republic of Ethiopia",
    am:"የኢፌዲሪ የወንጀለኛ መቅጫ ሕግ",
    excerpt:"The comprehensive criminal code governing offences and their punishments, criminal procedure, and the rights of accused persons in Ethiopia.",
    excerpt_am:"ወንጀሎችን እና ቅጣቶቻቸውን፣ የወንጀለኛ ሥርዓትን፣ እና በኢትዮጵያ ውስጥ የተከሰሱ ሰዎች መብቶችን የሚያስተዳድር አጠቃላይ የወንጀለኛ ሕግ።",
    articles:[
      {num:"Article 1", title:"Object of the Criminal Code", body:"This Code defines crimes under Ethiopian law and lays down the applicable punishments. It determines the conditions under which punishments are applicable to their perpetrators or participants."},
      {num:"Article 2", title:"Principle of Legality", body:"No one shall be held guilty of a criminal act or omission and no punishment shall be imposed save in pursuance of a law in force at the time of commission of the act or omission."},
      {num:"Article 23", title:"Homicide", body:"Whosoever intentionally causes the death of another person is punishable with rigorous imprisonment from fifteen years to twenty five years, or, in cases of exceptional gravity, with life imprisonment or death."},
      {num:"Article 626", title:"Bodily Injuries", body:"Whosoever wilfully inflicts bodily harm upon another is punishable, according to the gravity of the injury and the circumstances of the case, with simple imprisonment or fine, or with both."},
    ],
    amendments:[]
  },
  {
    id:"urban-land-721-2011",
    no:"721/2011", jur:"Federal", cat:"Land", status:"Amended", date:"2011-03-11",
    gazette:"Federal Negarit Gazette, Vol. 17, No. 29 — 11 March 2011",
    akn:"negarit.et/akn/et/act/2011/721",
    title:"Urban Lands Lease Holding Proclamation No. 721/2011",
    am:"የከተማ ቦታ ሊዝ ያዝ አዋጅ ቁጥር 721/2011",
    excerpt:"Governs the holding and transferring of urban land through lease agreements with government bodies; repeals Urban Lands Lease Holding Proclamation No. 272/2002.",
    excerpt_am:"የከተማ መሬትን ከ/መ/አካሎች ጋር ሊዝ ውል አማካኝነት ማያዝ እና ማስተላለፍን ያስተዳድራል።",
    articles:[
      {num:"Article 1", title:"Short Title", body:"This Proclamation may be cited as the 'Urban Lands Lease Holding Proclamation No. 721/2011'."},
      {num:"Article 2", title:"Definitions", body:"Unless the context otherwise requires, in this Proclamation: 1) 'Lease' means a system of land holding whereby a person is entitled to use urban land for a definite period of time upon payment; 2) 'Lessee' means a person who holds urban land through lease; 3) 'Competent authority' means a body empowered by law to administer urban land."},
      {num:"Article 5", title:"Holding of Urban Land", body:"Urban land shall be held only through lease. However, the Council of Ministers may, by regulation, allow holding of urban land free of charge for specific purposes."},
      {num:"Article 11", title:"Lease Price Determination", body:"The lease price of urban land shall be determined by auction or negotiation depending on the use proposed. Lease prices set by auctions shall not be less than the minimum price fixed by the competent authority."},
    ],
    amendments:[
      {proc:"Amendment Proc. No. 1022/2017", date:"2017-09-13", summary:"Extended maximum lease periods; revised price floor calculation methodology.", summary_am:"ከፍተኛ የሊዝ ጊዜ ዘርፎ; ዋጋ ወለሉ ስሌት ዘዴ ተሻሻለ።"}
    ]
  },
  {
    id:"income-tax-979-2016",
    no:"979/2016", jur:"Federal", cat:"Tax", status:"Active", date:"2016-07-08",
    gazette:"Federal Negarit Gazette, Vol. 22, No. 104 — 8 July 2016",
    akn:"negarit.et/akn/et/act/2016/979",
    title:"Income Tax Proclamation No. 979/2016",
    am:"የገቢ ግብር አዋጅ ቁጥር 979/2016",
    excerpt:"Imposes and collects income tax on incomes of individuals, bodies, and other taxpayers in Ethiopia and provides for related matters.",
    excerpt_am:"በኢትዮጵያ ውስጥ ያሉ ግለሰቦችና አካሎች ገቢ ላይ ግብር ይጥላል እና ያሰበስባል።",
    articles:[
      {num:"Article 1", title:"Short Title", body:"This Proclamation may be cited as the 'Income Tax Proclamation No. 979/2016'."},
      {num:"Article 8", title:"Employment Income Tax", body:"Income tax shall be levied on employment income at the following rates: Schedule 'A' — Monthly employment income from ETB 0–600 is exempt; ETB 601–1,650 taxed at 10%; ETB 1,651–3,200 taxed at 15%; ETB 3,201–5,250 taxed at 20%; ETB 5,251–7,800 taxed at 25%; ETB 7,801–10,900 taxed at 30%; Over ETB 10,900 taxed at 35%."},
      {num:"Article 19", title:"Business Income Tax", body:"Business income tax is levied on the taxable business income of bodies and individuals at the following rates: Bodies — 30% flat rate. Individuals — progressive rates as per Schedule 'B'."},
      {num:"Article 47", title:"Withholding Tax", body:"Any person who makes a payment of an amount subject to withholding tax shall withhold tax from the payment at the applicable rate and pay the withheld amount to the Tax Authority within seven days of making the payment."},
    ],
    amendments:[]
  },
  {
    id:"commercial-reg-1031-2017",
    no:"1031/2017", jur:"Federal", cat:"Commercial", status:"Active", date:"2017-12-29",
    gazette:"Federal Negarit Gazette, Vol. 24, No. 14 — 29 December 2017",
    akn:"negarit.et/akn/et/act/2017/1031",
    title:"Commercial Registration and Licensing Proclamation No. 1031/2017",
    am:"የንግድ ምዝገባና ፈቃድ አዋጅ ቁጥር 1031/2017",
    excerpt:"Provides for commercial registration and licensing; repeals Commercial Registration and Business Licensing Proclamation No. 686/2010.",
    excerpt_am:"ለንግድ ምዝገባ እና ፈቃድ ደንቦችን ያቀርባል።",
    articles:[
      {num:"Article 1", title:"Short Title", body:"This Proclamation may be cited as the 'Commercial Registration and Licensing Proclamation No. 1031/2017'."},
      {num:"Article 4", title:"Duty to Register", body:"Any person who runs a business shall register with the appropriate registration organ. The obligation to register applies to individual traders, business organizations, foreign companies, and any other business entity."},
      {num:"Article 10", title:"Documents Required for Registration", body:"An applicant for commercial registration shall submit: (a) application form; (b) copy of identity document; (c) proof of legal address; (d) memorandum and articles of association for companies; (e) any other document required by law."},
      {num:"Article 24", title:"Business License", body:"No person shall operate a business without obtaining a valid business license. A business license shall specify the business activity for which it is issued and shall be renewed annually."},
    ],
    amendments:[]
  },
  {
    id:"labour-1156-2019",
    no:"1156/2019", jur:"Federal", cat:"Labour", status:"Active", date:"2019-10-07",
    gazette:"Federal Negarit Gazette, Vol. 25, No. 37 — 7 October 2019",
    akn:"negarit.et/akn/et/act/2019/1156",
    title:"Labour Proclamation No. 1156/2019",
    am:"የሠራተኛ አዋጅ ቁጥር 1156/2019",
    excerpt:"Provides for labour relations and conditions of employment; repeals Labour Proclamation No. 377/2003 and Amendment Proclamation No. 494/2006.",
    excerpt_am:"ለሠራተኛ ግንኙነቶች እና የቅጥር ሁኔታዎች ደንቦችን ያቀርባል።",
    articles:[
      {num:"Article 14", title:"Employment Contract", body:"An employment contract shall be concluded in writing and shall specify the type of work, place of work, wage, working hours, and the rights and obligations of both parties."},
      {num:"Article 26", title:"Working Hours", body:"Normal working hours shall not exceed eight hours per day or forty eight hours per week. Overtime shall not exceed two hours per day or twelve hours per week."},
      {num:"Article 34", title:"Maternity Leave", body:"A female worker shall be entitled to 120 days of maternity leave with full pay, of which at least 60 days shall be taken after confinement. She may take the remaining 60 days before or after delivery."},
      {num:"Article 36", title:"Paternity Leave", body:"A male worker shall be entitled to five days of paid paternity leave following the birth of his child."},
      {num:"Article 43", title:"Termination of Contract", body:"An employment contract may be terminated by the employer only for just cause. Just cause includes incompetence, misconduct, or force majeure. Termination without just cause entitles the worker to severance pay and compensation."},
      {num:"Article 53", title:"Severance Pay", body:"A worker whose employment contract is terminated by the employer shall be entitled to severance pay calculated at one month's wage for each year of service, up to a maximum of twelve months' wage."},
    ],
    amendments:[
      {proc:"Original — Proc. No. 377/2003", date:"2003-01-26", summary:"Original labour proclamation. Maternity leave was 45 days (30 days post-birth). Paternity leave not provided.", summary_am:"ዋናው ሕግ። የእናቶች ፈቃድ 45 ቀናት ነበር። ለአባቶች ፈቃድ አልነበረም።"},
      {proc:"Amendment — Proc. No. 494/2006", date:"2006-07-16", summary:"Minor amendments to dispute resolution procedures.", summary_am:"ለክርክር አፈታት ሥርዓቶች ትንሽ ማሻሻያዎች።"},
      {proc:"Amendment — Proc. No. 1156/2019", date:"2019-10-07", summary:"Major reform: maternity leave extended from 45 to 120 days; paternity leave of 5 days introduced; working hours clarified; severance pay rules strengthened.", summary_am:"ትልቅ ማሻሻያ: የእናቶች ፈቃድ ከ45 ወደ 120 ቀን ዘርፎ; 5 ቀን የአባቶች ፈቃድ ተጨምሯል; የሥራ ሰዓቶች ተብራርቷል።"},
    ]
  },
  {
    id:"investment-1180-2020",
    no:"1180/2020", jur:"Federal", cat:"Investment", status:"Active", date:"2020-08-24",
    gazette:"Federal Negarit Gazette, Vol. 26, No. 44 — 24 August 2020",
    akn:"negarit.et/akn/et/act/2020/1180",
    title:"Investment Proclamation No. 1180/2020",
    am:"የኢንቨስትመንት አዋጅ ቁጥር 1180/2020",
    excerpt:"Provides for investment in Ethiopia; repeals Investment Proclamation No. 769/2012 and Amendment Proclamation No. 849/2014.",
    excerpt_am:"በኢትዮጵያ ኢንቨስትመንትን ያስተዳድራል።",
    articles:[
      {num:"Article 3", title:"Investment Areas Open to Foreign Investors", body:"Foreign investors may invest in all areas of investment except those reserved exclusively for Ethiopian investors or the Government. The Council of Ministers shall determine, by regulation, investment areas reserved for Ethiopian investors."},
      {num:"Article 9", title:"Investment Incentives", body:"An investor shall be entitled to income tax exemption for a period determined based on the type of investment. The Council of Ministers may, by regulation, determine additional investment incentives."},
      {num:"Article 12", title:"Guarantees to Investors", body:"No investment may be expropriated except for public interest. Where expropriation occurs, the investor shall be entitled to prompt, adequate and effective compensation."},
      {num:"Article 15", title:"Repatriation of Funds", body:"A foreign investor shall have the right to repatriate: (a) profits and dividends; (b) principal and interest on foreign loans; (c) proceeds from the sale or liquidation of an enterprise; (d) proceeds from the transfer of shares or partial ownership."},
      {num:"Article 20", title:"Dispute Settlement", body:"Disputes arising between foreign investors and the Government concerning investments shall be settled amicably. Failing amicable settlement, disputes shall be submitted to international arbitration."},
    ],
    amendments:[]
  },
  {
    id:"digital-finance-1227-2021",
    no:"1227/2021", jur:"Federal", cat:"Commercial", status:"Active", date:"2021-12-24",
    gazette:"Federal Negarit Gazette, Vol. 28, No. 13 — 24 December 2021",
    akn:"negarit.et/akn/et/act/2021/1227",
    title:"Digital Financial Services Proclamation No. 1227/2021",
    am:"ዲጂታል የፋይናንስ አገልግሎቶች አዋጅ ቁጥር 1227/2021",
    excerpt:"Provides for digital financial services including mobile money, payment systems, and agent banking; establishes a regulatory framework.",
    excerpt_am:"ሞባይል ሞኒ፣ የክፍያ ሥርዓቶች እና ወኪል ባንኪንግ ጨምሮ ዲጂታል የፋይናንስ አገልግሎቶችን ያቅርባል።",
    articles:[
      {num:"Article 2", title:"Definitions", body:"In this Proclamation: 'Digital financial service' means any financial service delivered through digital channels including mobile phones, internet, cards and agents; 'Electronic money' means monetary value stored electronically representing a claim on the issuer; 'Payment system operator' means an entity licensed to operate a payment system."},
      {num:"Article 5", title:"Licensing Requirements", body:"No person shall provide digital financial services without obtaining a license from the National Bank of Ethiopia. Applications for a license shall be accompanied by: (a) business plan; (b) details of shareholders and directors; (c) evidence of capital requirements; (d) technical specifications of the system."},
      {num:"Article 10", title:"Consumer Protection", body:"A digital financial service provider shall: (a) disclose all fees and charges clearly; (b) ensure data privacy and security; (c) provide accessible customer complaint mechanisms; (d) not engage in unfair or deceptive practices."},
      {num:"Article 18", title:"Interoperability", body:"The National Bank of Ethiopia may require digital financial service providers to ensure interoperability of their systems to promote financial inclusion and competition."},
    ],
    amendments:[]
  }
];

/* ── FORMSPREE ENDPOINT ── */
/* Replace YOUR_FORM_ID below with your actual Formspree form ID after
   creating a free form at https://formspree.io
   Step 1: Go to formspree.io → New form → copy the ID
   Step 2: Replace 'YOUR_FORM_ID' with it e.g. 'xpwzgkrd'         */
const FORMSPREE_ID = "YOUR_FORM_ID";

/* ── HELPERS ── */
function t(key) {
  const lang = document.documentElement.lang || 'en';
  return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : (I18N.en[key] || key);
}

function statusBadge(status, lang) {
  const l = lang || document.documentElement.lang || 'en';
  const map = {
    Active:   {cls:'b-green',  label: l==='am' ? 'ተፈጻሚ'    : 'Active'},
    Amended:  {cls:'b-amber',  label: l==='am' ? 'ተሻሽሏል'   : 'Amended'},
    Repealed: {cls:'b-red',    label: l==='am' ? 'ተሽሯል'    : 'Repealed'},
  };
  const m = map[status] || {cls:'b-ink', label:status};
  return `<span class="badge ${m.cls}">${m.label}</span>`;
}

function lawCard(l) {
  const lang = document.documentElement.lang || 'en';
  const title = lang==='am' ? l.am : l.title;
  const sub   = lang==='am' ? l.title : l.am;
  const excerpt = lang==='am' ? (l.excerpt_am||l.excerpt) : l.excerpt;
  return `
  <div class="lc">
    <div class="lc-top">
      <span class="badge b-ink">${l.jur}</span>
      <span class="badge b-blue">${l.cat}</span>
      ${statusBadge(l.status)}
      ${l.amendments && l.amendments.length ? `<span class="badge b-amber">Amended ×${l.amendments.length}</span>` : ''}
      <span class="lc-no">Proc. ${l.no}</span>
    </div>
    <div class="lc-title">${title}</div>
    <div class="lc-amh">${sub}</div>
    <div class="lc-excerpt">${excerpt}</div>
    <div class="lc-bottom">
      <span class="lc-gazette"><i class="ti ti-news"></i>${l.gazette}</span>
      <div class="lc-actions">
        <button class="lc-dl" onclick="alert('PDF download available at launch')"><i class="ti ti-download"></i>PDF</button>
        <a href="law.html?id=${l.id}" class="lc-read">${t('read_law')} <i class="ti ti-arrow-right"></i></a>
      </div>
    </div>
    <div class="akn-url" style="margin-top:10px;font-size:11px">
      <i class="ti ti-link" style="color:var(--faint)"></i>
      <span style="color:var(--faint)">${l.akn}</span>
    </div>
  </div>`;
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang] && I18N[lang][key]) el.innerHTML = I18N[lang][key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (I18N[lang] && I18N[lang][key]) el.placeholder = I18N[lang][key];
  });
  document.querySelectorAll('.lang-btn,.flp').forEach(b => b.classList.remove('on'));
  document.querySelectorAll(lang==='en' ? '.lang-btn:first-child,.flp:first-child' : '.lang-btn:last-child,.flp:last-child')
    .forEach(b => b.classList.add('on'));
  // re-render law list if present
  if (document.getElementById('law-list')) renderLaws(currentLaws||LAWS);
}

let currentLaws = null;
function renderLaws(laws) {
  currentLaws = laws;
  const c = document.getElementById('law-list');
  if (!c) return;
  if (!laws.length) { c.innerHTML = `<p class="no-results">${t('no_results')}</p>`; return; }
  c.innerHTML = laws.map(lawCard).join('');
}

function doSearch() {
  const q   = (document.getElementById('sq')||{value:''}).value.trim().toLowerCase();
  const jur = (document.getElementById('f-jur')||{value:''}).value;
  const cat = (document.getElementById('f-cat')||{value:''}).value;
  const stat= (document.getElementById('f-status')||{value:''}).value;
  const tags= document.getElementById('stags');
  const res = document.getElementById('results');
  if (!q && !jur && !cat && !stat) {
    if(res) res.innerHTML=''; if(tags) tags.style.display='flex';
    renderLaws(LAWS); return;
  }
  if(tags) tags.style.display='none';
  const m = LAWS.filter(l=>{
    const txt=(l.title+' '+l.am+' '+(l.excerpt||'')+' '+l.no+' '+l.cat+' '+l.gazette).toLowerCase();
    return(!q||txt.includes(q))&&(!jur||l.jur===jur)&&(!cat||l.cat===cat)&&(!stat||l.status===stat);
  });
  if(res) res.innerHTML = m.length ? `<p class="result-count">${m.length} result${m.length!==1?'s':''} found</p>` : '';
  renderLaws(m);
}

function fillSearch(q){
  const el=document.getElementById('sq');
  if(el){el.value=q;}
  doSearch();
  const s=document.getElementById('search-section');
  if(s) s.scrollIntoView({behavior:'smooth',block:'start'});
}

async function submitWL(e) {
  e.preventDefault();
  const email = (document.getElementById('wl-email')||{value:''}).value.trim();
  const role  = (document.getElementById('wl-role')||{value:''}).value;
  if (!email) return;

  const btn = document.querySelector('.wl-submit');
  if(btn){ btn.disabled=true; btn.textContent='Sending…'; }

  if (FORMSPREE_ID && FORMSPREE_ID !== 'YOUR_FORM_ID') {
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ email, role, _subject:`Negarit waitlist: ${role||'new signup'}` })
      });
    } catch(_) {}
  }
  const form=document.querySelector('.wl-form');
  const ok=document.getElementById('wl-success');
  if(form) form.style.display='none';
  if(ok){ ok.style.display='block'; ok.textContent = t('wl_ok'); }
}
