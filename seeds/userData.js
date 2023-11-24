const User = require('../models/User');
const bcrypt = require('bcrypt');

const seedUser = async () => {

  const userData = [
    {
      "name": "Sal",
      "email": "sal@hotmail.com",
      "password": "Password123"
    },
    {
      "name": "Lernantino",
      "email": "lernantino@gmail.com",
      "password": "Password123"
    },
    {
      "name": "Amiko",
      "email": "amiko2k20@aol.com",
      "password": "Password123"
    },
    {
      "name": "John",
      "email": "john@example.com",
      "password": "Password123"
    },
    {
      "name": "Jane",
      "email": "jane@example.com",
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
  