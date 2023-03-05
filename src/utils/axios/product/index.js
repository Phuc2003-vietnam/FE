import Axios from '..';
import configAPI from '~/configs/configAPI.json';

const NODE_ENV = process.env.NODE_ENV;
const config = configAPI[NODE_ENV];

export const postShoe = async (accessToken, name, price, image, description) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await Axios.post(config.postShoe, {name, price, image, description}, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            resolve(res.data);
        } catch (err) {
            reject(err);
        }
    })
}