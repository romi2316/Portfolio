document.addEventListener("DOMContentLoaded",()=>{fetch("data/portfolio.json").then(e=>e.json()).then(e=>{let o=document.querySelector("#portfolio .row");o&&e.forEach(e=>{let l=document.createElement("div");l.className="col-lg-4 col-md-6 mb-4 fade-up",l.innerHTML=`
          <div class="portfolio-card h-100 w-100 d-flex flex-column">
            <img src="${e.image}" alt="${e.alt}" class="portfolio-image" loading="lazy">
            <div class="portfolio-content d-flex flex-column flex-grow-1">
              <h3 class="heading-light">${e.title}</h3>
              <p>${e.text}</p>
              <div class="mt-auto">
                <a href="${e.link}" class="btn btn-primary-custom" target="_blank" rel="noopener noreferrer">Voir le projet</a>
              </div>
            </div>
          </div>
        `,o.appendChild(l)})}).catch(e=>console.error("Erreur lors du chargement des projets :",e))});