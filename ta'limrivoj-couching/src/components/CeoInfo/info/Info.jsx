import React from 'react';
import Ceo from '../../../assets/CeoFileImg/ceo.png';
import '../info/info.css';

function Info() {
  const infoData = [
    {
      img: Ceo,
      text: 'Saidabdulla Madaminov bilan tushlik 6 marta (kompaniya hisobidan)',
    },
    {
      img: Ceo,
      text: 'Saidabdulla Madaminov bilan individual konsultatsiya (1 marta 30 minut, onlayn/oflayn)',
    },
  ];

  return (
    <div className="info-card">
      {infoData.map((item, index) => (
        <div key={index} className="image-card">
          <div className="bg-img" style={{ backgroundImage: `url(${item.img})`, borderRadius: '50px' }}></div>
          <div className="info-content">
            <div className="info-text">
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Info;
