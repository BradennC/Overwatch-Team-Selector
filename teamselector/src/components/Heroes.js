import React from 'react';
import Hero from './Hero';

const Heroes = ({ heroes}) => (
    <div>
        {heroes.map(hero => <Hero key={hero.id} hero={hero} /> )}
    </div>
);

export default Heroes;