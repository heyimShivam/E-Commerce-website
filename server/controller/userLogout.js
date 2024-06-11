const userLogout = async (req, res) => {
    try {
        res.clearCookie("token").json({
            message: "Logout successfuly",
            error: false,
            success: true,
            data: []
        });
    } catch (err) {
        console.log("Error:", err.message); 
        res.json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

export default userLogout;