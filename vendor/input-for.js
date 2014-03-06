var InputFor = Ember.Component.extend({
  classNameBindings: [':input-container', 'error:error'],
  layoutName: 'input-for'
});

window.Inputs = Ember.Namespace.create();
Inputs.InputForComponent = InputFor;