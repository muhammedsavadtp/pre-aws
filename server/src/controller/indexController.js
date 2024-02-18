const User = require("../model/userModel");

exports.home = (req, res) => {
  res.json("Hello, World!....");
};
exports.alluserdata = async (req, res) => {
  try {
    const userDataExist = await User.find({});
    if (userDataExist) {
      return res.status(201).send(userDataExist);
    } else {
      return res.status(404).send("No data found!");
    }
  } catch (error) {
    console.log(error);
  }
};
