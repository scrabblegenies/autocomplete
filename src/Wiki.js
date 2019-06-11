import React, { Component, Fragment } from 'react';


class Wiki extends Component {

    render() {
        //deconstructing the props so that we don't need to write this.props.blabla every time
        const {selectedItem, clicked, closeWiki} = this.props;
        return (
            <Fragment>
                {clicked ? (
                    <div className="wikiPopup" id="wiki">
                        <div className="popupBar">
                            <p>TAKE ME TO WIKI</p>
                            <button
                                className="x"
                                onClick={closeWiki}>X
                            </button>
                        </div>
                        <p className="wikiMessage">
                            Learn more about <a href={`https://en.wikipedia.org/wiki/${selectedItem}`}
                                target="_blank"
                                className="wikiLink"
                                rel="noopener noreferrer">{selectedItem}</a>
                        </p>
                        
                    </div>
                ) : (null)}

            </Fragment>
        );
    }
}

export default Wiki