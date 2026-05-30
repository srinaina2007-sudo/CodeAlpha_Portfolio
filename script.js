// ======================
// Typing Effect
// ======================

const words = [
  "Frontend Developer",
  "Creative Coder",
  "UI Designer",
  "Web Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.querySelector(".typing");

function typeEffect() {

  const currentWord = words[wordIndex];

  if (deleting) {

    typingText.textContent =
    currentWord.substring(0, charIndex--);

  } else {

    typingText.textContent =
    currentWord.substring(0, charIndex++);

  }

  // Stop typing
  if (!deleting && charIndex === currentWord.length + 1) {

    deleting = true;

    setTimeout(typeEffect, 1200);

    return;
  }

  // Move to next word
  if (deleting && charIndex === 0) {

    deleting = false;

    wordIndex =
    (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, deleting ? 50 : 120);
}

typeEffect();


// ======================
// Scroll Reveal Animation
// ======================

const hiddenElements = document.querySelectorAll(
  ".project-card, .about-card, .contact-box, .skill, .stat-box"
);

function revealElements() {

  hiddenElements.forEach((el) => {

    const elementTop =
    el.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 100) {

      el.classList.add("show");
    }

  });

}

window.addEventListener("scroll", revealElements);

revealElements();


// ======================
// Profile Cursor
// ======================

const cursor =
document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

// Faster smooth movement
document.addEventListener("mousemove", (e) => {

  mouseX = e.clientX;
  mouseY = e.clientY;

});

// Smooth Animation
function animateCursor() {

  currentX += (mouseX - currentX) * 0.25;
  currentY += (mouseY - currentY) * 0.25;

  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();


// Cursor Grow on Hover

const hoverItems = document.querySelectorAll(
  "a, button, .btn, .project-card"
);

hoverItems.forEach((item) => {

  item.addEventListener("mouseenter", () => {

    cursor.style.transform =
    "translate(-50%, -50%) scale(1.8)";

  });

  item.addEventListener("mouseleave", () => {

    cursor.style.transform =
    "translate(-50%, -50%) scale(1)";

  });

});


// ======================
// Scroll To Top Button
// ======================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    topBtn.style.display = "block";

  } else {

    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,
    behavior: "smooth"

  });

});


// ======================
// Active Navbar Link
// ======================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
    section.offsetTop - 200;

    if (scrollY >= sectionTop) {

      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      `#${current}`
    ) {

      link.classList.add("active");
    }

  });

});


// ======================
// Floating Glow Effect
// ======================

const glow = document.createElement("div");

glow.classList.add("glow-effect");

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";

});