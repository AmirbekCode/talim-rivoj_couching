import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import '../FAQ/faq.css';

const Faq = () => {
  const faqData = [
    {
      question: 'Biznes model',
      answers: [
        {
          id: 1,
          content: 'Biznes modelning tuzilishi',
        },
        {
          id: 2,
          content: 'Biznes modelni tuzish qadamlari',
        },
        {
          id: 3,
          content: 'Faoliyati davomida kimlar bilan hamkorlik qiladi',
        },
        {
          id: 4,
          content: 'Bozorga qanday taklif beroladi qanday xizmat korsatiladi',
        },
        {
          id: 5,
          content: 'Qaysi sotuv kanallaridan foydalaniladi',
        },
      ],
    },

    {
      question: 'Tashkiliy Tuzilma',
      answers: [
        {
          id: 1,
          content: 'Tashkiliy tuzilmani tuzish',
        },
        {
          id: 2,
          content: 'Tashkiliy tuzilmani korxonaga joriy qilish usullari',
        },
        {
          id: 3,
          content: 'Funksiya',
        },
        {
          id: 4,
          content: 'YAQM',
        },
        {
          id: 5,
          content: 'Tezkor oqim',
        },
      ],
    },

    {
      question: 'Biznes jarayon',
      answers: [
        {
          id: 1,
          content: 'Biznesda qanday jarayonlar bor',
        },
        {
          id: 2,
          content: 'Biznes jarayonlarni tuzish',
        },
        {
          id: 3,
          content: 'Biznes jarayonlarni xodimlarga o‘rgatish va shu bo‘yicha ishlarni tashkillashtirish',
        },
        {
          id: 4,
          content: 'Bosh biznes jarayonlar',
        },
        {
          id: 5,
          content: 'Asosiy biznes jarayonlar',
        },
      ],
    },

    {
      question: 'Tashkiliy Tuzilma',
      answers: [
        {
          id: 1,
          content: 'Tashkiliy tuzilmani tuzish',
        },
        {
          id: 2,
          content: 'Tashkiliy tuzilmani korxonaga joriy qilish usullari',
        },
        {
          id: 3,
          content: 'Funksiya',
        },
        {
          id: 4,
          content: 'YAQM',
        },
        {
          id: 5,
          content: 'Tezkor oqim',
        },
      ],
    },


    // Add more FAQ items as needed
  ];



  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderQuestions = () => {
    return (
      <div className='content'>
        <div className="header-title">
          <h1 className='header-tit'>Biznes Kouching: Tizimlashtirish va xodimlarni boshqarish" dasturi</h1>
        </div>
        {faqData.map((item, index) => (
          <div key={index} className='faq-item'>
            <div className="accordion">
              <Accordion sx={{ background: '#0C0C70', margin: '10px' }} className='main-content' expanded={activeIndex === index} onChange={() => handleClick(index)}>
                <AccordionSummary
                  className='faq-bg'
                  expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}
                  aria-controls={`panel-${index}-content`}
                  id={`panel-${index}-header`}
                >
                  <Typography className={`faq-question ${activeIndex === index ? 'active' : ''}`}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: '#0C0C70' }} >
                  {item.answers.map((answer) => (
                    <Typography sx={{ background: '#0C0C70', color: '#fff' }} className='faq-answer' key={answer.id}>{answer.content}</Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            </div>
          </div>

        ))}
      </div>
    )
  };

  return <div className="faq-container">{renderQuestions()}</div>;
};

export default Faq;
