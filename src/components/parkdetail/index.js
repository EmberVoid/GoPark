import React from 'react'

import './parkdetail.scss'

const Parkdetail = ({ park }) => {
  let fullbleedBackground = {
    background: 'url(' + park.imagelink + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    minHeight: '100vh',
  };

  return (
    <li className={'animated bounceInUp'}>
      <article data-name="article-full-bleed-background">
        <div style={fullbleedBackground}>
          <div className={"fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times mw7-l tc articlelefttext"}>
            <div className={"ph3 tl"}>
            </div>
            <header className={"bb bt b--black-70 pv4"}>
              <h3 className={"f2 fw7 ttu tracked lh-title mt0 mb3 avenir buttonest"}>{park.title}</h3>
              <h4 className={"f3 fw4 i lh-title mt0 "}>{park.fact}</h4>
            </header>
            <section className={"pt5 pb4"}>
              <p className={"times lh-copy  f4 mt0"}>{park.info}</p>
            </section>
            <div className={"ph3 "}>
              <a className={"f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue"} href={park.maplink} target="_blank">
                Llevame
              </a>
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Parkdetail
