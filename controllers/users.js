import userModel from '../modules/users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const getAllUsers = async (req, res) => {};

export const loginUser = async (req, res) => {
  const loginDetails = req.body;
  const { email, password } = loginDetails;
  const { dbpassword } = userModel;

  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, dbpassword);
      if (isPasswordValid) {
        const token = jwt.sign({ userId: user_id }, 'secret', {
          expiresIn: '24h',
        });
        res.status(200).json({
          success: true,
          message: 'user loggin successful',
          token,
          user,
        });
      } else {
        res.status(400).json({
          success: false,
          message: "That didn't worked, please try again!",
        });
      }
    }
  } catch (error) {
    console.log(`error in sign up `);
    res.json({ success: false, message: 'sign up failed, please try again' });
  }
};

export const signup = async (req, res) => {
  const userDetails = req.body;
  const { firstName, lastName, username, email, password } = userDetails;

  try {
    const hashedPassword = bcrypt.hashSync(password, salt);
    const newUser = await userModel.create({
      firstName,
      lastName,
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      password: hashedPassword,
      bio: '',
    });
    res.status.json({ success: true, message: 'sign up sucessfully' }, newUser);
  } catch (error) {
    console.log(`error in sign up `);
    res.json({ success: false, message: 'sign up failed, please try again' });
  }
};

export const getUserById = async (req, res) => {};

export const updateUserData = async (req, res) => {};

export const addNotifs = async (req, res) => {};

export const updateFollowingAndFollowersCount = async (req, res) => {};
