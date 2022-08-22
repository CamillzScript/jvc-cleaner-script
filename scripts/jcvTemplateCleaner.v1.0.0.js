const jvcCleanerTemplatePath = document.location.href.replace('https://www.jeuxvideo.com', '').slice(1).split('/');

/** **************************************************************************************************************
 *  TEMPLATE CLEANER
 ************************************************************************************************************** */
// Page d'accueil
if (jvcCleanerTemplatePath[0] === '') {
  document.querySelector('.layout__contentTop').style.display = 'none';
  document.querySelector('.layout__breadcrumb').style.display = 'none';
  document.querySelector('.sliderRoller.quickAccessBanner.js-slider-roller').style.display = 'none';
  document.querySelector('.layout__contentHeader').style.display = 'none';
  document.querySelector('.layout__contentBefore').style.marginTop = '2em';
  document.querySelector('.layout__contentMain .col-right').style.display = 'none';
}
// News
else if(jvcCleanerTemplatePath[0] === 'news') {}
// High Tech
else if(jvcCleanerTemplatePath[0] === 'high-tech') {}
// Vidéos
else if(jvcCleanerTemplatePath[0] === 'videos') {}
// Liste des forums
else if(jvcCleanerTemplatePath[0] === 'forums.htm') {}
// Forum spécifique
else if(jvcCleanerTemplatePath[0] === 'forums') {}

// Toutes les pages
document.querySelector('.layout__adHeader').style.display = 'none';
document.querySelector('.layout__videoFooter').style.display = 'none';
document.querySelector('footer .footer.footer--top .container-lg .row').style.display = 'none';
document.querySelector('footer .footer.footer--top .container-lg hr').style.display = 'none';
document.querySelector('footer .footer.footer--bottom').setAttribute('style', 'display: none !important');

// Liens sponsorisé
if (null !== localStorage.getItem('input-ads-show') && '0' === localStorage.getItem('input-ads-show')) {
  const adsLinks = document.querySelectorAll('a.btn-call-to-action.shop.js-tracking-widget');
  adsLinks.forEach(el => {
    el.style.display = 'none';
  });
}
