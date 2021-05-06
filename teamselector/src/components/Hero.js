import React from 'react';

const Hero = ({ hero, add }) => (
    <div>
        <h3>{hero.name}</h3>
        <p>{hero.role}</p>
        <button onClick={() => add(hero.id)}>Select</button>
    </div>
);

export default Hero;