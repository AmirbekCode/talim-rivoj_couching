import React from 'react'
import './main.css'
import Owner from '../../assets/images/data.png'


export default function Main() {
  return (
    <div className='Main'>
      <div className="container">
        <div className="main-infos">
          <div className="location">
            <div className="logo">

            </div>
            <div className="location_name">
              QAYERDA <br />
              Urganch Shahar
            </div>
          </div>
          <h4 className="main-subtitle">
            Biznes kouching
          </h4>
          <h2 className="main-title">
            TIZIMLASHTIRISH <br />
            VA XODIMLARNI <br />
            BOSHQARISH
          </h2>
          <span className="subdesc">
            Kichik va o'rta biznes egalari uchun <br />
            1 oylik mualliflik dasturi
          </span>
          <button className='button-main'>
            1 oylik mualliflik dasturi
          </button>
        </div>
        <div className="photo-owner">

        </div>
      </div>
    </div>
  )
}
