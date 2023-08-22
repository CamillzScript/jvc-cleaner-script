// ==UserScript==
// @name         JVC Cleaner Script
// @description  Cleaner pour jeuxvideo.com.
// @author       David ROMERA <d.romera.11@gmail.com> | Martingoa | https://www.jeuxvideo.com/profil/martingoa
// @supportURL   https://github.com/CamillzScript/jvc-cleaner-script/issues
// @license      MIT
//
// @version      1.1.1
// @downloadURL  https://raw.githubusercontent.com/CamillzScript/jvc-cleaner-script/main/jvc-cleacer-script.user.js
// @updateURL    https://raw.githubusercontent.com/CamillzScript/jvc-cleaner-script/main/jvc-cleacer-script.user.js
//
// @run-at       document-end
//
// @match        https://www.jeuxvideo.com/*
//
// @noframes
// ==/UserScript==

console.log('JVC Cleaner script loaded - v' + GM_info.script.version);

const themeDark = document.querySelector('html').classList.contains('theme-light') ? false : true;

// ----------------------------------------------------------------------------------------------------------------------------------------------

/** *********************************************************************************************************************************************
 *  JVC CONFIG MENU
 ********************************************************************************************************************************************* */

/** **************************************************************************************************************
 *  LOAD MENU
 ******************************** layout__contentMain ********************************************************** */
jvcCleanerScriptLoadMenu();

const jvcCleanerScriptConfigMenuButton = document.getElementById('JVC-cleaner-script-menu-button');
jvcCleanerScriptConfigMenuButton.addEventListener('click', () => {
  const jvcCleanerScriptConfigMenu = document.getElementById('JVC-cleaner-script-menu');
  if (jvcCleanerScriptConfigMenu.classList.contains('show')) {
    jvcCleanerScriptConfigMenu.style.display = 'none';
    jvcCleanerScriptConfigMenu.classList.remove('show');
  } else {
    jvcCleanerScriptConfigMenu.style.display = 'block';
    jvcCleanerScriptConfigMenu.classList.add('show');
  }
});

const jvcCleanerScriptCheckboxList = document.querySelectorAll('#JVC-cleaner-script-menu-input-show');
jvcCleanerScriptCheckboxList.forEach((element, index) => {
  element.addEventListener('click', () => {
    var lc = localStorage.getItem(element.getAttribute('data-id'));
    if (null !== lc && true === element.checked) {
      localStorage.setItem(element.getAttribute('data-id'), '1');
    } else {
      localStorage.setItem(element.getAttribute('data-id'), '0');
    }
  });
});

/** **************************************************************************************************************
 *  OPTION MENU
 ************************************************************************************************************** */
jvcCleanerScriptLoadMenuOption();

const jvcCleanerScriptMenuInputScoreShow = document.getElementById('JVC-cleaner-script-menu-input-score-show');
const jvcCleanerScriptMenuInputScoreUp = document.getElementById('JVC-cleaner-script-menu-input-score-up');
const jvcCleanerScriptMenuInputScoreDown = document.getElementById('JVC-cleaner-script-menu-input-score-down');
const jvcCleanerScriptMenuInputAdsLink = document.getElementById('JVC-cleaner-script-menu-input-show-ads-link');

jvcCleanerScriptMenuInputScoreShow.addEventListener('change', () => {
  if (jvcCleanerScriptMenuInputScoreShow.checked === true) {
    localStorage.setItem('input-score-show', '1');
  }
  else {
    localStorage.setItem('input-score-show', '0');
  }
});

jvcCleanerScriptMenuInputScoreUp.addEventListener('change', () => {
  localStorage.setItem('input-score-up', jvcCleanerScriptMenuInputScoreUp.value);
});

jvcCleanerScriptMenuInputScoreDown.addEventListener('change', () => {
  localStorage.setItem('input-score-down', jvcCleanerScriptMenuInputScoreDown.value);
});

jvcCleanerScriptMenuInputAdsLink.addEventListener('change', () => {
  if (jvcCleanerScriptMenuInputAdsLink.checked === true) {
    localStorage.setItem('input-ads-show', '1');
  }
  else {
    localStorage.setItem('input-ads-show', '0');
  }
});

