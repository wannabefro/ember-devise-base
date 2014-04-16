export default Ember.Controller.extend(Ember.SimpleAuth.LoginControllerMixin, { 
  authenticatorFactory: "authenticator:devise" 
});
