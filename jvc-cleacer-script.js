// ==UserScript==
// @name         JVC Cleaner Script
// @version      1.0.0
// @updateURL    
// @description  Cleaner pour jeuxvideo.com.
// @author       David ROMERA <d.romera.11@gmail.com> | Camillz
// @license      MIT
// @match        https://www.jeuxvideo.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jeuxvideo.com
// ==/UserScript==

document.addEventListener('DOMLoaded', () => {
    console.log('JVC Cleaner Script - Loaded !');

    const navItem = new NavItem();
});

/** ************************************************************************************************************
 * CLASS
 ************************************************************************************************************ */
class NavItem
{
  constructor(Data) {
    this.potision = document.querySelector('.header__globalUser');
    this.html = '<div class="headerAccount headerAccount--jvc-cleaner-script dropdown">';
    this.html += '<span class="headerAccount__notif js-header-menu-dropdown js-header-notif">';
    this.html += '<i class="icon-check-jv"></i>';
    this.html += '</span>';
    this.html += '<div class="dropdown-menu headerAccount__dropdownContainer">';
    this.html += '<div id="jvc-cleaner-script-menu"></div>';
    this.html += '</div>';
    this.html += '</div>';

    this.potision.append = this.html;
  }
}
