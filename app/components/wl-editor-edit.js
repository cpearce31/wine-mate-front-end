import Ember from 'ember';

export default Ember.Component.extend({
  positionalParams: ['id', 'bottleSize'],
  router: Ember.inject.service("-routing"),
  store: Ember.inject.service(),
  winery: '',
  name: '',
  size: Ember.computed('bottleSize', function () {
    return this.get('bottleSize');
  }),
  location: '',
  vintage: null,
  grape: '',
  entry: Ember.computed('name', 'winery', 'size', 'location', 'vintage', 'grape', function () {
    return {
      id: this.get('id'),
      name: this.get('name'),
      winery: this.get('winery'),
      size: this.get('size'),
      location: this.get('location'),
      vintage: this.get('vintage'),
      grape: this.get('grape')
    }
  }),
  actions: {
    updateValue: function(value) {
      this.set('size', value);
    },
    updateEntry: function () {
      this.get('store').findRecord('wish_list', this.get('id')).then(
        (record) => {
          record.set('name', this.get('entry').name);
          record.set('winery', this.get('entry').winery);
          record.set('size', this.get('entry').size);
          record.set('location', this.get('entry').location);
          record.set('vintage', this.get('entry').vintage);
          record.set('grape', this.get('entry').grape);
          record.save();
        }
      ).then(() => {
        this.get('router').transitionTo('wish_lists');
      }).catch((error) => {
        this.get('flashMessages')
        .danger('There was a problem editing your entry. Please try again.');
      })
    }
  }
});
