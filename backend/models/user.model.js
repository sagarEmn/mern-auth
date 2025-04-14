import mongoose from "mongoose";

// mongoose.Schema is a class constructor 
// userSchema holds a Mongoose schema object
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
// mongoose.model() function takes userSchema object, which then runs its own intenral code to process userSchema and build the model

// "User" is a model constructor that creates a document and stores it in the collection in MongoDB called "users"
// "User" provides the interface(a set of methods) to interact with the MongoDB database. 
// "User" provides methods like find, findOne, create, update, delete, etc. 

// "User" models a document using the userSchema object and stores it in the collection in MongoDBcalled "users"