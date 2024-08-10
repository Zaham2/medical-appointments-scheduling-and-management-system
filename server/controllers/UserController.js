const userService = require('../services/user.service');

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUserByClientId = async (req, res) => {
  try {
    const user = await userService.getUserById(req.body?.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    // res.status(500).json({ error: error.message });
    console.error(error)
  }
};

module.exports = {
  createUser,
  getUserByClientId,
};
