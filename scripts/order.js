(function (window) {
  'use-strict';
  var Application = window.Application || {};
  var $ = window.jQuery;

  function ToOrder(selector) {
    if(!selector) {
      throw new Error('There is no selector');
    }
    this.$formElement = $(selector);
    if(this.$formElement === 0) {
      throw new Error('No proper elements for sleector: ' + selector);
    }
  }

  ToOrder.prototype.addSubmitHandler = function(fn) {
    console.log('Subimt handler');
    this.$formElement.on('submit', function(click) {
      click.preventDefault();
      var data = {};
       $(this).serializeArray().forEach(function(element) {
        data[element.name] = element.value;
        console.log('Element ' + element.name + 'Value: ' + element.value);
      });
      console.log(data);
      fn(data);
      this.reset();
      this.elements[0].focus();
    });
  };


  Application.ToOrder = ToOrder;
  window.Application = Application;
})(window);
