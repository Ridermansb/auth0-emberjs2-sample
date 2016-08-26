import { moduleFor, test } from 'ember-qunit';

moduleFor('route:auth/v1/auth0/callback', 'Unit | Route | auth/v1/auth0/callback', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
