import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  winery: DS.attr('string'),
  size: DS.attr('string'),
  location: DS.attr('string'),
  vintage: DS.attr('number'),
  grape: DS.attr('string'),
  quantity: DS.attr('number')
});
