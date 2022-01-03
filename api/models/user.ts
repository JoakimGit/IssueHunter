import mongoose from "mongoose";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { UserRole } from "../enums/user";

export interface UserDoc extends mongoose.Document {
  email: string;
  name: string;
  role: UserRole;
  company: string;
  hash: string;
  salt: string;
  setPassword: Function;
  validPassword: Function;
  generateJwt: Function;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    role: {
      type: String
    },
    company: {
      type: String
    },
    hash: String,
    salt: String
  },
  { timestamps: true }
);

userSchema.methods.setPassword = function (password: string) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

userSchema.methods.validPassword = function (password: string) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
  return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
      role: this.role,
      company: this.company,
      exp: Date.now() / 1000 + 60 * 60 * 24 * 7
    },
    process.env.JWT_SECRET as string,
    {
      noTimestamp: true
    }
  );
};

const User = mongoose.model<UserDoc>("User", userSchema);

export default User;
