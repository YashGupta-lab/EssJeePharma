// ═══════════════════════════════════════════════════════
//  ESS JEE PHARMACEUTICALS — CENTRAL CMS DATA STORE
//  All site data lives here. Admin panel writes to
//  localStorage; public pages read from it.
// ═══════════════════════════════════════════════════════

const CMS_VERSION = '2.0';

// ── DEFAULT PRODUCTS (all 60 from price list) ──────────
const DEFAULT_PRODUCTS = [
  {id:1,  name:"KESAR PAIN OIL (WITH RATANJOT)",   category:"Oil",     contents:"Joint Pain And All Type Arthritis Herbal Oil",                                          pack:"60ml",   mrp:160,  ptr:80,    color:"#fff3e0", image:null},
  {id:2,  name:"TULSI-ARK",                         category:"Tonic",   contents:"A Combination Of Anti-oxidant & Anti-toxins",                                           pack:"30ml",   mrp:160,  ptr:80,    color:"#e8f5e9", image:null},
  {id:3,  name:"FEVERANNT",                         category:"Syrup",   contents:"Effective syrup to Reduce all types of Fever",                                          pack:"100ml",  mrp:140,  ptr:70,    color:"#fff8e1", image:null},
  {id:4,  name:"MIND GROW",                         category:"Tonic",   contents:"Herbal Nervine Tonic",                                                                  pack:"100ml",  mrp:140,  ptr:70,    color:"#f3e5f5", image:null},
  {id:5,  name:"SILENT COUGH SYP",                 category:"Syrup",   contents:"Dry Cough Whooping Syp Honey With Tulsi",                                               pack:"100ml",  mrp:95,   ptr:47.5,  color:"#e8f5e9", image:null},
  {id:6,  name:"SILENT-PLUS COUGH SYP",            category:"Syrup",   contents:"Double Strong Cough Ayurvedic Fourmula",                                                pack:"100ml",  mrp:105,  ptr:52.5,  color:"#e3f2fd", image:null},
  {id:7,  name:"KEEBUTE HERBAL COUGH SYP",         category:"Syrup",   contents:"Double Strong Cough Ayurvedic Fourmula",                                                pack:"100ml",  mrp:115,  ptr:57.5,  color:"#fff3e0", image:null},
  {id:8,  name:"ESSCUF HERBAL COUGH REMEDY",       category:"Syrup",   contents:"Double Strong Cough Ayurvedic Fourmula",                                                pack:"100ml",  mrp:110,  ptr:55,    color:"#fce4ec", image:null},
  {id:9,  name:"GAS-FREE",                          category:"Syrup",   contents:"Helpful In Gastritis, Indigestion, Hyperacidity",                                       pack:"100ml",  mrp:120,  ptr:60,    color:"#e8f5e9", image:null},
  {id:10, name:"KABJ RELEIF",                       category:"Syrup",   contents:"Useful In Constipation And Digestion",                                                  pack:"100ml",  mrp:140,  ptr:70,    color:"#e3f2fd", image:null},
  {id:11, name:"CHEST CLEAR",                       category:"Syrup",   contents:"Helps In Chest Infections, Nasal Health",                                               pack:"100ml",  mrp:160,  ptr:80,    color:"#fff3e0", image:null},
  {id:12, name:"URO CARE",                          category:"Syrup",   contents:"Helps In Urinary Infections (UTI)",                                                     pack:"100ml",  mrp:150,  ptr:75,    color:"#f3e5f5", image:null},
  {id:13, name:"ESLIV FORT 4G SYRUP",              category:"Syrup",   contents:"Liver-ds+enzyme+antacid+alkaliser Tonic",                                               pack:"100ml",  mrp:120,  ptr:60,    color:"#e8f5e9", image:null},
  {id:14, name:"ESLIV-DS SYRUP",                   category:"Syrup",   contents:"A Complete Liver Tonic",                                                                 pack:"100ml",  mrp:120,  ptr:60,    color:"#e3f2fd", image:null},
  {id:15, name:"MULTIVITAMIN SYRUP",               category:"Syrup",   contents:"A Complete Ayurvedic Multivitamin Syrup",                                               pack:"100ml",  mrp:130,  ptr:65,    color:"#fff3e0", image:null},
  {id:16, name:"CHILD GROW SYRUP",                 category:"Syrup",   contents:"Improves Appetite & Growth of Children",                                                pack:"100ml",  mrp:140,  ptr:70,    color:"#fce4ec", image:null},
  {id:17, name:"BC-100",                            category:"Syrup",   contents:"Useful in Primary and Secondary Piles — Clears Hemorrhoid Internal and External Both",  pack:"225ml",  mrp:260,  ptr:130,   color:"#e8f5e9", image:null},
  {id:18, name:"ESLIV-DS SYRUP",                   category:"Syrup",   contents:"A Complete Liver Tonic",                                                                 pack:"225ml",  mrp:195,  ptr:97.5,  color:"#e3f2fd", image:null},
  {id:19, name:"ESSLIV FORT-4G SYRUP",             category:"Syrup",   contents:"Liver-ds+enzyme+antacid+alkaliser Tonic",                                               pack:"225ml",  mrp:220,  ptr:110,   color:"#fff3e0", image:null},
  {id:20, name:"ESLIV-ZYME-5G SYRUP",              category:"Syrup",   contents:"Liverds+enzyme+antacid+alkaliser+anioxiden",                                            pack:"225ml",  mrp:235,  ptr:117.5, color:"#f3e5f5", image:null},
  {id:21, name:"FEVERANNT (225ml)",                category:"Syrup",   contents:"Effective syrup to Reduce all types of Fever",                                          pack:"225ml",  mrp:260,  ptr:130,   color:"#fff8e1", image:null},
  {id:22, name:"MIND GROW (225ml)",               category:"Tonic",   contents:"Herbal Nervine Tonic",                                                                  pack:"225ml",  mrp:260,  ptr:130,   color:"#f3e5f5", image:null},
  {id:23, name:"CHILD GROW SYRUP (225ml)",         category:"Syrup",   contents:"Improves Appetite & Growth of Children",                                                pack:"225ml",  mrp:260,  ptr:130,   color:"#fce4ec", image:null},
  {id:24, name:"ESLIV-ZYME-7G SYRUP",              category:"Syrup",   contents:"Lives+enzyme+ancid+alkser+anxiden+mult+ot",                                             pack:"225ml",  mrp:260,  ptr:130,   color:"#e8f5e9", image:null},
  {id:25, name:"MULTIVITAMIN SYRUP (225ml)",       category:"Syrup",   contents:"A Complete Ayurvedic Multivitamin Syrup",                                               pack:"225ml",  mrp:195,  ptr:97.5,  color:"#fff3e0", image:null},
  {id:26, name:"RAKT CARE SYRUP",                  category:"Syrup",   contents:"Ayurvedic Blood Purifier Syrup",                                                        pack:"225ml",  mrp:210,  ptr:105,   color:"#e3f2fd", image:null},
  {id:27, name:"ASTHI VAAT SYRUP",                 category:"Syrup",   contents:"Joint Pain And All Type Arthritis Herbal Syrup",                                        pack:"225ml",  mrp:195,  ptr:97.5,  color:"#fff3e0", image:null},
  {id:28, name:"CYST CLEAR",                       category:"Syrup",   contents:"Gartner's Duct, Parapalvic Cyst, Fibrous Cyst",                                        pack:"225ml",  mrp:260,  ptr:130,   color:"#f3e5f5", image:null},
  {id:29, name:"GAS-FREE (225ml)",                 category:"Syrup",   contents:"Helpful In Gastritis, Indigestion, Hyperacidity",                                       pack:"225ml",  mrp:195,  ptr:97.5,  color:"#e8f5e9", image:null},
  {id:30, name:"BP-SAFE",                          category:"Syrup",   contents:"Helps in Both High and Low Blood Pressure",                                             pack:"225ml",  mrp:240,  ptr:120,   color:"#e3f2fd", image:null},
  {id:31, name:"KABJ RELIEF (225ml)",              category:"Syrup",   contents:"Useful in Constipation and Digestion",                                                  pack:"225ml",  mrp:240,  ptr:120,   color:"#fff3e0", image:null},
  {id:32, name:"CHEST CLEAR (225ml)",              category:"Syrup",   contents:"Helps in Chest Infections, Nasal Health",                                               pack:"225ml",  mrp:298,  ptr:149,   color:"#fce4ec", image:null},
  {id:33, name:"THYRO SAFE",                       category:"Syrup",   contents:"Useful in Thyroid",                                                                     pack:"225ml",  mrp:260,  ptr:130,   color:"#e8f5e9", image:null},
  {id:34, name:"PLATELETES SYRUP (GILOY RAS)",     category:"Syrup",   contents:"Enriched with Giloy and Bhurmi Amla Ras",                                               pack:"225ml",  mrp:240,  ptr:120,   color:"#e3f2fd", image:null},
  {id:35, name:"SILENT-PLUS COUGH SYP (225ml)",   category:"Syrup",   contents:"Double Strong Cough Ayurvedic Fourmula",                                                pack:"225ml",  mrp:220,  ptr:110,   color:"#fff3e0", image:null},
  {id:36, name:"URO CARE (225ml)",                 category:"Syrup",   contents:"Helps in Urinary Infections (UTI)",                                                     pack:"225ml",  mrp:280,  ptr:140,   color:"#f3e5f5", image:null},
  {id:37, name:"PATHARCHUR RAS",                   category:"Ras",     contents:"Clear all Types of Stone and also Helps In Urinal Irritation",                          pack:"225ml",  mrp:260,  ptr:130,   color:"#e8f5e9", image:null},
  {id:38, name:"NARI CARE SYRUP (COMBO PACK)",     category:"Combo",   contents:"Woman Utrine & Beauty Tonic 200ml Syrup & 20 Capsules",                                 pack:"COMBO",  mrp:240,  ptr:120,   color:"#fce4ec", image:null},
  {id:39, name:"BODY-GROW SYRUP",                  category:"Syrup",   contents:"A Complete Body Tonic",                                                                  pack:"500ml",  mrp:450,  ptr:225,   color:"#e3f2fd", image:null},
  {id:40, name:"AMLA RAS",                         category:"Ras",     contents:"Pure Herbal Amla Ras",                                                                   pack:"500ml",  mrp:280,  ptr:140,   color:"#e8f5e9", image:null},
  {id:41, name:"ALOEVERA JUICE (WITH PANCH TULSI)",category:"Juice",   contents:"Fresh Juice of Aloevera with Panch Tulsi",                                              pack:"500ml",  mrp:340,  ptr:170,   color:"#e8f5e9", image:null},
  {id:42, name:"NEEM JAMUN KARELA RAS",            category:"Ras",     contents:"Neem, Jamun & Karela Syrup for Sugar Stop",                                             pack:"500ml",  mrp:340,  ptr:170,   color:"#e8f5e9", image:null},
  {id:43, name:"COMBI-5 JUICE",                    category:"Juice",   contents:"Giloy, Amla, Aloevera, Bahera & Harad Juice",                                           pack:"500ml",  mrp:350,  ptr:175,   color:"#e3f2fd", image:null},
  {id:44, name:"NONI JUICE",                       category:"Juice",   contents:"Antioxident, Skin, Memory, Haircare, Children",                                         pack:"500ml",  mrp:450,  ptr:225,   color:"#fff3e0", image:null},
  {id:45, name:"FAT CLEAR SYRUP",                  category:"Syrup",   contents:"Usefull in Extra Fat Loose Syrup",                                                      pack:"500ml",  mrp:450,  ptr:225,   color:"#fce4ec", image:null},
  {id:46, name:"PLATELETES SYRUP (GILOY RAS) 500ml",category:"Syrup", contents:"Enriched with Giloy and Bhurmi Amla Ras",                                               pack:"500ml",  mrp:350,  ptr:175,   color:"#e8f5e9", image:null},
  {id:47, name:"MUSLI-POWER SYRUP",                category:"Syrup",   contents:"A cure Sexual weakness Treatment Tonic",                                                 pack:"500ml",  mrp:450,  ptr:225,   color:"#e3f2fd", image:null},
  {id:48, name:"ASTHI VAAT SYRUP (500ml)",          category:"Syrup",   contents:"Joint Pain and all type Arthritis Herbal Syrup",                                        pack:"500ml",  mrp:340,  ptr:170,   color:"#fff3e0", image:null},
  {id:49, name:"TRIPHALA-PLUS RAS",                category:"Ras",     contents:"Harad, Amla, Saunf, Gulab, Kala Namak & Saunf",                                        pack:"500ml",  mrp:340,  ptr:170,   color:"#f3e5f5", image:null},
  {id:50, name:"BC-100 (500ml)",                   category:"Syrup",   contents:"Useful in Primary and Secondary Piles — Clears Hemorrhoid Internal and External Both",  pack:"500ml",  mrp:450,  ptr:225,   color:"#e8f5e9", image:null},
  {id:51, name:"PATHARCHUR RAS (500ml)",           category:"Ras",     contents:"Clear all Types of Stone and also Helps In Urinal Irritation",                          pack:"500ml",  mrp:450,  ptr:225,   color:"#e3f2fd", image:null},
  {id:52, name:"CYST CLEAR (500ml)",               category:"Syrup",   contents:"Gartner's Duct, Parapalvic Cyst, Fibrous Cyst",                                        pack:"500ml",  mrp:500,  ptr:250,   color:"#fff3e0", image:null},
  {id:53, name:"NARI CARE (COMBO PACK) 500ml",     category:"Combo",   contents:"Woman Utrine & Beauty Tonic 500ml Syrup & 50 Capsules",                                 pack:"COMBO",  mrp:560,  ptr:280,   color:"#fce4ec", image:null},
  {id:54, name:"ASTHI VAAT CAPSULE",               category:"Capsule", contents:"Useful for muscular & joint pain",                                                      pack:"30 CAP", mrp:520,  ptr:260,   color:"#e8f5e9", image:null},
  {id:55, name:"SHOOTER GOLD CAPSULE",             category:"Capsule", contents:"Vigour, Vitality & Strength",                                                           pack:"30 CAP", mrp:660,  ptr:330,   color:"#e3f2fd", image:null},
  {id:56, name:"KESAR HAIR CARE KIT",              category:"Kit",     contents:"Promotes Healthy Hair Growth",                                                           pack:"COMBO",  mrp:820,  ptr:410,   color:"#fff3e0", image:null},
  {id:57, name:"SKIN CARE GUARD KIT",              category:"Kit",     contents:"Skin Allergy Expert Lotion, Cream & Syrup",                                             pack:"COMBO",  mrp:580,  ptr:290,   color:"#fce4ec", image:null},
  {id:58, name:"KESAR PAIN OUT KIT",               category:"Kit",     contents:"Combo of Oil, Syrup, Capsules — Treats all Muscular and Joints Pain",                   pack:"COMBO",  mrp:690,  ptr:345,   color:"#e8f5e9", image:null},
  {id:59, name:"SANDHA OIL",                       category:"Oil",     contents:"Herbal massage oil useful for male vitality and strength",                              pack:"15ml",   mrp:450,  ptr:225,   color:"#e3f2fd", image:null},
  {id:60, name:"JAPANI TAIL",                      category:"Oil",     contents:"Herbal massage oil useful for male vitality and strength",                              pack:"15ml",   mrp:450,  ptr:225,   color:"#fff3e0", image:null},
];

