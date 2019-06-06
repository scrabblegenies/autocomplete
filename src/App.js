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

    // if ((wordSpread.length === 1)) {
      this.axiosCall(userInput)
    // }
    // console.log('hello')
    // //this probably belings in ints own function
    // this.state.wholeWordResult.map((word, i) => {
    //   console.log(word)
    //   console.log(regexMaster.test(word));
      
      
    // if (word.test(regexMaster) === true) {
    //     //       this.state.filteredArray.push(word)
    //   console.log('hello3')
    //   }
      // console.log('hello')
      // return(console.log())

  // })


    // temp.map((category, i) => {
    //   return (
    //     <button key={i} tabIndex='0' onClick={this.handleClickForItems.bind(this, i)}>{category.title}</button>
    //   )
    // })




    this.setState({
      

  }, () => {
    // console.log(this.state.wholeWordResult)
  })

    // We want the axios call to happen only with the first letter
  }


axiosCall = function (wholeWord) {
  let temporaryList = [];
  // let variable = 's';
  axios({
    //The API has no other way of sending exact data. I need to call the whole database.
    url: `http://api.datamuse.com/sug?max=10&s=${wholeWord}`,
    method: 'GET',

  }).then((response) => {
    temporaryList = response;
    // console.log(temporaryList)
    this.setState({
      wholeWordResult: temporaryList.data,
    }, () => {
      
        this.state.wholeWordResult.map((word, i)=>{
          return(
            console.log(word.word)
          )
        })
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
      <UserInput onChange={this.handleTextChange} data={this.state.data} />
    </div>
  );
}
}

export default App;
