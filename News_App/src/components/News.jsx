import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
export class News extends Component {
   articles = [
        {
          "source": { "id": "news-com-au", "name": "News.com.au" },
          "author": "Andrew McMurtry",
          "title": "Star reveals truth behind Kohli mystery",
          "description": "South African cricket legend AB de Villiers has revealed why Indian superstar Virat Kohli has missed the opening two matches of the Test series against England.",
          "url": "https://www.news.com.au/sport/cricket/cant-judge-virat-for-that-ab-de-villiers-reveals-truth-behind-kohli-mystery/news-story/3a7d8f5b6fa605da6306cd87eeab5ae6",
          "urlToImage": "https://content.api.news/v3/images/bin/1adb17f2c8326a52d908e8f12a79b30c",
          "publishedAt": "2024-02-04T10:46:00Z",
          "content": "South African cricket legend AB de Villiers has revealed why Indian superstar Virat Kohli has missed the opening two matches of the Test series against England.\r\nOn the eve of the series, Kohli revea… [+2840 chars]"
        },
        {
          "source": { "id": "news-com-au", "name": "News.com.au" },
          "author": "Andrew McMurtry",
          "title": "‘Ridiculous’: Aussies slam cricket farce",
          "description": "Aussie cricket fans have hit out at ticket prices at the SCG after yet another sparsely populated crowd for the second ODI against the West Indies.",
          "url": "https://www.news.com.au/sport/cricket/being-fleeced-aussie-fans-slam-ridiculous-odi-cricket-prices/news-story/ba0e11bb207e8a48bee8815436600db1",
          "urlToImage": "https://content.api.news/v3/images/bin/c7431acb29f3badccc76cef508193e2d",
          "publishedAt": "2024-02-04T08:01:00Z",
          "content": "Aussie cricket fans have hit out at ticket prices at the SCG after yet another sparsely populated crowd for the second ODI against the West Indies.\r\nIn a sign of just how far ODI cricket has fallen d… [+4207 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]

      constructor(){

        super();

        this.state = {

          // not this.state.articles here

          articles:this.articles,
          loading:false,
        }

        
      }

        
  componentDidMount = async() => {
    
    // we have hardcoded articles here, to fetch data dynamically from url use cdm

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a88e1692409d4c84ab688af0c5eada56"

    let data = await fetch(url);

    let parsedData = await data.json();

    this.setState({
      articles:parsedData.articles,
      
    })

  }

  render() {
    return (
      <div className='container my-3'>
{/* 
        <div className="row my-3">
            <div className="col-md-4"><Newsitem title="my title" description="my desc" /></div>
            <div className="col-md-4"><Newsitem title="my title" description="my desc"/></div>
            <div className="col-md-4"><Newsitem title="my title" description="my desc"/></div>
            
        </div> */}

        {/*
         "source": { "id": "news-com-au", "name": "News.com.au" },
      "author": "Andrew McMurtry",
      "title": "Star reveals truth behind Kohli mystery",
      "description": "South African cricket legend AB de Villiers has revealed why Indian superstar Virat Kohli has missed the opening two matches of the Test series against England.",
      "url": "https://www.news.com.au/sport/cricket/cant-judge-virat-for-that-ab-de-villiers-reveals-truth-behind-kohli-mystery/news-story/3a7d8f5b6fa605da6306cd87eeab5ae6",
      "urlToImage": "https://content.api.news/v3/images/bin/1adb17f2c8326a52d908e8f12a79b30c",
      "publishedAt": "2024-02-04T10:46:00Z",
      "content": "South African cricket legend AB de Villiers has revealed why Indian superstar Virat Kohli has missed the opening two matches of the Test series against England.\r\nOn the eve of the series, Kohli revea… [+2840 chars]" 
         */}

        <div className="row">

        {this.state.articles.map((element)=>{
         
         return <div className="col-md-4" key={element.url}><Newsitem title={element.title} description={element.description} author={element.author} url={element.url} imageUrl = {element.urlToImage} date = {element.publishedAt} /></div>
        })}

</div>


        
  
      </div>
    )
  }
}

export default News
