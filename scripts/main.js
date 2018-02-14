(function(window) {
  'use strict';
  var SELECTOR_FORM = '[data-order="formular"]';
  var Application = window.Application;
  var Barista = Application.Barista;
  var DataBase = Application.DataBase;
  var ToOrder = Application.ToOrder;
  var myBarista = new Barista('#23, John', new DataBase());
  window.myBarista = myBarista;
  var toOrder = new ToOrder(SELECTOR_FORM);
  toOrder.addSubmitHandler(
    myBarista.addOrder.bind(myBarista));
  console.log(toOrder);
})(window);
