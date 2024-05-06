import React from 'react';

interface TableProps {
  data: {
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

const Table: React.FC<TableProps> = ({ data }) => {
  const headers = [
    'Name',
    'Calories',
    'Serving Size (g)',
    'Total Fat (g)',
    'Saturated Fat (g)',
    'Protein (g)',
    'Sodium (mg)',
    'Potassium (mg)',
    'Cholesterol (mg)',
    'Total Carbohydrates (g)',
    'Fiber (g)',
    'Sugar (g)',
  ];

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.calories}</td>
            <td>{item.serving_size_g}</td>
            <td>{item.fat_total_g}</td>
            <td>{item.fat_saturated_g}</td>
            <td>{item.protein_g}</td>
            <td>{item.sodium_mg}</td>
            <td>{item.potassium_mg}</td>
            <td>{item.cholesterol_mg}</td>
            <td>{item.carbohydrates_total_g}</td>
            <td>{item.fiber_g}</td>
            <td>{item.sugar_g}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;