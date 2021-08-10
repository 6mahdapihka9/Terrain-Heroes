const express = require("express");
const app = express();
const path = require('path');
const fs = require("fs");

const port = 3000;
const filePath = "users.json";

//parser
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = express.json();
const cookieParser = require('cookie-parser');

//middleware
const urlChecker = require("./middlewares/url.checker.service");
const postReqChecker = require("./middlewares/post.request.checker.service");
const checkUsersSession = require("./middlewares/check.users.session");
const {registrationGet, registrationPost} = require("./middlewares/registration.service");
const {authorizationGet, authorizationPost} = require("./middlewares/authorization.service");
const dashboardService = require("./middlewares/dashboard.service");
//routing
const gameRouter = require("./middlewares/routing/game.routes");

//views
const expressHbs = require("express-handlebars");
app.engine("hbs", expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname: "hbs"
}));

const hbs = require("hbs");
app.set("view engine","hbs");
hbs.registerPartials(__dirname + "/views/partials");


app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(urlChecker);
app.use(checkUsersSession);
// app.use(postReqChecker);

app.use("/games/", gameRouter);
app.get("/registration(.html)?", urlencodedParser, registrationGet);
app.post("/registration(.html)?", urlencodedParser, registrationPost);
app.get("/authorization(.html)?", urlencodedParser, authorizationGet);
app.post("/authorization(.html)?", urlencodedParser, authorizationPost);
app.get("/", dashboardService);

app.listen(port);


