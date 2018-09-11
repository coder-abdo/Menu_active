"use strict";
var Toggle = function (doc) {
    var _toggleBtn = doc.querySelector('.menu__icon-container');
    var _toggleMenu = doc.querySelector('.menu__list-items');
    function clickHandler() {
      this.classList.toggle('active');
      _toggleMenu.classList.toggle('active');
    }
    function init() {
      _toggleBtn.addEventListener('click', clickHandler);
    }
    return {
      init: init };
  
  }(document);
  
  document.addEventListener('DOMContentLoaded', function () {return Toggle.init();});