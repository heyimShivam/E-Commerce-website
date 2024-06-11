import userModel from "../modals/userModel.js";

const userDetails = async (req, res) => {
    try{
        console.log(req.id, req.email);
        const user = await userModel.findById(req.id);
        if(user) {
            const userDetails = {
                username: user.username,
                email: user.email,
                image: user.image,
            };

            res.status(200).json({
                data: userDetails,
                error: false,
                success: true,
                message: "User details."
            });
        } else {
            throw new Error("User not found.");
        }
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