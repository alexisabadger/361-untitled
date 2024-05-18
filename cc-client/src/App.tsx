import React from 'react';
import './App.css';
import SearchField from './components/search/SearchField';
import Table from './components/table/Table';
import FAQ from './components/faq/FAQ';

function App() {
  const handleNutritionData = (nutritionData: any) => {
    // Handle the nutrition data received from the search component
    // You can perform any additional processing or state management here
    console.log(nutritionData);
  };

  return (
    <div className="App">
      <header className="">
        <h1>Calorie Curious</h1>
      </header>
      <SearchField onNutritionData={handleNutritionData} />

      <FAQ faqItems={[
        {
          question: 'What is Calorie Curious?',
          answer: 'Calorie Curious is a web application that allows users to search for nutritional information about various foods.'
        },
        {
          question: 'How do I use the search feature?',
          answer: 'Simply enter the name of the food you want to search for in the search field and press Enter.'
        },
        {
          question: 'What is the cost of this service?',
          answer: 'Our service is free for users, but heavy use of the API can get expensive (for us). We encourage users to search mindfully.'
        },
        {
          question: 'How can I access Calorie Curious?',
          answer: 'Our service is available on any web browser. In addition, we encourage users to take their data to go (with copy and paste).'
        }
      ]} />
    </div>
  );
}

export default App;