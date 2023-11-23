const sequelize = require('../config/connection');

const seedUser = require('./userData');
const seedBlogPost = require('./blogPostData');
const commentData = require('./commentData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log('\n----- SYNCING DATABASE -----\n');

  await seedUser();
  await seedBlogPost();
  await commentData();
  
  console.log('\n----- DATABASE SYNCED -----\n');
  
  process.exit(0);
};

seedDatabase();