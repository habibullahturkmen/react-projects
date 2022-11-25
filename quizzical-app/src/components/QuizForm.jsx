import React from "react";

const QuizForm = (props) => {

    if (props.noQuestion !== 0) {

        React.useEffect(() => {
            props.setQuizSelectionData({
                category: "",
                difficulty: "",
                typeOfQuestions: "",
            });
        }, []);

        return (
            <div className="quiz-form-container">
                <h3>Sorry! We couldn't find any questions with these options!</h3>
                <input className="quiz-form-btn" type="button" value="Main Menu" onClick={props.handleMainMenu} />
            </div>
        );
    }

    return (
        <div className="quiz-form-container">
            <h1 className="quiz-form-title">Quizzical</h1>
            <p className="quiz-form-desc">Welcome to Quizzical (A Quiz game!)</p>
            <form className="quiz-form">
                <div>
                    <label htmlFor="category">Category: </label>
                    <select
                        value={props.category}
                        id="category"
                        name="category"
                        onChange={props.selectCategory}
                    >
                        <option value="">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musical & Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science & Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geopraphy</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gatgets</option>
                        <option value="31">Entertainment: Japanese Anime & Manga</option>
                        <option value="32">Entertainment: Cartoon & Animations</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="difficulty">Difficulty: </label>
                    <select
                        value={props.difficulty}
                        id="difficulty"
                        name="difficulty"
                        onChange={props.selectDifficulty}
                    >
                        <option value="">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="type-of-questions">Type of Questions: </label>
                    <select
                        value={props.typeOfQuestions}
                        id="type-of-questions"
                        name="type-of-questions"
                        onChange={props.selectTypeOfQuestions}
                    >
                        <option value="">Any Type</option>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True / False</option>
                    </select>
                </div>
                <input className="quiz-form-btn" type="button" value="Start Quiz" onClick={props.handleStart} />
            </form>
        </div>
    );
}

export default QuizForm;