import env from '../env';
import axios from 'axios';
const services = {};

services.placeholder = async () => {
    return axios.get(`${env.API}`);
};

export default services;