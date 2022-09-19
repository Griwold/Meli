import axios from 'axios';

import extractNumber from '../utils/extractNumber.js';
import validateSign from '../utils/validateSign.js';

const productDetailService = () => {

    const get = async (search, author) => {
        
        validateSign(author)
        
        const { data } = await axios(`https://api.mercadolibre.com/items/${search}`);
        const { data: { plain_text } } = await axios(`https://api.mercadolibre.com/items/${search}/description`);
        const { data: { path_from_root } } = await axios(`https://api.mercadolibre.com/categories/${data.category_id}`)

        let name = ''
        for (const category of path_from_root) name += `${category.name}/`;
        
        const formatData = {
            author,
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
                category: name,
                description: plain_text
            }
        }

        return formatData;
    }

    return { get }

}

export default productDetailService;