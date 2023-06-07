import React, { useState } from 'react';
import './TogleButton.css';

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleButton;
