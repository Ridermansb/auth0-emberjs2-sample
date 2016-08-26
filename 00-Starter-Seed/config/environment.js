/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'start',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    ENV.host = 'http://localhost:4200';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.host = 'http://localhost:4200';
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.host = 'https://auth0.stamplayapp.com';
  }

  ENV[ 'contentSecurityPolicy' ] = {
    'font-src': "'self' data: https://cdn.auth0.com",
    'style-src': "'self' 'unsafe-inline'",
    'script-src': "'self' 'unsafe-eval' 'unsafe-inline' https://cdn.auth0.com gitskills.auth0.com",
    'connect-src': "'self' http://localhost:* gitskills.auth0.com auth0.stamplayapp.com"
  };


  ENV['auth0-ember-simple-auth'] = {
    clientID: "PTFmTkI6eWcTBjbfD5Tzg9kugPyx9Mnp",
    domain: "gitskills.auth0.com",
    callbackUrl: `${ENV.host}/login/callback`
  };

  ENV.Auth0 = {
    clientId: 'PTFmTkI6eWcTBjbfD5Tzg9kugPyx9Mnp',
    domain: 'gitskills.auth0.com',
    callbackUrl: `${ENV.host}/login/callback`,
  };

  return ENV;
};
