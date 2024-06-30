const APIKEY="f98098d36e444ba59fe8ec1fda19ae74"

let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`

// fetch(url).then(res=>res.json()).then(data=>displayNews(data))
getData()

async function getData(){

  let res= await fetch(url)
  let data=await res.json()

  displayNews(data)
}


// const news={
//     "status": "ok",
//     "totalResults": 38,
//     "articles": [
//       {
//         "source": {
//           "id": null,
//           "name": "Moneycontrol"
//         },
//         "author": "Rajni Pandey",
//         "title": "Astronaut Sunita Williams stranded on ISS as NASA's Boeing Starliner return delayed - Moneycontrol",
//         "description": "Astronaut Sunita Williams finds herself unexpectedly stranded aboard the International Space Station (ISS) as technical issues force NASA to delay the return of the Boeing Starliner. The spacecraft, crucial for her journey back to Earth, remains docked as mis…",
//         "url": "https://www.moneycontrol.com/science/astronaut-sunita-williams-stranded-on-iss-as-nasas-boeing-starliner-return-delayed-article-12756377.html",
//         "urlToImage": "https://images.moneycontrol.com/static-mcnews/2024/06/20240607043310_Sunita-willians.png",
//         "publishedAt": "2024-06-26T04:19:35Z",
//         "content": "NASA has once again delayed the return of the Boeing Starliner spacecraft, which is currently orbiting the Earth with astronauts Sunita Williams and Butch Wilmore aboard. Initially scheduled to retur… [+1973 chars]"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "YouTube"
//         },
//         "author": null,
//         "title": "China is 'looking really good right now' in terms of robotic lunar exploration, professor says - CNBC Television",
//         "description": "Greg Autry, professor and director of space leadership at the Thunderbird School of Global Management, discusses the Chinese lunar probe's return to Earth an...",
//         "url": "https://www.youtube.com/watch?v=Aa5d7m_Rdqk",
//         "urlToImage": "https://i.ytimg.com/vi/Aa5d7m_Rdqk/maxresdefault.jpg",
//         "publishedAt": "2024-06-26T04:07:02Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": "the-times-of-india",
//           "name": "The Times of India"
//         },
//         "author": "TOI Sports Desk",
//         "title": "'The guy is playing for his country, trying to...': Ravichandran Ashwin defends Gulbadin Naib's actions in T20 World Cup controversy | Cricket News - The Times of India",
//         "description": "Cricket News: Ravichandran Ashwin has commented on Afghanistan all-rounder Gulbadin Naib's alleged 'faking' of an injury during the T20 World Cup Super Eight match",
//         "url": "https://timesofindia.indiatimes.com/sports/cricket/icc-mens-t20-world-cup/ravichandran-ashwin-defends-gulbadin-naibs-actions-in-t20-world-cup-controversy/articleshow/111273525.cms",
//         "urlToImage": "https://static.toiimg.com/thumb/msid-111273479,width-1070,height-580,imgsize-51466,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//         "publishedAt": "2024-06-26T03:43:00Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": "the-times-of-india",
//           "name": "The Times of India"
//         },
//         "author": "TNN",
//         "title": "Understand my pain, says Porsche car crash victim's mother as Bombay HC orders release of teen accused - The Times of India",
//         "description": "The Bombay High Court, under Justice Manjusha Deshpande, released a minor involved in a fatal car crash, placing him under the care of Mamta Koshta.",
//         "url": "https://timesofindia.indiatimes.com/city/bhopal/understand-my-pain-says-porsche-car-crash-victims-mother-as-bombay-hc-orders-release-of-teen-accused/articleshow/111271784.cms",
//         "urlToImage": "https://static.toiimg.com/thumb/msid-111271831,width-1070,height-580,imgsize-103076,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//         "publishedAt": "2024-06-26T03:34:00Z",
//         "content": "10 beautiful fishes to keep in home aquariums for beginners"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Livemint"
//         },
//         "author": "Asit Manohar",
//         "title": "Stock market today: Trade setup for Nifty 50 to Budget 2024, five stocks to buy or sell on Wednesday — June 26 | Stock Market News - Mint",
//         "description": "Stocks to buy today: Experts have recommended buying these five buy-or-sell stocks — Axis Bank, GRSE, IndiGo, Havells India, and DLF",
//         "url": "https://www.livemint.com/market/stock-market-news/stock-market-today-trade-setup-for-nifty-50-to-budget-2024-five-stocks-to-buy-or-sell-on-wednesday-june-26-11719371595593.html",
//         "urlToImage": "https://www.livemint.com/lm-img/img/2024/06/26/1600x900/Stock_market_today_Stocks_to_Buy_or_Sell_Nifty_50_1719371893761_1719371894193.jpg",
//         "publishedAt": "2024-06-26T03:26:51Z",
//         "content": "Stock market today: Following a rally in the banking stocks, the Indian stock market ended higher on Tuesday. Before ending at the 23,721 mark, the Nifty 50 index touched a new lifetime high for the … [+5512 chars]"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Hindustan Times"
//         },
//         "author": "Rhythma Kaul",
//         "title": "Indians failing to meet recommended standard of physical activity, finds study - Hindustan Times",
//         "description": "Half of Indian adults didn't meet physical activity recommendations in 2022, leading to increased health risks.  | Latest News India",
//         "url": "https://www.hindustantimes.com/india-news/indians-failing-to-meet-recommended-standard-of-physical-activity-finds-study-101719371327851.html",
//         "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/26/1600x900/People-exercising-at-Marine-Drive-in-Mumbai---Kuna_1719371279928.jpg",
//         "publishedAt": "2024-06-26T03:08:47Z",
//         "content": "One in two Indian adults did not meet recommended level of physical activity in 2022 according to new data published in medical journal The Lancet Global Health on Tuesday, with the consequence being… [+4738 chars]"
//       },
//       {
//         "source": {
//           "id": "the-times-of-india",
//           "name": "The Times of India"
//         },
//         "author": "TIMESOFINDIA.COM",
//         "title": "‘Dangers Of…’ Putin’s New Defence Head Issues A Sinister Threat To Pentagon Chief On A Phone Call - The Times of India",
//         "description": "U.S. and Russian defense chiefs have spoken by telephone for the first time in over a year. The call, initiated by Pentagon Chief Lloyd Austin, marks a crucial moment as tensions remain high. Russia's new Defense Minister, Andrey Belousov, issued a c",
//         "url": "https://timesofindia.indiatimes.com/videos/international/dangers-of-putins-new-defence-head-issues-a-sinister-threat-to-pentagon-chief-on-a-phone-call/videoshow/111272637.cms",
//         "urlToImage": "https://timesofindia.indiatimes.com/photo/msid-111272637,imgsize-100532.cms",
//         "publishedAt": "2024-06-26T03:00:24Z",
//         "content": "Jun 26, 2024, 08:30AM ISTSource: TOI.inU.S. and Russian defense chiefs have spoken by telephone for the first time in over a year. The call, initiated by Pentagon Chief Lloyd Austin, marks a crucial … [+152 chars]"
//       },
//       {
//         "source": {
//           "id": "the-hindu",
//           "name": "The Hindu"
//         },
//         "author": "The Hindu",
//         "title": "Kallakurichi hooch tragedy: Death toll rises to 61 - The Hindu",
//         "description": null,
//         "url": "https://www.thehindu.com/news/national/tamil-nadu/kallakurichi-hooch-tragedy-death-toll-rises-to-61/article68334696.ece",
//         "urlToImage": null,
//         "publishedAt": "2024-06-26T02:55:00Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": "the-hindu",
//           "name": "The Hindu"
//         },
//         "author": "The Hindu",
//         "title": "Samsung’s Unpacked event set for July 10 in Paris - The Hindu",
//         "description": null,
//         "url": "https://www.thehindu.com/sci-tech/technology/samsung-announces-galaxy-unpacked-event-paris-focus-ai-galaxy-z-series/article68334701.ece",
//         "urlToImage": null,
//         "publishedAt": "2024-06-26T02:48:00Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "NDTV News"
//         },
//         "author": "NDTV Sports Desk",
//         "title": "Ravindra Jadeja's Wife Rivaba Shares Fiery Post As India 'Settle Score' With Australia - NDTV Sports",
//         "description": "Ravindra Jadeja's wife Rivaba shared a brilliant post after India defeated Australia in a T20 World Cup 2024, Super 8 match in St. Lucia.",
//         "url": "https://sports.ndtv.com/t20-world-cup-2024/ravindra-jadejas-wife-rivaba-shares-fiery-post-as-india-settle-score-with-australia-5963674",
//         "urlToImage": "https://c.ndtvimg.com/2024-06/m54obbs_rivaba-and-jadeja_625x300_25_June_24.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
//         "publishedAt": "2024-06-26T02:42:45Z",
//         "content": "The Indian cricket team 'settled score' of some sort as they defeated Australia in the T20 World Cup 2024 Super 8 clash. The victory for Rohit Sharma's men was deemed by many a revenge for the defeat… [+2113 chars]"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Business Standard"
//         },
//         "author": "Shivam Tyagi",
//         "title": "Stocks to watch on June 26: CE Info Systems, Yes Bank, Coforge, Sanghi Ind - Business Standard",
//         "description": "Stocks to watch on June 26: According to reports, Rakesh Kumar Verma, promoter of CE Info Systems, plans to sell 0.9 per cent of the company's equity through a block deal valued at Rs 114.6 crore",
//         "url": "https://www.business-standard.com/markets/news/stocks-to-watch-on-june-26-ce-info-systems-yes-bank-coforge-sanghi-ind-124062600092_1.html",
//         "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-03/07/thumb/featurecrop/400X400/1709830413-6065.jpg",
//         "publishedAt": "2024-06-26T01:44:53Z",
//         "content": "Stocks to watch on June 26: According to reports, Rakesh Kumar Verma, promoter of CE Info Systems, plans to sell 0.9 per cent of the company's equity through a block deal valued at Rs 114.6 crore\r\nIl… [+2446 chars]"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Hindustan Times"
//         },
//         "author": "Ananya Das",
//         "title": "Prince Narula expecting first child with Yuvika Chaudhary, pens long note: 'We're very happy, nervous at the same time' - Hindustan Times",
//         "description": "Along with a note, Prince Narula posted a picture of a red toy car placed next to his own car. The next photo showed him standing in front of them.",
//         "url": "https://www.hindustantimes.com/entertainment/tv/prince-narula-expecting-first-child-with-yuvika-chaudhary-pens-long-note-101719364057188.html",
//         "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/26/1600x900/Prince_Narula_Yuvika_Chaudhary_1719365299702_1719365309600.jpg",
//         "publishedAt": "2024-06-26T01:30:54Z",
//         "content": "Television personality Prince Narula and his wife Yuvika Chaudhary have announced that they are expecting their first child together. Taking to Instagram on Tuesday, the duo shared a joint post. They… [+2068 chars]"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Hindustan Times"
//         },
//         "author": "HT News Desk",
//         "title": "Latest News, Live Updates Today June 26, 2024: Kenya protests: Indian high commission issues advisory amid violence in Nairobi, other cities - Hindustan Times",
//         "description": "Welcome to the live updates platform for Hindustan Times. Follow all the major news updates, headlines and breaking news stories from India and around the world right here. Track the real-time developments of major events for June 26, 2024.",
//         "url": "https://www.hindustantimes.com/india-news/latest-india-news-today-live-updates-june-26-2024-101719343036434.html",
//         "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/06/26/550x309/yes-bank-corporate-office_43b7e908-a9c3-11ea-ae1e-6e34c87b3b2e_1719375473877.JPG",
//         "publishedAt": "2024-06-26T01:18:34Z",
//         "content": "Get the latest news updates and breaking news stories from India and around the world right here. Disclaimer: This is an AI-generated live blog and has not been edited by Hindustan Times staff....Rea… [+7149 chars]"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "Zoom"
//         },
//         "author": "Faham Uddin",
//         "title": "Rashid Khan's Stunning Reply To Sachin Tendulkar Goes Viral As Afghanistan Reach Maiden T20 World Cup Semis - Times Now",
//         "description": "Afghanistan cricket team received a congratulatory message from legendary Sachin Tendulkar who praised the team for their stunning performance in the T20 World Cup which saw them beat the likes of Australia and New Zealand and make their first-ever T20 World …",
//         "url": "https://www.timesnownews.com/sports/cricket/rashid-khans-stunning-reply-to-sachin-tendulkar-goes-viral-as-afghanistan-reach-maiden-t20-world-cup-semis-article-111271112",
//         "urlToImage": "https://static.tnn.in/thumb/msid-111271140,thumbsize-62346,width-1280,height-720,resizemode-75/111271140.jpg",
//         "publishedAt": "2024-06-26T01:18:05Z",
//         "content": "'Aisha', UAE's First Virtual AI Employee, To Assist Clients At Courthouses"
//       },
//       {
//         "source": {
//           "id": "the-hindu",
//           "name": "The Hindu"
//         },
//         "author": "The Hindu",
//         "title": "The Hindu Morning Digest: June 26, 2024 - The Hindu",
//         "description": null,
//         "url": "https://www.thehindu.com/news/morning-digest-june-26-2024/article68333867.ece",
//         "urlToImage": null,
//         "publishedAt": "2024-06-26T01:06:00Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "NDTV News"
//         },
//         "author": null,
//         "title": "WikiLeaks Founder Julian Assange Pleads Guilty In US Court - NDTV",
//         "description": "A plea bargain hearing for Julian Assange began at a US court in Saipan on Wednesday, AFP reporters said, in a final legal step expected to leave the WikiLeaks founder a free man.",
//         "url": "https://www.ndtv.com/world-news/wikileaks-julian-assange-plea-bargain-hearing-begins-at-us-court-5970631",
//         "urlToImage": "https://c.ndtvimg.com/2024-06/7snmhr7g_julian-assange_625x300_26_June_24.jpeg?ver-20240615.100",
//         "publishedAt": "2024-06-25T23:44:57Z",
//         "content": "WikiLeaks' Julian Assange landed in Saipan for US plea-deal court hearing on Wednesday.\r\nSaipan, US: WikiLeaks founder Julian Assange pleaded guilty in a US court in Saipan on Wednesday, AFP reporter… [+4188 chars]"
//       },
//       {
//         "source": {
//           "id": "the-times-of-india",
//           "name": "The Times of India"
//         },
//         "author": "TNN",
//         "title": "TB research: IISc team develops 3D system that replicates lungs - The Times of India",
//         "description": "In a breakthrough for TB research, IISc scientists create a 3D hydrogel culture system mimicking human lungs. This innovative model enhances study of TB bacteria infection and drug efficacy for better treatments. Learn more!",
//         "url": "https://timesofindia.indiatimes.com/city/bengaluru/iisc-team-develops-3d-system-that-replicates-lungs/articleshow/111270447.cms",
//         "urlToImage": "https://static.toiimg.com/thumb/msid-111270445,width-1070,height-580,imgsize-76482,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//         "publishedAt": "2024-06-25T23:41:00Z",
//         "content": "10 beautiful fishes to keep in home aquariums for beginners"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "The Indian Express"
//         },
//         "author": "The Indian Express",
//         "title": "Unambiguous commitment needed to bring down inflation to 4% target: RBI Governor Das - The Indian Express",
//         "description": null,
//         "url": "https://indianexpress.com/article/business/banking-and-finance/unambiguous-commitment-needed-to-bring-down-inflation-to-4-target-rbi-das-9415106/",
//         "urlToImage": null,
//         "publishedAt": "2024-06-25T22:50:30Z",
//         "content": null
//       },
//       {
//         "source": {
//           "id": "the-times-of-india",
//           "name": "The Times of India"
//         },
//         "author": "Akhilesh Singh",
//         "title": "PM Modi remained incognito for entire duration of Emergency - The Times of India",
//         "description": "India News: In 1977, I was appointed as the 'sambhag pracharak' of south and central Gujarat, and authored my memoir 'Sangharsh Ma Gujarat' in 1978, reflecting on",
//         "url": "https://timesofindia.indiatimes.com/india/pm-modi-remained-incognito-for-entire-duration-of-emergency/articleshow/111267732.cms",
//         "urlToImage": "https://static.toiimg.com/thumb/msid-111267734,width-1070,height-580,imgsize-567444,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//         "publishedAt": "2024-06-25T21:05:00Z",
//         "content": "10 beautiful fishes to keep in home aquariums for beginners"
//       },
//       {
//         "source": {
//           "id": null,
//           "name": "PINKVILLA"
//         },
//         "author": "Loveleen Kaur",
//         "title": "Kareena Kapoor Khan’s Crew was ‘absurd’ says Sharmila Tagore; calls camaraderie between Bebo, Tabu and Kriti Sanon ‘excellent’ - PINKVILLA",
//         "description": "Sharmila Tagore Said That Kareena Kapoor Khan, Tabu And Kriti Sanon's Crew Will Encourage Filmmakers To Come Up With Better Roles And Films For Female Actors.",
//         "url": "https://www.pinkvilla.com/entertainment/news/kareena-kapoor-khans-crew-was-absurd-says-sharmila-tagore-calls-camaraderie-between-bebo-tabu-and-kriti-sanon-excellent-1320898",
//         "urlToImage": "https://www.pinkvilla.com/images/2024-06/930308210_crew-min.jpg",
//         "publishedAt": "2024-06-25T20:55:25Z",
//         "content": "Kareena Kapoor Khan, Tabu, and Kriti Sanon recently shared the screen together in Rajesh A Krishnans Crew. The movie not only received great reviews, but it was also a massive box office success.\r\nSe… [+2197 chars]"
//       }
//     ]
//   }

 
  const categories=["business","entertainment","general","health","science","sports","technology"]

  

  function displayNews(news){

    let htmlData=``

    for (let n of news.articles){

        htmlData+=`

        
        <div class="col-6">

         <div class="col">
    <div class="card">
      <img src="${n.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${n.title}</h5>
        <p class="card-text"> ${n.description}.</p>
      </div>
    </div>
  </div>
  </div>
  
        `
    }

    document.querySelector("#root").innerHTML=htmlData
  }

  displayCategories(categories)

  function displayCategories(categories){

    let htmlData=``

    for (let c of categories){

        htmlData+=`
        <button class="btn btn-outline-primary" value="${c}" onclick="fetchNewsBycategory(event)">${c}</button>

        `
    }
    document.querySelector("#category").innerHTML=htmlData
  }

  function fetchNewsBycategory(event){

    let catgoryName=event.target.value

    fetch(`${url}&category=${catgoryName}`).then(resp=>resp.json()).then(data=>displayNews(data))

    
  }