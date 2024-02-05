import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem'
export class News extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='container'>

        <h1>NewsMonkey - Top Headlines</h1>

        <div className="row">

        <div className="col-md-4">
        <Newsitem title="my title" description="my desc"/>
        </div>

        <div className="col-md-4">
        <Newsitem title="my title" description="my desc"/>
        </div>

        <div className="col-md-4">
        <Newsitem title="my title" description="my desc"/>
        </div>

        </div>

        
      </div>
    )
  }
}

export default News
