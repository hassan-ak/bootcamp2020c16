import React from 'react';
import './App.css';
import { Loading } from './components/Loading';
import { Score } from './components/Score';
import { StartQuiz } from './components/StartQuiz';
import { Title } from './components/Title';
import { QuestionsCard } from './components/QuestionsCard';
import { Next } from './components/Next';
import Footer from './components/Footer';


function App() {
  return (
    <div className="container">
      <Title/>
      <StartQuiz/>
      <Loading/>
      <Score/>
      <QuestionsCard/>
      <Next/>
      <Footer/>
    </div>
  );
}

export default App;
