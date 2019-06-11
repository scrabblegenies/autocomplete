import React, { Component } from 'react';
//axios
import axios from 'axios';
//js
import UserInput from './UserInput.js';
import UserOutput from './UserOutput.js';
import Error from './Error.js';
import Wiki from './Wiki.js';
import Clock from './Clock.js';
import Sounds from './Sounds.js'
import StartButton from './StartButton.js';
import StartMenu from './StartMenu.js';
import DesktopIcons from './DesktopIcons.js';
//font awsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
//css
import './App.css';

//font awsome variables
const minimizeIcon = <FontAwesomeIcon aria-hidden="true" icon={faWindowMinimize} />
const closeWindowIcon = <FontAwesomeIcon aria-hidden="true" icon={faWindowClose} />

//Main class component
class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      globalError: false,
      returnError: false,
      visible: false,
      clicked: false,
      playAudio: false,
      wholeWordResult: [],
      wholeWord: [],
      filteredArray: [],
      selectedItem: "",
    }
  }

  //pop up function
  closePopup = () => {
    this.setState({
      returnError: false,
    })
  }

  //handles the click for rendered text
  handleClick = (e) => {
    this.setState({
      selectedItem: e.target.innerText,
      clicked: true
    })
  }

  //function to close the popup for the wiki page
  closeWiki = () => {
    this.setState({
      clicked: false,
    })
  }

  //function to handle the mouse down event for start Button
  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  //function to andle the mouse down event for toggle Button
  toggleMenu() {
    this.setState({
      visible: !this.state.visible
    });
  }

  //function to handle the event to play sounds as easter egg
  playSound = () => {
    console.log('clocked')
    this.setState({
      playAudio: true
    }, () => {
    })
  }

  // event handler for main text input
  handleTextChange = (e) => {
    const userInput = e.target.value;
    const regexMaster = RegExp(`([\sA-Za-z0-9])`);
    const wordSpread = [...userInput];
    let error = false;
    //loops through each letter input
    wordSpread.map((letter) => {
      //test for regex true
      if (!regexMaster.test(letter)) {
        error = true
      }
      return (
        error
      )
    })

    //error handling to make sure axios is not called when there is no input
    if (wordSpread.length > 0 && error === false) {
      this.axiosCall(userInput)
      this.setState({
        globalError: false,
      })
    }
    else {
      this.setState({
        globalError: true,
      })
    }
  }

  //Axios call function not in component did mount to call when we need it
  axiosCall = function (wholeWord) {
    const modifiedList = [];
    let returnError = false;
    axios({
      url: `https://api.datamuse.com/sug?max=10&k=VQE6va&s=${wholeWord}`,
      method: 'GET',
    }).then((response) => {
      response.data.map((word) => {
        return (
          modifiedList.push(word.word)
        )
      })

      //state needs to be set first
      this.setState({
        wholeWordResult: modifiedList,
      }, () => {

        //changes to state needs to be changed
        if (this.state.wholeWordResult.length === 0) {
          returnError = true
        } else {
          returnError = false
        }
      })

      //another state right after requires to change
      this.setState({
        returnError: returnError
      })
    })
    //Error handling for axios call
      .catch(function (error) {
        alert("Please refresh your browser and ensure the internet is connected")
      })
  }

  render() {
    return (
      <div className='App'>
        <div className="desktopIcons">
        </div>
        <div className="container">
          <DesktopIcons />
          <div className="wrapper">
            <div className="tabBar">
              <div className="iconContainer">
                <p class="icon">{minimizeIcon}</p>
                <button onClick={this.playSound} className="easterEgg" ><p class="icon">{closeWindowIcon}</p></button>
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
                    globalError={this.state.globalError}
                    handleClick={this.handleClick.bind(this)} />
                </div>
                <Error
                  returnError={this.state.returnError}
                  closePopup={this.closePopup} />
                <Wiki
                  clicked={this.state.clicked}
                  selectedItem={this.state.selectedItem}
                  closeWiki={this.closeWiki} />
                <Sounds
                  playSound={this.state.playSound}
                  playAudio={this.state.playAudio}
                />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <StartButton handleMouseDown={this.handleMouseDown.bind(this)} />
          <StartMenu menuVisibility={this.state.visible} />
          <Clock className="clock" />
        </footer>
      </div>
    )
  }
}

export default App
