import { quizData } from "./quizData";

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

const loadQuiz = (): void => {
  // 問題を取得
  const currentQuizData = quizData[currentQuiz];

  // 質問文を表示
  if (questionElm) {
    questionElm.innerText = currentQuizData.question;
  }

  // 画像を表示
  document
    .getElementById("quizImg")
    ?.setAttribute("src", `image${currentQuizData.img}.png`);

  // 選択肢を表示
  if (a_text && b_text && c_text && d_text) {
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
};

loadQuiz();

// 選択したボタンのvalueを返す
const getAnswered = () => {
  const formElements = document.forms[0];
  const value = formElements.answer.value;
  if (typeof value === "string") {
    return value;
  }
};

const showResults = (results: string): void => {
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
      console.log(score);
    } else {
      showResults("残念...");
    }

    // ラジオボタンの選択を解除する
    const answerElement = document.getElementById(answer);
    if (answerElement && answerElement instanceof HTMLInputElement) {
      answerElement.checked = false;
    }
  }
});

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
