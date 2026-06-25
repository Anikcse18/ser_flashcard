import { Flashcard } from "@/types";

export const lecture1Cards: Flashcard[] = [
  {
    id: 101,
    lecture: 1,
    question:
      "What distinguishes robot software development from normal software development? Name the four factors.",
    answer:
      "Robots are physical agents in the real world, giving four distinguishing factors: (1) Hardware — robots act in the physical world, unlike software-only applications; (2) Real-world unpredictability — except under special circumstances the world is unpredictable, so software must account for it; (3) Domain complexity — robotics combines many domains (navigation, manipulation, computer vision), requiring collaboration of domain experts; (4) Network-based communication — a modern robot is a distributed system, which complicates established paradigms like object-oriented programming.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 102,
    lecture: 1,
    question: "What is the difference between software development and programming?",
    answer:
      "Programming is simply the process of writing a program for a specific purpose. Software development is more — it develops individual programs and combines them into a coherent set that works in unison toward a concrete goal. In large domains like robotics it is done by teams rather than individuals, which makes management an essential element of the process.",
    difficulty: "easy",
    category: "Comparison",
  },
  {
    id: 103,
    lecture: 1,
    question:
      "What are the four essential steps in software development, and why are they iterative rather than sequential?",
    answer:
      "The four steps are: (1) Requirement elicitation, (2) Translating requirements into software components, (3) Component development, (4) Software testing. They are not performed once in a strict sequence — they inform each other and must be carried out in an iterative process.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 104,
    lecture: 1,
    question: "Define requirement elicitation. Why is it not a one-time process?",
    answer:
      "Requirement elicitation is the process of identifying the objectives and expectations of a software system before the development process starts. It is not one-time because requirements can change over time, especially in long-running projects, so elicitation should be ongoing. A robot that does not fulfil its users' needs is unlikely to be used.",
    difficulty: "medium",
    category: "Definition",
  },
  {
    id: 105,
    lecture: 1,
    question:
      "What does 'translating requirements into software components' involve, and is the mapping one-to-one?",
    answer:
      "It maps known requirements to the software components that need to be developed. This typically includes designing a software architecture (or a plan to integrate new components into an existing one) and defining the components' APIs, producing a concrete set of development tasks. There is no guarantee of a one-to-one mapping between requirements and components.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 106,
    lecture: 1,
    question: "Why must component development follow agreed design and project standards?",
    answer:
      "Components must be developed based on their agreed-upon design and by following the development and collaboration guidelines of the overall software project. Each project has its own rules; following them — even on small personal projects — ensures consistency and reusability.",
    difficulty: "easy",
    category: "Theory",
  },
  {
    id: 107,
    lecture: 1,
    question: "Name the three levels of software testing and what each verifies.",
    answer:
      "Component testing (verifies individual components), Integration testing (verifies that multiple components work well together), and System testing (verifies the complete system). Testing should accompany the whole development process and is often supported by automated tools.",
    difficulty: "easy",
    category: "Short Answer",
  },
  {
    id: 108,
    lecture: 1,
    question: "Which of the four distinguishing factors is most fundamental — argue your choice.",
    answer:
      "A defensible answer: Hardware / embodiment is the root cause. Acting in the physical world is precisely what introduces real-world unpredictability, forces the multi-domain complexity of perceiving and acting, and motivates the networked, distributed design of a modern robot. The other three factors are consequences of the robot being a physical agent.",
    difficulty: "hard",
    category: "Why",
  },
  {
    id: 109,
    lecture: 1,
    question: "Why is robot software development team-based, and why does that make management essential?",
    answer:
      "Robotics combines many domains, so in large domains software development is commonly done by teams rather than individuals. Coordinating that distributed effort means management becomes an essential element of the software development process.",
    difficulty: "easy",
    category: "Why",
  },
  {
    id: 110,
    lecture: 1,
    question: "When is robot software reusable across platforms, and when is it not?",
    answer:
      "Reuse is sometimes impossible due to major hardware differences (e.g. software for a flying robot has limited use on a wheeled robot). More often robots share many physical similarities, so it should in principle be possible to adapt software from one platform to another.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 111,
    lecture: 1,
    question: "How is reusability achieved through reconfigurable components?",
    answer:
      "Reusability is often achieved by creating reconfigurable components — components that can be reconfigured either at design time or at runtime so the same component can serve different robots or applications.",
    difficulty: "medium",
    category: "Theory",
  },
  {
    id: 112,
    lecture: 1,
    question: "What are the three properties of a reconfigurable component?",
    answer:
      "Generic, Configurable, and Runtime-modifiable.",
    difficulty: "medium",
    category: "Short Answer",
  },
  {
    id: 113,
    lecture: 1,
    question: "Define continuous integration and explain why it matters in robot software development.",
    answer:
      "Continuous integration is the practice of frequently merging code changes into a shared repository where they are automatically built and tested. It catches integration errors early and keeps the codebase continuously working — important in team-based robot development where many components must operate in unison. (Note: appears in the professor's Lecture 1 prep hints; verify exactly where CI is treated in the course slides.)",
    difficulty: "medium",
    category: "Definition",
  },
];
