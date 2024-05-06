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
  selectedOptions: (keyof TableProps['data'][0])[];
}

const Table: React.FC<TableProps> = ({ data, selectedOptions }) => {
  const headers = selectedOptions.map((optionValue) => optionValue.replace(/_/g, ' '));

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
            {selectedOptions.map((optionValue) => (
              <td key={optionValue}>{item[optionValue]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;