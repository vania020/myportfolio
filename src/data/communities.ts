const techparami = "/images/communities/tech-para-mi/school-workshop.jpg";
const quantumhub = "/images/communities/quantumhub-peru/winter-school-team.jpg";
const misiontech = "/images/communities/mision-tech/camp.jpg";

export type Initiative = {
  slug: string;
  name: string;
  role: string;
  description: string;
  color: "sun" | "coral" | "blush";
  photoLabel: string;
  photo?: string;
  /** Extra photos for the gallery on the home page. Add more here! */
  photos?: string[];
  url?: string;
  sections?: ArticleSection[];
  highlights?: { value: string; label: string }[];
  impactNote?: string;
  documentation?: string;
};

export const initiatives: Initiative[] = [
  {
    slug: "tech-para-mi",
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
        title: "Accessible, hands-on STEM learning",
        paragraphs: [
          "Tech Para Mí is a youth-led initiative offering free robotics, electronics and programming workshops for children and teenagers aged 9–17. Activities combine virtual sessions with visits to schools in communities with limited educational resources.",
          "Students build robots from recycled materials, explore electronics with Tinkercad and create their own video games. The workshops emphasize teamwork, creative thinking and learning by making.",
        ],
      },
      {
        title: "School visits and workshops",
        paragraphs: [
          "We brought robotics, video-game and electronics workshops to María Reina, Los Jardines de Manchay, Santísima Virgen del Chapi and San Pablo Manchay, creating opportunities for students to learn by building.",
          "The organization also collaborated with Astranova Perú on Misión Tech, a free robotics camp combining technical workshops, challenges and leadership activities.",
        ],
      },
    ],
    url: "https://www.linkedin.com/company/tech-para-m%C3%AD/",
    name: "Tech Para Mí",
    role: "Founder & Director",
    description:
      "A youth-led initiative bringing free robotics, electronics, and programming workshops to students with limited access to STEM education in Peru and Latin America.",
    color: "sun",
    photoLabel: "Workshop / school visit photo",
    photo: techparami,
    photos: [
      techparami,
      "/images/communities/tech-para-mi/class.jpg",
      "/images/communities/tech-para-mi/recycled-robots.jpg",
      "/images/communities/tech-para-mi/electronics.jpg",
      "/images/communities/tech-para-mi/jardines-de-manchay.jpg",
      "/images/communities/tech-para-mi/virgen-del-chapi.jpg",
      "/images/communities/tech-para-mi/san-pablo-manchay.jpg",
      "/images/communities/tech-para-mi/video-game-workshop.jpg",
    ],
  },
  {
    slug: "quantumhub-peru",
    url: "https://www.qhubperu.com/",
    name: "QuantumHub Perú",
    role: "Co-founder & Innovation Director",
    description:
      "A community working to make quantum computing more accessible through educational resources, research, and collaborative initiatives.",
    color: "blush",
    photoLabel: "QuantumHub community photo or logo",
    photo: quantumhub,
    photos: [quantumhub, "/images/communities/quantumhub-peru/community-recognition.webp"],
  },
  {
    slug: "mision-tech",
    sections: [
      {
        title: "Robotics immersion at UTEC",
        paragraphs: [
          "Misión Tech brings together Astranova Perú and Tech Para Mí to expand access to STEM education. Announced as Peru's first robotics immersion camp for high-school students, the program combines hands-on engineering with teamwork and innovation, supported by the Universidad de Ingeniería y Tecnología (UTEC).",
          "The 2025 edition offered a free, week-long in-person experience at UTEC in Lima for students aged 15–18 from public and private schools across Peru, including fourth- and fifth-year students and recent graduates. No prior engineering or programming experience was required.",
        ],
        bullets: [
          "Expert talks introducing robotics, artificial intelligence and leadership.",
          "Practical workshops in 3D design, electronics and programming.",
          "An innovation bootcamp developing engineering solutions to real problems.",
          "A collaborative hackathon to design, build and program a working robot.",
        ],
      },
      {
        title: "Learning through shared challenges",
        paragraphs: [
          "Explore, build and innovate from scratch: students learn through practical challenges, share ideas and turn their new skills into working prototypes.",
        ],
      },
    ],
    url: "https://www.xn--misintech-86a.com/",
    name: "Misión Tech",
    role: "Co-founder / Project Leader",
    description:
      "A free robotics immersion camp created by Astranova Perú and Tech Para Mí, supported by UTEC, connecting high school students with hands-on engineering and innovation.",
    color: "coral",
    photoLabel: "Robotics camp photo",
    photo: misiontech,
    photos: [
      misiontech,
      "/images/communities/mision-tech/challenge.jpg",
      "/images/communities/mision-tech/hackathon.jpg",
    ],
  },
];
import type { ArticleSection } from "./projects";
