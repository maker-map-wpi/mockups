import React from 'react'
import { Container, Segment, Image} from "semantic-ui-react"
import SearchBar from './SearchBar'

const divStyle= {
  backgroundImage: "url('https://structure.arjungandhi.com/images/random/wpicampus.png')",
  backgroundColor: '#cccccc',
  height:'100vh',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
  };

export default class ToolSearch extends React.Component {

  constructor(props) {
    //make a blank articles list in state
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (<div>
      <Container basic fluid>
        <div style={divStyle}>
        <SearchBar />
        <Segment basic>
        <Container text>
        
        </Container>
        </Segment>
        </div>
      </Container>
    </div>)
  }
}
