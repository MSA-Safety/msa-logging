'use strict';


var winston = require('winston');

//noinspection JSUnusedGlobalSymbols,JSHint
var string_ex = require('./string.extensions.js');
string_ex.init();

//-----------------------------------------------------------
// Class Definition
//-----------------------------------------------------------

/*
 * This is a wrapper for any logging
 */
function Log(targetClassname, configuration) {
  this._logger = initialization(targetClassname, configuration);
}

var p = Log.prototype;

//-----------------------------------------------------------
// internal methods
//-----------------------------------------------------------
var write_log = function (logger, type, text, args) {
  if (args.length > 1) {
    [].shift.apply(args);
    text = text.format(args);
  }

  logger.log(type, text);
};

//-----------------------------------------------------------
// Methods
//-----------------------------------------------------------

p.info = function (text) {
  write_log(this._logger, 'info', text, arguments);

/*  if (arguments.length === 1) {
    this._logger.log('info', text);
  }
  else {
    [].shift.apply(arguments);
    this._logger.log('info', text.format(arguments));
  }*/
};

p.verbose = function (text) {
  if (arguments.length === 1) {
    this._logger.log('verbose', text);
  }
  else {
    [].shift.apply(arguments);
    this._logger.log('verbose', text.format(arguments));
  }
};

p.error = function (text) {
  if (arguments.length === 1) {
    this._logger.log('error', text);
  }
  else {
    [].shift.apply(arguments);
    this._logger.log('error', text.format(arguments));
  }
};

p.warn = function (text) {
  if (arguments.length === 1) {
    this._logger.log('warn', text);
  }
  else {
    [].shift.apply(arguments);
    this._logger.log('warn', text.format(arguments));
  }
};

p.debug = function (text) {
  if (arguments.length === 1) {
    this._logger.log('debug', text);
  }
  else {
    [].shift.apply(arguments);
    this._logger.log('debug', text.format(arguments));
  }
};

//-----------------------------------------------------------
// initialization
//-----------------------------------------------------------
function initialization(targetClassname, configuration) {
  if (!targetClassname) {
    throw new Error('missing target class name');
  }

  var config = configuration || {
      transports: [                          // You can specify the destinations to log the messages to
          new winston.transports.Console({   // Log to the console
              level: 'silly',
              timestamp: true,               // Appends a time stamp to the log entry
//              label: targetClassname,
              colorize: true                 // Make output colorful
          })
//        new winston.transports.File({      // Log to a file simultaniously
//            filename: './application.log', // File to log to
//            level: warn,                   // Level to log
//            timestamp: true                // Appends a time stamp to the log entry
//        })
      ],
      levels: winston.config.npm.levels
  };

  if (config.transports) {
      config.transports.forEach(function(trans) {
          trans.label = targetClassname;
      });
  }

  var logger = new winston.Logger(config);

  winston.addColors(winston.config.npm.colors);

  return logger;
}

//-----------------------------------------------------------
// Exports
//-----------------------------------------------------------
/**
 * if name parameter is set returns new logger - else returns Log type
 *
 * @param {String} name name of new logger
 * @param {Object} config of the new logger
 * @returns {Object} new logger or log type
 * @api public
 */
module.exports = function (name, config) {
    if (typeof name === 'object') {
        name = 'unknown';
        config = name;
    }
  return name !== undefined ? new Log(name, config) : Log;
};