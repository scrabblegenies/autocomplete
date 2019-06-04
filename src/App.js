import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      firstLetterResult:[]
    }
    console.log('Hello1');

  }
  axiosCall = function () {
    let temporaryList = [];
    let variable = 's';
    axios({
      //The API has no other way of sending exact data. I need to call the whole database.
      url: `http://api.datamuse.com/sug?max=1000&s=${variable}`,
      method: 'GET',
      data: {
        max: 1000,
        // s: ""
        // s: "userInput"
      }
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
      // Setting up parameters for if the promise is fulfilled or not
          
          
          // isLoading: fa
        // slotApp.koreanToronto = resultOfKoreanToro
  }
  // AJAX call for Mexican Restaurants in Mississauga


  componentDidMount() {
    console.log('Hello3');
    this.axiosCall()

  }

  render() {
    console.log('Hello2');
    return (

      <div className='App'>
        
      </div>
    );
  }
}

export default App;
