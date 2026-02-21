/* ═══════════════════════════════════════════════════════
   AzureSky Airlines — Main JavaScript
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ── Lucide helper ────────────────────────────────────── */
function initIcons () {
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

/* ── Data ─────────────────────────────────────────────── */
const destinations = [
  { id:1, city:'Roma', country:'Italia', emoji:'🇮🇹', region:'europa', flag:'', duration:'1h 00m', price:39, desc:'Il Colosseo ti aspetta', img:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop' },
  { id:2, city:'Parigi', country:'Francia', emoji:'🇫🇷', region:'europa', flag:'', duration:'2h 05m', price:59, desc:'La Ville Lumière', img:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop' },
  { id:3, city:'New York', country:'USA', emoji:'🇺🇸', region:'america', flag:'', duration:'9h 30m', price:349, desc:'La Grande Mela', img:'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&auto=format&fit=crop' },
  { id:4, city:'Tokyo', country:'Giappone', emoji:'🇯🇵', region:'asia', flag:'', duration:'12h 40m', price:499, desc:'Tradizione e modernità', img:'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop' },
  { id:5, city:'Dubai', country:'EAU', emoji:'🇦🇪', region:'asia', flag:'', duration:'5h 50m', price:179, desc:'La città del futuro', img:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop' },
  { id:6, city:'Barcellona', country:'Spagna', emoji:'🇪🇸', region:'europa', flag:'', duration:'2h 20m', price:49, desc:'Gaudì e tapas', img:'https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?q=80&w=1200&auto=format&fit=crop' },
  { id:7, city:'Nairobi', country:'Kenya', emoji:'🇰🇪', region:'africa', flag:'', duration:'7h 15m', price:299, desc:'Safari indimenticabili', img:'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop' },
  { id:8, city:'Londra', country:'UK', emoji:'🇬🇧', region:'europa', flag:'', duration:'2h 25m', price:69, desc:'Big Ben e molto altro', img:'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop' },
  { id:9, city:'San Paolo', country:'Brasile', emoji:'🇧🇷', region:'america', flag:'', duration:'11h 00m', price:419, desc:'Energia e cultura', img:'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1200&auto=format&fit=crop' },
  { id:10,city:'Singapore', country:'Singapore', emoji:'🇸🇬', region:'asia', flag:'', duration:'13h 30m', price:559, desc:'Il giardino nella città', img:'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1200&auto=format&fit=crop' },
  { id:11,city:'Amsterdam', country:'Olanda', emoji:'🇳🇱', region:'europa', flag:'', duration:'2h 10m', price:55, desc:'Canali e tulipani', img:'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1200&auto=format&fit=crop' },
  { id:12,city:'Marrakech', country:'Marocco', emoji:'🇲🇦', region:'africa', flag:'', duration:'3h 05m', price:89, desc:'I suk e le spezie', img:'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?q=80&w=1200&auto=format&fit=crop' }
];

const fleetData = {
  a350: {
    name: 'Airbus A350-900',
    subtitle: 'Il gioiello della nostra flotta',
    emoji: '✈️',
    img: 'images/fleet/a350.png',
    specs: [
      { val: '313', label: 'Passeggeri' },
      { val: '15.000', label: 'km di autonomia' },
      { val: '903', label: 'km/h velocità' },
      { val: '2021', label: 'Anno ingresso' },
    ],
    desc: 'Il nostro fiore all\'occhiello. Costruito con materiali compositi avanzati, l\'A350 riduce i consumi del 25% rispetto alle generazioni precedenti. Cabina più silenziosa, umidità più alta e pressione ottimizzata per un viaggio più confortevole.'
  },
  b787: {
    name: 'Boeing 787-9 Dreamliner',
    subtitle: 'L\'innovazione al servizio del comfort',
    emoji: '🛫',
    img: 'images/fleet/b787.png',
    specs: [
      { val: '296', label: 'Passeggeri' },
      { val: '14.140', label: 'km di autonomia' },
      { val: '903', label: 'km/h velocità' },
      { val: '2019', label: 'Anno ingresso' },
    ],
    desc: 'Il Dreamliner porta la tecnologia dei materiali compositi al centro dell\'esperienza passeggero. Finestre più grandi del 65%, illuminazione LED adattiva e la più bassa pressione di cabina su rotte long-haul per arrivare a destinazione riposati.'
  },
  a220: {
    name: 'Airbus A220-300',
    subtitle: 'Perfetto per le rotte europee',
    emoji: '🛩️',
    img: 'images/fleet/a220.png',
    specs: [
      { val: '130', label: 'Passeggeri' },
      { val: '6.300', label: 'km di autonomia' },
      { val: '871', label: 'km/h velocità' },
      { val: '2022', label: 'Anno ingresso' },
    ],
    desc: 'Compatto ma senza compromessi sul comfort. L\'A220 è il nostro cavallo di battaglia per le rotte europee e nazionali. Due soli motori ultra-efficienti, sedili 2-3 con nessun middle seat in Business, e silenziosità record.'
  }
};

const testimonials = [
  [
    { name:'Giulia M.', route:'Milano → New York', avatar:'G', stars:5, text:'"Un\'esperienza straordinaria dalla partenza all\'atterraggio. Il personale di bordo è stato eccezionale e il cibo di Business Class ha superato ogni aspettativa. Tornerò sicuramente!"' },
    { name:'Marco R.', route:'Roma → Tokyo', avatar:'M', stars:5, text:'"12 ore di volo sembravano 6. I sedili flat-bed in Business sono spaziosissimi, il Wi-Fi ha funzionato perfettamente per tutta la durata. AzureSky è diventata la mia compagnia preferita."' },
  ],
  [
    { name:'Sofia L.', route:'Torino → Barcellona', avatar:'S', stars:5, text:'"Il check-in online è semplicissimo, l\'imbarco rapidissimo. In Economy si sta meglio che in molte Business class di altri vettori. Prezzo competitivo e servizio top."' },
    { name:'Andrea P.', route:'Milano → Dubai', avatar:'A', stars:4, text:'"Volo puntuale, personale gentile e professionale. Il menu a bordo era vario e gustoso. Ho apprezzato molto la possibilità di compensare la CO₂ durante l\'acquisto del biglietto."' },
  ],
  [
    { name:'Francesca B.', route:'Roma → Londra', avatar:'F', stars:5, text:'"Primo volo con AzureSky e sono rimasta sorpresa positivamente. App intuitiva, posti comodi, intrattenimento con tantissime opzioni. Sicuramente non l\'ultimo volo con voi!"' },
    { name:'Luca V.', route:'Milano → Singapore', avatar:'L', stars:5, text:'"La suite in First Class è qualcosa di unico. Privacy totale, letto matrimoniale, menù degustazione con vini selezionati. Un\'esperienza che ricorderò a lungo."' },
  ]
];

/* ── Subscription selection tracking ─────────────────── */
let selectedSubscription = null;

/* ── Subscription selection function ──────────────────── */
window.selectSubscription = function(planName, element) {
  // Remove selected class from all pricing cards
  document.querySelectorAll('.pricing-card').forEach(card => {
    card.classList.remove('pricing-card--selected');
  });
  
  // Add selected class to the clicked card
  if (element) {
    element.closest('.pricing-card').classList.add('pricing-card--selected');
  }
  
  // Store the selected subscription
  selectedSubscription = planName;
  
  // Show confirmation
  showToast(`✓ Abbonamento ${planName} selezionato!`);
  
  console.log('Subscription selected:', planName);
};

/* ── Scroll progress bar ──────────────────────────────── */
const scrollProgress = document.getElementById('scrollProgress');

function updateScrollProgress () {
  const scrollTop = window.scrollY;
  const docH      = document.documentElement.scrollHeight - window.innerHeight;
  const pct       = docH > 0 ? (scrollTop / docH) * 100 : 0;
  if (scrollProgress) scrollProgress.style.width = `${pct}%`;
}

/* ── Navbar scroll effect ─────────────────────────────── */
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 5);
  updateScrollProgress();
  lastScroll = y;
}, { passive: true });

/* ── Hamburger menu ───────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Close menu when mobile action buttons are clicked
navLinks.querySelectorAll('.mobile-actions button').forEach(btn => {
  btn.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ── Smooth scroll helper ─────────────────────────────── */
window.scrollTo = function (selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

/* ── Intersection Observer (all reveal variants) ─────── */
const REVEAL_SEL = '.reveal-up, .reveal-scale, .reveal-left, .reveal-right';

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

function observeAll () {
  document.querySelectorAll(REVEAL_SEL).forEach(el => {
    if (!el.classList.contains('visible')) revealObserver.observe(el);
  });
}

/* ── Counter animation ────────────────────────────────── */
function animateCounters () {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    const duration = 1600;
    const start = performance.now();
    function update (now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target;
    }
    requestAnimationFrame(update);
  });
}

const heroObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) { animateCounters(); heroObserver.disconnect(); }
}, { threshold: .5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroObserver.observe(heroStats);

/* ── Destinations ─────────────────────────────────────── */
function renderDestinations (filter = 'all') {
  const grid = document.getElementById('destGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = filter === 'all' ? destinations : destinations.filter(d => d.region === filter);

  filtered.forEach((d, i) => {
    const card = document.createElement('div');
    card.className = 'dest-card';
    card.style.animationDelay = `${(i % 6) * 0.06}s`;
    card.innerHTML = `
      <div class="dest-img" style="background:${getGradient(d.region)}">
        <img src="${d.img}" alt="${d.city}" class="dest-image" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;opacity:0.7" />
        <div class="dest-overlay"></div>
        <span style="position:relative;z-index:1;filter:drop-shadow(0 4px 12px rgba(0,0,0,.3))">${d.flag}</span>
        <span class="dest-badge">${d.emoji} ${d.country}</span>
      </div>
      <div class="dest-body">
        <h3>${d.city}</h3>
        <p style="font-size:.85rem;color:var(--light);margin-bottom:10px">${d.desc}</p>
        <div class="dest-meta">
          <span class="dest-duration">✈ ${d.duration}</span>
          <span class="dest-price"><small>da </small>€${d.price}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => showToast(`Ricerca voli per ${d.city}…`));
    grid.appendChild(card);
  });
}

function getGradient (region) {
  const g = {
    europa:  'linear-gradient(135deg, #1a1a2e, #16213e)',
    america: 'linear-gradient(135deg, #0f3460, #533483)',
    asia:    'linear-gradient(135deg, #1a0a2e, #2d1b69)',
    africa:  'linear-gradient(135deg, #3d0c02, #a0522d)',
  };
  return g[region] || g.europa;
}

// Filter buttons — with smooth fade transition
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const grid = document.getElementById('destGrid');
    if (grid) {
      grid.classList.add('filtering');
      setTimeout(() => {
        renderDestinations(btn.dataset.filter);
        grid.classList.remove('filtering');
      }, 220);
    } else {
      renderDestinations(btn.dataset.filter);
    }
  });
});

/* ── Fleet tabs ───────────────────────────────────────── */
function renderFleet (key) {
  const data = fleetData[key];
  const display = document.getElementById('fleetDisplay');
  if (!display || !data) return;

  display.innerHTML = `
    <div class="fleet-visual">
      <img src="${data.img}" alt="${data.name}" style="width:100%;height:auto;max-height:250px;object-fit:contain" />
    </div>
    <div class="fleet-info">
      <h3>${data.name}</h3>
      <p class="fleet-subtitle">${data.subtitle}</p>
      <div class="fleet-specs">
        ${data.specs.map(s => `
          <div class="spec-item">
            <span class="spec-val">${s.val}</span>
            <span class="spec-label">${s.label}</span>
          </div>
        `).join('')}
      </div>
      <p class="fleet-desc">${data.desc}</p>
    </div>
  `;
  initIcons();
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const display = document.getElementById('fleetDisplay');
    display.style.opacity = '0';
    display.style.transform = 'translateY(16px)';
    setTimeout(() => {
      renderFleet(btn.dataset.tab);
      display.style.transition = 'opacity .4s, transform .4s';
      display.style.opacity = '1';
      display.style.transform = 'translateY(0)';
    }, 200);
  });
});

/* ── Testimonials slider ──────────────────────────────── */
let currentSlide = 0;

function renderTestimonials () {
  const slider = document.getElementById('testimonialSlider');
  const dots   = document.getElementById('sliderDots');
  if (!slider) return;

  slider.innerHTML = '';
  dots.innerHTML   = '';

  testimonials.forEach((group, idx) => {
    const slide = document.createElement('div');
    slide.className = `testimonial-slide ${idx === 0 ? 'active' : ''}`;
    slide.innerHTML = group.map(t => `
      <div class="testimonial-card">
        <div class="stars">${'★'.repeat(t.stars)}</div>
        <p class="testimonial-text">${t.text}</p>
        <div class="testimonial-author">
          <div class="author-avatar">${t.avatar}</div>
          <div>
            <p class="author-name">${t.name}</p>
            <p class="author-route">${t.route}</p>
          </div>
        </div>
      </div>
    `).join('');
    slider.appendChild(slide);

    const dot = document.createElement('div');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(idx));
    dots.appendChild(dot);
  });
}

function goToSlide (idx) {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots   = document.querySelectorAll('.dot');
  slides[currentSlide]?.classList.remove('active');
  dots[currentSlide]?.classList.remove('active');
  currentSlide = (idx + testimonials.length) % testimonials.length;
  slides[currentSlide]?.classList.add('active');
  dots[currentSlide]?.classList.add('active');
}

document.getElementById('nextBtn')?.addEventListener('click', () => goToSlide(currentSlide + 1));
document.getElementById('prevBtn')?.addEventListener('click', () => goToSlide(currentSlide - 1));

// Auto-advance
setInterval(() => goToSlide(currentSlide + 1), 5000);

/* ── Swap button ──────────────────────────────────────── */
document.getElementById('swapBtn')?.addEventListener('click', () => {
  const from = document.getElementById('from');
  const to   = document.getElementById('to');
  if (!from || !to) return;
  [from.value, to.value] = [to.value, from.value];
});

/* ── Set default dates ────────────────────────────────── */
function setDefaultDates () {
  const dep = document.getElementById('departure');
  const ret = document.getElementById('returnDate');
  if (!dep || !ret) return;
  const today   = new Date();
  const oneWeek = new Date(today);
  const twoWeek = new Date(today);
  oneWeek.setDate(today.getDate() + 7);
  twoWeek.setDate(today.getDate() + 14);
  
  // Impostiamo la data minima iniziale su oggi
  const todayStr = today.toISOString().split('T')[0];
  dep.min = todayStr;
  ret.min = todayStr;
  
  dep.value = oneWeek.toISOString().split('T')[0];
  ret.value = twoWeek.toISOString().split('T')[0];

  // FIX: Aggiornamento dinamico per impedire data ritorno antecedente a partenza
  dep.addEventListener('change', (e) => {
    ret.min = e.target.value;
    if (ret.value && ret.value < e.target.value) {
      ret.value = e.target.value;
    }
  });
}

/* ── Search handler ───────────────────────────────────── */
window.handleSearch = function () {
  const from    = document.getElementById('from')?.value.trim();
  const to      = document.getElementById('to')?.value.trim();
  const dep     = document.getElementById('departure')?.value;
  const pax     = document.getElementById('passengers')?.value;

  if (!from || !to) {
    showToast('Inserisci partenza e destinazione!');
    return;
  }
  if (!dep) { showToast('Seleziona la data di partenza!'); return; }
  showToast(`Ricerca voli: ${from} → ${to} il ${formatDate(dep)} per ${pax} passeggero/i…`);
};

function formatDate (dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('it-IT', { day:'2-digit', month:'long', year:'numeric' });
}

/* ── Contact form ─────────────────────────────────────── */
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Messaggio inviato! Ti risponderemo entro 24 ore.');
  e.target.reset();
});

/* ── Modals ───────────────────────────────────────────── */
window.openModal = function (id) {
  document.getElementById(id)?.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function (id) {
  document.getElementById(id)?.classList.remove('open');
  document.body.style.overflow = '';
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

/* ── Modal tabs ───────────────────────────────────────── */
document.querySelectorAll('.modal-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

window.switchModalTab = function (tabName) {
  document.querySelectorAll('.modal-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.modalTab === tabName);
  });
};

/* ── Toast ────────────────────────────────────────────── */
let toastTimer;
window.showToast = function (msg, duration = 3200) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = msg;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), duration);
};

/* ── Login form (demo) ────────────────────────────────── */
document.getElementById('loginForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  closeModal('loginModal');
  showToast('Accesso effettuato. Benvenuto su AzureSky!');
});

/* ── Parallax hero on mouse move ─────────────────────── */
const hero = document.querySelector('.hero');
if (hero) {
  hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth  - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 10;
    document.querySelector('.hero-bg')?.style.setProperty('transform', `translate(${x * 0.5}px, ${y * 0.5}px)`);
  }, { passive: true });
}

/* ── Active nav link on scroll ────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navItems.forEach(a => a.classList.remove('active-nav'));
      const link = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      link?.classList.add('active-nav');
    }
  });
}, { threshold: .35 });

sections.forEach(s => sectionObserver.observe(s));

/* ── Keyboard navigation for filter buttons ───────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
  });
});

/* ── Pricing toggle ───────────────────────────────────── */
let isAnnual = false;

function animatePrice (el, newVal) {
  el.classList.add('pop');
  setTimeout(() => {
    el.textContent = newVal;
    el.classList.remove('pop');
  }, 160);
}

function updatePricing (annual) {
  const amounts = document.querySelectorAll('.price-amount');
  const periods = document.querySelectorAll('.billing-period');
  const lblM    = document.getElementById('lblMonthly');
  const lblA    = document.getElementById('lblAnnual');
  const toggle  = document.getElementById('pricingToggle');

  toggle?.classList.toggle('on', annual);
  lblM?.classList.toggle('active-toggle', !annual);
  lblA?.classList.toggle('active-toggle', annual);

  amounts.forEach(el => {
    const target = annual ? +el.dataset.annual : +el.dataset.monthly;
    animatePrice(el, target);
  });

  periods.forEach(el => {
    el.textContent = annual ? 'annualmente' : 'mensilmente';
  });
}

document.getElementById('pricingToggle')?.addEventListener('click', () => {
  isAnnual = !isAnnual;
  updatePricing(isAnnual);
});

document.getElementById('lblAnnual')?.addEventListener('click', () => {
  if (!isAnnual) { isAnnual = true; updatePricing(true); }
});
document.getElementById('lblMonthly')?.addEventListener('click', () => {
  if (isAnnual) { isAnnual = false; updatePricing(false); }
});

/* ── Init ─────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderDestinations();
  renderFleet('a350');
  renderTestimonials();
  setDefaultDates();
  observeAll();
  initIcons();

  // Small delay so initial reveal animations play on load
  setTimeout(observeAll, 100);
});