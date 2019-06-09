import React, { Component, Fragment } from 'react';

class Error extends Component {
    render(){
        console.log(this.props.returnError);    
        return (
            <Fragment>
        
                {this.props.returnError ? (alert(`there is a problem`)) : (<h2>this is fine</h2>)}
            </Fragment>

        )
    }
    
}


export default Error