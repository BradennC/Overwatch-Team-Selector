import React, {useState, useEffect} from 'react';
import heroeService from './services/heroes';

import Heroes from './components/Heroes';
import Team from './components/Team';

function App() {
  const [ heroes, setHeroes] = useState([]);
  const [ team, setTeam ] = useState([]);

  const addToTeam = (heroID) => {
    const hero = heroes.find(hero => hero.id === heroID);

    heroeService.addTeamMate(hero)
    .then(response => {
      setTeam(team.concat(hero))
    });
  };

  const removeHero = (heroID) => {
    console.log('remove', heroID)
    heroeService.removeFromTeam(heroID);

    setTeam(team.filter(hero => hero.id !== heroID))
    
  }

  useEffect(() => {
    heroeService.getAll()
    .then(initialHeroes => {
      setHeroes(initialHeroes)
    })
  }, []);

  useEffect(() => {
    heroeService.getTeam()
    .then(initialTeam => {
      setTeam(initialTeam)
    })
  }, [])

  console.log(heroes);

  return (
    <div>
      <h1>Overwatch Team Selector</h1>
      <Heroes heroes={heroes} add={addToTeam} />
      <Team team={team} remove={removeHero} />
    </div>
  );
}

export default App;
