/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class RegisterUser {
  constructor(payload) {
    this._verifyPayload(payload);

    const { username, password, email } = payload;

    this.username = username;
    this.password = password;
    this.email = email;
  }

  _verifyPayload({ username, password, email }) {
    if (!username || !password || !email) {
      throw new Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof username !== 'string' || typeof password !== 'string' || typeof email !== 'string') {
      throw new Error('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (username.length > 50) {
      throw new Error('REGISTER_USER.USERNAME_LIMIT_CHAR');
    }

    if (!username.match(/^[\w]+$/)) {
      throw new Error('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER');
    }

    if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      throw new Error('REGISTER_USER.EMAIL_INCORECT_FORMAT');
    }
  }
}

module.exports = RegisterUser;
