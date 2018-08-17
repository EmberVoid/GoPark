import React from 'react'

import FullBleed from '../../components/fullbleed'
import ParkDetail from '../../containers/parkdetail'

class SanJose extends React.Component {
  render() {
    return (
      <div>
        <FullBleed />
        <ParkDetail province ='San José'/>
      </div >
    )
  }
}

export default SanJose