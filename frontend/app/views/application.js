export default Ember.View.extend({
  didInsertElement: function() {
    $(document).foundation();
  },
  willInsertElement: function() {
    $('.alert-box').delay(2000).fadeOut();
  }
});
