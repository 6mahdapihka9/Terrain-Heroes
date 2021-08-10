const fs = require("fs");
const path = require('path');

const getListOfLobbies = (req,res,next)=>{
    fs.readFile(path.join(__dirname, "../lobbies.json"), "utf8",(error,data)=> {
        if (error)
            throw error;
        res.locals.listOfLobbies = JSON.parse(data);
        next();
    });
};

module.exports = getListOfLobbies;
