export default {
  name: 'authentication',
  initialize: function(container, application) {
    Ember.SimpleAuth.setup(container, application);
  }
}
