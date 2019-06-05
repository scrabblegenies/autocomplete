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
      wholeWordResult:[],
      wholeWord: []
    }
  }

  handleTextChange = (event) => {
    let userInput = event.target.value;
    let wordSpread = [...userInput];
    this.setState({
      wholeWord: wordSpread,
    }, () => {
      console.log(this.state.wholeWord)
    })
  }



  axiosCall = function (wholeWord) {
    let temporaryList = [];
    // let variable = 's';
    axios({
      //The API has no other way of sending exact data. I need to call the whole database.
      url: `http://api.datamuse.com/sug?max=1000&s=${wholeWord}`,
      method: 'GET',

    }).then((response) => {
      temporaryList = response;
      // console.log(temporaryList)
      this.setState({
        wholeWordResult: temporaryList,
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
        <UserInput onChange={this.handleTextChange} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
