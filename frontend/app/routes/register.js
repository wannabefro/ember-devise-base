export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('user');
  },

  actions: {
    save: function(model){
      var _this = this;
      var user = model.getProperties('username', 'email', 'password', 'passwordConfirmation');
      var login = model.getProperties('username', 'password');
      var data = {user: user};
      $.post('/api/v1/users', data).then(function(response){
         _this.container.lookup('session-store:local-storage').persist({auth_email: response.email, auth_token: response.auth_token, authenticatorFactory: 'authenticator:devise'});
        _this.set('session.isAuthenticated', true);
        _this.transitionTo('index');
        _this.controllerFor('application').set('success', "Welcome to App!");
      }, function(error){
        var errors = JSON.parse(error.responseText).errors;
        var controller = _this.controller;
        for(var attr in errors) {
          if (controller.get('content').hasOwnProperty(attr)) {
            controller.set('errors.'+attr, errors[attr]);
          }
        }
      });
    }
  }
});
