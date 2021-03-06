'use strict';

module.exports = {
  app: {
    title: 'TasteBuds',
    description: 'Taste buds',
    keywords: 'mongodb, express, angularjs, node.js, mongoose, passport',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3000,
  host: process.env.HOST || '0.0.0.0',
  templateEngine: 'swig',
  // Session Cookie settings
  sessionCookie: {
    // session expiration is set by default to 24 hours
    maxAge: 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: false
  },
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: process.env.SESSION_SECRET || 'TasteBuds',
  // sessionKey is set to the generic sessionId key used by PHP applications
  // for obsecurity reasons
  sessionKey: 'sessionId',
  sessionCollection: 'sessions',
  // Lusca config
  csrf: {
    csrf: true,
    csp: { 
      policy:{  'default-src': '*;', 
            	  'script-src':"'self' 'unsafe-eval' 'unsafe-inline' https://npmcdn.com;", 
                'style-src':"'self' 'nonce-...' 'unsafe-eval' 'unsafe-inline'" } 
      },
    xframe: 'SAMEORIGIN',
    p3p: 'ABCDEF',
    xssProtection: true 
  },
  logo: 'frontend/core/img/brand/logo.png',
  favicon: 'frontend/core/img/brand/favicon.ico',
  uploads: {
    profileUpload: {
      dest: './frontend/core/img/profile/uploads/', // Profile upload destination path
      limits: {
        fileSize: 1 * 1024 * 1024 // Max file size in bytes (1 MB)
      }
    }
  }
};
