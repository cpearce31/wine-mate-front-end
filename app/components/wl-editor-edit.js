import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service("-routing"),
  store: Ember.inject.service(),
  entry: {
    size: 'Standard',
    winery: '',
    name: ''
  },
  actions: {
    updateValue: function(value) {
      this.set('entry.size', value);
    },
    updateEntry: function () {
      console.log('updating entry')
    }
  }
});
