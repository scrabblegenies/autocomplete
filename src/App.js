import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import windows from './windows.png'
import UserInput from './UserInput.js';
import Swal from 'sweetalert2';
import Clock from './Clock.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import UserOutput from './UserOutput.js'
import Error from './Error.js'




const questionMarkIcon = <FontAwesomeIcon aria-hidden="true" icon={faQuestionCircle} />
const minimizeIcon = <FontAwesomeIcon aria-hidden="true" icon={faWindowMinimize} />
const closeWindowIcon = <FontAwesomeIcon aria-hidden="true" icon={faWindowClose} />


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      globalError:true,
      returnError: false,
      wholeWordResult: [],
      wholeWord: [],
      filteredArray: []
    }
  }

  // event handler
  handleTextChange = (event) => {
    let userInput = event.target.value;
    let regexMaster = RegExp(`([A-Za-z0-9])`);
    let wordSpread = [...userInput];
    let error = false;

    wordSpread.map((letter) => {
      if (!regexMaster.test(letter) === true) {
        error = true
      }
      return (
        error
      )
    })
    if (wordSpread.length > 0 && error === false) {
      this.axiosCall(userInput)
      this.setState({
        globalError: false,
      }, () => {
      })
    } else if (this.state.wholeWordResult.length === 0){
      this.setState({
        returnError: true,
      }, () => {
      })
      
    }
    else 
        this.setState({
          globalError: true,
        }, () => {
        })
  }


  axiosCall = function (wholeWord) {
    let temporaryList = [];
    let modifiedList = [];
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
      // if (this.state.wholeWordResult.length === 0) {
      //   <Error 
      //     errorAlert = {this.errorAlert}/>
      // }
    })
      .catch(function (error) {
      })
    
  }

    render() {
      return(
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
              </div>
              <div className="searchEngine">
                <h1>Autocomplete</h1>
                <div className="inputsContainer">
                  <div className="userInput">
                    <UserInput
                      id="userInput"
                      onChange={this.handleTextChange}
                      data={this.state.data} />
                  </div>
                  <div className="userOutput">
                    <UserOutput
                      wholeWordResult={this.state.wholeWordResult}
                      globalError={this.state.globalError} />
                  </div>
                  <Error/>
                </div>
              </div> 
            </div>
          </div>
          <footer>
            <div className="startButton">
              <div className="logo">
                <img className="windows" src={windows} alt="retro windows logo" />
              </div>
              <p class="start">Start</p>
            </div>
            <Clock className="clock" />
          </footer>
        </div>

      )}
    }



export default App
