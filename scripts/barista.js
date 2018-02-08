(function (window) {
  'use strict';
  var Application = window.Application || {};

function Barista(id, database) {
  this.id = id;
  this.database = database;
}

Barista.prototype.addOrder = function(order) {
  this.database.add(order.email, order);
};

Barista.prototype.doOrder = function(email) {
  this.database.delete(email);
};

Barista.prototype.printOrders = function() {
  var customerArray = Object.keys(this.database.returnAll());
  console.log('Barista no: ' + this.id + ' have undone orders:');
  customerArray.forEach(function(id) {
    console.log(this.database.search(id));
  }.bind(this));
};

Application.Barista = Barista;
window.Application = Application;
})(window);
