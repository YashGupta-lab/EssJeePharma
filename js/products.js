const PRODUCTS = [
  { id: 1, name: "KESAR PAIN OIL (WITH RATANJOT)", category: "Oil", contents: "Joint Pain And All Type Arthritis Herbal Oil", pack: "60ml", mrp: 160, ptr: 80, color: "#e8f5e9" },
  { id: 2, name: "TULSI-ARK", category: "Tonic", contents: "A Combination Of Anti-oxidant & Anti-toxins", pack: "30ml", mrp: 160, ptr: 80, color: "#e3f2fd" },
  { id: 3, name: "FEVERANNT", category: "Syrup", contents: "Effective syrup to Reduce all types of Fever", pack: "100ml", mrp: 140, ptr: 70, color: "#fff3e0" },
  { id: 4, name: "MIND GROW", category: "Tonic", contents: "Herbal Nervine Tonic", pack: "100ml", mrp: 140, ptr: 70, color: "#f3e5f5" },
  { id: 5, name: "SILENT COUGH SYP", category: "Syrup", contents: "Dry Cough Whooping Syp Honey With Tulsi", pack: "100ml", mrp: 95, ptr: 47.50, color: "#e8f5e9" },
  { id: 6, name: "SILENT-PLUS COUGH SYP", category: "Syrup", contents: "Double Strong Cough Ayurvedic Fourmula", pack: "100ml", mrp: 105, ptr: 52.50, color: "#e3f2fd" },
  { id: 7, name: "KEEBUTE HERBAL COUGH SYP", category: "Syrup", contents: "Double Strong Cough Ayurvedic Fourmula", pack: "100ml", mrp: 115, ptr: 57.50, color: "#fff3e0" },
  { id: 8, name: "ESSCUF HERBAL COUGH REMEDY", category: "Syrup", contents: "Double Strong Cough Ayurvedic Fourmula", pack: "100ml", mrp: 110, ptr: 55, color: "#fce4ec" },
  { id: 9, name: "GAS-FREE", category: "Syrup", contents: "Helpful In Gastritis, Indigestion, Hyperacidity", pack: "100ml", mrp: 120, ptr: 60, color: "#e8f5e9" },
  { id: 10, name: "KABJ RELEIF", category: "Syrup", contents: "Useful In Constipation And Digestion", pack: "100ml", mrp: 140, ptr: 70, color: "#e3f2fd" },
  { id: 11, name: "CHEST CLEAR", category: "Syrup", contents: "Helps In Chest Infections, Nasal Health", pack: "100ml", mrp: 160, ptr: 80, color: "#fff3e0" },
  { id: 12, name: "URO CARE", category: "Syrup", contents: "Helps In Urinary Infections (UTI)", pack: "100ml", mrp: 150, ptr: 75, color: "#f3e5f5" },
  { id: 13, name: "ESLIV FORT 4G SYRUP", category: "Syrup", contents: "Liver-ds+enzyme+antacid+alkaliser Tonic", pack: "100ml", mrp: 120, ptr: 60, color: "#e8f5e9" },
  { id: 14, name: "ESLIV-DS SYRUP", category: "Syrup", contents: "A Complete Liver Tonic", pack: "100ml", mrp: 120, ptr: 60, color: "#e3f2fd" },
  { id: 15, name: "MULTIVITAMIN SYRUP", category: "Syrup", contents: "A Complete Ayurvedic Multivitamin Syrup", pack: "100ml", mrp: 130, ptr: 65, color: "#fff3e0" },
  { id: 16, name: "CHILD GROW SYRUP", category: "Syrup", contents: "Improves Appetite & Growth of Children", pack: "100ml", mrp: 140, ptr: 70, color: "#fce4ec" },
  { id: 17, name: "BC-100", category: "Syrup", contents: "Useful in Primary and Secondary Piles Clear Hemorrhoid Internal and External Both", pack: "225ml", mrp: 260, ptr: 130, color: "#e8f5e9" },
  { id: 18, name: "ESLIV-DS SYRUP", category: "Syrup", contents: "A Complete Liver Tonic", pack: "225ml", mrp: 195, ptr: 97.50, color: "#e3f2fd" },
  { id: 19, name: "ESSLIV FORT-4G SYRUP", category: "Syrup", contents: "Liver-ds+enzyme+antacid+alkaliser Tonic", pack: "225ml", mrp: 220, ptr: 110, color: "#fff3e0" },
  { id: 20, name: "ESLIV-ZYME-5G SYRUP", category: "Syrup", contents: "Liverds+enzyme+antacid+alkaliser+anioxiden", pack: "225ml", mrp: 235, ptr: 117.50, color: "#f3e5f5" },
  { id: 21, name: "FEVERANNT (225ml)", category: "Syrup", contents: "Effective syrup to Reduce all types of Fever", pack: "225ml", mrp: 260, ptr: 130, color: "#e8f5e9" },
  { id: 22, name: "MIND GROW (225ml)", category: "Tonic", contents: "Herbal Nervine Tonic", pack: "225ml", mrp: 260, ptr: 130, color: "#e3f2fd" },
  { id: 23, name: "CHILD GROW SYRUP (225ml)", category: "Syrup", contents: "Improves Appetite & Growth of Children", pack: "225ml", mrp: 260, ptr: 130, color: "#fff3e0" },
  { id: 24, name: "ESLIV-ZYME-7G SYRUP", category: "Syrup", contents: "Lives+enzyme+ancid+alkser+anxiden+mult+ot", pack: "225ml", mrp: 260, ptr: 130, color: "#fce4ec" },
  { id: 25, name: "MULTIVITAMIN SYRUP (225ml)", category: "Syrup", contents: "A Complete Ayurvedic Multivitamin Syrup", pack: "225ml", mrp: 195, ptr: 97.50, color: "#e8f5e9" },
  { id: 26, name: "RAKT CARE SYRUP", category: "Syrup", contents: "Ayurvedic Blood Purifier Syrup", pack: "225ml", mrp: 210, ptr: 105, color: "#e3f2fd" },
  { id: 27, name: "ASTHI VAAT SYRUP", category: "Syrup", contents: "Joint Pain And All Type Arthritis Herbal Syp", pack: "225ml", mrp: 195, ptr: 97.50, color: "#fff3e0" },
  { id: 28, name: "CYST CLEAR", category: "Syrup", contents: "Gartner's Duct, Parapalvic Cyst, Fibrous Cyst", pack: "225ml", mrp: 260, ptr: 130, color: "#f3e5f5" },
  { id: 29, name: "GAS-FREE (225ml)", category: "Syrup", contents: "Helpful In Gastritis, Indigestion, Hyperacidity", pack: "225ml", mrp: 195, ptr: 97.50, color: "#e8f5e9" },
  { id: 30, name: "BP-SAFE", category: "Syrup", contents: "Helps in Both High and Low Blood Pressure", pack: "225ml", mrp: 240, ptr: 120, color: "#e3f2fd" },
  { id: 31, name: "KABJ RELIEF (225ml)", category: "Syrup", contents: "Useful in Constipation and Digestion", pack: "225ml", mrp: 240, ptr: 120, color: "#fff3e0" },
  { id: 32, name: "CHEST CLEAR (225ml)", category: "Syrup", contents: "Helps in Chest Infections, Nasal Health", pack: "225ml", mrp: 298, ptr: 149, color: "#fce4ec" },
  { id: 33, name: "THYRO SAFE", category: "Syrup", contents: "Useful in Thyrroid", pack: "225ml", mrp: 260, ptr: 130, color: "#e8f5e9" },
  { id: 34, name: "PLATELETES SYRUP (GILOY RAS)", category: "Syrup", contents: "Enriched with Giloy and Bhurmi Amla Ras", pack: "225ml", mrp: 240, ptr: 120, color: "#e3f2fd" },
  { id: 35, name: "SILENT-PLUS COUGH SYP (225ml)", category: "Syrup", contents: "Double Strong Cough Ayurvedic Fourmula", pack: "225ml", mrp: 220, ptr: 110, color: "#fff3e0" },
  { id: 36, name: "URO CARE (225ml)", category: "Syrup", contents: "Helps in Urinary infections (UTI)", pack: "225ml", mrp: 280, ptr: 140, color: "#f3e5f5" },
  { id: 37, name: "PATHARCHUR RAS", category: "Ras", contents: "Clear all Types of Stone and also Helps In Urinal Irritation", pack: "225ml", mrp: 260, ptr: 130, color: "#e8f5e9" },
  { id: 38, name: "NARI CARE SYRUP (COMBO PACK)", category: "Combo", contents: "Woman Utrine & Beauty Tonic 200ml Syrup & 20caps", pack: "COMBO", mrp: 240, ptr: 120, color: "#fce4ec" },
  { id: 39, name: "BODY-GROW SYRUP", category: "Syrup", contents: "A Complete Body Tonic", pack: "500ml", mrp: 450, ptr: 225, color: "#e3f2fd" },
  { id: 40, name: "AMLA RAS", category: "Ras", contents: "Pure Herbal Amla Ras", pack: "500ml", mrp: 280, ptr: 140, color: "#e8f5e9" },
  { id: 41, name: "ALOEVERA JUICE (WITH PANCH TULSI)", category: "Juice", contents: "Fresh Juice of Aloevera with Panch Tulsi", pack: "500ml", mrp: 340, ptr: 170, color: "#e8f5e9" },
  { id: 42, name: "NEEM JAMUN KARELA RAS", category: "Ras", contents: "Neem, Jamun & Karela Syrup for Sugar Stop", pack: "500ml", mrp: 340, ptr: 170, color: "#e8f5e9" },
  { id: 43, name: "COMBI-5 JUICE", category: "Juice", contents: "Giloy, Amla, Aloevera, Bahera & Harad Juice", pack: "500ml", mrp: 350, ptr: 175, color: "#e3f2fd" },
  { id: 44, name: "NONI JUICE", category: "Juice", contents: "Antioxident, Skin, Memory, Haircare, Children", pack: "500ml", mrp: 450, ptr: 225, color: "#fff3e0" },
  { id: 45, name: "FAT CLEAR SYRUP", category: "Syrup", contents: "Usefull in Extra Fat Loose Syrup", pack: "500ml", mrp: 450, ptr: 225, color: "#fce4ec" },
  { id: 46, name: "PLATELETES SYRUP (GILOY RAS) 500ml", category: "Syrup", contents: "Enriched with Giloy and Bhurmi Amla Ras", pack: "500ml", mrp: 350, ptr: 175, color: "#e8f5e9" },
  { id: 47, name: "MUSLI-POWER SYRUP", category: "Syrup", contents: "A cure Sexual weakness Treatment Tonic", pack: "500ml", mrp: 450, ptr: 225, color: "#e3f2fd" },
  { id: 48, name: "ASTHI VAAT SYRUP (500ml)", category: "Syrup", contents: "Joint Pain and all type Arthritis Herbal Syrup", pack: "500ml", mrp: 340, ptr: 170, color: "#fff3e0" },
  { id: 49, name: "TRIPHALA-PLUS RAS", category: "Ras", contents: "Harad, Amla, Saunf, Gulab, Kala Namak & Saunf", pack: "500ml", mrp: 340, ptr: 170, color: "#f3e5f5" },
  { id: 50, name: "BC-100 (500ml)", category: "Syrup", contents: "Useful in Primary and Secondary Piles Clear Hemorrhoid Internal and External Both", pack: "500ml", mrp: 450, ptr: 225, color: "#e8f5e9" },
  { id: 51, name: "PATHARCHUR RAS (500ml)", category: "Ras", contents: "Clear all Types of Stone and also Helps In Urinal Irritation", pack: "500ml", mrp: 450, ptr: 225, color: "#e3f2fd" },
  { id: 52, name: "CYST CLEAR (500ml)", category: "Syrup", contents: "Gartner's Duct, Parapalvic Cyst, Fibrous Cyst", pack: "500ml", mrp: 500, ptr: 250, color: "#fff3e0" },
  { id: 53, name: "NARI CARE (COMBO PACK) 500ml", category: "Combo", contents: "Woman Utrine & Beauty Tonic 500ml Syrup & 50caps", pack: "COMBO", mrp: 560, ptr: 280, color: "#fce4ec" },
  { id: 54, name: "ASTHI VAAT CAPSULE", category: "Capsule", contents: "Use full muscular & joint pain", pack: "30CAP", mrp: 520, ptr: 260, color: "#e8f5e9" },
  { id: 55, name: "SHOOTER GOLD CAPSULE", category: "Capsule", contents: "Vigour, Vitality & Strength", pack: "30CAP", mrp: 660, ptr: 330, color: "#e3f2fd" },
  { id: 56, name: "KESAR HAIR CARE KIT", category: "Kit", contents: "Promotes Healthy Hair Growth", pack: "COMBO", mrp: 820, ptr: 410, color: "#fff3e0" },
  { id: 57, name: "SKIN CARE GUARD KIT", category: "Kit", contents: "Skin Allergy Expert Lotion, Cream & Syrup", pack: "COMBO", mrp: 580, ptr: 290, color: "#fce4ec" },
  { id: 58, name: "KESAR PAIN OUT KIT", category: "Kit", contents: "Combo of Oil, Syrup, Capsules and Treats all Muscular and Joints Pain", pack: "COMBO", mrp: 690, ptr: 345, color: "#e8f5e9" },
  { id: 59, name: "SANDHA OIL", category: "Oil", contents: "Indication: This massage oil is useful for male.", pack: "15ml", mrp: 450, ptr: 225, color: "#e3f2fd" },
  { id: 60, name: "JAPANI TAIL", category: "Oil", contents: "Indication: This massage oil is useful for male.", pack: "15ml", mrp: 450, ptr: 225, color: "#fff3e0" }
];

const CATEGORIES = ["All", ...new Set(PRODUCTS.map(p => p.category))];

// Category icons mapping
const CATEGORY_ICONS = {
  "Syrup": "🧴", "Oil": "💧", "Tonic": "🌿", "Ras": "🍃",
  "Juice": "🥤", "Capsule": "💊", "Kit": "📦", "Combo": "🎁"
};

// Save/load from localStorage
function saveProducts() {
  localStorage.setItem('essjee_products', JSON.stringify(PRODUCTS));
}

function loadProducts() {
  const stored = localStorage.getItem('essjee_products');
  if (stored) {
    const parsed = JSON.parse(stored);
    PRODUCTS.length = 0;
    parsed.forEach(p => PRODUCTS.push(p));
  }
}

loadProducts();
