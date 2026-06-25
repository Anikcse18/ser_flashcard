import { Flashcard } from "@/types";

export const lecture1Cards: Flashcard[] = [
  {
    id: 101,
    lecture: 1,
    question:
      "What distinguishes robot software development from normal software development? Name and explain the four factors.",
    answer:
      "Four factors make robot software development special:\n\n1. Hardware — robots are physical platforms acting in the real world (unlike software-only apps). Bugs have physical consequences.\n\n2. Real-world unpredictability — the environment is non-deterministic, so software must account for uncertainty.\n\n3. Domain complexity — robotics combines navigation, manipulation, vision, etc., requiring collaboration of many domain experts.\n\n4. Network-based communication — a modern robot is a distributed system, complicating paradigms like object-oriented programming.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 102,
    lecture: 1,
    question:
      "What is the difference between software development and programming?",
    answer:
      "Programming is simply writing a program for a specific purpose.\n\nSoftware development is broader — it is the process of developing individual programs and combining them into a coherent set that works in unison to achieve a concrete goal. In large domains like robotics it is done by teams, so management is an essential element.",
    difficulty: "easy",
    category: "Comparison",
  },
  {
    id: 103,
    lecture: 1,
    question:
      "Why is reusable code important for robot software development?",
    answer:
      "Robot software is platform-specific by default, but robots often share physical similarities, so software can in principle be adapted across platforms. Benefits:\n\n• Reduces development cost — robotics spans many complex domains and is expensive to build from scratch.\n• Improves reliability — reusing tested components avoids re-introducing bugs, important given physical consequences.\n• Is feasible — platforms often differ only in parameters (wheel radius, sensor type), not in kind.\n\nReusability is achieved through reconfigurable components.",
    difficulty: "medium",
    category: "Why",
  },
  {
    id: 104,
    lecture: 1,
    question:
      "What are the three properties of a reconfigurable component? (Memory trick: Write → Launch → Run)",
    answer:
      "1. Generic — not tied to one robot. Written without baking in one platform's values. This is the foundation.\n\n2. Configurable to fit different hardware setups — set before launch via config files or launch parameters (design-time).\n\n3. Modifiable at runtime through parameters — adjusted while running without recompiling (e.g. ROS2 dynamic parameters).\n\nTimeline: Write it generic → Launch with config → Modify at runtime.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 105,
    lecture: 1,
    question:
      "Name the four essential steps in the software development cycle. What is the critical property of how they are performed?",
    answer:
      "1. Requirement elicitation\n2. Translating requirements into software components\n3. Component development\n4. Software testing\n\nCritical property: These are NOT performed once in sequential order. They inform each other and must be performed iteratively — testing may reveal gaps that loop back to requirements.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 106,
    lecture: 1,
    question: "Define requirement elicitation.",
    answer:
      "Requirement elicitation is the process of identifying the objectives and expectations of a software system before the software development process starts.\n\nKey points:\n• The needs of prospective users are of primary importance.\n• A robot that does not fulfil user needs is unlikely to be used.\n• Requirements can change over time — elicitation is not a one-time process.\n• In research projects, the users are often your advisors.",
    difficulty: "easy",
    category: "Definition",
  },
  {
    id: 107,
    lecture: 1,
    question:
      "What does 'translating requirements into software components' involve?",
    answer:
      "It is the process of conceptually designing components and their APIs so the objectives defined by the requirements can be satisfied.\n\nIncludes:\n• Designing a software architecture or a plan for integrating into an existing one.\n• Defining APIs of the components.\n• In collaborative development, producing a concrete set of development tasks.\n\nImportant note: there is no guarantee of a one-to-one mapping between requirements and software components.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 108,
    lecture: 1,
    question: "What are the three levels of software testing?",
    answer:
      "1. Component testing — testing individual components in isolation.\n2. Integration testing — verifying that multiple components work well together.\n3. System testing — testing the complete system as a whole.\n\nTesting should accompany the complete development process and is often supported by automated tools.\n\nDefinition: Software testing is the process of ensuring that developed components or the system comply to their actual requirements.",
    difficulty: "easy",
    category: "Short Answer",
  },
  {
    id: 109,
    lecture: 1,
    question:
      "Scenario: You are building an office delivery robot. Walk through how the four development steps apply to it.",
    answer:
      "1. Requirement elicitation: Ask staff what the robot must do — pick up at reception, deliver to a named desk, avoid people, return to charging dock.\n\n2. Translate to components: Design navigation (path to desk), perception (detect people), task manager (sequence the operations), docking component. Define APIs between them.\n\n3. Component development: Implement each ROS2 node following team coding guidelines.\n\n4. Software testing:\n   • Component: does the path planner return a valid path?\n   • Integration: do perception + navigation stop the robot when someone steps in front?\n   • System: does a complete delivery run work end-to-end?\n\nKey: if testing reveals the robot cannot handle glass doors, loop back to requirements.",
    difficulty: "hard",
    category: "Scenario-based",
  },
  {
    id: 110,
    lecture: 1,
    question:
      "Why is a modern robot considered a distributed system, and why does this matter for software development?",
    answer:
      "A robot's components run as separate processes, each with its own private memory, communicating only by message passing (e.g. ROS2 nodes over topics/services/actions via DDS). This satisfies the core definition of a distributed system — independent components coordinating by messages — even on a single onboard computer.\n\nThis matters because it complicates well-established paradigms like object-oriented programming (where you can call methods directly). Instead, you must deal with message passing, latency, partial failures, and concurrency. This is the conceptual reason middleware like ROS exists.",
    difficulty: "medium",
    category: "Why",
  },
];
