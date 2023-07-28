const UserModel = require('../database/mongoDB/models/user');

function UsersRepositoryMongo(idGenerator) {
  const add = async (userEntity) => {
    const id = `user-${idGenerator()}`;
    const user = new UserModel({ _id: id, ...userEntity });
    return user.save();
  };

  const findById = async (id) => {
    try {
      const user = await UserModel.findById({ _id: id }).select('-password');
      return user;
    } catch (error) {
      throw new Error('id tidak ditemukan');
    }
  };

  const findByUsername = async (username) => {
    try {
      const user = await UserModel.findOne({ username }).select('-password');
      return user;
    } catch (error) {
      throw new Error('username tidak ditemukan');
    }
  };

  const verifyUsername = async (username) => {
    const user = await UserModel.findOne({ username }).select('-password');
    if (user) {
      throw new Error('username sudah terdaftar');
    }
  };

  const findAll = async () => {
    try {
      const users = await UserModel.find({}).select('-password');
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const updateById = async (id) => {
    try {
      const user = await UserModel.findByIdAndUpdate({ _id: id });
      return user;
    } catch (error) {
      throw new Error('id tidak ditemukan');
    }
  };

  const deleteById = async (id) => {
    try {
      const user = await UserModel.findByIdAndDelete({ _id: id });
      return user;
    } catch (error) {
      throw new Error('id tidak ditemukan');
    }
  };

  return {
    add,
    findById,
    findByUsername,
    findAll,
    updateById,
    deleteById,
    verifyUsername,
  };
}

module.exports = UsersRepositoryMongo;
