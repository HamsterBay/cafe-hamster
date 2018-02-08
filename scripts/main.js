(function(window) {
  'use strict';
  var Application = window.Application;
  var Barista = Application.Barista;
  var DataBase = Application.DataBase;
  var myBarista = new Barista('#23, John', new DataBase());
  window.myBarista = myBarista;
})(window);
