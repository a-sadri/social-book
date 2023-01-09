import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
  try {
    let toekn = req.header('Authorization');

    if (!toekn) {
      return res.status(403).send('Access Denied!');
    }

    if (toekn.startWith('Bearer ')) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
