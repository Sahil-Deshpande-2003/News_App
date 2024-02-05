import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Newsitem extends Component {
  static propTypes = {

  }

  constructor(){

    super();

    console.log("Newsitem constructor called")
  }

  render() {
    return (
      <div>

<div className="card" style={{width: "18rem"}}>
  <img src="https://www.hindustantimes.com/ht-img/img/2024/02/04/1600x900/kuldeep-rohit_1707043246635_1707043256832.jpg" className="card-img-top" alt="..."/>
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
