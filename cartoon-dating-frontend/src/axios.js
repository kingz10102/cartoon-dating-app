import axios from 'axios';

const instance = axios.create({
    baseURL: "https://cartoon-dating-app.herokuapp.com"
});

export default instance;