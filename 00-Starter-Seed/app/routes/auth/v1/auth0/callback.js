import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {

  beforeModel(transition) {
    this._super(...arguments);
    this.get('session').authenticate('simple-auth-authenticator:lock').catch((reason) => {
      this.set('errorMessage', reason.error);
    });
  }
});
