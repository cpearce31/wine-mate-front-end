import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('wish_lists');
  this.route('inventories');
  this.route('wledit', { path: '/wish_lists/edit/:entry-id' });
  this.route('wladd', { path: '/wish_lists/add' });
  this.route('invadd', { path: '/inventories/add' });
  this.route('invedit', { path: '/inventories/edit/:entry-id' });
});

export default Router;
