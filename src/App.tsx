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
        </p>
        <FormSection />
        <AnswerSection />
      </header>
    </div>
  );
}

export default App;
