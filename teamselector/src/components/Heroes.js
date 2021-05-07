import React from 'react';
import Hero from './Hero';
import '../styles/heroes.css'

const Heroes = ({ heroes, team, add}) => (
    <div>
        <h1>Heroes</h1>
        {heroes.map(hero => <Hero key={hero.id} hero={hero} team={team} add={add} /> )}
    </div>
);

export default Heroes;