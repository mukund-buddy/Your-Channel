(function () {
  var S = window.__ngp && window.__ngp.settings;
  if (!S) return;

  var hc = document.getElementById('heroContent');
  if (hc) {
    var yt = (S.socialLinks || []).filter(function (l) { return l.url; })[0];
    hc.innerHTML = '<div class="hero-badge">&#x1F3AE;' + S.channel.game + ' Content Creator</div>' +
      '<h1>Welcome to<br><span class="highlight">' + S.channel.name + '</span></h1>' +
      '<p>' + S.channel.description + '</p>' +
      '<div class="hero-buttons">' +
      '<a href="' + (yt ? yt.url : '#') + '" target="_blank" class="btn btn-primary btn-lg">&#x1F3AC;Subscribe on YouTube</a>' +
      '<a href="videos.html" class="btn btn-outline btn-lg">&#x25B6;Explore Videos</a>' +
      '</div>';
  }

  var hs = document.getElementById('heroStats');
  if (hs) {
    hs.innerHTML = (S.stats || []).map(function (s) {
      return '<div class="stat"><span class="stat-number">' + s.number + '</span><span class="stat-label">' + s.label + '</span></div>';
    }).join('');
  }

  var hg = document.getElementById('highlightsGrid');
  if (hg) {
    hg.innerHTML = (S.highlights || []).map(function (h) {
      return '<div class="highlight-card"><div class="icon">' + h.icon + '</div><h3>' + h.title + '</h3><p>' + h.text + '</p></div>';
    }).join('');
  }

  var cg = document.getElementById('categoriesGrid');
  if (cg) {
    cg.innerHTML = (S.categories || []).map(function (c) {
      return '<div class="category-card"><div class="icon">' + c.icon + '</div><h3>' + c.title + '</h3><p>' + c.text + '</p><span class="category-tag">' + c.tag + '</span></div>';
    }).join('');
  }

  var sg = document.getElementById('statsGrid');
  if (sg) {
    sg.innerHTML = (S.bigStats || []).map(function (s) {
      return '<div class="stats-card"><div class="stats-number">' + s.number + '</div><div class="stats-label">' + s.label + '</div></div>';
    }).join('');
  }

  var cs = document.getElementById('contactSection');
  if (cs && (S.contact.businessEmail || S.contact.supportEmail)) {
    var bc = '',
      sc = '';
    if (S.contact.businessEmail) {
      bc = '<div class="contact-card"><div class="contact-icon">&#x1F4E7;</div><h3>Email for Business</h3><p>' + S.contact.businessEmail + '</p><p class="contact-note">' + (S.contact.businessNote || '') + '</p></div>';
    }
    if (S.contact.supportEmail) {
      sc = '<div class="contact-card"><div class="contact-icon">&#x1F4E9;</div><h3>Copyright & Support</h3><p>' + S.contact.supportEmail + '</p><p class="contact-note">' + (S.contact.supportNote || '') + '</p></div>';
    }
    cs.innerHTML = '<div class="container"><h2 class="section-title">For Business & Collaboration</h2><p class="section-subtitle">Brands, sponsors, and collaboration inquiries</p><div class="contact-flex">' + bc + sc + '</div></div>';
  }

  var v = window.__ngp && window.__ngp.videos;
  var f = document.getElementById('featuredVideo');
  if (v && v.length && f) {
    var l = v[0];
    f.innerHTML = '<div class="featured-card"><div class="featured-embed"><iframe src="https://www.youtube.com/embed/' + l.id + '" frameborder="0" allowfullscreen></iframe></div><div class="featured-info"><h3>' + l.title + '</h3><p>' + (l.description || '') + '</p><div class="featured-meta"><span>' + (l.date || '') + '</span><span>' + (l.tags || []).slice(0, 3).map(function (t) { return '#' + t; }).join(' ') + '</span></div><a href="' + (l.youtube || 'https://youtube.com/watch?v=' + l.id) + '" target="_blank" class="btn btn-primary">Watch Full Video &#x25B6;</a></div></div>';
  }
})();
