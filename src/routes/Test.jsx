import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
let selectedAnswers = [];

function Test({final}) {
    const [currentGame, setCurrentGame] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState({});
    const [correctAnswer, setCorrectAnswer] = useState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [userAnswer, setUserAnswer] = useState();
    const navigate = useNavigate();

    async function gameData() {
        const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${process.env.REACT_APP_API_TOKEN}&limit=10&category=Linux`);
        const data = await response.json();
        setCurrentGame(data);
        console.log(data);
        setCurrentAnswer(data[currentQuestion].answers);
        setCorrectAnswer(data[currentQuestion].correct_answer);
    }

    useEffect(() => {
        gameData();
        selectedAnswers = [];
    }, []);

    useEffect(() => {
        if (currentQuestion > 0) {
            setCurrentAnswer(currentGame[currentQuestion].answers);
            setCorrectAnswer(currentGame[currentQuestion].correct_answer);
        }
    }, [currentQuestion]);

    function onNext() {
        setCurrentQuestion((prevValue) => (prevValue + 1) % 10);
        if (userAnswer === correctAnswer) {
            setCurrentScore(prevValue => prevValue + 1);
        }
    }

    function onPrevious() {
        if (currentQuestion === 0) {
            setCurrentQuestion(9);
        } else {
            setCurrentQuestion((prevValue) => prevValue - 1);
        }
        if (userAnswer === correctAnswer) {
            setCurrentScore(prevValue => prevValue + 1);
        }
    }

    function activeDiv(index) {
        if (index === selectedAnswers[currentQuestion]) {
            return 'border-black border p-1 container cursor-pointer my-2 flex rounded-2xl hover:bg-green-400 hover:text-white items-center bg-green-400'
        } else {
            return 'border-black border p-1 container cursor-pointer my-2 flex rounded-2xl hover:bg-green-400 hover:text-white items-center'
        }
    }

    function updateScore(ans, index) {
        setUserAnswer(ans);
        selectedAnswers[currentQuestion] = index;
    }

    function submit(){
        final(currentScore);
        navigate('/submit');
    }
    return (
        <>
            <div className='flex justify-center mt-10'>
                <h1>Linux</h1>
            </div>
            <div>
                {/* <h1>{props.title}</h1> */}
                <div className='mx-32 my-10 shadow-lg p-14'>
                    <p className='float-right ml-6'>{currentQuestion + 1}/10 questions</p>
                    <p className='text-xl'>Q.{currentQuestion + 1} <span className='ml-3'>{currentGame[currentQuestion]?.question}</span></p>
                    <div >
                        {Object.keys(currentAnswer).map((answer, index) => {
                            if(currentAnswer[answer] !== null){
                                return (
                                    <div key={index} onClick={(el) => updateScore(answer, index)} className={activeDiv(index)}>
                                        <div className='py-2 px-4 bg-cyan-400 rounded-2xl'>
                                            <p>{index + 1}</p>
                                        </div>
                                        <div className='ml-6'>{currentAnswer[answer]}</div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className='flex justify-center mt-10'>
                        <button onClick={onPrevious} className='mx-4 p-3 bg-green-400 rounded-lg hover:bg-green-600'>Previous</button>
                        <button onClick={onNext} className='mx-4 p-3 bg-green-400 rounded-lg hover:bg-green-600'>Next</button>
                        <button onClick={submit} className='mx-4 p-3 bg-green-400 rounded-lg hover:bg-green-600'>Submit</button>
                        <p>{currentScore}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test