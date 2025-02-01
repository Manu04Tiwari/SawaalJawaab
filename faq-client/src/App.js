import React, { useEffect, useState } from "react";
import { getFAQs, addFAQ } from "./api/faqService.js";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const App = () => {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [questionHi, setQuestionHi] = useState("");
  const [questionBn, setQuestionBn] = useState("");

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    const { data } = await getFAQs();
    setFaqs(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addFAQ({ question, answer, question_hi: questionHi, question_bn: questionBn });
    fetchFAQs();
  };

  return (
    <div className="container">
      <h1>FAQ Management</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={question} placeholder="Enter Question (English)" onChange={(e) => setQuestion(e.target.value)} />
        <input type="text" value={questionHi} placeholder="Enter Question (Hindi)" onChange={(e) => setQuestionHi(e.target.value)} />
        <input type="text" value={questionBn} placeholder="Enter Question (Bengali)" onChange={(e) => setQuestionBn(e.target.value)} />
        <ReactQuill value={answer} onChange={setAnswer} />
        <button type="submit">Add FAQ</button>
      </form>

      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <strong>{faq.question}</strong>
            <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
            <p><strong>Hindi:</strong> {faq.translations.hi}</p>
            <p><strong>Bengali:</strong> {faq.translations.bn}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
