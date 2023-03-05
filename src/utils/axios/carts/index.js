import Axios from '..';
import configAPI from '~/configs/configAPI.json';

const NODE_ENV = process.env.NODE_ENV;
const config = configAPI[NODE_ENV];

export const getCarts = async (token) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await Axios.get(config.getCarts, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log("res: ", res);

            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    });
};

export const postCart = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            
        } catch (err) {
            reject(err);
        }
    });
}

export const putCart = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            
        } catch (err) {
            reject(err);
        }
    });
}

export const deleteCart = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            
        } catch (err) {
            reject(err);
        }
    });
}