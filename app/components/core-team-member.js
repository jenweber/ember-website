import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
    teamsArr: computed('teams', function() {
        return this.teams.split(',')
    })
});
