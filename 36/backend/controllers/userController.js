const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    console.log(1);
    const { username, email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log(2);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        console.log(3);
        await newUser.save();
        console.log(4);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: `Internal server error: ${error}` });
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const me = async (req, res) => {
  try {
    res.json({
      _id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      admin: req.user.admin,
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
    register,
    login, 
    me,
};
