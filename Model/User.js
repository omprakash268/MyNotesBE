import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true ,unique:true },
    password: { type: String, required: true },
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }]
});

const User = mongoose.model("User",userSchema);

export default User;