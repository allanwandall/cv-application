import React, { Component } from "react";
import '../styles/InputContainer.css';
import ExperienceInput from "./ExperienceInput";

export default class InputContainer extends Component {
    constructor(props) {
        super(props);

        
    }

    

    render() {
        return (
            <div className="input-container" style={{ width: `${this.props.newWidth}%` }}>
                <h1>PERSONAL INFORMATION</h1>
                <form className="personal-info-form">
                    <input type="text" placeholder="First name" onChange={this.props.first}/>
                    <input type="text" placeholder="Last name" onChange={this.props.last} />
                    <input type="text" placeholder="Job title" onChange={this.props.title} />
                    <input type="text" placeholder="Address" onChange={this.props.address} />
                    <input type="text" placeholder="Phone number" onChange={this.props.phone} />
                    <input type="text" placeholder="Email" onChange={this.props.email} />
                    <input type="text" placeholder="LinkedIn" onChange={this.props.linkedin} />
                    <input type="text" placeholder="GitHub" onChange={this.props.github} />
                    <textarea placeholder="Description" onChange={this.props.description} />
                    <label id="image-label">
                        Choose a profile picture: 
                        <input type="file" id="image-input" placeholder="Upload an image of you" onChange={this.props.image} />
                    </label>
                </form>
                <h1>EXPERIENCE</h1>
                {this.props.experiences.map((experience, i) => {
                    return <ExperienceInput
                        key={i}
                        experience={experience}
                        onExperienceSubmit={this.props.onExperienceSubmit}
                        onRemoveExperience={this.props.onRemoveExperience}
                        index={i}
                    />
                })}
                <button className="add-button" onClick={this.props.onAddExperience}>Add Experience</button>
            </div>
        );
    }
}