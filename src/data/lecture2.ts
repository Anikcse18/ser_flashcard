import { Flashcard } from "@/types";

export const lecture2Cards: Flashcard[] = [
  {
    id: 201,
    lecture: 2,
    question: "Define a software architecture.",
    answer:
      "A software architecture is a system model that defines the components of a system and the manner in which they are organised.\n\nMore broadly: An architecture is a description of a system — its design and operation — at a given level of abstraction. It is programming-language independent and captures the essence of what a system should do and in which particular way.",
    difficulty: "easy",
    category: "Definition",
  },
  {
    id: 202,
    lecture: 2,
    question:
      "Describe the three architecture abstraction levels with a robotics example for each.",
    answer:
      "1. Operational architecture — specifies WHAT the system does, not HOW.\n   Example: 'The robot system has perception, planning, and control.'\n\n2. System architecture — defines components and their connections.\n   Example: 'SLAM builds a map → planner generates a path → controller follows it.'\n\n3. Technical architecture — describes HOW at implementation/algorithmic level.\n   Example: 'LiDAR node publishes /scan as sensor_msgs/LaserScan; SLAM node subscribes, updates occupancy grid, publishes /map.'\n\nMoves from most abstract → most concrete.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 203,
    lecture: 2,
    question:
      "What are the four objectives of a system architecture? (Mnemonic: C-M-F-C → 'Clear Minds Find Cracks')",
    answer:
      "C — Common system understanding: a clear representation enables all developers to understand how the system works unambiguously.\n\nM — Simplified Modifiability: knowing the structure makes it easier to modify or extend the system.\n\nF — Fault identification: knowledge of the architecture helps identify potential errors and means of mitigating them.\n\nC — Simplified Communication: an explicit diagram serves as a communication tool with stakeholders.",
    difficulty: "medium",
    category: "Short Answer",
  },
  {
    id: 204,
    lecture: 2,
    question:
      "Name and explain the six general properties of a robot software architecture. (Mnemonic: ACNMPR → 'A Cat Never Makes Poor Robots')",
    answer:
      "A — Abstraction: architecture should be general and hide unnecessary implementation details.\n\nC — Change anticipation: incremental algorithmic changes supported without major architectural changes.\n\nN — Niche targetability: architecture works well for its intended application.\n\nM — Modularity: components should be specialised and as uncoupled (independent) as possible.\n\nP — Portability: architecture should be reusable for other similar applications.\n\nR — Robustness: components should be able to handle faults and exceptions.",
    difficulty: "hard",
    category: "Theory",
  },
  {
    id: 205,
    lecture: 2,
    question:
      "Explain the Sense-Plan-Act paradigm and its key weakness.",
    answer:
      "Sense-Plan-Act is a deliberative paradigm modelling the robot as a continuous loop:\n• Sense — perceive the environment.\n• Plan — interpret information to create action plans.\n• Act — execute the plan.\n\nIt decouples these three processes and the robot continuously performs deliberative processes ('takes time to think').\n\nKey weakness: action execution is performed without re-checking current sensor information. If something changes in the environment during execution, the robot cannot react quickly — problematic when fast reactions are needed.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 206,
    lecture: 2,
    question:
      "What are behaviour-based architectures? Describe the subsumption architecture in detail.",
    answer:
      "Behaviour-based architectures are reactive — the robot's operation is controlled by composing specialised sense-act behaviours rather than deliberate planning.\n\nSubsumption architecture (Brooks):\n• Behaviours are stacked in priority layers (e.g. Layer 1: wander → Layer 2: avoid obstacles → Layer 3: go to goal).\n• Higher-priority behaviours can inhibit (subsume) lower ones via an arbitration mechanism.\n• All behaviours run in parallel; suppression nodes decide which wins.\n• Result: fast, adaptive, reactive behaviour.\n\nAdvantage: quick reactions. Weakness: no deliberation → struggles with tasks needing foresight.",
    difficulty: "hard",
    category: "Theory",
  },
  {
    id: 207,
    lecture: 2,
    question:
      "What is the main problem with behaviour-based architectures, and which architecture was created to solve it?",
    answer:
      "Problem: behaviour-based architectures lack a deliberation mechanism. Being purely reactive, they respond only to current sensor input and struggle with tasks requiring foresight or multi-step planning.\n\nSolution: the 3T (Three-Tier) architecture, which combines sense-plan-act's deliberation with behaviour-based reactivity.\n\nThe pattern: SPA is too slow to react → Behaviour-based can't plan → 3T fixes both.",
    difficulty: "medium",
    category: "Why",
  },
  {
    id: 208,
    lecture: 2,
    question:
      "Explain the 3T (Three-Tier) architecture and its three layers.",
    answer:
      "3T hierarchically decomposes robot operation into three layers:\n\n1. Planning (top) — performs task planning based on all available information. Answers: 'What should the robot do?' (e.g. 'Go to Room B').\n\n2. Executive (middle) — manages execution of tasks. Answers: 'How to sequence the steps?' (e.g. 'Move forward → turn left → stop').\n\n3. Control (bottom) — reactive behaviours, perceptual processing, actuator commands. Answers: 'What motors do right now?' (e.g. sensors react, motors move).\n\nHigher layers instruct lower layers. Combines foresight (planning) with speed (control).",
    difficulty: "hard",
    category: "Theory",
  },
  {
    id: 209,
    lecture: 2,
    question:
      "Name the five UML diagram types and their primary purpose. Which is used during requirement elicitation?",
    answer:
      "1. Use case diagram — system-user interaction at high abstraction. Useful during requirement elicitation. (stickmen = actors, ellipses = processes)\n\n2. Activity diagram — flow of activities in a process. (circle = start, circle-in-circle = end, rounded rect = activity, diamond = decision)\n\n3. Sequence diagram — messages passed between components for an operation. (vertical lifelines, horizontal arrows = messages)\n\n4. Class diagram — relations between classes; shows structure without implementation detail. Includes relation types and cardinalities.\n\n5. State diagram — possible states and transitions. Used heavily in robotics. (rounded rect = state, arrow labels = triggering events)\n\nUse case is used during requirement elicitation.",
    difficulty: "medium",
    category: "Short Answer",
  },
  {
    id: 210,
    lecture: 2,
    question:
      "Scenario: A professor shows you a diagram saying 'perception, planning, control'. Which abstraction level is this? What about one showing 'SLAM node subscribes to /scan and publishes /map'?",
    answer:
      "First diagram: Operational architecture — it only names high-level functions (WHAT) without describing components, connections, or implementation.\n\nSecond diagram: Technical architecture — it specifies exact ROS2 nodes, topic names (/scan, /map), and algorithms (SLAM), which is the implementation/algorithmic level (HOW exactly it works).\n\nTest to apply:\n• Only capabilities named → Operational\n• Components + connections shown → System\n• Specific algorithms, topics, message types → Technical",
    difficulty: "hard",
    category: "Scenario-based",
  },
  {
    id: 211,
    lecture: 2,
    question:
      "What are the five components of a prototypical robot system architecture?",
    answer:
      "1. Perception — sensor data processing and information extraction.\n2. Navigation — path planning and trajectory execution.\n3. Cartographer — collects environment info and maintains a world model.\n4. Planning — generates high-level task plans and monitors their execution.\n5. Motor schema — reactive selection of motor actions and care of their execution.",
    difficulty: "medium",
    category: "Short Answer",
  },
  {
    id: 212,
    lecture: 2,
    question:
      "What is UML used for, and why is it preferred over non-standard notation?",
    answer:
      "UML (Unified Modelling Language) is a standard visual representation of object-oriented systems, though it can represent non-OO systems too.\n\nUsed for:\n• Idea brainstorming with stakeholders.\n• System documentation.\n• Automatic code generation (model-driven engineering).\n\nWhy preferred: an architecture design using non-standard notation can confuse rather than enlighten. UML provides de facto discipline-agnostic modelling standards evolved over many years of complex system development, ensuring unambiguous communication of architectural decisions.",
    difficulty: "medium",
    category: "Why",
  },
];
