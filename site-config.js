window.AS_SITE_CONFIG = Object.freeze({
  officialInstagram: 'https://www.instagram.com/as.mask_/'
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-official-instagram]').forEach(function (link) {
    link.href = window.AS_SITE_CONFIG.officialInstagram;
  });

  var contactHref = '/contact';
  if (window.location.protocol === 'file:') {
    contactHref = /\/(?:brand|highlights)\//.test(window.location.pathname) ? '../contact.html' : 'contact.html';
  }

  document.querySelectorAll('a[href="/brand"], a[href="/brand/"], a[href="/contact"], a[href="/contact/"]').forEach(function (link) {
    link.href = contactHref;
  });
});
