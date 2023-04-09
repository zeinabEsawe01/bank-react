const express = require('express')
const router = express.Router()
const Transaction = require('../model/transaction')


// ///////// Retrieving all the transactions.
router.get('/transactions', function (req, res) {
    Transaction.find({}).then(function (transaction) {
        res.send(transaction)
    })   
})


/////////// Adding a transaction.
router.post("/transaction", async (req, res) => {
    try {
      const transaction = new Transaction(req.body);
      await transaction.save();
      res.send(transaction);
    } catch (error) {
      res.send(error);
    }
  });


////////// Deletion a transaction.
router.delete('/transaction/:id' , function (req, res) {
    let id = req.params.id;
    Transaction.findOneAndDelete({_id: id,}).then(() => {
        res.send({message: "transaction deleted"})
})
})

////////// Getting a breakdown of the sum of transactions per category.
router.get("/transactions/categories", async (req, res) => {
    const catagorySum = await Transaction.aggregate([
      { $group: { _id: "$category", total: { $sum: "$amount" } } },
    ]);
    res.send(catagorySum);
  });


module.exports = router