import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement(){
    this.$('#example').DataTable({
      select: 'single',
      columnDefs: [
        { targets: 'no-sort', orderable: false }
      ]
    });
  }
});
