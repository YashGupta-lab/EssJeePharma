// Active filter
let activeFilter = 'All';

function showPage(page) {
  // Hide all pages
  document.getElementById('home-page').style.display = 'none';
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  
  // Update nav
  document.querySelectorAll('.nav-links a[id^="nav-"]').forEach(a => a.classList.remove('active'));
  
  if (page === 'home') {
    document.getElementById('home-page').style.display = 'block';
    const el = document.getElementById('nav-home');
    if (el) el.classList.add('active');
  } else {
    const sec = document.getElementById(page + '-page');
    if (sec) { sec.classList.add('active'); }
    const navEl = document.getElementById('nav-' + page);
    if (navEl) navEl.classList.add('active');
    if (page === 'products') renderProducts();
  }
  window.scrollTo(0, 0);
  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function filterAndShow(cat) {
  activeFilter = cat;
  showPage('products');
}

// Render filter buttons
function renderFilters() {
  const container = document.getElementById('filterBtns');
  if (!container) return;
  container.innerHTML = CATEGORIES.map(cat =>
    `<button class="filter-btn ${cat === activeFilter ? 'active' : ''}" onclick="setFilter('${cat}')">${CATEGORY_ICONS[cat] || ''} ${cat}</button>`
  ).join('');
}

function setFilter(cat) {
  activeFilter = cat;
  renderFilters();
  renderProducts();
}

// Render product grid
function renderProducts() {
  renderFilters();
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const search = (document.getElementById('productSearch')?.value || '').toLowerCase();
  
  const filtered = PRODUCTS.filter(p => {
    const matchCat = activeFilter === 'All' || p.category === activeFilter;
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.contents.toLowerCase().includes(search) || p.category.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:4rem;color:var(--text-light);">No products found. Try a different search.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" onclick="openModal(${p.id})">
      <div class="product-img" style="background:${p.color};${p.image?'padding:0;overflow:hidden;':''}">
        ${p.image
          ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">`
          : `<span>${CATEGORY_ICONS[p.category] || '🌿'}</span>`}
        <span class="category-tag">${p.category}</span>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="contents">${p.contents}</p>
        <div class="product-footer">
          <div class="pack-size">📦 ${p.pack}</div>
          <div class="prices">
            <div class="mrp">MRP: <span>₹${p.mrp.toFixed(2)}</span></div>
            <div class="ptr">₹${p.ptr.toFixed(2)}</div>
            <div class="ptr-label">PTR</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// Product modal
function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const iconEl = document.getElementById('modal-icon');
  if (p.image) {
    iconEl.innerHTML = `<img src="${p.image}" alt="${p.name}" style="width:100px;height:100px;object-fit:cover;border-radius:16px;margin-bottom:0.5rem;">`;
  } else {
    iconEl.innerHTML = CATEGORY_ICONS[p.category] || '🌿';
  }
  document.getElementById('modal-cat').textContent = p.category;
  document.getElementById('modal-name').textContent = p.name;
  document.getElementById('modal-desc').textContent = p.contents;
  document.getElementById('modal-pack').textContent = p.pack;
  document.getElementById('modal-mrp').textContent = '₹' + p.mrp.toFixed(2);
  document.getElementById('modal-ptr').textContent = '₹' + p.ptr.toFixed(2);
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on backdrop click
document.getElementById('productModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// Contact form
function submitQuery() {
  const fname = document.getElementById('fname').value.trim();
  const bname = document.getElementById('bname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  
  if (!fname || !bname || !phone || !message) {
    alert('Please fill in all required fields (Name, Business Name, Phone, Message).');
    return;
  }

  // Save to localStorage for admin to see
  const queries = JSON.parse(localStorage.getItem('essjee_queries') || '[]');
  queries.push({
    id: Date.now(),
    date: new Date().toLocaleDateString('en-IN'),
    name: fname,
    business: bname,
    phone,
    email: document.getElementById('email').value,
    type: document.getElementById('btype').value,
    city: document.getElementById('city').value,
    message,
    read: false
  });
  localStorage.setItem('essjee_queries', JSON.stringify(queries));

  document.getElementById('formSuccess').style.display = 'block';
  document.getElementById('fname').value = '';
  document.getElementById('bname').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}

// Init
showPage('home');
