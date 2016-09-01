var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({});

module.exports = function () {

  return {
    files: [
      { pattern: 'node_modules/chai/chai.js', instrument: false },
      { pattern: 'src/**/*.ts', load: false }
    ],

    tests: [
      { pattern: 'test/**/*Spec.ts', load: false }
    ],

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.expect = chai.expect;
      window.__moduleBundler.loadTests();
    }
  };
};
