// HOME ORDER
export const homeProjectOrder = ["seekerbot", "hydroponic-garden", "eco-explorer", "kyra", "ro-boat"];

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
  contributions?: string[];
  note?: string;
  photos?: Media[];
  sidePhoto?: Media;
  compactPhotos?: boolean;
  naturalPhotos?: boolean;
  fullWidthPhotos?: boolean;
  sideVideo?: Video;
  videos?: Video[];
  mediaLayout?: "side-by-side";
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
  demo?: Video;
};

export const projects: Project[] = [
  //ARAZUL
  {
    slug: "arazul",
    software: true,
    title: "ARAZUL",
    year: "2026",
    context: "Built for Cornell Big RedHacks 2026",
    category: "Web Development · Mapping · Route Optimization",
    tech: ["React", "TypeScript", "Vite", "UI/UX Design"],
    url: "https://arazul-bigredhacks.vercel.app/",
    description:
      "A web app that compares route options by travel time and historical incident data, starting with São Paulo.",
    cover: {
      src: "/images/projects/arazul/route-comparison.jpg",
      alt: "ARAZUL route comparison interface",
    },
    demo: { type: "youtube", id: "8EewWI3PMGA", title: "ARAZUL demo" },
    pageDescription:
      "ARAZUL is a web app for finding routes with local safety context. Alongside travel time, it uses historical incident data to compare route options, letting users explore alternatives with fewer reported incidents along the way without adding too much time to their trip.",
    sections: [
      {
        title: "How It Started",
        paragraphs: [
          "The idea came from our team's experience in Latin America, where choosing a route often means thinking about safety as well as travel time. We might avoid certain streets at night or take a longer route because we know the area, but that information is usually missing from navigation apps. With ARAZUL, we wanted to see whether historical incident data could help people make those choices, especially somewhere unfamiliar.",
        ],
      },
      {
        title: "Route Comparison & Map Interactions",
        paragraphs: [
          "ARAZUL is a web app that compares travel time with historical incident data along each route. Rather than treating the shortest trip as the only option, it lets users explore lower-exposure routes within a travel-time budget they choose.",
        ],
        bullets: [
          "Choose an origin and destination",
          "Select walking or driving, where supported by the city data",
          "Set a departure time, when time information is available",
          "Choose how many extra minutes to spend for a lower-exposure route",
        ],
        photos: [
          {
            src: "/images/projects/arazul/route-comparison.jpg",
            alt: "Comparing route options and travel times",
            caption: "Comparing route options and travel times",
          },
          {
            src: "/images/projects/arazul/route-explanation.jpg",
            alt: "Understanding the context behind a route recommendation",
            caption: "Understanding the context behind a route recommendation",
          },
        ],
      },
      {
        title: "Historical Incident Data",
        paragraphs: [
          "Our prototype starts with São Paulo, using more than 217,000 reported incidents from public police occurrence data, including SSP-SP. We modeled that information geographically to compare route exposure alongside travel time. The comparison describes historical reports rather than predicting what will happen on a particular trip.",
        ],
        sidePhoto: {
          src: "/images/projects/arazul/incident-map.jpg",
          alt: "Mapping historical reported-incident exposure",
          caption: "Mapping historical reported-incident exposure",
        },
      },
      {
        title: "My Contribution & What I Learned",
        paragraphs: [
          "I worked on the web app, focusing on UI/UX, map interactions, route comparison and debugging. The project also gave me a first introduction to Google Maps Platform and mapping APIs, which were new to me. I am still learning how they work, but seeing them used in our web app helped me understand a little more about connecting maps with an interface. We deployed the web app on Vercel.",
        ],
        contributions: [
          "Web app development and UI/UX",
          "Map interactions and route comparison",
          "Debugging and testing the interface",
        ],
        note: "This was my first hackathon, and it was a really fun experience. I was excited to take part at Cornell, and building ARAZUL opened my eyes to more everyday problems we could explore through technology.",
      },
    ],
  },

  //QHUB LEARNING
  {
    slug: "qhub-learning",
    software: true,
    url: "https://plataforma.qhubperu.com",
    title: "QHub Learning Platform",
    year: "2025",
    context: "QuantumHub Perú Innovation Department",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Interactive simulations"],
    description:
      "A free, Spanish-language learning platform developed by QuantumHub Perú to introduce students to quantum computing. It brings together structured lessons, interactive simulations, quizzes, and progress tracking so students can explore quantum concepts at their own pace.",
    cover: {
      src: "/images/projects/qhub-learning/circuit-builder.png",
      alt: "QHub interactive quantum circuit builder",
    },
    sections: [
      {
        title: "Our Motivation!",
        naturalPhotos: true,
        paragraphs: [
          "At QuantumHub Perú, we noticed that many students interested in quantum computing didn't know where to start. Most of the resources they came across were in English or assumed they already had some background in physics and mathematics.",
          "We wanted to create a place where students could start from scratch, learn in Spanish, and explore quantum concepts through interactive activities rather than just reading about them.",
        ],
        sidePhoto: {
          src: "/images/projects/qhub-learning/platform-launch.png",
          alt: "QHub Learning platform launch announcement",
          caption: "A free starting point for learning quantum computing",
        },
      },
      {
        title: "Building the Platform",
        naturalPhotos: true,
        paragraphs: [
          "As Director of Innovation at QuantumHub Perú, I helped lead the platform's development, even though I was still learning many of the tools we were using myself! Our team worked on everything from planning the user experience and organizing the course content to building the website and connecting its features. We used React, TypeScript, and Tailwind CSS for the frontend, with Supabase handling the backend.",
          "My main focus was UI/UX design: choosing colors, organizing page layouts, creating interface components, and brainstorming and implementing ideas for interactive simulations. Along the way, I also learned how Supabase works, including the database managing over 100 active enrollments, and how to collaborate through GitHub and different Git commands.",
        ],
        sidePhoto: {
          src: "/images/projects/qhub-learning/course-introduction.png",
          alt: "QHub introductory course interface and platform branding",
          caption: "Designing an approachable introduction to quantum computing",
        },
      },
      {
        title: "Learning Content",
        naturalPhotos: true,
        paragraphs: [
          "Our first course, Introduction to Quantum Computing, includes four modules and over 60 learning units. Students start with mathematical foundations before moving into topics like qubits, superposition, quantum gates, circuits, and introductory quantum algorithms.",
          "Each student has a personal dashboard where they can access their courses, pick up where they left off, and track their progress. Quizzes accompany the lessons, and students can earn a certificate after completing the course and passing its assessments.",
        ],
        photos: [
          {
            src: "/images/projects/qhub-learning/dashboard-lessons.png",
            alt: "QHub dashboard and structured lessons",
            caption: "A personal dashboard and a structured learning path",
          },
          {
            src: "/images/projects/qhub-learning/quizzes-certificate.png",
            alt: "QHub quiz and sample completion certificate",
            caption: "Checking understanding and celebrating progress",
          },
        ],
      },
      {
        title: "Interactive Simulations",
        naturalPhotos: true,
        fullWidthPhotos: true,
        paragraphs: [
          "Quantum computing can be pretty abstract, especially when you're learning it for the first time, so we thought it would be helpful if students could actually see and interact with some of the concepts instead of relying only on equations and explanations.",
          "That's why we included simulations of the Bloch sphere, matrix operations, a quantum circuit builder where students can experiment with gates, and games along the way. These activities give students room to try different inputs and see how the results change.",
        ],
        sidePhoto: {
          src: "/images/projects/qhub-learning/simulations-overview.png",
          alt: "QHub simulations featuring matrices and quantum gates",
          caption: "Exploring concepts through interactive activities",
        },
        photos: [
          {
            src: "/images/projects/qhub-learning/bloch-sphere.png",
            alt: "Interactive Bloch sphere and probability distribution inside a QHub lesson",
            caption: "Exploring states on the Bloch sphere",
          },
          {
            src: "/images/projects/qhub-learning/circuit-builder.png",
            alt: "Interactive quantum circuit builder with gate choices, a Bloch sphere, and outcome probabilities",
            caption: "Experimenting with gates and quantum circuits",
          },
        ],
      },
    ],
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
        title: "How It Started",
        sidePhoto: {
          src: "/images/projects/hydroponic-garden/inspiration.png",
          alt: "Lettuce seedlings growing without soil in a hydroponic garden",
          caption: "Exploring how lettuce can grow without soil",
        },
        paragraphs: [
          "This project started as a team initiative in our school science fair to explore alternatives to traditional agriculture, especially in regions of Peru like Puno, where water scarcity and difficult growing conditions affect local farmers. Hydroponics seemed like an interesting way to address this problem, while also combining electronics, programming, and agriculture in one project.",
        ],
      },
      {
        title: "System Design & Construction",
        video: {
          type: "mp4",
          src: "/videos/hydroponic-garden/pvc-construction.mp4",
          poster: "/videos/hydroponic-garden/pvc-construction.jpg",
          title: "Preparing the PVC channels in the workshop",
        },
        paragraphs: [
          "The garden uses the Nutrient Film Technique (NFT), where a nutrient-rich water solution circulates through PVC channels and reaches the plants' roots without the need for soil.",
          "The structure was built using three PVC pipes supported by a wooden frame, with 12 openings for lettuce seedlings. A submersible water pump circulates the nutrient solution from an 8.5L reservoir through the pipes and back into the system, creating a cycle.",
        ],
        photos: [
          {
            src: "/images/projects/hydroponic-garden/materials.png",
            alt: "PVC pipes, fittings and wooden supports before assembly",
            caption: "Preparing the pipes, fittings and wooden supports",
          },
          {
            src: "/images/projects/hydroponic-garden/painting.png",
            alt: "Painting the assembled PVC garden blue",
            caption: "Painting the assembled channels",
          },
          {
            src: "/images/projects/hydroponic-garden/drilling.jpg",
            alt: "Preparing the planting holes in the PVC channels",
            caption: "Preparing the planting holes in the PVC channels",
          },
          {
            src: "/images/projects/hydroponic-garden/frame-drilling.png",
            alt: "Securing the wooden frame around the PVC channels",
            caption: "Securing the wooden frame around the PVC channels",
          },
        ],
      },
      {
        title: "Electronics & Automation",
        paragraphs: [
          "The circuit was built around an Arduino Uno, with a DHT11 sensor for temperature and humidity, an MQ-135 for air quality, a Bluetooth module, and a 5V relay module.",
          "Two rechargeable lithium-ion batteries were used to power the electronics. The components were connected through a breadboard, with resistors added to the three LEDs to limit the current. These LEDs served as simple visual indicators of air quality, while the relay allowed the Arduino to switch an external load.",
          "After testing the connections, the circuit was mounted inside a plastic enclosure to keep the Arduino, batteries, and wiring together and make the setup easier to handle alongside the garden.",
        ],
        photos: [
          {
            src: "/images/projects/hydroponic-garden/circuit.png",
            alt: "Arduino, sensors, relay and battery-powered electronics",
            caption: "Arduino, sensors, relay and battery-powered electronics",
          },
          {
            src: "/images/projects/hydroponic-garden/electronics-assembly-presentation.jpg",
            alt: "Wiring and assembling the garden controller",
            caption: "Wiring and assembling the garden controller",
          },
        ],
      },
      {
        title: "Water Pump Control",
        video: {
          type: "mp4",
          src: "/videos/hydroponic-garden/water-reservoir-demo.mp4",
          poster: "/videos/hydroponic-garden/water-reservoir-demo.jpg",
          title: "The nutrient-solution reservoir",
        },
        paragraphs: [
          "A 12V pump circulates the nutrient solution through the garden. When the battery-powered electronics were connected, we could turn the pump on and off from the app through Bluetooth, using a relay controlled by the Arduino.",
          "For everyday watering, we simply connected the pump directly to a 12V DC adapter plugged into a wall outlet, without needing to use the app.",
        ],
      },
      {
        title: "Mobile App & Monitoring",
        video: {
          type: "mp4",
          src: "/videos/hydroponic-garden/mobile-app-demo.mp4",
          poster: "/videos/hydroponic-garden/mobile-app-demo.jpg",
          title: "Using the monitoring app on an Android phone",
        },
        paragraphs: [
          "A mobile app was developed using MIT App Inventor to check the garden's conditions and control the pump. The app displays temperature, humidity, and air-quality readings received through Bluetooth. It also uses color-coded indicators to make the air-quality levels easier to understand. We included ON/OFF controls for the water pump and a section about common diseases in hydroponic lettuce, so the app could also serve as a quick reference when caring for the plants.",
        ],
        photos: [
          {
            src: "/images/projects/hydroponic-garden/monitoring-app-presentation.jpg",
            alt: "The monitoring interface and pump controls in MIT App Inventor",
            caption: "The monitoring interface and pump controls in MIT App Inventor",
          },
          {
            src: "/images/projects/hydroponic-garden/app-blocks.png",
            alt: "Programming the mobile app in MIT App Inventor",
            caption: "Programming the mobile app in MIT App Inventor",
          },
        ],
      },
      {
        title: "Testing & Results",
        paragraphs: [
          "We tested the garden for approximately 30 days with 12 lettuce seedlings. The nutrient solution was circulated twice a day for 30 minutes, and we replaced the water weekly.",
          "Throughout the experiment, we took pictures and tracked the plants' growth. By Day 8, the lettuce had grown an average of 5 cm. We also estimated that the garden used around 30 liters of water during the first week, or approximately 2.5 liters per plant. For comparison, we used an approximate soil-growing reference of 0.5 liters per plant per day.",
        ],
        photos: [
          {
            src: "/images/projects/hydroponic-garden/planting.jpg",
            alt: "Preparing the lettuce seedlings",
            caption: "Preparing the lettuce seedlings",
          },
          {
            src: "/images/projects/hydroponic-garden/growth.jpg",
            alt: "Tracking lettuce growth from Day 1 to Day 8",
            caption: "Tracking lettuce growth from Day 1 to Day 8",
          },
        ],
      },
    ],
    gallery: [
      {
        src: "/images/projects/hydroponic-garden/team.png",
        alt: "Team members with the completed hydroponic garden",
        caption: "Our completed garden at school",
      },
      {
        src: "/images/projects/hydroponic-garden/materials.png",
        alt: "PVC materials before construction",
        caption: "Materials before assembly",
      },
      {
        src: "/images/projects/hydroponic-garden/frame-drilling.png",
        alt: "Drilling the wooden garden frame",
        caption: "Building the wooden supports",
      },
      {
        src: "/images/projects/hydroponic-garden/painting.png",
        alt: "Painting the PVC channels",
        caption: "Finishing the garden structure",
      },
      {
        src: "/images/projects/hydroponic-garden/monitoring.jpg",
        alt: "Hydroponic garden and mobile monitoring app",
        caption: "The garden and its monitoring app",
      },
    ],
    title: "Automated Hydroponic Garden",
    category: "Electronics · Sensors · Sustainable Agriculture",
    description:
      "An Arduino-powered hydroponic garden with water recirculation, environmental sensors, and a mobile app for growing lettuce without soil.",
    pageDescription:
      "An Arduino-powered hydroponic garden designed to grow lettuce without soil while making watering and environmental monitoring easier. The project combines a water-recirculation system, sensors, and a mobile app to explore a more water-efficient way of growing food.",
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
      "A small robotic boat built with recycled materials to collect floating plastic waste from rivers and other waterways. It uses a front ramp to gather waste from the water's surface, combining a simple mechanical design with basic electronics.",
    tech: ["PVC Celtex", "Recycled materials", "Geared DC motors", "Basic circuits"],
    cover: {
      src: "/images/projects/ro-boat/cover.png",
      alt: "RO-BOAT robotic boat",
    },
    sections: [
      {
        title: "How It Started",
        paragraphs: [
          "This was my very first project involving connecting wires and actually making something move. At the time, I had no experience with electronics, so even figuring out how to connect a battery, switch, and motor was completely new to me.",
          "The idea came from watching YouTube videos while looking for a project to build for our school science fair. I shared the idea of making a trash-collecting boat with my group, and even though none of us had built a robot before, we thought it would be interesting to give it a try.",
        ],
        sideVideo: {
          type: "mp4",
          src: "/videos/ro-boat/boat-demo.mp4",
          poster: "/videos/ro-boat/boat-demo.jpg",
          title: "RO-BOAT demonstration",
        },
      },
      {
        title: "Design & Construction",
        paragraphs: [
          "The boat was built using PVC Celtex sheets, recycled wooden sticks, soda cans, and bottle caps. These materials helped keep the prototype lightweight and inexpensive. At the front, we added a moving ramp made from old markers and pieces of tablecloth to collect plastic waste floating on the water.",
        ],
        photos: [
          {
            src: "/images/projects/ro-boat/completed-boat.jpg",
            alt: "Completed RO-BOAT prototype with its front collection ramp",
            caption: "The lightweight frame and front collection ramp",
          },
          {
            src: "/images/projects/ro-boat/boat.jpg",
            alt: "RO-BOAT prototype on the water",
            caption: "Testing the prototype on the water",
          },
        ],
      },
      {
        title: "Electronics & Mechanism",
        paragraphs: [
          "The circuit was fairly simple, with four yellow geared DC motors, 9V batteries, switches, and basic wiring. Two motors rotated the cans to move the boat through the water, while the other two powered the collection ramp.",
          "This was also when I started learning how motor direction depends on the way it is connected to the power supply. We were covering Ohm's law in physics class around the same time, so it was interesting to see some of those concepts come up while working on an actual circuit.",
          "One of the biggest problems was getting the motors to run properly. At first, we were using a single 9V battery, which could not supply enough current for all four motors. After looking for advice online and talking to electricians in my neighborhood, we tried connecting batteries in parallel. This gave the circuit more current capacity without increasing the voltage, and helped us get the motors running.",
        ],
        photos: [
          {
            src: "/images/projects/ro-boat/wiring-help.jpg",
            alt: "Getting help with the RO-BOAT motor wiring at a neighborhood shop",
            caption: "Getting advice on the motor wiring",
          },
        ],
      },
      {
        title: "NGFP Young Voices Awards",
        paragraphs: [
          "We also submitted RO-BOAT to the NGFP Young Voices Awards 2024, where the project made it into the Top 30.",
        ],
      },
    ],
    videos: [
      {
        type: "mp4",
        src: "/videos/ro-boat/mechanism-demo.mp4",
        poster: "/videos/ro-boat/mechanism-demo.jpg",
        title: "RO-BOAT in action",
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
        title: "Project Background",
        paragraphs: [
          "Inspired by SeekerBot, we built Eco-Explorer as a school-team project combining robotics with a recycling campaign. Students from primary through secondary school helped collect materials, and we used bottle caps, bicycle-tire rubber, PVC pipes, a plastic cleaning-product container, cardboard, aluminum and Lego pieces to build the rover. My role focused on circuit design and programming, connecting the recycled structure to the electronics and mobile controls.",
        ],
        photos: [
          {
            src: "/images/projects/eco-explorer/recycled-materials.jpg",
            alt: "Materials reused for Eco-Explorer",
            caption: "Materials collected for the build",
          },
          {
            src: "/images/projects/eco-explorer/collected-bottle-caps.jpg",
            alt: "Bottle caps collected through the school campaign",
            caption: "Bottle caps collected at school",
          },
        ],
      },
      {
        title: "Wheel Design & Fabrication",
        paragraphs: [
          "We built six wheels by arranging bottle caps into circular structures, joining them with heat from a soldering iron and hot glue. Strips cut from a recycled bicycle tire formed the rubber tread, while additional caps filled the gaps in each wheel. This gave us a way to turn the collected materials into working mechanical parts.",
        ],
        photos: [
          {
            src: "/images/projects/eco-explorer/wheel-caps-and-tire.jpg",
            alt: "Bottle caps and recycled bicycle tire",
            caption: "Bottle caps and tire rubber for the wheels",
          },
          {
            src: "/images/projects/eco-explorer/cutting-bicycle-tire.jpg",
            alt: "Cutting recycled tire strips",
            caption: "Preparing the rubber tread",
          },
          {
            src: "/images/projects/eco-explorer/wheel-cap-layout.jpg",
            alt: "Arranging bottle caps into the wheel structure",
            caption: "Arranging bottle caps into the wheel structure",
          },
          {
            src: "/images/projects/eco-explorer/rubber-wheel-tread.jpg",
            alt: "Adding the recycled bicycle-tire tread",
            caption: "Adding the recycled bicycle-tire tread",
          },

          {
            src: "/images/projects/eco-explorer/wheel-building-team.jpg",
            alt: "Team building the wheel structures",
            caption: "Building the wheel structures together",
          },
          {
            src: "/images/projects/eco-explorer/wheel-assembly-team.jpg",
            alt: "Team assembling bottle-cap wheels",
            caption: "Assembling the bottle-cap wheels",
          },
        ],
      },
      {
        title: "Chassis & Suspension",
        paragraphs: [
          "The rover used a Rocker-Bogie suspension built from PVC tubes and circular joints made with yogurt lids. We created openings in the lids for the wiring, connected the cut tubes to form the suspension links, and added electrical-conduit supports around each yellow geared motor to hold it in place.",
        ],
        sidePhoto: {
          src: "/images/projects/eco-explorer/pvc-frame-assembly.jpg",
          alt: "Assembling the PVC suspension links and joints",
          caption: "Assembling the PVC suspension links and joints",
        },
      },
      {
        title: "Robotic Arm",
        mediaLayout: "side-by-side",
        paragraphs: [
          "Chains of bottle caps formed the arm and forearm, held together with hot glue and, where needed, heat from a soldering iron. Larger caps were cut to accommodate the servomotors, which we secured with screws along with their accessories. The gripper was the only component made with 3D printing.",
        ],
        photos: [
          {
            src: "/images/projects/eco-explorer/bottle-cap-arm.jpg",
            alt: "The bottle-cap arm and servo mounts",
            caption: "The bottle-cap arm and servo mounts",
          },
        ],
        video: {
          type: "mp4",
          src: "/videos/eco-explorer/robotic-arm-demo.mp4",
          poster: "/videos/eco-explorer/robotic-arm-demo.jpg",
          title: "Testing the robotic arm movement",
        },
      },
      {
        title: "Electronics & Circuits",
        paragraphs: [
          "I worked on circuit design and programming with Arduino Uno, Arduino Nano and an ESP32-CAM. The system combined yellow geared motors, SG90 servomotors and an L298N motor driver with Bluetooth communication and environmental sensing. We used an HC-SR04 for distance, an MQ-135 for air quality, a DHT11 for temperature and humidity, and a NEO-6M GPS module for location tracking, assembling and checking the wiring as the rover took shape.",
        ],
        photos: [
          {
            src: "/images/projects/eco-explorer/rover-circuit-diagram.jpg",
            alt: "Rover movement and sensor connections",
            caption: "Rover movement and sensor connections",
          },
          {
            src: "/images/projects/eco-explorer/arm-circuit-diagram.jpg",
            alt: "Robotic arm servos and Bluetooth connections",
            caption: "Robotic arm servos and Bluetooth connections",
          },
        ],
      },
      {
        title: "Circuit Assembly & Testing",
        paragraphs: [
          "We connected the controllers, motors and sensors on the rover and tested the wiring during assembly. Working with a structure made from reused materials meant checking both the mechanical supports and the electronic connections as we brought the systems together.",
        ],
        photos: [
          {
            src: "/images/projects/eco-explorer/rover-circuit-wiring.jpg",
            alt: "Installing the wiring on the rover",
            caption: "Installing the wiring on the rover",
          },
          {
            src: "/images/projects/eco-explorer/arduino-wiring-test.jpg",
            alt: "Testing the Arduino connections",
            caption: "Testing the Arduino connections",
          },
        ],
      },
      {
        title: "Rover Testing",
        paragraphs: [
          "We tried the assembled rover on rough surfaces and tested the gripper and obstacle avoidance. These tests helped us understand how the recycled mechanical structure, circuits and software worked together, and where the build still needed adjustments.",
        ],
        video: {
          type: "mp4",
          src: "/videos/eco-explorer/rover-demonstration.mp4",
          poster: "/videos/eco-explorer/rover-demonstration.jpg",
          title: "Testing the assembled Eco-Explorer rover",
        },
      },
    ],
    gallery: [
      {
        src: "/images/projects/eco-explorer/rover.jpg",
        alt: "The assembled Eco-Explorer rover",
        caption: "The assembled Eco-Explorer rover",
      },
      {
        src: "/images/projects/eco-explorer/recycled-materials.jpg",
        alt: "Materials collected for the build",
        caption: "Materials collected for the build",
      },
      {
        src: "/images/projects/eco-explorer/collected-bottle-caps.jpg",
        alt: "Bottle caps collected at school",
        caption: "Bottle caps collected at school",
      },
      {
        src: "/images/projects/eco-explorer/wheel-caps-and-tire.jpg",
        alt: "Bottle caps and recycled tire rubber",
        caption: "Bottle caps and recycled tire rubber",
      },
      {
        src: "/images/projects/eco-explorer/cutting-bicycle-tire.jpg",
        alt: "Preparing strips for the wheel tread",
        caption: "Preparing strips for the wheel tread",
      },
      {
        src: "/images/projects/eco-explorer/wheel-building-team.jpg",
        alt: "Building the wheels together",
        caption: "Building the wheels together",
      },
      {
        src: "/images/projects/eco-explorer/wheel-assembly-team.jpg",
        alt: "Assembling the wheel structures",
        caption: "Assembling the wheel structures",
      },
      {
        src: "/images/projects/eco-explorer/controllers-and-motors.jpg",
        alt: "Controllers and motor components",
        caption: "Controllers and motor components",
      },
      {
        src: "/images/projects/eco-explorer/sensors-and-bluetooth.jpg",
        alt: "Sensors and communication modules",
        caption: "Sensors and communication modules",
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
      "An autonomous car built for the Future Engineers category at the World Robot Olympiad 2025 in Singapore. Using LiDAR, a camera, and Ackermann steering, Kyra navigates a rectangular track on its own, detects obstacles, and recognizes their colors to decide which side to pass them on.",
    tech: ["ROS", "Ubuntu", "Ackermann steering", "LiDAR", "Computer vision", "3D design"],
    cover: { src: "/images/projects/kyra/vehicle.jpg", alt: "Kyra autonomous vehicle" },
    sections: [
      {
        title: "About the Challenge",
        paragraphs: [
          "In the WRO Future Engineers category, our robot had to complete two challenges. In the Open Challenge, Kyra had to drive three laps around a rectangular track, with a central layout that could change between rounds. The Obstacle Challenge followed a similar course, but added colored obstacles. Kyra had to pass red obstacles on the right and green ones on the left, all while navigating the track without human control. To handle both challenges, our team used LiDAR, a camera, and an Ackermann steering system.",
        ],
        videos: [
          {
            type: "youtube",
            id: "wX616LgmSGo",
            title: "Kyra track demonstration 1",
          },
          {
            type: "youtube",
            id: "DUVe36ZpR18",
            title: "Kyra track demonstration 2",
          },
        ],
      },
      {
        title: "Our Team!",
        paragraphs: [
          "Our team was made up of my friend Isabella, our mentor Anthony, and me. I joined when most of Kyra had already been built, so most of my work involved testing the robot, making adjustments to its mechanical design, and helping calibrate the camera for color detection.",
          "Isabella and Anthony had already done much of the programming and electronics work, but being part of the team also gave me the chance to learn the basics of ROS, which was completely new to me at the time.",
        ],
        sidePhoto: {
          src: "/images/projects/kyra/official-team.jpg",
          alt: "Isabella, Anthony, and Vania with Kyra",
          caption: "Our team with Kyra",
        },
      },
      {
        title: "Chassis & Ackermann Steering",
        compactPhotos: true,
        paragraphs: [
          "One thing I noticed during testing was that Kyra needed to be as compact as possible to navigate the track without hitting the corners. We worked on rearranging the components to fit them closer together while keeping everything secure, which meant making adjustments to the chassis design and testing how the car turned.",
          "Kyra uses Ackermann steering, similar to a regular car, where the front wheels turn at slightly different angles to make smoother turns. During testing, I also got to learn about PID control and how it helps the robot adjust its steering to stay on track.",
        ],
        photos: [
          {
            src: "/images/projects/kyra/vehicle-base.png",
            alt: "Kyra vehicle base model",
            caption: "Chassis layout",
          },
          {
            src: "/images/projects/kyra/wheel-design.png",
            alt: "Kyra wheel design",
            caption: "Wheel design",
          },
          {
            src: "/images/projects/kyra/camera-housing.png",
            alt: "Kyra camera housing model",
            caption: "Camera housing",
          },
          {
            src: "/images/projects/kyra/test-vehicle.jpg",
            alt: "Kyra during vehicle testing",
            caption: "Testing the assembled car",
          },
        ],
        video: {
          type: "mp4",
          src: "/videos/kyra/version-7-test.mp4",
          poster: "/videos/kyra/version-7-test.jpg",
          title: "Version 7 steering and vehicle test",
        },
      },
      {
        title: "LiDAR, Camera & ROS",
        paragraphs: [
          "Working with my team helped me understand how Kyra uses ROS (Robot Operating System) to connect its sensors with the motors and steering system. The LiDAR measures distances to nearby walls, while the camera detects colored obstacles. Both send data to a main ROS node.",
          "To stay centered on the track, Kyra compares measurements to the wall from both sides. If the car gets too close to one wall, the difference in distances is used as an error signal for the PID controller, which adjusts the steering to bring Kyra back toward the center.",
        ],
        photos: [
          {
            src: "/images/projects/kyra/ros-node-diagram.png",
            alt: "ROS architecture showing LiDAR and camera inputs and motor and steering outputs",
            caption: "ROS nodes and topics",
          },
          {
            src: "/images/projects/kyra/main-node-centered.png",
            alt: "Diagram showing equal distances to the track walls when the car is centered",
            caption: "Centered position: D1 - D2 = 0",
          },
          {
            src: "/images/projects/kyra/main-node-correction.png",
            alt: "Diagram showing steering corrections based on wall-distance differences",
            caption: "Correcting the car position",
          },
          {
            src: "/images/projects/kyra/obstacle-adjustment.png",
            alt: "Diagram showing adjusted paths for red and green obstacles",
            caption: "Adjusting the route around obstacles",
          },
        ],
      },
      {
        title: "Testing at the Competition",
        paragraphs: [
          "When we arrived in Singapore, Kyra wasn't behaving the same way it had during our tests in Peru. We initially thought the problem might be the camera, so we spent time adjusting the HSV color ranges to improve how it detected the red and green obstacles.",
          "But after several rounds of testing, we noticed that the competition track was much smoother than the one we had practiced on, causing the wheels to slip. To fix this, we replaced the motor gear with a smaller one to reduce speed and increase torque, helping Kyra get better traction.",
          "It was surprising to see how something as simple as a different floor surface could affect the robot's performance. I really enjoyed figuring out these kinds of problems throughout the competition and although we didn't make it to the podium, I learned so much from testing!",
        ],
        sidePhoto: {
          src: "/images/projects/kyra/competition-team.jpg",
          alt: "Team Ruwance with the Peruvian flag beside the WRO competition track",
          caption: "At the WRO competition track",
        },
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
