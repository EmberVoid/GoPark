import React from 'react'

import './infocard.scss'


const Infocard = ({ title, imagelink }) => {
  return (
    <div>
      <div className={"container"}>
        <div className={"title"}>
          <p className={"code"}>Los Quetzales</p>
        </div>
      </div>

      <div className={"container"}>

        <div className={"message br3 br--top"}>
          <div className={"row between-xs"}>
            <div className={"col-xs-2"}>
              <div className={"box pv2"}>
                <p className={"pointer"}>Más Información</p>
              </div>
            </div>
            <div className={"col-xs-2"}>
              <div className={"box pv2"}>
                <p className={"pointer"}>Ver Todos</p>
              </div>
            </div>
            <div className={"col-xs-2"}>
              <div className={"box pv2"}>
                <div className={"row"}>
                  <div className={"col-xs"}>
                    <div className={"box dib ph3"}>
                      <p className={"pointer"}>Anterior</p>
                    </div>
                    <div className={"box dib"}>|</div>
                    <div className={"box dib ph3"}>
                      <p className={"pointer"}>Siguiente</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Infocard
