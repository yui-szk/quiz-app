// import {quizData} from "./quizData"

// 質問文
const questionElm = document.getElementById("question");

// 選択肢
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");

// 送信ボタン
const submitBtn = document.getElementById("submit");

// 現在の問題
let currentQuiz = 0;

// 現在のスコア
let score = 0;

//次の問題ボタン
const nextQuizBtn = document.getElementById("next-quiz");

//
const quizHeaderElm: HTMLElement | null =
  document.getElementById("quiz-header");
const resultsConElm = document.getElementById("results-container");
const resultsElm = document.getElementById("results");

loadQuiz();

function loadQuiz() {
  // 問題を取得
  const currentQuizData = quizData[currentQuiz];

  // 質問文を表示
  if (questionElm) {
    questionElm.innerText = currentQuizData.question;
  }
  // 選択肢を表示
  if (a_text && b_text && c_text && d_text) {
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
}

function getAnswered() {
  // 選択したボタンのvalueを返す
  return document.quizForm.answer.value;
}

function showResults(results: string) {
  if (quizHeaderElm && submitBtn && resultsConElm && resultsElm) {
    quizHeaderElm.style.display = "none";
    submitBtn.style.display = "none";
    resultsConElm.style.display = "block";
    resultsElm.innerText = results;
  }
}

function showQuiz() {
  if (quizHeaderElm && submitBtn && resultsConElm) {
    quizHeaderElm.style.display = "block";
    submitBtn.style.display = "block";
    resultsConElm.style.display = "none";
  }
}

// 解答を取得
// 回答している
// 正誤判定

// ラジオボタンの選択を解除する

// 次の問題へ進む

// まだ問題が残っている

// 全ての問題に解答した
