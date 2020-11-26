import React, { useState, useEffect } from 'react';
import ApiContext from './ApiContext';

type Props = {
    numberOfQuestions: number;
    category: number;
    difficulty: string;
  }

export const Api : React.FC<Props> = ({ children, numberOfQuestions, category,difficulty}) => {
    const [url, setUrl] = useState('https://opentdb.com/api.php?amount=10&type=multiple');

    useEffect(() => {
        if (numberOfQuestions === 0 && category === 0 && difficulty==="") {
            setUrl('https://opentdb.com/api.php?amount=10&type=multiple')
        } else if(numberOfQuestions === 0 && category === 0 && difficulty!=="") {
            setUrl(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`)
        }else if(numberOfQuestions === 0 && category !== 0 && difficulty===""){
            setUrl(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
        }else if(numberOfQuestions === 0 && category !== 0 && difficulty!==""){
            setUrl(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
        }else if (numberOfQuestions !== 0 && category === 0 && difficulty==="") {
            setUrl(`https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple`)
        } else if(numberOfQuestions !== 0 && category === 0 && difficulty!=="") {
            setUrl(`https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=${difficulty}&type=multiple`)
        }else if(numberOfQuestions !== 0 && category !== 0 && difficulty===""){
            setUrl(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&type=multiple`)
        }else{
            setUrl(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`)
        }
    }, [numberOfQuestions, category,difficulty,url])

    
    return (
        <ApiContext.Provider
            value = {{ url,
                      }}>
                {children}
        </ApiContext.Provider>
    )}
