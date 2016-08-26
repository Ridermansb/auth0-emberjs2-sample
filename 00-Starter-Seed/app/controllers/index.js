import Ember from 'ember';
import config from 'start/config/environment'

export default Ember.Controller.extend({
  authConnect: `${config.host}/auth/v1/auth0/connect`
});
