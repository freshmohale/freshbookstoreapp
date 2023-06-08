const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 3000
const cors = require("cors")

app.use(cors({
  origin: 'http://localhost:4200'
}

))

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


// Route for registering a new user
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Perform validation on the request body if needed

  // Save the user to the database
  pool.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
    [username, email, password],
    (error) => {
      if (error) {
        console.error('Failed to register user', error);
        res.status(500).json({ error: 'Failed to register user' });
      } else {
        res.status(200).json({ message: 'User registered successfully' });
      }
    }
  );
});

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


app.get('/products', db.getProducts)
app.get('/products/:id', db.getProductById)
app.post('/products', db.createProduct)
app.put('/products/:id', db.updateProduct)
app.delete('/products/:id', db.deleteProduct)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
}) 