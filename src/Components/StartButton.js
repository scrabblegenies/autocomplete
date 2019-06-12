import React, {Component} from 'react';
import windows from './../Assets/windows.png'

//class component for start button
class StartButton extends Component {
    render(){
        return(
            <button className="startButton" onMouseDown={this.props.handleMouseDown}>
                <div className="logo">
                    <img className="windows" src={windows} alt="retro windows logo" />
                </div>
                <p className="start">Start</p>
            </button>
        )
    }
}

export default StartButton