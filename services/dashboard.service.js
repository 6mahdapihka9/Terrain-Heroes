const getUsers = require("./mysql/get.users.service");
const addUsers = require("./mysql/add.user.service");

const dashboardService = (req, res)=>{

    addUsers();
    getUsers();

    res.render("dashboard",{
        styles: ["css/colors.css",
            "css/main.styles.css",
            "css/padding.margin.border.styles.css",
            "css/structure.styles.css"],
        scripts: ["scripts/logout.js"],
        title: "Terrain Heroes",
        session: req.cookies.session,
        userName: req.cookies.userName
    });
}

module.exports = dashboardService;
