/* ============================================================
   Construit le site à partir de data.js — pas besoin d'y toucher
   quand on modifie juste le contenu.

   Tous les blocs de data.js sont FACULTATIFS : si tu commentes ou
   supprimes un bloc (ex. "stat", "gallery", ou une section entière
   comme "travaux"), le site l'ignore et affiche le reste normalement.

   Dans la plupart des textes de data.js, tu peux utiliser :
     **texte**       → texte en gras
     *texte*         → texte en italique
     [texte](https://exemple.com)  → lien cliquable
   ============================================================ */

function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Convertit la mini-syntaxe **gras** / *italique* / [texte](url) en HTML.
function mdInline(str) {
  if (!str) return "";
  let out = escapeHtml(str);
  out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return out;
}

// Comme el(), mais interprète la mini-syntaxe Markdown du texte.
function mdEl(tag, className, text) {
  return el(tag, className, mdInline(text));
}

// Exécute fn ; si data.js contient une erreur, log en console au lieu de
// bloquer l'affichage du reste du site.
function safe(label, fn) {
  try {
    fn();
  } catch (err) {
    console.error(`Site : problème en affichant "${label}" —`, err);
  }
}

function show(id, visible) {
  const node = document.getElementById(id);
  if (node) node.style.display = visible ? "" : "none";
}

function setTextOrHide(id, value) {
  const node = document.getElementById(id);
  if (!node) return;
  if (value) {
    node.textContent = value;
    node.style.display = "";
  } else {
    node.style.display = "none";
  }
}

// Comme setTextOrHide, mais interprète **gras** / *italique* / [lien](url).
function setMdOrHide(id, value) {
  const node = document.getElementById(id);
  if (!node) return;
  if (value) {
    node.innerHTML = mdInline(value);
    node.style.display = "";
  } else {
    node.style.display = "none";
  }
}

function renderSectionTitles() {
  const s = SITE_DATA.sections || {};
  for (const key of ["plongee", "formation", "stages", "travaux", "competences"]) {
    const conf = s[key];
    const eyebrow = (conf && conf.eyebrow) || "";
    const eyebrowEl = document.getElementById(key + "Eyebrow");
    const titleEl = document.getElementById(key + "Title");
    const navLinkEl = document.getElementById("navLink-" + key);
    if (eyebrowEl) eyebrowEl.textContent = eyebrow;
    if (titleEl) titleEl.textContent = conf && conf.title || "";
    if (navLinkEl) navLinkEl.textContent = eyebrow;
  }
  document.getElementById("formationTerrainTitle").textContent =
    (s.formation && s.formation.terrainTitle) || "";
  document.getElementById("plongeeGalleryTitle").textContent =
    (s.plongee && s.plongee.galleryTitle) || "";
  if (s.contact) {
    setTextOrHide("contactTitle", s.contact.title);
    setMdOrHide("contactLead", s.contact.lead);
  }
}

function renderProfile() {
  const p = SITE_DATA.profile;
  if (!p) return;

  if (p.photo) {
    document.getElementById("heroPhoto").src = p.photo;
    document.getElementById("heroPhoto").alt = "Photo de " + (p.name || "");
  }
  setTextOrHide("heroAvailability", p.availability);
  setTextOrHide("heroName", p.name);
  setTextOrHide("heroRole", p.role);
  setTextOrHide("heroTagline", p.tagline);
  setMdOrHide("heroIntro", p.intro);

  if (p.cvFile) {
    document.getElementById("heroCvLink").href = p.cvFile;
    document.getElementById("contactCvLink").href = p.cvFile;
  } else {
    show("heroCvLink", false);
    show("contactCvLink", false);
  }

  const langRow = document.getElementById("langRow");
  if (p.languages && p.languages.length) {
    p.languages.forEach(l => {
      const pill = el("span", "lang-pill");
      pill.appendChild(document.createTextNode(`${l.lang} — ${l.level}`));
      if (l.verifyUrl) {
        pill.appendChild(document.createTextNode(" ("));
        const check = el("a", "lang-verify", "check");
        check.href = l.verifyUrl;
        check.target = "_blank";
        check.rel = "noopener";
        pill.appendChild(check);
        pill.appendChild(document.createTextNode(")"));
      }
      langRow.appendChild(pill);
    });
  } else {
    show("langRow", false);
  }

  // Masque la section "intro" si elle n'a plus ni texte ni langues
  show("introSection", Boolean(p.intro || (p.languages && p.languages.length)));

  if (p.email) {
    document.getElementById("contactEmail").href = `mailto:${p.email}`;
  }
  const phoneLink = document.getElementById("contactPhone");
  if (p.phone) {
    phoneLink.href = `tel:${p.phone.replace(/\s+/g, "")}`;
    phoneLink.textContent = p.phone;
  } else {
    show("contactPhone", false);
  }
}

