import {
    insertForQuerySuggestion as iqs,
    insertForWebsiteSuggestion as iws
} from './suggestions'

import {isUrlValid} from './urlUtil'

export default function parseSearchQuery(filter, query) {

    if(isUrlValid(query)===-1){
        iqs(query);
    }

    if (isUrlValid(query) === 1) {
        iws(query,true);
        window.location = query;

    } else if (isUrlValid(query) === 0) {
        console.log('calling iws--')
        iws(query,false);
        window.location = 'http://' + query;

    } else if (filter === "google") {
        let url = `https://www.google.com/search?q=${query}`;
        window.location = url;

    } else if (filter === "youtube") {
        let url = `https://www.youtube.com/results?search_query=${query}`;
        window.location = url;

    } else if (filter === "duckduckgo") {
        let url = `https://duckduckgo.com/?q=${query}`;
        window.location = url;

    } else if (filter === "soundcloud") {
        let url = `https://soundcloud.com/search?q=${query}`;
        window.location = url;

    } else if (filter === "vimeo") {
        let url = `https://vimeo.com/search?q=${query}`;
        window.location = url;
    }
}