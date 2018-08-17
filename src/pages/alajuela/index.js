import React from 'react'

import FullBleed from '../../components/fullbleed'
import ParkDetail from '../../containers/parkdetail'

class Alajuela extends React.Component {
  render() {
    return (
      <div>
        <FullBleed />
        <ParkDetail province ='Alajuela'/>
      </div >
    )
  }
}

export default Alajuela