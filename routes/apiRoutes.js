const express = require("express");
const { check, validationResult } = require("express-validator");
const { testAPI, postData } = require("../controllers/apiController");

const router = express.Router();

router.get("/test", testAPI);

router.post(
    "/data",
    [
        check("name", "Name is required").not().isEmpty(),
        check("email", "Valid email is required").isEmail(),
    ],
    postData
);

module.exports = router;
