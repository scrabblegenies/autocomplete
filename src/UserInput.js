import React, { Component } from 'react';

class UserInput extends Component {

    render(){
        return(
            <div>
                <form>
                    <input 
                    type="text"
                    onChange={this.props.onChange}
                    value = {this.props.firstLetter}
                    placeholder="start typing something"
                    />
                </form>
            </div>
        );
    }
}

export default UserInput;