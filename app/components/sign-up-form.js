import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  credentials: {},

  actions: {
    submit () {
      this.sendAction('submit', this.get('credentials'));
    },

    init() {
      this._super(...arguments);
      this.set('credentials', {});
    },

    reset () {
      this.set('credentials', {});
    },
  },
});
