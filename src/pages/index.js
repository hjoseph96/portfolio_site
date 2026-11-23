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
import '../components/unity-stage.scss';


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
    // Phones and tablets get a build with textures capped at 512px: iOS WebGL
    // can't use the desktop DXT textures, so it expands them in memory and the
    // tab gets killed.
    const ua = navigator.userAgent;
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(ua) ||
      (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1); // iPadOS
    const buildConfig = isMobile ? 'test.mobile.json' : 'test.json';

    const unityContent = new UnityContent(
      `${window.location.origin}/Game/Build/${buildConfig}`,
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

        <div className="unity-stage">
          {this.state.displayUnityCanvas && (
            <Unity unityContent={this.state.unityContent} />
          )}
        </div>

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
