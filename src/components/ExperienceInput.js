import React, { Component } from "react";

export default class ExperienceInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            employer: '',
            start: '',
            finish: '',
            description: ''
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

        const { title, employer, start, finish, description } = this.state;

        this.props.onExperienceSubmit({ title, employer, start, finish, description }, this.props.index);
    };

    render() {
        return (
            <div className="experience-input">
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
                    <textarea placeholder="Describe your experience" name="description" value={this.state.description} onChange={this.handleInputChange} />
    
                    <button type="submit" className="submit-button">Submit</button>
                    <button type="button" className="remove-button" onClick={() => {this.props.onRemoveExperience(this.props.index)}}>Remove Experience</button>
                </form>
                <div className="horizontal-line"/>
            </div>
        );
    }

    
}