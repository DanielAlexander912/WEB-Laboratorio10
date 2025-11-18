import { pool } from '../Data/data.js';

//  POST: /api/sales
export const createSale = (request, response) => {
  const { amount, id_customer } = request.body;
  pool.query(
    'INSERT INTO sales (amount, created_at, id_customer) VALUES ($1, NOW(), $2) RETURNING *', 
    [amount, id_customer], (error, results) => {
    if (error) {
      return response.status(500).json({ error: "No se pudo registrar la venta" });
    }
    response.status(201).json(results.rows[0]);
  })
};