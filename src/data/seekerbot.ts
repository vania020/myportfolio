/**
 * SeekerBot page content
 *
 * - Text lives in the plain strings below; change it freely.
 * - Each photo is one line: photo(image, "description", "optional caption").
 *   To swap a photo, put it in public/images/projects/seekerbot/ and change its path below.
 * - General details, technologies and documentation live in projects.ts.
 * - `heroPhoto` is the detail-page photo; `cover` in projects.ts is the card photo.
 * - Video and STL download links live in `links` below.
 */
const hero = "/images/projects/seekerbot/hero.png";
const rockerBogie = "/images/projects/seekerbot/rocker-bogie.jpg";
const armPhoto = "/images/projects/seekerbot/arm-photo.png";
const armSketch = "/images/projects/seekerbot/arm-sketch.png";
const roverSketch = "/images/projects/seekerbot/rover-sketch.png";
const tinkercadParts = "/images/projects/seekerbot/tinkercad-parts.png";
const tinkercadAssembly = "/images/projects/seekerbot/tinkercad-assembly.png";
const printedParts = "/images/projects/seekerbot/printed-parts.jpg";
const printer = "/images/projects/seekerbot/printer.jpg";
const circuit1 = "/images/projects/seekerbot/circuit1.png";
const sensors = "/images/projects/seekerbot/sensors.png";
const circuit2 = "/images/projects/seekerbot/circuit2.png";
const armApp = "/images/projects/seekerbot/arm-app.png";
const sensorBlocks = "/images/projects/seekerbot/sensor-blocks.png";
const controlApp = "/images/projects/seekerbot/control-app.png";
const armPieces = "/images/projects/seekerbot/arm-pieces.jpg";
import type { Media, Video } from "./projects";

const photo = (src: string, alt: string, caption?: string): Media =>
  caption ? { src, alt, caption } : { src, alt };

export const links = {
  demoVideo: "https://youtu.be/_yPeMg6EOUQ",
  armModel: "/models/seekerbot/robotic-arm-final.stl",
};

export const videos = {
  roboticArm: {
    type: "mp4",
    src: "/videos/seekerbot/robotic-arm-demo.mp4",
    poster: "/videos/seekerbot/robotic-arm-demo.jpg",
    title: "Testing the robotic arm",
  },
  sensors: {
    type: "mp4",
    src: "/videos/seekerbot/sensor-app-demo.mp4",
    poster: "/videos/seekerbot/sensor-app-demo.jpg",
    title: "Environmental sensor readings in the mobile app",
  },
  driving: {
    type: "mp4",
    src: "/videos/seekerbot/wireless-driving-demo.mp4",
    poster: "/videos/seekerbot/wireless-driving-demo.jpg",
    title: "Driving SeekerBot from the phone",
  },
  outdoors: {
    type: "mp4",
    src: "/videos/seekerbot/rover-outdoor-demo.mp4",
    poster: "/videos/seekerbot/rover-outdoor-demo.jpg",
    title: "SeekerBot outdoors on rocky ground",
  },
} satisfies Record<string, Video>;

export const intro = {
  paragraphs: [
    "I built SeekerBot with my high school friend Ariana for an international space contest for highschoolers, but we ended up working on it even after applying.",
    "We started with very little robotics experience and learned most from Youtube videos and online forums.",
  ],
  contributions: [
    "3D design of chassis and robotic arm",
    "Circuit research and power distribution",
    "Circuit assembly and mobile application development",
  ],
  integrationNote:
    "This was one of our first robotics projects, and we did not yet know how to integrate all the systems into a single controller. We developed arm movement, sensor readings and rover control separately, using different controllers and separate apps. It helped us test each subsystem, while showing us how much we still had to learn about integration.",
};

export const design = {
  note: "Some parts of the Rocker-Bogie suspension and robotic arm were based on STL models found online, but were heavily modified to fit SeekerBot's dimensions, components, and available screws. For example, the suspension arms were shortened, and hollow cylindrical mounts were added to accommodate the DC motors.",
  chassis: {
    title: "Chassis & Suspension",
    text: "SeekerBot rolls on six wheels with a Rocker-Bogie suspension system, similar to those used on Mars rovers. Its pivoting arms help the wheels adapt to uneven terrain while keeping the rover stable. The chassis features an open-frame design, measuring approximately 23 × 15 cm, with no top cover. Its structure provides space for the batteries, circuit boards, and wiring, while incorporating mounting points.",
  },
  roboticArm: {
    title: "Robotic arm",
    text: "SeekerBot features a 4-DOF robotic arm with four joints: base, shoulder, elbow, and gripper. The base rotates up to 180°, the shoulder raises and lowers the arm, the elbow extends its reach, and the gripper opens and closes to grasp or release objects. Each joint is controlled by an SG90 servomotor.",
  },
  photos: {
    armModel: photo(
      "/images/projects/seekerbot/robotic-arm-diagram.png",
      "3D model of the robotic arm with labeled joints",
      "Robotic arm model and its joints.",
    ),
    rockerBogie: photo(
      rockerBogie,
      "SeekerBot side view with the rocker and bogie labeled",
      "Rocker + bogie: each side pivots to follow the terrain",
    ),
    armPhoto: photo(
      armPhoto,
      "Robotic arm with base, arm, forearm and gripper labeled",
      "The four parts of the arm",
    ),
    armSketch: photo(
      armSketch,
      "Hand-drawn sketch of the robotic arm structure with measurements",
      "First sketch of the arm, with measurements",
    ),
    roverSketch: photo(
      roverSketch,
      "Hand-drawn sketches of the rover chassis, motor mounts and top view",
      "Chassis + motor mount sketches",
    ),
    tinkercadParts: photo(
      tinkercadParts,
      "Tinkercad dashboard showing the modeled SeekerBot parts",
      "All the parts modeled in Tinkercad",
    ),
    tinkercadAssembly: photo(
      tinkercadAssembly,
      "Final SeekerBot assembly modeled in Tinkercad",
      "Final assembly in Tinkercad",
    ),
  },
};

