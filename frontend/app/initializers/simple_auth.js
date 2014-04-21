export default {
  name: 'authentication',
  initialize: function(container, application) {
    Ember.SimpleAuth.setup(container, application,{
      authorizerFactory: 'authorizer:devise'
    });
    Ember.SimpleAuth.Authenticators.Devise.reopen({
      serverTokenEndpoint: 'api/v1/users/sign_in',
      invalidate: function(){
        $.ajax({
          url: '/api/v1/users/sign_out',
          type: 'DELETE'
        })
        return true;
      }
    });
  }
}
