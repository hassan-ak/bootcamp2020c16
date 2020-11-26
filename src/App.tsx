import React , {useState} from 'react';
import './App.css';
import { Loading } from './components/Loading';
import { Score } from './components/Score';
import { StartQuiz } from './components/StartQuiz';
import { Title } from './components/Title';
import { QuestionsCard } from './components/QuestionsCard';
import { Next } from './components/Next';
import Footer from './components/Footer';
import { Api } from './functionalComponent/Api';
import { QuestionState } from './functionalComponent/Data';
import { PlayAgain } from './components/PlayAgin';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {

  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] = useState(10)
  async function numberOfQuestions(value:number) {
    setSelectedNumberOfQuestions(value) 
  }

  const [selectedCategory, setSelectedCategory] = useState(0)
  async function category(value:number) {
    setSelectedCategory(value)
  }

  const [selectedDifficulty, setSelectedDifficulty] = useState("")
  async function difficulty(value:string) {
    setSelectedDifficulty(value)
  }

  const [loading, setLoading] = useState(false);
  async function checkLoading(value:boolean) {
    setLoading(value)
  }

  const [number, setNumber] = useState(0);
  async function checkNumber(value:number) {
    setNumber(value)
  }

  const [questions, setQuestions] = useState<QuestionState[]>([]);
  async function checkQuestions(value:QuestionState[]) {
    setQuestions(value)
  }

  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  async function checkUserAnswers(value:AnswerObject[]) {
    setUserAnswers(value)
  }

  console.log("anser :", userAnswers)

  const [score, setScore] = useState(0);
  async function checkScore(value:number) {
    setScore(value)
  }

  const [gameOver, setGameOver] = useState(true);
  async function checkGameOver(value:boolean) {
    setGameOver(value)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1)
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  };

  const nextQuestion = async() => {
      setNumber(number + 1);
    };
  
  const playagin = async()=>{
    setGameOver(true);
  }
  
  return (
    <div className="container">
      <Api
        numberOfQuestions={selectedNumberOfQuestions}
        category={selectedCategory}
        difficulty={selectedDifficulty}
      >
        <Title/>
        {gameOver ? (
          <StartQuiz 
            recieveNumberOfQuestions={numberOfQuestions}
            recieveCategory={category}
            recieveDifficulty={difficulty}
            recieveCheckLoading={checkLoading}
            recieveCheckNumber={checkNumber}
            recieveCheckQuestions={checkQuestions}
            recieveCheckUserAnswers={checkUserAnswers}
            recieveCheckScore={checkScore}
            recieveCheckGameOver={checkGameOver}
          />): null }
        


        {loading ? (<Loading/>) : null }

        {!gameOver && !loading ? (<Score setScore={score}/>) : null }

        {!loading && !gameOver ? (
          <QuestionsCard
            questionNum={number + 1}
            totalQuestions={selectedNumberOfQuestions}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined }
            callback={checkAnswer}
          />) : null }


        {!gameOver && !loading && userAnswers.length === number + 1 && number !== selectedNumberOfQuestions - 1 ? (
          <Next callback={nextQuestion}/>
        ): null }

        { userAnswers.length === number + 1 && number === selectedNumberOfQuestions - 1 && !gameOver && !loading?  (
          <PlayAgain callback={playagin}/>
        ): null }

        { !loading?(<Footer/>):null}
      </Api>
    </div>
  );
}

export default App;
