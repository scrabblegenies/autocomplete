import React, { Component, Fragment } from 'react';


class Sounds extends Component {

    render() {
        return (
            <Fragment>
                {this.props.playAudio ? (
                        "dial"= {
                            url: "./Dial-up-sound.mp3",
                            volume: .5
                        }
                    {this.props.playAudio=false}
                ) : (null)}

            </Fragment>
        );
    }
}

export default Sounds