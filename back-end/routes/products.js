import express from 'express'
import axios from 'axios'
const router = express.Router()

router.get('/items', async (req, res) => {
    try {
        const response = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`);

        const categories = await Promise.all(
            response.data.results.slice(0, 4).map(async (category) => {
                const categoryName = await axios(`https://api.mercadolibre.com/categories/${category.category_id}`)
                return categoryName.data.name
            })
        )

        const decimals = (price) => {
            const newDecimals = price.toString().split('.');

            if (newDecimals.length > 1) return { int: +newDecimals[0], decimals: +newDecimals[1] };
            return { int: +newDecimals[0], decimals: 0 };
        }

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
                    amount: decimals(next.price).int,
                    decimals: decimals(next.price).decimals
                },
                picture: next.thumbnail,
                condition: next.condition,
                free_shipping: next.shipping.free_shipping
            }

            return [...acc, dataForm]
        }, [])

        res.status(200).json(formatData)
    } catch (error) {
        res.end()
    }
})

export default router