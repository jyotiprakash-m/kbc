import { useEffect, useMemo, useState } from "react";
import "./app.css"
import Trivia from "./components/Trivia"
import Timer from "./components/Timer"
import Start from "./components/Start"
function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [username, setUsername] = useState(null)

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
      answers: [
        {
          text: "Narmada",
          correct: true,
        },
        {
          text: "Mahanadi",
          correct: false,
        },
        {
          text: "Son",
          correct: false,
        },
        {
          text: "Netravati",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "The Central Rice Research Station is situated in?",
      answers: [
        {
          text: "Chennai",
          correct: false,
        },
        {
          text: "Cuttack",
          correct: true,
        },
        {
          text: "Quilon",
          correct: false,
        },
        {
          text: "Bangalore",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Who among the following wrote Sanskrit grammar?",
      answers: [
        {
          text: "Alaknanda",
          correct: false,
        },
        {
          text: "Pindar",
          correct: false,
        },
        {
          text: "Mandakini",
          correct: false,
        },
        {
          text: "Bhagirathi",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "The metal whose salts are sensitive to light is?",
      answers: [
        {
          text: "Zinc",
          correct: false,
        },
        {
          text: "Silver",
          correct: true,
        },
        {
          text: "Copper",
          correct: false,
        },
        {
          text: "Aluminum",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "The country that has the highest in Barley Production?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Russia",
          correct: true,
        },
        {
          text: "France",
          correct: false,
        },
      ],
    },


  ];
  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$ 100" },
      { id: 2, amount: "$ 200" },
      { id: 3, amount: "$ 300" },
      { id: 4, amount: "$ 500" },
      { id: 5, amount: "$ 1.000" },
      { id: 6, amount: "$ 2.000" },
      { id: 7, amount: "$ 4.000" },
      { id: 8, amount: "$ 8.000" },
      { id: 9, amount: "$ 16.000" },
      { id: 10, amount: "$ 32.000" },
      { id: 11, amount: "$ 64.000" },
      { id: 12, amount: "$ 125.000" },
      { id: 13, amount: "$ 250.000" },
      { id: 14, amount: "$ 500.000" },
      { id: 15, amount: "$ 1.000.000" },
    ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid])
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (<h1 className="endText">You earned: {earned}</h1>) : (
              <>
                <div className="top">
                  <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>

                </div>
                <div className="bottom">
                  <Trivia data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setStop={setStop} />
                </div>
              </>
            )}

          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )
        :
        <Start setUsername={setUsername} />}

    </div>
  );
}

export default App;
