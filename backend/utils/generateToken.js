import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (res, id) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    res.cookie("jwt", token, {
        httpOnly: true, //prevent xss attack
        maxAge: 30 * 24 * 60 * 60 * 1000,
        sameSite : "strict",
        secure: process.env.NODE_ENV === "production" ? true : false,
    });
}

export default generateTokenAndSetCookie;