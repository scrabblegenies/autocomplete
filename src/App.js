import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserInput from './UserInput.js';
// import UserOutput from './UserOutput.js'

class App extends Component {


  constructor() {
    super()
    this.state = {
      isLoading: true,
      wholeWordResult: [],
      wholeWord: [],
      filteredArray: []
    }
  }

  // event handler
  handleTextChange = (event) => {
    let userInput = event.target.value;
    let regexMaster = RegExp(`${userInput}`)
    let wordSpread = [...userInput];
    let arrayOfWords = [];

      this.axiosCall(userInput)

      this.setState({
      
  }, () => {

  })

  
  }


axiosCall = function (wholeWord) {
  let temporaryList = [];
  let modifiedList =[];
  // let variable = 's';
  axios({
    //The API has no other way of sending exact data. I need to call the whole database.
    url: `http://api.datamuse.com/sug?max=10&s=${wholeWord}`,
    method: 'GET',

  }).then((response) => {
    temporaryList = response;
    temporaryList.data.map((word, i) => {
      return (
        modifiedList.push(word)
        )
      })

    this.setState({
        wholeWordResult: modifiedList,
    }, () => {
      console.log(this.state.wholeWordResult)
    })

  })
    .catch(function (error) {
    })

}

componentDidMount() {

}

render() {
  return (
    <div className='App'>
      <div className = "userInput">
        <UserInput
          onChange={this.handleTextChange}
          data={this.state.data} />
      </div>
      
    </div>
  );
}
}

export default App;
