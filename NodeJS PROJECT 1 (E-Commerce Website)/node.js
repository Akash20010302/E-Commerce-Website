const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html')
const orders = fs.readFileSync('./orders.html')
const wishlist = fs.readFileSync('./wishlist.html')
const contact = fs.readFileSync('./contact.html')
const login = fs.readFileSync('./login.html')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;


    req.statusCode = 200;
    res.setHeader('Content-type', 'text/html' );
    if(url == `/`){
        res.end(home);
    }
    else if(url == `/orders`){
        res.end(orders);
    }
    else if(url == `/login?`){
        res.end(home);
    }
    else if(url == `/wishlist`){
        res.end(wishlist); 
    }
    else if(url == `/contact`){
        res.end(contact);
    }
    else if(url == `/login`){
        res.end(login);
    }
    else if(url == `/logout`){
        res.end(login);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not Found</h1>")
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});



