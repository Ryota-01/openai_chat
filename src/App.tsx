import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormSection from "./components/FormSection";
import AnswerSection from "./components/AnswerSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ChatGPT Clone</h1>
        <div className='header-section'>
        </div>
        <p>
          I am an automated question and answer system, designed to assist you
          in finding relevant information. You are welcome to ask me any queries
          you may have, and I will do my utmost to offer you a reliable
          response. Kindly keep in mind that I am a machine and operate solely
          based on programmed algorithms.
        </p>
        <FormSection />
        <AnswerSection />
      </header>
    </div>
  );
}

export default App;
