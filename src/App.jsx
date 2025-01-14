import { useState } from "react";
import QuestionTest from "./2.0/QuestionTest";
import SelectQuiz from "./2.0/SelectQuiz";
import { BrowserRouter } from "react-router";
import Background from "./2.0/Background";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Background />
      <BrowserRouter>
        {/* <Layout /> */}
        {/* <QuestionTest /> */}
        <SelectQuiz />
      </BrowserRouter>
    </>
  );
}

export default App;
