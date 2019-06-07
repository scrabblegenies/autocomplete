import React, { Component} from 'react';
import axios from 'axios';
import './App.css';
import UserInput from './UserInput.js';
import UserOutput from './UserOutput.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const questionMarkIcon = <FontAwesomeIcon aria-hidden="true" icon={faQuestionCircle} />
const minimizeIcon = <FontAwesomeIcon aria-hidden="true" icon={faWindowMinimize} />
const closeWindowIcon = <FontAwesomeIcon aria-hidden="true" icon={faWindowClose} />

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
        modifiedList.push(word.word)
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
      <div className="container">
        <div className="wrapper">
          <div className="tabBar">
            <div className="iconContainer">
              <p class="icon">{questionMarkIcon}</p>
              <p class="icon">{minimizeIcon}</p>
              <p class="icon">{closeWindowIcon}</p>
            </div>
          </div>
          <div className="searchEngine">
            <h1>Autocomplete</h1>
            <UserInput onChange={this.handleTextChange} data={this.state.data} />
            <UserOutput wholeWordResult={this.state.wholeWordResult} />
          </div>
        </div>
      </div>
        <footer>
          <img src="assets/windows.png" alt="retro windows logo" />
          <p class="start">Start</p>
        </footer>
      
    </div>
  );
}
}

export default App;




{/* <div className='App'>
  <div className="userInput">
    <UserInput
      onChange={this.handleTextChange}
      data={this.state.data} />
  </div>
  <div className="UserOutput">
    <UserOutput
      wholeWordResult={this.state.wholeWordResult} />
  </div>

</div> */}