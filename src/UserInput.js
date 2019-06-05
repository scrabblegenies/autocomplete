import React, { Component } from 'react';
 
class UserInput extends Component {

    handleTextChange = (e) => {
        this.props.onChange(e.target.value);
        
    }

    render(){
        return(
            <div>
                <form>
                    <input 
                    type="text"
                    onChange={this.handleTextChange}
                    value = {this.props.firstLetter}
                    />
                </form>
            </div>
        );
    }
}

export default UserInput;