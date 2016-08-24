import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';
import config from 'start/config/environment'

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  redirect: function () {
      window.location.replace(`${config.host}/auth/v1/auth0/connect`);
  }
});
