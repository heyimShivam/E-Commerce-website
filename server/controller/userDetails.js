const userDetails = async (req, res) => {
    try{
        res.json("done");
    } catch(err) {
        console.log("Error: ", err);
        
        res.status(400).json({
            message: err || err.message,
            error: true,
            success: false
        });
    }
}

export default userDetails;