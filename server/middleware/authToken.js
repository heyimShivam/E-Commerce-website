import jwt from 'jsonwebtoken';

const authToken = async (req, res, next) => {
    try{
        const jwtToken = req.cookies?.token;

        if(!jwtToken) {
            return res.status(200).json({
                message: "User not logged in.",
                error: true,
                success: false
            })
        }
        jwt.verify(jwtToken, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
            if(err) {
                console.log("Error auth: ", err)
            }

            req.user.id = decoded?._id;
            req.user.email = decoded?.email;
            next();
        })
        console.log("jwtToken", jwtToken);

    } catch(err) {
        console.log("Error: ", err);
        
        res.json({
            message: err.message || err,
            data: [],
            error: true,
            success: false
        });
    }
}

export default authToken;