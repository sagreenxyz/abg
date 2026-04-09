export interface PhaseTable {
  headers: string[];
  rows: string[][];
}

export interface PhaseMatrix {
  cols: string[];
  rows: { label: string; acidosis: string; alkalosis: string }[];
}

export interface FiveStep {
  step: number;
  label: string;
  detail: string;
}

export interface Phase {
  number: number;
  title: string;
  purpose: string;
  steps: string[];
  badge: string;
  icon: string;
  table?: PhaseTable;
  matrix?: PhaseMatrix;
  fiveSteps?: FiveStep[];
}

export const phases: Phase[] = [
  {
    number: 1,
    title: "Establish the \"Why\" — Clinical Relevance & Motivation",
    purpose: "Create urgency and meaning before introducing complexity.",
    steps: [
      "Open with a brief, realistic patient scenario (e.g., a post-op patient becoming increasingly restless and tachypneic) and ask students, \"What do you need to know, and how would you find it?\"",
      "Explain what an ABG tells us that no other single test can — a real-time snapshot of ventilation, oxygenation, and acid-base balance simultaneously.",
      "Identify the clinical situations where ABGs are ordered: respiratory distress, altered mental status, suspected metabolic crisis, ventilator management, cardiac arrest, etc.",
      "Frame the stakes: unrecognized acid-base imbalance is life-threatening, and nurses are often the first to receive and act on these results.",
    ],
    badge: "badge-primary",
    icon: "🏥",
  },
  {
    number: 2,
    title: "Build the Scientific Foundation — Physiology Review",
    purpose: "Ensure students understand the \"machinery\" before they interpret its output.",
    steps: [
      "Review normal respiratory physiology — how CO₂ is produced, transported, and exhaled, and why it matters to pH.",
      "Review renal physiology — how the kidneys regulate bicarbonate (HCO₃⁻) and excrete hydrogen ions over hours to days.",
      "Explain the Henderson-Hasselbalch relationship in plain language: pH is determined by the ratio of bicarbonate to dissolved CO₂. Emphasize the lungs control CO₂ (fast), kidneys control HCO₃⁻ (slow).",
      "Define acidosis vs. alkalosis conceptually — excess acid vs. excess base — before attaching any numbers.",
      "Introduce the concept of compensation: one system responds to correct the disturbance of the other, and the body always tries to normalize pH, never over-corrects it.",
    ],
    badge: "badge-secondary",
    icon: "🔬",
  },
  {
    number: 3,
    title: "Introduce the Values — Know Your Numbers",
    purpose: "Establish the normal reference ranges as the non-negotiable baseline.",
    steps: [
      "Present the five core ABG parameters: pH (7.35–7.45) — Overall acid-base balance; PaCO₂ (35–45 mmHg) — Respiratory component; HCO₃⁻ (22–26 mEq/L) — Metabolic component; PaO₂ (80–100 mmHg) — Oxygenation; SaO₂ (95–100%) — Oxygen saturation of hemoglobin.",
      "Drill these ranges with repetition — flashcards, verbal recitation, or quick quizzes. Students must know them automatically before moving forward.",
      "Teach the critical/panic values that require immediate action (e.g., pH < 7.20 or > 7.60, PaO₂ < 60 mmHg).",
    ],
    badge: "badge-accent",
    icon: "📊",
    table: {
      headers: ["Parameter", "Normal Range", "What It Reflects"],
      rows: [
        ["pH", "7.35 – 7.45", "Overall acid-base balance"],
        ["PaCO₂", "35 – 45 mmHg", "Respiratory component (ventilation)"],
        ["HCO₃⁻", "22 – 26 mEq/L", "Metabolic component (renal)"],
        ["PaO₂", "80 – 100 mmHg", "Oxygenation"],
        ["SaO₂", "95 – 100%", "Oxygen saturation of hemoglobin"],
      ],
    },
  },
  {
    number: 4,
    title: "Teach the Four Primary Disorders",
    purpose: "Establish the four \"corners\" of the acid-base map before adding compensation.",
    steps: [
      "Teach each disorder in isolation, one at a time: Respiratory Acidosis → hypoventilation → CO₂ rises → pH falls; Respiratory Alkalosis → hyperventilation → CO₂ falls → pH rises; Metabolic Acidosis → acid gain or bicarbonate loss → HCO₃⁻ falls → pH falls; Metabolic Alkalosis → base gain or acid loss → HCO₃⁻ rises → pH rises.",
      "For each disorder, provide 2–3 common real-world clinical causes (e.g., respiratory acidosis → COPD, opioid overdose, neuromuscular disease).",
      "Use a 2×2 visual matrix (Respiratory/Metabolic × Acidosis/Alkalosis) so students can see the four quadrants clearly.",
    ],
    badge: "badge-info",
    icon: "🗺️",
    matrix: {
      cols: ["Acidosis", "Alkalosis"],
      rows: [
        { label: "Respiratory", acidosis: "↑ CO₂ → ↓ pH\n(hypoventilation)", alkalosis: "↓ CO₂ → ↑ pH\n(hyperventilation)" },
        { label: "Metabolic", acidosis: "↓ HCO₃⁻ → ↓ pH\n(acid gain / base loss)", alkalosis: "↑ HCO₃⁻ → ↑ pH\n(base gain / acid loss)" },
      ],
    },
  },
  {
    number: 5,
    title: "Introduce Compensation",
    purpose: "Add the layer that makes ABGs clinically nuanced.",
    steps: [
      "Explain that compensation is the expected physiologic response — it is not a second disorder.",
      "Teach the directional rules: In a respiratory problem → kidneys compensate by adjusting HCO₃⁻ (same direction as pH change); In a metabolic problem → lungs compensate by adjusting CO₂ (same direction as pH change).",
      "Distinguish partial compensation (pH still abnormal) from full compensation (pH returned to normal range, but both CO₂ and HCO₃⁻ are still abnormal).",
      "Briefly introduce the concept of mixed disorders — when both CO₂ and HCO₃⁻ move in opposite directions — as a preview of advanced practice.",
    ],
    badge: "badge-success",
    icon: "⚖️",
  },
  {
    number: 6,
    title: "Teach a Systematic Interpretation Method — \"The 5-Step Approach\"",
    purpose: "Give students a reliable, repeatable cognitive algorithm they can always fall back on.",
    steps: [
      "Introduce and anchor the five-step method as their permanent framework.",
      "Walk through a simple, unambiguous example for each of the four primary disorders using this exact framework, narrating your thinking aloud.",
      "Post the 5-step framework visually in the room and encourage students to write it on a card they keep in their pocket.",
    ],
    badge: "badge-warning",
    icon: "📋",
    fiveSteps: [
      { step: 1, label: "Evaluate the pH", detail: "Is it normal, acidotic (< 7.35), or alkalotic (> 7.45)?" },
      { step: 2, label: "Evaluate the PaCO₂", detail: "Is it normal, elevated (> 45), or low (< 35)? Does it match the pH direction (opposite = respiratory cause)?" },
      { step: 3, label: "Evaluate the HCO₃⁻", detail: "Is it normal, elevated (> 26), or low (< 22)? Does it match the pH direction (same = metabolic cause)?" },
      { step: 4, label: "Determine compensation", detail: "Is the non-primary value moving in a compensatory direction?" },
      { step: 5, label: "Evaluate oxygenation", detail: "Assess PaO₂ and SaO₂ independently — oxygenation is a separate problem from acid-base." },
    ],
  },
  {
    number: 7,
    title: "Guided Practice — Worked Examples as a Group",
    purpose: "Model expert thinking before releasing students to independent practice.",
    steps: [
      "Present 6–8 progressively complex ABG scenarios on slides or cards. Begin with pure, uncompensated disorders; progress to partially compensated, then fully compensated.",
      "Use think-aloud modeling for the first 2–3 cases — narrate every step of your reasoning explicitly, including wrong turns and self-corrections.",
      "Transition to guided practice: present a scenario, let students work through each step, then discuss as a group before revealing the answer.",
      "Deliberately include one or two distractor cases (e.g., normal ABG in a distressed patient, or a mixed disorder) to build critical thinking and resist pattern-matching shortcuts.",
    ],
    badge: "badge-error",
    icon: "👥",
  },
  {
    number: 8,
    title: "Independent Practice — Case-Based Scenarios",
    purpose: "Build confidence and automaticity through repetition.",
    steps: [
      "Provide students with a set of 10–15 independent practice ABGs with clinical context (not just numbers — include a brief patient history).",
      "Require students to document their interpretation using the 5-step framework in writing, not just state a final answer.",
      "Pair students for peer teaching: one student interprets aloud while the other listens and challenges or confirms — this deepens retention significantly.",
    ],
    badge: "badge-primary",
    icon: "✏️",
  },
  {
    number: 9,
    title: "Connect to Nursing Action — \"Now What?\"",
    purpose: "Close the loop between interpretation and bedside decision-making.",
    steps: [
      "For each disorder, teach the nurse's expected assessment findings (e.g., in respiratory acidosis: decreased LOC, slow/shallow respirations, flushed skin from CO₂ vasodilation).",
      "Teach the nurse's immediate actions for each disorder — when to call the provider, when to intervene, what orders to anticipate.",
      "Introduce trending — a single ABG is a snapshot; serial ABGs tell the story. Teach students to compare results over time and report the direction of change.",
      "Briefly address pre-analytical error: how faulty sampling technique (air bubbles, heparin excess, delay in processing, venous contamination) can corrupt results and lead to misinterpretation.",
    ],
    badge: "badge-secondary",
    icon: "🩺",
  },
  {
    number: 10,
    title: "Assessment & Consolidation",
    purpose: "Verify mastery and solidify long-term retention.",
    steps: [
      "Administer a formal written assessment using novel ABG scenarios with clinical context — require full 5-step written interpretations.",
      "Use a simulation scenario or high-fidelity case study where students must interpret an ABG in real time as part of a broader patient deterioration event, integrating it with assessment findings and clinical decision-making.",
      "Close with a summary debrief: revisit the original opening patient scenario from Phase 1 and have students now solve it completely — demonstrating how far they've come.",
    ],
    badge: "badge-accent",
    icon: "🏆",
  },
];

export const pedagogicalPrinciples = [
  { title: "Spiral learning", desc: "Each phase builds on and reinforces the previous one." },
  { title: "Think-aloud modeling", desc: "Expert reasoning is made visible before students work independently." },
  { title: "Clinical context first", desc: "Numbers are never taught in isolation from patients." },
  { title: "Systematic over intuitive", desc: "A reliable framework prevents errors that pattern-matching shortcuts invite." },
  { title: "Formative checkpoints", desc: "Brief knowledge checks after each phase catch gaps before they compound." },
];