/** **************************************************************************************************************
 *  FUNCTION
 ************************************************************************************************************** */
// Config menusafa
function jvcCleanerScriptLoadMenu() {
  const position = document.querySelector('.footer');
  const jvcCleanerScriptMenuCheckboxItemList = [
    ['en-ce-moment', 'EN CE MOMENT'],
    ['dernieres-news-jv', 'DERNIÈRES NEWS JV'],
    ['bon-plans-high-tech', 'BON PLANS HIGH TECH'],
    ['top-news-gaming-de-la-semaine', 'TOP NEWS GAMING DE LA SEMAINE'],
    ['derniers-tests', 'DERNIERS TESTS'],
    ['dernieres-news-de-jeux', 'DERNIÈRES NEWS DE JEUX'],
    ['dernieres-videos-de-jeux', 'DERNIÈRES VIDÉOS TESTS DE JEUX'],
    ['jeux-les-plus-populaires', 'JEUX LES PLUS POPULAIRES'],
    ['dernieres-astuces', 'DERNIÈRES ASTUCES'],
    ['les-jeux-les-plus-attendus', 'LES JEUX LES PLUS ATTENDUS'],
    ['meilleurs-jeux-du-moment', 'MEILLEURS JEUX DU MOMENT'],
    ['dernieres-videos-gameplay', 'DERNIÈRES VIDÉOS GAMEPLAY'],
    ['top-bon-plans-de-la-semaine', 'TOP BON PLANS DE LA SEMAINE'],
    ['top-news-jv-tech-du-mois', 'TOP NEWS JVTECH DU MOIS'],
    ['derniers-guides-d-achat', 'DERNIERS GUIDES D\'ACHAT'],
    ['top-guides-d-achat', 'TOP GUIDES D\'ACHAT'],
    ['derniers-tests-high-tech', 'DERNIERS TESTS HIGH-TECH'],
    ['top-test-hight-tech', 'TOP TESTS HIGH-TECH'],
    ['dernieres-news-jvtech', 'DERNIÈRES NEWS JVTECH'],
    ['nos-emissions', 'NOS ÉMISSIONS'],
    ['top-forums-de-jeux', 'TOP FORUMS DE JEUX'],
    ['autres-forums', 'AUTRES FORUMS']
  ];

  let htmlMenuElement = '';
  htmlMenuElement += '<div id="JVC-cleaner-script-menu-button" style="position: fixed; top: 1em; right: 1em; width: 2em; height: 2em; z-index: 10000000000">';
  htmlMenuElement += '<i class="icon-check-jv"></i>';
  htmlMenuElement += '</div>';

  htmlMenuElement += '<div id="JVC-cleaner-script-menu" style="display: none; position: fixed; padding: 1em; top: 4em; right: 1em; width: 44em; z-index: 10000000000; background-color: #18191b; color: #FFF; border: 1px solid #FFF">';
  htmlMenuElement += '<h4 style="float: left">JVC Cleaner</h4>';
  htmlMenuElement += '<a style="float: right" href="https://jvccleanerscript.web-freelance.paris/" target="_blank" title="Site officiel">Site officiel</a>';
  htmlMenuElement += '<div style="clear: both"></div>';
  htmlMenuElement += '<hr />';
  htmlMenuElement += '<div style="float: left; width: 50%">'
  htmlMenuElement += '<h5>Afficher sur la page d\'accueil</h5>';

  jvcCleanerScriptMenuCheckboxItemList.forEach((element) => {
    htmlMenuElement += '<span><label><input type="checkbox" ';

    if (null !== localStorage.getItem(element[0]) && '1' === localStorage.getItem(element[0])) {
      htmlMenuElement += 'checked ';
    }
    else if (null === localStorage.getItem(element[0])) {
      localStorage.setItem(element[0], '1');
      htmlMenuElement += 'checked ';
    }

    htmlMenuElement += 'data-id="' + element[0] + '" ';
    htmlMenuElement += 'id="JVC-cleaner-script-menu-input-show">';
    htmlMenuElement += ' ' + element[1];
    htmlMenuElement += '</label></span><br />';
  })

  htmlMenuElement += '</div><div style="float: left; width: 50%">';
  htmlMenuElement += '<h4>Options</4>';
  htmlMenuElement += '<hr />';
  htmlMenuElement += '<h6>Top commentaires</h6>';
  htmlMenuElement += '<label><input type="checkbox" id="JVC-cleaner-script-menu-input-score-show" style="margin-bottom: .5em" checked> Afficher</label><br />';
  htmlMenuElement += '<label><input type="text" id="JVC-cleaner-script-menu-input-score-up" style="width: 2em; margin-bottom: .5em"> Score haut (upvote)</label><br />';
  htmlMenuElement += '<label><input type="text" id="JVC-cleaner-script-menu-input-score-down" style="width: 2em"> Score bas (downvote)</label>';
  htmlMenuElement += '<hr />';
  htmlMenuElement += '<h6>Liens sponsorisé dans les news</h6>';
  htmlMenuElement += '<label><input type="checkbox" id="JVC-cleaner-script-menu-input-show-ads-link" ';
  if (null !== localStorage.getItem('input-ads-show') && '1' === localStorage.getItem('input-ads-show')) {
    htmlMenuElement += 'checked> Afficher</label>';
  }
  else if (null === localStorage.getItem('input-ads-show')) {
    localStorage.setItem('input-ads-show', '0');
    htmlMenuElement += '> Afficher</label>';
  }
  else {
    htmlMenuElement += '> Afficher</label>';
  }
  htmlMenuElement += '<hr />';
  htmlMenuElement += '<a href="' + document.location.href + '" title="Actualiser">Sauvegarder</a>';
  htmlMenuElement += '</div></div>';

  position.innerHTML = position.innerHTML + htmlMenuElement;
}

