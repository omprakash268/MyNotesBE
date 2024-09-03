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
    origin: ["https://my-personal-notes-ten.vercel.app","http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
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