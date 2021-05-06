import React from 'react';
import Hero from './Hero';
import '../styles/heroes.css'

const Heroes = ({ heroes, add}) => (
    <div>
        <h1>Heroes</h1>
        {heroes.map(hero => <Hero key={hero.id} hero={hero} add={add} /> )}
    </div>
);

export default Heroes;