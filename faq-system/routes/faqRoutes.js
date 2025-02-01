const express = require("express");
const router = express.Router();
const FAQ = require("../models/FAQ");
const express = require("express");
const pool = require("../config/db");

// Add a new FAQ
router.post("/add", async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = new FAQ({ question, answer });
    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all FAQs
router.get("/", async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an FAQ
router.put("/:id", async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = await FAQ.findByIdAndUpdate(req.params.id, { question, answer }, { new: true });
    res.json(faq);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an FAQ
router.delete("/:id", async (req, res) => {
  try {
    await FAQ.findByIdAndDelete(req.params.id);
    res.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Add a new FAQ with translations
router.post("/add", (req, res) => {
  const { question, answer, question_hi, question_bn } = req.body;
  pool.query(
    "INSERT INTO faqs (question, answer, question_hi, question_bn) VALUES (?, ?, ?, ?)",
    [question, answer, question_hi || null, question_bn || null],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId, question, answer, question_hi, question_bn });
    }
  );
});

// Get all FAQs
router.get("/", (req, res) => {
  pool.query("SELECT * FROM faqs", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    // Dynamically return translated text if available
    const formattedResults = results.map(faq => ({
      id: faq.id,
      question: faq.question,
      answer: faq.answer,
      translations: {
        hi: faq.question_hi || faq.question, 
        bn: faq.question_bn || faq.question
      }
    }));

    res.json(formattedResults);
  });
});

module.exports = router;
