import React from 'react';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum: number;
    totalQuestions: number;
}


export const QuestionsCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNum, totalQuestions}) =>{
    return (
        <div className="cardContainer">
            <p>
                <strong>
                    Question: {questionNum} / {totalQuestions}
                </strong>
            </p>
            <p dangerouslySetInnerHTML={{ __html: question}} className="question"/>
            <div>
                {answers.map((answer,i) => (
                    <div className="answers" key={i}>
                        <button disabled={userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}