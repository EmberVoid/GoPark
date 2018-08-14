import React from 'react'

import './articlepark.scss'

const Articlepark = ({ parks, article }) => {
  
  return (
    <div className={'animated bounceInUp'}>
      <article data-name="article-full-bleed-background">
        <div className={"cf"}>
          <div className={"fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times mw7-l tc articlelefttext"}>
            <div className={"ph3 tl"}>
              <a className={"f6 grow no-underline br-pill ph3 pv2 mb2"} href="#0"><img onClick={article} src="https://i.imgur.com/f6VVaZP.png" alt="Go Back"/></a>
            </div>
            <header className={"bb b--black-70 pv4"}>
              <h3 className={"f2 fw7 ttu tracked lh-title mt0 mb3 avenir buttonest"}>Los Quetzalessss</h3>
              <h4 className={"f3 fw4 i lh-title mt0 "}>Su origen data de 1984, cuando se le otorgó la categoría de Zona Protectora. Posteriormente, el 5 de junio de 2002 se declaró como Parque nacional La Cangreja.</h4>
            </header>
            <section className={"pt5 pb4"}>
              <p className={"times lh-copy  f4 mt0"}>
                La Cangreja forma parte del Sistema Nacional de Áreas de Conservación (SINAC).  Ademas contiene las últimas partes naturales inalteradas de toda la región de Puriscal, también es la principal fuente de abastecimiento de agua para algunas comunidades aledañas (Mastatal, San Vicente, San Miguel y el territorio indígena de Zapatón, entre otras) y sirve para estabilizar el clima local. Aquí se encuentran los ríos Negro y la Quebrada Grande. El Parque también cuenta con espectaculares cataratas y posee dos zonas de vida: bosque muy húmedo transición a premontano y bosque pluvial premontano.
        </p>
            </section>
            <div className={"ph3 "}>
              <a className={"f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue"} href="#0">Llevame</a>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Articlepark