document.addEventListener("DOMContentLoaded", () => {
  const filterEl = document.querySelector("[data-tag-filter]");
  if (!filterEl) return;

  const buttons = Array.from(filterEl.querySelectorAll("button[data-tag]"));
  const cards = Array.from(document.querySelectorAll("[data-tags]"));
  if (!buttons.length || !cards.length) return;
  const gridSelector = filterEl.dataset.grid;
  const gridEl = gridSelector ? document.querySelector(gridSelector) : null;

  let activeTag = "all";

  const updateButtons = () => {
    buttons.forEach((btn) => {
      const isActive = btn.dataset.tag === activeTag;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  };

  const updateCards = () => {
    let visibleCount = 0;
    cards.forEach((card) => {
      const tags = card.dataset.tags ? card.dataset.tags.split(",") : [];
      const matches = activeTag === "all" || tags.includes(activeTag);
      card.classList.toggle("is-hidden", !matches);
      card.toggleAttribute("hidden", !matches);
      if (matches) visibleCount += 1;
    });
    if (gridEl) {
      gridEl.classList.toggle("blog-grid--single", visibleCount === 1);
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      activeTag = btn.dataset.tag;
      updateButtons();
      updateCards();
    });
  });

  updateButtons();
  updateCards();
});
