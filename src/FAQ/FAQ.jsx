import React, { useState } from 'react';
import './FAQ.css';
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: 'Are these many questions enough for clearing any DSA round?',
      answer: 'They cover all concepts, so conceptwise you will be covered. After that, it depends on your skill set, if you can tackle a new problem on the same concept. If you want to practice more problems...',
    },
    {
      question: 'Is this a language specific course??',
      answer: 'EPICC has made sure that the lectures are not language based, he teaches you the alogrithms. Post that he writes the pseudocodes, which are language independent. Loops and data structures are similar in every language, so you can always have the articles open on a parallel tab to check the code for C++, Java, Python or Javascript.',
    },
    {
      question: 'What if the codes are not available in the language I code in?',
      answer: 'Open bard/chatGPT, and paste our C++ or any language code, and ask him to convert it into language of your choice, and he will do it for you.',
    },
    {
      question: 'Do I need to pay anything?',
      answer: 'As of today, every thing on EPICC is free, however we will be happy if you give us a shoutout if the content helps you. That will mean a world to us',
    },
    {
      question: ' What is an algorithm?',
      answer: 'An algorithm is a step-by-step procedure or set of rules designed to solve a specific problem or perform a particular task. It is a fundamental concept in computer science and programming',
    },
    // Add more FAQ items as needed
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((faq, index) => (
          <li key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
