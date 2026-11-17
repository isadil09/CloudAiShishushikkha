/* ==========================================================================
   Shared helpers for index.html and series.html
   Needs data.js to be loaded first (seriesData, toBengaliNum, toEnglishNum).
   ========================================================================== */

/* ---- Contact settings: edit these two lines ----------------------------- */
const CONTACT = {
  // Your WhatsApp number with country code, digits only. Example: "8801XXXXXXXXX"
  // Leave empty and WhatsApp will ask the customer to pick a contact (old behaviour).
  whatsappNumber: "",
  messengerUser: "shishushikkha1"
};
/* ------------------------------------------------------------------------- */

const MESSENGER_URL = `https://m.me/${CONTACT.messengerUser}`;

// Pastel cover colours, taken from the Oxford Reading Circle covers.
// Deep "book cloth" colours for generated covers (title is set in ivory on top).
const COVER_COLORS = ["#1f3a5f", "#1f5457", "#6b2d3e", "#2f5a3f", "#4a3a6b", "#8a5a2b"];

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const seriesTotal = (series) => series.books.reduce((sum, b) => sum + toEnglishNum(b.price), 0);

function waHref(text) {
  const base = CONTACT.whatsappNumber ? `https://wa.me/${CONTACT.whatsappNumber}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(text)}`;
}

/* ---- Covers --------------------------------------------------------------
   data.js points many series and books at the same placeholder picture
   (series_cover.jpg / book.jpeg). Showing the Oxford cover on "Number Fun"
   is misleading, so a picture only counts as a real cover when it is not
   shared. Everything else gets a clean generated cover with the title.
   - Series: the first series that uses a shared picture keeps it
     (series_cover.jpg is the Oxford Reading Circle photo).
   - Books: a picture used by more than one book is a placeholder.
   Give an item its own image in data.js and it is used automatically.
   -------------------------------------------------------------------------- */
const bookImageUses = {};
seriesData.forEach((s) =>
  s.books.forEach((b) => {
    if (b.coverImg) bookImageUses[b.coverImg] = (bookImageUses[b.coverImg] || 0) + 1;
  })
);

function seriesRealCover(series) {
  if (!series.coverImg) return null;
  return seriesData.findIndex((s) => s.coverImg === series.coverImg) === seriesData.indexOf(series)
    ? series.coverImg
    : null;
}

function bookRealCover(book) {
  return book.coverImg && bookImageUses[book.coverImg] === 1 ? book.coverImg : null;
}

function generatedCover({ title, sub, color }) {
  return `<div class="gen" style="--c:${color}" aria-hidden="true">
    <span class="gen-brand">শিশুশিক্ষা</span>
    <span class="gen-title">${esc(title)}</span>
    <span class="gen-sub">${esc(sub || "")}</span>
  </div>`;
}

// kind: "series" (square) or "book" (2:3)
function coverMarkup(kind, { img, title, sub, color }) {
  const data = `data-title="${esc(title)}" data-sub="${esc(sub || "")}" data-color="${color}"`;
  const inner = img
    ? `<img src="${esc(img)}" alt="${esc(title)}" loading="lazy" decoding="async" onerror="coverFallback(this)">`
    : generatedCover({ title, sub, color });
  return `<div class="cover is-${kind}" ${data}>${inner}</div>`;
}

// If a picture fails to load, swap in the generated cover.
function coverFallback(img) {
  const d = img.closest(".cover").dataset;
  img.outerHTML = generatedCover({ title: d.title, sub: d.sub, color: d.color });
}

/* ---- Order dialog ------------------------------------------------------- */
let dialogEl = null;

function ensureDialog() {
  if (dialogEl) return dialogEl;
  dialogEl = document.createElement("dialog");
  dialogEl.setAttribute("aria-labelledby", "dlg-title");
  dialogEl.innerHTML = `
    <button class="dlg-close" type="button" aria-label="বন্ধ করুন"><span aria-hidden="true">&times;</span></button>
    <div class="dlg-body">
      <div id="dlg-cover" class="dlg-cover"></div>
      <div class="dlg-info">
        <p id="dlg-kicker" class="dlg-kicker"></p>
        <h2 id="dlg-title"></h2>
        <p id="dlg-price" class="dlg-price"></p>
      </div>
      <section id="dlg-pages" class="dlg-pages" hidden>
        <h3>বইয়ের ভিতরের পেজ</h3>
        <div id="dlg-pages-strip" class="pages"></div>
        <p id="dlg-pages-note" class="pages-note"></p>
      </section>
      <div class="dlg-actions">
        <p class="dlg-hint">বইটি অর্ডার করতে বা বিস্তারিত জানতে মেসেজ করুন:</p>
        <a id="dlg-wa" class="btn btn-whatsapp" target="_blank" rel="noopener">
          <i class="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp -এ মেসেজ দিন
        </a>
        <a id="dlg-msg" class="btn btn-messenger" target="_blank" rel="noopener" href="${MESSENGER_URL}">
          <i class="fab fa-facebook-messenger" aria-hidden="true"></i> Messenger -এ কথা বলুন
        </a>
      </div>
    </div>`;
  document.body.appendChild(dialogEl);

  dialogEl.querySelector(".dlg-close").addEventListener("click", () => dialogEl.close());
  // Click on the dimmed backdrop closes the dialog.
  dialogEl.addEventListener("click", (e) => {
    if (e.target === dialogEl) dialogEl.close();
  });
  return dialogEl;
}

