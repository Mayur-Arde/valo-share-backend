import jwt from 'jsonwebtoken';
import userModel from '../modules/users.js';
import validator from 'validator';

const isValidRegister = (req, res, next) => {
  const userDeatils = req.body;
  const { firstName, lastName, username, email, password } = userDeatils;
  if (!firstName || !lastName || !username || !email || !password) {
    try {
      if (!validator.isEmail(email)) {
        return res.status(400).json({
          message: 'Email is invalid',
        });
      }
      if (
        !validator.password(password, {
          min: 8,
          minSymbols: 0,
          minUppercase: 0,
          minNumbers: 0,
        })
      ) {
        return res.status(400).json({
          message: 'Password is invalid',
        });
      }
      const checkIfEmailExists = await userModel.findOne({ email });
      if (checkIfEmailExists) {
        return res.status(400).json({
          message: 'Email already exists',
        });
      }
      const checkIfUsernameExists = await userModel.findOne({ username });
      if (checkIfUsernameExists) {
        return res.status(400).json({
          message: 'Username already exists',
        });
      }
      next();
    } catch (err) {
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  } else {
    res.status(400).json({
      message: 'All fields are required',
    });
  }
};

const isValidLogin = (req, res, next) => {
  const data = req.body;
  const { email, password } = data;
  if (email && password) {
    try {
      const user = userModel.findOne({ email });
      if (!user) {
        return res.status(400).json({
          message: 'User does not exist',
        });
      } else {
        const isValid = user.comparePassword(password);
        if (isValid) {
          next();
        } else {
          return res.status(400).json({
            message: 'Invalid password',
          });
        }
      }
    } catch (err) {
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  } else {
    return res.status(400).json({
      message: 'All fields are required',
    });
  }
};

const isValidToken = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, 'mayur');
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
};

export { isValidRegister, isValidLogin, isValidToken };