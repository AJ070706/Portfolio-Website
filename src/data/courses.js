export const courses = [
  {
    "code": "EECS 498-016",
    "name": "Agentic Software Engineering",
    "projects": [
      {
        "kind": "Apply stage",
        "name": "AI Pair-Programmer",
        "description": "Developing a coding assistant from a written specification, with a configurable model connection, an original application architecture, and tests for normal operation and failures.",
        "technologies": [
          "Python",
          "LLM APIs",
          "Software Design",
          "Testing"
        ],
        "status": "In progress"
      },
      {
        "kind": "Analyze stage",
        "name": "Autonomous Coding Agent",
        "description": "Extending the pair-programmer with file and command tools, approval controls, and an execution loop. The deliverable includes an evaluation suite measuring task completion and documenting failure modes.",
        "technologies": [
          "Tool Use",
          "Approval Policies",
          "Agent Evaluation"
        ],
        "status": "In progress"
      },
      {
        "kind": "Create stage",
        "name": "Persistent AI Assistant",
        "description": "Evolving the agent into an assistant with a persistent knowledge base, reusable design skills, session and context management, and a web interface. The scope includes permission hardening and regression testing.",
        "technologies": [
          "Agent Memory",
          "Context Management",
          "Web Integration"
        ],
        "status": "In progress"
      }
    ],
    "term": "F26",
    "termLabel": "Fall 2026",
    "inProgress": true,
    "note": "Three stages of one evolving project. All are in progress; descriptions summarize the syllabus scope, not completed deliverables.",
    "syllabusUrl": "https://eecs498-aase.github.io/syllabus.html"
  },
  {
    "code": "EECS 482",
    "name": "Operating Systems",
    "projects": [
      {
        "kind": "Project 1",
        "name": "Concurrent Request Coordination",
        "description": "Built a multithreaded system that matches resource requests with available workers and coordinates each request through completion. Used mutexes and condition variables to protect shared state while allowing independent work to proceed concurrently.",
        "technologies": [
          "C++",
          "Threads",
          "Mutexes",
          "Condition Variables"
        ],
        "status": "Completed"
      }
    ],
    "term": "F26",
    "termLabel": "Fall 2026",
    "inProgress": true
  },
  {
    "code": "EECS 370",
    "name": "Computer Organization",
    "projects": [
      {
        "kind": "Project 1",
        "name": "Assembler & Instruction-Set Simulator",
        "description": "Built an assembler and processor simulator that translate assembly into machine code and execute it while tracking registers and memory. Wrote an assembly multiplication routine to work within a minimal instruction set.",
        "technologies": [
          "C",
          "LC-2K Assembly",
          "Instruction Sets"
        ],
        "status": "Completed"
      },
      {
        "kind": "Project 2",
        "name": "Object Files & Linker",
        "description": "Extended the assembler to produce object files and built a linker that combines separately assembled modules into an executable. Resolved symbols and relocated addresses so code and data could be shared across files.",
        "technologies": [
          "C",
          "Symbol Resolution",
          "Relocation",
          "Linking"
        ],
        "status": "Completed"
      },
      {
        "kind": "Project 3",
        "name": "Pipelined Processor Simulator",
        "description": "Built a cycle-accurate processor simulator that overlaps instruction execution across pipeline stages. Implemented forwarding, stalls, and branch handling to preserve correct execution when instructions depend on one another.",
        "technologies": [
          "C",
          "CPU Pipelines",
          "Data Hazards",
          "Simulation"
        ],
        "status": "Completed"
      },
      {
        "kind": "Project 4",
        "name": "Configurable Cache Simulator",
        "description": "Integrated a configurable cache with a processor simulator to model instruction and data accesses. Implemented write-back behavior and least-recently-used replacement, with traces showing data movement between processor, cache, and memory.",
        "technologies": [
          "C",
          "Memory Hierarchy",
          "Cache Design",
          "LRU"
        ],
        "status": "Completed"
      }
    ],
    "term": "W26",
    "termLabel": "Winter 2026",
    "inProgress": false
  },
  {
    "code": "EECS 442",
    "name": "Computer Vision",
    "projects": [
      {
        "kind": "Assignment 2",
        "name": "Image Filtering & Edge Detection",
        "description": "Implemented image convolution and filtering to extract edges and reduce noise. Compared gradient, Gaussian, steerable, and median filters through visualizations of their effects on images.",
        "technologies": [
          "Python",
          "NumPy",
          "Convolution",
          "Image Processing"
        ],
        "status": "Completed"
      },
      {
        "kind": "Assignment 3",
        "name": "Frequency Analysis & Image Blending",
        "description": "Analyzed images in the frequency domain and compared spatial and frequency-based filtering. Built Gaussian and Laplacian pyramids to reconstruct images and blend multiple images across scales.",
        "technologies": [
          "Python",
          "NumPy",
          "Fourier Analysis",
          "Image Pyramids"
        ],
        "status": "Completed"
      },
      {
        "kind": "Assignment 4",
        "name": "Image Recognition & Metric Learning",
        "description": "Trained and evaluated image recognition models using classification and contrastive learning. Compared learned representations through nearest-image retrieval and visualizations of how images cluster in feature space.",
        "technologies": [
          "Python",
          "PyTorch",
          "ResNet-18",
          "Metric Learning"
        ],
        "status": "Completed"
      },
      {
        "kind": "Assignment 5",
        "name": "Panorama Stitching",
        "description": "Built an image-stitching pipeline that matches visual features, estimates geometric transformations, and warps overlapping images into a panorama. Used robust estimation to reduce the effect of incorrect feature matches.",
        "technologies": [
          "Python",
          "SIFT",
          "Homography",
          "RANSAC"
        ],
        "status": "Completed"
      },
      {
        "kind": "Assignment 6",
        "name": "Diffusion-Based Image Generation",
        "description": "Implemented noise addition, iterative denoising, and guided sampling around a pretrained diffusion model. Compared reconstruction methods and generated images, including compositions that change interpretation when flipped.",
        "technologies": [
          "Python",
          "PyTorch",
          "Diffusion Models",
          "Classifier-Free Guidance"
        ],
        "status": "Completed"
      }
    ],
    "term": "W26",
    "termLabel": "Winter 2026",
    "inProgress": false
  },
  {
    "code": "EECS 281",
    "name": "Data Structures & Algorithms",
    "projects": [
      {
        "kind": "Project 1",
        "name": "Graph Search & Path Reconstruction",
        "description": "Built a configurable search tool that finds sequences of valid transformations between states. Used breadth-first and depth-first traversal to explore an implicit graph and reconstruct the resulting path.",
        "technologies": [
          "C++",
          "BFS / DFS",
          "Graphs",
          "Path Reconstruction"
        ],
        "status": "Completed"
      },
      {
        "kind": "Project 2",
        "name": "Priority-Based Event Processing",
        "description": "Built an order-matching simulation using priority queues to process competing requests by price and arrival order. Maintained running median statistics and aggregate transaction summaries as events were processed.",
        "technologies": [
          "C++",
          "Priority Queues",
          "Heaps",
          "Streaming Statistics"
        ],
        "status": "Completed"
      },
      {
        "kind": "Project 3",
        "name": "Indexed Log Search",
        "description": "Built an interactive log-management tool with timestamp, category, and keyword searches. Combined sorted records with hash-based indexes to retrieve matching entries and organize selected results into editable excerpts.",
        "technologies": [
          "C++",
          "Hash Tables",
          "Search Indexes",
          "Binary Search"
        ],
        "status": "Completed"
      },
      {
        "kind": "Project 4",
        "name": "Graph & Route Optimization",
        "description": "Implemented minimum spanning trees and both heuristic and exact solutions to route optimization. Used branch-and-bound with lower-bound estimates to prune the search for an optimal tour.",
        "technologies": [
          "C++",
          "Minimum Spanning Trees",
          "TSP",
          "Branch & Bound"
        ],
        "status": "Completed"
      }
    ],
    "term": "F25",
    "termLabel": "Fall 2025",
    "inProgress": false
  }
];
