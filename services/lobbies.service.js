const lobbiesService = (req, res)=>{

    res.render("lobbies",{
        styles: ["css/colors.css",
            "css/main.styles.css",
            "css/padding.margin.border.styles.css",
            "css/structure.styles.css"],
        scripts: ["scripts/logout.js"],
        title: "Lobbies",
        linksForLobbies: true,
        lobbiesLinks: res.locals.listOfLobbies,
        session: req.cookies.session,
        userName: req.cookies.userName
    });
};

module.exports = lobbiesService;
