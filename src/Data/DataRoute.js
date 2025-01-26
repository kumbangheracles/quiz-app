import { data } from "react-router";
import Quest from "./DataTest2";
import { dataAnswer } from "./DataAnswer";
const DataRoute = [
  {
    id: 1,
    path: "/QuestionTest/history",
    name: "History",
    data: Quest.history,
  },
  {
    id: 2,
    path: "/QuestionTest/science",
    name: "Sience",
    data: Quest.science,
  },
  {
    id: 3,
    path: "/QuetionTest/math",
    name: "Mathematics",
    data: Quest.math,
  },
  {
    id: 4,
    path: "/QuetionTest/programming",
    name: "Programming",
    data: Quest.programming,
  },
  {
    id: 5,
    path: "/QuetionTest/biology",
    name: "Biology",
    data: Quest.biology,
  },
  {
    id: 6,
    path: "/QuetionTest/astronomy",
    name: "Astronomy",
    data: Quest.astronomy,
  },
  // {
  //   id: 4,
  //   path: "/Question",
  //   name: "Question",
  //   data: dataAnswer,
  // },
  // {
  //   id: 4,
  //   path: "/",
  //   name: "Back to menu",
  //   data: "",
  // },
];

export { DataRoute };
