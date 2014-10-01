'use strict';

/* This is required to allow should-syntax in unit test code */
/*jshint unused: false*/
/*jshint expr: true*/

var should = require('should'),
    sinon = require('sinon'),
    events = require('events'),
    winston = require('winston');

var require_helper = require('./require_helper.js'),
    log = require_helper('index.js');

describe('utils/Log', function() {
    var _sandbox;

    describe('initialization', function() {
        it('should throw if parameter targetClassName was zero length string', function() {
            should(function() {
                new log('');
            }).throw('missing target class name');
        });

        it('should pass value of parameter targetClassName to winston constructor', function() {
            var expectedValue = 'unit test for targetClassName';
            var receivedOptions = null;
            stubWinston(function(options) { receivedOptions = options; }, null);

            new log(expectedValue);

            should.exist(receivedOptions);
            receivedOptions.transports[0].label.should.equal(expectedValue);
        });
    });

    describe('info', function() {
        it('should call log method of winston with "info" as level and given message text', function() {
            var expectedmessageText = 'unit test text';
            var receivedLevel = null;
            var receivedMessageText = null;
            stubWinston(null, function(level, msg) { receivedLevel = level; receivedMessageText = msg;  });

            var testLogger = new log('test');
            testLogger.info(expectedmessageText);

            receivedLevel.should.equal('info');
            receivedMessageText.should.equal(expectedmessageText);
        });

      it('should call log method of winston with "info" as level and formatted message text', function() {
        var expectedmessageText = 'unit test text';
        var givenmessageText = 'unit {0} {1}';
        var givenParamText1 = 'test';
        var givenParamText2 = 'text';

        var receivedLevel = null;
        var receivedMessageText = null;
        stubWinston(null, function(level, msg) { receivedLevel = level; receivedMessageText = msg;  });

        var testLogger = new log('test');
        testLogger.info(givenmessageText, givenParamText1, givenParamText2);

        receivedLevel.should.equal('info');
        receivedMessageText.should.equal(expectedmessageText);
      });
    });

    describe('verbose', function() {
        it('should call log method of winston with "verbose" as level and given message text', function() {
            var expectedmessageText = 'unit test text';
            var receivedLevel = null;
            var receivedMessageText = null;
            stubWinston(null, function(level, msg) { receivedLevel = level; receivedMessageText = msg;  });

            var testLogger = new log('test');
            testLogger.verbose(expectedmessageText);

            receivedLevel.should.equal('verbose');
            receivedMessageText.should.equal(expectedmessageText);
        });

      it('should call log method of winston with "verbose" as level and formatted message text', function() {
        var expectedmessageText = 'unit test text';
        var givenmessageText = 'unit {0} {1}';
        var givenParamText1 = 'test';
        var givenParamText2 = 'text';

        var receivedLevel = null;
        var receivedMessageText = null;
        stubWinston(null, function(level, msg) { receivedLevel = level; receivedMessageText = msg;  });

        var testLogger = new log('test');
        testLogger.verbose(givenmessageText, givenParamText1, givenParamText2);

        receivedLevel.should.equal('verbose');
        receivedMessageText.should.equal(expectedmessageText);
      });
    });

    describe('error', function() {
        it('should call log method of winston with "error" as level and given message text', function() {
            var expectedmessageText = 'unit test text';
            var receivedLevel = null;
            var receivedMessageText = null;
            stubWinston(null, function(level, msg) { receivedLevel = level; receivedMessageText = msg;  });

            var testLogger = new log('test');
            testLogger.error(expectedmessageText);

            receivedLevel.should.equal('error');
            receivedMessageText.should.equal(expectedmessageText);
        });

      it('should call log method of winston with "error" as level and formatted message text', function() {
        var expectedmessageText = 'unit test text';
        var givenmessageText = 'unit {0} {1}';
        var givenParamText1 = 'test';
        var givenParamText2 = 'text';

        var receivedLevel = null;
        var receivedMessageText = null;
        stubWinston(null, function(level, msg) { receivedLevel = level; receivedMessageText = msg;  });

        var testLogger = new log('test');
        testLogger.error(givenmessageText, givenParamText1, givenParamText2);

        receivedLevel.should.equal('error');
        receivedMessageText.should.equal(expectedmessageText);
      });
    });

    describe('warn', function() {
        it('should call log method of winston with "warn" as level and given message text', function() {
            var expectedmessageText = 'unit test text';
            var receivedLevel = null;
            var receivedMessageText = null;
            stubWinston(null, function(level, msg) { receivedLevel = level; receivedMessageText = msg;  });

            var testLogger = new log('test');
            testLogger.warn(expectedmessageText);

            receivedLevel.should.equal('warn');
            receivedMessageText.should.equal(expectedmessageText);
        });

      it('should call log method of winston with "warn" as level and formatted message text', function() {
        var expectedmessageText = 'unit test text';
        var givenmessageText = 'unit {0} {1}';
        var givenParamText1 = 'test';
        var givenParamText2 = 'text';

        var receivedLevel = null;
        var receivedMessageText = null;
        stubWinston(null, function(level, msg) { receivedLevel = level; receivedMessageText = msg;  });

        var testLogger = new log('test');
        testLogger.warn(givenmessageText, givenParamText1, givenParamText2);

        receivedLevel.should.equal('warn');
        receivedMessageText.should.equal(expectedmessageText);
      });
    });

    describe('debug', function() {
        it('should call log method of winston with "debug" as level and given message text', function() {
            var expectedmessageText = 'unit test text';
            var receivedLevel = null;
            var receivedMessageText = null;
            stubWinston(null, function(level, msg) { receivedLevel = level; receivedMessageText = msg;  });

            var testLogger = new log('test');
            testLogger.debug(expectedmessageText);

            receivedLevel.should.equal('debug');
            receivedMessageText.should.equal(expectedmessageText);
        });

      it('should call log method of winston with "debug" as level and formatted message text', function() {
        var expectedmessageText = 'unit test text';
        var givenmessageText = 'unit {0} {1}';
        var givenParamText1 = 'test';
        var givenParamText2 = 'text';

        var receivedLevel = null;
        var receivedMessageText = null;
        stubWinston(null, function(level, msg) { receivedLevel = level; receivedMessageText = msg;  });

        var testLogger = new log('test');
        testLogger.debug(givenmessageText, givenParamText1, givenParamText2);

        receivedLevel.should.equal('debug');
        receivedMessageText.should.equal(expectedmessageText);
      });
    });

    beforeEach(function() {
        // create a sandbox
        _sandbox = sinon.sandbox.create();
    });

    afterEach(function() {
        // restore the environment as it was before
        _sandbox.restore();
    });

    /*jshint validthis:true */
    function stubWinston(callbackOptions, callbackLog) {
        _sandbox.stub(winston, 'Logger', function(options) {
            if (typeof(callbackOptions) === 'function') {
                callbackOptions(options);
            }

            // Create a mock response object...
            var res = new events.EventEmitter();

            res.log = function(level, msg) {
                if (typeof(callbackLog) === 'function') {
                    callbackLog(level, msg);
                }
            };

            //callback(res);

            return res; // new events.EventEmitter();
        }.bind(this));
    }
});

