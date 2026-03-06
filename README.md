# Ess Jee Pharmaceuticals — Complete CMS Website

## How to Use

### Open the Website
- Double-click `index.html` to view the public website
- Open `admin/index.html` to access the admin panel

### Admin Login
- **Username:** admin
- **Password:** essjee2025
- You can change this from Settings > Change Login

---

## Admin Panel Guide

### 📊 Dashboard
Overview of products, queries, and site stats. Recent queries with contact details shown here.

### 🌿 Products
- **Add Product:** Click "+ Add Product" — fill name, category, description, pack, MRP, PTR
- **Upload Photo:** Click or drag-drop an image (PNG/JPG, max 5MB)
- **Edit/Delete:** Use Edit (✏️) and Delete (🗑) buttons on each row
- **Search & Filter:** Use the search box and category dropdown

### 💬 Customer Queries
- All contact form submissions appear here with full details
- Click any query card to expand — see name, phone, email, city, business type, full message
- **📞 Call** — opens phone dialer
- **💬 WhatsApp** — opens WhatsApp chat
- **📧 Reply** — opens email with pre-filled address
- Unread queries highlighted in gold

### 🏠 Edit Home Page
- **Hero Section:** Change heading, sub-text, badge text, button labels
- **Why Us Cards:** Edit icons, titles, descriptions. Add or remove cards.
- **CTA Banner:** Edit the call-to-action section at the bottom

### ℹ️ Edit About Page
- Edit hero heading, story paragraphs (3), mission paragraphs (2)
- Edit values cards — icon (emoji), title, description
- Add or remove cards

### 📞 Edit Contact Page
- Change hero heading and sub-text
- Change form intro text
- Update business hours

### 📄 Custom Pages
- Click "+ New Page" to create any new page
- Set name, description, visibility (show/hide in nav)
- Write content with basic HTML support
- Upload a banner image
- Add Custom CSS just for this page
- Pages appear automatically in nav and footer

### 🎨 Theme & Branding
- **Primary Color:** Changes nav, buttons, headers across the whole site
- **Accent Color:** Changes gold/highlight colors
- **Hero Background:** Type any CSS gradient
- **Global Custom CSS:** Advanced — inject custom styles across the whole website

### ⚙️ Settings
- Change admin username and password
- Update company name, address, phone, email
- Update price list date
- Factory Reset — restores everything to defaults

---

## File Structure
```
essjee2/
├── index.html          ← Public website (open this in browser)
├── js/
│   └── cms.js          ← Central data store (all 60 products + defaults)
└── admin/
    └── index.html      ← Admin panel (login: admin / essjee2025)
```

## All Data Storage
Everything is stored in the browser's localStorage:
- Products with images (base64)
- Page content edits
- Theme/colors
- Customer queries
- Admin credentials

> **Note for deployment:** Upload all files to any web hosting. No server required.
> Works on Hostinger, GoDaddy, any shared hosting — just upload and open.
