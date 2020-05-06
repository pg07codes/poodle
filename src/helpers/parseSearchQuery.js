
export default function parseSearchQuery (query){
    let url=`https://google.com/search?q=${query}`;
    window.open(url,'_blank');
}