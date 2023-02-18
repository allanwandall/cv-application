import React, { Component } from "react";
import logo from '../assets/header_logo.png';
import "../styles/Header.css";

export default class Header extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" />
                    <p>Resume icon by Icons8</p>
                </div>
                <h1>GENERATE CV</h1>
            </div>
        );
    }
}