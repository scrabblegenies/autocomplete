import React, { Component, Fragment } from 'react';

class Error extends Component {

    render(){

        return (
            <Fragment>
        
                {this.props.returnError ? 
                    (<div class="errorPopup" id="error">
                        <div class="topBanner">
                            <p class="error">ERROR</p>
                            <button
                                class="x"
                                onClick={this.props.handleClick}>X</button>
                        </div>
                        <p class="errorMessage">The word you have entered has no results.</p>
                    </div>) 
                : null}
            </Fragment>

        )
    }
    
}


export default Error