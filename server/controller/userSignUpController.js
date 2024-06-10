import userModel from "../modals/userModel.js";
import bcryptjs from "bcryptjs";

const userSignUp = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        const user = await userModel.findOne({email});
        if(user) {
            throw new Error("User already exists.")
        }

        if (!email) {
            throw new Error("Please provide email.");
        }
        if (!password) {
            throw new Error("Please provide password.");
        }
        if (!username) {
            throw new Error("Please provide username.");
        }

        const salt = bcryptjs.genSaltSync(10);
        const hashPassword = await bcryptjs.hashSync(password, salt);

        if(!hashPassword) {
            throw new Error("Something is went wrong."); 
        }

        const payload = {
            ... req.body,
            role: "GENERAL",
            password: hashPassword
        };

        const userData = new userModel(payload);
        const saveUser = await userData.save();

        res.status(201).json({
            data: saveUser,
            success: true,
            error: false,
            message: "User has been created successfully."
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

export default userSignUp;