/* eslint-disable no-param-reassign */
function paginate(pageNumber, pageSize) {
  pageNumber = parseInt(pageNumber, 10);
  pageSize = parseInt(pageSize, 10);

  if (Number.isNaN(pageNumber) || pageNumber <= 0) {
    pageNumber = 1;
    // throw new Error('Invalid pageNumber');
  }

  if (Number.isNaN(pageSize) || pageSize <= 0) {
    pageSize = 10;
    // throw new Error('Invalid pageSize');
  }
  const skip = (pageNumber - 1) * pageSize;
  return { pageNumber, pageSize, skip };
}

module.exports = {
  paginate,
};
