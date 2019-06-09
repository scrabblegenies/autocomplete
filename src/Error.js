import React, { Component, Fragment } from 'react';

class Error extends Component {
    render(){
        console.log(this.props.returnError);    
        return (
            <Fragment>
        
                {this.props.returnError ? 
                    (<div class="errorPopup">
                    <div class="topBanner">
                        <p class="error">ERROR</p>
                        <p class="x">X</p>
                    </div>
                    <p class="errorMessage">The word you have entered has no results.</p>
                </div>) 
                : (<h2>this is fine</h2>)}
            </Fragment>

        )
    }
    
}


export default Error