import React, { Component } from "react";
import '../styles/InputContainer.css';

export default class InputContainer extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();
        console.log("SUBMITTED");
    }

    render() {
        return (
            <div className="input-container" style={{ width: `${this.props.newWidth}%` }}>
                <h1>Personal Information</h1>
                <form className="personal-info-form">
                    <input type="text" placeholder="First name" onChange={this.props.first}/>
                    <input type="text" placeholder="Last name" onChange={this.props.last} />
                    <input type="text" placeholder="Job title" onChange={this.props.title} />
                    <input type="text" placeholder="Address" onChange={this.props.address} />
                    <input type="text" placeholder="Phone number" onChange={this.props.phone} />
                    <input type="text" placeholder="Email" onChange={this.props.email} />
                    <textarea placeholder="Description" rows="4" onChange={this.props.description}/>
                </form>
            </div>
        );
    }
}