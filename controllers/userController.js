// controllers/userController.js
const Joi = require('joi');
const User = require('../models/user');

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

async function createUser(req, res) {
  try {
    // Validate request payload using Joi schema
    const { error } = userSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Create the user
    const user = await User.create(req.body);

    return res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  createUser,
};
