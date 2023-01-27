const http = require('http');

const fs = require('fs');

const minimist = require('minimist');

const args = require('minimist')(process.argv.slice(2))

const port = args.port || 3000

let data = fs.readFileSync('./public/index.html', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	return data;});
	

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end(data)
	});

server.listen(port);
console.log('Server listening on port ' + port);
