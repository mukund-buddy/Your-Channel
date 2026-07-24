(function () {
  var S = window.__ngp && window.__ngp.settings;
  if (!S) return;

  var creditText = 'Template by <a href="https://youtube.com/@notgamingplayz" target="_blank">Not Gaming Playz</a>';

  function addCreditMarker() {
    var e = document.createElement('div');
    e.style.display = 'none';
    e.id = 'ngp-marker';
    e.setAttribute('data-v', 'Not Gaming Playz');
    document.body.appendChild(e);
  }

  function addFooterCredit() {
    var f = document.getElementById('footerBottom');
    if (f && !f.querySelector('.ngp-credit')) {
      var c = document.createElement('div');
      c.className = 'ngp-credit';
      c.style.cssText = 'text-align:center;padding:12px 0 0;font-size:12px;opacity:0.5;';
      c.innerHTML = creditText;
      f.appendChild(c);
    }
  }

  function verifyIntegrity() {
    var m = document.getElementById('ngp-marker');
    if (!m || m.getAttribute('data-v') !== 'Not Gaming Playz') {
      console.warn('%c[NGP] Template integrity check failed.', 'color:#ff4444;font-weight:bold;');
      var f = document.getElementById('footerBottom');
      if (f) {
        var w = document.createElement('div');
        w.style.cssText = 'text-align:center;padding:8px;background:rgba(255,0,0,0.1);border-radius:4px;margin-top:8px;font-size:11px;color:#ff6666;';
        w.textContent = 'Unauthorized template modification detected.';
        f.appendChild(w);
      }
    }
  }

  function buildHeader(S) {
    var L = document.getElementById('navLogo');
    if (L) {
      if (S.logo.type === 'image' && S.logo.imagePath) {
        L.innerHTML = '<img src="' + S.logo.imagePath + '" alt="' + S.channel.name + '"><span>' + S.logo.text + '</span>';
      } else if (S.logo.emoji) {
        L.innerHTML = '<span class="logo-emoji">' + S.logo.emoji + '</span><span>' + S.logo.text + '</span>';
      } else {
        L.innerHTML = '<span>' + S.logo.text + '</span>';
      }
    }

    var N = document.getElementById('navLinks');
    if (N) {
      var links = (S.navLinks || []).filter(function (l) { return l.url; });
      N.innerHTML = links.map(function (l) {
        return '<li><a href="' + l.url + '">' + l.label + '</a></li>';
      }).join('');
    }

    var B = document.getElementById('mobileMenuBtn');
    if (B) {
      B.addEventListener('click', function () {
        N.classList.toggle('active');
      });
    }
  }

  function getSocialIcon(platform) {
    var p = platform.toLowerCase();
    var svg = function (d) {
      return '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="' + d + '"/></svg>';
    };
    if (p.includes('youtube')) return svg('M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z');
    if (p.includes('instagram')) return svg('M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z');
    if (p.includes('discord')) return svg('M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z');
    if (p.includes('twitter') || p.includes('x')) return svg('M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z');
    if (p.includes('telegram')) return svg('M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z');
    if (p.includes('github')) return svg('M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12');
    if (p.includes('whatsapp')) return svg('M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z');
    return svg('M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z');
  }

  function buildFooter(S) {
    var F = document.getElementById('footerContent');
    if (!F) return;

    var H = (S.socialLinks || []).filter(function (s) { return s.url; }).map(function (s) {
      return '<a href="' + s.url + '" target="_blank" aria-label="' + s.platform + '" title="' + s.platform + '">' + getSocialIcon(s.platform) + '</a>';
    }).join('');

    var C = (S.footer.columns || []).map(function (col) {
      var links = (col.links || []).filter(function (l) { return l.url; }).map(function (l) {
        return '<li><a href="' + l.url + '">' + l.label + '</a></li>';
      }).join('');
      return links ? '<div class="footer-links"><h4>' + col.title + '</h4><ul>' + links + '</ul></div>' : '';
    }).join('');

    var logoEmoji = S.logo.emoji || '';
    F.innerHTML = '<div class="footer-brand"><span class="logo-text">' + logoEmoji + ' ' + S.channel.name + '</span><p>' + S.footer.description + '</p></div>' + C + (H ? '<div class="footer-social"><div class="social-icons">' + H + '</div></div>' : '');

    var B = document.getElementById('footerBottom');
    if (B) B.innerHTML = '<p>' + S.footer.copyright + '</p>';
  }

  Promise.all([
    fetch('components/header.html').then(function (r) { return r.text(); }),
    fetch('components/footer.html').then(function (r) { return r.text(); })
  ]).then(function (d) {
    document.getElementById('header').innerHTML = d[0];
    document.getElementById('footer').innerHTML = d[1];
    buildHeader(S);
    buildFooter(S);

    var injectEls = document.querySelectorAll('[data-inject]');
    injectEls.forEach(function (el) {
      var k = el.dataset.inject;
      var parts = k.split('.');
      var v = S;
      parts.forEach(function (x) { v = v ? v[x] : ''; });
      if (v) el.innerHTML = v;
    });

    addCreditMarker();
    setTimeout(verifyIntegrity, 500);
  }).catch(function (err) {
    console.error('[Loader] Failed to load components:', err);
  });

  window.getSocialIcon = getSocialIcon;
})();
