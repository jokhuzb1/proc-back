import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  amount: { type: Number, required: true },
  period: { type: Number, required: true, min: 6, max: 36 },
  loanDetails: { type: Array, "defauly": [] }
});

export const Loan = mongoose.model("Loan", LoanSchema);