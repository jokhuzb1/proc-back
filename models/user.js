import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
  initial: { type: String },
  payments: { type: Array, "default": [] },
},
  { timestamp: true })


const UserSchema = new mongoose.Schema({
  username: { type: String, require: true },
  loan: { type: Array, "default": [] }

})

export const User = mongoose.model('User', UserSchema);

