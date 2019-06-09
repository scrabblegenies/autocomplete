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




const questionMarkIcon = <FontAwesomeIcon aria-hidden="true" icon={faQuestionCircle} />
const minimizeIcon = <FontAwesomeIcon aria-hidden="true" icon={faWindowMinimize} />
const closeWindowIcon = <FontAwesomeIcon aria-hidden="true" icon={faWindowClose} />


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      globalError:true,
      wholeWordResult: [],
      wholeWord: [],
      filteredArray: []
    }
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
    } else 
        this.setState({
          globalError: true,
        }, () => {
        })
  }

  clearInput = () => {
    document.getElementById('main-form').reset();
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

      console.log(modifiedList)
      if (modifiedList.length < 1){
        /////////////@@//////////////////////////////////////////////////////////////////////////////////////////
        /////////////@@//////////////////////////////////////////////////////////////////////////////////////////
        /////////////@@//////////////////////////////////////////////////////////////////////////////////////////
        /////////////@@//////////////////////////////////////////////////////////////////////////////////////////
        /////////////@@//////////////////////////////////////////////////////////////////////////////////////////
        /////////////@@//////////////////////////////////////////////////////////////////////////////////////////
        /////////////@@///////////////////@@@@@///////@/////@////@////////////@@@@///////////////////////////////
        /////////////@@/////////////////@@/////@@/////@/////@////@@@@@@@////@@////@@/////////////////////////////
        /////////////@@////////////////@/////////@////@/////@////@/////////@////////@////////////////////////////
        /////////////@@/////////////////@@/////@@@////@/////@////@//////////@@////@@@////////////////////////////
        /////////////@@@@@@@@@@@@@@///////@@@@@//@////@@@@@@@////@////////////@@@@//@////////////////////////////
        alert("this is not right")
      }


      this.setState({
        wholeWordResult: modifiedList,
      }, () => {

      })
      if (this.state.wholeWordResult.length === 0) {
        return Swal.fire({
          title: `Want to Try Again?`,
          text: `It looks like this word might not exist!`,
          type: 'warning',
          confirmButtonText: 'Okay'
        })

      }
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
