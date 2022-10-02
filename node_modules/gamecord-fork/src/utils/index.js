const random = arr => arr[Math.floor(Math.random() * arr.length)];

module.exports = {
    emoji: require("../db/emoji.json"),
    words: require("../db/words.json"),
    quiz: require("../db/quiz.json"),
    random
}