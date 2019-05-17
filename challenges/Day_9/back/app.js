const express = require('express')
const app = express()
const port = 3007
const cors = require('cors')

app.use(express.json());

// allow CORS requests for all resources
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => res.send('Hello class!'))

app.post('/', (req, res) => {
  console.log(req.body);
  res.send({
    'name':'Got a post request with name ' + req.body.name
})

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))