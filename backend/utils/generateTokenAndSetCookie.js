import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    // token contains: 
    // - encoded header (info about the token type & signing algorithm)
    // - encoded payload ({ userId })
    // - signature (created using header, payload, JWT_SECRET)

    res.cookie("token", token, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === "production", 
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        sameSite: "Strict", 
    });
    // res.cookie places the cookie named "token" with the JWT string as it's value into the HTTP response header's(Set-Cookie) header
    // this response is sent back only to the specific browser that initiated the request
    // eg: the browser where the user just signed up or logged in
    // the user's browser receives this response and automatically stores the cookie, associates this cookie with your website's domain
    // From then on, the browser will automatically include this cookie in future requests from that user to your server

    return token;
}