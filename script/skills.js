async function loadSkills(){try{let e=await fetch("data/skills.json");if(!e.ok)throw Error("Erreur de chargement du fichier skills.json");let l=await e.json(),i=document.getElementById("skills-container");if(!i){console.error("L'\xe9l\xe9ment #skills-container est introuvable");return}l.forEach(e=>{let l=document.createElement("div");l.className="col-lg-4 col-md-6 mb-4 fade-up";let t="";e.iconClass?t=`<div class="skill-icon"><i class="${e.iconClass}"></i></div>`:e.image&&(t=`<img src="images/${e.image}" alt="${e.alt}" style="width: 64px; height: 64px; margin-bottom: 1rem;">`),l.innerHTML=`
        <div class="skill-card">
          ${t}
          <h3 class="heading-light">${e.title}</h3>
          <p>${e.text}</p>
        </div>
      `,i.appendChild(l)})}catch(t){console.error("Erreur lors du chargement des comp\xe9tences:",t)}}document.addEventListener("DOMContentLoaded",loadSkills);