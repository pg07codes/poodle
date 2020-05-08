
// fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
// .then((r)=>r.json())
// .then(ids=>{

// })


// dummy created for testing and development so as not to burden the hn API.

let data = [
  {
    "by": "hardmaru",
    "descendants": 216,
    "id": 23109997,
    "score": 552,
    "time": 1588897675,
    "title": "We Chat, They Watch",
    "type": "story",
    "url": "https://citizenlab.ca/2020/05/we-chat-they-watch/"
  },
  {
    "by": "thanksforfish",
    "descendants": 126,
    "id": 23107564,
    "score": 448,
    "time": 1588881772,
    "title": "Cross-signing and end-to-end encryption by default",
    "type": "story",
    "url": "https://matrix.org/blog/2020/05/06/cross-signing-and-end-to-end-encryption-by-default-is-here"
  },
  {
    "by": "ingve",
    "descendants": 144,
    "id": 23107945,
    "score": 284,
    "time": 1588883531,
    "title": "Old box, dumb code, few thousand connections, no big deal",
    "type": "story",
    "url": "https://rachelbythebay.com/w/2020/05/07/serv/"
  },
  {
    "by": "todsacerdoti",
    "descendants": 411,
    "id": 23107123,
    "score": 313,
    "time": 1588879523,
    "title": "Making Emacs Popular Again",
    "type": "story",
    "url": "https://lwn.net/SubscriberLink/819452/1480c3a59d3d9093/"
  },
  {
    "by": "braythwayt",
    "descendants": 39,
    "id": 23108626,
    "score": 118,
    "time": 1588887161,
    "title": "Zork source code, 1977",
    "type": "story",
    "url": "https://github.com/MITDDC/zork"
  },
  {
    "by": "orangepanda",
    "descendants": 69,
    "id": 23107553,
    "score": 201,
    "time": 1588881744,
    "title": "NHS open-sources contract tracing iOS and Android apps",
    "type": "story",
    "url": "https://github.com/NHSX"
  },
  {
    "by": "jbegley",
    "descendants": 7,
    "id": 23110401,
    "score": 24,
    "time": 1588900966,
    "title": "A passwordless server run by NSO Group sparks contact-tracing privacy concerns",
    "type": "story",
    "url": "https://techcrunch.com/2020/05/07/nso-group-fleming-contact-tracing/"
  },
  {
    "by": "vikram7",
    "descendants": 624,
    "id": 23102430,
    "score": 1610,
    "time": 1588856320,
    "title": "Zoom Acquires Keybase",
    "type": "story",
    "url": "https://keybase.io/blog/keybase-joins-zoom"
  },
  {
    "by": "leoh",
    "descendants": 238,
    "id": 23104875,
    "score": 302,
    "time": 1588869184,
    "title": "The Cost of Free Doughnuts: 70 Years of Regret",
    "type": "story",
    "url": "https://www.npr.org/sections/money/2012/07/13/156737801/the-cost-of-free-doughnuts-70-years-of-regret"
  },
  {
    "by": "signa11",
    "descendants": 128,
    "id": 23103582,
    "score": 297,
    "time": 1588862852,
    "title": "Driving engineers to an arbitrary date is a value destroying mistake",
    "type": "story",
    "url": "https://iism.org/article/driving-engineers-to-an-arbitrary-date-is-a-value-destroying-mistake-49"
  }
];

export default async () => {
  return new Promise(function (resolve, reject) {
    let wait = (data) => () => { resolve(data) }
    setTimeout(wait(data), 3000);

  })
}