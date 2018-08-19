import React from 'react'

import LandingPage from '../../components/landingpage'
import LandingPageTitle from '../../components/landingpagetitle'
import LandingPageNext from '../../components/landingpagenext'

class Landing extends React.Component {
  render() {
    return (
      <div>
        <LandingPageTitle />
        <LandingPage />
        <LandingPageNext />
      </div >
    )
  }
}

export default Landing