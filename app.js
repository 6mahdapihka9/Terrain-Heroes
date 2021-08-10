const express = require("express");
const app = express();
const path = require('path');

const port = 3000;

//parser
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = express.json();
const cookieParser = require('cookie-parser');

//middleware
const urlChecker = require("./middlewares/url.checker.middleware");
const postReqChecker = require("./middlewares/post.request.checker.middleware");
const checkUsersSession = require("./middlewares/check.users.session.middleware");
const {registrationGet, registrationPost} = require("./services/registration.service");
const {authorizationGet, authorizationPost} = require("./services/authorization.service");
const infoService = require("./services/info.service");
const rulesService = require("./services/rules.service");
const dashboardService = require("./services/dashboard.service");
//routing
const gameRouter = require("./routing/game.routes");

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
app.get("/rules(.html)?", rulesService);
app.get("/info(.html)?", infoService);
app.get("/", dashboardService);

app.listen(process.env.PORT || port);


