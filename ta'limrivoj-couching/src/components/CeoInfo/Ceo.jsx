import React from 'react';
import '../CeoInfo/ceo.css';
import Teach from '../../assets/CeoFileImg/teach.png';
import Info from './info/Info';

function Ceo() {
  const CeoData = [
    {
      img: Teach,
      title: 'XODIMLARNI SAMARALI BOSHQARISH KURSI',
      description: "SPIKER: Dildora Tursunova - 15 yillik xodimlarni boshqarish bo'yicha tajribaga ega mutahassis, Perfect Consulting Group kompaniyasi bosh direktori",
      buttonText: "Koproq malumot olish"
    }
  ];

  const data = CeoData[0];

  return (
    <div className="main">
      <div className='card'>
        <div className="imgBx">
          <img src={data.img} alt="Teach" />
        </div>
        <div className="card-content">
          <h2 className='card-title'>{data.title}</h2>
          <p className='card-descrition'>{data.description}</p>
          <button className="card-button">{data.buttonText}</button>
        </div>
      </div>
      <Info />
    </div>
  );
}

export default Ceo;
