 const http = require('http');
 const fs = require('fs');

 const path = require('path');



 const port = 3001;

 const server = http.createServer( ( req, res) => {
 const FilePath = path.join ( __dirname ,  req.url === '/' ? "/index.html": req.url);
console.log(FilePath); 
const extname = String(path.extname(FilePath)).toLowerCase()

    const mimeTypes ={
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',

        '.wav': 'audio/wav',
         
       
    }

     const contentType = mimeTypes[extname] || 'application/octet-stream';


      fs.readFile( FilePath, (error, content) => {

          if ( error ){
            if ( error.code === 'ENDENT'){
                res.writeHead(404 , { ' content-type ': 'text/html' });
                res.end('<h1>404 Not Found</h1>', 'utf-8');
            }
          } else {
             res.writeHead(200, { 'Content-Type': contentType });
             res.end(content, 'utf-8');

          }
      })
 })

 server.listen(port, () => {
        console.log(`Server is running on port url : http://localhost:${port}`);
 })

