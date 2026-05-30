export const portfolioData = {
  profile: {
    name: "Alex Morgan",
    title: "Principal Software Architect",
    subtitle: "Engineering high-throughput distributed systems & interactive web infrastructure.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    location: "San Francisco, CA",
    availableForHire: true
  },
  
  metrics: [
    { value: "8+", label: "Years Experience" },
    { value: "40+", label: "Production Apps" },
    { value: "12M+", label: "Global Users" }
  ],

  skills: [
    { name: "React / Next.js", level: "95%" },
    { name: "Node.js / GraphQL", level: "90%" },
    { name: "Go / Microservices", level: "85%" },
    { name: "AWS / Kubernetes", level: "88%" }
  ],

  projects: [
    {
      id: "proj-1",
      title: "Chronos Mesh Engine",
      category: "Infrastructure",
      description: "A real-time telemetry pipeline capable of processing up to 250k matrix transactions per second with sub-millisecond edge latency tracking grids.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      tags: ["Go", "gRPC", "Redis", "Kafka"]
    },
    {
      id: "proj-2",
      title: "Aether UI Framework",
      category: "Frontend Architecture",
      description: "A zero-dependency, headless layout engine optimized for canvas virtualization and design token compilation matrices.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      tags: ["TypeScript", "WebComponents", "CSS Modules"]
    }
  ],

  // Terminal Settings & Script Mocking Engine Data
  terminal: {
    welcomeMessage: [
      "Welcome to AetherShell v2.4.0 (Type 'help' for a list of available system commands)",
      "Initializing connection to profile node matrix... Success.",
      ""
    ],
    commands: {
      help: "Available diagnostic protocols: [about] [projects] [skills] [clear]",
      about: "Alex Morgan | Principal Architect specializing in core performance loops, custom reactive states, and cloud native architectures.",
      skills: "System Capacities: \n - Frontend Core: React/Next.js, WebGL\n - Backend Engine: Go, Node.js, Distributed Mesh\n - DevOps Cluster: Docker, Kubernetes, AWS Systems",
      projects: "Primary Assets Loaded:\n - [1] Chronos Mesh Engine (High-throughput telemetry grid)\n - [2] Aether UI Framework (Headless viewport compiler)"
    }
  }
};