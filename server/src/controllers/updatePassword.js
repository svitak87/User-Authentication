const { User } = require("../../src/database/database");
const bcrypt = require("bcrypt");

const updatePassword = async (userCredentials) => {
  const { password, email } = userCredentials;
  try {
    if (password && email) {
      const userFound = await User.findOne({ where: { email: email } });
      if (userFound) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const updatedUser = await User.update(
          { password: hashedPassword },
          { where: { email: email } } 
        );
        return updatedUser; 
      } else {
        throw new Error("There's not an existing user with that email");
      }
    } else {
      throw new Error("Incomplete data");
    }
  } catch (error) {
    throw error;
  }
};


module.exports = updatePassword;