// ── DEFAULT SITE CONFIG ────────────────────────────────
const DEFAULT_SITE = {
  company:      "Ess Jee Pharmaceuticals",
  tagline:      "Herbal Division — Healing Through Nature's Wisdom",
  address:      "Near Plot No 371, MIE Part 1, Bahadurgarh – 124507, Haryana",
  phone:        "",
  email:        "",
  whatsapp:     "",
  priceListDate:"1st April 2025",
  primaryColor: "#1a4a2e",
  accentColor:  "#c9a84c",
  heroTitle:    "Healing Through <span>Nature's</span> Wisdom",
  heroSubtitle: "Ess Jee Pharmaceuticals brings you a complete range of premium Ayurvedic & herbal formulations. Trusted by pharmacies and distributors across India.",
  heroBg:       "linear-gradient(135deg,#0d3320 0%,#1a4a2e 40%,#2d7a4f 100%)",
};

// ── DEFAULT PAGE CONTENT ───────────────────────────────
const DEFAULT_PAGES = {
  home: {
    title: "Home",
    visible: true,
    sections: {
      hero: {
        badge:    "🌿 Ayurvedic & Herbal Products",
        heading:  "Healing Through <em>Nature's</em> Wisdom",
        subtext:  "Ess Jee Pharmaceuticals brings you a complete range of premium Ayurvedic & herbal formulations. Trusted by pharmacies and distributors across India for quality, efficacy, and value.",
        btn1Text: "Browse Products",
        btn2Text: "Request Price List",
      },
      why: {
        heading: "Trusted by Distributors & Pharmacies",
        subtext: "We offer the finest Ayurvedic formulations with competitive B2B pricing and reliable supply chain.",
        cards: [
          {icon:"🌿", title:"100% Herbal",    text:"All products are made from natural Ayurvedic ingredients with no harmful chemicals."},
          {icon:"💰", title:"Best PTR",       text:"Competitive trade pricing that allows healthy margins for our distribution partners."},
          {icon:"🚚", title:"Pan India",      text:"Reliable and timely delivery across India for all your bulk requirements."},
          {icon:"✅", title:"Quality Assured",text:"Each product undergoes rigorous quality checks before reaching your shelves."},
        ]
      },
      cta: {
        heading: "Become a Distributor Today",
        subtext:  "Join our growing network of pharmacy and wholesale partners. Get best trade prices and dedicated support.",
        btnText:  "Get in Touch",
      }
    }
  },
  about: {
    title: "About Us",
    visible: true,
    heroHeading: "About Ess Jee Pharmaceuticals",
    heroSubtext:  "Rooted in Ayurvedic tradition, committed to modern quality standards.",
    story: {
      heading: "Healing India, Naturally",
      para1:   "Ess Jee Pharmaceuticals is a dedicated Herbal Division focused on bringing the best of Ayurvedic science to modern healthcare. We believe in the power of nature to heal, and our products are a testament to that belief.",
      para2:   "Based in Bahadurgarh, Haryana, we serve pharmacies, distributors, and healthcare providers across India with a growing portfolio of over 60 carefully formulated herbal products.",
      para3:   "Our formulations cover a wide spectrum — from liver tonics and cough syrups to joint pain oils, digestive aids, blood purifiers, and immunity boosters — all made with premium quality herbs.",
    },
    mission: {
      heading: "Quality You Can Trust",
      para1:   "We are committed to producing herbal medicines that are safe, effective, and accessible. Every product in our range undergoes strict quality control to ensure consistency and potency.",
      para2:   "Our B2B pricing model ensures that our trade partners — pharmacies, distributors, and stockists — can maintain healthy margins while offering patients genuinely good herbal alternatives.",
    },
    values: [
      {icon:"🌱", title:"Natural Ingredients", text:"We source the finest herbs and botanicals to create formulations that are gentle yet powerful."},
      {icon:"🤝", title:"Partner First",       text:"Our distributors and pharmacies are our partners. We work hard to ensure their success."},
      {icon:"📋", title:"Transparency",        text:"Clear pricing, clear ingredients, and clear communication — always."},
    ]
  },
  contact: {
    title: "Contact",
    visible: true,
    heroHeading: "Get In Touch",
    heroSubtext:  "Send us a query, request a quote, or enquire about becoming a distributor.",
    intro:       "Fill in the form and our team will get back to you within 24 hours.",
    businessHours: "Mon – Sat: 9:00 AM – 6:00 PM\nSunday: Closed",
  },
  products: {
    title: "Products",
    visible: true,
    heroHeading: "Product Catalogue",
    heroSubtext:  "Complete B2B product listing with MRP and PTR pricing.",
  }
};

