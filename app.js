
const translations = {
  fr: {
    discover:"Découvrir", navCatalog:"Catalogue", navHow:"Comment ça marche",
    eyebrow:"SÉLECTION SHOPPING POUR L’ALGÉRIE",
    heroLine1:"Les trouvailles du web.", heroLine2:"Les prix en dinars.",
    heroText:"Explore des produits sélectionnés sur AliExpress et consulte une estimation en dinars algériens avant de visiter le vendeur.",
    explore:"Explorer le catalogue", smallNote:"Prix indicatifs · Vérifie le prix final sur AliExpress",
    goodFinds:"Bonnes trouvailles", oneClick:"Un clic vers AliExpress",
    trustDA:"Affichage en DA", trustDASub:"Conversion indicative",
    trustLinks:"Liens affiliés", trustLinksSub:"Vers les fiches vendeurs",
    trustRate:"Taux actualisable", trustRateSub:"Selon la source configurée",
    catalogEyebrow:"À DÉCOUVRIR", catalogTitle:"Le catalogue",
    catalogSub:"Découvre notre sélection d'outillage et de matériel électrique.",
    searchPlaceholder:"Rechercher un produit…",
    disclaimer:"Les prix en DA sont estimatifs et dépendent du taux de change configuré. Vérifie le prix final, la disponibilité et les frais de livraison sur AliExpress.",
    howEyebrow:"SIMPLE & TRANSPARENT", howTitle:"Comment ça marche ?",
    step1Title:"Découvre", step1Text:"Parcours les produits et recherche ce qui t’intéresse.",
    step2Title:"Compare", step2Text:"Consulte le prix indicatif en dinars et vérifie le prix final.",
    step3Title:"Visite le vendeur", step3Text:"Le bouton ouvre la fiche AliExpress associée au lien configuré.",
    footerText:"Site indépendant de sélection de produits. Non affilié officiellement à AliExpress.",
    footerDisclosure:"Certains liens sont des liens d’affiliation. Une commission peut être perçue si tu achètes via ces liens.",
    noProducts:"Aucun produit ne correspond à ta recherche.",
    seeProduct:"Voir le produit", rateLoading:"Mise à jour du taux…",
    rateUnavailable:"Taux indisponible — réessaie",
    rateVerified:"Taux vérifié", rateFallback:"Taux de secours", rateSource:"DA/USD"
  },
  ar: {
    discover:"تصفّح", navCatalog:"المنتجات", navHow:"كيف يعمل الموقع",
    eyebrow:"اختيارات تسوّق للجزائر",
    heroLine1:"اكتشف منتجات مميزة.", heroLine2:"الأسعار بالدينار.",
    heroText:"تصفّح منتجات مختارة من علي إكسبريس واطّلع على سعر تقديري بالدينار الجزائري قبل زيارة البائع.",
    explore:"اكتشف المنتجات", smallNote:"أسعار تقديرية · تحقّق من السعر النهائي",
    goodFinds:"اكتشافات مميزة", oneClick:"انتقال إلى علي إكسبريس",
    trustDA:"الأسعار بالدينار", trustDASub:"تحويل تقديري",
    trustLinks:"روابط تسويق بالعمولة", trustLinksSub:"إلى صفحات البائعين",
    trustRate:"سعر صرف قابل للتحديث", trustRateSub:"حسب المصدر المعتمد",
    catalogEyebrow:"اكتشف", catalogTitle:"كتالوج المنتجات",
    catalogSub:"اكتشف مجموعة الأدوات والمعدات الكهربائية.",
    searchPlaceholder:"ابحث عن منتج…",
    disclaimer:"الأسعار بالدينار تقديرية وتعتمد على سعر الصرف المحدد. تحقّق من السعر النهائي والتوفر وتكاليف الشحن على علي إكسبريس.",
    howEyebrow:"ببساطة ووضوح", howTitle:"كيف يعمل الموقع؟",
    step1Title:"اكتشف", step1Text:"تصفّح المنتجات وابحث عمّا يناسبك.",
    step2Title:"قارن السعر", step2Text:"اطّلع على السعر التقديري بالدينار وتحقق من السعر النهائي.",
    step3Title:"زر البائع", step3Text:"ينقلك الزر إلى صفحة المنتج على علي إكسبريس.",
    footerText:"موقع مستقل لاختيار المنتجات، وليس تابعًا رسميًا لعلي إكسبريس.",
    footerDisclosure:"قد تتضمن بعض الروابط روابط تسويق بالعمولة وقد نحصل على عمولة عند الشراء.",
    noProducts:"لا توجد منتجات تطابق بحثك.",
    seeProduct:"عرض المنتج", rateLoading:"جارٍ تحديث سعر الصرف…",
    rateUnavailable:"سعر الصرف غير متاح — حاول مجددًا",
    rateVerified:"سعر صرف محدّث", rateFallback:"سعر احتياطي", rateSource:"دينار/دولار"
  }
};

