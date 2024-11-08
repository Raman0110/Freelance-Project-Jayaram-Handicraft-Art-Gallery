import jwt from "jsonwebtoken";

const verifyAuth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Token not found" });
  jwt.verify(token, process.env.SECRET, (err, payload) => {
    if (err) return res.status(401).json({ message: "Invalid Token" });
    req.userId = payload.id;
    next();
  })
}

export default verifyAuth;