import React from "react"

import Layout from './layout';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <Layout>
        <h1>Contact</h1>

        <h1>I am reachable at <b>techniquea2z@gmail.com</b></h1>
      </Layout>
    )
  }

}

export default Contact
