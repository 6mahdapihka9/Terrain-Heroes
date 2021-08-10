const postReqChecker = (req, res, next)=>{
    //TODO expand list of post request links

    if (req.method === "POST" && (req.url !== "/authorization" || req.url !== "/registration")) {
        console.log("caught post request");
        res.sendStatus(400).render("mainError",{
            styles: ["css/colors.css",
                "css/main.styles.css",
                "css/padding.margin.border.styles.css",
                "css/structure.styles.css"],
            scripts: ["scripts/logout.js"],
            title: "Error",
            user: req.cookies.session
        });
    }
    next();
};

module.exports = postReqChecker;
