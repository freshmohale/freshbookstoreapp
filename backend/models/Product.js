const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api',
    password: 'Letsdoit!',
    port: 5432,
  })

// Define the product model
class Product {
  static async create(productData) {
    const query = 'INSERT INTO products (title, author, price, image) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [
      productData.title,
      productData.author,
      productData.description,
      productData.price,
      productData.image,
    ];

    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

module.exports = Product;
