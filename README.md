# Ess Jee Pharmaceuticals – Website

A complete B2B pharmaceutical website with public pages and admin panel.

## File Structure
```
essjee/
├── index.html          ← Main public website
├── css/
│   └── style.css       ← Public site styles
├── js/
│   ├── products.js     ← Product data (60 products)
│   └── app.js          ← Public site JavaScript
└── admin/
    ├── index.html      ← Admin panel
    └── admin.css       ← Admin styles
```

## How to Use

### Public Website
Open `index.html` in a browser. Includes:
- **Home Page** – Hero, categories, CTA
- **Products Page** – All 60 products with search & filters
- **About Page** – Company info, mission, values
- **Contact Page** – Query form (saves to localStorage)

### Admin Panel
Open `admin/index.html` in a browser.

**Default Login Credentials:**
- Username: `admin`
- Password: `essjee2025`

### Admin Features
- 📊 **Dashboard** – Stats overview, recent queries, category breakdown
- 🌿 **Products** – Add, edit, delete products. Search and filter.
- 💬 **Customer Queries** – View, mark read, delete queries from contact form
- 📄 **Manage Pages** – Toggle page visibility, add custom pages
- ⚙️ **Settings** – Change admin username/password, update site info

### Data Storage
All data is stored in the browser's localStorage:
- Products list
- Customer queries
- Admin credentials
- Custom pages

### Deployment
For production deployment:
1. Upload all files to your web hosting via FTP
2. No server-side code required (pure HTML/CSS/JS)
3. For a real backend, integrate with a service like Firebase or Supabase

### Address
Near Plot No 371, MIE Part 1, Bahadurgarh – 124507, Haryana

### Price List
Effective from 1st April 2025
