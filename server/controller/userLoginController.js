import userModel from "../modals/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            throw new Error("Please provide email.");
        }

        if (!password) {
            throw new Error("Please provide password.");
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User not found.")
        }

        const checkPassoword = await bcryptjs.compare(password, user.password);

        console.log("check Password", checkPassoword);

        if (checkPassoword) {
            const tokenData = {
                _id: user.id,
                email: user.email
            }

            const jwtToken = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });
            const jwtTokenOption = {
                httpOnly: true,
                secure: true
            };

            res.cookie("token", jwtToken, jwtTokenOption).json({
                message: "Login Sucessfully",
                data: jwtToken,
                success: true,
                error: false
            });
        } else {
            throw new Error("Please check Password.");
        }
    } catch (err) {
        console.log("Error:", err.message);

        res.json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

export default userLogin;