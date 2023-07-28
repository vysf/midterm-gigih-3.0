const RegisterUser = require('../../Domains/users/RegisterUser');

/* eslint-disable no-underscore-dangle */
class RegisterUserUseCase {
  constructor({ usersRepository, passwordHash }) {
    this._usersRepository = usersRepository;
    this._passwordHash = passwordHash;
  }

  async execute(useCasePayload) {
    const registerUser = new RegisterUser(useCasePayload);
    await this._usersRepository.verifyUsername(registerUser.username);
    registerUser.password = await this._passwordHash.hash(registerUser.password);
    return this._usersRepository.add(registerUser);
  }
}

module.exports = RegisterUserUseCase;
