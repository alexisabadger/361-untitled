import React, { useState } from 'react';

interface Option {
  label: string;
  value: string;
}

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

interface HamburgerMenuProps {
  options: string[];
  onOptionsChange: (selectedOptions: (keyof NutritionData['items'][0])[]) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ options, onOptionsChange }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(options);

  const handleCheckboxChange = (optionValue: string) => {
    const newSelectedOptions = selectedOptions.includes(optionValue)
      ? selectedOptions.filter((value) => value !== optionValue)
      : [...selectedOptions, optionValue];
    setSelectedOptions(newSelectedOptions);
    onOptionsChange(newSelectedOptions as (keyof NutritionData['items'][0])[]);
  };

  const menuOptions: Option[] = options.map((option) => ({
    label: option.replace(/_/g, ' '),
    value: option,
  }));

  return (
    <div>
      {menuOptions.map((option) => (
        <label key={option.value}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default HamburgerMenu;