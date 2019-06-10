import React, { Component } from 'react';

class StartMenu extends Component {
    render() {

        let visibility = "startMenu hide";

        if (this.props.menuVisibility) {
            visibility = "startMenu show";
        }

        return (
            <div onMouseDown={this.props.handleMouseDown}
                className={visibility}>
                <div className="sideBanner"></div>
                <ul>
                    <li>Robert Chun</li>
                    <li>Geoff Grossman</li>
                    <li>Laura Chuang</li>
                    <li>Becky Robinson</li>
                    <li className="datamuse">Made using the Datamuse API.</li>
                </ul>
            </div>
        )
    }
}

export default StartMenu