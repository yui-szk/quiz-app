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
const quizHeaderElm = document.getElementById("quiz-header");
const resultsConElm = document.getElementById("results-container");
const resultsElm = document.getElementById("results");

loadQuiz();

function loadQuiz() {
  // 問題を取得
  const currentQuizData = quizDataJp[currentQuiz];

  // 質問文を表示
  questionElm.innerText = currentQuizData.question;

  // 選択肢を表示
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

// 選択したボタンのvalueを返す
// 解答を取得
// 回答している
// 正誤判定

// ラジオボタンの選択を解除する

// 次の問題へ進む

// まだ問題が残っている

// 全ての問題に解答した
