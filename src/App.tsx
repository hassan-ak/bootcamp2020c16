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

function App() {

  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] = useState(0)
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

  return (
    <div className="container">
      <Api
        numberOfQuestions={selectedNumberOfQuestions}
        category={selectedCategory}
        difficulty={selectedDifficulty}
      >
        <Title/>
        <StartQuiz 
          recieveNumberOfQuestions={numberOfQuestions}
          recieveCategory={category}
          recieveDifficulty={difficulty}
        />
        <Loading/>
        <Score/>
        <QuestionsCard/>
        <Next/>
        <Footer/>
      </Api>
    </div>
  );
}

export default App;
