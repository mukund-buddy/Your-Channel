(function () {
  function handleReveal() {
    var els = document.querySelectorAll('.reveal');
    els.forEach(function (el) {
      var top = el.getBoundingClientRect().top;
      var h = window.innerHeight;
      if (top < h - 80) el.classList.add('revealed');
    });
  }

  window.addEventListener('scroll', handleReveal);

  window.addEventListener('load', function () {
    setTimeout(handleReveal, 200);
    document.body.classList.add('loaded');
    var L = document.getElementById('loader');
    if (L) {
      L.style.opacity = '0';
      setTimeout(function () { L.style.display = 'none'; }, 400);
    }
  });

  var B = document.createElement('button');
  B.id = 'backToTop';
  B.innerHTML = '&#x2191;';
  B.setAttribute('aria-label', 'Back to top');
  B.style.cssText = 'position:fixed;bottom:30px;right:30px;width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,var(--primary),#00cc6a);color:var(--bg-dark);border:none;font-size:22px;cursor:pointer;z-index:999;opacity:0;transform:translateY(20px);transition:all 0.3s ease;box-shadow:0 4px 15px rgba(0,255,136,0.3);display:flex;align-items:center;justify-content:center;';
  document.body.appendChild(B);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      B.style.opacity = '1';
      B.style.transform = 'translateY(0)';
    } else {
      B.style.opacity = '0';
      B.style.transform = 'translateY(20px)';
    }
  });

  B.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  var m = document.querySelector('.navbar');
  if (m) {
    var u = m.querySelector('.mobile-menu-btn');
    var l = m.querySelector('.nav-links');
    if (u && l) {
      var o = document.createElement('div');
      o.className = 'drawer-overlay';
      o.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:998;opacity:0;pointer-events:none;transition:opacity 0.3s ease;';
      document.body.appendChild(o);

      u.addEventListener('click', function () {
        l.classList.toggle('drawer-open');
        o.classList.toggle('active');
        if (l.classList.contains('drawer-open')) {
          o.style.pointerEvents = 'auto';
          o.style.opacity = '1';
          document.body.style.overflow = 'hidden';
        } else {
          o.style.pointerEvents = 'none';
          o.style.opacity = '0';
          document.body.style.overflow = '';
        }
      });

      o.addEventListener('click', function () {
        l.classList.remove('drawer-open');
        o.classList.remove('active');
        o.style.pointerEvents = 'none';
        o.style.opacity = '0';
        document.body.style.overflow = '';
      });
    }
  }
})();
