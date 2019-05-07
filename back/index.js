const express = require('express')
const app = express()
const port = 3006
const cors = require('cors')

app.use(express.json());

// allow CORS requests for all resources
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => res.send('Hello class!'))

app.get('/ibrahim', function(req, res) { 
	console.log(req.query);
	res.send('Hi Ibrahim!')
})

app.post('/ibrahim', function(req, res) {
	console.log(req.body);
	res.send("Hi Ibrahim ");
})

app.post('/', (req, res) => {
	console.log(req.body);
	res.send({
		'winner':'Got a post request with winner: ' + req.body.winner,
		'newFriend': req.body.nonWinner
})

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))