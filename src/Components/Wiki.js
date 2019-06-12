import React, { Component, Fragment } from 'react';

//Class component for Wiki page
class Wiki extends Component {
    constructor(){
        super()
        this.modalLink = React.createRef();
    }
    componentDidMount(){
        // console.log(`modal mounted`, this.modalLink)
    }
    render() {
        //deconstructing the props so that we don't need to write this.props.blabla every time
        const {selectedItem, clicked, closeWiki} = this.props;
        return (
            <Fragment>
                {clicked ? (
                    <div
                        className="wikiPopup"
                        id="wiki"
                        
                       >
                        <div className="popupBar">
                            <p>TAKE ME TO WIKI</p>
                            <button
                                id="closeButton"
                                className="x"
                                onClick={closeWiki}>
                                    X
                            </button>
                        </div>
                        <p className="wikiMessage" >
                            Learn more about <a href={`https://en.wikipedia.org/wiki/${selectedItem}`}
                                target="_blank"
                                tabIndex="0"
                                className="wikiLink"
                                rel="noopener noreferrer"
                                ref={this.modalLink}>{selectedItem}</a>
                        </p>
                        
                    </div>
                ) : (null)}
            </Fragment>
        );
    }
}

export default Wiki