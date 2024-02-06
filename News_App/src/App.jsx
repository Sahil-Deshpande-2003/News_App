import React, { Component } from 'react'
import News from './components/News'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export class App extends Component {
  static propTypes = {

  }

  /*

  business
entertainment
general
health
science
sports
technology
  */

  render() {
    console.log("Inside render")
    return (
      <div>
        
        <Router>
          {/* My mistake was that I had kept Navbar outside Router, it should be inside Router */}
        <Navbar/>
        <Routes>
          {/* problem is navbar pe dusre catgeory pe click karne par component remount nahi ho raha hai naye props ke saath, uske liye har News component ko ek unique key deni padegi */}

          <Route exact path="/" element={<News pageSize={5}  key="general" country="in" apiKey="a88e1692409d4c84ab688af0c5eada56" category="general" />}/>
          <Route exact path="/business" element={<News pageSize={5}  key="business" country="in" apiKey="a88e1692409d4c84ab688af0c5eada56" category="business" />}/>
          <Route exact path="/entertainment"  element={<News pageSize={5}  key="entertainment" country="in" apiKey="a88e1692409d4c84ab688af0c5eada56" category="entertainment" />}/>
          <Route exact path="/health"  element={<News pageSize={5} country="in" key="health"apiKey="a88e1692409d4c84ab688af0c5eada56" category="health" />}/>
          <Route exact path="/science" key="science" element={<News pageSize={5} country="in" apiKey="a88e1692409d4c84ab688af0c5eada56" category="science" />}/>
          <Route exact path="/sports"  element={<News pageSize={5} country="in" key="sports"apiKey="a88e1692409d4c84ab688af0c5eada56" category="sports" />}/>
          <Route exact path="/technology"  element={<News pageSize={5} country="in" key="technology"apiKey="a88e1692409d4c84ab688af0c5eada56" category="technology" />}/>
         
         
           
        </Routes>
        </Router>
      </div>
    )
  }
}

export default App
