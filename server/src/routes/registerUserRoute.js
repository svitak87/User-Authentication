const { Router } = require("express");
const router = Router();
const registrateUser = require('../controllers/registrateUser');


router.post("/register", async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;
    const registratedUser = await registrateUser({ name, lastname, email, password });
    res.status(201).json(registratedUser);
  } catch (error) {
    if (error.message === "User already exists") {
      res.status(409).json({ error: error.message });
    } else if (error.message === "Incomplete data") {
      res.status(400).json({ error: error.message });
    } else {
      console.error(error.message)
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
