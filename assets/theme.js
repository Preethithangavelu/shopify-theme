document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('[data-menu-toggle]');
  var mobileNav = document.querySelector('[data-mobile-nav]');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      mobileNav.hidden = !mobileNav.hidden;
    });
  }

  // Hero slideshow
  document.querySelectorAll('[data-hero-slider]').forEach(function (slider) {
    var track = slider.querySelector('.hero-slider__track');
    var slides = slider.querySelectorAll('[data-hero-slide]');
    var dots = slider.querySelectorAll('[data-hero-dots] button');
    var prev = slider.querySelector('[data-hero-prev]');
    var next = slider.querySelector('[data-hero-next]');
    var index = 0;
    var total = slides.length;
    if (total === 0) return;

    function goTo(i) {
      index = (i + total) % total;
      track.style.transform = 'translateX(-' + (index * 100) + '%)';
      dots.forEach(function (d, di) { d.classList.toggle('is-active', di === index); });
    }

    if (dots[0]) dots[0].classList.add('is-active');

    if (prev) prev.addEventListener('click', function () { goTo(index - 1); });
    if (next) next.addEventListener('click', function () { goTo(index + 1); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); });
    });

    if (slider.dataset.autoplay === 'true' && total > 1) {
      var interval = parseInt(slider.dataset.interval, 10) || 5000;
      setInterval(function () { goTo(index + 1); }, interval);
    }
  });

  // Product page thumbnail swap
  document.querySelectorAll('[data-thumb]').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var mainImg = document.getElementById('ProductMainImage');
      if (mainImg) mainImg.src = thumb.dataset.full;
    });
  });
});
