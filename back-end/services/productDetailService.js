import axios from 'axios';

import extractNumber from '../utils/extractNumber.js';

const productDetailService = () => {

    const get = async (search) => {

        const { data } = await axios(`https://api.mercadolibre.com/items/${search}`);
        const { data: { plain_text } } = await axios(`https://api.mercadolibre.com/items/${search}/description`);

        const formatData = {
            author: {
                name: "Francisco",
                lastname: "Griguol"
            },
            item: {
                id: data.id,
                title: data.title,
                price: {
                    currency: data.currency_id,
                    amount: extractNumber(data.price).int,
                    decimals: extractNumber(data.price).decimals
                },
                picture: data.pictures[0].secure_url,
                condition: data.condition,
                free_shipping: data.shipping.free_shipping,
                sold_quantity: data.sold_quantity,
                description: plain_text
            }
        }

        return formatData;
    }

    return { get }

}

export default productDetailService;