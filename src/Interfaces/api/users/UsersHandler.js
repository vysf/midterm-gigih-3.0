/* eslint-disable no-underscore-dangle */
class UsersHandler {
  constructor(injection) {
    this._container = injection;

    this.postUser = this.postUser.bind(this);
  }

  async postUser(req, res) {
    const { registerUserUseCase } = this._container;
    try {
      const user = await registerUserUseCase.execute(req.body);

      const response = {
        status: 'success',
        data: {
          user,
        },
      };

      res.status(200).send(response);
    } catch (error) {
      const response = {
        status: 'fail',
        message: error.message,
      };

      res.status(400).send(response);
    }
  }
}

module.exports = UsersHandler;
