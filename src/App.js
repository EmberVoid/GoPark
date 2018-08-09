import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './assets/scss/main.scss'

import Header from './components/header/'
import FullBleed from './components/fullbleed';
import Infocard from './components/infocard';
import Articlepark from './components/articlepark';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          {/*<Infocard />
          <FullBleed />*/}
          <Articlepark />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
