import React from 'react'

import './header.scss'
import logo from './logo.png'

const Header = (props) => {
  return (
    <nav className={"db dt-l w-100 border-box pa2 ph5-l  bg-white-90"}>
      <a className={"db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l"} href="home" title="Go Park">
        <img src={logo} className={"br-100 ba h3 w3 dib"} alt="Site Name" />
      </a>
      <div className={"db dtc-l v-mid w-100 w-75-l tc tr-l"}>
        <a className={"link dim gray f6 f5-ns dib mr3 grow ph3"} href="San José" title="San José">San José</a>
        <a className={"link dim gray f6 f5-ns dib mr3 grow ph3"} href="Alajuela" title="Alajuela">Alajuela</a>
        <a className={"link dim gray f6 f5-ns dib mr3 grow ph3"} href="Cartago" title="Cartago">Cartago</a>
        <a className={"link dim gray f6 f5-ns dib mr3 grow ph3"} href="Heredia" title="Heredia">Heredia</a>
        <a className={"link dim gray f6 f5-ns dib mr3 grow ph3"} href="Guanacaster" title="Guanacaste">Guanacaste</a>
        <a className={"link dim gray f6 f5-ns dib mr3 grow ph3"} href="Puntarenas" title="Puntarenas">Puntarenas</a>
        <a className={"link dim gray f6 f5-ns dib grow ph3"} href="Limon" title="Limon">Limon</a>
      </div>
    </nav>
  )
}

export default Header
