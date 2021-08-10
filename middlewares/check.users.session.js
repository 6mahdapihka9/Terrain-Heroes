const fs = require("fs");
const path = require('path');

const checkUsersSession = (req, res, next)=>{
    //почему вызывается не по порядку

    if (req.cookies && req.cookies.session){

        fs.readFile(path.join(__dirname, "../users.json"), "utf8",(error,data)=> {
            if (error)
                throw error;
            let users = JSON.parse(data);
            for (let u = 0; u < users.length; u++) {

                if (req.cookies.session == users[u].session) {
                    res.locals.session = req.cookies.session;

                }
            }
        });
    }
    next();
}
module.exports = checkUsersSession;
