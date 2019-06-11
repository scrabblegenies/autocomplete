import React, { Component, Fragment } from 'react';


class UserOutput extends Component {


    // copiedItem = this.props.selectedItem;

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

