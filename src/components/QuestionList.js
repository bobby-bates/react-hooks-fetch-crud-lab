import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion }) {
  const questionItemBuilder = questions.map(q => {
    return (
    <QuestionItem key={q.id} question={q} onDeleteQuestion={onDeleteQuestion}/>
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