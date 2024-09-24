import axios from 'axios';

const api = axios.create({
    baseURL: "http:/192.168.12.55:3000/",    //troque pelo seu ip
})

export default api;