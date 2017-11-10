module.exports = function(config) {
  config.set({
    files: [
      './node_modules/sinon-chrome/bundle/sinon-chrome-webextensions.min.js',
      './test/setup.js',
      './src/**/*.js',
      './test/**/*.test.js',
    ],
    exclude: [
      './src/**/*.run.js',
      './src/content/**/*.js',  // For now ...
      './src/content/cm-addons/**/*.js',
      './src/third-party/**/*.js',
      './src/util/rivets-formatters.js',
    ],
    frameworks: ['chai', 'mocha', 'sinon-chrome'],
    reporters: ['progress'],
    port: 7328,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['Firefox'],
    singleRun: false,
    concurrency: Infinity
  })
}
