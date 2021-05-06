import React from 'react';
import '../styles/team.css';
import TeamHeroes from './TeamHeroes';

const Team = ({ team, remove }) => (
    <div>
        <h1>Your Team</h1>
        {team.map(hero => <TeamHeroes hero={hero} remove={remove} />)}
    </div>
);

export default Team;