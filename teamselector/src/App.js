import React, {useState, useEffect} from 'react';
import heroeService from './services/heroes';

import Heroes from './components/Heroes';

function App() {
  const [ heroes, setHeroes] = useState([]);

  useEffect(() => {
    heroeService.getAll()
    .then(initialHeroes => {
      setHeroes(initialHeroes)
    })
  }, []);

  console.log(heroes)

  return (
    <div>
      <h1>Overwatch Team Selector</h1>
      <Heroes heroes={heroes} />

    </div>
  );
}

export default App;
