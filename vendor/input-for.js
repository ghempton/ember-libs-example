var InputFor = Ember.Component.extend({
  classNameBindings: [':input-container', 'error:error'],
  layoutName: 'input-for',
  label: Ember.computed(function() {
    var name = this.get('name');
    return name.charAt(0).toUpperCase() + name.slice(1) + ":";
  }).property('name')
});

function inputForHelper(path, options) {
  options.hash.name = path;
  options.hash.valueBinding = path;
  options.hash.errorBinding = "errors." + path;

  return Ember.Handlebars.helpers.view.call(this, InputFor, options);
}

Ember.Application.initializer({
  name: 'inputs',
  initialize: function(container, application) {
    container.register('helper:input-for', inputForHelper);
  }
});