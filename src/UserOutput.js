import React, { Component, Fragment } from 'react';

//Class component for the user output
class UserOutput extends Component {
    render() {
        return (
            <Fragment>
                {this.props.globalError ? (
                <p className="letterOrNumber">Please enter a letter or number</p> 
                ):(
                    this.props.wholeWordResult.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className="autocompleteItem"
                                tabIndex="0"
                                onClick={this.props.handleClick}
                            >
                                {item}
                            </button>
                        )
                    }))
                }
            </Fragment>
        );
    }
}

export default UserOutput;

