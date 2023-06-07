const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'Letsdoit!',
  port: 5432,
})

//get users from the database
const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response)  => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  //Get products from the database
  const getProducts = (request, response) => {
    pool.query('SELECT * FROM products ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getProductById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM products WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  // Create User
  const createUser = (request, response) => {
    const { name, email, password } = request.body
  
    pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, password], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
  }

  // Create Product
  const createProduct = (request, response) => {
    const { title, author, decsription, image } = request.body
  
    pool.query('INSERT INTO products (title, author, description, image, price) VALUES ($1, $2, $3, $4, $5) RETURNING *', [title, author, decsription, image, price], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Product added with ID: ${results.rows[0].id}`)
    })
  }

  // update a user
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email, password } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4',
      [name, email, password, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

// Update a product
const updateProduct = (request, response) => {
    const id = parseInt(request.params.id)
    const { title, author, description, image } = request.body
  
    pool.query(
      'UPDATE products SET title = $1, author = $2, description = $3, image = $4, price = $5 WHERE id = $6',
      [title, author, description, image, price, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Product modified with ID: ${id}`)
      }
    )
  }

  // Delete a User
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  // Delete a product
  const deleteProduct = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM products WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Product deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,

    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct

  }