let currentLanguage = "fr";
let exchangeRate = null;
let rateIsLive = false;
let activeCategory = "Tout";

const products = [
  {
    id: 1,
    title: "Kit d'outils mécanique 46 pièces avec douilles et cliquet",
    category: "Outillage",
    usd: 8.44,
    emoji: "🧰",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Se140b44b69a54542b2c1214515ac358bB.jpg?has_lang=1&ver=2_220x220q75.jpg_.avif",
    bg: "#e8edff",
    tag: "Petit prix",
    url: "https://s.click.aliexpress.com/e/_c3ABXSTj"
  },
  {
    id: 2,
    title: "Kit de douilles 46 pièces avec tournevis et embouts",
    category: "Outillage",
    usd: 10.47,
    emoji: "🔧",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S375afa1fb32e4afc9ffc504b786e63c4K.jpg_220x220q75.jpg_.avif",
    bg: "#e0f3ec",
    tag: "Pratique",
    url: "https://s.click.aliexpress.com/e/_c3V1rmhR"
  },
  {
    id: 3,
    title: "Clé universelle double embout réglable 3–17 mm",
    category: "Outillage",
    usd: 5.61,
    emoji: "🛠️",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S442f09d793cb4192a0d7aedbe846c53ce.jpg?has_lang=1&ver=2_220x220q75.jpg_.avif",
    bg: "#fff0d8",
    tag: "À découvrir",
    url: "https://s.click.aliexpress.com/e/_c3QaDUFx"
  },
  {
    id: 4,
    title: "Multimètre numérique Fluke 15B MAX / 17B MAX",
    category: "Électricité",
    usd: 122.48,
    emoji: "⚡",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S0004b32adebf48e7841edce0731182ee2.jpg_220x220q75.jpg_.avif",
    bg: "#fff0d8",
    tag: "Mesure électrique",
    url: "https://s.click.aliexpress.com/e/_c41eAvTF"
  },
  {
    id: 5,
    title: "Multimètre numérique FLUKE F101 KIT",
    category: "Électricité",
    usd: 64.03,
    emoji: "🔌",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S29e93db319214f88b9610d4376340312K.jpg_220x220q75.jpg_.avif",
    bg: "#e0f3ec",
    tag: "Mesure électrique",
    url: "https://s.click.aliexpress.com/e/_c33K9B37"
  }
];

const money = n => Math.ceil(n / 10) * 10;
const formatDA = n =>
  `${money(n).toLocaleString("fr-FR")} DA`;

