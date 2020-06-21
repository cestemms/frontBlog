import axios from "axios";

//Endereço da Api   
const api = axios.create({baseUrl: 'http://localhost:3001'});

export default api;