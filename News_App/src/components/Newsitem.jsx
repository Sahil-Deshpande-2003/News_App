import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Newsitem extends Component {
  static propTypes = {

  }



  constructor(){

    super();

    console.log("Inside Newsitem constructor")
  }
        

  render() {

    return (
      <div>
        <div className="card">
  <img src={this.props.imageUrl!=null?this.props.imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_icnonsILxOwjnB_JigBAq9s_l0WcRZ6DVw&usqp=CAU"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title!=null?this.props.title:"Unknown"}</h5>
    <p className="card-text">{this.props.description!=null?this.props.description:"Unknown"}</p>
    <a href={this.props.url!=null?this.props.url:""} className="btn btn-primary" target= "_blank">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
