import React from "react"
import { Router } from '@reach/router';
import Unity, { UnityContent } from "react-unity-webgl";
import { Helmet } from 'react-helmet';

import 'bulma/bulma.sass';
import 'font-awesome/css/font-awesome.css';

import Navbar from "../components/navbar"
import Resume from '../components/resume';
import Contact from '../components/contact';
import UnityLoader from '../components/unity-loader';


class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unityContent: null,
      displayUnityCanvas: false,
      unityProgress: 0,
      unityLoaded: false
    };
  }

  componentDidMount() {
    const unityContent = new UnityContent(
      `${window.location.origin}/Game/Build/test.json`,
      `${window.location.origin}/Game/Build/UnityLoader.js`
    );

    unityContent.on("progress", progression => {
      this.setState({ unityProgress: progression });
    });

    unityContent.on("loaded", () => {
      this.setState({ unityProgress: 1, unityLoaded: true });
    });

    this.setState({
      unityContent,
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

        <UnityLoader
          progress={this.state.unityProgress}
          done={this.state.unityLoaded}
        />

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
