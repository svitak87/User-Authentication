const { User } = require("../../src/database/database");

const forgotPassword = async (answerData) => {
  const { answerOne, answerTwo, email } = answerData;
  try {
    if (email && answerOne && answerTwo) {
      const existingUser = await User.findOne({ where: { email: email } });
      if (existingUser) {
        if (
          existingUser.answerOne === answerOne &&
          existingUser.answerTwo === answerTwo
        ) {
          return existingUser;
        } else {
          throw new Error("Incorrect answers");
        }
      } else {
        throw new Error("Email doesn't exist");
      }
    } else {
      throw new Error("Incomplete data provided");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = forgotPassword;
