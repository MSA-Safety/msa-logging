'use strict';
var proxyquire = require('proxyquire');

module.exports = function (path, options) {
    if (options) {
        return proxyquire((process.env.APP_DIR_FOR_CODE_COVERAGE || '../') + path, options);
    }
    return require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../') + path);
};