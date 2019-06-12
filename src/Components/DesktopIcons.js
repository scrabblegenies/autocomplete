import React, { Component } from 'react';
import icon1 from './../Assets/icon1.png'
import icon2 from './../Assets/icon2.png'
import icon3 from './../Assets/icon3.png'
import icon4 from './../Assets/icon4.png'
import icon5 from './../Assets/icon5.png'
import icon6 from './../Assets/icon6.png'

class DesktopIcons extends Component {
    render() {
        const { handleInstructionsClick } = this.props;
        return (
            <div className="desktopIcons">
                <div className="iconContainer1">
                    <button aria-label="about this app" className="instructions" onClick={handleInstructionsClick}><img src={icon1} aria-hidden="true"/></button>
                    <p className="iconText">Autocomplete Instructions</p>
                </div>
                <div className="iconContainer2 blankIcon">
                    <img src={icon2} className="icon2" aria-hidden="true" />
                    <p className="iconText">Don't click me</p>
                </div>
                <div className="iconContainer3 blankIcon">
                    <img src={icon3} className="icon3" aria-hidden="true" />
                    <p className="iconText">I do nothing</p>
                </div>
                <div className="iconContainer4 blankIcon">
                    <img src={icon4} className="icon4" aria-hidden="true" />
                    <p className="iconText">Ignore me</p>
                </div>
                <div className="iconContainer6 blankIcon">
                    <img src={icon6} className="icon6" aria-hidden="true" />
                    <p className="iconText">Just an icon</p>
                </div>
                
            </div>
        );
    }
}

export default DesktopIcons;

