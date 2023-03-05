import Axios from '..';
import configAPI from '~/configs/configAPI.json';

const NODE_ENV = process.env.NODE_ENV;
const config = configAPI[NODE_ENV];

export const saveToken = token => {
    localStorage.setItem('token', JSON.stringify(token));
}

export const getCurrentToken = () => {
    const stringToken = localStorage.getItem('token');
    const token = JSON.parse(stringToken);
    return token;
}

export const register = (email, password, fullname, phone, address) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await Axios.post(config.register, {
                email, password, fullname, address, phone
            });

            console.log("res: ", res);

            const data = res.data;
            const token = data.token;
            saveToken(token);
            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
}

export const login = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await Axios.post(config.login, {
                email, password
            });

            console.log("res: ", res);

            const data = res.data;
            const token = data.token;
            saveToken(token);
            resolve(data);
        } catch (err) {
            reject(err);
        }
    });
}

export const forgetPassword = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await Axios.post(config.forgetPassword, {email});

            console.log("res: ", res);

            const token = res.data.token;
            saveToken(token);
            resolve(token);
        } catch (err) {
            reject(err);
        }
    });
}