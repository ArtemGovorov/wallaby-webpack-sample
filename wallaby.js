var babel = require('babel');
var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
});

module.exports = function () {

  return {
    files: [
      { pattern: 'src/*.ts', load: false }
    ],

    tests: [
      { pattern: 'test/*Spec.ts', load: false }
    ],

    preprocessors: {
      '**/*.js': file => babel.transform(file.content, { sourceMap: true })
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};
