import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import products from './routes/products.js'
const app = express()
const port = 5000

app.use(morgan('dev'))
app.use(cors());

app.use('/api/items', products)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;