import React from 'react';
import '../styles/heroCard.css';

const TeamHeroes = ({ hero, remove }) => {
    return(
        <div className="heroCard">
        <img src={hero.pic} alt="" height="200" width="200" />
        <p>{hero.name} - {hero.role}</p>
        
        <button className="removeBtn" onClick={() => remove(hero.id)}>Remove</button>
    </div>
    )
}

export default TeamHeroes;