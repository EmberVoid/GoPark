import React from 'react'
import { string } from 'prop-types'

import { parkTypeDefault } from '../../proptypes/'
import ParkDetail from '../../components/parkdetail/'

const API = 'http://localhost:3000/parks'

class ParkListContainer extends React.Component {
  static propTypes = {
    id: string
  }

  static defaultProps = {
    id: ''
  }

  state = {
    park: parkTypeDefault,
    isLoading: false,
    error: null
  }

  async componentDidMount () {
    const {id} = this.props
    this.setState({ isLoading: true })

    try {
      const response = await fetch(`${API}/${id}`)
      const data = await response.json()

      this.setState({
        park: data,
        isLoading: false
      })
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      })
    }
  }

  render () {
    const { park, isLoading, error } = this.state

    return (
      <ul>
        {
          isLoading
            ? <p>Loading...</p>
            : error
              ? <p>Error...</p>
              : <ParkDetail park={park} />
        }
      </ul>
    )
  }
}

export default ParkListContainer