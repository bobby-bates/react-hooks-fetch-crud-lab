import { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(r => r.json())
      .then(questions => setQuestions(questions))
  }, [])

  const handleAddQuestion = newQuestion => {
    setQuestions([...questions, newQuestion])
    // setPage('List')
    
  }

  const handleNewCorrectIndex = (updatedQuestion) => {
    setQuestions(questions.map(question => {
      return question.id === updatedQuestion.id ? updatedQuestion : question
    }))
    setTimeout(() => {
      console.log(questions)
    }, 0); 
  }

  const handleDeleteQuestion = deletedQuestion => {
    setQuestions(questions.filter(question => question.id !== deletedQuestion.id))
    // Remove question from list before alert plays:
    // setTimeout(() => {
    //   alert('Question Deleted!')
    // }, 0)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion}/>
      ) : (
        <QuestionList
          questions={questions}
          onNewCorrectIndex={handleNewCorrectIndex}
          onDeleteQuestion={handleDeleteQuestion}
        />
      )
      }
    </main>
  );
}

export default App;
