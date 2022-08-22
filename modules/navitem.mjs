() => {
  const position = document.querySelector('.header__globalUser');
  let htmlMenuElement = '';
  htmlMenuElement += '<div class="headerAccount headerAccount--jvc-cleaner-script dropdown">';
  htmlMenuElement += '<span class="headerAccount__notif js-header-menu-dropdown js-header-notif">';
  htmlMenuElement += '<i class="icon-check-jv"></i>';
  htmlMenuElement += '</span>';
  htmlMenuElement += '<div class="dropdown-menu headerAccount__dropdownContainer">';
  htmlMenuElement += '<div id="jvc-cleaner-script-menu"></div>';
  htmlMenuElement += '</div>';
  htmlMenuElement += '</div>';

  position.append = htmlMenuElement;
}
