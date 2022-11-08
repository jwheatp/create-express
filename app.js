import express from "express"

// initialize app
const app = express()

// port parameter, used at the end
const port = 3000

// a route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// run the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})