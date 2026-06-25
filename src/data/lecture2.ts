import { Flashcard } from "@/types";

export const lecture2: Flashcard[] = [
  {
    id: 201,
    lecture: 2,
    question: "Define a software architecture. Why is it programming-language-independent?",
    answer:
      "A software architecture is a system model that defines the components of a system and the manner in which they are organised. It is programming-language-independent because it captures the essence of what a system should do and the particular way it does it, without committing to any specific language.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 202,
    lecture: 2,
    question: "Name the three architecture abstraction levels and what each specifies.",
    answer:
      "(1) Operational architecture: specifies what a system should do, without describing how. (2) System architecture: defines the components of a system and their connections. (3) Technical architecture: describes how the system actually works at an implementation level, down to the algorithmic level.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 203,
    lecture: 2,
    question: "What are the four objectives of a system architecture?",
    answer:
      "Common system understanding (all developers unambiguously understand how the system works), Simplified modifiability (easier to modify or extend), Fault identification (helps identify potential errors and mitigations), and Simplified communication (an explicit diagram aids communication with stakeholders). Mnemonic: C-M-F-C.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 204,
    lecture: 2,
    question: "List the general properties a (robot) software architecture should have (ACNMPR).",
    answer:
      "Abstraction (general, hides implementation detail), incremental Change support (algorithmic changes without major architectural changes), Niche targetability (works well for the intended application), Modularity (specialised, uncoupled components), Portability (reusable for other similar applications), and Robustness (components handle faults and exceptions).",
    difficulty: "hard",
    category: "Short Answer",
  },
  {
    id: 205,
    lecture: 2,
    question:
      "Describe the four robot architecture types as an evolution — what gap does each one fix?",
    answer:
      "Sense-Plan-Act (deliberative, but cannot react quickly because action ignores current sensor data) → Behaviour-based / subsumption (reactive, but lacks deliberation/foresight) → 3T (combines deliberation and reactivity in three layers, but lacks interaction and reliability features) → Hybrid interactive / Cognitive (adds interaction functionalities and reliability; cognitive architectures additionally model biological aspects such as memory).",
    difficulty: "hard",
    category: "Theory",
  },
  {
    id: 206,
    lecture: 2,
    question: "Explain the Sense-Plan-Act paradigm and its main weakness.",
    answer:
      "Sense-Plan-Act models a robot as a continuous loop: perceive the environment (sense), interpret information to create plans (plan), and execute actions (act), decoupling the three and continuously running deliberative processes. Weakness: action execution is performed without taking current sensor information into account, which is problematic when quick reactions are needed.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 207,
    lecture: 2,
    question: "Explain behaviour-based / subsumption architectures.",
    answer:
      "Behaviour-based architectures organise a robot's operation into specialised behaviours that can be composed to perform complex operations, with the robot controlled reactively. The famous subsumption architecture lets behaviours inhibit other behaviours based on an arbitration mechanism.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 208,
    lecture: 2,
    question: "What are the three layers of a 3T architecture and what does each do?",
    answer:
      "Control (includes reactive behaviours, performs perceptual processing, and issues actuator commands), Executive (manages the execution of tasks), and Planning (performs task planning based on all available information). 3T combines elements of both sense-plan-act and behaviour-based architectures.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 209,
    lecture: 2,
    question: "What does the hybrid interactive architecture add over previous architecture types?",
    answer:
      "Previous types miss aspects regarding interaction functionalities and components that ensure the reliability of operation. A hybrid interactive architecture adds these — combining deliberative, reactive, and interactive elements — which are essential for a contemporary robot architecture.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 210,
    lecture: 2,
    question: "What is a cognitive architecture?",
    answer:
      "A cognitive architecture is a model inspired by, or directly modelling, aspects of natural intelligence — for example long- and short-term memory — unlike typical agent architectures unconcerned with biological plausibility. Different cognitive architectures emphasise different aspects of intelligence, such as affect or continual learning.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 211,
    lecture: 2,
    question: "Name the five components of the prototypical robot system architecture.",
    answer:
      "Perception (sensor data processing and information extraction), Navigation (path planning and trajectory execution), Cartographer (collects environment information / maintains a world model), Planning (generates high-level task plans and monitors execution), and Motor schema (reactive selection and execution of motor actions).",
    difficulty: "medium",
    category: "Short Answer",
  },
  {
    id: 212,
    lecture: 2,
    question: "How do you identify a robot architecture from a given diagram?",
    answer:
      "Look for structural cues: a single sense → plan → act loop indicates Sense-Plan-Act; behaviour boxes with inhibition/arbitration links indicate subsumption / behaviour-based; three hierarchically arranged layers (planning, executive, control) indicate 3T; added interaction and reliability components indicate a hybrid interactive architecture; biological/memory elements indicate a cognitive architecture.",
    difficulty: "hard",
    category: "Scenario-based",
  },
  {
    id: 213,
    lecture: 2,
    question: "Why is it important to follow architectural modelling standards?",
    answer:
      "Not all architectural models are equally useful. Standard notation unambiguously communicates the intent behind architectural decisions; non-standard notation can confuse rather than enlighten. Over years of developing complex systems, de-facto discipline-agnostic standards such as UML have been accepted.",
    difficulty: "easy",
    category: "Why",
  },
  {
    id: 214,
    lecture: 2,
    question: "What is UML, and what is it used for?",
    answer:
      "The Unified Modelling Language is a standard visual representation of object-oriented systems, though aspects of it can represent non-OO systems too. It includes several diagram types, each modelling a specific aspect of a system. Uses include idea brainstorming with stakeholders, system documentation, and automatic code generation in model-driven engineering.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 215,
    lecture: 2,
    question: "Name the five UML diagram types.",
    answer:
      "Use case diagram, Activity diagram, Sequence diagram, Class diagram, and State diagram.",
    difficulty: "easy",
    category: "Short Answer",
  },
  {
    id: 216,
    lecture: 2,
    question: "Describe the use case diagram — its elements and when it is used.",
    answer:
      "The simplest UML type; it illustrates the interaction of a system and its users at a high level of abstraction. Stickmen represent actors (people interacting with the system, or the system itself); ellipses represent processes through which interaction happens. Use case diagrams are useful during requirement elicitation.",
    difficulty: "easy",
    category: "Definition",
  },
  {
    id: 217,
    lecture: 2,
    question: "Describe the activity diagram and its element notation.",
    answer:
      "Its objective is to show the flow of activities in a process. A full circle is the start; a full circle inside a circle is the end; a rounded rectangle is an activity; a diamond is a decision node; arrows show flow direction. BPMN (Business Process Model and Notation) is a similar alternative representation.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 218,
    lecture: 2,
    question: "Describe the class diagram and what it represents.",
    answer:
      "A class diagram shows the relations between system components modelled as classes that interact with each other. It hides implementation details but includes details about how classes are related, and is used to represent a system to be developed with object-oriented programming.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 219,
    lecture: 2,
    question: "What relation types and cardinalities can a UML class diagram show?",
    answer:
      "Class diagrams express several relation types between classes — for example association, generalisation (inheritance), aggregation, and composition — and relationships can carry explicit cardinalities (e.g. 1, 0..1, 1..*, *) indicating how many instances participate on each end of a relation.",
    difficulty: "medium",
    category: "Short Answer",
  },
  {
    id: 220,
    lecture: 2,
    question: "Describe the sequence diagram — what it models.",
    answer:
      "A sequence diagram models concrete data flow in a system: it represents how messages are passed between components so that a certain operation can be completed. Typically it illustrates a complete interaction that is initiated by or involves a user.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 221,
    lecture: 2,
    question: "Describe the state diagram and why robotics favours it.",
    answer:
      "A state diagram models a system through its possible states and state transitions. Rounded rectangles represent states; arrow labels are the events that trigger transitions; circles have the same semantics as in activity diagrams. In robotics we care about the robot's current state and transitions, so behaviours are often represented with state-based paradigms such as state machines or behaviour trees.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 222,
    lecture: 2,
    question: "How do you convert a UML class diagram into Python code?",
    answer:
      "Each class becomes a Python class; attributes become instance fields (set in __init__); methods become class methods; an association becomes a reference stored as an attribute; a generalisation becomes inheritance (class Sub(Parent)); cardinalities of 'many' become collections such as a list of references.",
    difficulty: "hard",
    category: "Scenario-based",
  },
];
