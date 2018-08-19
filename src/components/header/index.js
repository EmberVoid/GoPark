import React from 'react'
import {Link, NavLink } from 'react-router-dom'

import './header.scss'
import logo from './logo.png'

const Header = () => {
  return (
    <nav className={"db dt-l w-100 border-box pa2 ph5-l bg-white navBarGoPark"}>
      <span className={"db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"} title="Go Park">
        <Link to='/'>
          <img src={logo} className={"br-100 ba h3 w3 dib"} alt="Site Name" />
        </Link>
      </span>
      <ul className={"db dtc-l v-mid w-100 w-75-l tc tr-l"}>
        <li className={"link dim f6 f5-ns dib mr3 grow ph3 linkActive"} title="San José"><NavLink to='/san' className={'gray'} activeClassName='is-active1'>San José</NavLink ></li>
        <li className={"link dim f6 f5-ns dib mr3 grow ph3 linkActive"} title="Alajuela"><NavLink to='/alajuela' className={'gray'} activeClassName='is-active2'>Alajuela</NavLink ></li>
        <li className={"link dim f6 f5-ns dib mr3 grow ph3 linkActive"} title="Cartago"><NavLink to='/cartago' className={'gray'} activeClassName='is-active3'>Cartago</NavLink ></li>
        <li className={"link dim f6 f5-ns dib mr3 grow ph3 linkActive"} title="Heredia"><NavLink to='/heredia' className={'gray'} activeClassName='is-active4'>Heredia</NavLink ></li>
        <li className={"link dim f6 f5-ns dib mr3 grow ph3 linkActive"} title="Guanacaste"><NavLink to='/guanacaste' className={'gray'} activeClassName='is-active1'>Guanacaste</NavLink ></li>
        <li className={"link dim f6 f5-ns dib mr3 grow ph3 linkActive"} title="Puntarenas"><NavLink to='/puntarenas' className={'gray'} activeClassName='is-active2'>Puntarenas</NavLink ></li>
        <li className={"link dim f6 f5-ns dib grow ph3 linkActive"} title="Limon"><NavLink to='/limon' className={'gray'} activeClassName='is-active3'>Limon</NavLink ></li>
      </ul>
    </nav>
  )
}

export default Header
