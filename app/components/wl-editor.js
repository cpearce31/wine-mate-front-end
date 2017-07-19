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
    createEntry: function () {
      this.get('store').createRecord('wish_list', this.get('entry')).save().then(
        () => {
          this.get('router').transitionTo('wish_lists')
        }
      ).catch(() => {
        this.get('flashMessages')
        .danger('There was a problem adding your entry. Please try again.');
      })
    },
    updateValue: function(value) {
      this.set('entry.size', value);
    },
    updateEntry: function () {
      console.log('updating entry')
    }
  }
});
