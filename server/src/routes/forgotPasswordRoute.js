const { Router } = require("express");
const router = Router();
const forgotPassword = require('../controllers/forgotPassword');

router.post("/recover", async (req, res) => {
  const { answerOne, answerTwo, email } = req.body;
  try {
    await forgotPassword({ answerOne, answerTwo, email });
    res.status(200).json("Correct answers");
  } catch (error) {
    if (error.message === "Incorrect answers") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

module.exports = router;
