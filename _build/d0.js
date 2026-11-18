/* ============================================================
   FANTASTIC MR FOX — BOOK CLUB APP DATA
   Content data only. No markup/behaviour lives in this file.
   ============================================================ */

const RUBRIC = [
  { code: "R1", label: "LRV Ideas", desc: "Understands ideas within, across, and beyond the text." },
  { code: "R2", label: "LRV Structure & Language", desc: "Understands how the text is shaped for its audience." },
  { code: "R3", label: "LRV Processes & Strategies", desc: "Integrates strategies to form and express ideas." },
  { code: "R4", label: "SWP Ideas", desc: "Selects, forms and communicates ideas." },
  { code: "R5", label: "SWP Structure & Language", desc: "Uses language features appropriately." },
  { code: "R6", label: "SWP Processes & Strategies", desc: "Uses processes/strategies to communicate confidently." },
  { code: "R7", label: "Relating to Others", desc: "Key Competency — works well with others." },
  { code: "R8", label: "Thinking", desc: "Key Competency — thinks critically and creatively." },
  { code: "R9", label: "Participating & Contributing", desc: "Key Competency — takes part and contributes." },
  { code: "R10", label: "Core Value: Cleverness, Courage & Community", desc: "Connects with the book's central values." },
];

const RUBRIC_LEVELS = ["Not Achieved", "Working Towards", "Achieved"];
const RUBRIC_LEVEL_SHORT = ["NA", "WT", "A"];

/* ------------------------------------------------------------
   MARKING GUIDE — 3 levels, pitched at NZC Level 3 (Years 5–6).
   "Achieved" = the curriculum expectation has been met.
   curriculum: the achievement objective / competency being assessed
   expect:     what the student should be able to do (teacher language)
   kid:        the same thing as a student "I can" statement
   ask:        one quick question the teacher can ask themselves when marking
   na/wt/ach:  level descriptors
   exemplar:   what an Achieved response looks like (student sample)
   wtSample:   a Working Towards response, for contrast
   evidence:   where in the unit to find the evidence
   ------------------------------------------------------------ */
