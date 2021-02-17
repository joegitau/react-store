import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// match user login details
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcryptjs.compare(enteredPassword, this.password); // this.password will exist within users.js routes (serves as controller)
}

const User = mongoose.model("User", userSchema);

export default User;
