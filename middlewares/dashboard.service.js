const dashboardService = (req, res)=>{

    res.render("dashboard",{
        styles: ["css/colors.css",
            "css/main.styles.css",
            "css/padding.margin.border.styles.css",
            "css/structure.styles.css"],
        scripts: ["scripts/logout.js"],
        title: "Terrain Heroes",
        user: req.cookies.session
    });
}

module.exports = dashboardService;
