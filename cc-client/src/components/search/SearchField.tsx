import React, { useState } from 'react';
import axios from 'axios';
import Table from '../table/Table';
import HamburgerMenu from '../hamburgermenu/HamburgerMenu';

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
  const [selectedOptions, setSelectedOptions] = useState<(keyof NutritionData['items'][0])[]>([]);

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
      onNutritionData(response.data);
    } catch (error) {
      console.error('Error fetching nutrition data:', error);
    }
  };

  const handleOptionsChange = (options: (keyof NutritionData['items'][0])[]) => {
    setSelectedOptions(options);
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
      {nutritionData && (
        <>
          <HamburgerMenu
            options={Object.keys(nutritionData.items[0]) as (keyof NutritionData['items'][0])[]}
            onOptionsChange={handleOptionsChange}
          />
          <Table data={nutritionData.items} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default SearchField;