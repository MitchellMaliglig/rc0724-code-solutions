import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import { Product } from '../lib';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
      SELECT * FROM "products";
    `;
    const result = await db.query<Product>(sql);
    const products = result.rows;
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

app.get('/api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    validateProductId(productId);
    const sql = `
    SELECT * FROM "products"
    WHERE "productId" = $1;
    `;
    const params = [productId];
    const result = await db.query<Product>(sql, params);
    const product = result.rows[0];
    if (product) {
      res.status(200).json(product);
    } else {
      throw new ClientError(404, `Product with id=${productId} not found`);
    }
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});

function validateProductId(productId: string): void {
  if (!Number.isInteger(+productId)) {
    throw new ClientError(400, 'Non-integer productId');
  }
}
