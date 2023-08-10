/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class ProductEntitiy {
  constructor(payload) {
    this._verifyPayload(payload);
    const {
      _id: id, title, description, thumbnail, price,
    } = payload;

    this.id = id;
    this.title = title;
    this.description = description;
    this.thumbnail = thumbnail;
    this.price = price;
  }

  _verifyPayload({
    _id: id, title, description, thumbnail, price,
  }) {
    if (!id || !title || !description || !thumbnail || !price) {
      throw new Error('PRODUCT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'object'
      || typeof title !== 'string'
      || typeof description !== 'string'
      || typeof thumbnail !== 'string'
      || typeof price !== 'number'
    ) {
      throw new Error('PRODUCT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = ProductEntitiy;
