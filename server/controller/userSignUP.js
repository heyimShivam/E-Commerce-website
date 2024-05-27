import userModel from "../modals/userModel";

async function userSignUpController(req, res) {
    try {
        const [email, password, username] = req.body;

        if(!email) {
            throw new Error("Please provide email.");
        }
        if(!password) {
            throw new Error("Please provide password.");
        }
        if(!username) {
            throw new Error("Please provide username.");
        }

        const userData = new userModel(
            req.body
        );
    } catch(err) {
        res .json({
            message: err,
            error: true,
            success: false
        })
    }
}