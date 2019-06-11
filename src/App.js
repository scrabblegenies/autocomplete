import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserInput from './UserInput.js';


import Clock from './Clock.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle} from '@fortawesome/free-solid-svg-icons';
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import UserOutput from './UserOutput.js';
import Error from './Error.js';
import Wiki from './Wiki.js';
import StartButton from './StartButton.js';
import StartMenu from './StartMenu.js';
import Sounds from './Sounds.js'



const questionMarkIcon = <FontAwesomeIcon aria-hidden="true" icon={faQuestionCircle} />
const minimizeIcon = <FontAwesomeIcon aria-hidden="true" icon={faWindowMinimize} />
const closeWindowIcon = <FontAwesomeIcon aria-hidden="true" icon={faWindowClose} />


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      globalError: false,
      returnError: false,
      wholeWordResult: [],
      wholeWord: [],
      filteredArray: [],
      visible: false,
      selectedItem: "",
      clicked: false,
      playAudio:false
    }
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  closePopup = () => {
    this.setState({
      returnError: false,
    })
  }

  handleClick = (e) => {
    this.setState({
      selectedItem: e.target.innerText,
      clicked: true
    },()=>{
        console.log(this.state.selectedItem)
        console.log(this.state.clicked)
    })
  }

  closeWiki = () => {
    this.setState({
      clicked: false,
    })
  }

  // event handler
  handleTextChange = (event) => {
    let userInput = event.target.value;
    let regexMaster = RegExp(`([\sA-Za-z0-9])`);
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
    }
    else {
      this.setState({
        globalError: true,
      }, () => {
      })
    }
  }

  handleMouseDown(e) {
    console.log("clicked", e.target);
    this.toggleMenu();
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState(
      {
        visible: !this.state.visible
      }
    );
    console.log(this.state.visible)
  }

  playSound=()=> {
    console.log('clocked')
    this.setState({
      playAudio:true
    },()=>{
      console.log(this.state.playAudio)
    })
  }




  axiosCall = function (wholeWord) {
    let temporaryList = [];
    let modifiedList = [];
    let blankError = false;
    axios({
      //The API has no other way of sending exact data. I need to call the whole database.
      url: `https://api.datamuse.com/sug?max=10&k=VQE6va&s=${wholeWord}`,
      method: 'GET',

    }).then((response) => {
      temporaryList = response;
      temporaryList.data.map((word, i) => {
        return (
          modifiedList.push(word.word)
        )
      })

      console.log(modifiedList)
      // if (modifiedList.length < 1){
      //   /////////////@@//////////////////////////////////////////////////////////////////////////////////////////
      //   /////////////@@//////////////////////////////////////////////////////////////////////////////////////////
      //   /////////////@@//////////////////////////////////////////////////////////////////////////////////////////
      //   /////////////@@//////////////////////////////////////////////////////////////////////////////////////////
      //   /////////////@@//////////////////////////////////////////////////////////////////////////////////////////
      //   /////////////@@//////////////////////////////////////////////////////////////////////////////////////////
      //   /////////////@@///////////////////@@@@@///////@/////@////@////////////@@@@///////////////////////////////
      //   /////////////@@/////////////////@@/////@@/////@/////@////@@@@@@@////@@////@@/////////////////////////////
      //   /////////////@@////////////////@/////////@////@/////@////@/////////@////////@////////////////////////////
      //   /////////////@@/////////////////@@/////@@@////@/////@////@//////////@@////@@@////////////////////////////
      //   /////////////@@@@@@@@@@@@@@///////@@@@@//@////@@@@@@@////@////////////@@@@//@////////////////////////////
      //   alert("this is not right")
      // }

      

      this.setState({
        wholeWordResult: modifiedList,
        // returnError: blankError
      }, () => {
          console.log(this.state.wholeWordResult.length)
          if (this.state.wholeWordResult.length === 0) {
            blankError = true
          } else {
            blankError = false
          }
      })
      this.setState({
        returnError: blankError
      }, () => {
      })
    })
      .catch(function (error) {
      })

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
                <button onClick={this.playSound} ><p class="icon">{closeWindowIcon}</p></button>
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
                    handleClick={this.handleClick}/>
                </div>
                <Error
                  returnError={this.state.returnError}
                  closePopup={this.closePopup} />
                <Wiki
                  clicked={this.state.clicked}
                  selectedItem={this.state.selectedItem}
                  closeWiki={this.closeWiki}/>
                  <Sounds 
                  playAudio={this.state.playAudio} />
              </div>
            </div>
          </div>
          </div>
          <footer>
            <StartButton handleMouseDown={this.handleMouseDown}/>
            <StartMenu menuVisibility={this.state.visible} />
            <Clock className="clock" />
          </footer>
        </div>
    )
  }
}



export default App
