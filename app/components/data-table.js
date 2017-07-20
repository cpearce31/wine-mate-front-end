import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  actions: {
    deleteEntry: function (entry) {
      return this.sendAction('deleteEntry', entry);
    }
  },
  didInsertElement(){
    this.$('#datatable').DataTable({
      select: 'single',
      stateSave: true,
      columnDefs: [
        { targets: 'no-sort', orderable: false }
      ]
    });
  }
});
