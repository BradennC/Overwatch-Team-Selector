import React from 'react';
import '../styles/heroCard.css';

const Hero = ({ hero, add }) => (
    <div className="heroCard">
        <img src={hero.pic} alt="" height="200" width="200" />
        <p>{hero.name} - {hero.role}</p>
        
        <button className="selectHeroBtn" onClick={() => add(hero.id)}>Select</button>
    </div>
);

export default Hero;