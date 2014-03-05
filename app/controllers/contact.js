export default Ember.Controller.extend({

  submitted: false,

  validate: function() {
    var errors = {};

    ['name', 'email', 'subject', 'message'].forEach(function(name) {
      if(Ember.isEmpty(this.get(name))) {
        errors[name] = "cannot be empty";
      }
    }, this);

    this.set('errors', errors);
    return Ember.keys(errors).length === 0;
  },

  actions: {
    submit: function() {
      if(this.validate()) {
        this.transitionTo('thank-you');
      }
    }
  }

});