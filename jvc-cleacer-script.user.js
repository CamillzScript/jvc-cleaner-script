// ==UserScript==
// @name         JVC Cleaner Script
// @description  Cleaner pour jeuxvideo.com.
// @author       David ROMERA <d.romera.11@gmail.com> | Camillz
// @supportURL   https://github.com/CamillzScript/jvc-cleaner-script/issues
// @icon         https://www.jeuxvideo.com/favicon.png
// @license      MIT
//
// @version      1.0.7
// @downloadURL  https://raw.githubusercontent.com/CamillzScript/jvc-cleaner-script/main/jvc-cleacer-script.user.js
// @updateURL    https://raw.githubusercontent.com/CamillzScript/jvc-cleaner-script/main/jvc-cleacer-script.user.js
//
// @run-at       document-end
//
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addElement
//
// @match        https://www.jeuxvideo.com/*
//
// @noframes
// ==/UserScript==

console.log('JVC Cleaner Loaded!');

loadMenu();

/** **************************************************************************************************************
 *  FUNCTION
 ************************************************************************************************************** */
// Config menusafa
function loadMenu() {
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

  position.innerHTML = position.innerHTML + htmlMenuElement;
}
