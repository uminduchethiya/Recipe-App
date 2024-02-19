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




module.exports = {
  getAllUser,
  addUser,
  login,
};
