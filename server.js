const http = require('http');

const fs = require('fs');

const minimist = require('minimist');
// processes arguments after 'node server.js'
const args = require('minimist')(process.argv.slice(2))
// port const is equal to the command line arg or 3000 if not given
const port = args.port || 3000

// reads in file located at './public/index.html' 
// serves html in './public/index.html' at the port and sends status code 200 if successful
fs.readFile('./public/index.html', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const server = http.createServer((req, res) => {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data)
          });
         server.listen(port);
         console.log('Server listening on port ' + port);
        });
