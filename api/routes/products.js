import express from 'express'

import productService from '../services/productService.js'
import productDetailService from '../services/productDetailService.js'

const router = express.Router();

router.route('/')
    .get(async (req, res) => {

        try {
            const data = await productService().get(req.query.q, req, { name: req.headers.name, lastname: req.headers.lastname });
            res.status(200).json(data)
        } catch (error) {
            if (error.message === '401') {
                res.status(401).json({ data: "UNAUTHORIZED" });
            } else {
                res.status(500);
            }
        }
    })

router.route('/:identifier')
    .get(async (req, res) => {
        try {
            const data = await productDetailService().get(req.params.identifier, { name: req.headers.name, lastname: req.headers.lastname });
            res.status(200).json(data);
        } catch (error) {
            res.status(500);
        }
    })

export default router