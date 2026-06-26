/**
 * Crazy Kittens — Sistema de traducción
 * ─────────────────────────────────────
 * Para añadir un idioma nuevo:
 *   1. Añade su código e.g. "fr" al array LANGUAGES con label y flag.
 *   2. Añade la clave "fr" a cada entrada de STRINGS.
 *   Si una clave no tiene traducción para el idioma elegido,
 *   cae en cascada: idioma elegido → "en" → texto vacío.
 *
 * Uso en HTML:
 *   <span data-i18n="nav.home"></span>
 *   <input data-i18n-placeholder="index.nl_placeholder">
 *   <html> o <body data-page-title="index.title"> para el <title>
 */

/* ─── Idiomas disponibles ──────────────────────────────────────────
   Añade aquí entradas para activar idiomas nuevos en el desplegable.
   El orden aquí es el orden del desplegable.
─────────────────────────────────────────────────────────────────── */
const LANGUAGES = [
  { code: "en", label: "English",  flag: "🇬🇧" },
  { code: "es", label: "Español",  flag: "🇪🇸" },
  // { code: "fr", label: "Français", flag: "🇫🇷" },  // ← ejemplo futuro
  // { code: "de", label: "Deutsch",  flag: "🇩🇪" },
  // { code: "ja", label: "日本語",    flag: "🇯🇵" },
];

