import 'babel-polyfill'

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/'

import './assets/scss/main.scss'

/*Landing Page*/
import Landing from './pages/landing/'

/* pages */
import SanJose from './pages/sanJose/'
import Alajuela from './pages/alajuela/'
import Cartago from './pages/cartago/'
import Heredia from './pages/heredia/'
import Guanacaste from './pages/guanacaste/'
import Puntarenas from './pages/puntarenas/'
import Limon from './pages/limon/'
import ParkDetail from './pages/parkdetail/'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/san' component={SanJose} />
              <Route path='/alajuela' component={Alajuela} />
              <Route path='/cartago' component={Cartago} />
              <Route path='/heredia' component={Heredia} />
              <Route path='/guanacaste' component={Guanacaste} />
              <Route path='/puntarenas' component={Puntarenas} />
              <Route path='/limon' component={Limon} />
              <Route path='/park/:id' component={ParkDetail} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App
