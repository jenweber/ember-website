import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
    model() {
        return fetch("https://emberjs.com/data/projects/ember/beta.json", {"credentials":"omit","referrer":"https://emberjs.com/releases/beta/","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"})
        .then(res => res.json())
        .then(res => {
            return res.data.attributes.lastRelease
        })
    }
});
