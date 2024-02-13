const { Router } = require("express");
const router = Router();
const getAllUsers = require('../controllers/getAllUsers');

router.get("/", async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    if (error.message === "There are no users") {
      res.status(404).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
