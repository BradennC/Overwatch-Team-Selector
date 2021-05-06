import React from 'react';
import Hero from './Hero';

const Heroes = ({ heroes, add}) => (
    <div>
        {heroes.map(hero => <Hero key={hero.id} hero={hero} add={add} /> )}
    </div>
);

export default Heroes;