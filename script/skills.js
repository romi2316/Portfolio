// Fonction pour charger le fichier JSON et générer le HTML des skills
async function loadSkills() {
    try {
        const response = await fetch('data/skills.json');
        if (!response.ok) throw new Error('Erreur de chargement du fichier skills.json');
        const skills = await response.json();

        const skillsContainer = document.getElementById('skills-container');
        if (!skillsContainer) {
            console.error("L'élément #skills-container est introuvable");
            return;
        }

        skills.forEach(skill => {
            const col = document.createElement('div');
            col.className = 'col-lg-4 col-md-6 mb-4 fade-up';

            let iconHTML = '';
            if (skill.iconClass) {
                iconHTML = `<div class="skill-icon"><i class="${skill.iconClass}"></i></div>`;
            } else if (skill.image) {
                iconHTML = `<img src="images/${skill.image}" alt="${skill.alt}" style="width: 64px; height: 64px; margin-bottom: 1rem;">`;
            }

            col.innerHTML = `
        <div class="skill-card">
          ${iconHTML}
          <h3 class="heading-light">${skill.title}</h3>
          <p>${skill.text}</p>
        </div>
      `;

            skillsContainer.appendChild(col);
        });
    } catch (error) {
        console.error('Erreur lors du chargement des compétences:', error);
    }
}


// Appel de la fonction au chargement de la page
document.addEventListener('DOMContentLoaded', loadSkills);