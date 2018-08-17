import React from 'react'

import FullBleed from '../../components/fullbleed'
import ParkDetail from '../../containers/parkdetail'

const cartago = () => {
  return (
    <div>
          <FullBleed />
          <ParkDetail province ='Cartago'/>
    </div>
  )
}

export default cartago