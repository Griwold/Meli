import axios from 'axios';

import extractNumber from '../utils/extractNumber.js';

const productService = () => {

    const get = async (search) => {

        const response = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`);
    
        const categories = await Promise.all(
            response.data.results.slice(0, 4).map(async (category) => {
                const { data: { path_from_root } } = await axios(`https://api.mercadolibre.com/categories/${category.category_id}`)
                let name = ''
                for (const category of path_from_root) name += `${category.name}/`;
                return name;
            })
        )
    
        const formatData = {
            author: {
                name: "Francisco",
                lastname: "Griguol"
            },
            categories
        }
    
        formatData.items = response.data.results.slice(0, 4).reduce((acc, next) => {
            const dataForm = {
                id: next.id,
                title: next.title,
                price: {
                    currency: next.currency_id,
                    amount: extractNumber(next.price).int,
                    decimals: extractNumber(next.price).decimals
                },
                picture: next.thumbnail,
                condition: next.condition,
                free_shipping: next.shipping.free_shipping
            }
    
            return [...acc, dataForm]
        }, [])
    
        return formatData;
    }

    return { get }

}

export default productService;