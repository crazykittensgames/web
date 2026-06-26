/* JS que permite una traducción más personalizada y controlada*/
const LANGUAGES = [
  { code: "en", label: "English",  flag: "🇬🇧" },
  { code: "es", label: "Español",  flag: "🇪🇸" },
  // { code: "fr", label: "Français", flag: "🇫🇷" },  // ejemplo
];

/* traducciones */
const STRINGS = {

  /* NAV */
  "nav.home":             { en: "Home",             es: "Inicio" },
  "nav.erika":            { en: "Project Erika",    es: "Project Erika" },
  "nav.team":             { en: "Team",             es: "Equipo" },
  "nav.socials":          { en: "Socials",          es: "Redes" },

  /* FOOTER */
  "footer.copy":          { en: "© Crazy Kittens 2026. All rights reserved.",
                            es: "© Crazy Kittens 2026. Todos los derechos reservados." },
  "footer.nav_h2":        { en: "Games",            es: "Juegos" },

  /* INDEX */
  "index.title":          { en: "Crazy Kittens",
                            es: "Crazy Kittens" },
  "index.cover_alt":      { en: "Project Erika - Crazy Kittens",
                            es: "Project Erika - Crazy Kittens" },
  "index.welcome":        { en: "Welcome to <strong class='highlight'>Crazy Kittens</strong>",
                            es: "Bienvenidos a <strong class='highlight'>Crazy Kittens</strong>" },
  "index.welcome_sub":    { en: "Thank you all for the <em>interest, support, and trust in us.</em>",
                            es: "Gracias a todos por el <em>interés, apoyo y la confianza en nosotros.</em>" },
  "index.news_title":     { en: "Latest News",      es: "Últimas Noticias" },
  "index.news1_date":     { en: "July 2026",        es: "Julio 2026" },
  "index.news1_h":        { en: "First trailer of Project Erika",
                            es: "Primer tráiler de Project Erika" },
  "index.news1_p":        { en: "Officially, the first trailer for Project Erika has been released, offering a first glimpse of the world and its visual style.",
                            es: "Oficialmente, se ha lanzado el primer tráiler de Project Erika, en el que por primera vez se deja echar un vistazo al mundo y su estética." },
  "index.news2_h":        { en: "We're now on Steam!",
                            es: "¡Estamos en Steam!" },
  "index.news2_p":        { en: "After much work, we're excited to announce that we're now on Steam! You can now find us and add us to your wishlist.",
                            es: "Despues de mucho trabajo, por fin podemos anunciarte que estamos en Steam!. Ya es posible encontarnos y añadirnos a tu wishlist." },
  "index.news3_date":     { en: "June 2026",         es: "Junio 2026" },
  "index.news3_h":        { en: "Our first website",
                            es: "Nuestra primera página web" },
  "index.news3_p":        { en: "Welcome to our new website! Here you'll find first-hand all the official information about our projects and the team behind Crazy Kittens.",
                            es: "¡Bienvenidos a nuestra nueva página web! Aquí encontrarás de primera mano toda la información oficial sobre nuestros proyectos y el equipo detrás de Crazy Kittens." },
  "index.socials_title":  { en: "Find us on social media",
                            es: "Encuéntranos en las redes sociales" },
  "index.socials_sub":    { en: "Stay up to date and get to know us better on our social media.",
                            es: "Estaté al tanto y conocenos mejor en nuestras redes sociales." },
  
  /* STUDIO */
  "studio.about_p1":      { en: "Crazy Kittens is a small <Strong class='highlight'> Spanish indie video game studio</Strong> that emerged from the work of a final degree project.",
                            es: "Crazy Kittens es un pequeño estudio de <Strong class='highlight'>videojuegos indie Español</Strong> el cual surgió por un trabajo de fin de grado." },
  "studio.about_p2":      { en: "With the main goal of finishing the development of Project Erika and <Strong class='highlight'>not stopping</Strong> there.",
                            es: "Con el principal objetivo de terminar el desarrollo de Project Erika y <Strong class='highlight'>no detenernos</Strong> ahí." },
  
  /* PROJECT ERIKA */
  "erika.title":          { en: "Project Erika - Crazy Kittens",
                            es: "Project Erika - Crazy Kittens" },
  "erika.header":         { en: "𔓘 Project Erika 𔓘",
                            es: "𔓘 Project Erika 𔓘" },
  "erika.header_sub":     { en: "A story about a lost girl with a love for photography.",
                            es: "La historia de una chica perdida con un amor a la fotografía." },
  "erika.badge_dev":      { en: "In Development",
                            es: "Desarrollandose" },
  "erika.badge_etq1":     { en: "Good Story",
                            es: "Buena Trama" },
  "erika.badge_etq2":     { en: "Pixel Art",
                            es: "Pixelados" },
  "erika.badge_etq3":     { en: "Psychological Horror",
                            es: "Terror Psicológico" },
  "erika.steam_btn":      { en: "Steam Page",
                            es: "Página de Steam" },
  "index.erika_more_btn": { en: "Learn More",
                            es: "Saber más" },
  "index.erika_gallery_btn": { en: "See All Screenshots",
                               es: "Ver todas las capturas" },
  "erika.trailer_btn":    { en: " Watch trailer",   es: " Ver tráiler" },
  "erika.trailer_h":      { en: "Official trailer", es: "Tráiler oficial" },
  "erika.about_h":        { en: "About the Game",    es: "Sobre el Juego" },
  "erika.about_p1":       { en: "Project Erika is a <strong class='highlight'>2D pixel art game</strong> of exploration and adventure set in a dark and mysterious world where the protagonist, Erika, must discover where she is and how to escape with the help of other characters.",
                            es: "Project Erika, un <strong class='highlight'>videojuego 2D pixel art </strong>de exploración y aventura que toma lugar en un mundo oscuro y misterioso en el que la protagonista, Erika, debe descubrir dónde se encuentra y cómo escapar de allí con la ayuda de otros personajes." },
  "erika.about_p2":       { en: "Erika <strong class='highlight'>wakes up</strong> with no memories and disoriented in a new and mysterious world with her camera. Solve puzzles and riddles and meet twisted characters to discover what this world hides and why she feels pursued.",
                            es: "Erika ha <strong class='highlight'>despertado</strong> sin recuerdos y desorientada en un mundo nuevo y misterioso con su cámara. Resuelve puzzles y acertijos y conoce a personajes retorcidos para descubrir qué esconde este mundo y por qué se siente perseguida." },
  "erika.info_dev_l":     { en: "Developer",         es: "Desarrollador" },
  "erika.info_status_l":  { en: "Status",            es: "Estado" },
  "erika.info_status_v":  { en: "In Development — 2026",
                            es: "En Desarrollo — 2026" },
  "erika.info_plat_l":    { en: "Platforms",         es: "Plataformas" },
  "erika.screenshots_h":  { en: "Screenshots",       es: "Capturas de Pantalla" },
  "erika.wishlist_h":     { en: "Did Project Erika catch your attention?",
                            es: "¿Te ha llamado la atención?" },
  "erika.wishlist_p":     { en: "<em>Add Project Erika to your Steam wishlist!</em> <br>This would help us more than you know and make it possible for more people to discover our game.",
                            es: "<em>¡Añadenos en tu wishlist en Steam!</em> <br>Esto nos ayudaría más de lo que imaginas y hara que más gente pueda conocer nuestro juego." },

  /* TEAM */
  "dev.header":           { en: "𔓘 The Developers 𔓘",    es: "𔓘 Los desarrolladores 𔓘" },
  "dev.header_sub":       { en: "Together we have achieved this.",
                            es: "Entre todos hemos conseguido esto."},

  "dev.kiyo_bio":        { en: "Kiyo always has been there at any hour knowing about anything.",
                            es: "Kiyo siempre ha estado a cualquier hora sabiendo de cualquier cosa." },
  "dev.kiyo_role":       { en: "Art & mid developer",    es: "Artista y desarrollador medio" },
  
  "dev.ivi_bio":         { en: "IviLegend is the team's jester, who has always been there to help.",
                            es: "IviLegend es el bufón del equipo, el cual siempre ha estado ahí para ayudar." },
  "dev.ivi_role":        { en: "Lead Developer",    es: "Desarrollador Principal" },
  
  "dev.kav_bio":         { en: "Kavsnai always has managed to encourage the team.",
                            es: "Kavsnai siempre ha conseguido animar al equipo." },
  "dev.kav_role":        { en: "Art & low developer",   es: "Artista y desarrollador bajo" },

  "dev.blurb_h":          { en: "♡ We're just getting started ♡", es: "♡ Estamos apenas comenzando ♡" },
  "dev.blurb_p":          { en: "We still have a long way to go and many goals to show you.",
                            es: "Aún nos queda mucho camino que recorrer y muchos objetivos que mostraros." },

  /* 404 */
  "404.h2":               { en: "Page not found :(", es: "Página no encontrada :(" },
  "404.p":                { en: "Looks like this page couldn't be found, please try again later.",
                            es: "Parece que esta página no se ha encontrado, vuelve a intentarlo más tarde." },
  "404.btn":              { en: "Back to Home",   es: "Volver al Inicio" },
};