function applyLanguage(lang) {
  currentLanguage = translations[lang] ? lang : "fr";
  const t = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir =
    currentLanguage === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });

  document.querySelectorAll("[data-lang]").forEach(btn => {
    const active = btn.dataset.lang === currentLanguage;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll(".site-header nav a").forEach((a, i) => {
    a.textContent = i === 0 ? t.navCatalog : t.navHow;
  });

  renderCategories();
  renderProducts();
  updateRateLabel();
}

function updateRateLabel() {
  const label = document.querySelector("#rate-label");
  if (!label) return;

  const t = translations[currentLanguage];

  if (exchangeRate === null) {
    label.textContent = t.rateUnavailable;
  } else {
    label.textContent =
      `${rateIsLive ? t.rateVerified : t.rateFallback} : ` +
      `${exchangeRate.toLocaleString(currentLanguage === "ar" ? "ar-DZ" : "fr-FR")} ` +
      t.rateSource;
  }
}

function renderCategories() {
  const container = document.querySelector("#categories");
  if (!container) return;

  const categories = [
    "Tout",
    ...new Set(products.map(p => p.category))
  ];

  container.innerHTML = categories.map(category =>
    `<button class="filter-btn ${category === activeCategory ? "active" : ""}"
      data-category="${category}">${category}</button>`
  ).join("");
}

function renderProducts() {
  const search = document.querySelector("#search");
  const grid = document.querySelector("#product-grid");
  if (!grid || !search) return;

  const query = search.value.trim().toLocaleLowerCase(
    currentLanguage === "ar" ? "ar" : "fr"
  );

  const shown = products.filter(p =>
    (activeCategory === "Tout" || p.category === activeCategory) &&
    p.title.toLocaleLowerCase().includes(query)
  );

  if (!shown.length) {
    grid.innerHTML =
      `<div class="empty-state">${translations[currentLanguage].noProducts}</div>`;
    return;
  }

  grid.innerHTML = shown.map(p => {
    const price = exchangeRate !== null
      ? formatDA(p.usd * exchangeRate)
      : translations[currentLanguage].rateUnavailable;

    return `
      <article class="product-card">
        <div class="product-image" style="background:${p.bg}">
          <img
            src="${p.image}"
            alt="${p.title}"
            loading="lazy"
            style="width:100%;height:220px;object-fit:contain;display:block"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          >
          <span
            class="placeholder-art"
            role="img"
            aria-label="${p.title}"
            style="display:none;align-items:center;justify-content:center;width:100%;height:220px;font-size:3rem"
          >${p.emoji}</span>
          <span class="product-tag">${p.tag}</span>
        </div>
        <div class="product-info">
          <span class="product-category">${p.category}</span>
          <h3>${p.title}</h3>
          <div class="price-row">
            <span class="price">${price}</span>
            <span class="original">$${p.usd.toFixed(2)}</span>
          </div>
          <div class="product-actions">
            <a href="${p.url}" target="_blank"
              rel="sponsored noopener noreferrer">
              ${translations[currentLanguage].seeProduct} <span>↗</span>
            </a>
          </div>
        </div>
      </article>`;
  }).join("");
}

async function loadRate() {
  const label = document.querySelector("#rate-label");
  const refresh = document.querySelector("#refresh-rate");

  if (label) {
    label.textContent = translations[currentLanguage].rateLoading;
  }
  if (refresh) refresh.disabled = true;

  try {
    const response = await fetch(
      "/.netlify/functions/exchange-rate",
      { cache: "no-store" }
    );

    if (!response.ok) throw new Error("Service taux indisponible");

    const data = await response.json();

    if (!Number.isFinite(Number(data.rate)) || Number(data.rate) <= 0) {
      throw new Error("Taux invalide");
    }

    exchangeRate = Number(data.rate);
    rateIsLive = data.live === true;
    updateRateLabel();
  } catch (error) {
    exchangeRate = null;
    if (label) {
      label.textContent = translations[currentLanguage].rateUnavailable;
    }
    console.error("Erreur de récupération du taux :", error);
  } finally {
    if (refresh) refresh.disabled = false;
    renderProducts();
  }
}

const searchInput = document.querySelector("#search");
if (searchInput) {
  searchInput.addEventListener("input", renderProducts);
}

const categoriesElement = document.querySelector("#categories");
if (categoriesElement) {
  categoriesElement.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeCategory = button.dataset.category;
    renderCategories();
    renderProducts();
  });
}

const refreshButton = document.querySelector("#refresh-rate");
if (refreshButton) {
  refreshButton.addEventListener("click", loadRate);
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage("fr");
loadRate();
setInterval(loadRate, 5 * 60 * 1000);
