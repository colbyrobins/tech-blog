const Comment = require("../models/Comment");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const comments = [
    {
        comment: "Great post!",
        creator_id: getRandomInt(1, 5),
        post_id: 1,
        date_created: new Date(),
    },
    {
        comment: "I completely agree!",
        creator_id: getRandomInt(1, 5),
        post_id: 1,
        date_created: new Date(),
    },
    {
        comment: "Interesting perspective.",
        creator_id: getRandomInt(1, 5),
        post_id: 2,
        date_created: new Date(),
    },
    {
        comment: "Thanks for sharing!",
        creator_id: getRandomInt(1, 5),
        post_id: 2,
        date_created: new Date(),
    },
    {
        comment: "Well written article.",
        creator_id: getRandomInt(1, 5),
        post_id: 3,
        date_created: new Date(),
    },
    {
        comment: "I learned something new.",
        creator_id: getRandomInt(1, 5),
        post_id: 3,
        date_created: new Date(),
    },
    {
        comment: "Can't wait for the next post!",
        creator_id: getRandomInt(1, 5),
        post_id: 4,
        date_created: new Date(),
    },
    {
        comment: "This is really helpful.",
        creator_id: getRandomInt(1, 5),
        post_id: 4,
        date_created: new Date(),
    },
    {
        comment: "I have a question.",
        creator_id: getRandomInt(1, 5),
        post_id: 5,
        date_created: new Date(),
    },
    {
        comment: "Any recommendations?",
        creator_id: getRandomInt(1, 5),
        post_id: 5,
        date_created: new Date(),
    },
];

const seedComments = () => Comment.bulkCreate(comments);

module.exports = seedComments;