function jvcCleanerScriptLoadMenuOption() {
  const jvcCleanerScriptMenuInputScoreShow = document.getElementById('JVC-cleaner-script-menu-input-score-show');
  const jvcCleanerScriptMenuInputScoreUp = document.getElementById('JVC-cleaner-script-menu-input-score-up');
  const jvcCleanerScriptMenuInputScoreDown = document.getElementById('JVC-cleaner-script-menu-input-score-down');

  if (null !== localStorage.getItem('input-score-show') && '1' === localStorage.getItem('input-score-show')) {
    jvcCleanerScriptMenuInputScoreShow.checked = true;
  }
  else if (null === localStorage.getItem('input-score-show')) {
    jvcCleanerScriptMenuInputScoreShow.checked = true;
  }
  else {
    jvcCleanerScriptMenuInputScoreShow.checked = false;
  }

  if (null !== localStorage.getItem('input-score-up')) {
    jvcCleanerScriptMenuInputScoreUp.value = localStorage.getItem('input-score-up');
  }
  else {
    localStorage.setItem('input-score-up', '5');
    jvcCleanerScriptMenuInputScoreUp.value = '5';
  }

  if (null !== localStorage.getItem('input-score-down')) {
    jvcCleanerScriptMenuInputScoreDown.value = localStorage.getItem('input-score-down');
  }
  else {
    localStorage.setItem('input-score-down', '-10');
    jvcCleanerScriptMenuInputScoreDown.value = '-10';
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------------------

/** *********************************************************************************************************************************************
 *  JVC REMOVE CONTENT ON HOMEPAGE
 ********************************************************************************************************************************************* */

const path = document.location.href.replace('https://www.jeuxvideo.com', '');

/** **************************************************************************************************************
 *  REMOVE SECTION ON HOMEPAGE
 ************************************************************************************************************** */
startScript();

/** **************************************************************************************************************
 *  FUNCTION
 ************************************************************************************************************** */
function startScript() {
  if ('/' === path) {
    const sections = document.querySelectorAll('.layout__content section');
    const sectionsBis = document.querySelectorAll('.layout__contentAfter section');
    const sectionsBisFucker = document.querySelectorAll('.layout__contextBottom section');
    const jvTechSections = document.querySelectorAll('.layout__contentAfter section');
    let jvsCleanerScriptIsSections = true;
    let jvcCleanerScriptIsJvTechSections = true;

    if ('0' === localStorage.getItem('en-ce-moment')) {
      document.querySelector('.layout__contentHeader').style.display = 'none';
      document.querySelector('.layout__contentBefore').style.display = 'none';
    }

    if ('0' === localStorage.getItem('dernieres-news-jv')) {
      document.querySelector('.layout__contentMain').style.display = 'none';
    }

    if ('0' === localStorage.getItem('bon-plans-high-tech').toString() && undefined !== sections[0]) {
      sections[0].style.display = 'none';
    }

    if ('0' === localStorage.getItem('top-news-gaming-de-la-semaine') && undefined !== sections[1]) {
      sections[1].style.display = 'none';
    }

    if ('0' === localStorage.getItem('derniers-tests') && undefined !== sections[2]) {
      sections[2].style.display = 'none';
      document.querySelector('.layout__content .secondaryNav').setAttribute('style', 'display: none !important');
    }

    if ('0' === localStorage.getItem('dernieres-news-de-jeux') && undefined !== sections[3]) {
      sections[3].style.display = 'none';
    }

    if ('0' === localStorage.getItem('dernieres-videos-de-jeux') && undefined !== sections[4]) {
      sections[4].style.display = 'none';
      document.querySelector('.layout__content .seoBounceBlockSecondary').setAttribute('style', 'display: none !important');
    }

    if ('0' === localStorage.getItem('jeux-les-plus-populaires') && undefined !== sections[5]) {
      sections[5].style.display = 'none';
    }

    if ('0' === localStorage.getItem('dernieres-astuces') && undefined !== sections[6]) {
      sections[6].style.display = 'none';
    }

    if ('0' === localStorage.getItem('les-jeux-les-plus-attendus') && undefined !== sections[7]) {
      sections[7].style.display = 'none';
    }

    if ('0' === localStorage.getItem('meilleurs-jeux-du-moment') && undefined !== sections[8]) {
      sections[8].style.display = 'none';
    }

    if ('0' === localStorage.getItem('dernieres-videos-gameplay') && undefined !== sections[9]) {
      sections[9].style.display = 'none';
      document.querySelector('.layout__contentAfter .seoBounceBlockSecondary').setAttribute('style', 'display: none !important');
    }

    if ('0' === localStorage.getItem('top-bon-plans-de-la-semaine') && undefined !== sectionsBis[0]) {
        sectionsBis[0].style.display = 'none';
    }

    if ('0' === localStorage.getItem('top-news-jv-tech-du-mois') && undefined !== sectionsBis[1]) {
        sectionsBis[1].style.display = 'none';
    }

    if ('0' === localStorage.getItem('derniers-guides-d-achat') && undefined !== sectionsBis[2]) {
        sectionsBis[2].style.display = 'none';
    }

    if ('0' === localStorage.getItem('top-guides-d-achat') && undefined !== sectionsBis[3]) {
        sectionsBis[3].style.display = 'none';
    }

    if ('0' === localStorage.getItem('derniers-tests-high-tech') && undefined !== sectionsBis[4]) {
        sectionsBis[4].style.display = 'none';
    }

    if ('0' === localStorage.getItem('top-test-hight-tech') && undefined !== sectionsBis[5]) {
        sectionsBis[5].style.display = 'none';
    }

    if ('0' === localStorage.getItem('dernieres-news-jvtech') && undefined !== sectionsBis[6]) {
        sectionsBis[6].style.display = 'none';
    }

    if ('0' === localStorage.getItem('nos-emissions') && undefined !== sectionsBisFucker[0]) {
        sectionsBisFucker[0].style.display = 'none';
    }

    if ('0' === localStorage.getItem('top-forums-de-jeux') && undefined !== sectionsBisFucker[1]) {
        sectionsBisFucker[1].style.display = 'none';
    }

    if ('0' === localStorage.getItem('autres-forums') && undefined !== sectionsBisFucker[2]) {
        sectionsBisFucker[2].style.display = 'none';
    }

    document.querySelector('.layout__content .pt-5').setAttribute('style', 'padding-top: 0 !important');
    document.querySelector('.layout__contentAfter .section__groupTitle.mb-5').setAttribute('style', 'display: none !important; margin-bottom: 0 !important');
    document.querySelector('.layout__contentAfter .pt-5').setAttribute('style', 'padding-top: 0 !important');
    if (themeDark) {
        document.querySelector('.layout__contentMain .bg-body').setAttribute('style', 'background-color: #282A2F !important');
        document.querySelector('.layout__contentAfter .bg-body').setAttribute('style', 'background-color: #282A2F !important');
    }
    document.querySelector('.layout__contextBottom .seoBounceBlockSecondary').setAttribute('style', 'display: none !important');

  }

}

// ----------------------------------------------------------------------------------------------------------------------------------------------

/** *********************************************************************************************************************************************
 *  JVC TEMPLATE CLEANER
 ********************************************************************************************************************************************* */

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

// ----------------------------------------------------------------------------------------------------------------------------------------------

/** *********************************************************************************************************************************************
 *  JVC top comment
 ********************************************************************************************************************************************* */

const jvcCleanerTopComments = document.location.href.replace('https://www.jeuxvideo.com', '').slice(1).split('/');

/** **************************************************************************************************************
 *  REMOVE SECTION ON HOMEPAGE
 ************************************************************************************************************** */
if (null === localStorage.getItem('input-score-show')) {
  localStorage.setItem('input-score-show', '1');
}
else if (jvcCleanerTopComments[0] === 'news' && '1' === localStorage.getItem('input-score-show')) {
  const interval = setInterval(() => {
    var linkPlusDeComm = document.querySelector('.link-plus-de-comm');

    if (null !== linkPlusDeComm) {
      linkPlusDeComm.click();
    } else {
      clearInterval(interval);
      jvcCleanerScriptTopComment();
    }
  }, 100);
}

/** **************************************************************************************************************
 *  FUNCTION
 ************************************************************************************************************** */
function jvcCleanerScriptTopComment() {
  const commentList = document.querySelectorAll('.commentaire-liste .bloc-message-forum');
  const topCommentElement = document.querySelector('.titre-head-bloc');
  let commentsList = [];
  let html = '';

  commentList.forEach(el => {
    let up = parseInt(el.querySelector('.plus-commentaire').innerHTML);
    let down = parseInt(el.querySelector('.moins-commentaire').innerHTML);
    let score = up - down;

    if (score > 0 && score > localStorage.getItem('input-score-up')) {
      if (themeDark) {
          el.setAttribute('style', 'border-color: green; background-color: rgb(54, 88, 54)');
      } else {
          el.setAttribute('style', 'border-color: green; background-color: rgb(186, 232, 186)');
      }
    }
    else if (score < 0 && score < localStorage.getItem('input-score-down')) {
      if (themeDark) {
          el.setAttribute('style', 'border-color: red; background-color: rgb(113, 63, 63)');
      } else {
          el.setAttribute('style', 'border-color: red; background-color: rgb(232, 183, 183)');
      }
    }

    commentsList.push({
      html: '<div class="bloc-message-forum commentaire-parent" data-id-auteur="' + el.getAttribute('data-id-auteur') + '" data-id="' + el.getAttribute('data-id') + '">' + el.innerHTML + '</div>',
      score: score
    });

    commentsList = commentsList.sort((a, b) => {
        return b.score - a.score;
    });
  });

  html += commentsList[0].html;
  html += commentsList[1].html;

  topCommentElement.innerHTML = '<h3>Top commentaire</h3><br />' + html + topCommentElement.innerHTML;
}

// ----------------------------------------------------------------------------------------------------------------------------------------------

/** *********************************************************************************************************************************************
 *  STATS, sera supprimer d'ici quelques semaines.
 ********************************************************************************************************************************************* */
const stats = localStorage.getItem('jvc-cleaner-stats')

if (stats === null || stats === undefined) {
    fetch('https://jvccleanerscript.web-freelance.paris/api/stats');
    localStorage.setItem('jvc-cleaner-stats', 1);
}
