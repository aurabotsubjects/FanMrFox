const fs=require('fs');
const m={exports:{}};
new Function('module',fs.readFileSync('data.js','utf8')+';module.exports={WEEKS,WEEK10,MARKING_GUIDE,RUBRIC,CURRICULUM,DAY_LABELS}')(m);
const {WEEKS,WEEK10,MARKING_GUIDE,RUBRIC,CURRICULUM,DAY_LABELS}=m.exports;
let o=[];const p=s=>o.push(s);
p(`# 🦊 FANTASTIC MR FOX — BOOK STUDY UNIT PLAN
### Based on *Fantastic Mr Fox* by Roald Dahl (18 short chapters). Built on the same blueprint as the Wild Robot book study app — same 10-week format, printables, rubrics, lesson plans and teacher/student packs.

---

## 1. HOW TO USE THIS DOCUMENT
This is the complete written version of the content inside the app (\`data.js\`). Use it to plan, to print sections, or to check answers away from a screen. The app itself is the interactive version: slideshow reads, group worksheets, auto-marked quizzes, project menus, rubric, printable Student Workbook and Teacher Pack.

**Unit shape (one deliberate change from the longer novels):** *Fantastic Mr Fox* is a short book, so each week covers **two chapters** across four reading days — the class hears the chapter read aloud first (Monday / Wednesday, Teacher Read) and then re-reads it in groups with a closer focus on language and inference (Tuesday / Thursday, Group Read). Week 10 has no new reading.

---

## 2. CURRICULUM ALIGNMENT
**${CURRICULUM.heading}**

**Listening, Reading & Viewing (LRV)**
${CURRICULUM.lrv.map(x=>'- '+x).join('\n')}

**Speaking, Writing & Presenting (SWP)**
${CURRICULUM.swp.map(x=>'- '+x).join('\n')}

**Key Competencies:** ${CURRICULUM.keyCompetencies}

**Values:** ${CURRICULUM.values}

**Cross-curricular links:** ${CURRICULUM.crossCurricular}

---

## 3. THE WEEKLY RHYTHM (Weeks 1–9)
| Day | Mode | What happens |
|---|---|---|
| Monday | Teacher Read | Slideshow: lead-in question → read chapter aloud → two comprehension questions → go-away reflection |
| Tuesday | Group Read | Same chapter re-read in groups of 3–4 (turn tracker) with a closer focus; answers in the workbook |
| Wednesday | Teacher Read | Second chapter of the week, same routine as Monday |
| Thursday | Group Read | Second chapter re-read in groups, close-reading focus |
| Friday | Quiz | 20 questions (auto-check, answer key, printable) |
| All week | Project menu | Choose one of four projects: Poster, Comic Strip, Drama, Journal |

---

## 4. TERM OVERVIEW
| Week | Chapters | Title | Learning intention (short) |
|---|---|---|---|
${WEEKS.map(w=>`| ${w.num} | ${w.chapters.replace('Chapters ','Ch. ')} | ${w.title} | ${w.LI.replace('We are learning to ','')} |`).join('\n')}
| 10 | — | Final Project & Celebration | Apply everything learned to a final project, present it, reflect |

---

## 5. DETAILED WEEKLY CONTENT
`);
for(const w of WEEKS){
 p(`### WEEK ${w.num} — ${w.chapters}: "${w.title}"
**Learning Intention:** ${w.LI}
**Success Criteria:** ${w.SC}
**Rubric focus:** ${w.rubricTags.join(', ')}
`);
 for(const d of ['mon','tue','wed','thu']){const x=w.days[d];
  p(`**${DAY_LABELS[d]} — ${x.chapters}: ${x.subtitle}**
- **Lead-in:** ${x.leadIn}
- **Question 1 (comprehension):** ${x.comp1}
- **Question 2 (inference):** ${x.comp2}
- **Go-away reflection:** ${x.goAway}
`);}
 p(`**Project menu**\n${w.projects.map(x=>`- **${x.type[0].toUpperCase()+x.type.slice(1)} — ${x.title}:** ${x.brief}`).join('\n')}\n`);
 p(`**Friday quiz (with answer key)**\n${w.quiz.map((q,i)=>`${i+1}. ${q.q}${q.type==='tf'?' *(True/False)*':''}\n   - *Answer:* ${q.answer}`).join('\n')}\n\n---\n`);
}
p(`## 6. WEEK 10 — FINAL PROJECT (3 lessons) + PRESENTATION & CELEBRATION

### Project options
${WEEK10.options.map(x=>`- **${x.title}:** ${x.desc}`).join('\n')}

### 3-lesson structure (fixed)
${WEEK10.lessons.map(x=>`- **${x.day} — ${x.title}:** ${x.desc}`).join('\n')}

### Thursday
${WEEK10.thursday}

### Friday
${WEEK10.friday}

### Final project rubric
| Criteria | Strand | Not Achieved | Working Towards | Achieved | Example |
|---|---|---|---|---|---|
${WEEK10.rubric.map(r=>`| ${r.criteria} | ${r.code} | ${r.na} | ${r.wt} | ${r.a} | ${r.example} |`).join('\n')}

---

## 7. READING PROGRESS RUBRIC & MARKING GUIDE
Three levels: **Not Achieved · Working Towards · Achieved** (Achieved = the Level 3 curriculum expectation has been met). Judge the student's usual, consistent work rather than a one-off.

${MARKING_GUIDE.map(r=>`### ${r.code} — ${r.label} (${r.strand})
- **Curriculum:** ${r.curriculum}
- **Expect:** ${r.expect}
- **Student "I can":** ${r.kid}
- **Quick question when marking:** ${r.ask}
- **Not Achieved:** ${r.na}
- **Working Towards:** ${r.wt} *Sample:* ${r.wtSample}
- **Achieved:** ${r.ach}
- **Achieved exemplar:** ${r.exemplar}
- **Where to find evidence:** ${r.evidence}
`).join('\n')}
---

## 8. IMAGE PROMPT LIBRARY
See **Fantastic_Mr_Fox_Image_Prompt_Library.md** in this folder — 34 ready-to-paste prompts (site branding, 10 weekly banners, icons, badges, certificate, final-project art) in the autumn-wood / night-sky / underground-tunnel visual identity, matched to the poster.

---

## 9. PRINTABLES CHECKLIST
- [ ] Student Workbook (workbook.html) — cover, journey tracker, weekly pages, project planners, reflection, back cover
- [ ] Teacher Pack (teacher-pack.html) — schedule, ${WEEKS.length*4} reading lesson plans, quiz answer keys, marking guide, exemplars, class record and tracker
- [ ] Weekly quiz printouts (student copy + answer key) — from each Friday page
- [ ] Project cards — from each week's project menu
- [ ] Reading Progress Rubric (blank class record)
- [ ] Certificate — Week 10
- [ ] Classroom poster — home page
`);
fs.writeFileSync('The_Fantastic_Mr_Fox_Book_Study_Unit_Plan.md',o.join('\n'));
console.log(o.join('\n').length);
