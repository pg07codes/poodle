
function validURL(str) {

    // returns -1 for invalid url, 0 for url Without Protocol, and 1 for url With Protocol 

    let urlWithProtocol = new RegExp('^(https?:\\/\\/)' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    let urlWithoutProtocol = new RegExp('^((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    if (urlWithProtocol.test(str)) {
        return 1;
    } else if (urlWithoutProtocol.test(str)) {
        return 0;
    } else {
        return -1;
    }

}


export default function parseSearchQuery(filter, query) {

    if (validURL(query) === 1) {
        window.location=query;
    } else if (validURL(query) == 0) {
        window.location='http://'+query;

    } else if (filter === "google") {
        let url = `https://www.google.com/search?q=${query}`;
        window.location=url;

    } else if (filter === "youtube") {
        let url = `https://www.youtube.com/results?search_query=${query}`;
        window.location=url;

    } else if (filter === "duckduckgo") {
        let url = `https://duckduckgo.com/?q=${query}`;
        window.location=url;

    } else if (filter === "soundcloud") {
        let url = `https://soundcloud.com/search?q=${query}`;
        window.location=url;

    } else if (filter === "vimeo") {
        let url = `https://vimeo.com/search?q=${query}`;
        window.location=url;
    }
}