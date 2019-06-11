import React, { Component, Fragment } from 'react';


class Sounds extends Component {

    render() {
        return (
            <Fragment>
                {this.props.playAudio ? (
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/gsNaR6FRuO0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {this.props.playAudio=false}
                ) : (null)}

            </Fragment>
        );
    }
}

export default Sounds