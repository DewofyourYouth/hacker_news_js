import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validate: (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.exec(v),
      message: (props) =>
        `The email address of '${props.value}' is not a valid email address`,
    },
    password: {
      type: String,
      required: true,
    },
  },
});

// UserSchema.pre("save", async function (next) {
//   const user = this;
//   if (user.isModified("password")) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });

export const User = mongoose.model("User", UserSchema);

// Helper functions
export async function createUser(username, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
}
