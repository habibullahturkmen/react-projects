import React from "react";
import Quiz from "./Quiz";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const GetQuizzes = (props) => {
    let quizArray = [];
    for (const quiz of props.quizzes) {
        quizArray.push(
            <Quiz
                question={quiz.question}
                answers={quiz.answers}
                key={nanoid()}
                type={quiz.type}
                id={quiz.id}
                correctAnswer={quiz.correct_answer}
                selectedAnswer={quiz.selected_answer}
                handleAnswerSelection={props.handleAnswerSelection}
                showAnswers={props.showAnswers}
            />
        );
    }

    return (
        <>
            <h1 className="quiz-form-title">Quizzical</h1>
            {quizArray}
            {props.showAnswers &&
                <div className="play-again">
                    {props.howManyCorrect(props.quizzes) > 3 && <Confetti />}
                    <p className="score">You scored {props.howManyCorrect(props.quizzes)}/5 correct answers</p>
                    <input
                        className="quiz-form-btn"
                        type="button"
                        value="Play Again"
                        onClick={props.playAgain}
                    />
                </div>
            }
            {!props.showAnswers &&
                <input
                    className={`quiz-form-btn ${!props.isAllSelected(props.quizzes) && "quiz-form-btn-disabled"}`}
                    type="button"
                    value="Check Answers"
                    onClick={props.isAllSelected(props.quizzes) ? props.checkAnswers : () => { }}
                />
            }
        </>
    );
}

export default GetQuizzes;