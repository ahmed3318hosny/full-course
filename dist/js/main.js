$(function () {
  'use strict';
  $('.fa-exchange-alt').on('click', function () {
    $('.content-area, .sidebar').toggleClass('no-sidebar');
  });
  //toggle icon
  $('.toggle-submenu').on('click', function () {
    $(this).toggleClass('fa-angle-right fa-angle-down');
    $(this).parent('a').next('.child-links').slideToggle();
  });
});
const myset = new set();