export const build = {
  text: "Each mechanical component was first sketched and then modeled in Tinkercad, taking into account real-world dimensions and the space needed for servomotors, circuit boards, breadboards, and screws. The parts were then 3D printed using PLA filament and a Flashforge Creator Pro, considering support structures and tolerance. Printing took approximately two weeks, including reprints due to filament jams and bed adhesion issues.",
  photos: [
    photo(printer, "Flashforge Creator Pro 3D printer", "Our Flashforge Creator Pro"),
    photo(
      printedParts,
      "Green PLA 3D-printed rover parts laid out on a table",
      "Freshly printed PLA parts",
    ),
    photo(armPieces, "3D-printed robotic arm pieces and gripper", "Arm + gripper pieces"),
  ],
};

export const electronics = {
  text: "SeekerBot's electronics were divided into two main circuits: one for the rover's movement, camera, and sensors, and another for the robotic arm. Each circuit had its own power supply, with the components connected according to their voltage and power requirements.",
  components: [
    { name: "Arduino Uno", purpose: "Reads environmental sensors" },
    { name: "Arduino Nano", purpose: "Controls the robotic arm" },
    { name: "ESP32-CAM", purpose: "Streams video and receives Wi-Fi commands" },
    { name: "L298N motor driver", purpose: "Controls the DC motors" },
    { name: "Geared DC motors", purpose: "Drive the rover's wheels" },
    { name: "SG90 servomotors", purpose: "Move the robotic arm's joints" },
    { name: "HC-SR04 Ultrasonic distance sensor", purpose: "Measures distance to obstacles" },
    { name: "DHT11", purpose: "Measures temperature and humidity" },
    { name: "MQ-135", purpose: "Monitors air quality" },
    { name: "HC-05 Bluetooth module", purpose: "Sends sensor readings to the mobile app" },
    { name: "HC-06 Bluetooth module", purpose: "Receives robotic arm commands" },
    { name: "NEO-6M GPS module", purpose: "Tracks location" },
    { name: "18650 lithium-ion batteries", purpose: "Power the circuits" },
    { name: "Breadboards", purpose: "Connect components during assembly" },
    { name: "Jumper wires", purpose: "Carry signals and power between components" },
  ],
  circuits: [
    {
      title: "Circuit 1: Movement, Camera & Sensors",
      text: "This circuit uses an Arduino Uno to read environmental sensors, an ESP32-CAM for video streaming and Wi-Fi control, and an L298N motor driver to control the six DC motors. Bluetooth and GPS modules were also included for communication and location tracking.",
      power:
        "Four 3.7V lithium-ion batteries connected in series provided a nominal supply voltage of 14.8V.",
      diagram: photo(
        circuit1,
        "Movement, camera and sensor circuit wiring",
        "Movement, camera and sensors wiring.",
      ),
    },
    {
      title: "Circuit 2: Robotic Arm",
      text: "A separate Arduino Nano controls the four SG90 servomotors responsible for the arm's movement. An HC-06 Bluetooth module receives commands from the mobile app, allowing each joint to be controlled independently.",
      power:
        "This circuit was powered by two 3.7V lithium-ion batteries connected in series, providing a nominal voltage of 7.4V.",
      diagram: photo(
        circuit2,
        "Arduino Nano, Bluetooth and robotic arm servo wiring",
        "Robotic arm wiring.",
      ),
    },
  ],
  sensors: photo(
    sensors,
    "DHT11, HC-SR04 ultrasonic and MQ-135 sensors",
    "DHT11 · ultrasonic · MQ-135",
  ),
};

