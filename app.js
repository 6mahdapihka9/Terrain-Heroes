const express = require("express");
const port = 3000;
const app = express();


const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});


const gameRouter = express.Router();

// определяем маршруты и их обработчики внутри роутера
gameRouter.use("/lobbies(.html)?",(req, res)=>{
     //TODO update lobbies page
     console.log("show lobbies page");
     res.sendFile(__dirname + "/source/lobbies/lobbies.html");
});
gameRouter.use("/:id", function(req, res){
     //TODO check is there any game with this id

     res.send(`Game #${req.params.id}`);
});


app.use((req, res, next)=>{
     let u = req.url;
     console.log(u.match("\\/game\\/.{3,6}"));
     if (u === "/" || u === "/lobbies" || u === "/authorization" || u.match("\\/game\\/.{3,}"))
          next();
     else
          res.redirect("/");
});

app.use((req, res, next)=>{
     //TODO expand list of post request links

     if (req.method === "POST" && req.url !== "/authorization") {
          console.log("caught post request");
          res.sendFile(__dirname + "/source/errors/main-error.html");
          return;
     }
     next();
});


app.get("/authorization(.html)?", urlencodedParser, (req, res)=>{
     //TODO update authorization page
     console.log("show authorization page");
     res.sendFile(__dirname + "/source/reg-auth/reg-auth.html");
});

app.post("/authorization(.html)?", urlencodedParser, (req,res)=>{
     if(!req.body)
          return res.sendStatus(400);
     console.log("save authorization data");
     console.log(req.body);
     res.send("<h1>Successful operation!</h1>")
});



app.use("/game/", gameRouter);



app.get("/",(req,res)=>{
     //TODO update dashboard
     console.log("show dashboard page");
     res.sendFile(__dirname + "/source/dashboard/dashboard.html");
});


app.listen(port);
