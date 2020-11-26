import React from 'react';
import { Button, FormControl, InputLabel, Select } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const noOfQuestions = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
const category = [
  { value: 0, label: 'Any Category',},
  { value: 27, label: 'Animals',},
  { value: 25, label: 'Art',},
  { value: 26, label: 'Celebrities',},
  { value: 16, label: 'Entertainment: Board Games',},
  { value: 10, label: 'Entertainment: Books',},
  { value: 32, label: 'Entertainment: Cartoon & Animations',},
  { value: 29, label: 'Entertainment: Comics',},
  { value: 11, label: 'Entertainment: Film',},
  { value: 31, label: 'Entertainment: Japanise Anime & Manga',},
  { value: 12, label: 'Entertainment: Music',},
  { value: 13, label: 'Entertainment: Musical & Theatre',},
  { value: 14, label: 'Entertainment: Television',},
  { value: 15, label: 'Entertainment: Video Games',},
  { value: 9, label: 'General Knowledge',},
  { value: 22, label: 'Geography',},
  { value: 23, label: 'History',},
  { value: 20, label: 'Mythology',},
  { value: 24, label: 'Politics',},
  { value: 17, label: 'Science & Nature',},
  { value: 18, label: 'Science: Computers',},
  { value: 30, label: 'Science: Gadgets',},
  { value: 19, label: 'Science: Mathematics',},
  { value: 21, label: 'Sports',},
  { value: 28, label: 'Vehicles',},
];
const difficulty = [
  { value: "", label: 'Any Difficulty',},
  { value: "easy", label: 'Easy',},
  { value: "medium", label: 'Medium',},
  { value: "hard", label: 'Hard',},
];
type Props = {
  recieveNumberOfQuestions: any;
  recieveCategory: any;
  recieveDifficulty: any;
}

export const StartQuiz : React.FC<Props> = ({ recieveNumberOfQuestions, recieveCategory,recieveDifficulty}) => {
  return (
    <div className="selectionContainer">
      <div>
        <FormControl variant="outlined" className="formControl">
          <InputLabel htmlFor="numberOfQuestions">Number of Questions</InputLabel>
          <Select native label="Number of Questions" onChange={(e)=>recieveNumberOfQuestions(Number(e.target.value))}>
            <option aria-label="None" value=""/>
            {noOfQuestions.map((option) => (<option key={option} value={+option}>{option}</option>))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl variant="outlined" className="formControl">
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select native label="Category" onChange={(e)=>recieveCategory(Number(e.target.value))}>
            <option aria-label="None" value="" />
            {category.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl variant="outlined" className="formControl">
          <InputLabel htmlFor="difficulty">Difficulty</InputLabel>
          <Select native label="Difficulty" onChange={(e)=>recieveDifficulty(e.target.value)}>
            <option aria-label="None" value="" />
            {difficulty.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
          </Select>
        </FormControl>
      </div>
      <div>
        <FormControl variant="outlined" className="formControl" disabled>
          <InputLabel htmlFor="type">Type</InputLabel>
          <Select native label="Type">
            <option  value="Multiple Choice" label="Multiple Choice"/>
          </Select>
        </FormControl>
      </div>
      <div>
        <Button
          variant="contained"
          color="default"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
}