export const programming = {
  arduino: {
    title: "Arduino Programming",
    text: "Using the Arduino IDE, the rover was programmed to move forward, backward, left, and right, adjust the angles of the robotic arm's servomotors, and output sensor readings in a specific sequence so the mobile app could correctly interpret them.",
  },
  wifi: {
    title: "Rover Control",
    text: "The ESP32-CAM was set up as a WebSocket server on a local Wi-Fi network, allowing the rover to be controlled through a web interface with directional arrows and a speed slider. The interface also showed live footage from the camera to navigate the rover while seeing its surroundings in real time.",
  },
  android: {
    title: "App development",
    text: "Two Android apps were developed using MIT App Inventor, which combines a drag-and-drop interface designer with block-based programming. Both apps can be installed on Android devices through APK files.",
    sensorTitle: "Sensor Monitoring App",
    sensorText:
      "The app receives sensor data from Arduino via Bluetooth as comma-separated values. These are split into a list, and each reading is assigned to its corresponding display. For air quality, conditional blocks change the indicator's color based on the AQI range, making it easier to tell whether the air quality is good, moderate, or unhealthy.",
    armTitle: "Robotic Arm Control App",
    armText:
      "The Robotic Arm Control App uses four sliders, one for each servomotor, to independently adjust the base rotation, shoulder, elbow, and gripper. Commands are sent to the Arduino Nano via Bluetooth.",
  },
  photos: {
    arduinoMotors: photo(
      "/images/projects/seekerbot/arduino-motors.png",
      "Arduino IDE code for rover motor control",
      "Motor control in the Arduino IDE",
    ),
    arduinoSensors: photo(
      "/images/projects/seekerbot/arduino-sensors.png",
      "Arduino IDE code for environmental sensor readings",
      "Sensor readings in the Arduino IDE",
    ),
    controlReal: photo(
      "/images/projects/seekerbot/control-real.png",
      "Controlling SeekerBot outdoors from the Wi-Fi web interface",
      "Testing movement and the live camera feed on a phone",
    ),
    controlApp: photo(
      controlApp,
      "Phone screenshot of the rover control web app with arrow buttons and speed slider",
      "Rover controls over Wi-Fi",
    ),
    armApp: photo(
      armApp,
      "MIT App Inventor designer for the robotic arm control app",
      "Arm control app in MIT App Inventor",
    ),
    sensorBlocks: photo(
      sensorBlocks,
      "MIT App Inventor blocks for the sensor app",
      "Blocks for the sensor readings app",
    ),
  },
};

export const challenges = {
  lessons: [
    {
      title: "3D Printing & Assembly",
      video: null,
      photo: photo(
        "/images/projects/seekerbot/printing-failures.jpg",
        "Green PLA parts with failed prints and support issues",
        "Failed prints and parts that needed reprinting",
      ),
      text: "Some parts didn't fit as expected, so adjustments had to be made using a drill, sandpaper, and even heated needles. There were also issues with bed adhesion and printing supports, which meant modifying STL files and reprinting several pieces.",
    },
    {
      title: "Power Distribution & Wiring",
      video: null,
      photo: photo(
        "/images/projects/seekerbot/battery-solder.jpg",
        "Working on the battery holder wires during assembly",
        "Adjusting the battery pack wiring",
      ),
      text: "Finding the right power supply for the different components took several tests. Wires also broke during assembly, requiring repeated soldering and circuit adjustments.",
    },
    {
      title: "Bluetooth Communication",
      video: {
        type: "mp4",
        src: "/videos/seekerbot/bluetooth-debugging.mp4",
        title: "Testing Bluetooth communication",
      } satisfies Video,
      photo: null,
      text: "The sensor app initially received data out of order or with delays, while the robotic arm sliders didn't always match the expected servo angles. Getting the data transmission and controls to work properly took additional debugging.",
    },
    {
      title: "GPS Module",
      video: null,
      photo: photo(
        "/images/projects/seekerbot/gps-unreadable-output.png",
        "Arduino Serial Monitor showing unreadable GPS output",
        "Unreadable GPS data in the Arduino Serial Monitor",
      ),
      text: "The NEO-6M GPS module struggled to connect to satellites and sometimes returned unreadable data instead of coordinates, making location tracking one of the more challenging features.",
    },
  ],
};

export const heroPhoto = photo(
  hero,
  "Finished SeekerBot rover with green 3D-printed rocker-bogie frame, six wheels and electronics on top",
);

// Gallery = all the photos above, in the order they appear. Add or remove lines freely.
export const gallery: Media[] = [
  photo(
    "/images/projects/seekerbot/funteam.png",
    "The SeekerBot team working together with the rover and laptop",
    "Working on SeekerBot",
  ),
  heroPhoto,
  photo(
    "/images/projects/seekerbot/rover-outdoor.jpg",
    "SeekerBot and its robotic arm on rocky ground",
    "The assembled rover outdoors.",
  ),
  photo(
    "/images/projects/seekerbot/electronics-bench-test.jpg",
    "Arduino, protoboard, ultrasonic sensor and servo wiring on SeekerBot",
    "Bench testing the electronics on the printed chassis.",
  ),
  ...Object.values(design.photos),
  ...build.photos,
  electronics.sensors,
  ...Object.values(programming.photos),
  ...challenges.lessons.flatMap((lesson) => (lesson.photo ? [lesson.photo] : [])),
];
