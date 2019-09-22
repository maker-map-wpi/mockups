import React from 'react'
import { Container, Segment, Image, Search } from "semantic-ui-react"
import SearchBar from './SearchBar';
import ReactMapGL from 'react-map-gl';


const mapboxToken = "pk.eyJ1IjoibWFrZXJtYXB3cGkiLCJhIjoiY2swdTltbzh3MGx5cDNjcjFwZ3VzazMyOSJ9.1v6fPlHkiBC92yjc-rV6iQ"

const tools = [
  {
    title: 'bandsaw',
    locations: ['foise', 'washburn', 'higgins', 'goddard']
  },
  {
    title: 'cnc mill',
    locations: ['washburn']
  },
  {
    title: 'lathe',
    locations: ['washburn', 'higgins']
  }
]

const buildings = {
  foise: {
    x: 320,
    y: 420,
    hours: '06:00 to 24:00'
  },
  washburn: {
    x: 320,
    y: 420,
    hours: '08:00 to 18:00'
  },
  higgins: {
    x: 320,
    y: 420,
    hours: '08:00 to 16:00'
  },
  goddard: {
    x: 320,
    y: 420,
    hours: '08:00 to 16:00'
  }

}

export default class ToolSearch extends React.Component {

  constructor(props) {
    //make a blank articles list in state
    super(props)
    this.state = {
      viewport: {
        width: '100%',
        height: '100vh',
        latitude: 42.2736,
        longitude: -71.8063,
        zoom: 16
      },
      highlights: {}
    }
  }

  onResultSelect(event, { result }) {

    this.setState({
      highlights: result.locations.map(loc => [buildings[loc]['x'], buildings[loc]['y']])
    })

    console.log(this.state)
  }

  componentDidMount() {
  }

  render() {
    return (<div>
      <Container fluid>
        <div>
          <ReactMapGL
            mapboxApiAccessToken={mapboxToken}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({ viewport })}
            mapStyle={'mapbox://styles/mapbox/streets-v9'}
          >
            <SearchBar
              data={tools}
              onResultSelect={this.onResultSelect.bind(this)}
            />
          </ReactMapGL>
        </div>
      </Container>
    </div>
    )
  }
}
