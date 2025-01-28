import { useState } from "react";
import QuestionTest from "./2.0/QuestionTest";
import SelectQuiz from "./2.0/SelectQuiz";
import { BrowserRouter } from "react-router";
import Background from "./2.0/Background";

function App() {
  return (
    <>
      <Background />
      <BrowserRouter>
        <SelectQuiz />
      </BrowserRouter>
    </>
  );
}

export default App;
