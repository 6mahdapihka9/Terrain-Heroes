const gamesTemplateService = (req, res) => {

    res.render("gamesTemplate",{
        styles: ["css/colors.css",
            "css/main.styles.css",
            "css/padding.margin.border.styles.css",
            "css/structure.styles.css"],
        scripts: ["scripts/logout.js"],
        title: `Game #${req.params.id}`,
        dontShowPartials: true,
        dontShowNav: true,
        session: req.cookies.session,
        userName: req.cookies.userName
    });
};

module.exports = gamesTemplateService;
