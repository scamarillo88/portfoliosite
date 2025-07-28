console.log("Hi there! I'm Sabrina, baking sweet designs from scratch - thanks for visiting my portfolio!");

// ==== MENU TOGGLE FOR HAMBURGER NAV ====
function menuToggle() {
  const navToggle = document.getElementById("myNavtoggle");
  navToggle.classList.toggle("responsive");
  document.body.classList.toggle("nav-open");
}

// ==== MOBILE TABLE OF CONTENTS TOGGLE ====
function toggleMobileTOC() {
  const mobileTOCPanel = document.getElementById("mobile-toc-panel");
  mobileTOCPanel.classList.toggle("open");
  document.body.classList.toggle("nav-open");
}

