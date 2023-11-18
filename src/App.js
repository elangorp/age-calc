import './App.css';
import React, { useState } from 'react';

function App() {
  const [birthYear, setBirthYear] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    let calculatedAge = currentYear - parseInt(birthYear, 10);

    if (
      currentMonth < parseInt(birthMonth, 10) ||
      (currentMonth === parseInt(birthMonth, 10) && currentDay < parseInt(birthDay, 10))
    ) {
      calculatedAge -= 1;
    }

    setAge(calculatedAge);
  };  
  return (
    <div className="age-calculator-container">
    <h2>Age Calculator</h2>
    <div className="input-container">
      <label>Enter your birth year:</label>
      <input
        type="number"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
      />
    </div>
    <div className="input-container">
      <label>Enter your birth month:</label>
      <input
        type="number"
        value={birthMonth}
        onChange={(e) => setBirthMonth(e.target.value)}
      />
    </div>
    <div className="input-container">
      <label>Enter your birth day:</label>
      <input
        type="number"
        value={birthDay}
        onChange={(e) => setBirthDay(e.target.value)}
      />
    </div>
    <button className="calculate-button" onClick={calculateAge}>
      Calculate Age
    </button>
    {age !== null && <p>Your age is: {age} years</p>}
  </div>
  );
}

export default App;
