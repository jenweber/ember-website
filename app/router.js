import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('learn');
  this.route('styleguide');
  this.route('releases', function() {
    this.route('release');
    this.route('beta');
    this.route('canary');
    this.route('about');
    this.route('lts');
  });
  this.route('team');

  this.route('about', function() {
    this.route('legal');
  });
  this.route('mascots', function() {
    this.route('faq');
    this.route('commission');
  });
  this.route('logos');
  this.route('security');

  this.route('masctos', function() {});
  this.route('contribute');
  this.route('community');
  this.route('ember-users');
  this.route('sponsors');
  this.route('contributing');
  this.route('guidelines');
});

export default Router;
