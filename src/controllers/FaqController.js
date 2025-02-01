const FAQ = require("../model/Faq");

// Create FAQ
exports.createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = new FAQ({ question, answer, translations: {} });
    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: "Some issues on our side might have occured while creating your FAQs....rest assured we'll fix it", error });
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
    res.status(500).json({ message: "Some issues on our side might have occured while fetching your translated FAQs....rest assured we'll fix it", error });
  }
};

// Get single FAQ by ID
exports.getFAQById = async (req, res) => {
  try {
    const { id } = req.params;
    const lang = req.query.lang || "en";
    const faq = await FAQ.findById(id);
    if (!faq) return res.status(404).json({ message: "Some issues on our side might have occured while searching your FAQs....rest assured we'll fix it" });
    res.json(await faq.getTranslatedText(lang));
  } catch (error) {
    res.status(500).json({ message: "Some issues on our side might have occured while fetching your FAQs....rest assured we'll fix it", error });
  }
};

// Update FAQ
exports.updateFAQ = async (req, res) => {
  try {
    const { id } = req.params;
    const { question, answer } = req.body;
    const faq = await FAQ.findByIdAndUpdate(id, { question, answer }, { new: true });
    if (!faq) return res.status(404).json({ message: "Some issues on our side might have occured while searching your FAQs....rest assured we'll fix it" });
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: "Some issues on our side might have occured while updating your FAQs....rest assured we'll fix it", error });
  }
};

// Delete FAQ
exports.deleteFAQ = async (req, res) => {
  try {
    const { id } = req.params;
    const faq = await FAQ.findByIdAndDelete(id);
    if (!faq) return res.status(404).json({ message: "Some issues on our side might have occured while searching your FAQs....rest assured we'll fix it" });
    res.json({ message: "Oonoo!! You deleted a FAQ." });
  } catch (error) {
    res.status(500).json({ message: "Some issues on our side might have occured while deleting your FAQs....rest assured we'll fix it", error });
  }
};