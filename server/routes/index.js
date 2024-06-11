import express from "express";
import userSignUp from "../controller/userSignUpController.js";
import userLogin from "../controller/userLoginController.js";
import userDetails from "../controller/userDetails.js";
import authToken from "../middleware/authToken.js";
import userLogout from "../controller/userLogout.js";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.get("/logout", userLogout);
router.get("/user-details", authToken, userDetails);

export default router;