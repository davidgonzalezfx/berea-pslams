/* Menú lateral compartido — Salmos */
(function () {
  const PAGES = [
    { file: "01-salterio-cinco-libros.html", num: "01", title: "El Salterio en cinco libros" },
    { file: "02-clases-de-salmos.html", num: "02", title: "Las clases de Salmos" },
    { file: "03-fiestas-y-salmos.html", num: "03", title: "Las fiestas de Israel y sus Salmos" },
    { file: "04-titulos-musicales.html", num: "04", title: "Los títulos musicales de los Salmos" },
    { file: "05-etapas-y-tecnicas.html", num: "05", title: "Etapas y técnicas" },
    { file: "06-preguntas-trabajo-final.html", num: "06", title: "Preguntas del trabajo final" }
  ];
  const current = (location.pathname.split("/").pop() || "index.html");
  const idx = PAGES.findIndex(p => p.file === current);
  const isHome = current === "index.html" || current === "";

  // Inicio: la tarjeta de inicio se rellena si existe el contenedor
  const grid = document.getElementById("home-grid");
  if (grid) {
    PAGES.forEach(p => {
      const a = document.createElement("a");
      a.href = p.file;
      a.className = "block bg-white border border-neutral-200 rounded-md p-5 hover:border-ochre no-underline text-ink";
      a.innerHTML = '<span class="block label text-ochre mb-2">' + p.num + '</span><span class="font-serif text-lg leading-snug">' + p.title + '</span>';
      grid.appendChild(a);
    });
  }

  const root = document.getElementById("nav-root");
  if (!root) return;
  document.body.classList.add("has-sb");

  const toggle = document.createElement("button");
  toggle.className = "sb-toggle";
  toggle.type = "button";
  toggle.textContent = "Menú";
  toggle.setAttribute("aria-label", "Abrir menú");

  const aside = document.createElement("aside");
  aside.className = "sb";
  aside.innerHTML =
    '<div class="sb-brand">Salmos</div>' +
    '<a class="sb-item' + (isHome ? " is-active" : "") + '" href="index.html">Inicio</a>' +
    '<div class="sb-label">Materiales</div>' +
    PAGES.map(p => '<a class="sb-item' + (p.file === current ? " is-active" : "") + '" href="' + p.file + '"><span class="sb-num">' + p.num + '</span>' + p.title + '</a>').join("");

  root.append(toggle, aside);
  toggle.addEventListener("click", () => aside.classList.toggle("is-open"));

  if (idx >= 0) {
    const prev = PAGES[idx - 1], next = PAGES[idx + 1];
    const nav = document.createElement("nav");
    nav.className = "nav-pn";
    nav.innerHTML =
      (prev ? '<a href="' + prev.file + '">← ' + prev.title + '</a>' : '<span></span>') +
      (next ? '<a href="' + next.file + '">' + next.title + ' →</a>' : '<span></span>');
    document.body.appendChild(nav);
  }
})();
