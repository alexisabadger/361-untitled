import React from "react";

// This is a simple FAQ component that displays a list of questions and answers
// The component receives an array of FAQ items as props

// Define the FAQItem type
type FAQItem = {
  question: string;
  answer: string;
};

// Define the FAQProps type
type FAQProps = {
  faqItems: FAQItem[];
};

// Define the FAQ component
const FAQ: React.FC<FAQProps> = ({ faqItems }) => {
  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {faqItems.map((item, index) => (
        <div key={index}>
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

// Export the FAQ component
export default FAQ;