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
      "language": {
        "emptyTable": "You don't have any wine... Click 'New Entry' to get started."
      },
      columnDefs: [
        { targets: 'no-sort', orderable: false }
      ]
    });
  }
});
