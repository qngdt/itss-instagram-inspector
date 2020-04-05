import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './app.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchLayout from './components/form';
import Logo from './components/logo';
import Bio from './components/bio';
import ImageSlider from './components/slider';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      instagramID: '',
      instagramData: {},
      submitted: false
    }
  }

  fetchData = () => {
    const { instagramID } = this.state
    fetch(`https://www.instagram.com/${instagramID}/?__a=1`)
      .then(response => response.json())
      .then((data) => {
        const instagramData = data.graphql.user;
        this.setState({
          instagramData,
          submitted: true
        });
      })
      .catch((error) => {
        this.setState({
          instagramData: {},
          submitted: true
        })
      })

  }

  onChangeInput = (instaID) => {
    this.setState({
      instagramID: instaID
    })
  }

  render() {
    const { instagramData, submitted } = this.state
    return (
      <div className="App">
        <div className="main d-flex flex-column align-items-center justify-content-center">
          <h1>
            Instagram Inpsector
          </h1>
          <Logo />
          <SearchLayout onChange={this.onChangeInput} onSubmit={this.fetchData} />
          {instagramData && submitted ? <Bio submitted={submitted} data={instagramData} /> : ''}
          {instagramData.full_name ? <ImageSlider data={instagramData} /> : ''}
        </div>
      </div>
    );
  }
}

export default App;
