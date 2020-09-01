import React, { useState } from 'react';
import Header from '../Header/Header';
import Movies from '../../movies/Movies/Movies';
import './App.css';

function App() {
  const [title] = useState('React Movie Cards');

  return (
    <div className="App">
      <Header title={title} />
      <div className="mt-5">
          <Movies />
      </div>
    </div>
  );
}

export default App;
