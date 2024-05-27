import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    image: String

}, {
    timestamps: true
})

const userModel = mongoose.model("user", userSchema);

export default userModel;