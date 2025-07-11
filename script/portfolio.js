document.addEventListener("DOMContentLoaded", () => {
  fetch("data/portfolio.json")
    .then(response => response.json())
    .then(projects => {
      const container = document.querySelector("#portfolio .row");
      if (!container) return;

      projects.forEach(project => {
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6 mb-4 fade-up";

        col.innerHTML = `
          <div class="portfolio-card h-100 w-100 d-flex flex-column">
            <img src="${project.image}" alt="${project.alt}" class="portfolio-image" loading="lazy">
            <div class="portfolio-content d-flex flex-column flex-grow-1">
              <h3 class="heading-light">${project.title}</h3>
              <p>${project.text}</p>
              <div class="mt-auto">
                <a href="${project.link}" class="btn btn-primary-custom" target="_blank" rel="noopener noreferrer">Voir le projet</a>
              </div>
            </div>
          </div>
        `;

        container.appendChild(col);
      });
    })
    .catch(error => console.error("Erreur lors du chargement des projets :", error));
});
