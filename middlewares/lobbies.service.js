const lobbiesService = (req, res)=>{
    //TODO update lobbies page
    // console.log("show lobbies page");

    res.render("lobbies",{
        styles: ["css/colors.css",
            "css/main.styles.css",
            "css/padding.margin.border.styles.css",
            "css/structure.styles.css"],
        scripts: ["scripts/logout.js"],
        title: "Lobbies",
        linksForLobbies: true,
        lobbiesLinks: res.locals.listOfLobbies,
        user: req.cookies.session
    });
};

module.exports = lobbiesService;
