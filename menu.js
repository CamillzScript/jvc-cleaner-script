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
    jvcCleanerScriptMenuCheckboxClick(index);
  });
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

  htmlMenuElement += '<div id="JVC-cleaner-script-menu" style="display: none; position: absolute; padding: 1em; top: 4em; right: 1em; width: 22em; z-index: 10000000000; background-color: #18191b; color: #FFF; border: 1px solid #FFF">';
  htmlMenuElement += '<h4>JVC Cleaner</h4>';
  htmlMenuElement += '<hr />';
  htmlMenuElement += '<h5>Afficher sur la page d\'accueil</h5>';

  jvcCleanerScriptMenuCheckboxItemList.forEach((element) => {
    console.log(element);
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

  htmlMenuElement += '</div>';

  position.innerHTML = position.innerHTML + htmlMenuElement;
}

function jvcCleanerScriptMenuCheckboxClick(index) {
  const jvcCleanerScriptCheckboxList = document.querySelectorAll('#JVC-cleaner-script-menu-input-show');

}