const MARKING_GUIDE = [
  { code: "R1", label: "Ideas", strand: "Listening, Reading & Viewing",
    curriculum: "Show a developing understanding of ideas within, across, and beyond texts.",
    expect: "Explains the big ideas of the story (cleverness and problem-solving, courage, family loyalty, sharing and community) and supports them with events from the book, making links beyond the text to self or the world.",
    kid: "I can explain a big idea from the story and back it up with something that happened in the book.",
    ask: "Does the student explain WHY an event matters — not just WHAT happened?",
    na: "Retells some events but cannot yet explain what they mean. Answers are mostly 'what happened'.",
    wt: "Names a big idea (e.g. 'Mr Fox is clever') with a general reason, but the link to the book is vague or missing.",
    ach: "Explains a big idea and supports it with a specific event from the book. Makes a link beyond the text (to self or the world).",
    wtSample: "The book is about a clever fox because he tricks the farmers.",
    exemplar: "I think the biggest idea is that being clever and being generous is stronger than being big and mean. The farmers have guns and tractors, but Mr Fox uses his brain and his digging skills, and then he shares the food with Badger, Mole, Rabbit and Weasel so everyone survives. It reminds me of how our class works best when we help each other out instead of competing.",
    evidence: "Comprehension & inference answers, Friday quizzes, go-away reflections" },

  { code: "R2", label: "Structure & Language", strand: "Listening, Reading & Viewing",
    curriculum: "Show a developing understanding of how texts are shaped for different purposes and audiences, and how language features are used for effect.",
    expect: "Notices the choices the author makes — short chapters that end on cliffhangers, sound words like ‘scrunch, scrunch, scrunch’, rhyme and rhythm in the songs, humorous exaggeration in the farmers' descriptions, the narrator's voice — and explains how they affect the reader.",
    kid: "I can notice how the author wrote the book and explain how it makes the reader think or feel.",
    ask: "Does the student name a writer's choice AND say what effect it has on the reader?",
    na: "Comments only on the plot; does not yet notice how the book is written.",
    wt: "Notices a feature (e.g. 'there are sound words') but cannot explain its effect.",
    ach: "Names a writer's choice and explains its effect on the reader, using an example from the book.",
    wtSample: "The chapters are really short and there are funny words.",
    exemplar: "When the shovels come through the ceiling, Roald Dahl uses sound words like ‘scrunch, scrunch, scrunch’ and very short sentences. This made me feel the foxes' fear because it sounded like the danger was right on top of them. Ending the chapter on a good moment made me want to keep reading to see what happened next.",
    evidence: "Language and structure questions (esp. Weeks with R2), Tuesday & Thursday close-reading answers, class discussion" },

  { code: "R3", label: "Processes & Strategies", strand: "Listening, Reading & Viewing",
    curriculum: "Integrate sources of information, processes, and strategies with developing confidence to identify, form, and express ideas.",
    expect: "Uses reading strategies — predicting, questioning, making connections, summarising — and links earlier chapters to later ones (cause and effect across the book).",
    kid: "I can use reading strategies and link what happened earlier in the book to what happens later.",
    ask: "Can the student connect an earlier event to a later one without being told?",
    na: "Relies on the teacher to explain the story; does not yet connect chapters.",
    wt: "Uses a strategy when prompted (e.g. predicts when asked) and makes simple links between chapters.",
    ach: "Independently uses strategies and explains how an earlier event causes or sets up a later one.",
    wtSample: "Mr Fox digs a tunnel and then he gets to the chicken house.",
    exemplar: "In Chapter 2 we learn that Mr Fox always approaches a farm knowing exactly where the buildings are. That's why in Chapter 10 he can dig straight to Boggis's Chicken House Number One first time. I predicted he was heading for the farms as soon as he said he knew a place that was ‘marvellous’.",
    evidence: "Predictions, cause-and-effect questions, weekly quizzes (review questions)" },

  { code: "R4", label: "Ideas", strand: "Speaking, Writing & Presenting",
    curriculum: "Select, form, and communicate ideas on a range of topics.",
    expect: "Writes and shares clear, developed ideas about the book — opinions, explanations and reflections — with supporting detail.",
    kid: "I can share a clear idea or opinion and give reasons to support it.",
    ask: "Is there a clear idea PLUS at least two reasons or details?",
    na: "Answers are one word or unclear; ideas are not explained.",
    wt: "Shares a clear idea but gives little detail or only one reason.",
    ach: "Communicates a clear opinion or idea and develops it with at least two reasons or pieces of evidence.",
    wtSample: "I think it was okay for Mr Fox to steal because he was hungry.",
    exemplar: "I think Mr Fox was right to take the food. First, the farmers were trying to kill him and his family, and they had already shot off his tail. Second, he only took a few things so nobody would notice, and he shared the food with the other animals. But I also agree with Badger that stealing isn't perfect, so it's a hard choice.",
    evidence: "Go-away reflections, journal projects, Week 7 opinion writing" },

  { code: "R5", label: "Structure & Language", strand: "Speaking, Writing & Presenting",
    curriculum: "Use language features appropriately, showing a developing understanding of their effects; organise texts using a range of structures.",
    expect: "Chooses the right structure and language for the task — a wanted poster, a diary in Mr Fox's voice, a comic, a script, a rhyming song.",
    kid: "I can choose the right kind of writing and words for the job (like a diary, a poster or a song).",
    ask: "Does the writing look and sound like the form it's meant to be?",
    na: "Writing does not match the task; little attempt at structure or language features.",
    wt: "Attempts the right form (e.g. writes a diary) but the language or structure is inconsistent.",
    ach: "Uses a suitable structure and language features for the purpose and audience (e.g. a boastful, chatty voice for Mr Fox's diary; sound words and rhyme for a song; persuasive language for a wanted poster).",
    wtSample: "Dear diary, today the farmers digged and I was scared and then we dug more and I got away.",
    exemplar: "Dear Diary, Tonight I poked my handsome nose out of the hole and — CRACK! — three guns went off at once. I lost my tail, but not my nerve. Mrs Fox says I am fantastic, and I have to admit she is right. Tomorrow the farmers will dig, but nobody, and I mean nobody, digs quicker than a fox.",
    evidence: "Poster, comic, drama & journal projects; Week 10 final project" },

  { code: "R6", label: "Processes & Strategies", strand: "Speaking, Writing & Presenting",
    curriculum: "Integrate sources of information, processes, and strategies with developing confidence to identify, form, and express ideas.",
    expect: "Plans, drafts, revises and shares work, using feedback to improve it.",
    kid: "I can plan my work, improve it, and use feedback to make it better.",
    ask: "Can you see a plan AND a change made because of feedback?",
    na: "Needs step-by-step support to start; work is not planned or revised.",
    wt: "Plans and drafts with support; makes small changes when prompted.",
    ach: "Independently plans, drafts and revises, and uses feedback (e.g. Glow & Grow) to improve the work.",
    wtSample: "I finished my comic. My teacher told me to add colour so I did.",
    exemplar: "My plan had three parts: the shovels, the tractors and the escape. My partner's 'grow' said my escape was rushed, so I added two more panels showing the foxes digging sideways towards Boggis's farm. Now the story makes more sense.",
    evidence: "Project plans, Week 10 planning lesson, Glow & Grow feedback" },

  { code: "R7", label: "Relating to Others", strand: "Key Competency",
    curriculum: "Relating to others: listen actively, recognise different points of view, negotiate and share ideas.",
    expect: "Listens to and builds on others' ideas during group reading and projects, and takes turns fairly.",
    kid: "I can listen to my group, take turns, and build on other people's ideas.",
    ask: "Does the student respond to what others say, not just wait for their own turn?",
    na: "Rarely listens or takes part in group reading; may interrupt or opt out.",
    wt: "Takes part and takes turns when reminded; sometimes responds to others' ideas.",
    ach: "Listens actively, takes turns, and builds on or respectfully challenges others' ideas.",
    wtSample: "(Observed) Reads their turn when the group reminds them; agrees with others but doesn't add to their ideas.",
    exemplar: "(Observed) \"I sort of disagree with Jack — I think Mr Fox knew stealing was risky, because Badger asked him about it and he had to think about his answer.\" She then asked the quieter group members what they thought.",
    evidence: "Tuesday & Thursday group reads (turn tracker), drama projects — teacher observation" },

  { code: "R8", label: "Thinking", strand: "Key Competency",
    curriculum: "Thinking: use creative, critical and metacognitive processes to make sense of information, experiences and ideas.",
    expect: "Makes inferences — works out what characters feel and why — using clues from the text, and thinks creatively about possibilities.",
    kid: "I can use clues in the story to work out things the author doesn't tell me.",
    ask: "Has the student worked something out AND pointed to the clue?",
    na: "Only answers questions where the answer is stated directly in the text.",
    wt: "Makes an inference with prompting but struggles to explain the clue.",
    ach: "Independently infers feelings or motives and points to the clue in the text that shows it.",
    wtSample: "Mr Fox is worried because the farmers are digging.",
    exemplar: "The book never says Mr Fox is afraid, but when the shovel breaks through the ceiling he jumps up shouting and starts digging straight away. That clue tells me he is terrified for his family, but he turns that fear into action instead of freezing.",
    evidence: "Inference questions (Question 2 every day), quizzes, predictions" },

  { code: "R9", label: "Participating & Contributing", strand: "Key Competency",
    curriculum: "Participating and contributing: be actively involved in groups and communities, contributing and taking responsibility.",
    expect: "Contributes ideas in class discussions and projects, and takes responsibility for a role in group work.",
    kid: "I can share my ideas and do my part in group work.",
    ask: "Does the student offer ideas and take on a job without being asked?",
    na: "Rarely contributes to discussions or group projects.",
    wt: "Contributes when asked; completes their part of a group task with support.",
    ach: "Offers ideas without being asked, takes responsibility for a role, and encourages others.",
    wtSample: "(Observed) Shares an idea in the reflection circle when called on; completes their part of the poster.",
    exemplar: "(Observed) In the Week 10 drama group, Tane volunteered to be director, made a scene list, and made sure everyone had a part. He shared two ideas in the reflection circle without being asked.",
    evidence: "Class discussions, project work, Week 10 group project & gallery walk" },

  { code: "R10", label: "Cleverness, Courage & Community", strand: "Values",
    curriculum: "Values: excellence, innovation and enquiry, community and participation, integrity, and respect.",
    expect: "Connects the book's values — clever problem-solving, courage when things are hard, looking after family, and sharing with the wider community — to their own life and actions.",
    kid: "I can connect the book's message about cleverness, courage and community to my own life.",
    ask: "Has the student linked a value from the book to something real in their own life?",
    na: "Cannot yet name the book's values or connect them to themselves.",
    wt: "Names a value (e.g. 'be brave' or 'share') when asked, with a simple or general link.",
    ach: "Explains a value from the book and connects it to a real experience or action of their own.",
    wtSample: "The book teaches us to share with other people.",
    exemplar: "Mr Fox could have kept the feast for his own family, but he invited Badger, Mole, Rabbit and Weasel because he knew the trouble was his fault. When our netball team lost a player, I gave up my turn on the shooting so the new girl could join in. Like Mr Fox, I learned that when you share, everyone ends up stronger.",
    evidence: "Go-away reflections, journal entries, Week 10 final project, reflection circle" },
];

