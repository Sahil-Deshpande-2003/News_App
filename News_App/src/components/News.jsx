import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
export class News extends Component {
 
    // 1.harcode articles

    articles = [
        {
          "source": { "id": null, "name": "NDTV News" },
          "author": null,
          "title": "Delhi Woman In Burqa Robs Own Home Because \"Mother Loved Sister More\" - NDTV",
          "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
          "url": "https://www.ndtv.com",
          "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
          "publishedAt": "2024-02-04T12:06:33Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "Hindustan Times" },
          "author": "HT Sports Desk",
          "title": "Rohit Sharma sarcastically trolls Kuldeep Yadav after India escape DRS blunder - Hindustan Times",
          "description": "Rohit Sharma sarcastically applauded Kuldeep Yadav's DRS opinion after he got it awfully wrong. | Cricket",
          "url": "https://www.hindustantimes.com/cricket/rohit-sharma-sarcastically-trolls-kuldeep-yadav-after-india-narrowly-escape-drs-blunder-against-england-watch-video-101707043114218.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/04/1600x900/kuldeep-rohit_1707043246635_1707043256832.jpg",
          "publishedAt": "2024-02-04T10:45:15Z",
          "content": "Remember how Rohit Sharma is not convinced of Kuldeep Yadav's DRS calls? Yes, the Indian captain's trust issues with Kuldeep's reviews were once again captured on the field as India narrowly escaped … [+3132 chars]"
        }
      ]

          // 2. define constructor

          constructor(){
            super();
            console.log("News constructor called");
            this.state={
                articles:this.articles, // init articles with this.articles ?????
                loading:false,

            }
          }

  render() {
    return (

        /*
      <div className='container'>
         <h1>NewsMonkey - Top Headlines</h1>

         <div className="row">
        
        {this.state.articles.map((element)=>{

            

            return (
                <div className="col-md-4" key={element.url}><Newsitem/></div>
                ); 
                

          
        })}

</div>

      </div>
      
      */

      
    //    title="my title" description="my desc"
        <div className='container'>
      <h1>NewsMonkey - Top Headlines</h1>

      <div className="row">
      {this.state.articles.map((element, index) => {
        console.log(`Rendering element ${index + 1}`);
        return (
          <div className="col-md-4" key={element.url}>
            <Newsitem />
          </div>
        );
      })}
    </div>
  </div>
      
    
    )
  }
}

export default News





/*
<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
*/



