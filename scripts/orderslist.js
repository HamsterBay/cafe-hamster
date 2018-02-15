(function(window) {
  'use-strict';
  var Application = window.Application || {};
  var $ = window.jQuery;

  function OrdersList(selector) {
    if (!selector) {
      throw new Error('There is no selector');
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error('There is no elements propoer for selector: ' + selector);
    }
  }

  OrdersList.prototype.addCheckboxHandler = function(fn) {
    this.$element.on('click', 'input', function(e) {
      var email = event.target.value;
      console.log(email);
      this.removeRow(email);
      fn(email);
    }.bind(this));
  };

  OrdersList.prototype.addRow = function(order) {
    this.removeRow(order.emailAddress);
    var rowElement = new Row(order);
    this.$element.append(rowElement.$element);
  };

  OrdersList.prototype.removeRow = function(email) {
    this.$element
      .find('[value="' + email + '"]')
      .closest('[data-order="choice"]')
      .remove();
  };

  function Row(order) {
    var $div = $('<div></div>', {
      'data-order': 'choice',
      'class': 'checkbox'
    });
    var $label = $('<label></label>');
    var $choice = $('<input></input>', {
      type: 'checkbox',
      value: order.emailAddress
    });
    var description = ' ' + order.coffee + ': ';
    description += order.size + ' | ';
    if(order.taste) {
      description += order.taste + ' | ';
    }
    description += ' ' + order.level + ' x caff. ';
    description += '(for: ' + order.emailAddress + ' ) ';

    $label.append($choice);
    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

  Application.OrdersList = OrdersList;
  window.Application = Application;
})(window);
