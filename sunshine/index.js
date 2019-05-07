const express = require('express')
const app = express()
const port = 3007
const name = 'Melanie'

const cors = require('cors')
app.use(cors());
app.options('*', cors());

app.use(express.json());

// ES6 syntax
app.get('/', (req, res) => res.send('Hello World!'))

// ES5 syntax
app.get('/ellen/', function(req, res) {
	res.send('Hamdullah');
})

app.post('/tree', function(req, res) {
	console.log(req.body);
})

app.listen(port, () => console.log(`${name}'s app listening on port ${port}!`))
