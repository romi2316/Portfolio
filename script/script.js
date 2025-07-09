
// Loading animation
window.addEventListener('load', function() {
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.classList.add('hide');
    }, 1000);
});

// Particles animation
function createParticles() {
    const particles = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        particles.appendChild(particle);
    }
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-up');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 32, 44, 0.95)';
    } else {
        navbar.style.background = 'rgba(26, 32, 44, 0.9)';
    }
    
    animateOnScroll();
});

// Responsive navbar toggle
const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // 1. Fermer le menu quand on clique en dehors
  document.addEventListener("click", function (event) {
    const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
    const isMenuOpen = navbarCollapse.classList.contains("show");

    if (!isClickInside && isMenuOpen) {
      navbarToggler.click();
    }
  });

  // 2. Fermer le menu quand on clique sur un lien
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click();
      }
    });
  });

  // 3. Fermer le menu quand on scrolle
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    const isMenuOpen = navbarCollapse.classList.contains("show");
    if (isMenuOpen && window.scrollY !== lastScrollY) {
      navbarToggler.click();
    }
    lastScrollY = window.scrollY;
  });

// Initialize
createParticles();
animateOnScroll();

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    setTimeout(type, 1500);
}

window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
});

// Add hover effect to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.skill-card, .portfolio-card, .contact-card, .about-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});



  // Ajout animation fade-up à l'apparition
  window.addEventListener('DOMContentLoaded', () => {
    const fadeUpSection = document.querySelector('#quiz');
    if(fadeUpSection) {
      setTimeout(() => fadeUpSection.classList.add('animate'), 100);
    }
  });

  document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const answers = {
      q1: 'b',
      q2: 'b',
      q3: 'a'
    };
    let score = 0;

    // Reset previous states
    document.querySelectorAll('.answer-label').forEach(label => {
      label.classList.remove('correct', 'incorrect');
      const oldIcon = label.querySelector('.icon');
      if (oldIcon) oldIcon.remove();
    });

    for (const [question, correctAnswer] of Object.entries(answers)) {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected) {
        const label = selected.parentElement;
        if (selected.value === correctAnswer) {
          score++;
          label.classList.add('correct');
          label.insertAdjacentHTML('beforeend', '<span class="icon">✓</span>');
        } else {
          label.classList.add('incorrect');
          label.insertAdjacentHTML('beforeend', '<span class="icon">✗</span>');
        }
      }
    }

    const explanations = [
      "Un test fonctionnel vérifie que chaque fonctionnalité répond bien aux spécifications demandées.",
      "Le test de non-régression permet de vérifier qu'une modification n'a pas introduit de nouveaux bugs.",
      "Cypress, Selenium et JMeter sont des outils couramment utilisés pour automatiser différents types de tests."
    ];

    let resultHTML = '';
    if(score === 3) {
      resultHTML += `<div class="bravo"> 🎉 Bravo !</div>`;
    }
    resultHTML += `<h4>Votre score : ${score} / 3</h4>`;
    explanations.forEach((exp, i) => {
      resultHTML += `<p><strong>Q${i + 1}:</strong> ${exp}</p>`;
    });

    document.getElementById('quiz-result').innerHTML = resultHTML;
  });

  window.addEventListener('beforeunload', function () {
  window.scrollTo(0, 0);
});
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }