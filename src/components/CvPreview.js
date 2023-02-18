import React, { Component } from "react";
import '../styles/CvPreview.css';

export default class CvPreview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cv-container" style={{ width: `${this.props.newWidth}%` }}>
                <div className="cv-preview" style={{ fontSize: `${Math.floor(((window.innerWidth * this.props.newWidth)/100) / 12)}px` }}>
                    <div className="cv-header">
                        <div className="cv-header-name">
                            <h2>{this.props.first.toUpperCase()}</h2>
                            <h1>{this.props.last.toUpperCase()}</h1>
                            <h2>{this.props.title.toUpperCase()}</h2>
                        </div>
                    </div>
                    <div className="cv-middle">
                        <div className="cv-left">

                        </div>
                        <div className="cv-middle-line"/>
                        <div className="cv-right">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}