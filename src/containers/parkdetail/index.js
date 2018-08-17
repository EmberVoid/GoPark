import React from 'react'
import { map } from 'ramda'
import Parkdetail from '../../components/parkdetail/'
import LoadingScreen from '../../components/loadingscreen/'

const API = 'http://localhost:3000/parks'

class ParkDetailContainer extends React.Component {
  state = {
    parks: [],
    isLoading: false,
    error: null,
  }

  async componentWillMount() {
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
  getObjects = (d, f) => d.filter(o => Object.keys(o).some(k => o[k].includes(f)));

  getParking(parks, province) {
    let parksPerProvince;
    parksPerProvince = this.getObjects(parks, province)
    return parksPerProvince
  }

  render() {
    const { parks, isLoading, error } = this.state

    let Parksfiltered
    Parksfiltered = this.getParking(parks, this.props.province)
    console.log(this.state.province)
    return (
      <ul>
        {
          isLoading
            ? <LoadingScreen />
            : error
              ? <p>Error...</p>
              : (
                map(this.parkItemCreator, Parksfiltered)
              )
        }
      </ul>
    )
  }
}

export default ParkDetailContainer
