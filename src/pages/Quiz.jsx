import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// Your quiz questions
const questions = [
  { 
    question: "How often do you think about me?", 
    options: ["Seriously?", "Sometimes", "Not much", "Never"] 
  },
  { 
    question: "How do you feel when we chat over phone?", 
    options: ["Oh! was I supposed to feel anything?", "I just waste  my time", "Bored", "Neutral"] 
  },
  { 
    question: "What is your definition of surprise from someone?", 
    options: ["Handwriten note", "Outing", "A gift", "Whatever they can suprise me with"] 
  },
  { 
    question: "How do you handle misagreement?", 
    options: ["Talk out", "Figure things on my own", "Not talking to a person for a time", "Laugh and let it pass"] 
  },
  { 
    question: "Have I ever made you happy?", 
    options: ["No", "The best was a chuckle", "You ain't funny", "I don't remember"] 
  },
  { 
    question: "Have I ever made you feel appreciated?", 
    options: ["Nope", "Nope squared", "Haha that's funny", "Do you even appreciate anything?"] 
  },
  { 
    question: "Is there anything that you've wanted to tell me but didn't?", 
    options: ["Yes(send it on whatsapp)", "No", "I don't feel to", "Why would I tell you anything?"] 
  },
  { 
    question: "What is your honest opinion about me?", 
    options: ["You act like a child", "You're a terrible friend", "Your books are poorly written", "Reply over whatsapp"] 
  },
  // Add more questions here if you want
];


const Quiz = () => {
 // State for storing answers and tracking the current question
 const [answers, setAnswers] = useState([]);
 const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

 //Generate Random Number
 const [num, setNum] = useState(null);
 const randomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
 };

 useEffect(() => {
  setNum(randomNumberInRange(12, 14));
 }, []);

 // Function to handle answer click
 const handleAnswer = (answer) => {
   setAnswers([...answers, answer]);
   setCurrentQuestionIndex(currentQuestionIndex + 1);
 };

 // Get the current question based on the index
 const currentQuestion = questions[currentQuestionIndex];

 return (
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <h1 className="text-center mb-4">Quiz Time</h1>
        {currentQuestionIndex < questions.length ? (
          <div className="question-container">
            <p className="lead">{currentQuestion.question}</p>
            <div className="d-flex flex-column align-items-center">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className="btn btn-success btn-lg mb-3"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="mb-4">Thanks for completing the quiz!</h2>
            <p className='display-4'>Your Score {num}%</p>

            <h5>According To Your Score This Means:</h5>
            <div className="d-flex mb-3">
              <div class="progress w-50" style={{height:"30px"}}>
                <div class="progress-bar" style={{width:"15%", height:"30px"}}> 15%</div>
              </div>
              <div className='mx-3'>You Hate Me</div>
            </div>

            <div className="d-flex mb-3">
              <div class="progress w-50" style={{height:"30px"}}>
                <div class="progress-bar" style={{width:"30%", height:"30px"}}> 30%</div>
              </div>
              <div className='mx-3'>I'm A Stranger</div>
            </div>

            <div className="d-flex mb-3">
              <div class="progress w-50" style={{height:"30px"}}>
                <div class="progress-bar" style={{width:"50%", height:"30px"}}> 50%</div>
              </div>
              <div className='mx-3'>Best Friends</div>
            </div>

            <div className="d-flex mb-3">
              <div class="progress w-50" style={{height:"30px"}}>
                <div class="progress-bar" style={{width:"100%", height:"30px"}}> 100%</div>
              </div>
              <div className='mx-3'>Mi Amor</div>
            </div> 
          </div>  
        )}
      </div>
    </div>
 );
};

export default Quiz