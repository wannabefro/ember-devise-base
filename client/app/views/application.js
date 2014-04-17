export default Ember.View.extend({
  didInsertElement: function(){
    $('.alert-box').delay(2000).fadeOut();
  }
});
