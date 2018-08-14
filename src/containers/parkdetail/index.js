import React from 'react'
import { map, filter, contains } from 'ramda'
import Parkdetail from '../../components/parkdetail/'

const API = 'http://localhost:3000/parks'

class ParkDetailContainer extends React.Component {
  state = {
    parks: [],
    isLoading: false,
    error: null,
  }

  async componentDidMount() {
    this.setState({ isLoading: true })

    try {
      const response = await fetch(API)
      const data = await response.json()

      this.setState({
        parks: data,
        isLoading: false
      })
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      })
    }
  }

  parkItemCreator = park => <Parkdetail key={park.id} park={park} />

  render() {
    const { parks, isLoading, error } = this.state

    return (
      <ul>
        {
          isLoading
            ? <p>Loading...</p>
            : error
              ? <p>Error...</p>
              : (
                map(this.parkItemCreator, parks),
                console.log(parks)
              )
        }
      </ul>
    )
  }
}

export default ParkDetailContainer
