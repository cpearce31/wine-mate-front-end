import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
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
