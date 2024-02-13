const { User } = require("../../src/database/database");

const getAllUsers = async () => {
  try {
    const allUsers = User.findAll();

    if (allUsers.length === 0) {
      throw new Error("There are no users");
    } else {
      return allUsers;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = getAllUsers;
