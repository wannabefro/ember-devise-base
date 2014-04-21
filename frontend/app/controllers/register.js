export default Ember.ObjectController.extend(Ember.Validations.Mixin, {
  valid: false,
  isValid: function(){
    var _this = this;
    this.validate().then(function(){
      _this.set('valid', true);
    }, function(){
      _this.set('valid', false);
    });
    return this.get('valid');
  }.property('username', 'email', 'password', 'passwordConfirmation', 'valid'),

  validations: {
    username: {
      presence: true,
      length: { minimum: 4}
    },
    email: {
      presence: true,
      format: {with: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, message: 'must be a valid email address'}
    },
    password: {
      presence: true,
      length: { minimum: 8 },
      confirmation: true
    },
    passwordConfirmation: {
      presence: true
    }
  }
});
