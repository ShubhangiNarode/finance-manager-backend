const express = require("express");
const {
    addTransaction,
    getTransaction,
    deleteTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

router.post("/addTransaction", addTransaction);
router.get("/getTransaction", getTransaction);
router.delete("/deleteTransaction/:id", deleteTransaction);

module.exports = router;