/* ─── Textos ────────────────────────────────────────────────────── */
const STRINGS = {

  /* NAV */
  "nav.home":             { en: "Home",             es: "Inicio" },
  "nav.erika":            { en: "Project Erika",    es: "Proyecto Erika" },
  "nav.team":             { en: "Team",             es: "Equipo" },
  "nav.socials":          { en: "Socials",          es: "Redes" },

  /* FOOTER */
  "footer.copy":          { en: "© Crazy Kittens 2026. All rights reserved.",
                            es: "© Crazy Kittens 2026. Todos los derechos reservados." },
  "footer.nav_h2":        { en: "Games",            es: "Juegos" },

  /* INDEX */
  "index.title":          { en: "Crazy Kittens",
                            es: "Crazy Kittens" },
  "index.cover_alt":      { en: "Project Erika — Crazy Kittens",
                            es: "Proyecto Erika — Crazy Kittens" },
  "index.welcome":        { en: "Welcome to <strong class='highlight'>Crazy Kittens</strong>",
                            es: "Bienvenidos a <strong class='highlight'>Crazy Kittens</strong>" },
  "index.welcome_sub":    { en: "Thank you all for the <em>interest, support, and trust in us.</em>",
                            es: "Gracias a todos por el <em>interés, apoyo y la confianza en nosotros.</em>" },
  "index.news_title":     { en: "Latest News",      es: "Últimas Noticias" },
  "index.news1_date":     { en: "July 2026",        es: "Julio 2026" },
  "index.news1_h":        { en: "First trailer of Project Erika",
                            es: "Primer trailer de Proyecto Erika" },
  "index.news1_p":        { en: "Officially, the first trailer for Project Erika has been released, offering a first glimpse of the world and its visual style.",
                            es: "Oficialmente, se ha lanzado el primer trailer de Proyecto Erika, en el que por primera vez se deja echar un vistazo al mundo y su estética." },
  "index.news2_h":        { en: "Now on Steam!",
                            es: "¡Ya estamos en Steam!" },
  "index.news2_p":        { en: "After much work, we're excited to announce that we're now on Steam! You can now find us and add us to your wishlist.",
                            es: "Despues de mucho trabajo, por fin podemos anunciarte que estamos en Steam!. Ya es posible encontarnos y añadirnos a tu wishlist." },
  "index.news3_date":     { en: "June 2026",         es: "Junio 2026" },
  "index.news3_h":        { en: "Our first website",
                            es: "Nuestra primera página web" },
  "index.news3_p":        { en: "Welcome to our new website! Here you’ll find first-hand all the official information about our projects and the team behind Crazy Kittens.",
                            es: "¡Bienvenidos a nuestra nueva página web! Aquí encontrarás de primera mano toda la información oficial sobre nuestros proyectos y el equipo detrás de Crazy Kittens." },
  "index.socials_title":  { en: "Find us on social media",
                            es: "Encuéntranos en las redes sociales" },
  "index.socials_sub":    { en: "Stay up to date and get to know us better on our social media.",
                            es: "Estaté al tanto y conocenos mejor en nuestras redes sociales." },

  /* PROJECT ERIKA */
  "erika.title":          { en: "Project Erika — Crazy Kittens",
                            es: "Proyecto Erika — Crazy Kittens" },
  "erika.header":         { en: "𔓘 Project Erika 𔓘", es: "𔓘 Proyecto Erika 𔓘" },
  "erika.header_sub":     { en: "A story about emotions, memory, and the courage to feel.",
                            es: "Una historia sobre emociones, recuerdos y el valor de sentir." },
  "erika.badge_dev":      { en: "In Development",   es: "Desarrollandose" },
  "erika.badge_etq1":     { en: "Good Story",            es: "Buena Trama" },
  "erika.badge_etq2":     { en: "Pixel Art",            es: "Pixelados" },
  "erika.badge_etq3":     { en: "Psychological Horror",            es: "Terror Psicológico" },
  "erika.steam_btn":      { en: "Steam Page",     es: "Página de Steam" },
  "index.erika_more_btn": { en: "Learn More",     es: "Saber más" },
  "index.erika_gallery_btn": { en: "See All Screenshots", es: "Ver todas las capturas" },
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
  "erika.wishlist_h":     { en: "Wishlist on Steam 🌸",
                            es: "Añade a Favoritos en Steam 🌸" },
  "erika.wishlist_p":     { en: "Adding Project Erika to your wishlist helps us more than you know. It takes two seconds and means the world.",
                            es: "Añadir Proyecto Erika a tus favoritos nos ayuda más de lo que imaginas. Son dos segundos y significa muchísimo." },
  "erika.wishlist_btn":   { en: "🎮 Wishlist on Steam", es: "🎮 Añadir a Steam" },

  /* STUDIO */
  "studio.title":         { en: "Studio — Crazy Kittens",
                            es: "Estudio — Crazy Kittens" },
  "studio.header":        { en: "🐾 The Studio",    es: "🐾 El Estudio" },
  "studio.header_sub":    { en: "Who we are, why we make games, and what drives us.",
                            es: "Quiénes somos, por qué hacemos juegos y qué nos mueve." },
  "studio.about_p1":      { en: "Crazy Kittens is an <strong class='highlight'>Spanish indie video game studio</strong> created by three friends that started as a final-year project.",
                            es: "Crazy Kittens es un <strong class='highlight'>estudio de videojuegos indie Español</strong> creado por tres amigos que arranco por el proyecto de fin de curso." },
  "studio.about_p2":      { en: "Thanks to shared goals and passions, this small studio was born.",
                            es: "Gracias a los objetivos y pasiónes en común, nació este pequeño estudio." },
  "studio.about_p3":      { en: "The first project, which is still in development, Project Erika, is our greatest ambition.",
                            es: "El primer proyecto, que aun esta en desarrollo, Proyect Erika, es nuestra mayor ambición." },
  "studio.meet_btn":      { en: "Meet us",  es: "Conocenos" },
  "studio.stat_members":  { en: "Team members",     es: "Miembros" },
  "studio.stat_game_in_dev":     { en: "Games in dev",       es: "Juegos en desarrollo" },
  "studio.stat_founded":  { en: "Founded in ",           es: "Fundado en " },
  "studio.stat_games":    { en: "released games",  es: "Juegos lanzados" },
  "studio.values_h":      { en: "What We Believe",  es: "En qué creemos" },
  "studio.val1_h":        { en: "Stories first",     es: "La historia, primero" },
  "studio.val1_p":        { en: "Every mechanic, every visual, every sound exists to serve the story. We don't add things because they're cool — we add them because they make you feel more.",
                            es: "Cada mecánica, cada visual, cada sonido existe para servir a la historia. No añadimos cosas porque molen — las añadimos porque hacen que sientas más." },
  "studio.val2_h":        { en: "Cozy by design",    es: "Acogedor por diseño" },
  "studio.val2_p":        { en: "Our games are safe spaces. We want players to feel welcomed, seen, and cared for — not frustrated or overwhelmed.",
                            es: "Nuestros juegos son espacios seguros. Queremos que los jugadores se sientan bienvenidos, vistos y cuidados — no frustrados ni abrumados." },
  "studio.val3_h":        { en: "Community-driven",  es: "Impulsados por la comunidad" },
  "studio.val3_p":        { en: "We build in public, share our process, and listen to the people who play our games. Your voice shapes what we make.",
                            es: "Construimos en público, compartimos nuestro proceso y escuchamos a quienes juegan nuestros juegos. Tu voz da forma a lo que creamos." },
  "studio.wishlist_btn":  { en: "🎮 Wishlist on Steam", es: "🎮 Añadir a Steam" },

  /* TEAM */
  "team.title":           { en: "Team — Crazy Kittens",
                            es: "Equipo — Crazy Kittens" },
  "team.header":          { en: "🐾 The Team",      es: "🐾 El Equipo" },
  "team.header_sub":      { en: "Three friends, one dream — building worlds together.",
                            es: "Tres amigos, un sueño — construyendo mundos juntos." },
  "team.kiyo_role":       { en: "Lead Developer",   es: "Desarrollador Principal" },
  "team.kiyo_bio":        { en: "Kiyo is the one who turns ideas into reality — writing the code that powers every mechanic, every dialogue trigger, and every pixel on screen. A problem-solver at heart with a soft spot for game feel and clean architecture.",
                            es: "Kiyo es quien convierte las ideas en realidad — escribe el código que impulsa cada mecánica, cada disparador de diálogo y cada píxel en pantalla. Un solucionador de problemas con debilidad por el game feel y la arquitectura limpia." },
  "team.ivi_role":        { en: "Art & Visual Design", es: "Arte y Diseño Visual" },
  "team.ivi_bio":         { en: "IviLegend is the visual soul of Crazy Kittens. Every character, every background, every UI element passes through their hands. Their art style is warm, expressive, and instantly recognizable — soft palettes with a whimsical edge.",
                            es: "IviLegend es el alma visual de Crazy Kittens. Cada personaje, cada fondo, cada elemento de interfaz pasa por sus manos. Su estilo es cálido, expresivo e inconfundible — paletas suaves con un toque fantástico." },
  "team.kav_role":        { en: "Narrative & Sound", es: "Narrativa y Sonido" },
  "team.kav_bio":         { en: "Kavsnai gives the games their voice — literally and figuratively. Responsible for writing the story, crafting dialogue, and layering the soundscapes that pull players in. If you felt something while playing, that's probably Kavsnai's fault.",
                            es: "Kavsnai le da voz a los juegos — literal y figuradamente. Responsable de escribir la historia, crear los diálogos y componer los paisajes sonoros que atrapan al jugador. Si sentiste algo mientras jugabas, probablemente es culpa de Kavsnai." },
  "team.blurb_h":         { en: "We're just getting started 🌸", es: "Acabamos de empezar 🌸" },
  "team.blurb_p":         { en: "Crazy Kittens was born out of a shared love for story-rich indie games. We're a tiny team with a big heart — no publishers, no deadlines imposed by others — just us, our ideas, and a whole lot of energy drinks.",
                            es: "Crazy Kittens nació de un amor compartido por los juegos indie con historia. Somos un equipo pequeño con un gran corazón — sin publishers, sin fechas impuestas — solo nosotros, nuestras ideas y muchísimas bebidas energéticas." },
  "spread.other_h":       { en: "Ways to Support Us", es: "Formas de apoyarnos" },
  "spread.w1_h":          { en: "Wishlist us on Steam", es: "Añadenos en tu wishlist" },
  "spread.w1_p":          { en: "It would mean a lot to us to know that you're looking forward to it as much as we are.",
                            es: "Nos ayudará mucho a saber que estais esperando los juegos con tantas ganas como nosotros." },
  "spread.w1_btn":        { en: "Expand your wishlist",  es: "Agranda tu wishlist" },
  "spread.w2_h":          { en: "Follow us on social media",  es: "Siguenos en redes sociales" },
  "spread.w2_p":          { en: "You'll be able to stay up to date with every progress and news about the games.",
                            es: "Podrás estar al tanto de cada avance y novedad de los juegos." },
  "spread.w2_btn":        { en: "See our socials",      es: "Ver nuestras redes" },

  /* 404 */
  "404.h2":               { en: "Page not found 🐱", es: "Página no encontrada 🐱" },
  "404.p":                { en: "Looks like this page wandered off and got lost in the yarn pile.",
                            es: "Parece que esta página se escapó y se perdió entre los ovillos de lana." },
  "404.btn":              { en: "🏠 Back to Home",   es: "🏠 Volver al Inicio" },
};

/* ─── Engine ────────────────────────────────────────────────────── */

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