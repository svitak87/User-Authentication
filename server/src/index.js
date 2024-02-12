const server = require("./server");
const { database } = require("./database/database");
const PORT = process.env.PORT || 3001;

const main = async () => {
  try {
    await database.sync({force: false})
    server.listen(PORT, () => {
      console.log(`Running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
