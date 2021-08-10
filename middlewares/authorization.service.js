const fs = require("fs");
const path = require('path');

const authorizationGet = (req, res) => {
    //TODO update authorization page

    res.render("authorization",{
        styles: ["css/colors.css",
            "css/main.styles.css",
            "css/padding.margin.border.styles.css",
            "css/structure.styles.css"],
        scripts: [],
        title: "Authorization",
    });
};

const authorizationPost = (req, res) => {
    if(!req.body)
        res.sendStatus(400);

    let login = req.body.login, pass = req.body.pass;

    let data = fs.readFileSync(path.join(__dirname, "../users.json"), "utf8");
    let users = JSON.parse(data);

    let user;
    for(let i = 0; i < users.length; i++){
        if(users[i].login == login && users[i].pass == pass){
            user = users[i];
            break;
        }
    }

    if (user){
        res.send(`
            <h1>Successful operation!</h1>
            <p>Redirecting to dashboard.</p>
            <script>
                document.cookie = "session=${user.session}; max-age=${60*60*24*7}";
                setTimeout(()=>{window.location.href = "/"},1000);
            </script>
        `);
    } else {
        // console.log("don't found user in auth");
        return res.status(404).send(`
        <h1>
            There is no such user: login ${login}, pass ${pass}!
        </h1>
        <p>Try other data or register.</p>
        <script>
            document.cookie = "session=0; max-age=0";
            setTimeout(()=>{window.open("/authorization")},3000);
        </script>
        `);
    }

};

module.exports = {
    authorizationGet,
    authorizationPost
};
