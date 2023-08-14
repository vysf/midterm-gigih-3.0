/* eslint-disable no-underscore-dangle */
const InvariantError = require('./InvariantError');

const DomainErrorTranslator = {
  translate(error) {
    return DomainErrorTranslator._directories[error.message] || error;
  },
};

DomainErrorTranslator._directories = {
  'VIDEO.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('Properti Videos ada yang kosong'),
  'VIDEO.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('Properti Videos tidak sesuai tipe data yang diinginkan'),
};

module.exports = DomainErrorTranslator;
