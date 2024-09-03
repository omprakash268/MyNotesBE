import express from 'express';
import dotenv from 'dotenv';
import notesRouter from './Router/notesRouter.js';
import dbConnect from './db/dbConnect.js';
import cors from 'cors';

dotenv.config();

// Server intialization
const app = express();

// DB connect 
dbConnect();

// JSON body parser
app.use(express.json());

// ACCESS ALLOW ORIGIN - CORS ERROR HANDLING
app.use(cors({
    origin: ["https://my-personal-notes-ten.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));


// Routing
app.get('/', (req, res) => {
    res.send("Status ok.");
})
app.use("/note", notesRouter);


// Server listening
app.listen(process.env.PORT, (err) => {
    console.log("server started")
});