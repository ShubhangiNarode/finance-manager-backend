const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
    try {
        const { title, amount, category } = req.body;
        const expense = new Expense({ userId: req.user, title, amount, category });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
};

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ userId: req.user });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
    }
};
