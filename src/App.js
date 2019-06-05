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
      firstLetterResult:[],
      firstLetter: ''
    }
    console.log('Hello1');

  }
  axiosCall = function (firstLetter) {
    let temporaryList = [];
    // let variable = 's';
    axios({
      //The API has no other way of sending exact data. I need to call the whole database.
      url: `http://api.datamuse.com/sug?max=1000&s=${firstLetter}`,
      method: 'GET',

    }).then((response) => {
        temporaryList = response;
        console.log('Then');
        console.log(response);
        this.setState({
          firstLetterResult: temporaryList,
        })
      })
      .catch(function (error) {
        console.log('CrazyTown');
      })

  }

  handleTextChange = (textChange) => {
    console.log('anything')
    console.log(this.axiosCall(textChange))
    this.setState({
      firstLetter: textChange
    })
  }

  componentDidMount() {
    console.log('Hello3');
    this.axiosCall()

  }

  render() {
    console.log('Hello2');
    return (

      <div className='App'>
        <UserInput onChange={this.handleTextChange} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
