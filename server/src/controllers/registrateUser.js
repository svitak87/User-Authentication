const { User } = require("../../src/database/database");

const registrateUser = async (userData) => {
  const { name, lastname, email, password } = userData;
  try {
    if (name && lastname && email && password) {
      const newUser = await User.create({ name, lastname, email, password });
      return newUser;
    } else {
      throw new Error("Incomplete data");
    }
  } catch (error) {
    throw error;
  }
};

module.exports = registrateUser;
