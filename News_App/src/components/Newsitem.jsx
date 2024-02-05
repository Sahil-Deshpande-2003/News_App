import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Newsitem extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>

<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.description}</p>
    <a href="#" className="btn btn-primary">Read More</a>
  </div>
</div>
        
      </div>
    )
  }
}

export default Newsitem
