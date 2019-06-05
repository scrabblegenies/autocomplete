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
      wholeWord: ''
    }
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
      
        this.setState({
          wholeWordResult: temporaryList,
        })
      })
      .catch(function (error) {
 
      })

  }

  handleTextChange = (textChange) => {
    console.log(textChange)
  let wholeWordSpread = [...textChange];
  



    this.setState({
      wholeWord: wholeWordSpread
    })
    console.log(this.state.wholeWord)
  }

  componentDidMount() {

    this.axiosCall()

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
