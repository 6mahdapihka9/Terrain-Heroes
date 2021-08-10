const logoutUser = ()=>{
    console.warn("user logged out");
    document.cookie = "session=0; max-age=0";
    window.location.href = "../";
};
