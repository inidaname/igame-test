// middlewares/authMiddleware.js
import { verifyToken } from "../helpers/jwt.js";

export function authenticate(req, res, next) {
  const token = req.headers[ 'authorization' ]?.split(' ')[ 1 ];

  if (!token) {
    return res.status(401).json({ message: 'No token provided. Access denied.' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }

  req.user = { userId: decoded.userId };
  next();
}
