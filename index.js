const express=require('express');
const http=require('http');
const socketio=require('socket.io');


const app=express();
const server=http.createServer(app);
const io=socketio(server);

io.on('connection',(socket)=>{
    console.log('a user connected',socket.id)

    socket.on('msg_send',(data)=>{
        io.emit('msg_rcvd',data);
    })

})

//to connect to the index.html
app.use('/',express.static(__dirname+'/public'));


server.listen(3007,()=>{
    console.log("server started");
})