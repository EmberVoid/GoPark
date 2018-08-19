import React from 'react'
import Tilt from 'react-tilt'

import './landingpage.scss'
import './landingpage.js'


const Landingpage = () => {
    return (
        <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 250, width: 250 }} >
            <div className="Tilt-inner">
                <div className={'tilt-img'}></div>
            </div>
        </Tilt>

    )
}

export default Landingpage
