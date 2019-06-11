import React, { Component, Fragment } from 'react';

class Instructions extends Component {
    render() {
        const { showInstructions, closeInstructions } = this.props;
        return (
            <Fragment>
                {showInstructions ? (
                    <div className="instructionsContainer">
                        <div className="popupBar">
                            <p>WELCOME TO AUTOCOMPLETE</p>
                            <button
                                className="x"
                                onClick={closeInstructions}>
                                X
                            </button>
                        </div>
                        <p className="instructionsText">Welcome to the future! Start typing letters in the input and it will suggest a word or phrase for you! Click on a result and you can learn more about it.</p>
                        <button className="x ok" onClick={closeInstructions}>OK</button>
                    </div>
                    
                ) : (null)}

            </Fragment>
        );
    }
}

export default Instructions;

