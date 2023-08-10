/* eslint-disable no-console */
const mongoose = require('../databases/mongoose');
const Comment = require('../../../domains/models/commentModel');

mongoose.connectToDatabase();

const comments = [
  {
    name: 'John Doe',
    body: 'Great Video',
    videoId: 'HYzyRHAHJl8',
    imageUrl: 'https://ui-avatars.com/api/?background=random&name=John+Doe&size=128',
  },
  {
    name: 'Peter Parker',
    body: 'Great Video',
    videoId: 'C_6J06wdgXY',
    imageUrl: 'https://ui-avatars.com/api/?background=random&name=Peter+Parker&size=128',
  },
  {
    name: 'Will Wongka',
    body: 'Great Video',
    videoId: 'v4e04hHhmUg',
    imageUrl: 'https://ui-avatars.com/api/?background=random&name=Will+Wongka&size=128',
  },
  {
    name: 'Heisenberg',
    body: 'Great Video',
    videoId: 'AsvGScyj4gw',
    imageUrl: 'https://ui-avatars.com/api/?background=random&name=Heisenberg&size=128',
  },
  {
    name: 'Doctor Doom',
    body: 'Great Video',
    videoId: '7QiLe4pTHAE',
    imageUrl: 'https://ui-avatars.com/api/?background=random&name=Doctor+Doom&size=128',
  },
  {
    name: 'Bruce Wayne',
    body: 'Great Video',
    videoId: 'IsPh0KOhZMI',
    imageUrl: 'https://ui-avatars.com/api/?background=random&name=Bruce+Wayne&size=128',
  },
];

const seedDB = async () => {
  await Comment.deleteMany({});
  await Comment.insertMany(comments);
};

seedDB().then(() => {
  mongoose.disconnectFromDatabase();
  console.log('MONGO CLOSE CONNECTION !!!');
});
