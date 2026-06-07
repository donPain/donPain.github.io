export const content = {
  meta: {
    name: "Eduardo Donzeli Paino",
    shortName: "Eduardo Donzeli",
    role: "Senior Java Developer · Backend Engineer",
    email: "eduardo.donzeli@gmail.com",
    linkedin: "https://www.linkedin.com/in/eduardodonzelipaino/",
    github: "https://github.com/donPain",
    location: "Brazil",
    year: 2026,
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "SENIOR JAVA · BACKEND ENGINEER",
    headline:
      "Building backend systems powered by real-time data and event-driven architecture.",
    subtext:
      "Senior Java Developer focused on distributed systems, Kafka, Apache Flink, Spring Boot, microservices, Kubernetes, and cloud-native engineering.",
    primaryCta: { label: "View experience", href: "#experience" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
  },

  about: {
    heading: "About",
    standfirst:
      "Backend engineer focused on the systems that move data — and the business problems they solve.",
    paragraphs: [
      "I'm a Senior Java Developer building backend systems, distributed applications, and event-driven architectures. My day-to-day sits inside the Java ecosystem — Spring Boot, Spring WebFlux, Apache Kafka, Apache Flink, microservices, Kubernetes, and cloud platforms — designing services that are reactive, resilient, and prepared for high-demand environments.",
      "Across my career I've worked on real-time data processing, service integration, messaging, and distributed architecture. I gravitate toward problems that sit at the intersection of software engineering, data, and business outcome — where the architecture has to actually earn its complexity.",
      "A meaningful piece of my work is connected to technology applied to agribusiness: big data, precision agriculture, intelligent systems, and data-driven operations. I've also contributed to scientific research on robotic systems and Big Data applied to agricultural productivity, which reinforces a belief I keep returning to — well-designed technology can turn complex operations into efficient, connected, intelligent ones.",
      "My focus is to deliver software with technical quality, architectural clarity, and practical impact — systems that stay reliable and maintainable as the business evolves around them.",
    ],
  },

  expertise: {
    heading: "Expertise",
    eyebrow: "WHAT I DO",
    cards: [
      {
        id: "backend",
        icon: "Code",
        title: "Backend Engineering",
        body: "Backend applications built around performance, clean code, and long-term maintainability. APIs, distributed services, system integrations, and domain-driven solutions.",
        tags: ["Java", "Spring Boot", "Spring WebFlux", "REST", "DDD"],
        size: "hero",
        decoration: "code",
      },
      {
        id: "event-driven",
        icon: "Lightning",
        title: "Event-Driven Architecture",
        body: "Event-based systems with Kafka — decoupled, traceable, asynchronous, with the resilience you need when failure modes get interesting.",
        tags: ["Kafka", "CDC", "Async"],
        size: "small",
        decoration: null,
      },
      {
        id: "streaming",
        icon: "WaveSine",
        title: "Data Streaming",
        body: "Real-time data pipelines with Kafka and Apache Flink for continuous processing, transformation, and analysis at scale.",
        tags: ["Flink", "Kafka", "Streaming"],
        size: "small",
        decoration: null,
      },
      {
        id: "microservices",
        icon: "GraphBold",
        title: "Microservices",
        body: "Service architectures with observability, fault tolerance, and independent deployment baked in from the start — not retrofitted later.",
        tags: ["REST", "gRPC", "Observability"],
        size: "small",
        decoration: null,
      },
      {
        id: "cloud",
        icon: "CloudArrowUp",
        title: "Kubernetes & Cloud",
        body: "Containerized applications running in Kubernetes across AWS and GCP — pragmatic cloud-native, not buzzword-native.",
        tags: ["Kubernetes", "AWS", "GCP", "Containers"],
        size: "small",
        decoration: null,
      },
      {
        id: "agtech",
        icon: "Plant",
        title: "AgTech & Big Data",
        body: "Technology applied to agribusiness — precision agriculture, intelligent systems, and Big Data turning field operations into measurable productivity.",
        tags: ["Big Data", "Precision Ag", "Robotics"],
        size: "tall",
        decoration: "field",
      },
    ],
  },

  stack: {
    heading: "Stack",
    eyebrow: null,
    groups: [
      {
        label: "BACKEND",
        items: ["Java", "Spring Boot", "Spring WebFlux", "REST APIs"],
      },
      {
        label: "STREAMING",
        items: ["Apache Kafka", "Apache Flink", "Event Sourcing"],
      },
      {
        label: "ARCHITECTURE",
        items: ["Microservices", "Event-Driven", "Reactive", "DDD"],
      },
      {
        label: "INFRASTRUCTURE",
        items: ["Kubernetes", "Docker", "Containerized Workloads"],
      },
      {
        label: "CLOUD",
        items: ["AWS", "GCP"],
      },
      {
        label: "DATA",
        items: ["Big Data", "Real-Time Processing", "Streaming Pipelines"],
      },
    ],
  },

  experience: {
    heading: "Experience",
    eyebrow: "WHERE I WORK",
    roles: [
      {
        company: "Solinftec",
        companyNote: "AgTech innovation",
        title: "Senior Java Developer · Backend Engineer",
        period: "PRESENT",
        location: "Brazil",
        paragraphs: [
          "Senior Java Developer at Solinftec, a technology company focused on innovation for agribusiness. My work centers on backend solutions, distributed systems, data processing, automation, and integration across operational environments that don't forgive flaky software.",
          "The day-to-day combines software engineering, system architecture, cloud-native technologies, and data-driven solutions — building applications that have to stay robust and scalable in production conditions far from the demo.",
        ],
        tech: [
          "Java",
          "Spring Boot",
          "Kafka",
          "Flink",
          "Microservices",
          "Kubernetes",
          "AWS",
          "GCP",
        ],
      },
    ],
  },

  research: {
    heading: "Research",
    eyebrow: null,
    body: "Beyond engineering work, I contribute to technical and scientific production. With Sandro Bearare, I co-authored research on the evolution of robotic systems and Big Data applied to precision agriculture — exploring how emerging technologies translate into measurable productivity, efficiency, and innovation in the agricultural sector.",
    publication: {
      title: "Robotic Systems & Big Data in Precision Agriculture",
      coAuthor: "with Sandro Bearare",
      topics: ["Robotics", "Big Data", "Precision Agriculture", "AgTech"],
    },
  },

  community: {
    heading: "Community",
    eyebrow: null,
    body: "Active on LinkedIn sharing technical content and notes from the field on backend engineering and data streaming. Participating in technical events around real-time architectures, Apache Flink, TableFlow, and Iceberg.",
    topics: [
      "Apache Flink",
      "TableFlow",
      "Apache Iceberg",
      "Real-Time Architectures",
      "Modern Data Platforms",
    ],
  },

  contact: {
    heading: "Let's build systems that move data, not just store it.",
    sub: "Open to conversations about backend engineering, distributed systems, event-driven architecture, real-time data, and cloud-native applications.",
    primaryCta: { label: "Get in touch", href: "mailto:eduardo.donzeli@gmail.com" },
    secondary: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/eduardodonzelipaino/" },
      { label: "GitHub", href: "https://github.com/donPain" },
      { label: "Email", href: "mailto:eduardo.donzeli@gmail.com" },
    ],
  },
} as const;

export type Content = typeof content;
