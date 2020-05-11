
export default function parseSearchQuery(filter, query) {

    if (filter === "google") {
        let url = `https://www.google.com/search?q=${query}`;
        window.open(url, '_blank');

    } else if (filter === "youtube") {
        let url = `https://www.youtube.com/results?search_query=${query}`;
        window.open(url, '_blank');
    } else if (filter === "duckduckgo") {
        let url = `https://duckduckgo.com/?q=${query}`;
        window.open(url, '_blank');

    } else if (filter === "soundcloud") {
        let url = `https://soundcloud.com/search?q=${query}`;
        window.open(url, '_blank');

    } else if (filter === "vimeo") {
        let url = `https://vimeo.com/search?q=${query}`;
        window.open(url, '_blank');
    }
}