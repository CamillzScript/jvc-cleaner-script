/** **************************************************************************************************************
 *  LOAD MENU
 ************************************************************************************************************** */
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
  const position = document.querySelector('header');
  const jvcCleanerScriptMenuCheckboxItemList = [
    ['en-ce-moment', 'EN CE MOMENT'],
    ['dernieres-news-jv', 'DERNIÈRES NEWS JV'],
    ['derniers-test', 'DERNIERS TESTS'],
    ['dernieres-news-de-jeux', 'DERNIÈRES NEWS DE JEUX'],
    ['derniers-videos-test-de-jeux', 'DERNIÈRES VIDÉOS TESTS DE JEUX'],
    ['jeux-les-plus-populaires', 'JEUX LES PLUS POPULAIRES'],
    ['dernieres-astuces', 'DERNIÈRES ASTUCES'],
    ['les-jeux-les-plus-attendus', 'LES JEUX LES PLUS ATTENDUS'],
    ['meilleurs-jeux-du-moment', 'MEILLEURS JEUX DU MOMENT'],
    ['dernieres-videos-gameplay', 'DERNIÈRES VIDÉOS GAMEPLAY'],
    ['bon-plans-high-tech', 'BON PLANS HIGH TECH'],
    ['derniers-test-high-tech', 'DERNIERS TESTS HIGH-TECH'],
    ['derniers-guides-d-achat', 'DERNIERS GUIDES D\'ACHAT'],
    ['dernieres-news-hardware', 'DERNIÈRES NEWS HARDWARE'],
    ['nos-emissions', 'NOS ÉMISSIONS']
  ];

  let htmlMenuElement = '';
  htmlMenuElement += '<div id="JVC-cleaner-script-menu-button" style="position: fixed; top: 1em; right: 1em; width: 2em; height: 2em; z-index: 10000000000">';
  htmlMenuElement += '<i class="icon-check-jv"></i>';
  htmlMenuElement += '</div>';

  htmlMenuElement += '<div id="JVC-cleaner-script-menu" style="display: none; position: absolute; padding: 1em; top: 4em; right: 1em; width: 44em; z-index: 10000000000; background-color: #18191b; color: #FFF; border: 1px solid #FFF">';
  htmlMenuElement += '<h4>JVC Cleaner</h4>';
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
  htmlMenuElement += '<a href="' + document.location.href + '" title="Actualiser">Actualiser</a>';
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
    localStorage.setItem('input-score-down', '10');
    jvcCleanerScriptMenuInputScoreDown.value = '10';
  }
}
