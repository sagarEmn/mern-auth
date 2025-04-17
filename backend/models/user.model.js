import mongoose from "mongoose";

// mongoose.Schema is a class 
// new mongoose.Schema calls the constructor of the class mongoose.Schema
// userSchema holds an instance of the class mongoose.Schema
// that means, userSchema holds the structure of the data that's going to be stored in MongoDB

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    VerificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
// mongoose.model() function takes userSchema object, which then runs its own internal code to process userSchema and build the model

// mongoose.model analyzes userSchema and generates a specialized JS Function 
// this generated function is assigned to const User
// This function stored in User is designed to be called with new keyword

// "User" is a model constructor that creates a document and stores it in the collection in MongoDB called "users"

// "User" provides the interface(a set of methods) to interact with the MongoDB database. 

// When "User" is called with the keyword "new", it models a document using the userSchema object and stores it in the collection in MongoDB called "users"