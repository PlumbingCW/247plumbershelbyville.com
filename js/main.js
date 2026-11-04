(function () {
  var d = document, root = d.documentElement;
  var tg = d.getElementById('mob-toggle'), dr = d.getElementById('mob-drawer'), ov = d.getElementById('mob-overlay'), cl = d.getElementById('drawer-close');
  function openM() { dr.hidden = false; ov.classList.add('visible'); tg.setAttribute('aria-expanded', 'true'); root.style.overflow = 'hidden'; var f = dr.querySelector('a,button'); if (f) f.focus(); }
  function closeM() { dr.hidden = true; ov.classList.remove('visible'); tg.setAttribute('aria-expanded', 'false'); root.style.overflow = ''; tg.focus(); }
  if (tg && dr && ov) {
    tg.addEventListener('click', function () { dr.hidden ? openM() : closeM(); });
    ov.addEventListener('click', closeM);
    if (cl) cl.addEventListener('click', closeM);
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !dr.hidden) closeM(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 900 && !dr.hidden) { dr.hidden = true; ov.classList.remove('visible'); tg.setAttribute('aria-expanded', 'false'); root.style.overflow = ''; } });
    dr.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { root.style.overflow = ''; }); });
  }
  d.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var it = q.parentElement, open = it.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();
