import React, { Component } from "react";

export default class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience">
                <h3>{`${this.props.experience.title.toUpperCase()} | ${this.props.experience.employer.toUpperCase()} | ${this.props.experience.start} - ${this.props.experience.finish}`}</h3>
                <p>{this.props.experience.description}</p>
            </div>
        );
    }
}