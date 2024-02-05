import React, { Component } from 'react'
import PropTypes from 'prop-types'
import News from './components/News'
import Navbar from './components/Navbar'
export class App extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <Navbar/>
        <News/>
      </div>
    )
  }
}

export default App
