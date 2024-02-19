const User = require("../model/auth");

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
   
    login,
  };
  