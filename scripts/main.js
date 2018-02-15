(function(window) {
  'use strict';
  var SELECTOR_FORM = '[data-order="formular"]';
  var SELECTOR_ORDERSLIST = '[data-order="ordersList"]'
  var Application = window.Application;
  var Barista = Application.Barista;
  var DataBase = Application.DataBase;
  var ToOrder = Application.ToOrder;
  var Validation = Application.Validation;
  var OrdersList = Application.OrdersList;
  var myBarista = new Barista('#23, John', new DataBase());
  window.myBarista = myBarista;

  var ordersList = new OrdersList(SELECTOR_ORDERSLIST);
  ordersList.addCheckboxHandler(
    myBarista.doOrder.bind(myBarista));

  var toOrder = new ToOrder(SELECTOR_FORM);
  toOrder.addSubmitHandler(
    function(data) {
      myBarista.addOrder.call(myBarista, data);
      ordersList.addRow.call(ordersList, data);
      $('#caffeineLabel').text(['5 ... you are just in halfway!']);
    });
toOrder.addKeyInputHandler(Validation.ifCompanyAddress);

})(window);
