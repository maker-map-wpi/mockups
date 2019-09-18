import React from 'react'
import {Search ,Image } from "semantic-ui-react"

const divStyle= {
  padding:'20px'
};

export default class Example extends React.Component {

  constructor(props) {
    //make a blank articles list in state
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (<div style={divStyle}>
      <Search/>
    </div>)
  }
}
