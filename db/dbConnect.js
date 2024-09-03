import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://omprakashmaurya268:${process.env.DB_PASS}@cluster0.ogeyl.mongodb.net/MyNotes?retryWrites=true&w=majority&appName=Cluster0`;

main().catch(err => console.log(err));

async function main() {

    await mongoose.connect(uri);

}

export default main;