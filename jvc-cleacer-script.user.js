// ==UserScript==
// @name         JVC Cleaner Script
// @description  Cleaner pour jeuxvideo.com.
// @author       David ROMERA <d.romera.11@gmail.com> | Camillz
// @supportURL   https://github.com/CamillzScript/jvc-cleaner-script/issues
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jeuxvideo.com
// @license      MIT
//
// @version      1.0.1
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

GM_addElement('script', {
  src: 'https://raw.githubusercontent.com/CamillzScript/jvc-cleaner-script/main/modules/navitem.mjs',
  type: 'module'
})
