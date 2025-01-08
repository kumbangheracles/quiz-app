import { useState } from "react";
import Layout from "./Layout";
import QuestionTest from "./2.0/QuestionTest";
function App() {
  const [count, setCount] = useState(0);

  return <>{/* <Layout /> */ <QuestionTest />}</>;
}

export default App;
