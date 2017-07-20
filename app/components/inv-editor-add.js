import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service("-routing"),
  store: Ember.inject.service(),
  entry: {
    size: 'Standard',
    winery: '',
    name: '',
    quantity: 1
  },
  actions: {
    createEntry: function () {
      this.get('store').createRecord('inventory', this.get('entry')).save().then(
        () => {
          this.get('router').transitionTo('inventories')
        }
      ).catch(() => {
        this.get('flashMessages')
        .danger('There was a problem adding your entry. Please try again.');
      })
    },
    updateValue: function(value) {
      this.set('entry.size', value);
    }
  }
});
