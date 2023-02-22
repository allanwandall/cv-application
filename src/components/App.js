import '../styles/App.css';
import React, { Component } from 'react';
import Header from './Header';
import InputContainer from './InputContainer';
import CvPreview from './CvPreview';
import Footer from './Footer';
import arrowIcon from '../assets/swap-horizontal-bold.svg';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 50,
      first: '',
      last: '',
      title: '',
      address: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      description: '',
      image: null,
      experience: {},
      experiences: [],

    }

    this.onDragStart = this.onDragStart.bind(this);
    this.onDragging = this.onDragging.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.handleFirstChange = this.handleFirstChange.bind(this);
    this.handleLastChange = this.handleLastChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleLinkedinChange = this.handleLinkedinChange.bind(this);
    this.handleGithubChange = this.handleGithubChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleExperienceSubmit = this.handleExperienceSubmit.bind(this);
  }

  onDragStart(event) {
    this.dragging = true;
    this.startX = event.clientX;
  }

  onDragging(event) {
    if (!this.dragging) return;

    const dx = event.clientX - this.startX;
    const newWidth = this.state.width + (dx / window.innerWidth) * 100;

    this.setState({
      width: newWidth
    });

    this.startX = event.clientX;
  }

  onDragEnd(event) {
    this.dragging = false;
  }

  handleFirstChange(event) {
    this.setState({ first: event.target.value });
  }

  handleLastChange(event) {
    this.setState({last: event.target.value});
  }
  
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }

  handlePhoneChange(event) {
    this.setState({phone: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleLinkedinChange(event) {
    this.setState({linkedin: event.target.value});
  }

  handleGithubChange(event) {
    this.setState({github: event.target.value})
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  handleImageUpload(event) {
    console.log(event.target.files[0]);
    this.setState({image: event.target.files[0]})
  }

  handleExperienceSubmit = data => {
    this.setState({ experience: data });
  };
  

  render() {
    return (
      <div className='container'
        onMouseUp={this.onDragEnd}
        onMouseMove={this.onDragging}>
        <Header />
        <div className='middle-container'>
      
          <InputContainer
            newWidth={this.state.width}
            first={this.handleFirstChange}
            last={this.handleLastChange}
            title={this.handleTitleChange}
            address={this.handleAddressChange}
            phone={this.handlePhoneChange}
            email={this.handleEmailChange}
            linkedin={this.handleLinkedinChange}
            github={this.handleGithubChange}
            description={this.handleDescriptionChange}
            image={this.handleImageUpload}
            onFormSubmit={this.handleExperienceSubmit}
            />
          <div className='drag-line'>
            <div className='circle'
              onMouseDown={this.onDragStart}>
              <img src={arrowIcon}/>    
            </div>
          </div>
          <CvPreview
            newWidth={100 - this.state.width} 
            first={this.state.first}
            last={this.state.last}
            title={this.state.title}
            address={this.state.address}
            phone={this.state.phone}
            email={this.state.email}
            linkedin={this.state.linkedin}
            github={this.state.github}
            description={this.state.description}
            image={this.state.image}
            experiences={this.state.experience}
            />
        </div>
        <Footer />
      </div>
    );
  }
}



export default App;
