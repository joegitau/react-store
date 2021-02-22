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

// Hash passwords on 'saving' model
userSchema.pre('save', async function (next) {
  // prevent running if password isn't updated
  if (!this.isModified('password')) {
    next();
  }

  const salt = bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
