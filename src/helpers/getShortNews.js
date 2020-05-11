

const lessThanTwelveHourAgo = (date) => {
  const H = 12 * 1000 * 60 * 60;
  const twelveHourAgo = Date.now() - H;
  return date > twelveHourAgo;
}

export default async function () {


  if (localStorage.getItem('hn') !== null) {
    // hn has been fetched

    let hn = JSON.parse(localStorage.getItem('hn'));

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

  fetchedNews = fetchedNews.reduce(function (acc, i) {
    if (i.url !== undefined) {
      let temp = {};
      let url = new URL(`${i.url}`);
      temp.id = i.id;
      temp.by = i.by;
      temp.url = i.url;
      temp.title = i.title;
      temp.website = url.host;
      acc.push(temp);
      return acc;
    }
    return acc;
  }, []);

  let fetchedNewsObject = { fetchedAt: Date.now(), news: fetchedNews };

  localStorage.setItem('hn', JSON.stringify(fetchedNewsObject));

  return fetchedNewsObject.news;

};