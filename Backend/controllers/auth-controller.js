const User = require("../model/auth"); // Import User model

const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users || users.length === 0) {
    return res.status(404).json({ message: "No User found" });
  }
  return res.status(200).json({ users });
};

const addUser = async (req, res, next) => {
  let user;
  const { name, email, password, conpassword } = req.body;
  try {
    user = new User({
      // Use User instead of auth
      name,
      email,
      password,
      conpassword,
    });
    await user.save();
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Unable To Add User" });
  }
  return res.status(201).json({ user });
};

const login = async (req, res, next) => {
    const { email, password } = req.body;
  
    try {
      const users = await User.find({ email });
  
      if (!users || users.password !== password) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      return res.status(200).json({ message: "Login successful", users });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  };


module.exports = {
  getAllUser,
  addUser,
  login,
};