describe('log configuration', function() {
    var _sandbox;


    it('should pass the custom config to winston constructor', function() {
        var expectedConfig = { transports:
            [
                new winston.transports.File({      // Log to a file simultaniously
                    filename: './application.log', // File to log to
                    level: 'warn',                   // Level to log
                    timestamp: true                // Appends a time stamp to the log entry
                })
            ],
            levels: winston.config.npm.levels};
        var expectedName = 'customOptionsLogger';
        var receivedOptions = null;
        stubWinston(function(options) { receivedOptions = options; }, null);

        log(expectedName, expectedConfig);

        should.exist(receivedOptions);
        receivedOptions.should.equal(expectedConfig);
        receivedOptions.transports[0].label.should.equal(expectedName);
    });

    beforeEach(function() {
        // create a sandbox
        _sandbox = sinon.sandbox.create();
    });

    afterEach(function() {
        // restore the environment as it was before
        _sandbox.restore();
    });

    /*jshint validthis:true */
    function stubWinston(callbackOptions, callbackLog) {
        _sandbox.stub(winston, 'Logger', function(options) {
            if (typeof(callbackOptions) === 'function') {
                callbackOptions(options);
            }

            // Create a mock response object...
            var res = new events.EventEmitter();

            res.log = function(level, msg) {
                if (typeof(callbackLog) === 'function') {
                    callbackLog(level, msg);
                }
            };

            //callback(res);

            return res; // new events.EventEmitter();
        }.bind(this));
    }
});