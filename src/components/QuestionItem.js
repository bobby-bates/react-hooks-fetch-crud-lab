import React from "react";

function QuestionItem({
  question,
  onNewCorrectIndex,
  onDeleteQuestion
}) {
  const { id, prompt, answers, correctIndex } = question;
  // console.log(question)
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleUpdateChange = (e) => {
    // Update correct answer to question from server now,
      // then pass question up to App to remove from state

    // Semantic as all heck:
    const newCorrectIndex = parseInt(e.target.value)
    // debugger
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'correctIndex': newCorrectIndex })
    })
      .then(r => r.json())
      .then(updatedQuestion => onNewCorrectIndex(updatedQuestion))
  }

  const handleDeleteClick = () => {
    // Delete question from server now, then pass question up to
      // App to remove from state
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
      .then(() => onDeleteQuestion(question))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select
          defaultValue={correctIndex}
          onChange={handleUpdateChange}
        >
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
