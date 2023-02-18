import React, { Component } from "react";
import '../styles/Footer.css';
import githublogo from '../assets/GitHub-icon.png';

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer-container">
                <div className="link-container">
                    <a href="https://github.com/allanwandall/cv-application">2023 allanwandall</a>
                    <img src={githublogo} alt="GitHub Icon"/>
                </div>
            </div>
        );
    }
}