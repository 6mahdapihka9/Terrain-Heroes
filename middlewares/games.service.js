const gamesService = (req, res) => {
    //TODO check is there any game with this id
    // console.log("show game page");

    res.render("gameTemplate",{
        styles: ["css/colors.css",
            "css/main.styles.css",
            "css/padding.margin.border.styles.css",
            "css/structure.styles.css"],
        scripts: ["scripts/logout.js"],
        title: `Game #${req.params.id}`,
        dontShowPartials: true,
        dontShowNav: true,
        user: req.cookies.session
    });
};

module.exports = gamesService;
