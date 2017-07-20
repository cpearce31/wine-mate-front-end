import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service("-routing"),
  store: Ember.inject.service(),
  winery: '',
  name: '',
  size: 'Standard',
  location: '',
  vintage: null,
  grape: '',
  quantity: 1,
  entry: Ember.computed('name', 'winery', 'size', 'location', 'vintage', 'grape', 'quantity', function () {
    return {
      name: this.get('name'),
      winery: this.get('winery'),
      size: this.get('size'),
      location: this.get('location'),
      vintage: this.get('vintage'),
      grape: this.get('grape'),
      quantity: this.get('quantity')
    }
  }),
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
