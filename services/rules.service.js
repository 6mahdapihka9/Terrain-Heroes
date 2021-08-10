const rulesService = (req, res)=>{

    res.render("rules",{
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

module.exports = rulesService;
