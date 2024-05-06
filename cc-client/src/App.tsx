import React from 'react';
import './App.css';
import SearchField from './components/search/SearchField';
import Table from './components/table/Table';

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
    </div>
  );
}

export default App;