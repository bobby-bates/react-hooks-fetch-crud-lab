import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({
  questions,
  onNewCorrectIndex,
  onDeleteQuestion
}) {
  const questionItemBuilder = questions.map(q => {
    return (
    <QuestionItem
      key={q.id}
      question={q}
      onNewCorrectIndex={onNewCorrectIndex}
      onDeleteQuestion={onDeleteQuestion}
    />
  )
})

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItemBuilder}</ul>
    </section>
  );
}

export default QuestionList;