/* Five "inside pages" per book. Add real pictures in data.js like this:
   { title: "Primer", price: "১০০", coverImg: "orcp.jpeg",
     pages: ["orcp-1.jpg", "orcp-2.jpg", "orcp-3.jpg", "orcp-4.jpg", "orcp-5.jpg"] }
   Slots without a picture show a quiet placeholder. */
const SAMPLE_PAGE_COUNT = 5;

function renderPages(d, pages) {
  const box = d.querySelector("#dlg-pages");
  if (!pages) { box.hidden = true; return; }   // series dialogs have no pages

  const list = Array.isArray(pages) ? pages.filter(Boolean).slice(0, SAMPLE_PAGE_COUNT) : [];
  let html = "";
  for (let i = 0; i < SAMPLE_PAGE_COUNT; i++) {
    const label = `পেজ ${toBengaliNum(i + 1)}`;
    html += list[i]
      ? `<button class="page" type="button" data-i="${i}" aria-label="${label} বড় করে দেখুন">
           <img src="${esc(list[i])}" alt="${label}" loading="lazy" decoding="async"></button>`
      : `<div class="page is-empty"><span>${label}</span></div>`;
  }
  const strip = d.querySelector("#dlg-pages-strip");
  strip.innerHTML = html;
  strip.querySelectorAll("button.page").forEach((btn) =>
    btn.addEventListener("click", () => openLightbox(list, Number(btn.dataset.i)))
  );
  d.querySelector("#dlg-pages-note").textContent =
    list.length ? "ছবিতে ক্লিক করলে বড় করে দেখা যাবে।" : "এই বইয়ের ভিতরের পেজের ছবি শীঘ্রই যোগ করা হবে।";
  box.hidden = false;
}

function openOrder({ kicker, title, priceText, cover, message, pages }) {
  const d = ensureDialog();
  d.querySelector("#dlg-kicker").textContent = kicker;
  d.querySelector("#dlg-title").textContent = title;
  d.querySelector("#dlg-price").textContent = priceText;
  d.querySelector("#dlg-cover").innerHTML = cover;
  d.querySelector("#dlg-wa").href = waHref(message);
  renderPages(d, pages);
  d.scrollTop = 0;
  d.showModal();
}

/* ---- Full-screen page viewer -------------------------------------------- */
let lbEl = null;
let lbList = [];
let lbIndex = 0;

function ensureLightbox() {
  if (lbEl) return lbEl;
  lbEl = document.createElement("dialog");
  lbEl.className = "lightbox";
  lbEl.setAttribute("aria-label", "বইয়ের পেজ");
  lbEl.innerHTML = `
    <button class="lb-btn lb-close" type="button" aria-label="বন্ধ করুন"><span aria-hidden="true">&times;</span></button>
    <button class="lb-btn lb-prev" type="button" aria-label="আগের পেজ"><span aria-hidden="true">&#8249;</span></button>
    <div class="lb-stage"><img class="lb-img" alt=""></div>
    <button class="lb-btn lb-next" type="button" aria-label="পরের পেজ"><span aria-hidden="true">&#8250;</span></button>
    <p class="lb-count" aria-live="polite"></p>`;
  document.body.appendChild(lbEl);

  lbEl.querySelector(".lb-close").addEventListener("click", () => lbEl.close());
  lbEl.querySelector(".lb-prev").addEventListener("click", () => lbGo(-1));
  lbEl.querySelector(".lb-next").addEventListener("click", () => lbGo(1));
  // Tap on the dark area (not the picture) closes it.
  lbEl.addEventListener("click", (e) => {
    if (e.target === lbEl || e.target.classList.contains("lb-stage")) lbEl.close();
  });
  lbEl.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") lbGo(1);
    if (e.key === "ArrowLeft") lbGo(-1);
  });
  // Swipe on phones
  let startX = null;
  lbEl.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  lbEl.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) lbGo(dx < 0 ? 1 : -1);
  });
  return lbEl;
}

function lbGo(step) {
  lbIndex = (lbIndex + step + lbList.length) % lbList.length;
  lbShow();
}

function lbShow() {
  const label = `পেজ ${toBengaliNum(lbIndex + 1)}`;
  const img = lbEl.querySelector(".lb-img");
  img.src = lbList[lbIndex];
  img.alt = label;
  lbEl.querySelector(".lb-count").textContent = `${label} / ${toBengaliNum(lbList.length)}`;
  const single = lbList.length < 2;
  lbEl.querySelector(".lb-prev").hidden = single;
  lbEl.querySelector(".lb-next").hidden = single;
}

function openLightbox(list, index) {
  if (!list.length) return;
  ensureLightbox();
  lbList = list;
  lbIndex = index;
  lbShow();
  lbEl.showModal();
}
