   const http = require('http');
   const port = process.env.PORT || 3000;
   http.createServer((req, res) => {
     console.log(new Date().toISOString(), req.method, req.url);
     res.end('Hello from Go Red Robot!\n');
   }).listen(port, '0.0.0.0', () => {
     console.log('GRR demo app listening on port ' + port);
   });
   setInterval(() => console.log('heartbeat', new Date().toISOString()), 10000);
