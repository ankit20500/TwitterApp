
// How to create server without using the express js

const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/home')res.end("welcome to home");
    else res.end("hello world")
});

server.listen(3000,()=>{
    console.log("server is running at 3000 port");
})
