console.log("Hi there! I'm Sabrina, baking sweet designs from scratch - thanks for visiting my portfolio!");

function menuToggle() {
    const x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

function toggleMobileTOC() {
  const panel = document.getElementById('mobile-toc-panel');
  panel.classList.toggle('open');
}