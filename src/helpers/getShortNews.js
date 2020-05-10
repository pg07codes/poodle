

const lessThanTwelveHourAgo = (date) => {
  const H = 12 * 1000 * 60 * 60;
  const twelveHourAgo = Date.now() - H;
  return date > twelveHourAgo;
}

export default async function () {

  
  if (localStorage.getItem('hn') !== null) {
    // hn has been fetched

    let hn = JSON.parse(localStorage.getItem('hn'));

    console.log('already fetched at', hn.fetchedAt)
    if (lessThanTwelveHourAgo(hn.fetchedAt)) { // self explanatory
      
      return (hn.news);
    }
    

  }

  // either hn never fetched or fetchedTwelve hours ago
  let fetchedIds = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
  fetchedIds = await fetchedIds.json()
  fetchedIds = fetchedIds.slice(0, 31)
  
  // parallel fetching of all the news here
  let fetchingNews = fetchedIds.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`));
  let fetchedNews = await Promise.all([...fetchingNews]);
  fetchedNews = fetchedNews.map(resp => resp.json());
  fetchedNews = await Promise.all([...fetchedNews]);
  

  let fetchedNewsObject = { fetchedAt: Date.now(), news: fetchedNews };
  localStorage.setItem('hn', JSON.stringify(fetchedNewsObject));

  return fetchedNewsObject.news;

};