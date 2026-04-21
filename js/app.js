/* ===== VET TECH QUIZ APP ===== */
(function () {
  'use strict';

  // Category emoji map
  const CATEGORY_ICONS = {
    'Dental Procedures': '🦷',
    'Vaccine Administration': '💉',
    'Anesthesia & Monitoring': '😴',
    'Pharmacology & Drug Calculations': '💊',
    'Laboratory Skills': '🔬',
    'Surgical Assisting': '🔪',
    'Radiology & Imaging': '☢️',
    'Emergency & Critical Care': '🚨',
    'Restraint & Handling': '🐾',
    'Medical Nursing & Patient Care': '🩹',
    'Communication & Client Education': '💬',
    'Veterinary Medical Terminology': '📝',
    'Scope of Practice (Washington State)': '⚖️',
    'Bonus High-Yield Questions': '⭐',
  };

  // Score-based results config
  const RESULTS_CONFIG = [
    { min: 10, icon: '🏆', title: 'Perfect Score!', message: 'Incredible — you nailed every single question! You\'re ready to walk back into the clinic with confidence.' },
    { min: 8,  icon: '🎉', title: 'Outstanding!',   message: 'Amazing work! Your clinical knowledge is rock solid. Just a couple of areas to brush up on.' },
    { min: 6,  icon: '💪', title: 'Great Job!',      message: 'Solid performance! You clearly know your stuff. A little more review and you\'ll be acing it.' },
    { min: 4,  icon: '📚', title: 'Good Effort!',    message: 'You\'re on the right track! Keep studying — every quiz makes you stronger.' },
    { min: 0,  icon: '🌱', title: 'Keep Growing!',   message: 'Every expert was once a beginner. The fact that you\'re practicing means you\'re already making progress!' },
  ];

  // State
  let currentQuiz = [];
  let currentIndex = 0;
  let score = 0;
  let answered = false;
  let results = []; // track correct/incorrect per question

  // DOM references
  const views = {
    landing: document.getElementById('landing'),
    quiz: document.getElementById('quiz'),
    results: document.getElementById('results'),
  };

  const els = {
    totalQuestions: document.getElementById('total-questions'),
    categoryPills: document.getElementById('category-pills'),
    startBtn: document.getElementById('start-btn'),
    questionCounter: document.getElementById('question-counter'),
    scoreDisplay: document.getElementById('score-display'),
    progressFill: document.getElementById('progress-fill'),
    categoryBadge: document.getElementById('category-badge'),
    questionText: document.getElementById('question-text'),
    answersList: document.getElementById('answers-list'),
    feedbackPanel: document.getElementById('feedback-panel'),
    feedbackResult: document.getElementById('feedback-result'),
    feedbackExplanation: document.getElementById('feedback-explanation'),
    feedbackSource: document.getElementById('feedback-source'),
    nextBtn: document.getElementById('next-btn'),
    nextBtnText: document.getElementById('next-btn-text'),
    resultsIcon: document.getElementById('results-icon'),
    resultsTitle: document.getElementById('results-title'),
    finalScore: document.getElementById('final-score'),
    resultsMessage: document.getElementById('results-message'),
    resultsBreakdown: document.getElementById('results-breakdown'),
    playAgainBtn: document.getElementById('play-again-btn'),
    startOverBtn: document.getElementById('start-over-btn'),
  };

  // ===== INITIALIZATION =====
  function init() {
    els.totalQuestions.textContent = QUESTIONS.length;
    renderCategoryPills();
    els.startBtn.addEventListener('click', startQuiz);
    els.nextBtn.addEventListener('click', nextQuestion);
    els.playAgainBtn.addEventListener('click', startQuiz);
    els.startOverBtn.addEventListener('click', goHome);
  }

  function goHome() {
    showView('landing');
  }

  function renderCategoryPills() {
    const categories = [...new Set(QUESTIONS.map(q => q.category))];
    els.categoryPills.innerHTML = categories.map(cat => {
      const icon = CATEGORY_ICONS[cat] || '📋';
      return `<span class="category-pill">${icon} ${cat}</span>`;
    }).join('');
  }

  // ===== VIEW MANAGEMENT =====
  function showView(name) {
    Object.values(views).forEach(v => v.classList.remove('active'));
    views[name].classList.add('active');
    window.scrollTo(0, 0);
  }

  // ===== QUIZ START =====
  function startQuiz() {
    currentQuiz = fisherYatesShuffle([...QUESTIONS]).slice(0, 10);
    currentIndex = 0;
    score = 0;
    answered = false;
    results = [];
    showView('quiz');
    renderQuestion();
  }

  // ===== FISHER-YATES SHUFFLE =====
  function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // ===== RENDER QUESTION =====
  function renderQuestion() {
    answered = false;
    const q = currentQuiz[currentIndex];

    // Progress
    els.questionCounter.textContent = `${currentIndex + 1} of 10`;
    els.scoreDisplay.textContent = `Score: ${score}`;
    els.progressFill.style.width = `${(currentIndex / 10) * 100}%`;

    // Category badge
    const icon = CATEGORY_ICONS[q.category] || '📋';
    const isWA = q.category.includes('Washington');
    els.categoryBadge.className = 'category-badge' + (isWA ? ' wa-state' : '');
    els.categoryBadge.textContent = `${icon} ${q.category}`;

    // Question text
    els.questionText.textContent = q.question;

    // Shuffle answers (clone to avoid mutating source)
    const shuffledAnswers = fisherYatesShuffle(q.answers.map(a => ({ ...a })));

    // Render answer buttons
    els.answersList.innerHTML = '';
    shuffledAnswers.forEach((answer) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = answer.text;
      btn.addEventListener('click', () => handleAnswer(btn, answer, shuffledAnswers, q));
      els.answersList.appendChild(btn);
    });

    // Hide feedback & next
    els.feedbackPanel.classList.add('hidden');
    els.nextBtn.classList.add('hidden');

    // Re-trigger card animation
    const card = document.getElementById('question-card');
    card.style.animation = 'none';
    card.offsetHeight; // trigger reflow
    card.style.animation = '';
  }

  // ===== HANDLE ANSWER =====
  function handleAnswer(clickedBtn, selectedAnswer, allAnswers, question) {
    if (answered) return;
    answered = true;

    const isCorrect = selectedAnswer.correct;
    if (isCorrect) score++;
    results.push(isCorrect);

    // Update score display
    els.scoreDisplay.textContent = `Score: ${score}`;

    // Style buttons
    const buttons = els.answersList.querySelectorAll('.answer-btn');
    buttons.forEach((btn, i) => {
      btn.classList.add('disabled');
      const answer = allAnswers[i];
      if (answer.correct) {
        btn.classList.add('correct');
      } else if (btn === clickedBtn && !isCorrect) {
        btn.classList.add('incorrect');
      } else if (!answer.correct) {
        btn.classList.add('dimmed');
      }
    });

    // Show feedback
    els.feedbackResult.className = 'feedback-result ' + (isCorrect ? 'is-correct' : 'is-incorrect');
    els.feedbackResult.textContent = isCorrect ? '✅ Correct!' : '❌ Incorrect';

    els.feedbackExplanation.textContent = question.explanation;

    // Build source citation
    let sourceHtml = '';
    if (question.sources && question.sources.length > 0) {
      const prefix = question.sourceInferred ? '📖 General Reference: ' : '📖 Source: ';
      const sourceLinks = question.sources.map(s => {
        if (s.url) {
          return `${s.name} — <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">🔗 ${escapeHtml(s.url)}</a>`;
        }
        return escapeHtml(s.name);
      });
      sourceHtml = prefix + sourceLinks.join('; ');
    }
    els.feedbackSource.innerHTML = sourceHtml;

    els.feedbackPanel.classList.remove('hidden');

    // Show next button
    els.nextBtnText.textContent = currentIndex < 9 ? 'Next Question' : 'See Results';
    els.nextBtn.classList.remove('hidden');

    // Scroll feedback into view on mobile
    setTimeout(() => {
      els.feedbackPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }

  // ===== NEXT QUESTION =====
  function nextQuestion() {
    currentIndex++;
    if (currentIndex >= 10) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  // ===== SHOW RESULTS =====
  function showResults() {
    showView('results');

    // Find matching result config
    const config = RESULTS_CONFIG.find(c => score >= c.min);

    els.resultsIcon.textContent = config.icon;
    els.resultsTitle.textContent = config.title;
    els.finalScore.textContent = score;
    els.resultsMessage.textContent = config.message;

    // Breakdown dots
    els.resultsBreakdown.innerHTML = results.map((correct, i) => {
      return `<span class="result-dot ${correct ? 'correct' : 'incorrect'}">${i + 1}</span>`;
    }).join('');

    // Confetti for high scores
    if (score >= 8) {
      fireConfetti();
    }
  }

  // ===== CONFETTI =====
  function fireConfetti() {
    if (typeof confetti !== 'function') return;

    const canvas = document.getElementById('confetti-canvas');
    const myConfetti = confetti.create(canvas, { resize: true, useWorker: true });

    // Burst sequence
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      myConfetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#4f46e5', '#7c3aed', '#16a34a', '#f59e0b', '#ec4899'],
      });
      myConfetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#4f46e5', '#7c3aed', '#16a34a', '#f59e0b', '#ec4899'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Big burst
    setTimeout(() => {
      myConfetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#4f46e5', '#7c3aed', '#16a34a', '#f59e0b', '#ec4899'],
      });
    }, 500);
  }

  // ===== UTILITIES =====
  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ===== BOOT =====
  document.addEventListener('DOMContentLoaded', init);
})();
