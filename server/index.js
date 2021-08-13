const express = require("express");
const socketio=require('socket.io');
const http =require('http');
const router = require("./router");
const cors = require('cors');
const {addUser,removeUser,getUser,getUserInRoom}=require('./users')

const PORT=process.env.PORT ||5000;

const app = express();
const server=http.createServer(app);

const io=socketio(server);

app.use(cors());
app.use(router);


io.on('connection',(socket)=>{
    console.log('We have a new connection!!!');
   
    socket.on('join',({name,room},callback)=>{
        const {error,user}=addUser({id:socket.id,name,room});
        socket.join(user.room);// added unsure
        if(error) return callback(error);
        socket.emit('message',{user:'admin',text:`${user.name},welcom to the room,${user.room}`});
        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`${user.name} ,has joined`});
        
        socket.join(user.room);

        io.to(user.room).emit('roomDate',{room:user.room,users:getUsersInRoom(user.room)});

        callback();
    });

    socket.on('sendMessage', (message,callback)=>{
        const user=getUser(socket.id);
        io.to(user.room).emit('message',{user:user.name,text:message});
        callback();
    });


    socket.on('disconnect',()=>{
        const user = removeUser(socket.id);

        if(user) {
          io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
          io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        }
        })
    });

app.use(router);
server.listen(process.env.PORT || 5000, () => console.log(`Server has started on  ${PORT}`));


