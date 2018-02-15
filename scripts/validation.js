(function (window) {
  'use-strict';
  var Application = window.Application || {};
  var Validation = {
    ifCompanyAddress : function(email) {
      return /.+hamster\.com$/.test(email);
    }
  };

  Application.Validation = Validation;
  window.Application = Application;
})(window);
