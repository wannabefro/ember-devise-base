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
        Ember.run(function(){
          _this.get('controllers.login').send('authenticate', login);
        });
      }, function(error){
      });
    }
  }
});
