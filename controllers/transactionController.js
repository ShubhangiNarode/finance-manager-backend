const Transaction = require("../models/Transaction");

// Add Transaction
const addTransaction = async (req, res) => {
    try {
        const { title, amount, type } = req.body;
        const newTransaction = new Transaction({ title, amount, type });

        await newTransaction.save();
        res.status(201).json({ message: "Transaction added", transaction: newTransaction });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Get Transactions
const getTransaction = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// Delete Transaction
const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        await Transaction.findByIdAndDelete(id);
        res.status(200).json({ message: "Transaction deleted" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = { addTransaction, getTransaction, deleteTransaction };
