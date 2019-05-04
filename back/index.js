const express = require('express')
const app = express()
const port = 3006
const cors = require('cors')

app.use(express.json());

// allow CORS requests for all resources
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', (req, res) => {
	console.log(req.body);
	res.send({'winner':'Got a post request with winner: ' + req.body.winner})

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))