import { useState } from 'react';
import classes from './App.module.css';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Results from './component/Result';
import requests from './dataRequest/requests';

// tmdb api key

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending)
  return (
    <div className={classes.app}>
      <Header />

      <Navbar setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
