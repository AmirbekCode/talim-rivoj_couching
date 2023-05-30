import React, { useState } from 'react';
import '../FAQ/faq.css'; // Import the CSS file for styling

const Faq = ({ faqData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderQuestions = () => {
    return faqData.map((item, index) => (
      <div key={index} className="faq-item">
        <div
          className={`faq-question ${activeIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          {item.question}
          <span className="faq-icon">
            {activeIndex === index ? '-' : '+'}
          </span>
        </div>
        {activeIndex === index && (
          <div className="faq-answer">{item.answer}</div>
        )}
      </div>
    ));
  };

  return <div className="faq-container">{renderQuestions()}</div>;
};

export default Faq;
