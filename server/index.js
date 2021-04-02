import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"

import postRoutes from './routes/posts.js'

// initialize app
const app = express();
dotenv.config()

//bodyParser will allow to properly send request
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// set up middleware for /posts routes
app.use('/posts', postRoutes)

app.get('/', (req, res) => {
  res.send('Hello to memories API')
})

// const CONNECTION_URL =
//   "mongodb+srv://admin:1JlkPHZuuRgiihtP@cluster0.phfrc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
