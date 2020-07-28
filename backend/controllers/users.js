const User = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash,
    });

    user.save();
    const response = await res
      .status(201)
      .json({ message: "User created successfully!" });
  } catch (error) {
    const response = await res.status(500).json({ error });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(401).json({ error: new Error("User not found!") });
    } else {
      const valid = await bcrypt.compare(req.body.password, user.password);

      if (!valid) {
        return res
          .status(401)
          .json({ error: new Error("Incorrect Password!") });
      }
      const token = jwt.sign({ userId: user.userId }, "SECRET_WORD", {
        expiresIn: "24h",
      });
     return res
        .status(200)
        .json({ userId: user.id, token: token });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err });
  }
};
