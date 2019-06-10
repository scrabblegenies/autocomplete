import React, { Component, Fragment } from 'react';


class Wiki extends Component {

    render() {
        let copied = this.props.selectedItem;
        return (
            <Fragment>
                {this.props.clicked ? (
                    <div className="wikiPopup" id="wiki">
                        <p className="wikiMessage">
                            Learn more about <a href={`https://en.wikipedia.org/wiki/${copied}`}
                                target="_blank"
                                className="wikiLink"
                                rel="noopener noreferrer">{copied}</a>
                        </p>
                        <button
                            className="x"
                            onClick={this.props.closeWiki}>X
                        </button>
                    </div>
                ) : (null)}

            </Fragment>
        );
    }
}

export default Wiki