import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  // client sends the req to server, server accesses req object that contains cookie
  // token string contains header, payload & signature of the cookie
  // header - metadeta about the token: typ (JWT), alg (SHA-256, HS256)
  // payload - object containing userId: value
  // signature - fully visbile

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - no token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // jwt.verify takes header, payload from received token
    // using process.env.JWT_SECRET variable, it re-calculates the signature
    // compares re-calculated signature with original signature from token
    // holds the userId(payload) object

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - invalid token",
      });
    }

    // req object is an HTTP request message sent by the client
    // to make the userId available to other server-side functions, req.userId creates a new property directly on req object
    // req.userId property is discarded and cleaned up by the JavaScript engine (garbage collection) after a res is sent by the server
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error in verifyToken: ", error);
    return res.status(401).json({
      success: false,
      message: "Server error",
    });
  }
};
