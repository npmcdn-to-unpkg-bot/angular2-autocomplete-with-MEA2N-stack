'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        // bower:css
        'public/dist/bootstrap.css'
        // endbower
      ],
      js: [
        'public/lib/owasp-password-strength-test.js',
        'public/systemjs.config.js'
        // endbower
      ]
    //  tests: ['public/lib/angular-mocks/angular-mocks.js']
    },
    css: [
      'public/dist/*.css'
    ],
    less: [
      'frontend/*/less/*.less'
    ],
    sass: [
      'frontend/*/scss/*.scss'
    ],
    js: [
      'frontend/*/*.js'
    ],
    img: [
      'frontend/**/*/img/**/*.jpg',
      'frontend/**/*/img/**/*.png',
      'frontend/**/*/img/**/*.gif',
      'frontend/**/*/img/**/*.svg'
    ],
    views: ['frontend/*/views/**/*.html'],
    templates: ['build/templates.js'] 
  },
  server: {
    gruntConfig: ['gruntfile.js'],
    gulpConfig: ['gulpfile.js'],
    allJS: ['server.js', 'config/**/*.js','config/*.js', 'backend/*/**/*.js'],
    models: 'backend/*/models/**/*.js',
    routes: ['backend/!(core)/routes/**/*.js', 'backend/core/routes/**/*.js'],
    sockets: 'backend/*/sockets/**/*.js',
    config: ['backend/*/config/*.js'],
    policies: 'backend/*/policies/*.js',
    views: ['frontend/*/tviews/*.html', 'frontend/*/views/**/*.html']
  }
};
