import React, {useState, useEffect} from 'react';
import heroeService from './services/heroes';

import Heroes from './components/Heroes';
import Team from './components/Team';
import Search from './components/Search';

function App() {
  const [ heroes, setHeroes] = useState([]);
  const [ team, setTeam ] = useState([]);
  const [ search, setSearch ] = useState('');

  const addToTeam = (heroID) => {
    const hero = heroes.find(hero => hero.id === heroID);

    if (team.some(teamHero => teamHero.id === hero.id)) {
      return console.log('hero exists in team');
    } else if (team.filter(teamHero => teamHero.role === hero.role).length >= 2) {
      return console.log('too many of a certain role')
    } else if (team.length >= 6) {
      return console.log('team is full')
    }
    else {
      heroeService.addTeamMate(hero)
    .then(response => {
      setTeam(team.concat(hero))
    });
    }

    
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
  }, []);

  const searchHandler = (event) => {
    return setSearch(event.target.value);
  };

  const heroesToShow = (!search)
    ? heroes
    : heroes.filter(hero => hero.name.includes(search))

  console.log(heroes);

  return (
    <div>
      <h1>Overwatch Team Selector</h1>
      <Team team={team} remove={removeHero} />
      <br></br>
      <Search searchHandler={searchHandler} />
      <Heroes heroes={heroesToShow} team={team} add={addToTeam} />
    </div>
  );
}

export default App;
