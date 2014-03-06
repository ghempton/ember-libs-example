var Input = Ember.Component.extend({
  classNameBindings: [':input-container', 'error:error'],
  layoutName: 'inputs/input',
  label: Ember.computed(function() {
    var name = this.get('name');
    return name.charAt(0).toUpperCase() + name.slice(1) + ":";
  }).property('name')
});

var Text = Input.extend({
  layoutName: 'inputs/text',
});

function inputForHelper(path, options) {
  options.hash.name = path;
  options.hash.valueBinding = path;
  options.hash.errorBinding = "errors." + path;

  var typeKey = options.hash.type || 'input',
      container = options.data.view.container,
      View = container.lookupFactory('input:' + typeKey);

  return Ember.Handlebars.helpers.view.call(this, View, options);
}

Ember.Application.initializer({
  name: 'inputs',
  initialize: function(container, application) {
    container.register('helper:input-for', inputForHelper);
    container.register('input:input', Input);
    container.register('input:text', Text);
  }
});