//参考
//https://github.com/cordelia-sixth/quiz_app_js/tree/main#quiz_app_js

import { quizData } from "./quizData";

// 送信ボタン
const submitBtn = document.getElementById("submit");

// 現在の問題
let currentQuiz = 0;

// 現在のスコア
let score = 0;

//
const quizHeaderElm: HTMLElement | null =
  document.getElementById("quiz-header");
const resultsConElm = document.getElementById("results-container");

const loadQuiz = (): void => {
  // 問題を取得
  const currentQuizData = quizData[currentQuiz];

  // 質問文を表示
  const questionElm = document.getElementById("question");
  if (questionElm) {
    questionElm.innerText = currentQuizData.question;
  }

  // 画像を表示
  document.getElementById("quizImg")?.setAttribute("src", currentQuizData.img);
};

loadQuiz();

const answerElement = document.getElementById("answer-box");

const getAnswered = () => {
  if (answerElement instanceof HTMLInputElement) {
    const value = answerElement.value;
    if (typeof value === "string") {
      return value;
    }
    console.log(value);
  }
};

const showResults = (results: string): void => {
  const resultsElm = document.getElementById("results");
  if (quizHeaderElm && submitBtn && resultsConElm && resultsElm) {
    quizHeaderElm.style.display = "none";
    submitBtn.style.display = "none";
    resultsConElm.style.display = "block";
    resultsElm.innerText = results;
  }
};

const showQuiz = (): void => {
  if (quizHeaderElm && submitBtn && resultsConElm) {
    quizHeaderElm.style.display = "block";
    submitBtn.style.display = "block";
    resultsConElm.style.display = "none";
  }
};

const checkScore = (): string => {
  if (score == quizData.length) {
    return `スコア ${score}/${quizData.length} 全問正解！おめでとう！`;
  } else {
    return `スコア ${score}/${quizData.length} もう一度挑戦してみよう！`;
  }
};

submitBtn?.addEventListener("click", (event) => {
  event.preventDefault();

  // 解答を取得
  const answer = getAnswered();

  // 回答している
  if (answer) {
    // 正誤判定
    if (answer === quizData[currentQuiz].correct) {
      showResults("正解！");

      score++;
    } else {
      showResults("残念...");
    }

    if (answerElement instanceof HTMLInputElement) {
      answerElement.value = "";
    }
  }
});

//次の問題ボタン
const nextQuizBtn = document.getElementById("next-quiz");
nextQuizBtn?.addEventListener("click", (event) => {
  event.preventDefault();

  // 次の問題へ進む
  currentQuiz++;

  // まだ問題が残っている
  if (currentQuiz < quizData.length) {
    // 次の問題を読み込む
    loadQuiz();

    showQuiz();

    // 全ての問題に解答した
  } else {
    alert(checkScore());
    window.location.reload();
  }
});
