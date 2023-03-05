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

            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    });
};

export const postCart = async (accessToken, shoeId, count) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await Axios.post(config.postCart, {shoeId, count}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    });
}

export const putCart = async (accessToken, shoeId, count, isCheck) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await Axios.put(config.putCart, {shoeId, count, isCheck}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    });
}

export const deleteCart = async (accessToken, shoeId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await Axios.post(config.deleteCart, {shoeId}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    });
}