function renderPlongee() {
  const d = SITE_DATA.plongee;
  if (!d) { show("plongee", false); return; }

  setMdOrHide("plongeeIntro", d.intro);

  show("plongeeStatCard", Boolean(d.stat && d.stat.value));
  if (d.stat && d.stat.value) {
    document.getElementById("plongeeStatValue").textContent = d.stat.value;
    document.getElementById("plongeeStatLabel").textContent = d.stat.label || "";
  }

  const hasCerts = d.certifications && d.certifications.length;
  show("certSection", Boolean(hasCerts));
  if (hasCerts) {
    const certGroups = document.getElementById("certGroups");
    d.certifications.forEach(group => {
      const wrap = el("div", "cert-group");
      const heading = el("div", "cert-group-heading");
      if (group.logo) {
        const logo = el("img", "cert-group-logo");
        logo.src = group.logo;
        logo.alt = group.groupe;
        heading.appendChild(logo);
      }
      heading.appendChild(el("h4", "cert-group-title", group.groupe));
      wrap.appendChild(heading);
      const grid = el("div", "cert-grid");
      (group.items || []).forEach(c => {
        const card = el("div", "cert-card");
        card.appendChild(el("span", "cert-name", c.name));
        if (c.status) card.appendChild(el("span", "cert-status", c.status));
        grid.appendChild(card);
      });
      wrap.appendChild(grid);
      certGroups.appendChild(wrap);
    });
  }

  // "gallery" est facultatif : absent ou vide → message d'attente
  show("gallerySection", true);
  const gallery = document.getElementById("galleryGrid");
  if (!d.gallery || d.gallery.length === 0) {
    gallery.appendChild(el("div", "gallery-empty",
      "Les photos de plongée arrivent bientôt — dépose-les dans <code>assets/img/plongee/</code> et ajoute-les dans <code>data.js</code>."));
  } else {
    galleryData = d.gallery;
    d.gallery.forEach((g, index) => {
      const item = el("div", "gallery-item");
      const img = el("img");
      img.src = g.thumb || g.src;
      img.alt = g.caption || g.lieu || "Photo de plongée";
      img.loading = "lazy";
      item.appendChild(img);
      item.addEventListener("click", () => openLightbox(index));
      gallery.appendChild(item);
    });
  }
}

// Ajoute titre / sous-titre / détails d'une entrée à un conteneur donné.
function appendTimelineBody(container, it) {
  container.appendChild(mdEl("h3", null, it.title));
  if (it.place) container.appendChild(mdEl("p", "timeline-place", it.place));
  if (it.details && it.details.length) {
    const ul = el("ul");
    it.details.forEach(d => ul.appendChild(mdEl("li", null, d)));
    container.appendChild(ul);
  }
}

function timelineItemEl(it) {
  const wrap = el("div", "timeline-item");
  wrap.appendChild(el("span", "timeline-period", it.period));

  if (it.items && it.items.length) {
    // Plusieurs entrées la même année : un sous-bloc par entrée,
    // sous un seul repère de date.
    it.items.forEach(sub => {
      const subWrap = el("div", "timeline-subitem");
      appendTimelineBody(subWrap, sub);
      wrap.appendChild(subWrap);
    });
  } else {
    appendTimelineBody(wrap, it);
  }
  return wrap;
}

function renderTimeline(sectionId, containerId, items) {
  if (!items || items.length === 0) { show(sectionId, false); return; }
  const container = document.getElementById(containerId);
  items.forEach(it => container.appendChild(timelineItemEl(it)));
}

// Formation a deux sous-parties facultatives indépendamment : le parcours
// académique (sous le h2) et les formations terrain (sous leur propre h3).
function renderFormation() {
  const d = SITE_DATA.formation || {};
  const academique = d.academique || [];
  const terrain = d.terrain || [];

  if (academique.length === 0 && terrain.length === 0) { show("formation", false); return; }

  show("formationTimeline", academique.length > 0);
  if (academique.length) {
    const container = document.getElementById("formationTimeline");
    academique.forEach(it => container.appendChild(timelineItemEl(it)));
  }

  show("formationTerrainSection", terrain.length > 0);
  if (terrain.length) {
    const container = document.getElementById("formationTerrainTimeline");
    terrain.forEach(it => container.appendChild(timelineItemEl(it)));
  }
}

