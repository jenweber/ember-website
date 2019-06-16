import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
        latest: '3.10',
				activeLTS: ['2.18', '3.4', '3.8'],
        beta: '',
        canary: ''
    }
  },
});
