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
});

export default Router;
