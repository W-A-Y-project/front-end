import axios from 'axios';

const api = axios.create({
    baseURL: "http:/192.168.148.55:3000/",    //troque pelo seu ip
})

export default api;