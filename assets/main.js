// Mobile menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav ul");
if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
}

// Footer year
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

// Fade-in on scroll
const io = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 })
  : null;
const watch = (el) => (io ? io.observe(el) : el.classList.add("in"));
document.querySelectorAll(".reveal").forEach(watch);

// Typing line on the home page
const typed = document.querySelector("[data-typed]");
if (typed) {
  const lines = JSON.parse(typed.dataset.typed);
  const out = typed.querySelector(".txt");
  let li = 0, ci = 0, del = false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) out.textContent = lines[0];
  else (function tick() {
    const line = lines[li];
    out.textContent = line.slice(0, ci);
    if (!del && ci < line.length) ci++;
    else if (!del) { del = true; return setTimeout(tick, 1800); }
    else if (ci > 0) ci--;
    else { del = false; li = (li + 1) % lines.length; }
    setTimeout(tick, del ? 30 : 60);
  })();
}

// Progress page
const list = document.getElementById("progress-list");
if (list && typeof PROGRESS !== "undefined") {
  const items = PROGRESS.filter((p) => !p.hidden);
  const label = { planned: "Planned", "in-progress": "In progress", done: "Complete" };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const counts = { planned: 0, "in-progress": 0, done: 0 };
  items.forEach((p) => (counts[p.status] = (counts[p.status] || 0) + 1));
  document.querySelectorAll("[data-count]").forEach((el) => (el.textContent = counts[el.dataset.count] || 0));

  function render(filter) {
    list.innerHTML = "";
    items.filter((p) => filter === "all" || p.status === filter).forEach((p) => {
      const total = p.milestones.length;
      const done = p.milestones.filter((m) => m.done).length;
      const pct = total ? Math.round((done / total) * 100) : 0;
      const card = document.createElement("article");
      card.className = "card reveal";
      card.innerHTML = `
        <div class="p-head">
          <div>
            <div class="meta">${esc(p.category)}</div>
            <h3>${esc(p.title)}</h3>
          </div>
          <span class="status ${esc(p.status)}">${label[p.status] || esc(p.status)}</span>
        </div>
        <p>${esc(p.summary)}</p>
        <div class="bar" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100"><div style="width:${pct}%"></div></div>
        <div class="pct">${done}/${total} milestones &middot; ${pct}%</div>
        <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        <details>
          <summary>View milestones</summary>
          <ul class="milestones">${p.milestones.map((m) => `<li class="${m.done ? "ok" : ""}">${esc(m.text)}</li>`).join("")}</ul>
        </details>
        ${p.link ? `<p style="margin:14px 0 0"><a href="${esc(p.link)}" target="_blank" rel="noopener">Read the write-up &rarr;</a></p>` : ""}
      `;
      list.appendChild(card);
      watch(card);
    });
  }

  document.querySelectorAll(".filters button").forEach((b) => {
    b.addEventListener("click", () => {
      document.querySelectorAll(".filters button").forEach((x) => x.classList.remove("on"));
      b.classList.add("on");
      render(b.dataset.filter);
    });
  });
  render("all");
}
