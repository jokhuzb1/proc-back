import express from 'express';
import { calculate } from '../calculate.js';
import { Loan } from '../models/loan.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json("Root dir");
});

router.post('/', (req, res) => {
  const { userId, amount, period } = req.body;

  const loanDetails = calculate(amount, period)
  try {
    const newLoan = new Loan({
      userId, amount, period, loanDetails
    })
    newLoan.save()
    res.status(200).json(newLoan);
  } catch (err) {
    res.status(401).json(err)
  }
});

router.put('/', async (req, res) => {
  const newData = {
    userId: req.body.userId,
    amount: req.body.amount,
    prediod: req.body.period,
    loanDetails: req.body.loanDetails
  }
  try {
    const user = await Loan.findOneAndUpdate({ userId: req.body.userId }, newData, { new: true });

    if (!user) return res.status(500).send("Loan with current userID not found");
    res.send(user)
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong")
  }

});

export default router;