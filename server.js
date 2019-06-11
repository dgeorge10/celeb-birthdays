const express = require('express');
const parser  = require('node-html-parser')
const request = require('request');
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/getBirthday' , (req, res) => {
	let { birthday } = req.query;
	people = [];
	let base_url = "https://celebritybucks.com" 
	request("https://celebritybucks.com/tools/birthdays/" + birthday, (err, response, body) => {
		if (err) { res.send(err); return;}
		const root = parser.parse(body);
		let test = /\/images\/celebs\/(thumb|mid)\/[\w.]*" alt="[\w\s]*/g
		let testing = body.match(test)
		for(let i = 0; i< testing.length; i++){
			let splitty = testing[i].split("\" alt=")
			let name = splitty[1].replace(/['"]+/g, '')
			// let person = { [name] : base_url + splitty[0] }
			let person = name;
			people.push(person)
		}
		console.log(people)
		res.send(people)
	})
});
