const urlChecker = (req, res, next)=>{
    let u = req.url;
    // console.log(u);

    if (u === "/" ||
        u === "/rules" ||
        u === "/info" ||
        u === "/lobbies" ||
        u === "/authorization" ||
        u === "/registration" ||
        u.match("\\/games\\/.{3,}") ||
        u.match("script") ||
        u.match("css")) {

        // console.log("url checked");
        next();
    } else
        res.redirect("/");
};

module.exports = urlChecker;