function renderTravaux() {
  const items = SITE_DATA.travaux;
  if (!items || items.length === 0) { show("travaux", false); return; }
  const grid = document.getElementById("travauxGrid");
  items.forEach(t => {
    const card = el("div", "work-card");
    card.appendChild(el("span", "period", t.period));
    card.appendChild(mdEl("h3", null, t.title));
    card.appendChild(mdEl("p", null, t.desc));
    const tagRow = el("div", "tag-row");
    (t.tags || []).forEach(tag => tagRow.appendChild(el("span", "tag", tag)));
    card.appendChild(tagRow);

    if (t.links && t.links.length) {
      const linkRow = el("div", "work-links");
      t.links.forEach(link => {
        const a = el("a", "work-link", link.label);
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener";
        linkRow.appendChild(a);
      });
      card.appendChild(linkRow);
    }

    grid.appendChild(card);
  });
}

function renderCompetences() {
  const items = SITE_DATA.competences;
  if (!items || items.length === 0) { show("competences", false); return; }
  const grid = document.getElementById("skillsGrid");
  items.forEach(c => {
    const block = el("div", "skill-block");
    block.appendChild(el("h3", null, c.categorie));
    const ul = el("ul");
    (c.items || []).forEach(i => ul.appendChild(mdEl("li", null, i)));
    block.appendChild(ul);
    grid.appendChild(block);
  });
}

/* ---------- Carrousel / zoom photo ---------- */
let galleryData = [];
let galleryIndex = 0;

function showLightboxPhoto() {
  const photo = galleryData[galleryIndex];
  if (!photo) return;
  const img = document.getElementById("lightboxImg");
  img.src = photo.src;
  img.alt = photo.caption || photo.lieu || "Photo de plongée";

  setTextOrHide("lightboxCaption", photo.caption);
  setTextOrHide("lightboxLieu", photo.lieu);

  const counter = document.getElementById("lightboxCounter");
  counter.textContent = galleryData.length > 1 ? `${galleryIndex + 1} / ${galleryData.length}` : "";

  const multi = galleryData.length > 1;
  show("lightboxPrev", multi);
  show("lightboxNext", multi);
}

function openLightbox(index) {
  galleryIndex = index;
  showLightboxPhoto();
  document.getElementById("lightbox").classList.add("open");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}
function lightboxPrev() {
  if (!galleryData.length) return;
  galleryIndex = (galleryIndex - 1 + galleryData.length) % galleryData.length;
  showLightboxPhoto();
}
function lightboxNext() {
  if (!galleryData.length) return;
  galleryIndex = (galleryIndex + 1) % galleryData.length;
  showLightboxPhoto();
}

/* ---------- Nav mobile ---------- */
function setupNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
    });
  });
}

function setupLightbox() {
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrev").addEventListener("click", lightboxPrev);
  document.getElementById("lightboxNext").addEventListener("click", lightboxNext);
  document.getElementById("lightbox").addEventListener("click", (e) => {
    if (e.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (!document.getElementById("lightbox").classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxPrev();
    if (e.key === "ArrowRight") lightboxNext();
  });
}

// Réordonne les <section> du <main> ET les liens du menu selon
// SITE_DATA.sectionOrder. "accueil"/l'intro restent en tête et
// "contact" reste en dernier dans les deux cas.
function applySectionOrder() {
  const order = SITE_DATA.sectionOrder;
  if (!order || !order.length) return;

  const main = document.querySelector("main");
  const contact = document.getElementById("contact");
  order.forEach(id => {
    const section = document.getElementById(id);
    if (section) main.insertBefore(section, contact);
  });

  const navLinks = document.getElementById("navLinks");
  const navContact = document.getElementById("navItem-contact");
  order.forEach(id => {
    const item = document.getElementById("navItem-" + id);
    if (item) navLinks.insertBefore(item, navContact);
  });
}

// Recalcule l'alternance de fond blanc/bleu selon l'ordre et la visibilité
// réels des sections (à appeler après le réordonnement et les masquages).
function applyAlternateBackgrounds() {
  const sections = Array.from(document.querySelectorAll("main > section.reorderable-section"))
    .filter(sec => sec.style.display !== "none");
  sections.forEach((sec, i) => {
    sec.classList.toggle("section-tint", i % 2 === 0);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  safe("ordre des sections", applySectionOrder);
  safe("titres de section", renderSectionTitles);
  safe("profil", renderProfile);
  safe("plongée", renderPlongee);
  safe("formation", renderFormation);
  safe("stages", () => renderTimeline("stages", "stagesTimeline", SITE_DATA.stages));
  safe("travaux", renderTravaux);
  safe("compétences", renderCompetences);
  safe("alternance des fonds", applyAlternateBackgrounds);
  safe("menu mobile", setupNav);
  safe("galerie photo", setupLightbox);

  document.getElementById("year").textContent = new Date().getFullYear();
});
