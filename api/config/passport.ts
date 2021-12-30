import passport from "passport";
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    async (username: string, password: string, done: Function) => {
      try {
        const user = await User.findOne({ email: username });
        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        if (!user.validPassword(password)) {
          return done(null, false, { message: "Password is wrong" });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
