import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = res.cookies.token;
  // token string contains header, payload & signature of the cookie
  // header - metadeta about the token: typ (JWT), alg (SHA-256, HS256)
  // payload - object containing userId: value
  // signature - fully visbile

  if (!token) {
    res.status(401).json({
      success: false,
      message: "Unauthorized - no token provided",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // jwt.verify takes header, payload from received token
    // using process.env.JWT_SECRET variable, it re-calculates the signature
    // compares re-calculated signature with original signature from token

    if (!decoded) {
      res.status(401).json({
        success: false,
        message: "Unauthorized - invalid token",
      });
    }

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
