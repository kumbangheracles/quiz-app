import { useState } from "react";
import Layout from "./Layout";
import QuestionTest from "./2.0/QuestionTest";
import SelectQuiz from "./2.0/SelectQuiz";
import { BrowserRouter } from "react-router";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* <Layout /> */}
        {/* <QuestionTest /> */}
        <SelectQuiz />
      </BrowserRouter>
    </>
  );
}

export default App;
