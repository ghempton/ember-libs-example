var InputFor = Ember.Component.extend({
  classNameBindings: [':input-container', 'error:error'],
  layoutName: 'input-for'
});

Ember.Application.initializer({
  name: 'inputs',
  initialize: function(container, application) {
    container.register('component:input-for', InputFor);
  }
});