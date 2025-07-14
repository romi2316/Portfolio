// ------------------------------
// Loading Animation
// ------------------------------
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  setTimeout(() => loading.classList.add('hide'), 1000);
});

// ------------------------------
// Particles Animation
// ------------------------------
function createParticles() {
  const particles = document.getElementById('particles');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 6}s`;
    particle.style.animationDuration = `${Math.random() * 3 + 3}s`;
    particles.appendChild(particle);
  }
}

// ------------------------------
// Scroll animations (fade-up)
// ------------------------------
function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-up');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < windowHeight - 100) {
      el.classList.add('animate');
    }
  });
}

// ------------------------------
// Smooth scroll for anchor links
// ------------------------------
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ------------------------------
// Navbar scroll background effect & animate on scroll
// ------------------------------
function initNavbarScrollEffect() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(26, 32, 44, 0.95)';
    } else {
      navbar.style.background = 'rgba(26, 32, 44, 0.9)';
    }
    animateOnScroll();
  });
}

// ------------------------------
// Responsive Navbar Toggle Handling
// ------------------------------
function initNavbarToggle() {
  const toggler = document.querySelector('.navbar-toggler');
  const collapse = document.querySelector('.navbar-collapse');

  // Close menu when clicking outside
  document.addEventListener('click', e => {
    const clickInside = collapse.contains(e.target) || toggler.contains(e.target);
    const menuOpen = collapse.classList.contains('show');
    if (!clickInside && menuOpen) toggler.click();
  });

  // Close menu when clicking a nav link
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (collapse.classList.contains('show')) toggler.click();
    });
  });

  // Close menu on scroll if open
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const menuOpen = collapse.classList.contains('show');
    if (menuOpen && window.scrollY !== lastScrollY) toggler.click();
    lastScrollY = window.scrollY;
  });
}

// ------------------------------
// Typing effect for hero title
// ------------------------------
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

function initTypingEffect() {
  window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      typeWriter(heroTitle, heroTitle.textContent, 80);
    }
  });
}

// ------------------------------
// Card hover effect (skills, portfolio, contact, about)
// ------------------------------
function initCardHoverEffect() {
  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-card, .portfolio-card, .contact-card, .about-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
      });
    });
  });
}

// ------------------------------
// Quiz fade-up animation on load
// ------------------------------
function animateQuizSection() {
  window.addEventListener('DOMContentLoaded', () => {
    const quizSection = document.querySelector('#quiz');
    if (quizSection) {
      setTimeout(() => quizSection.classList.add('animate'), 100);
    }
  });
}

// ------------------------------
// Quiz form submission & scoring
// ------------------------------
function initQuiz() {
  const form = document.getElementById('quiz-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const correctAnswers = { q1: 'b', q2: 'b', q3: 'a' };
    let score = 0;

    // Reset previous styles/icons
    document.querySelectorAll('.answer-label').forEach(label => {
      label.classList.remove('correct', 'incorrect');
      const icon = label.querySelector('.icon');
      if (icon) icon.remove();
    });

    // Check answers and mark
    for (const [question, correct] of Object.entries(correctAnswers)) {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected) {
        const label = selected.parentElement;
        if (selected.value === correct) {
          score++;
          label.classList.add('correct');
          label.insertAdjacentHTML('beforeend', '<span class="icon">✓</span>');
        } else {
          label.classList.add('incorrect');
          label.insertAdjacentHTML('beforeend', '<span class="icon">✗</span>');
        }
      }
    }

    // Explanation text
    const explanations = [
      "Un test fonctionnel vérifie que chaque fonctionnalité répond bien aux spécifications demandées.",
      "Le test de non-régression permet de vérifier qu'une modification n'a pas introduit de nouveaux bugs.",
      "Cypress, Selenium et JMeter sont des outils couramment utilisés pour automatiser différents types de tests."
    ];

    // Display results
    let resultHTML = '';
    if (score === 3) {
      resultHTML += `<div class="bravo"> 🎉 Bravo !</div>`;
      launchConfetti();
    }
    resultHTML += `<h4>Votre score : ${score} / 3</h4>`;
    explanations.forEach((exp, i) => {
      resultHTML += `<p><strong>Q${i + 1}:</strong> ${exp}</p>`;
    });

    document.getElementById('quiz-result').innerHTML = resultHTML;
  });
}

// ------------------------------
// Confetti animation on quiz success
// ------------------------------
function launchConfetti() {
  const colors = ['#667eea', '#764ba2', '#f093fb', '#ffcb05', '#00d2ff', '#da70d6'];
  const container = document.getElementById('confetti-container');

  for (let i = 0; i < 600; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
    confetti.style.width = confetti.style.height = `${Math.random() * 12 + 6}px`;
    confetti.style.transform = `rotate(${Math.random() * 180}deg)`;
    confetti.style.animationDelay = `${Math.random() * 3}s`;

    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}

// ------------------------------
// Scroll restoration on unload (to reset scroll to top)
// ------------------------------
window.addEventListener('beforeunload', () => window.scrollTo(0, 0));
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// ------------------------------
// Initialization
// ------------------------------
function init() {
  createParticles();
  animateOnScroll();
  initSmoothScroll();
  initNavbarScrollEffect();
  initNavbarToggle();
  initTypingEffect();
  initCardHoverEffect();
  animateQuizSection();
  initQuiz();
}

document.addEventListener('DOMContentLoaded', init);
