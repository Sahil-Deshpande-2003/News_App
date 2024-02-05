import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Newsitem extends Component {
  static propTypes = {

  }



  
        

  render() {

    return (
      <div>
        <div className="card">
  <img src={this.props.imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.description}</p>
    <a href={this.props.url} className="btn btn-primary" target= "_blank">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
