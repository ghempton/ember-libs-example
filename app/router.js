var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('contact');
  this.route('thank-you');
});

export default Router;
