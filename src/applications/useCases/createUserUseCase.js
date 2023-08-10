const UserEntity = require('../../domains/entities/UserEntity');
const UserRepository = require('../../domains/repositories/userRepository');

class CreateUserUseCase {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(userData) {
    const user = new UserEntity(userData);
    const registeredUser = await this.userRepository.createUser(user);
    return registeredUser;
  }
}

module.exports = CreateUserUseCase;
