import React from "react"
import { Router } from '@reach/router';
import Unity, { UnityContent } from "react-unity-webgl";
import { Helmet } from 'react-helmet';

import 'bulma/bulma.sass';
import 'font-awesome/css/font-awesome.css';

import Navbar from "../components/navbar"
import Resume from '../components/resume';
import Contact from '../components/contact';


class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unityContent: null,
      displayUnityCanvas: false
    };
  }

  componentDidMount() {

    this.setState({
      unityContent: new UnityContent(
        `${window.location.origin}/Game/Build/test.json`,
        `${window.location.origin}/Game/Build/UnityLoader.js`
      ),
      displayUnityCanvas: true
    });
  }

  render() {
    return (
      <div style={{ height: '100vh'}}>
        <Helmet>
            <title>Herbert Joseph</title>
            <meta name="description" content="Herbert Joseph - Senior Software Engineer - Rubyist" />
        </Helmet>

        {this.state.displayUnityCanvas && (
          <Unity unityContent={this.state.unityContent} />
        )}

        <Navbar />

        <Router>
          <Resume  path="resume" />
          <Contact path="contact" />
        </Router>
      </div>
    )
  }

}

export default Index
