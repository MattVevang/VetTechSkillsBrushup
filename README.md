# 🩺 Vet Tech Skills Brushup

A **modern, gamified multiple-choice quiz app** for veterinary technicians brushing up on clinical knowledge. Built as a pure client-side single-page application on GitHub Pages — no backend, no database, no accounts.

🌐 **[Take the Quiz →](https://mattvevang.github.io/VetTechSkillsBrushup/)**

---

## What It Does

Each session gives you **10 random questions** drawn from a pool of **270+ clinically-specific questions** across **13 categories**. Every visit is different thanks to Fisher-Yates randomization — you'll never get the same quiz twice.

After each answer you get **immediate feedback** with:
- ✅ Correct/incorrect indication with color highlights
- 📖 Detailed explanation of the correct answer
- 🔗 Source citation with clickable link (where available)

High scores (8+/10) get a **confetti celebration** 🎉

## Categories

| # | Category | Questions |
|---|----------|-----------|
| 1 | 🦷 Dental Procedures | 23 |
| 2 | 💉 Vaccine Administration | 22 |
| 3 | 😴 Anesthesia & Monitoring | 23 |
| 4 | 💊 Pharmacology & Drug Calculations | 22 |
| 5 | 🔬 Laboratory Skills | 22 |
| 6 | 🔪 Surgical Assisting | 19 |
| 7 | ☢️ Radiology & Imaging | 18 |
| 8 | 🚨 Emergency & Critical Care | 22 |
| 9 | 🐾 Restraint & Handling | 15 |
| 10 | 🩹 Medical Nursing & Patient Care | 18 |
| 11 | 💬 Communication & Client Education | 13 |
| 12 | 📝 Veterinary Medical Terminology | 25 |
| 13 | ⚖️ Scope of Practice (Washington State) | 20 |
| ⭐ | Bonus High-Yield Questions | 8 |
| | **Total** | **270** |

> **Note:** Category 13 (Scope of Practice) questions are specific to **Washington State** law (WAC 246-935-050) and are clearly labeled in the quiz UI.

## Tech Stack

- **HTML5 + CSS3 + Vanilla JavaScript** — no frameworks, no build step
- **GitHub Pages** — deployed automatically from the `main` branch
- Responsive design — works on mobile, tablet, and desktop
- No data persistence — no localStorage, cookies, or backend
- [canvas-confetti](https://github.com/catdad/canvas-confetti) via CDN for celebration effects

## Project Structure

```
├── index.html              # Single-page app (landing, quiz, results views)
├── css/
│   └── styles.css          # Modern responsive styles
├── js/
│   ├── app.js              # Quiz logic, shuffle, UI management
│   └── questions.js        # 270 questions as JSON (parsed from research doc)
├── vet_tech_quiz_research.md   # Source research document with all questions
└── README.md
```

## Question Sources

All questions are based on authoritative veterinary references including:
- AAHA Vaccination Guidelines (2022)
- AAFP Feline Vaccination Guidelines
- RECOVER CPR Initiative
- Merck Veterinary Manual
- Plumb's Veterinary Drug Handbook
- McCurnin's Clinical Textbook for Veterinary Technicians
- Lumb & Jones' Veterinary Anesthesia and Analgesia
- WAC 246-935-050 (Washington State Scope of Practice)
- And many more — see individual question citations in the quiz