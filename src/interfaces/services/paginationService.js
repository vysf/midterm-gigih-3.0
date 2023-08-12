/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */

// I will use this in the future
async function paginate(model, query = {}, currentPage = 1, limit = 10) {
  try {
    if (Number.isNaN(currentPage) || currentPage <= 0) {
      currentPage = 1;
    }

    if (Number.isNaN(limit) || limit <= 0) {
      limit = 10;
    }
    const skip = (currentPage - 1) * limit;

    const totalDocument = await model.countDocuments();
    const totalPages = Math.ceil(totalDocument / limit);
    const document = await model.find(query).skip(skip).limit(limit);

    return {
      document, currentPage, limit, totalPages,
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

async function cursorPaginate(model, query = {}, limit = 10, cursor = null, sortedByField = '_id') {
  try {
    if (Number.isNaN(limit) || limit <= 0) {
      limit = 10;
    }

    const sortDirection = cursor ? -1 : 1;
    const sortedQuery = { [sortedByField]: sortDirection };
    const paginationQuery = cursor ? { ...query, [sortedByField]: { $lt: cursor } } : query;

    const document = await model.find(paginationQuery).sort(sortedQuery).limit(limit);
    const nextCursor = document.length > 0 ? document[document.length - 1]._id : null;

    return {
      items: document,
      cursor: nextCursor,
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  paginate,
  cursorPaginate,
};
