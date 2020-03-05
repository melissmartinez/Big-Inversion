import React from 'react';
import './App.css';

import MyInversion from './components/MyInversion';

function App() {
  return (
    <div className="App">
      <MyInversion firstName={" Jane"} lastName={"Doe"} Age={"Age: 45"} hairColor={"Hair Color: Black"} />
      <MyInversion firstName={" John"} lastName={"Smith"} Age={"Age: 88"} hairColor={"Hair Color: Brown"} />
      <MyInversion firstName={" Millard"} lastName={"Fillmore"} Age={"Age: 50"} hairColor={"Hair Color: Brown"} />
      <MyInversion firstName={" Maria"} lastName={"Smith"} Age={"Age: 62"} hairColor={"Hair Color: Brown"} />
    </div>
  );
}
export default App;
