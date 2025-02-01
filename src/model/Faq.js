const mongoose = require("mongoose");
const { translate } = require("@vitalets/google-translate-api");

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  translations: { type: Map, of: String },
});

faqSchema.methods.getTranslatedText = async function (lang) {
  if (!lang || lang === "en") return { question: this.question, answer: this.answer };

  // Check if the translation already exists in the database
  if (this.translations.has(lang)) {
    return JSON.parse(this.translations.get(lang));
  }

  // If not found, translate and store in the database
  const translatedQuestion = (await translate(this.question, { to: lang })).text;
  const translatedAnswer = (await translate(this.answer, { to: lang })).text;

  // Save the translations in the translations map
  const translatedData = { question: translatedQuestion, answer: translatedAnswer };
  this.translations.set(lang, JSON.stringify(translatedData));
  await this.save();

  return translatedData;
};

const FAQ = mongoose.model("FAQ", faqSchema);
module.exports = FAQ;