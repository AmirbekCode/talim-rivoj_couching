import React from 'react';
import Meeting from '../../../assets/CeoFileImg/meeting.png';
import Ceo from '../../../assets/CeoFileImg/ceo.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../info/info.css'

function Info() {
  const infoData = [
    {
      img: Meeting,
      text: 'Ibraxim Gulyamov bilan tushlik 6 marta (kompaniya hisobidan)',
    },
    {
      img: Ceo,
      text: 'Ibraxim Gulyamov bilan individual konsultatsiya (1 marta 30 minut, onlayn/oflayn)',
    },
  ];

  return (
    <div className="info-card">
      {infoData.map((item, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia sx={{
            objectFit: 'cover',
            objectPosition: 'center',
          }} component="img" height="140" image={item.img} alt="Image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Info;
