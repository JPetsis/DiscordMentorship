import axios from 'axios';
import env from '../env';
const services = {};

services.login = async (data) => {
    return axios({
        method: "POST",
        url: `${env.API}/login`,
        data: {
            code: data
        }
    });
};

export default services;