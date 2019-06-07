import React, { Component, Fragment } from 'react';

class UserOutput extends Component {
    render() {
        return (
            <Fragment>
                {this.props.wholeWordResult.map((item, index)=>{
                    return(
                        <li
                            key = {index}
                            className="autocompleteItem">{item}</li>
                    ) 
                })
            }
            </Fragment>
        );
    }
}

export default UserOutput;

