const User = require('../models/User');
const bcrypt = require('bcrypt');

const seedUser = async () => {

  const userData = [
    {
      "username": "Sal",
      "password": "Password123"
    },
    {
      "username": "Lernantino",
      "password": "Password123"
    },
    {
      "username": "Amiko",
      "password": "Password123"
    },
    {
      "username": "John",
      "password": "Password123"
    },
    {
      "username": "Jane",
      "password": "Password123"
    }
  ];

  const hashedUsers = await Promise.all(userData.map(async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return { ...user, password: hashedPassword };
  }));

  await User.bulkCreate(hashedUsers);
};

module.exports = seedUser;
  