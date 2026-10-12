// HOME ORDER
export const homeProjectOrder = ["seekerbot", "hydroponic-garden", "ro-boat", "eco-explorer"];

// PROJECTS ORDER
export const projectsPageOrder = [
  "seekerbot",
  "hydroponic-garden",
  "eco-explorer",
  "kyra",
  "ro-boat",
  "qhub-learning",
  "satellite-qaoa",
  "arazul",
  "ama-llulla",
];

/**

 */
export type Media = { src: string; alt: string; caption?: string };
export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  photos?: Media[];
  video?: Video;
};
export type Video =
  | { type: "youtube"; id: string; title: string }
  | { type: "mp4"; src: string; title: string; poster?: string };

export type Project = {
  slug: string;
  title: string;
  software?: boolean;
  year?: string;
  team?: string;
  context?: string;
  sections?: ArticleSection[];
  documentation?: string;
  url?: string;
  category?: string;
  description?: string;
  // Optional longer introduction for the detail page; description is used on cards.
  pageDescription?: string;
  tech?: string[];
  cover?: Media;
  gallery?: Media[];
  videos?: Video[];
};

const ecoPhoto = (name: string, caption: string): Media => ({
  src: `/images/projects/eco-explorer/${name}.jpg`,
  alt: caption,
  caption,
});

