import React from 'react';

const question = "What is the name of 6-year-old boy who becomes world’s youngest computer programmer?";
const answers = [
    "Muhammad Hamza Shahzad",
    "Tanmay Bakshi",
    "Arham Om Talsania",
    "None of these",
]


export const QuestionsCard = () => {
    return (
        <div className="cardContainer">
            <p>
                <strong>
                    Question: {1} / {10}
                </strong>
            </p>
            <p dangerouslySetInnerHTML={{ __html: question}} className="question"/>
            <div>
                {answers.map((answer,i) => (
                    <div className="answers" key={i}>
                        <button>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}