/* funciones */

function getLang() {
  // Priority: localStorage → browser language → "en"
  const saved = localStorage.getItem("ck_lang");
  if (saved && LANGUAGES.find(l => l.code === saved)) return saved;
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  return LANGUAGES.find(l => l.code === browser) ? browser : "en";
}

function t(key, lang) {
  const entry = STRINGS[key];
  if (!entry) return "";
  return entry[lang] ?? entry["en"] ?? "";
}

function applyLang(lang) {
  // textContent nodes
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const val = t(el.dataset.i18n, lang);
    if (val) el.textContent = val;
  });

  // innerHTML (para textos con etiquetas HTML como <strong>)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const val = t(el.dataset.i18nHtml, lang);
    if (val) el.innerHTML = val;
  });

  // placeholder
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const val = t(el.dataset.i18nPlaceholder, lang);
    if (val) el.placeholder = val;
  });

  // <title>
  const tk = document.body.dataset.pageTitle;
  if (tk) { const v = t(tk, lang); if (v) document.title = v; }

  // html lang attr
  document.documentElement.lang = lang;

  // sync all selects
  document.querySelectorAll(".lang-select").forEach(s => { s.value = lang; });
}

function setLang(lang) {
  localStorage.setItem("ck_lang", lang);
  applyLang(lang);
}

/* Build the <select> options dynamically from LANGUAGES */
function buildLangSelect(select) {
  select.innerHTML = "";
  LANGUAGES.forEach(({ code, label, flag }) => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = `${flag} ${label}`;
    select.appendChild(opt);
  });
  select.addEventListener("change", e => setLang(e.target.value));
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = getLang();
  document.querySelectorAll(".lang-select").forEach(buildLangSelect);
  applyLang(lang);
});