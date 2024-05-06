import React, { useState } from 'react';
import axios from 'axios';
import Table from '../table/Table';

interface NutritionData {
  items: {
    name: string;
    calories: number;
    serving_size_g: number;
    fat_total_g: number;
    fat_saturated_g: number;
    protein_g: number;
    sodium_mg: number;
    potassium_mg: number;
    cholesterol_mg: number;
    carbohydrates_total_g: number;
    fiber_g: number;
    sugar_g: number;
  }[];
}

interface SearchFieldProps {
  onNutritionData: (data: NutritionData) => void;
}

const SearchField: React.FC<SearchFieldProps> = ({ onNutritionData }) => {
  const [query, setQuery] = useState('');
  const [nutritionData, setNutritionData] = useState<NutritionData | null>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get<NutritionData>(
        `https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(query)}`,
        {
          headers: {
            'X-Api-Key': 'W8VM2mBl/zo4misodvfk3w==ut6ZlmLQgl4Ej1cI',
          },
        }
      );
      setNutritionData(response.data);
      onNutritionData(response.data); // Pass the nutrition data to the parent component
    } catch (error) {
      console.error('Error fetching nutrition data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter food query"
      />
      <button onClick={handleSearch}>Search</button>
      {nutritionData && <Table data={nutritionData.items} />}
    </div>
  );
};

export default SearchField;