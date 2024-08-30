const test = async (req, res, next) => {
    res.send("Hi, try 'http://localhost:3310/api/users'");
};

module.exports = { test };