import React from 'react';

const Hero = ({ hero }) => (
    <div>
        <h3>{hero.name}</h3>
        <p>{hero.role}</p>
        <button>Select</button>
    </div>
);

export default Hero;