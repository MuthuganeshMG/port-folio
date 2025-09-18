const userModel = require("../models/model");

exports.createUser = async (req, res) => {
  try {
    const { name, email, message,about } = req.body;
    const user = await userModel.create({
      name,
      email,
      message,
      about
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log("Message failed to send");
  } 
};

exports.getUser = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json(user);
    console.log({ message: "user message fetched successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log({ error: "user message getting failed" });
  }
};
