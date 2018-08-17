import React from 'react'

import FullBleed from '../../components/fullbleed'
import ParkDetail from '../../containers/parkdetail'

const guanacaste = () => {
  return (
    <div>
          <FullBleed />
          <ParkDetail province ='Guanacaste'/>
    </div>
  )
}

export default guanacaste