import React, { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const toggleBackgroundColor = () => {
    setBackgroundColor(prevColor => prevColor === 'white' ? 'lightgray' : 'white');
  };

  return (
    <div style={{ backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={toggleBackgroundColor}>Toggle Background Color</button>
    </div>
  );
}

export default App;
