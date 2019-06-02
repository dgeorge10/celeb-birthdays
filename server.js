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

	request("https://celebritybucks.com/tools/birthdays/" + birthday, (err, response, body) => {
		if (err) { res.send(err); return;}
		const root = parser.parse(body);
		let regex = /alt="([\w\s]*)"/g;
		matches = body.match(regex);
		for(let i = 1; i < matches.length; i++){
			let raw = matches[i]
			let split = raw.split("=")[1]
			if(split.includes("Tweet")) { 
				console.log("twitter button found");		
				continue; 
			}
			let name = split.replace(/['"]+/g, '');
			people.push(name);
		}
		console.log(people);
		res.send(people);

	})
});
