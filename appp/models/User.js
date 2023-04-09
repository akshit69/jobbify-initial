import mongoose from "mongoose";
import validator from "validator";

const User = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },

  email: {
    type: String,
    require: [true, "please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "please provide vaid email",
    },
    unique: true,
  },
  password: {
    type: String,
    require: [true, "please provide password"],
    minlength: 6,
  },

  LastName: {
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 20,
    default: "last name",
  },

  location: {
    type: String,
    minlength: 3,
    maxlength: 20,
    trim: true,
    default: "my city",
  },
});

export default mongoose.model("User", UserSchema);
