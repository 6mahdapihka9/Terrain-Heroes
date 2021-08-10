const isSessionValid = (req,res,next)=>{
    if(req.cookies.session) {
        next();
    } else {
        res.send(`
            <h1>You must authorize to see this page!</h1>
            <p>You will be redirected to dashboard.</p>
            <script src="scripts/redirect.to.dashboard.js"></script>
        `);
    }
};

module.exports = isSessionValid;
