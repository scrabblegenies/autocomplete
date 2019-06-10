import React, { Component, Fragment } from 'react';


class Wiki extends Component {

    render() {
        let copied = this.props.selectedItem;
        return (
            <Fragment>
                {this.props.clicked ? (
                    <div class="wikiPopup" id="wiki">
                        <p class="wikiMessage">
                            Find out more about <a href={`https://en.wikipedia.org/wiki/${copied}`} target="_blank" className="wikiLink">{copied}</a>
                        </p>
                        <button
                            class="x"
                            onClick={this.props.closeWiki}>X</button>
                    </div>
                ) : (null)}

            </Fragment>
        );
    }
}

export default Wiki