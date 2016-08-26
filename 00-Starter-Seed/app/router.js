import Ember from 'ember';
import config from 'start/config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', function() {
    this.route('callback');
  });

  this.route('protected');
  this.route('auth-error');

  this.route('auth', function() {
    this.route('v1', function() {
      this.route('auth0', function() {
        this.route('callback');
      });
    });
  });
});

export default Router;
