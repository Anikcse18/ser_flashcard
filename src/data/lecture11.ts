import { Flashcard } from "@/types";

export const lecture11Cards: Flashcard[] = [
  {
    id: 1101,
    lecture: 11,
    question: "Define a distributed system. What can its components be?",
    answer:
      "A distributed system contains multiple components, which can be located on different physical systems, that communicate via a network using a protocol. Components can be computers, virtual machines, servers, etc. They work to achieve a common goal or to share resources and information. Examples: banking systems, multi-robot systems, multiplayer online games, the internet.",
    difficulty: "easy",
    category: "Definition",
  },
  {
    id: 1102,
    lecture: 11,
    question: "Why are distributed systems considered reliable?",
    answer:
      "Because of the redundancy of components in the system: a single component failure does not affect the operation of the whole system.",
    difficulty: "easy",
    category: "Why",
  },
  {
    id: 1103,
    lecture: 11,
    question: "What is the difference between a fault and a failure? Give the headlight example.",
    answer:
      "A fault is an unpermitted deviation of at least one characteristic property of the system, and is independent of whether the system is operational. A failure is a permanent interruption of a system's ability to perform a required function under specified operating conditions, and results from one or more faults. Car headlight: fault = corroded contacts to the switch; failure = no light.",
    difficulty: "medium",
    category: "Comparison",
  },
  {
    id: 1104,
    lecture: 11,
    question: "What can failures be classified as (the failure sub-types)?",
    answer:
      "A failure can be random, deterministic, systematic, or causal.",
    difficulty: "medium",
    category: "Short Answer",
  },
  {
    id: 1105,
    lecture: 11,
    question: "Define malfunction, error, disturbance, and symptom.",
    answer:
      "Malfunction: a temporary interruption of a system's function. Error: a deviation between a computed value and the specified correct value. Disturbance: an unknown input acting on a system. Symptom: a change of an observable quantity from normal behaviour.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 1106,
    lecture: 11,
    question: "Distinguish fault detection, isolation, identification, and diagnosis.",
    answer:
      "Detection: determines that faults are present and the time of detection. Isolation: determines the kind, location, and time of a fault (after detection). Identification: determines the size and time-variant behaviour of a fault (after isolation). Diagnosis: determines kind, size, location, and time (after detection and identification). Related: Monitoring (continuous real-time condition recording) and Supervision (monitoring plus corrective action to maintain operation).",
    difficulty: "hard",
    category: "Comparison",
  },
  {
    id: 1107,
    lecture: 11,
    question: "What does a fault detection and diagnosis (FDD) mechanism require to succeed?",
    answer:
      "FDD detects, isolates, identifies, and diagnoses faults. Successful FDD requires a physical/technical understanding of the system, physical and experimental modelling of its components, and experimental and engineering skill to validate those models.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1108,
    lecture: 11,
    question: "Why is FDD challenging, and what knowledge fields can it require?",
    answer:
      "It matters because faults cause huge financial losses, undesirable downtimes, and dependence on experts to fix and repair; diagnosis is needed to aid end users and developers. It is challenging because it can require knowledge across many fields: linear/non-linear system theory, system identification, neural networks, signal theory, dynamical systems, probability/statistics/stochastics, graph theory, real-time algorithms, error propagation, and causal reasoning.",
    difficulty: "medium",
    category: "Why",
  },
  {
    id: 1109,
    lecture: 11,
    question: "Classify faults by their time behaviour.",
    answer:
      "Abrupt faults (step-wise), Incipient faults (drift-wise / gradual), and Intermittent faults.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1110,
    lecture: 11,
    question: "Classify faults by duration.",
    answer:
      "Permanent faults (e.g. short circuit or meltdown), Transient faults (temporary malfunction of a component), and Intermittent faults (repeated occurrence of a transient fault).",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1111,
    lecture: 11,
    question: "Classify faults by their mathematical model.",
    answer:
      "Additive faults (an offset, e.g. a sensor offset) and Multiplicative faults (a change in a parameter, e.g. a change in gain).",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1112,
    lecture: 11,
    question: "Why does 'intermittent' appear in two different fault classification schemes?",
    answer:
      "It is both a time-behaviour pattern (a fault that appears and disappears over time) and a duration category (a repeatedly recurring transient fault). It is one phenomenon viewed through two different lenses, so the slides list it under both schemes.",
    difficulty: "hard",
    category: "Why",
  },
  {
    id: 1113,
    lecture: 11,
    question: "Compare additive and multiplicative faults — what does the parameter/gain change mean?",
    answer:
      "Additive: a constant offset is added to the signal regardless of its value (e.g. sensor bias). Multiplicative: a system parameter changes and scales the signal — a change in gain — so the fault's effect grows with the magnitude of the signal rather than being a fixed offset.",
    difficulty: "hard",
    category: "Comparison",
  },
  {
    id: 1114,
    lecture: 11,
    question: "What are the different branches of diagnosis (the two disciplinary roots)?",
    answer:
      "Diagnosis approaches stem from two broad branches: one rooted in control theory and statistical decision making, and one rooted in computer science and artificial intelligence. FDD draws on both.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1115,
    lecture: 11,
    question: "Distinguish hardware redundancy from analytical redundancy.",
    answer:
      "Hardware redundancy uses extra physical components that provide the same measurement or action (e.g. speed via speedometer, GPS, camera, odometry; position via GPS and odometry). Analytical redundancy uses a model relating different measurements to provide the redundant estimate, without additional hardware. Redundancy is at the heart of FDD.",
    difficulty: "medium",
    category: "Comparison",
  },
  {
    id: 1116,
    lecture: 11,
    question: "Why is diagnosis harder in a distributed system despite its redundancy?",
    answer:
      "A distributed system has many redundant components, making it fault-tolerant, but the diagnosis task becomes much more challenging: all previous (standalone) faults must be considered, plus global/local planning faults, communication faults, data-collection faults, and more.",
    difficulty: "medium",
    category: "Why",
  },
  {
    id: 1117,
    lecture: 11,
    question: "Why is a multi-robot system (MRS) a special case of a distributed system? Give example domains.",
    answer:
      "An MRS is a set of robots forming a distributed system that coordinate over a network. Example application domains: smart warehouses, search and rescue, logistic operations, and nuclear waste disposal.",
    difficulty: "easy",
    category: "Definition",
  },
  {
    id: 1118,
    lecture: 11,
    question: "What are the key challenges of diagnosis in an MRS versus traditional distributed systems?",
    answer:
      "The dynamic nature of the physical environment the robots operate in, uncertainty in sensing and environment modelling, the limited computational power of each robot, and limited computation time because of time-critical tasks.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1119,
    lecture: 11,
    question: "What is an FDD mechanism expected to do in an MRS?",
    answer:
      "Identify knowledge inconsistencies and map them to individual faulty robots; identify faults in global decision making that may cause global planning faults; monitor the execution of each robot's local plan following the global plan; and diagnose and identify faults in robots' components.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1120,
    lecture: 11,
    question: "What factors affect diagnosis in a single robot, and what does the Mars Rover illustrate?",
    answer:
      "Factors: degree of general use, degree of autonomy, and degree of interaction with the environment. The Mars Rover has a high degree of autonomy and communication to base can take up to 22 minutes, so its FDD must be computationally lightweight.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1121,
    lecture: 11,
    question: "Compare single-robot and MRS diagnosis paradigms.",
    answer:
      "A single robot handles local belief generation, planning, and coordination. An MRS adds a global layer — global belief generation, global planning, and task allocation — so a diagnosis mechanism must be able to handle both local and global faults.",
    difficulty: "medium",
    category: "Comparison",
  },
  {
    id: 1122,
    lecture: 11,
    question: "Compare planning-related and coordination-related faults in an MRS.",
    answer:
      "Planning-related: faulty plan steps can waste resources; planning should be treated as an independent system; the robot might still appear healthy. Coordination-related: accidents and damage from unreported faults/failures; can occur frequently from communication faults; arise when a local fault is not reported globally.",
    difficulty: "medium",
    category: "Comparison",
  },
  {
    id: 1123,
    lecture: 11,
    question: "What are the three attributes of a multi-robot system?",
    answer:
      "Degree of collaboration/cooperation, size of the multi-robot system, and whether it is a swarm.",
    difficulty: "easy",
    category: "Short Answer",
  },
  {
    id: 1124,
    lecture: 11,
    question: "Distinguish collaboration from cooperation in an MRS.",
    answer:
      "Collaboration: robots collaborate to achieve a common goal, acting as a team; performance depends heavily on the global plan; individual robots are aware of others; 'social fault diagnosis' is enabled. Cooperation: robots cooperate to achieve selfish or altruistic common goals; depends on achieving cooperation when needed; robots are not necessarily aware of others; there is heavy reliance on coordination between robots.",
    difficulty: "hard",
    category: "Comparison",
  },
  {
    id: 1125,
    lecture: 11,
    question: "How does the size of an MRS affect FDD?",
    answer:
      "The larger the number of robots, the more difficult fault isolation becomes; there is an increase in data, raising questions of which data is relevant for diagnosis and whether it is consistent; and more components must be monitored and considered.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1126,
    lecture: 11,
    question: "Define a swarm and list its properties.",
    answer:
      "A swarm is a special case of MRS with: no centralized control, low intelligence of individual robots, local interconnection among robots, swarm intelligence emerging from basic behaviour, and robots that only communicate with their neighbours.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 1127,
    lecture: 11,
    question: "What two types of faults must be considered in a swarm?",
    answer:
      "Topological faults (e.g. wrong information on location) and Component faults (e.g. a motor not working).",
    difficulty: "easy",
    category: "Short Answer",
  },
  {
    id: 1128,
    lecture: 11,
    question: "What are the advantages of diagnosis in an MRS?",
    answer:
      "'Social diagnosis' is enabled, diagnosis can become decentralized and scalable, and different approaches of diagnosis can be applied on different robots.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 1129,
    lecture: 11,
    question: "Summarise the plan-fault diagnosis approaches (Roos & Witteveen, Micalizio, Stancliff).",
    answer:
      "Roos & Witteveen: a model-based approach treating a plan as an independent system; execution is partially observable, observations are compared with modelled predicted states, and a diagnosis is the set of abnormal plan steps restoring compatibility. Micalizio: a distributed control loop for autonomous plan repair — each robot executes, monitors, diagnoses, and repairs its local plan and reports the repair globally, with low diagnosis cost. Stancliff et al.: consider reliability a priori — account for robot failures in advance during task allocation; more efficient than recomputing a new plan after a fault occurs.",
    difficulty: "hard",
    category: "Theory",
  },
  {
    id: 1130,
    lecture: 11,
    question: "Summarise the coordination-fault diagnosis approaches (Roos/Teije/Witteveen, Parker & Kannan).",
    answer:
      "Roos, Teije & Witteveen: a protocol for multi-agent diagnosis with spatially distributed knowledge — each agent diagnoses a different subsystem, assuming no inconsistency between agents' knowledge. Parker & Kannan: adaptive causal models — start from a preliminary causal model and update it with a case-based approach, relating high-level behaviours, probable faults, and their diagnosis.",
    difficulty: "hard",
    category: "Theory",
  },
  {
    id: 1131,
    lecture: 11,
    question: "Summarise the swarm diagnosis approaches (Qinn, Christensen, Lau).",
    answer:
      "Qinn et al.: a survey classifying faults into topology faults and component faults. Christensen et al.: a decentralized firefly-inspired approach where each robot synchronises its flashing light with neighbours — faulty robots fall out of sync and are easily recognised. Lau et al.: each robot compares its behaviour to its neighbours (social diagnosis), tested with statistical techniques such as a z-test and a density-based algorithm.",
    difficulty: "hard",
    category: "Theory",
  },
  {
    id: 1132,
    lecture: 11,
    question:
      "Using the single-tank example, give a component and its fault, malfunction, and failure.",
    answer:
      "Single-tank system components: tank with output pipe, level sensor, controller with control algorithm, pump, input pipe. Example (level sensor): fault = incorrect reading; malfunction = occasional stuck readings; failure = broken sensor with a permanently stuck value. (Other rows: tank — leakage / occasionally blocked pipe / broken pipe wall; pump — undesired sudden flow change / occasional flow changes / internal breakdown.)",
    difficulty: "hard",
    category: "Scenario-based",
  },
];
