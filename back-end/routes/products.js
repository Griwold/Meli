import express from 'express'

import productService from '../services/productService.js'
import productDetailService from '../services/productDetailService.js'

const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        try {
            const data = await productService().get(req.query.q);
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json(error);
        }
    })

router.route('/:identifier')
    .get(async (req, res) => {
        try {
            const data = await productDetailService().get(req.params.identifier);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    })

export default router