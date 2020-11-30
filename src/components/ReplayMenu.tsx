import React, { useCallback } from "react";
import { ManageData } from "../helpers/types"
import { getNewQuestions } from "../helpers/API"

const ReplayMenu: React.FC<ManageData> = ({
  onStateChange,
  questions,
  setQuestions,
  answers,
  setAnswers
}) => {
  const handleStateChange = useCallback(() => {
    // Reset Game
    getNewQuestions().then(response => {
      if (setQuestions) setQuestions(response.questions);
      setAnswers([]);
    });
    onStateChange("menu")
  }, [onStateChange, setQuestions, setAnswers])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Here is your score:{" "}
          {questions.filter(
              (q, index) =>
                JSON.parse(
                  q.correct_answer.toLowerCase()
                ) === answers[index]
            ).length
          }/{questions.length}
        </h1>
        <button onClick={() => handleStateChange()}>Play again!</button>
      </header>
    </div>
  )
}

export default ReplayMenu