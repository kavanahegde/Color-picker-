// ColorPicker.js
import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('blue');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h2>Color selected = {selectedColor}</h2>
      <div className="color-picker">
        <div
          className={`color-circle ${selectedColor === 'blue' && 'selected'}`}
          onClick={() => handleColorChange('blue')}
        ></div>
        <div
          className={`color-circle ${selectedColor === 'red' && 'selected'}`}
          onClick={() => handleColorChange('red')}
        ></div>
        <div
          className={`color-circle ${selectedColor === 'green' && 'selected'}`}
          onClick={() => handleColorChange('green')}
        ></div>
      </div>
    </div>
  );
};

export default ColorPicker;
