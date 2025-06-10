import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ["student", "parent"],
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  agreeMarketing: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model("User", userSchema);
export default User;
