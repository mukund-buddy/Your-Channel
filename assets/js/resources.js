(function () {
  var resources = window.__ngp && window.__ngp.resources;
  var grid = document.getElementById('resourcesGrid');
  if (!grid) return;

  if (!resources || resources.length === 0) {
    grid.innerHTML = '<div class="empty-state"><span class="empty-icon">&#x1F4E6;</span><h3>No Resources Yet</h3><p>Resources will appear here once available. Check back later!</p></div>';
    return;
  }

  grid.innerHTML = resources.map(function (r) {
    var db = r.downloadUrl ? '<a href="' + r.downloadUrl + '" target="_blank" class="btn btn-primary btn-sm">&#x2B07; Download</a>' : '';
    var vb = r.youtubeVideo ? '<a href="' + r.youtubeVideo + '" target="_blank" class="btn btn-outline btn-sm">&#x25B6; Watch Video</a>' : '';
    return '<div class="resource-card">' +
      '<div class="resource-thumb"><img src="' + r.thumbnail + '" alt="' + r.title + '" loading="lazy"></div>' +
      '<div class="resource-body">' +
      '<span class="type-badge">' + r.type + '</span>' +
      '<h3>' + r.title + '</h3>' +
      '<p>' + r.description + '</p>' +
      '<div class="resource-meta">' +
      '<span>&#x1F4C1; ' + r.fileSize + '</span>' +
      '<span>&#x1F516; ' + r.version + '</span>' +
      '<span>&#x1F4C5; ' + r.date + '</span>' +
      '</div>' +
      '<div class="resource-features">' + (r.features || []).map(function (f) { return '<span class="feature">&#x2705; ' + f + '</span>'; }).join('') + '</div>' +
      '<div class="resource-actions">' + db + vb + '</div>' +
      '</div></div>';
  }).join('');
})();
