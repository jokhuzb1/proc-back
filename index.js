import express from 'express';
import productRouter from './routes/products.js';
import userRouter from './routes/user.js';
import loanRouter from './routes/loan.js';
import database from './db/db.js';
import { calculate } from './calculate.js';

const app = express();
calculate(17000, 6)
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.listen(process.env.PORT || 4000, () => console.log('server is up'))

app.use('/products', productRouter);
app.use('/users', userRouter)
app.use('/loan', loanRouter)

app.get('/', (req, res) => {
  res.write("welcome to phone shop");
});

app.get('*', (req, res) => {
  res.status(404).json("Page not found")

})
