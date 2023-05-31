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
      question: 'Biznbes model',
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
    
    // Add more FAQ items as needed
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderQuestions = () => {
    return faqData.map((item, index) => (
      <div className="content">
        <div className="header-title">
          <h1 className='header-title-title'>"Biznes Kouching: Tizimlashtirish va xodimlarni boshqarish" dasturi</h1>
        </div>
        <div key={index} className='faq-item'>
          <Accordion className='main-content' expanded={activeIndex === index} onChange={() => handleClick(index)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel-${index}-content`}
              id={`panel-${index}-header`}
            >
              <Typography className={`faq-question ${activeIndex === index ? 'active' : ''}`}>
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.answers.map((answer) => (
                <Typography className='faq-answer' key={answer.id}>{answer.content}</Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    ));
  };

  return <div className="faq-container">{renderQuestions()}</div>;
};

export default Faq;
