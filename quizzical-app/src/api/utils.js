export function fetchQuizzes({ category, difficulty, typeOfQuestions }) {
    let triviaAPI = `https://opentdb.com/api.php?amount=5&category=${!category ? Math.floor(Math.random() * 20) + 11 : Number(category)}&difficulty=${!difficulty ? "hard" : difficulty}&type=${!typeOfQuestions ? "multiple" : typeOfQuestions}`;

    let quizzes = fetch(triviaAPI)
        .then(response => response.json())
    return quizzes;
}

/*

category: 9, 10, ......., 32
difficulty: easy, medium, hard
type: boolean, multiple

example: https://opentdb.com/api.php?amount=5&category=24&difficulty=hard&type=multiple

example: https://opentdb.com/api.php?amount=5

*/
