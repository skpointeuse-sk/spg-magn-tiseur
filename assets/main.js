document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  var cta = document.querySelector('.header-cta');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    var open = nav.style.display === 'block';
    nav.style.display = open ? 'none' : 'block';
    cta.style.display = open ? 'none' : 'flex';
  });
});
