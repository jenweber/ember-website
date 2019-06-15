import Component from '@ember/component';

export default Component.extend({
    docs: false,
    releases: false,
    community: false,
    about: false,

    actions: {
        show(item) {
            let current = this.get(item)
            this.resetToggles()
            this.set(item, !current)
        }
    },

    resetToggles() {
        this.set('docs', false)
        this.set('releases', false)
        this.set('community', false)
        this.set('about', false)
    }
});
