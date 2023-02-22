import React, { Component } from "react";
import '../styles/CvPreview.css';
import addressIcon from "../assets/map-marker-outline.svg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email-outline.svg";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/GitHub-icon.png";

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
                        {this.props.image !== null && <img src={URL.createObjectURL(this.props.image)} alt='uploaded' id="profile-picture"/>}
                    </div>
                    <div className="cv-middle">
                        <div className="cv-left">
                            <h2>CONTACT</h2>
                            <ul className="personal-container">
                                {this.props.address.length > 0 && <li><img src={addressIcon} alt="address icon" /><p>{this.props.address}</p></li>}
                                {this.props.phone.length > 0 && <li><img src={phoneIcon} alt="phone icon" /><p>{this.props.phone}</p></li>}
                                {this.props.email.length > 0 && <li><img src={emailIcon} alt="email icon" /><p>{this.props.email}</p></li>}
                                {this.props.linkedin.length > 0 && <li><img src={linkedinIcon} alt="linkedin icon" /><p>{this.props.linkedin}</p></li>}
                                {this.props.github.length > 0 && <li><img src={githubIcon} alt="github icon" /><p>{this.props.github}</p></li>}
                            </ul>
                            <div className="horizontal-line"></div>
                        </div>
                        <div className="vertical-line"/>
                        <div className="cv-right">
                            <h2>DESCRIPTION</h2>
                            <p>{this.props.description}</p>
                            <div className="horizontal-line" />
                            <h2>EXPERIENCE</h2>
                            <h3>{this.props.experiences.title}</h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}