export const projects: Project[] = [
  //ARAZUL
  {
    slug: "arazul",
    software: true,
    title: "ARAZUL",
    year: "2026",
    context: "Big RedHacks 2026",
    category: "Web Development · Mapping · Route Optimization",
    tech: ["React", "TypeScript", "Vite", "UI/UX Design"],
    url: "https://arazul-bigredhacks.vercel.app/",
    description:
      "A navigation prototype that compares travel time with historical reported-incident exposure, starting with São Paulo.",
    cover: {
      src: "/images/projects/arazul/route-comparison.jpg",
      alt: "ARAZUL route comparison interface",
    },
    sections: [
      {
        title: "Choosing a route with local context",
        paragraphs: [
          "The fastest route is not always the one someone would choose with more local context. We built ARAZUL to compare routes by travel time and historical reported-incident exposure, especially for unfamiliar areas and travel at night.",
        ],
      },
      {
        title: "Travel mode, departure time and extra minutes",
        paragraphs: [
          "Users enter a starting point and destination, choose walking or driving, and select a departure time. They set how much extra travel time they are willing to accept, then explore the route options.",
        ],
      },
      {
        title: "Mapping reported incidents in São Paulo",
        paragraphs: [
          "For our São Paulo prototype, we processed more than 217,000 reported incidents from public police occurrence data, including SSP-SP, into geographic exposure information. This gives users another way to compare routes alongside travel time; historical reports cannot guarantee safety.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/arazul/route-comparison.jpg",
        alt: "Route options on the ARAZUL map",
        caption: "Comparing routes and travel times.",
      },
      {
        src: "/images/projects/arazul/route-explanation.jpg",
        alt: "ARAZUL route explanation panel",
        caption: "Context behind a route recommendation.",
      },
      {
        src: "/images/projects/arazul/incident-map.jpg",
        alt: "Incident exposure data on a map",
        caption: "Geographic context from reported incidents.",
      },
    ],
  },

  //QHUB LEARNING
  {
    slug: "qhub-learning",
    software: true,
    url: "https://www.qhubperu.com/aprendizaje",
    title: "QHub Learning Platform",
    year: "2025",
    context: "QuantumHub Perú Innovation Department",
    tech: ["React", "TypeScript", "Vite", "Interactive simulations"],
    sections: [
      {
        title: "Building QuantumHub’s flagship learning platform",
        paragraphs: [
          "I helped build QHub Learning with Ariana López and Dayana Gómez through QuantumHub Perú’s Department of Innovation. As the department’s flagship product, it offers students and self-taught learners an open, Spanish-language entry point into quantum computing.",
          "We wanted to combine a rigorous academic path with an accessible, dynamic experience: a place where learners can understand the mathematics, experiment with the concepts and see how they connect.",
        ],
      },
      {
        title: "Four modules, from matrices to quantum teleportation",
        paragraphs: [
          "The first stage includes an Introduction to Quantum Computing course with four progressive modules and more than 60 learning units. The path starts with vector and matrix operations, then introduces normalization, qubit states and their graphical representation on the Bloch sphere.",
          "Learners continue into quantum circuits, algorithms such as Grover’s search and protocols such as quantum teleportation. Formative quizzes accompany the lessons so learners can check their understanding along the way.",
        ],
      },
      {
        title: "Experimenting with Bloch spheres and quantum circuits",
        paragraphs: [
          "Interactive simulations make the concepts something learners can explore: rotating states on the Bloch sphere, experimenting in a quantum circuit lab and investigating the double-slit experiment. Gamified challenges encourage practice, while Schrödi guides the experience.",
        ],
      },
      {
        title: "A personal classroom, progress tracking and certification",
        paragraphs: [
          "Each registered learner has a personalized virtual classroom where they can study at their own pace and track their progress. After completing the program and passing its assessments, they can receive an official certificate issued by QuantumHub Perú.",
          "We are continuing to develop the platform as a rigorous, accessible starting point for students who want to explore quantum science and technology seriously.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/qhub-learning/quantum-gates-module.webp",
        alt: "QuantumHub learning platform, module four on quantum gates and circuits",
        caption: "Quantum gates and circuits module. Screenshot published by QuantumHub Perú.",
      },
    ],
    category: "Quantum Computing · Interactive Education",
    description:
      "An open Spanish-language quantum computing platform with four progressive modules, 60+ learning units, interactive simulations and a personalized learning experience.",
    cover: {
      src: "/images/projects/qhub-learning/quantum-gates-module.webp",
      alt: "QHub Learning module on quantum gates and circuits",
    },
  },

  //SEEKERBOT
  {
    slug: "seekerbot",
    title: "SeekerBot",
    year: "2023",
    documentation: "/documents/seekerbot.pdf",
    pageDescription:
      "SeekerBot is a space exploration rover designed to navigate uneven terrain. It is wirelessly controlled via Wi-Fi, features a Rocker-Bogie suspension system, and uses a robotic arm to collect objects. It also transmits real-time images and collects environmental data, such as air quality, which is displayed through an Android mobile app.",
    category: "Robotics · 3D Printing · Sensors · App dev ",
    context: "Personal project + Apollo Space Contest",
    description:
      "A six-wheeled space exploration rover featuring a Rocker-Bogie suspension system, robotic arm, wireless control, and environmental monitoring.",
    tech: [
      "Arduino",
      "ESP32-CAM",
      "3D Printing",
      "MIT App Inventor",
      "Soldering",
      "C++ for Arduino",
    ],
    cover: {
      src: "/images/projects/seekerbot/cover.png",
      alt: "SeekerBot rover with its six wheels and robotic arm on rocky ground at sunset",
    },
  },

  //HYDROPONIC GARDEN
  {
    slug: "hydroponic-garden",
    year: "2024",
    context: "Science and Technology School Contest",
    sections: [
      {
        title: "Growing food without soil",
        paragraphs: [
          "We built an automated hydroponic garden to explore growing food with limited water and soil. Agricultural challenges in Puno inspired our project, and we assembled and tested the prototype at school.",
          "The garden uses the nutrient film technique (NFT): a pump recirculates a nutrient solution through three PVC channels supported by a wooden frame. Twelve lettuce seedlings sit in perforated cups so their roots can reach the solution.",
        ],
      },
      {
        title: "Connecting the water pump to an Arduino and mobile app",
        paragraphs: [
          "We connected an Arduino Uno to the monitoring sensors and a relay-controlled water pump, using a DHT11, an MQ-135, Bluetooth and an LCD to track conditions and communicate readings.",
          "We programmed the controller in the Arduino IDE and built a companion Android application with MIT App Inventor. The application displays sensor readings and lets users adjust the pumping schedule.",
        ],
      },
      {
        title: "Assembling the PVC channels and growing twelve lettuce plants",
        paragraphs: [
          "We assembled the wooden support, drilled the plant openings, connected the PVC channels and fitted an 8.5-liter reservoir. After installing the electronics, we calibrated the sensors and tested Bluetooth communication.",
          "We followed the plants for approximately 30 days, running two 30-minute pumping sessions daily and replacing the water weekly. We recorded an average growth of 5 cm by day eight and estimated 30 liters of water for twelve plants during the first week.",
          "Watching the seedlings grow helped us connect the electronics and pumping schedule to the needs of a living system.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/hydroponic-garden/structure-build-presentation.jpg",
        alt: "Hydroponic garden structure construction",
        caption: "Building the frame and PVC channels",
      },
      {
        src: "/images/projects/hydroponic-garden/electronics-assembly-presentation.jpg",
        alt: "Installing the hydroponic garden electronics",
        caption: "Wiring and assembling the controller.",
      },
      {
        src: "/images/projects/hydroponic-garden/monitoring-app-presentation.jpg",
        alt: "Hydroponic monitoring application in MIT App Inventor",
        caption: "The monitoring app and its interface.",
      },
      {
        src: "/images/projects/hydroponic-garden/monitoring.jpg",
        alt: "Garden with its monitoring application",
        caption: "The garden, controller and mobile app.",
      },
      {
        src: "/images/projects/hydroponic-garden/circuit.png",
        alt: "Hydroponic monitoring circuit",
        caption: "Arduino-based monitoring electronics.",
      },
      {
        src: "/images/projects/hydroponic-garden/app-blocks.png",
        alt: "MIT App Inventor blocks",
        caption: "Application programming in MIT App Inventor.",
      },
      {
        src: "/images/projects/hydroponic-garden/drilling.jpg",
        alt: "Preparing the PVC planting holes",
        caption: "Drilling the channels during construction.",
      },
      {
        src: "/images/projects/hydroponic-garden/assembly.jpg",
        alt: "Assembling the hydroponic frame",
        caption: "Building the structure.",
      },
      {
        src: "/images/projects/hydroponic-garden/planting.jpg",
        alt: "Preparing lettuce seedlings",
        caption: "Preparing the seedlings.",
      },
      {
        src: "/images/projects/hydroponic-garden/growth.jpg",
        alt: "Eight-day growth sequence",
        caption: "Tracking lettuce growth over the first eight days.",
      },
    ],
    title: "Automated Hydroponic Garden",
    category: "Electronics · Sensors · Automation",
    description:
      "An automated hydroponic garden combining Arduino, sensors, water circulation, and a mobile monitoring system to explore more sustainable agriculture.",
    tech: ["Arduino", "Sensors", "Bluetooth", "MIT App Inventor"],
    cover: {
      src: "/images/projects/hydroponic-garden/cover.png",
      alt: "Three-level blue pipe hydroponic garden with lettuce, an Arduino box and the monitoring app on a phone",
    },
  },

  //RO-BOAT
  {
    slug: "ro-boat",
    category: "Robotics · Recycling · Environmental Engineering",
    year: "2024",
    context: "Next Generation Foresight Practitioner - Young Voices (NGFP-YV)",
    description:
      "A recycled-material robotic boat with a ramp for collecting floating plastic waste from the water surface.",
    tech: ["PVC Celtex", "Recycled materials", "Servomotors"],
    cover: {
      src: "/images/projects/ro-boat/cover.png",
      alt: "RO-BOAT robotic boat",
    },
    sections: [
      {
        title: "A boat for collecting floating waste",
        paragraphs: [
          "We built RO-BOAT to explore collecting floating plastic waste with a robotic boat. Its ramp guides waste from the water surface into the prototype.",
        ],
      },
      {
        title: "RO-BOAT's recycled frame and collection ramp",
        paragraphs: [
          "We combined PVC Celtex sheets, soda cans and recycled wooden sticks for the structure, then added servomotors, batteries and switches.",
          "The challenge was to turn reused materials into a floating structure with a simple collection mechanism.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/ro-boat/boat.jpg",
        alt: "RO-BOAT prototype on the water",
        caption: "Our boat prototype on the water.",
      },
    ],
    title: "RO-BOAT",
  },

  //ECO-EXPLORER
  {
    slug: "eco-explorer",
    year: "2024",
    context: 'National "Innovative School Contest – Space & Exploration"',
    url: "https://sites.google.com/colegionsr.edu.pe/ecoexplorernsr/inicio",
    videos: [
      {
        type: "mp4",
        src: "/videos/eco-explorer/rover-demonstration.mp4",
        poster: "/videos/eco-explorer/rover-demonstration.jpg",
        title: "Eco-Explorer: rover demonstration",
      },
    ],
    category: "Robotics · Recycled Materials · Mechanical Design",
    description:
      "A recycled-material exploration rover with a robotic arm and Rocker-Bogie suspension, built through a school recycling campaign.",
    tech: ["Arduino Uno", "Arduino Nano", "ESP32-CAM", "Recycled materials", "MIT App Inventor"],
    cover: {
      src: "/images/projects/eco-explorer/rover.jpg",
      alt: "Eco-Explorer recycled-material rover",
    },
    sections: [
      {
        title: "Turning a school recycling campaign into a rover",
        paragraphs: [
          "We built Eco-Explorer using bottle caps, bicycle-tire rubber, PVC pipes, a plastic cleaning-product container, cardboard, aluminum and Lego pieces. I worked on circuit design and programming, connecting the reused structure to the rover’s electronics.",
          "Our school recycling campaign brought together students from primary through secondary school to collect materials and explore how discarded objects could become parts of a robot.",
        ],
        photos: [
          ecoPhoto("recycled-materials", "Materials reused to build the rover"),
          ecoPhoto("school-recycling-campaign", "Our school recycling campaign"),
          ecoPhoto("collected-bottle-caps", "Bottle caps collected for the build"),
        ],
      },
      {
        title: "Six bottle-cap wheels with recycled rubber tread",
        paragraphs: [
          "We joined bottle caps using a soldering iron, grouped them with hot glue and arranged them into circular wheel structures. We cut strips from a recycled bicycle tire to cover the wheels with rubber, then filled the remaining gaps with more plastic caps.",
        ],
        photos: [
          ecoPhoto("wheel-caps-and-tire", "Bottle caps and bicycle-tire strips"),
          ecoPhoto("cutting-bicycle-tire", "Cutting strips from a recycled bicycle tire"),
          ecoPhoto("wheel-cap-layout", "Laying out the circular bottle-cap structure"),
          ecoPhoto("rubber-wheel-tread", "Fitting recycled rubber around the cap structure"),
          ecoPhoto("wheel-building-team", "Making the wheel structures together"),
          ecoPhoto("wheel-assembly-team", "Assembling the bottle-cap wheels"),
        ],
      },
      {
        title: "PVC suspension links and yogurt-lid joints",
        paragraphs: [
          "We made circular joints from yogurt lids and used a soldering iron to create holes for the wiring. Cut PVC tubes joined these nodes to form the rover’s suspension links. Each yellow geared motor also received its own electrical-conduit support.",
        ],
        photos: [ecoPhoto("pvc-frame-assembly", "Assembling the PVC structure and cap joints")],
      },
      {
        title: "A bottle-cap arm with a 3D-printed gripper",
        paragraphs: [
          "Chains of bottle caps formed the arm and forearm, held together with hot glue and, where needed, heat from a soldering iron. We cut rectangular openings into larger caps to fit the servomotors and secured the servos and their accessories with screws. The gripper was the only component made with 3D printing.",
        ],
        photos: [ecoPhoto("bottle-cap-arm", "The bottle-cap arm and its servos")],
        video: {
          type: "mp4",
          src: "/videos/eco-explorer/robotic-arm-demo.mp4",
          poster: "/videos/eco-explorer/robotic-arm-demo.jpg",
          title: "Testing Eco-Explorer’s bottle-cap robotic arm",
        },
      },
      {
        title: "Connecting controllers, motors and environmental sensors",
        paragraphs: [
          "I worked on the circuit design and programming using Arduino Uno, Arduino Nano and an ESP32-CAM, alongside yellow geared motors, SG90 servos and an L298N motor driver.",
          "The electronics also included an HC-05 Bluetooth module, an HC-SR04 distance sensor, an MQ-135 air-quality sensor, a DHT11 temperature and humidity sensor, a NEO-6M GPS module and connecting wires. We assembled and tested the wiring as the rover took shape.",
        ],
        photos: [
          ecoPhoto("controllers-and-motors", "Controllers, motors, servo and motor driver"),
          ecoPhoto("sensors-and-bluetooth", "Bluetooth module, sensors, GPS and cables"),
          ecoPhoto("rover-circuit-wiring", "Wiring the electronics on the rover"),
          ecoPhoto("arduino-wiring-test", "Testing the Arduino wiring"),
          ecoPhoto("rover-circuit-diagram", "Rover control, motors and sensor connections"),
          ecoPhoto("arm-circuit-diagram", "Servo and Bluetooth connections for the robotic arm"),
        ],
      },
      {
        title: "From app controls to tests on rough surfaces",
        paragraphs: [
          "We developed and tested the mobile controls, worked on sensor readings and live camera communication, and tried the rover on rough surfaces. Testing the gripper and obstacle avoidance helped us understand how its mechanical structure, circuits and software worked together.",
        ],
        photos: [
          ecoPhoto("sensor-app-design", "Developing the sensor interface in MIT App Inventor"),
          ecoPhoto("rover-control-app", "Rover movement controls"),
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/eco-explorer/rover.jpg",
        alt: "Eco-Explorer rover on a table",
        caption: "Recycled materials form the rover and robotic arm.",
      },
    ],
    title: "Eco-Explorer",
  },

  //KYRA
  {
    slug: "kyra",
    title: "Kyra",
    year: "2025",
    context: "World Robot Olympiad· Team Ruwance",
    url: "https://github.com/vania020/wro2025-robotek",
    category: "Autonomous Vehicles · Mechanical Design · Testing",
    description:
      "An autonomous car for the Future Engineers Open and Obstacle Challenges. My focus was mechanical design, testing, color calibration and documenting our build.",
    tech: ["ROS", "Ubuntu", "Ackermann steering", "LiDAR", "Computer vision", "3D design"],
    cover: { src: "/images/projects/kyra/vehicle.jpg", alt: "Kyra autonomous vehicle" },
    sections: [
      {
        title: "My part in getting Kyra ready for the track",
        paragraphs: [
          "I worked mostly on the mechanical, testing and documentation side of Kyra. I rearranged components to keep the car compact, adjusted the layout around its Ackermann steering and designed wheels. I also took charge of our GitHub documentation so the build, changes and tests were easier to follow.",
          "My teammates focused more on the code and electronics. Working alongside them gave me a better foundation in automation, ROS and Ubuntu, even though I was not leading those parts of the project.",
        ],
      },
      {
        title: "Making everything fit inside a small chassis",
        paragraphs: [
          "One of our main challenges was keeping the vehicle small while leaving room for the steering, sensors and electronics. Repositioning pieces meant checking how each change affected the rest of the car. I worked on the mechanical layout and wheel design as we tested and refined the build.",
        ],
        photos: [
          {
            src: "/images/projects/kyra/vehicle-base.png",
            alt: "Kyra vehicle base model",
            caption: "The vehicle base.",
          },
          {
            src: "/images/projects/kyra/wheel-design.png",
            alt: "Kyra wheel design",
            caption: "Wheel design for the car.",
          },
          {
            src: "/images/projects/kyra/camera-housing.png",
            alt: "Kyra camera housing",
            caption: "Housing for the camera.",
          },
        ],
      },
      {
        title: "Ackermann steering, LiDAR and camera-based navigation",
        paragraphs: [
          "Our car was built for both the Open and Obstacle Challenges. It runs Ubuntu with ROS, uses Ackermann steering and a custom chassis, and combines LiDAR readings of the field walls with camera detection of traffic signs and obstacles.",
          "The system brings those inputs together to adjust its route and count laps. Its drivetrain uses a compact 25 mm metal gear DC motor connected to the rear axle through gears.",
        ],
      },
      {
        title: "Testing turns and calibrating colors",
        paragraphs: [
          "I helped test the vehicle and calibrate the colors used by the camera. Watching what happened on the track helped us see where the mechanical layout or detection needed another adjustment. These tests also helped me understand the software and electronics my teammates were working on.",
        ],
      },
      {
        title: "Keeping our development journey on GitHub",
        paragraphs: [
          "I was in charge of documenting the project in our GitHub repository, bringing together the vehicle photos, mechanical models, assembly information and explanations of the systems. Writing it all down helped me understand the build more clearly and made our work easier to share.",
        ],
      },
    ],
    gallery: [
      { src: "/images/projects/kyra/front.png", alt: "Kyra front view", caption: "Front" },
      { src: "/images/projects/kyra/left.png", alt: "Kyra left view", caption: "Left" },
      { src: "/images/projects/kyra/right.png", alt: "Kyra right view", caption: "Right" },
      { src: "/images/projects/kyra/back.png", alt: "Kyra rear view", caption: "Back" },
      { src: "/images/projects/kyra/top.png", alt: "Kyra top view", caption: "Top" },
      { src: "/images/projects/kyra/bottom.png", alt: "Kyra bottom view", caption: "Bottom" },
    ],
  },

  //SATELLITE QAOA
  {
    slug: "satellite-qaoa",
    documentation: "/documents/satellite-qaoa.pdf",
    year: "2025",
    context: "Quantum-computing capstone poster — The Coding School / QxQ",
    category: "Quantum Computing · Optimization · Space",
    description:
      "A conceptual capstone poster exploring how QAOA could be applied to satellite-placement optimization.",
    tech: ["QAOA", "Quantum-classical optimization", "Hamiltonians"],
    cover: {
      src: "/images/projects/satellite-qaoa/poster.png",
      alt: "Optimizing Satellite Placement with QAOA poster",
    },
    sections: [
      {
        title: "Satellite placement as an optimization problem",
        paragraphs: [
          "My capstone poster explores satellite placement through the lens of quantum optimization. The motivation is to balance coverage, overlap and communication needs while recognizing constraints such as orbital mechanics and space debris.",
        ],
      },
      {
        title: "The quantum-classical loop",
        paragraphs: [
          "The poster outlines the Quantum Approximate Optimization Algorithm (QAOA). It introduces a cost Hamiltonian representing the objective and a mixer Hamiltonian used to explore candidate configurations.",
          "Quantum measurements inform a classical optimizer, which adjusts the circuit parameters and repeats the process. The poster explains this loop as a potential approach to the placement problem.",
        ],
      },
      {
        title: "My QxQ capstone poster",
        paragraphs: [
          "I developed this conceptual poster to explain how a quantum-classical optimization loop could approach satellite placement, bringing together my interests in quantum computing and space.",
          "I presented the idea as my 2025 introductory quantum-computing capstone. The focus was understanding and communicating the algorithm, with implementation and benchmarking left for further work.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/satellite-qaoa/poster.png",
        alt: "QAOA satellite-placement capstone poster",
        caption: "The full capstone poster.",
      },
    ],
    title: "Satellite Optimization with QAOA",
  },

  //AMA LLULLA
  {
    slug: "ama-llulla",
    documentation: "/documents/ama-llulla.pdf",
    year: "2025",
    software: true,
    context: "UNESCO Global Youth Hackathon",
    category: "Media Literacy · Game Design · UI/UX",
    description:
      "A Figma mobile-game prototype that combines Andean cultural identity with media literacy, helping young people practice safer decisions online.",
    tech: ["Figma", "UI/UX", "Interactive prototyping", "Game design"],
    cover: {
      src: "/images/projects/ama-llulla/identity.png",
      alt: "Ama Llulla: Guardians of Truth identity",
    },
    sections: [
      {
        title: "A Digital Chaski on a journey through Peru",
        paragraphs: [
          "Ama Llulla means “Do not lie.” Our proposal turns this Andean principle into a narrative mobile game for ages 11–15. Players become Digital Chaskis, traveling across regions of Peru to recognize misinformation, manipulated media and harmful online content.",
          "For each simulated post, the player chooses whether to verify, share, report or ignore it. The scenarios encourage critical thinking rather than quick, automatic reactions.",
        ],
      },
      {
        title: "A checklist before every decision",
        paragraphs: [
          "Before confirming an action, players check the source, examine the evidence and look for manipulation. Immediate feedback explains their decision and suggests safer ways to respond.",
        ],
        bullets: [
          "Check who published the information.",
          "Look for evidence that can be verified.",
          "Notice language or imagery designed to trigger fear, anger or urgency.",
        ],
      },
      {
        title: "The Qhapaq Ñan map and QuipuPoints",
        paragraphs: [
          "The Qhapaq Ñan acts as a progression map. QuipuPoints, badges and cultural tokens reward progress, while Quechua words and short explanations connect the game to Peruvian heritage.",
          "The prototype also includes an information section pointing users toward trusted digital-safety resources.",
        ],
      },
      {
        title: "From the Figma prototype to a proposed mobile game",
        paragraphs: [
          "We designed a responsive Figma prototype to explore the story, navigation and player decisions. We are developing the idea further, with mobile development and pilot testing as planned next steps.",
          "The current prototype lets us communicate the experience and refine it before a full mobile release.",
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/ama-llulla/home.png",
        alt: "Ama Llulla home screen",
        caption: "Main menu prototype.",
      },
      {
        src: "/images/projects/ama-llulla/scenario.png",
        alt: "Example of a media-literacy scenario",
        caption: "Players evaluate a simulated digital post.",
      },
      {
        src: "/images/projects/ama-llulla/checklist.png",
        alt: "Source and evidence checklist",
        caption: "The checklist guides a decision.",
      },
      {
        src: "/images/projects/ama-llulla/map.png",
        alt: "Qhapaq Ñan game map",
        caption: "Regions form the progression map.",
      },
      {
        src: "/images/projects/ama-llulla/region.png",
        alt: "Unlocked Peruvian region",
        caption: "A region unlocked along the route.",
      },
      {
        src: "/images/projects/ama-llulla/badges.png",
        alt: "Game badges and cultural tokens",
        caption: "Rewards and cultural tokens.",
      },
      {
        src: "/images/projects/ama-llulla/flow.png",
        alt: "Player flowchart",
        caption: "Mapping the player’s decisions through the game.",
      },
    ],
    title: "Ama Llulla — Guardians of Truth",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const featuredProjects = homeProjectOrder
  .map(getProject)
  .filter((project): project is Project => project !== undefined);

// Los proyectos nuevos que todavía no estén en la lista se muestran al final.
export const orderedProjects = [
  ...projectsPageOrder
    .map(getProject)
    .filter((project): project is Project => project !== undefined),
  ...projects.filter((project) => !projectsPageOrder.includes(project.slug)),
];
