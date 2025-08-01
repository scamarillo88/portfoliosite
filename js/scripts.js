console.log("Hi there! I'm Sabrina, baking sweet designs from scratch - thanks for visiting my portfolio!");

function toggleTOC() {
  const toc = document.getElementById("table-of-contents");
  toc.style.display = toc.style.display === "block" ? "none" : "block";
  document.body.classList.toggle("toc-open");
}

function menuToggle() {
  var nav = document.getElementById("myNavtoggle");
  nav.classList.toggle("responsive");
}