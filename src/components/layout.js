import React from "react"
import "./layout.scss"


class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className='layout'>
        {this.props.children}
      </div>
    )
  }

}

export default Layout
