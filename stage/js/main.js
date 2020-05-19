$(function () {
  'use strict';
  $('.fa-exchange-alt').on('click', function () {
    $('.content-area, .sidebar').toggleClass('no-sidebar');
  });
});