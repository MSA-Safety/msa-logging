'use strict';

module.exports.init = function() {
// Allows us to do something like
// '{0} is dead, but {1} is alive! {0} {2}'.format('ASP', 'ASP.NET')
  if (!String.prototype.format) {
    String.prototype.format = function () {
      var args = arguments;

      if (args.length === 1) {
        var type = Object.prototype.toString.call(args[0]);
        if (type === '[object Arguments]') {
          args = args[0];
        }
      }

      return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] !== 'undefined' ? args[number] : match;
      });
    };
  }

  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (str) {
      return this.slice(0, str.length) === str;
    };
  }

  if (!String.prototype.endsWith) {
    String.prototype.startsWith = function (str) {
      return this.slice(-str.length) === str;
    };
  }
};
