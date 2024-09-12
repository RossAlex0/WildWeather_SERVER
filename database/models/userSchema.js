const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 15,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    registration_date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "user" }
);

userSchema.statics.readByEmail = async function (email) {
  try {
    const user = await this.findOne({ mail: email });
    return user;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération de l'utilisateur : " + error.message
    );
  }
};

module.exports = mongoose.model("user", userSchema);
