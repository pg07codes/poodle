
export default function parseSearchQuery(filter, query) {

    if (filter === "google") {
        let url = `https://www.google.com/search?q=${query}`;
        window.open(url, '_blank');

    } else if (filter === "youtube") {
        let url = `https://www.youtube.com/results?search_query=${query}`;
        window.open(url, '_blank');
    }
}