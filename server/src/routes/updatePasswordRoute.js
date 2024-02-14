const { Router } = require("express");
const router = Router();
const updatePassword = require('../controllers/updatePassword')

router.put("/recover", async (req, res) => {
  const { password, email } = req.body;
  try {
    const updatedPassword = await updatePassword({ password, email });
    res.status(201).json('User updated');
  } catch (error) {
    if (
      error.message === "There's not an existing user with that email" ||
      error.message === "Incomplete data"
    ) {
      res.status(403).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
