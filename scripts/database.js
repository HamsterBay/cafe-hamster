(function (window) {
  'use strict';
  var Application = window.Application || {};

  function DataBase() {
    this.data = {};
  };

  DataBase.prototype.add = function(key, value) {
    this.data[key] = value;
  };

  DataBase.prototype.search = function(key) {
    return this.data[key];
  };

  DataBase.prototype.returnAll = function() {
    return this.data;
  };

  DataBase.prototype.delete = function(key) {
    delete this.data[key];
  }

  Application.DataBase = DataBase;
  window.Application = Application;
} (window));
