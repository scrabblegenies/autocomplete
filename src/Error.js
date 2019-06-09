import React, { Component, Fragment } from 'react';

class Error extends Component {
    render(){
        console.log(this.props.globalError);    
        return (
            <Fragment>
        
                {this.props.globalError ? (<h2>this is fine</h2>) : (alert(`there is a problem`))}
            </Fragment>

        )
    }
    
}


export default Error