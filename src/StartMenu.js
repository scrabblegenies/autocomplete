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
                    <li><a href="https://twitter.com/RobertJinChun">Robert Chun</a></li>
                    <li><a href="https://twitter.com/Lobst3rDev">Geoff Grossman</a></li>
                    <li><a href="https://twitter.com/LC_butWithCode">Laura Chuang</a></li>
                    <li><a href="https://twitter.com/beckyiscoding">Becky Robinson</a></li>
                    <li className="datamuse"><a href="https://www.datamuse.com/api/">Made using the Datamuse API.</a></li>
                </ul>
            </div>
        )
    }
}

export default StartMenu