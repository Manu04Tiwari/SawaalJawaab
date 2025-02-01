const FAQ = require("../model/Faq");

// Create FAQ
exports.createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = new FAQ({ question, answer, translations: {} });
    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: "Error creating FAQ", error });
  }
};

// Get FAQs with translation support
exports.getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    const faqs = await FAQ.find();
    const translatedFaqs = await Promise.all(faqs.map(faq => faq.getTranslatedText(lang)));
    res.json(translatedFaqs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching FAQs", error });
  }
};

// Get single FAQ by ID
exports.getFAQById = async (req, res) => {
  try {
    const { id } = req.params;
    const lang = req.query.lang || "en";
    const faq = await FAQ.findById(id);
    if (!faq) return res.status(404).json({ message: "FAQ not found" });
    res.json(await faq.getTranslatedText(lang));
  } catch (error) {
    res.status(500).json({ message: "Error fetching FAQ", error });
  }
};

// Update FAQ
exports.updateFAQ = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;
    const faq = await FAQ.findByIdAndUpdate(id, { question, answer }, { new: true });
    if (!faq) return res.status(404).json({ message: "FAQ not found" });
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: "Error updating FAQ", error });
  }
};

// Delete FAQ
exports.deleteFAQ = async (req, res) => {
  try {
    const { id } = req.params;
    const faq = await FAQ.findByIdAndDelete(id);
    if (!faq) return res.status(404).json({ message: "FAQ not found" });
    res.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting FAQ", error });
  }
};