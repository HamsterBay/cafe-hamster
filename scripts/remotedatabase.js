(function(window) {
  'use-strict';
  var Application = window.Application || {};
  var $ = jQuery;

  function RemoteDataBase(url) {
    if (!url) {
      throw new Error('There is no URL path');
    }
    this.urlPath = url;
  }

  RemoteDataBase.prototype.add = function(key, value) {
    $.post(this.urlPath, value, function(serverResponse) {
      console.log(serverResponse);
    });
  };

  RemoteDataBase.prototype.readAll = function(fnsr) {
    $.get(this.urlPath, function(serverResponse) {
      console.log(serverResponse);
      fnsr(serverResponse);
    });
  };

  RemoteDataBase.prototype.read = function(key, fnsr) {
    $.get(this.urlPath + '/' + key, function(serverResponse) {
      console.log(serverResponse);
      fnsr(serverResponse);
    });
  };

  RemoteDataBase.prototype.delete = function(key) {
    $.ajax(this.urlPath + '/' + key, {
      type: 'DELETE'
    });
  };

  Application.RemoteDataBase = RemoteDataBase;
  window.Application = Application;
})(window);
