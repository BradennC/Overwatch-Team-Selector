import React from 'react';

const Team = ({ team, remove }) => (
    <div>
        <h1>Your Team</h1>
        {team.map(hero => <p key={hero.id}>{hero.name} - {hero.role} <button onClick={() => remove(hero.id)} >Remove</button> </p>)}
    </div>
);

export default Team;