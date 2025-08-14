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

/* TOC overlay toggle for mobile */
function toggleTOC() {
  document.body.classList.toggle('toc-open');
}

// Close the overlay when a TOC link is clicked (mobile)
document.addEventListener('click', function (e) {
  if (e.target.closest('#table-of-contents a')) {
    document.body.classList.remove('toc-open');
  }
});

// Close with ESC key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.body.classList.remove('toc-open');
  }
});

/* ===== TOC Active Link Highlighter (desktop) ===== */
(function () {
  function initTOCHighlight() {
    var toc = document.querySelector('#table-of-contents');
    if (!toc) return;

    // Map TOC links to their target sections
    var links = Array.from(toc.querySelectorAll('a'));
    var items = links
      .map(function (link) {
        var id = decodeURIComponent((link.getAttribute('href') || '').replace('#', ''));
        var target = document.getElementById(id);
        return target ? { link: link, target: target } : null;
      })
      .filter(Boolean);

    if (!items.length) return;

    function setActive(id) {
      links.forEach(function (l) {
        l.classList.toggle('active', ('#' + id) === l.getAttribute('href'));
      });
    }

    // Use IntersectionObserver to detect the "current" section
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        /* Center-ish band: when a section is roughly in the middle of the viewport,
           it becomes active. Tweak if needed depending on your header height. */
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
      }
    );

    items.forEach(function (it) {
      io.observe(it.target);
    });

    // Keep active state in sync for clicks and hash changes
    links.forEach(function (l) {
      l.addEventListener('click', function () {
        var id = (l.getAttribute('href') || '').replace('#', '');
        setActive(id);
      });
    });

    window.addEventListener('hashchange', function () {
      setActive((location.hash || '').replace('#', ''));
    });

    // Set initial state if there’s a hash
    if (location.hash) setActive(location.hash.replace('#', ''));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTOCHighlight);
  } else {
    initTOCHighlight();
  }
})();