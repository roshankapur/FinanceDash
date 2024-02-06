import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import { MongoClient, ServerApiVersion } from "mongodb";


/* CONFIG */
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* MONGOOSE SETUP*/
const PORT = process.env.PORT || 9000;
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
}).then(async() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

}).catch((error) => console.log(`${error} did not connect`));


/*
mongodb-js is connecting to database but i need mongoose for strict data modelling. 

const client = new MongoClient(process.env.MONGO_URL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect().then(async() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));*/