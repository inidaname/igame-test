import express from "express"
import routes from "./routes/index.js";
import morgan from "morgan";
import dotenv from "dotenv"

dotenv.config({ path: ".env" })

const app = express();
const port = process.env.PORT;

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }

  next();
});

app.use(routes)
app.use(morgan('dev'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});