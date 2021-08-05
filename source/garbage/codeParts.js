//наследование от ИВента и создание ивента
// const util = require("util");
// const EventEmitter = require("events");
// let eventName = "greet";
//
// function User(){
// }
// util.inherits(User, EventEmitter);
//
// User.prototype.sayHi = function(data){
//     this.emit(eventName, data);
// }
// let user = new User();
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function(data){
//     console.log(data);
// });
//
// class User extends EventEmitter {
//     sayHi(data) {
//         this.emit(eventName, data);
//     }
// }
// let user = new User();
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function(data){
//     console.log(data);
// });
//
// user.sayHi("Мне нужна твоя одежда...");






//редирект
// const express = require("express");
// const port = 3000;
// const app = express();
//
// app.use((request, response,next)=>{
//     console.log("middleware");
//     if (request.url !== "/" && request.url !== "/home") {
//         console.log("dick");
//         response.statusCode = 302;
//         response.setHeader("Location", "/home");
//         response.end();
//         // next();
//     } else {
//         next();
//     }
// });
//
// app.get("/",(request, response)=>{
//     console.log(request.url);
//     response.send("hi");
// });
//
// app.get("/home",(request, response)=>{
//     console.log(request.url);
//     response.send("welcome home");
// });
//
// app.listen(port);



//логирование
// app.use((request, response,next)=>{
//
//
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//
//     let logStr = `${hours}:${minutes}:${seconds} - ${request.method} ${request.url}\n`;
//     console.log(logStr);
//     fs.appendFile(filePath, logStr,()=>{});
//     if (request.url === "/" || request.url === "/home")
//         next();
// });
//
// app.get("/",(request, response)=>{
//     console.log(__dirname + "/lobbies.html");
//     response.send(__dirname + "/lobbies.html");
// });
//
// app.get("/home",(request, response)=>{
//     console.log(__dirname + "logs.txt");
//     response.send(__dirname + "/logs.txt");
// });


