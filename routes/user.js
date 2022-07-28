import express from 'express';
import { User } from '../models/user.js'
const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json('USER ROOT');
});

router.post('/', (req, res) => {
  res.status(200).json(req.body)
});

export default router;