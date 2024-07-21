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
        </p>
        <FormSection />
        <AnswerSection />
      </header>
    </div>
  );
}

export default App;
