import Axios from "..";
import configAPI from '../../../configs/configAPI.json';

const NODE_ENV = process.env.NODE_ENV;
const config = configAPI[NODE_ENV];

export const getAllCarts = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await Axios.get(config.getAllCart);

            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    })
}