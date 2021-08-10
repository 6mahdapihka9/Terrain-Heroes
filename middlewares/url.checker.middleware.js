const urlChecker = (req, res, next)=>{
    let u = req.url;

    if (u === "/" ||
        u === "/rules" ||
        u === "/info" ||
        u === "/lobbies" ||
        u === "/authorization" ||
        u === "/registration" ||
        u.match("\\/games\\/.{3,}") ||
        u.match("script") ||
        u.match("css")) {

        next();
    } else
        res.redirect("/");
};

module.exports = urlChecker;
