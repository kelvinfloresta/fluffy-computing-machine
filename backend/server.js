const express = require("express");

const app = express();

const transactions = [];

app.post("/transactions", (req, res, next) => {
  const { amount, description } = req.body;

  transactions.push({ id: transactions.length, amount, description });

  res.sendStatus(201);
});

app.get("/transactions", (req, res, next) => {
  res.send(transactions);
});

module.exports = {
  start: () =>
    new Promise((res) => {
      app.listen(3000, () => {
        console.log("Running");
        res();
      });
    }),
};
