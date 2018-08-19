import React from 'react'
import Tilt from 'react-tilt'

import './landingpage.scss'


const Landingpage = () => {
    return (
        <Tilt className="Tilt Aligner animated fadeIn" options={{ max: 25 }}>
            <img src="https://i.imgur.com/olDyqIE.png" alt="forest" className={'tilt-img mw-100'}/>
        </Tilt>
    )
}

export default Landingpage
