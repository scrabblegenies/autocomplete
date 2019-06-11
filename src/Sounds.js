import React, { Component, Fragment } from 'react';


class Sounds extends Component {
    render() {
        console.log(this.props.playAudio)
        return (
            <Fragment>
                {this.props.playAudio ? (
                    
                    <iframe title="modem"
                    width="0" 
                    height="0" 
                    src="https://www.youtube.com/embed/gsNaR6FRuO0?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1" frameborder="0" 
                    allowfullscreen>
                    </iframe>
                ) : (
                    console.log("nothing")
                )}
            </Fragment>
        );
    }
}

export default Sounds