const CURRICULUM = {
  heading: "Curriculum Alignment — Level 3–4 English, Years 5–6, NZ Curriculum",
  lrv: [
    "Ideas: Show understanding of ideas within, across, and beyond texts.",
    "Structure and Language: Show understanding of how texts are shaped for different purposes and audiences.",
    "Processes and Strategies: Integrate sources of information, processes, and strategies confidently to identify, form, and express ideas.",
  ],
  swp: [
    "Ideas: Select, form, and communicate ideas on a range of topics.",
    "Structure and Language: Show understanding of language features, using them appropriately.",
    "Processes and Strategies: Select and use processes and strategies to communicate confidently.",
  ],
  keyCompetencies: "Relating to Others, Thinking, Managing Self, Participating & Contributing",
  values: "Cleverness and problem-solving, courage and perseverance, family loyalty, sharing and community — and the moral question of taking what you need versus doing what is right.",
  crossCurricular: "Science — Living World (burrowing animals and their adaptations, the fox's sense of smell, food chains, wildlife and farming), Technology (machines versus muscle: mechanical shovels and tractors), Maths (108 farm hands, 29 animals at the feast — addition, multiplication and problem solving) and Social Sciences (rich and poor, sharing resources, community).",
};

// Helper to build a day object
function D(chapters, subtitle, leadIn, comp1, comp2, goAway) {
  return { chapters, subtitle, leadIn, comp1, comp2, goAway };
}
function P(type, title, brief) { return { type, title, brief }; }
function Q(q, answer, type) { return { q, answer, type: type || "short" }; }

const WEEKS = [
