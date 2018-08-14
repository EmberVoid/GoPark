import React from 'react'
import {Link} from 'react-router-dom'

import './header.scss'
import logo from './logo.png'

const Header = (props) => {
  return (
    <nav className={"db dt-l w-100 border-box pa2 ph5-l  bg-white"}>
      <span className={"db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"} title="Go Park">
        <Link to='/'>
          <img src={logo} className={"br-100 ba h3 w3 dib"} alt="Site Name" />
        </Link>
      </span>
      <ul className={"db dtc-l v-mid w-100 w-75-l tc tr-l"}>
        <li className={"link dim f6 f5-ns dib mr3 grow ph3"} title="San José"><Link to='/' className={'gray'}>San José</Link></li>
        <li className={"link dim f6 f5-ns dib mr3 grow ph3"} title="Alajuela"><Link to='/alajuela' className={'gray'}>Alajuela</Link></li>
        <li className={"link dim f6 f5-ns dib mr3 grow ph3"} title="Cartago"><Link to='/cartago' className={'gray'}>Cartago</Link></li>
        <li className={"link dim f6 f5-ns dib mr3 grow ph3"} title="Heredia"><Link to='/heredia' className={'gray'}>Heredia</Link></li>
        <li className={"link dim f6 f5-ns dib mr3 grow ph3"} title="Guanacaste"><Link to='/guanacaste' className={'gray'}>Guanacaste</Link></li>
        <li className={"link dim f6 f5-ns dib mr3 grow ph3"} title="Puntarenas"><Link to='/puntarenas' className={'gray'}>Puntarenas</Link></li>
        <li className={"link dim f6 f5-ns dib grow ph3"} title="Limon"><Link to='/limon' className={'gray'}>Limon</Link></li>
      </ul>
    </nav>
  )
}

export default Header
