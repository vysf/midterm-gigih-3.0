/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-catch */
const UserModel = require('../models/userModel');

class UserRepository {
  async createUser(userData) {
    try {
      const user = new UserModel(userData);
      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserRepository();
