import React from "react";
import GetQuizzes from "./components/GetQuizzes";
import QuizForm from "./components/QuizForm";
import { fetchQuizzes } from "./api/utils";
import Loader from "./assets/loader.gif";
import bgImg1 from "./assets/bg-img-1.png";
import bgImg2 from "./assets/bg-img-2.png";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

const App = () => {

    const [isStart, setIsStart] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    const [quizzes, setQuizzes] = React.useState({});
    const [noQuestion, setNoQuestion] = React.useState(1)
    const [isFetch, setIsFetch] = React.useState(false)
    const [quizSelectionData, setQuizSelectionData] = React.useState({});
    const [showAnswers, setShowAnswers] = React.useState(false);

    React.useEffect(() => {
        fetchQuizzes(quizSelectionData).then(({response_code, results}) => {
            setNoQuestion(response_code);
            setQuizzes(results.map(quiz => {
                return {
                    ...quiz,
                    answers: [quiz["correct_answer"], ...quiz["incorrect_answers"]].sort().reverse(),
                    id: nanoid()
                }
            }));
            setIsFetch(true);
        }).catch(() => {
            setIsFetch(false);
        })

        setTimeout(() => {
            setIsLoading(false);
        }, 5000);

    }, [isStart]);

    const handleStart = () => {
        setIsStart(!isStart);
        setIsLoading(true);
    }

    const handleMainMenu = () => {
        setIsLoading(true);
        setIsStart(false);
    }

    const selectCategory = (event) => {
        setQuizSelectionData(prevState => {
            return {
                ...prevState,
                category: event.target.value
            }
        });
    }

    const selectDifficulty = (event) => {
        setQuizSelectionData(prevState => {
            return {
                ...prevState,
                difficulty: event.target.value
            }
        });
    }

    const selectTypeOfQuestions = (event) => {
        setQuizSelectionData(prevState => {
            return {
                ...prevState,
                typeOfQuestions: event.target.value
            }
        });
    }

    const handleAnswerSelection = (event, id, correctAnswer) => {

        setQuizzes(prevQuizzes => prevQuizzes.map(quiz => {
            if (quiz.id === id) {
                return {
                    ...quiz,
                    selected_answer: event.target.innerText,
                    correct_answer: decode(correctAnswer),
                }
            }
            return quiz;
        }));

    }

    const isAllSelected = (quizzes) => {
        return quizzes.every(quiz => quiz.selected_answer)
    }

    const howManyCorrect = (quizzes) => {
        let count = 0;
        for (let i = 0; i < quizzes.length; i++) {
            if (quizzes[i].correct_answer === quizzes[i].selected_answer) {
                count++;
            }
        }
        return count;
    }

    const checkAnswers = () => {
        setShowAnswers(true);
    }

    const playAgain = () => {
        setQuizSelectionData({
            category: "",
            difficulty: "",
            typeOfQuestions: "",
        });

        setQuizzes(prevQuizzes => prevQuizzes.map(quiz => {
            return {
                ...quiz,
                selected_answer: "",
            }
        }));

        setIsStart(!isStart);
        setShowAnswers(!showAnswers);
    }

    if (isLoading) {
        return (
            <main className="main-container">
                <img className="bg-img-1" src={bgImg1} alt="gb-1" />
                <img className="bg-img-2" src={bgImg2} alt="gb-2" />
                <img className="loader" src={Loader} alt="loader" />
            </main>
        );
    }


    if (!isFetch) {
        return (
            <>
                <img className="bg-img-1" src={bgImg1} alt="gb-1" />
                <img className="bg-img-2" src={bgImg2} alt="gb-1" />
                <main className="main-container">
                    <div className="refresh-page-container">
                        <h3>Unable to Fetch the questions! Check your internet connection, refresh the page and try again.</h3>
                        <input className="quiz-form-btn" type="button" value="Refresh Page" onClick={() => window.location.reload()} />
                    </div>
                </main>
            </>
        );

    } else if (!isStart || noQuestion === 1) {
        return (
            <>
                <img className="bg-img-1" src={bgImg1} alt="gb-1" />
                <img className="bg-img-2" src={bgImg2} alt="gb-2" />
                <main className="main-container">
                    <QuizForm
                        handleStart={handleStart}
                        category={quizSelectionData.category}
                        selectCategory={selectCategory}
                        difficulty={quizSelectionData.difficulty}
                        selectDifficulty={selectDifficulty}
                        typeOfQuestions={quizSelectionData.typeOfQuestions}
                        selectTypeOfQuestions={selectTypeOfQuestions}
                        noQuestion={noQuestion}
                        handleMainMenu={handleMainMenu}
                        setQuizSelectionData={setQuizSelectionData}
                    />
                </main>
            </>
        );

    } else if (noQuestion === 0) {
        return (
            <>
                <img className="bg-img-1" src={bgImg1} alt="gb-1" />
                <img className="bg-img-2" src={bgImg2} alt="gb-1" />
                <main className="main-container">
                    <GetQuizzes
                        quizzes={quizzes}
                        isAllSelected={isAllSelected}
                        howManyCorrect={howManyCorrect}
                        handleAnswerSelection={handleAnswerSelection}
                        checkAnswers={checkAnswers}
                        showAnswers={showAnswers}
                        playAgain={playAgain}
                    />
                </main>
            </>
        );
    }

}

export default App;
