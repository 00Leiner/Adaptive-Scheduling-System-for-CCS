import { Request, Response, NextFunction } from 'express';

// Simulated user data (replace with your actual authentication logic)
const authorizedUser = {
  username: 'yourusername',
  password: 'yourpassword',
};

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const { username, password } = req.headers;

  if (username === authorizedUser.username && password === authorizedUser.password) {
    // Authentication successful, proceed to the next middleware or route handler
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

export default authMiddleware;