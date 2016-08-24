import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login', function() {
    this.route('callback');
  });
  this.route('protected');
  this.route('auth-error');
});

export default Router;
