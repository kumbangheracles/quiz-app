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
    name: "Science",
    data: Quest.science,
  },
  {
    id: 3,
    path: "/QuestionTest/math",
    name: "Mathematics",
    data: Quest.math,
  },
  {
    id: 4,
    path: "/QuestionTest/programming",
    name: "Programming",
    data: Quest.programming,
  },
  {
    id: 5,
    path: "/QuestionTest/biology",
    name: "Biology",
    data: Quest.biology,
  },
  {
    id: 6,
    path: "/QuestionTest/astronomy",
    name: "Astronomy",
    data: Quest.astronomy,
  },
  {
    id: 6,
    path: "/QuestionTest/Kosong",
    name: "Kosong",
    data: Quest.kosong,
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
