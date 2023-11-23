const User = require('../models/User');

const userData = [
  {
    "name": "Sal",
    "email": "sal@hotmail.com",
    "password": "password12345"
  },
  {
    "name": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "password12345"
  },
  {
    "name": "Amiko",
    "email": "amiko2k20@aol.com",
    "password": "password12345"
  },
  {
    "name": "John",
    "email": "john@example.com",
    "password": "password12345"
  },
  {
    "name": "Jane",
    "email": "jane@example.com",
    "password": "password12345"
  }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
  