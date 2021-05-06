import axios from 'axios';

const baseURL = 'https://stark-wave-31121.herokuapp.com/api/heroes';
const teamURL = 'https://stark-wave-31121.herokuapp.com/api/team'

const getAll = () => {
    const request = axios.get(baseURL);
    return request.then(response => response.data);
}

const getTeam = () => {
    const request = axios.get(teamURL);
    return request.then(response => response.data);
}

const addTeamMate = (heroObj) => {
    const request = axios.post(teamURL, heroObj);
    return request.then(response => response.data);
}

const removeFromTeam = (heroID) => {
    const request = axios.delete(`${teamURL}/${heroID}`);
}

export default { getAll,  getTeam, addTeamMate, removeFromTeam };