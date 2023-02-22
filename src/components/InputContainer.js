import React, { Component } from "react";
import '../styles/InputContainer.css';

export default class InputContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            employer: '',
            start: '',
            finish: '',
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const { title, employer, start, finish } = this.state;

        this.props.onFormSubmit({ title, employer, start, finish });
    };

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
                <form className="experience-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Job Title" value={this.state.title} onChange={this.handleInputChange} />
                    <input type="text" name="employer" placeholder="Employer" value={this.state.employer} onChange={this.handleInputChange} />
                    <label>
                        Start date:
                        <input type="date" name="start" value={this.state.start} onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Finish date:
                        <input type="date" name="finish" value={this.state.finish} onChange={this.handleInputChange} />
                    </label>
                    <textarea placeholder="Describe your experience" value={this.state.description} onChange={this.handleInputChange} />

                    <button type="submit">Submit</button>
                </form>
                <button className="add-button">Add Experience</button>
            </div>
        );
    }
}