// ── CMS API ───────────────────────────────────────────
const CMS = {
  // Products
  getProducts() {
    const s = localStorage.getItem('ej_products');
    return s ? JSON.parse(s) : JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  },
  saveProducts(arr) { localStorage.setItem('ej_products', JSON.stringify(arr)); },

  // Site config
  getSite() {
    const s = localStorage.getItem('ej_site');
    return s ? {...DEFAULT_SITE, ...JSON.parse(s)} : {...DEFAULT_SITE};
  },
  saveSite(cfg) { localStorage.setItem('ej_site', JSON.stringify(cfg)); },

  // Pages
  getPages() {
    const s = localStorage.getItem('ej_pages');
    const base = s ? JSON.parse(s) : {};
    // Merge with defaults to ensure new keys always exist
    return {
      home:     {...DEFAULT_PAGES.home,    ...(base.home    || {})},
      about:    {...DEFAULT_PAGES.about,   ...(base.about   || {})},
      contact:  {...DEFAULT_PAGES.contact, ...(base.contact || {})},
      products: {...DEFAULT_PAGES.products,...(base.products|| {})},
    };
  },
  savePages(pages) { localStorage.setItem('ej_pages', JSON.stringify(pages)); },

  // Custom pages
  getCustomPages() {
    const s = localStorage.getItem('ej_custom_pages');
    return s ? JSON.parse(s) : [];
  },
  saveCustomPages(arr) { localStorage.setItem('ej_custom_pages', JSON.stringify(arr)); },

  // Queries
  getQueries() {
    const s = localStorage.getItem('ej_queries');
    return s ? JSON.parse(s) : [];
  },
  saveQueries(arr) { localStorage.setItem('ej_queries', JSON.stringify(arr)); },
  addQuery(q) {
    const qs = this.getQueries();
    qs.push({...q, id: Date.now(), date: new Date().toLocaleString('en-IN'), read: false});
    this.saveQueries(qs);
  },

  // Admin creds
  getCreds() {
    const s = localStorage.getItem('ej_creds');
    return s ? JSON.parse(s) : {user:'admin', pass:'essjee2025'};
  },
  saveCreds(u, p) { localStorage.setItem('ej_creds', JSON.stringify({user:u, pass:p})); },

  // Helpers
  applyTheme(site) {
    const r = document.documentElement;
    if (site.primaryColor) r.style.setProperty('--green-dark', site.primaryColor);
    if (site.accentColor)  r.style.setProperty('--gold', site.accentColor);
  },

  // Reset everything (factory reset)
  resetAll() {
    ['ej_products','ej_site','ej_pages','ej_custom_pages','ej_queries','ej_creds'].forEach(k => localStorage.removeItem(k));
  }
};

// Category icons
const CAT_ICONS = {Syrup:'🧴',Oil:'💧',Tonic:'🌿',Ras:'🍃',Juice:'🥤',Capsule:'💊',Kit:'📦',Combo:'🎁',Other:'🌿'};
