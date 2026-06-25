import { Flashcard } from "@/types";

export const lecture11Cards: Flashcard[] = [
  {
    id: 1101,
    lecture: 11,
    question:
      "What is a distributed system? Give examples from the slide.",
    answer:
      "A distributed system is a system containing multiple components located on different physical systems that communicate via a network using a protocol.\n\nComponents can be computers, virtual machines, servers, etc.\n\nGoal: work to achieve a common goal OR share resources and information.\n\nExamples from slide: banking systems, multi-robot systems, multiplayer online games, the internet.",
    difficulty: "easy",
    category: "Definition",
  },
  {
    id: 1102,
    lecture: 11,
    question:
      "Why are distributed systems reliable, and what are the challenges of maintaining that reliability?",
    answer:
      "Reliable because of redundancy — a single component failure does not affect the operation of the whole system.\n\nChallenges of maintaining reliability:\n1. Planning/scheduling\n2. Data collection and monitoring usage activity\n3. Availability/latency\n4. Maintenance\n\nMnemonic: 'Please Don't Add More'",
    difficulty: "easy",
    category: "Theory",
  },
  {
    id: 1103,
    lecture: 11,
    question:
      "Define: fault, failure. Explain their relationship with an example from the slide.",
    answer:
      "Fault: 'An unpermitted deviation of at least one characteristic property of the system.' A fault is independent of whether the system is operational — the system can have a fault and still run. Faults may lead to failure.\n\nFailure: 'A permanent interruption of a system's ability to perform a required function under specified operating conditions.' A failure is the result of one or more faults.\n\nChain: Fault → (may lead to) → Failure\n\nSlide example:\n| Process | Fault | Failure |\n| Car headlight | Corroded contacts to switch | No light |",
    difficulty: "easy",
    category: "Definition",
  },
  {
    id: 1104,
    lecture: 11,
    question:
      "What does it mean that 'a fault is independent of whether the system is operational or not'?",
    answer:
      "It means a fault can exist inside a system while the system is still running normally — a fault is an internal deviation from expected behaviour, not necessarily a visible breakdown.\n\nThree possible states:\n• Running ✅ | No fault → Everything genuinely fine\n• Running ✅ | Fault exists ⚠️ → Looks fine but isn't (KEY CASE)\n• Broken ❌ | Fault exists → System has failed\n\nThis is WHY FDD exists — to catch faults in the second state before they become the third.\n\nAnalogy: high blood pressure — person feels fine, goes to work, but the fault exists inside.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1105,
    lecture: 11,
    question:
      "Define: malfunction, error, disturbance, and symptom.",
    answer:
      "Malfunction: temporary interruption of a system's function (comes and goes).\n\nError: deviation between a computed value and the specified correct value (wrong output number).\n\nDisturbance: an unknown input acting on a system (unexpected interference from outside).\n\nSymptom: change of an observable quantity from normal behaviour (what you actually see when a fault exists).\n\nChain: Disturbance → Fault → Symptom → Malfunction → Error → Failure",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 1106,
    lecture: 11,
    question:
      "Explain the four FDD stages in order. What does each stage determine?",
    answer:
      "1. Fault Detection — determines that a fault is present and the TIME of detection. (Is there a fault? When?)\n\n2. Fault Isolation — determines the KIND and LOCATION, following detection. (What type? Where?)\n\n3. Fault Identification — determines the SIZE and TIME-VARIANT BEHAVIOUR, following isolation. (How big? Getting worse?)\n\n4. Fault Diagnosis — determines kind + size + location + time combined — the full picture.\n\nMnemonic: 'Did I Find Dirt?' (Detection, Isolation, Fault ID, Diagnosis)\n\nEach stage adds more information. Isolation must come before Identification — you need to know where before measuring how big.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1107,
    lecture: 11,
    question:
      "What is the difference between monitoring and supervision?",
    answer:
      "Monitoring: a continuous real-time task of determining the conditions of a physical system by recording information, recognising and identifying anomalies in behaviour. It only OBSERVES.\n\nSupervision: monitoring a physical system and TAKING APPROPRIATE ACTIONS to maintain the operation in case of fault.\n\nKey difference: Supervision = Monitoring + Corrective Action.\n\nAnalogy: Monitoring = security camera (watches only). Supervision = security guard (watches AND steps in).",
    difficulty: "medium",
    category: "Comparison",
  },
  {
    id: 1108,
    lecture: 11,
    question:
      "What are the time-dependency types of faults? Describe each with an example.",
    answer:
      "a) Abrupt (step-wise) — fault appears suddenly at full magnitude instantly.\nExample: sensor wire snaps → reading instantly drops to zero. Robot example: motor driver short circuits → motor stops instantly.\n\nb) Incipient (drift-wise) — fault develops gradually over time, starts small and gets worse.\nExample: brake pads slowly wearing down. Robot example: wheel encoder slowly drifting further from truth.\n\nc) Intermittent — fault appears and disappears repeatedly in an on-off pattern.\nExample: loose wire connection. Robot example: Wi-Fi dropping and reconnecting repeatedly.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1109,
    lecture: 11,
    question:
      "What are the two basic fault models (mathematical)? Explain the key difference.",
    answer:
      "a) Additive fault (offset of sensor): Y = U + f\nA fixed constant value is added to the output — SAME error regardless of input size.\nExample: temperature sensor always reads +5°C above real temperature.\n\nb) Multiplicative fault (change in parameter): Y = (a + Δa) × U = aU + fU\nThe system gain/parameter changes — error SCALES with input size. Bigger input = bigger error.\nExample: motor produces only 80% of commanded torque regardless of command level.\n\nKey difference: Additive = FLAT error. Multiplicative = SLOPE error (grows with input).",
    difficulty: "hard",
    category: "Comparison",
  },
  {
    id: 1110,
    lecture: 11,
    question:
      "Describe faults categorised by duration (permanent, transient, intermittent).",
    answer:
      "Permanent: fault appears once and stays forever, never disappears on its own.\nExample: short circuit or meltdown. Robot example: burned-out motor.\n\nTransient: temporary malfunction — appears briefly then disappears by itself with no intervention.\nExample: EM interference causing a bit flip. Robot example: sensor glitch from interference, then normal again.\n\nIntermittent: repeated occurrence of transient faults — appears, disappears, reappears.\nExample: loose connector. Robot example: flaky network connection dropping and reconnecting.\n\nMnemonic: 'Please Take It' (Permanent, Transient, Intermittent)",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1111,
    lecture: 11,
    question:
      "What is redundancy? Name its two types. Why is it at the heart of FDD?",
    answer:
      "Redundancy = having more than one way to measure or perform the same function, so if one fails another covers for it.\n\nHardware redundancy: duplicate physical components measuring the same thing (e.g. two speed sensors — speedometer + GPS).\n\nAnalytical redundancy: computing the same measurement a different way using a mathematical model instead of extra hardware (e.g. estimating speed from odometry/camera).\n\nWhy at the heart of FDD: fault detection requires COMPARISON — you can only know something is wrong by comparing it against a reference. Without redundancy there is nothing to compare against, making detection impossible.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 1112,
    lecture: 11,
    question:
      "What are the challenges of diagnosis in distributed systems?",
    answer:
      "All standalone fault types still apply PLUS distributed-specific challenges:\n\n1. Global/local planning faults — faulty plan steps waste resources; system appears healthy.\n2. Communication faults — messages lost/delayed/corrupted over the network.\n3. Data collection faults — inconsistent or incomplete data across components.\nAnd many more...\n\nThe paradox: redundancy makes distributed systems MORE reliable but makes diagnosis MUCH harder.\n\nMnemonic for extra challenges: 'Good Computers Deliver'",
    difficulty: "hard",
    category: "Theory",
  },
  {
    id: 1113,
    lecture: 11,
    question:
      "What are the key differences between MRS diagnosis and traditional distributed system diagnosis?",
    answer:
      "Four MRS-specific challenges (from slide 22):\n\n1. Dynamic nature of physical environment — real world constantly changing makes it hard to distinguish a sensor fault from a real environment change.\n\n2. Uncertainty in sensing and environment modelling — even healthy sensors have noise; fault vs normal uncertainty is unclear.\n\n3. Limited computational power of each robot — FDD must be lightweight; heavy algorithms not affordable per robot.\n\n4. Limited computation time due to time-critical tasks — millisecond decisions needed; no time for deep analysis.\n\nMnemonic: 'Ducks Usually Love Tacos' (Dynamic, Uncertainty, Limited compute, Time-critical)",
    difficulty: "hard",
    category: "Comparison",
  },
  {
    id: 1114,
    lecture: 11,
    question:
      "What should an FDD mechanism do in an MRS? (4 requirements from slide 22)",
    answer:
      "1. Identify knowledge inconsistencies and map them to individual faulty robots — detect when robots have conflicting beliefs and pinpoint which specific robot is wrong.\n\n2. Identify faults in global decision making that may result in global planning faults — monitor the coordinator as a separate system.\n\n3. Monitor the execution of each individual robot's local plan following the global plan — catch schedule deviations as early fault signals.\n\n4. Diagnose and identify faults in robot components — apply standard FDD pipeline per robot.\n\nMnemonic: 'I I M D' — Identify inconsistencies, Identify global faults, Monitor local, Diagnose components.",
    difficulty: "hard",
    category: "Short Answer",
  },
  {
    id: 1115,
    lecture: 11,
    question:
      "What are the three factors affecting diagnosis in a single robot system?",
    answer:
      "From slide 24:\n\n1. Degree of general use — a robot with many different tasks makes it hard to define 'normal behaviour', making fault detection harder.\n\n2. Degree of autonomy — higher autonomy means no human supervisor as backup; FDD must be fully onboard and self-sufficient. (Mars Rover example: 22-minute communication delay → FDD must be computationally lightweight.)\n\n3. Degree of interaction with the environment — more physical interaction (moving, manipulating) means more sensors, more fault sources, more uncertainty.\n\nMnemonic: 'GAI' — General use, Autonomy, Interaction.",
    difficulty: "medium",
    category: "Short Answer",
  },
  {
    id: 1116,
    lecture: 11,
    question:
      "What kinds of faults can occur in a multi-robot system? (Slide 27)",
    answer:
      "Two categories:\n\nPlanning-related faults:\n• Faulty plan steps waste resources.\n• Planning should be considered as an independent system.\n• Robotic system might appear to be healthy (dangerous — no alarms).\n\nCoordination-related faults:\n• Accidents and damage from unreported faults/failures.\n• Might occur frequently from communication faults.\n• Can occur if any local fault is not reported globally.\n\nMnemonic: 'Wrong Plan, Lost Radio'\n• Wrong Plan = planning fault\n• Lost Radio = coordination fault (local fault not communicated)",
    difficulty: "hard",
    category: "Theory",
  },
  {
    id: 1117,
    lecture: 11,
    question:
      "What is the difference between collaboration and cooperation in MRS?",
    answer:
      "Collaboration: robots act as a TEAM toward ONE common goal.\n• Performance heavily dependent on global plan.\n• Individual robots AWARE of other robots.\n• 'Social Fault Diagnosis' is ENABLED.\n\nCooperation: robots achieve selfish or altruistic common goals independently.\n• NOT necessarily aware of other robots.\n• Heavy reliance on coordination when needed.\n• Self-diagnosis required — no automatic mutual monitoring.\n\nAnalogy: Collaboration = football team (everyone watches everyone). Cooperation = taxi fleet (each has own passengers, cooperate only when needed).",
    difficulty: "medium",
    category: "Comparison",
  },
  {
    id: 1118,
    lecture: 11,
    question:
      "What is a swarm? List its five properties and two fault types. (Slide 32)",
    answer:
      "A swarm is a special case of MRS.\n\nFive properties:\n1. No centralised control\n2. Low intelligence of individual robots\n3. Local interconnection among robots\n4. Swarm intelligence emerges from basic behaviour\n5. Robots only communicate with their neighbours\n\nTwo fault types:\n• Topological faults — wrong information on location/network position (e.g. GPS fault → robot thinks it's at wrong position → sends to wrong neighbours).\n• Component faults — hardware failures (e.g. motor not working).\n\nMnemonics: 'No Low Local Smart Neighbour' + 'Lost or Broken'",
    difficulty: "hard",
    category: "Theory",
  },
  {
    id: 1119,
    lecture: 11,
    question:
      "How does the size of an MRS affect FDD? (Slide 31)",
    answer:
      "Three effects:\n\n1. Fault isolation becomes harder — the larger the number of robots, the more possible fault locations to search through (3 robots × 5 components = 15 vs 100 robots × 5 = 500).\n\n2. Data management challenge — more robots generate more data. Key questions: which data is relevant? Is the data consistent across robots?\n\n3. More components need to be monitored — requiring automated scalable distributed FDD, not manual monitoring.\n\nMnemonic: 'IDM' — Isolation harder, Data increases, More components to monitor.",
    difficulty: "medium",
    category: "Why",
  },
  {
    id: 1120,
    lecture: 11,
    question:
      "Describe the Roos & Witteveen approach to plan diagnosis in MRS. (Slide 34)",
    answer:
      "A model-based diagnosis approach for plans — six key points:\n\n1. Uses model-based diagnosis — builds a mathematical model of how the plan SHOULD execute.\n2. Plan treated as an independent system — monitored separately from robot components.\n3. A formal model of plans introduced — steps (π), robots (v), expected world states (s) at each level.\n4. Execution is partially observable — not all steps are directly visible; must infer from indirect evidence.\n5. Observations compared with predicted states — discrepancy = fault signal.\n6. Diagnosis = set of abnormal plan steps — fixing these restores compatibility between predicted and observed.\n\nAnalogy: Doctor diagnosing a patient using a medical chart.",
    difficulty: "hard",
    category: "Theory",
  },
  {
    id: 1121,
    lecture: 11,
    question:
      "Compare Micalizio's and Stancliff's approaches to plan reliability in MRS. (Slide 35)",
    answer:
      "Micalizio (REACTIVE — self-healing):\n• Distributed approach for autonomous plan repair.\n• Each robot executes a local plan derived from the global plan.\n• Each robot monitors, diagnoses, and repairs its OWN local plan.\n• Local repair reported globally.\n• Computational cost low — search space constrained to each robot's steps.\nAnalogy: Self-healing road — each section repairs itself.\n\nStancliff (PROACTIVE — pre-planned backup):\n• Robot failures considered A PRIORI in task allocation.\n• Failures incorporated INTO the plan before execution.\n• When fault detected → alternative plan activates instantly.\n• More efficient than computing a new plan after a fault occurs.\nAnalogy: Backup parachute — packed BEFORE jumping.\n\nKey difference: Micalizio fixes problems after they happen; Stancliff prepares for them before they happen.",
    difficulty: "hard",
    category: "Comparison",
  },
];
