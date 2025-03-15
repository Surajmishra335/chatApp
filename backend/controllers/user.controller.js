 import User from "../models/user.model.js";

 export const getUsersForSidebar = async (req, res) => {
    try {
        const LoggedInUser = req.user;

        const filteredUser = await User.find({ _id: { $ne: LoggedInUser._id } }).select("-password");

        res.status(200).json({ users: filteredUser });
    } catch (error) {
        console.log("error in user controller", error.message);
        res.status(500).json({message: "Something went wrong"});
    }
 }