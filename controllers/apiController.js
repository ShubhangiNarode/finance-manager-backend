const { validationResult } = require("express-validator");

const testAPI = (req, res) => {
    res.json({ message: "API is working!" });
};

const postData = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email } = req.body;
    res.status(201).json({ message: "Data received", data: { name, email } });
};

module.exports = { testAPI, postData };
