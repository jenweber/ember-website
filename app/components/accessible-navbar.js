import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { observer } from '@ember/object'

export default Component.extend({
    router: service(),
    docs: false,
    releases: false,
    community: false,
    about: false,

    actions: {
        show(item, event) {
          if(event.type == 'click' || event.key == 'Enter') {
            let current = this.get(item)
            this.resetToggles()
            this.set(item, !current)
          }
        }
    },

    resetToggles() {
        this.set('docs', false)
        this.set('releases', false)
        this.set('community', false)
        this.set('about', false)
    },

    onTransition: observer('router.currentRouteName', function() {
        // TODO refactor to not use an observer
        this.resetToggles()
    }),

    init() {
        // initialize the router service
        this.get('router.currentRouteName')
        return this._super(...arguments)
    }
});
