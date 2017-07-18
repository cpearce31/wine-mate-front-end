import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteEntry: function (entry) {
      this.get('store').findRecord('wish_list', entry.id, { reload: true }).then(
        function (entry) {
          entry.destroyRecord();
          return entry
      }).then(
        function (entry) {
          $('#datatable').DataTable().row('#row-' + entry.id).remove().draw();
          console.log('deleted!');
      });
    }
  },
  model () {
    return this.get('store').findAll('wish_list');
  },
});
