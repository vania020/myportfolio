const techparami = "/images/communities/tech-para-mi/school-workshop.jpg";
const quantumhub = "/images/communities/quantumhub-peru/winter-school-community.png";
const misiontech = "/images/communities/mision-tech/camp.jpg";

export type Initiative = {
  slug: string;
  name: string;
  role: string;
  description: string;
  descriptionHighlight?: string;
  date?: { label: string; dateTime: string };
  color: "sun" | "coral" | "blush";
  photoLabel: string;
  photo?: string;
  /** Extra photos for the gallery on the home page. Add more here! */
  photos?: string[];
  url?: string;
  instagram?: string;
  sections?: (ArticleSection & {
    textPhoto?: { src: string; alt: string };
    photoColumns?: 4;
    naturalPhotos?: boolean;
    videos?: NonNullable<ArticleSection["video"]>[];
  })[];
  highlights?: { value: string; label: string }[];
  impactNote?: string;
  documentation?: string;
  press?: { name: string; url: string }[];
};

export const initiatives: Initiative[] = [
  {
    slug: "tech-para-mi",
    instagram: "techparami_",
    documentation: "/documents/tech-para-mi.pdf",
    highlights: [
      {
        value: "300+",
        label: "Students reached",
      },
      {
        value: "8",
        label: "Latin American countries",
      },
      {
        value: "15+",
        label: "Volunteers and instructors",
      },
      {
        value: "5,000",
        label: "Plastic bottles collected for robotics kits",
      },
    ],
    impactNote:
      "Figures reported in the supplied Tech Para Mí media kit; they describe the period covered by that document.",
    sections: [
      {
        title: "In-Person Workshops",
        paragraphs: [
          "Most of our in-person workshops have taken place in schools in Manchay, a community in Lima, Peru.",
          "The workshops usually have two sessions. The first introduces students to electricity, circuits, and basic robotics through demonstrations, discussions, and activities like Kahoot.",
          "In the second session, students build their own small robotic car using recycled materials, a DC motor, batteries, and a switch. For many, it is their first time assembling a circuit and seeing something they have built move on its own.",
          "Using simple, affordable materials makes it possible for students to try things out, troubleshoot their circuits, and work together throughout the activity.",
        ],
        photoColumns: 4,
        photos: [
          {
            src: "/images/communities/tech-para-mi/classroom-kahoot.jpg",
            alt: "Students and volunteers participating in a classroom quiz",
            caption: "Exploring the basics through Kahoot",
          },
          {
            src: "/images/communities/tech-para-mi/school-circuit-activity.jpg",
            alt: "Students exploring a circuit simulation on a laptop",
            caption: "Trying out circuits in Tinkercad",
          },
          {
            src: "/images/communities/tech-para-mi/building-cars.jpg",
            alt: "Students assembling robotic cars from recycled materials",
            caption: "Building their first robotic cars",
          },
          {
            src: "/images/communities/tech-para-mi/first-robotic-car.jpg",
            alt: "A student working on a small robotic car",
            caption: "Making something move for the first time",
          },
          {
            src: "/images/communities/tech-para-mi/finished-robots.jpg",
            alt: "Students showing their completed robotic cars with a mentor",
            caption: "A first circuit brought to life",
          },
          {
            src: "/images/communities/tech-para-mi/student-certificate.jpg",
            alt: "A student holding a certificate and a robotic car alongside a mentor",
            caption: "Celebrating a completed build",
          },
          {
            src: "/images/communities/tech-para-mi/school-workshop-group.jpg",
            alt: "Students and volunteers together after a school workshop",
            caption: "Learning as a community",
          },
          {
            src: "/images/communities/tech-para-mi/robotics-community.jpg",
            alt: "Students displaying robotic cars with the volunteer team",
            caption: "Our robotics workshop community",
          },
        ],
      },
      {
        title: "Online Workshops",
        paragraphs: [
          "Our virtual workshops bring together students from different parts of Peru and Latin America to explore programming, electronics, and 3D design.",
          "Using platforms like Scratch and MakeCode Arcade, students create their own video games while learning concepts such as loops, conditionals, and variables. Other sessions introduce circuit design and Arduino simulations with Tinkercad, allowing students to experiment with electronics without needing physical components.",
          "Projects include an electronic piano, a digital climate station, a smart home, and games inspired by Pac-Man built with block-based programming.",
        ],
        naturalPhotos: true,
        photos: [
          {
            src: "/images/communities/tech-para-mi/online-electronics-intro.png",
            alt: "Online workshop introducing electronics",
            caption: "Discovering the world of electronics",
          },
          {
            src: "/images/communities/tech-para-mi/online-sensors-arduino.png",
            alt: "Instructor presenting sensors and an Arduino board",
            caption: "Getting to know sensors and Arduino",
          },
          {
            src: "/images/communities/tech-para-mi/online-community.png",
            alt: "Students and instructors together in an online session",
            caption: "Learning together across Latin America",
          },
          {
            src: "/images/communities/tech-para-mi/online-piano.png",
            alt: "An electronic piano circuit simulated in Tinkercad during an online workshop",
            caption: "Building a virtual electronic piano",
          },
        ],
      },
      {
        title: "What Our Students Say",
        paragraphs: [],
        naturalPhotos: true,
        photos: [
          {
            src: "/images/communities/tech-para-mi/testimonial-190.png",
            alt: "Gerard, 12: learning about Arduino, electronics, and robotics was useful and fun.",
          },
          {
            src: "/images/communities/tech-para-mi/testimonial-191.png",
            alt: "Gabriela, 15: her favorite class helped her build a virtual piano.",
          },
          {
            src: "/images/communities/tech-para-mi/testimonial-192.png",
            alt: "Emiliano, 15: he enjoyed exploring robotics and experimenting with projects in Tinkercad.",
          },
          {
            src: "/images/communities/tech-para-mi/testimonial-193.png",
            alt: "Diego, 12: he enjoyed the Arduino workshops and learning about circuits and robotics.",
          },
        ],
      },
      {
        title: "Our Volunteers",
        paragraphs: [
          "Behind the workshops is a team of volunteer instructors and mentors, many of them university students, who help plan lessons, prepare materials, and guide participants through their projects.",
          "A big part of the work involves finding simple ways to explain technical concepts and adapting activities to different ages and experience levels.",
        ],
        photoColumns: 4,
        photos: [
          {
            src: "/images/communities/tech-para-mi/volunteer-team.jpg",
            alt: "The Tech Para Mi volunteer team with a teacher",
            caption: "The people behind the workshops",
          },
          {
            src: "/images/communities/tech-para-mi/tinkercad-mentoring.jpg",
            alt: "A volunteer explaining a circuit simulation to students",
            caption: "Making electronics approachable",
          },
          {
            src: "/images/communities/tech-para-mi/mentoring-school-team.jpg",
            alt: "A volunteer guiding students during a school visit",
            caption: "Supporting every learning team",
          },
          {
            src: "/images/communities/tech-para-mi/volunteer-mentors.jpg",
            alt: "Volunteers helping a student assemble a robotic car",
            caption: "Guiding each build, step by step",
          },
        ],
      },
    ],
    url: "https://www.linkedin.com/company/tech-para-m%C3%AD/",
    name: "Tech Para Mí",
    role: "Founder & Director",
    description:
      "Tech Para M\u00ed is a nonprofit organization that introduces children and teenagers in Peru and Latin America to robotics, electronics, and programming through free, hands-on workshops. Through school visits and online sessions, students build robotic cars, create video games, and experiment with circuits. The initiative has reached over 300 students across 8 Latin American countries.",
    color: "sun",
    photoLabel: "Workshop / school visit photo",
    photo: techparami,
    photos: [
      "/images/communities/tech-para-mi/robotics-community.jpg",
      "/images/communities/tech-para-mi/school-workshop-group.jpg",
      "/images/communities/tech-para-mi/workshop-closing-group.jpg",
      "/images/communities/tech-para-mi/volunteer-team.jpg",
      "/images/communities/tech-para-mi/school-circuit-activity.jpg",
      "/images/communities/tech-para-mi/tinkercad-mentoring.jpg",
      "/images/communities/tech-para-mi/classroom-kahoot.jpg",
      "/images/communities/tech-para-mi/student-certificate.jpg",
      "/images/communities/tech-para-mi/first-robotic-car.jpg",
      "/images/communities/tech-para-mi/students-and-mentor.jpg",
      "/images/communities/tech-para-mi/school-learning-team.jpg",
      "/images/communities/tech-para-mi/mentoring-school-team.jpg",
    ],
  },
  {
    slug: "quantumhub-peru",
    instagram: "quantumhub.pe",
    url: "https://www.qhubperu.com/",
    name: "QuantumHub Perú",
    role: "Co-founder & Innovation Director",
    description:
      "A nonprofit organization developing Peru's emerging quantum computing ecosystem through educational programs, research initiatives, edtech products, and collaborations with academic and scientific institutions.",
    color: "blush",
    photoLabel: "Quantum Winter School community",
    photo: quantumhub,
    photos: [
      quantumhub,
      "/images/communities/quantumhub-peru/course-community.webp",
      "/images/communities/quantumhub-peru/community-gathering.webp",
      "/images/communities/quantumhub-peru/community-event.webp",
      "/images/communities/quantumhub-peru/winter-school-team.jpg",
      "/images/communities/quantumhub-peru/community-recognition.webp",
    ],
    highlights: [
      { value: "40+", label: "Active members" },
      { value: "5", label: "Departments working together" },
      { value: "In Spanish", label: "Quantum computing education" },
      { value: "Free", label: "Access to our learning platform" },
    ],
    sections: [
      {
        title: "How it started!",
        paragraphs: [
          "After completing The Coding School's two-semester introduction to quantum computing, I noticed that I was the only student in my cohort with a Spanish last name. That experience made me think about who had access to this field and how we could bring it closer to students in Peru.",
          "Together with my friends Adriana and Freddy, I co-founded QuantumHub Per\u00fa to make quantum computing more accessible, especially to high school students. At the time, opportunities in Peru were largely targeted toward postgraduate study, while many learning resources were available in other languages and we wanted to create an earlier entry point, in Spanish.",
        ],
      },
      {
        title: "Growing Quantum Community",
        paragraphs: [
          "QuantumHub has grown to more than 40 active members across five departments: Research, Academic, Innovation, Public Relations, and Community. Each team contributes in a different way, from teaching our flagship course, Introducci\u00f3n a la Computaci\u00f3n Cu\u00e1ntica, to collaborating with experts around the world on research and organizing local events that introduce more people to quantum technologies.",
        ],
        photoColumns: 4,
        photos: [
          {
            src: "/images/communities/quantumhub-peru/learning-platform.png",
            alt: "Online presentation of the QHub learning platform",
            caption: "Our learning platform",
          },
          {
            src: "/images/communities/quantumhub-peru/team-pucp.png",
            alt: "QuantumHub community members at PUCP",
            caption: "Together at PUCP",
          },
          {
            src: "/images/communities/quantumhub-peru/course-community.webp",
            alt: "QuantumHub participants gathered in a classroom",
            caption: "Our course community",
          },
          {
            src: "/images/communities/quantumhub-peru/course-presentation.jpg",
            alt: "Presenting QuantumHub's introductory quantum computing course",
            caption: "Sharing our introductory course",
          },
        ],
      },
      {
        title: "Our Efforts",
        paragraphs: [
          "We have organized admissions exams for our introductory course, graduation ceremonies, and events including the Quantum AI Summit and Quantum Winter School. We have also hosted online talks for Women's Day in Quantum, creating opportunities for students and the wider community to meet, learn, and explore the field together.",
        ],
        photos: [
          {
            src: "/images/communities/quantumhub-peru/community-gathering.webp",
            alt: "QuantumHub community gathered on a staircase at an event",
            caption: "Quantum AI Summit 2025",
          },
          {
            src: "/images/communities/quantumhub-peru/community-event.webp",
            alt: "QuantumHub participants and guests at a community event",
            caption: "Quantum Winter School 2026",
          },
          {
            src: "/images/communities/quantumhub-peru/winter-school-attendees.jpg",
            alt: "Quantum Winter School attendees and organizers gathered for a group photo",
            caption: "The Quantum Winter School community",
          },
        ],
      },
      {
        title: "Platform for Quantum Learning",
        paragraphs: [
          "As Innovation Department Director, I led the development of our QHub learning platform while receiving mentorship from senior members of the team. It was an enriching experience that helped me learn more about web applications and full-stack development while building something for our community.",
          "The platform takes inspiration from Duolingo's approach to learning, but focuses on quantum computing. It is completely free and in Spanish, with simulations and learning activities that help students explore quantum concepts in an approachable way.",
        ],
      },
    ],
  },
  {
    slug: "mision-tech",
    descriptionHighlight: "free, six-day program",
    date: { label: "August 2025", dateTime: "2025-08" },
    name: "Misi\u00f3n Tech",
    role: "Co-founder, Co-organizer & Mentor",
    url: "https://www.xn--misintech-86a.com/",
    description:
      "Peru's first robotics camp for high school students, which I co-founded and organized in collaboration with Astranova Perú. This free, six-day program gives students with little or no prior robotics experience a hands-on introduction to engineering through workshops, expert talks, mentorship, a robotics hackathon, and an innovation competition.",
    color: "coral",
    photoLabel: "Misi\u00f3n Tech participants at UTEC",
    photo: "/images/communities/mision-tech/camp-participants.png",
    highlights: [
      {
        value: "150+",
        label: "Applications from across Peru",
      },
      {
        value: "20+",
        label: "speakers, mentors, judges and volunteers",
      },
      {
        value: "7 months",
        label: "Planning and coordination",
      },
      {
        value: "6 days",
        label: "Hands-on camp at UTEC university",
      },
    ],
    sections: [
      {
        title: "Opening Doors to Robotics!",
        textPhoto: {
          src: "/images/communities/mision-tech/intro.jpg",
          alt: "Misi\u00f3n Tech participants and mentor building a robot together at UTEC",
        },
        paragraphs: [
          "We created Misi\u00f3n Tech to make hands-on STEM education more accessible, especially for students who don't usually have the chance to participate in programs like this. The camp grew out of a collaboration between Astranova Perú and Tech Para Mí, my nonprofit, with support from UTEC University, sponsorship from Peru's Ministry of Women and Vulnerable Populations, funding from Applying Consulting Peru and partnership with different local university organizations.",
        ],
      },
      {
        title: "Behind the Scenes",
        paragraphs: [
          "Bringing Misi\u00f3n Tech to life took around seven months of planning. Together with my co-organizer friend Natalia, we worked on the camp logistics, recruiting and interviewing mentors, reaching out to potential sponsors, buying electrical components, and meeting with the people and organizations that helped make the camp possible.",
          "I also helped prepare the technical side of the program, including designing the hackathon circuit and starter code. During the camp, I had the chance to mentor one of the teams as they built and tested their robot.",
        ],
        photos: [
          {
            src: "/images/communities/mision-tech/organizers-and-guest.png",
            alt: "With a robotics guest at UTEC",
            caption: "With a robotics guest at UTEC",
          },
          {
            src: "/images/communities/mision-tech/organizing-team.png",
            alt: "The team behind the camp",
            caption: "The team behind the camp",
          },
        ],
      },
      {
        title: "Workshops & Innovation",
        paragraphs: [
          "The program combined talks with practical workshops in electronics, programming and 3D design. Students also worked together on ideas for real-world problems and presented their proposals, learning to explain their thinking as well as build a prototype.",
        ],
        photos: [
          {
            src: "/images/communities/mision-tech/workshops-and-labs.png",
            alt: "Workshops and activities in the UTEC laboratories",
            caption: "Workshops and activities in the UTEC laboratories",
          },
          {
            src: "/images/communities/mision-tech/innovation-presentations.png",
            alt: "Teams presenting their proposed solutions",
            caption: "Teams presenting their proposed solutions",
          },
        ],
      },
      {
        title: "Robotics Hackathon",
        paragraphs: [
          "One of the highlights of the camp was a robotics hackathon where students worked in teams to build and program their own robots. The goal was to pop an opposing team's balloon while protecting their own, so teams had to think about their robot's movement, design, and strategy.",
          "I was in charge of designing the challenge rules, along with a basic circuit and starter code using an Arduino Uno, Bluetooth module, and L298N motor driver. Each team then had to figure out the motor directions, adjust the code, and connect the components to get their robot moving. During the hackathon, I also got to mentor a team, which was so much fun!",
        ],
        photos: [
          {
            src: "/images/communities/mision-tech/esp32-motor-circuit.png",
            alt: "Motor wiring reference from the challenge handout (Arduino Uno and Bluetooth version)",
            caption:
              "Motor wiring reference from the challenge handout (Arduino Uno and Bluetooth version)",
          },
          {
            src: "/images/communities/mision-tech/hackathon-teams.png",
            alt: "Teams assembling and testing their robots",
            caption: "Teams assembling and testing their robots",
          },
          {
            src: "/images/communities/mision-tech/robot-challenge.png",
            alt: "The robots and teams during the final challenge",
            caption: "The robots and teams during the final challenge",
          },
        ],
        videos: [
          {
            type: "mp4",
            src: "/videos/mision-tech/hackathon-building.mp4",
            poster: "/videos/mision-tech/hackathon-building.jpg",
            title: "Building robots during the hackathon",
          },
          {
            type: "mp4",
            src: "/videos/mision-tech/robot-challenge-demo.mp4",
            poster: "/videos/mision-tech/robot-challenge-demo.jpg",
            title: "The balloon-popping robot challenge",
          },
        ],
      },
      {
        title: "Innovation Bootcamp",
        paragraphs: [
          "During the innovation bootcamp, participants worked in teams to choose one of the proposed challenges, such as applying robotics to healthcare, the environment, or safety. With support from their mentors, they used what they had learned during the camp to develop an idea for a technological solution.",
          "We brought together judges from different institutions across the region, and each team presented its proposal to the panel. It was a chance for students to explain the problem they wanted to solve, share their ideas, and practice communicating how their technology could help.",
        ],
        photos: [
          {
            src: "/images/communities/mision-tech/innovation-healthcare.png",
            alt: "Participants presenting a healthcare proposal at the innovation bootcamp",
            caption: "Presenting a healthcare solution",
          },
          {
            src: "/images/communities/mision-tech/innovation-wayra.png",
            alt: "A team presenting its Wayra GPS bracelet proposal at UTEC",
            caption: "The Wayra bracelet proposal",
          },
          {
            src: "/images/communities/mision-tech/innovation-problem.png",
            alt: "Participants explaining the social problem behind their proposed solution",
            caption: "Starting with a problem worth solving",
          },
          {
            src: "/images/communities/mision-tech/innovation-asha.png",
            alt: "A participant presenting the ASHA proposal during the innovation bootcamp",
            caption: "Presenting ASHA to the panel",
          },
        ],
      },
    ],
    photos: [
      "/images/communities/mision-tech/closing-ceremony.png",
      "/images/communities/mision-tech/camp-identity.png",
      "/images/communities/mision-tech/camp-participants.png",
    ],
    press: [
      {
        name: "Agencia Andina",
        url: "https://andina.pe/agencia/noticia-atencion-escolares-asi-pueden-postular-al-campamento-robotica-mision-tech-1036705.aspx",
      },
      {
        name: "Diario UNO",
        url: "https://diariouno.pe/2025/07/10/abren-convocatoria-para-el-primer-campamento-de-robotica-peruano-mision-tech/",
      },
    ],
  },
];
import type { ArticleSection } from "./projects";
