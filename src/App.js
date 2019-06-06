import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserInput from './UserInput.js';
// import UserOutput from './UserOutput.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
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
    }
  }

  // event handler
  handleTextChange = (event) => {
    let userInput = event.target.value;
    let wordSpread = [...userInput];
    let arrayOfWords = [];

    if ((wordSpread.length === 1)) {
      this.axiosCall(wordSpread[0])
    }
    this.setState({

    }, () => {
        console.log(this.state.wholeWordResult)
    })

    // We want the axios call to happen only with the first letter
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
        wholeWordResult: temporaryList.data,
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
        {/* <UserInput onChange={this.handleTextChange} data={this.state.data} /> */}
        <div className="container">
          <div className="wrapper">
            <div className="tabBar">
              <div className="iconContainer">
                <p class="icon">{questionMarkIcon}</p>
                <p class="icon">{minimizeIcon}</p>
                <p class="icon">{closeWindowIcon}</p>
              </div>
              {/* <i class="fas fa-window-minimize"></i>
            <i class="fas fa-window-close"></i> */}
            </div>
            <div className="searchEngine">
              <h1>Autocomplete</h1>
              <UserInput onChange={this.handleTextChange} data={this.state.data} />
            </div>
          </div>
        </div>
        
        <footer>
          <img src="assets/windows.png" alt="retro windows logo"/>
          <p class="start">Start</p> 
        </footer>
      </div>
    );
  }
}

export default App;
