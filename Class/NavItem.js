class NavItem
{
  constructor(Data) {
    this.potision = document.querySelector('.header__globalUser');
    this.html  =  '<div class="headerAccount headerAccount--jvc-cleaner-script dropdown">';
    this.html +=    '<span class="headerAccount__notif js-header-menu-dropdown js-header-notif">';
    this.html +=      '<i class="icon-check-jv"></i>';
    this.html +=    '</span>';
    this.html +=    '<div class="dropdown-menu headerAccount__dropdownContainer">';
    this.html +=      '<div id="jvc-cleaner-script-menu"></div>';
    this.html +=    '</div>';
    this.html +=  '</div>';

    this.potision.append = this.html;
  }
}

eport default NavItem;
