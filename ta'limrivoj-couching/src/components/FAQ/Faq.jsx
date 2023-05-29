import React from 'react'

export default function Faq() {
  return (
    <div>
      <div className="container">
        <h1>"Biznes Kouching: Tizimlashtirish va xodimlarni boshqarish" dasturi  </h1>
        <div className="accordion">
            <div className="accordion-item">
                <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">Biznes model</span><span className='icon' aria-hidden="true"></span></button>
                <div className="accordion-content">
                  <ul>
                    <li>Biznes modelning tuzilishi</li>
                    <li>Biznes modelni tuzish qadamlari</li>
                    <li>Biznes modelni tuzish va qo‘llash mijoz kim ular bilan qanday munosabat ornatadi asosiy xarajatlari qaysilar va ularni qanday tashkillashtiradi</li>
                    <li>Faoliyati davomida kimlar bilan hamkorlik qiladi</li>
                    <li>Bozorga qanday taklif beroladi qanday xizmat ko‘rsatiladi</li>
                    <li>Qaysi sotuv kanallaridan foydalaniladi</li>
                    <li>Pul oqimlari va daromadlar qayerdan tashkillashtiriladi</li>
                  </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
