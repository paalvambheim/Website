import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const content = {
  en: {
    ui: {
      eyebrow: "Interactive winter cabin",
      introLabel: "Overview",
      heroTitle: "Developer, designer, and calm problem-solver.",
      heroSummary:
        "An interactive winter cabin for Pål Djuve Vambheim. Rotate around the exterior, inspect the objects on the walls, and open each detail from inside the scene itself.",
      legendLabel: "Cabin hotspots",
      legend: [],
      sceneStatusLabel: "Explore the cabin",
      sceneTitle: "Rotate the cabin and inspect the objects around the walls.",
      sceneHint:
        "Click the name sign for the resume, the lantern for a short profile, the skis for tools, or the ship for the thesis.",
      hotspotNames: {
        resume: "Name sign",
        about: "Lantern by the door",
        thesis: "Rotor-sail ship on the pond",
        skills: "Skis on the side wall",
      },
      dockLabel: "Shortcuts",
      dockText:
        "Built for desktop and mobile, with bilingual copy, interactive camera focus, and a retro side quest tucked beside the porch.",
      resumeShortcut: "Open resume",
      gameShortcut: "Play mini-game",
      githubShortcut: "GitHub profile",
      themeDay: "Switch to night",
      themeNight: "Switch to day",
      modalKickerResume: "Resume",
      modalKickerGithub: "GitHub",
      modalKickerAbout: "Profile",
      modalKickerThesis: "Master thesis",
      modalKickerSkills: "Toolkit",
      resumeTitle: "Resume",
      aboutTitle: "Around the cabin",
      thesisTitle: "Rotor sails and maritime UI",
      skillsTitle: "Skis and stack",
      aboutText:
        "Pål combines interaction design, product thinking, and implementation. He tends to work best where design conversations and production code meet.",
      aboutBullets: [
        "Comfortable across frontend, backend, database work, and Azure infrastructure.",
        "Experienced with Scrum and with translating design research into technical decisions.",
        "Motivated by intuitive web and mobile applications that solve real user needs.",
      ],
      thesisText:
        "The pond installation nods to Pål's NTNU master thesis on interfaces for sail propulsion on cargo ships. The small model uses rotor sails as a direct reference to that work.",
      thesisBullets: [
        "User-centred design from interviews through prototyping and usability testing.",
        "Interface concepts for monitoring and controlling sail propulsion in a bridge environment.",
        "Built around OpenBridge 6.0 and ISO 9241-11 usability thinking.",
      ],
      skillsText:
        "The skis work as a compact inventory of the tools and working style behind the projects.",
      statCards: [
        ["Current role", "Consultant at Bouvet Norge AS"],
        ["Education", "MSc Informatics + BSc Digital Business Development"],
        ["Core stack", "React, TypeScript, Node, Azure, Flutter"],
        [
          "Focus",
          "Interaction design, frontend architecture, product-facing delivery",
        ],
      ],
      sections: {
        summary: "Summary",
        strengths: "Strengths",
        experience: "Selected project experience",
        education: "Education",
        certifications: "Certifications",
        courses: "Courses",
        skills: "Technology and methods",
        industries: "Industry experience",
        roles: "Current roles",
        languages: "Languages",
      },
    },
    resume: {
      summary:
        "Pål Djuve Vambheim is a developer with an MSc in Informatics from NTNU, specializing in Interaction Design, Games, and Learning Technology, and a BSc in Digital Business Development from the same university. He works across frontend, backend, database, and Azure-oriented delivery, with particular strength at the boundary between design and engineering.",
      strengths: [
        "Strong experience with modern web development and design-led product work.",
        "Comfortable as a bridge between design teams and developers in Scrum projects.",
        "Hands-on with JavaScript, TypeScript, Python, Dart, React, Next.js, SQL, Flutter, .NET, FastAPI, and Azure.",
        "Project experience spans energy, proptech, tourism, maritime UX, and finance.",
      ],
      roles: ["Fullstack developer", "Azure developer"],
      languages: ["Norwegian", "English"],
      industries: [
        "Maritime industry",
        "Finance and insurance",
        "Business services",
        "Power and energy",
      ],
      education: [
        {
          title:
            "MSc Informatics, Interaction Design, Games and Learning Technology",
          place: "NTNU",
          date: "Aug 2023 - Jun 2025",
        },
        {
          title: "BSc Digital Business Development",
          place: "NTNU",
          date: "Aug 2020 - Jun 2023",
        },
      ],
      certifications: [
        {
          title: "AZ-900: Microsoft Azure Fundamentals",
          meta: "Microsoft / Pearson VUE, Aug 2025",
        },
        {
          title: "AZ-204: Developing Solutions for Microsoft Azure",
          meta: "Pearson VUE, Oct 2025",
        },
      ],
      courses: [
        "Presentation technique: communicating with clarity (Sep 2025)",
        "AZ-204 Developing Solutions for Microsoft Azure (Oct 2025)",
        "Unit testing for stronger system development practice (Dec 2025)",
      ],
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Dart",
        ".NET",
        "Flutter",
        "FastAPI",
        "Express",
        "REST API",
        "Swagger",
        "Vitest",
        "Zod",
        "Azure",
        "Azure SQL Database",
        "Azure Blob Storage",
        "SQL",
        "Figma",
        "Miro",
        "Pulumi",
        "Scrum",
      ],
      experience: [
        {
          title: "Innovasjon Norge - Visit Norway Content API",
          company: "Bouvet project",
          date: "Dec 2025 - Mar 2026",
          role: "Backend developer and Azure developer",
          bullets: [
            "Built a legacy API in Express and Swagger so customers could keep using the old Simpleview request structure while content moved to Sanity CMS.",
            "Implemented transformation layers with TypeScript and Zod to convert between flat Simpleview payloads and Sanity's deeper models.",
            "Added routing, Vitest coverage, and mocking around the API to protect both behavior and route compatibility.",
            "Extended Azure firewall setup with Pulumi, locking web app and database traffic behind controlled IP ranges and network rules.",
          ],
        },
        {
          title: "Wenn Property AS - Damage remediation reporting",
          company: "Bouvet project",
          date: "Jun 2024 - Jul 2024",
          role: "Database designer, architect, and frontend developer",
          bullets: [
            "Helped shape the data model and ER diagram for an AI-assisted reporting application in the housing sector.",
            "Set up Azure Blob Storage for image uploads and connected the frontend flow to backend and storage services.",
            "Built reusable Next.js components in TypeScript, CSS, and MUI as part of the frontend foundation.",
            "Worked as the bridge between design and backend teams, translating field insight into technical requirements.",
          ],
        },
        {
          title: "Lyse Energi - Lyse Forbruks-app",
          company: "Bouvet summer project",
          date: "Jun 2023 - Jul 2023",
          role: "Fullstack developer",
          bullets: [
            "Extended an existing Flutter and .NET application with support for solar panels, inverters, and EV chargers via external APIs.",
            "Connected Enode data into the app so users could compare consumption with generated power and inspect savings.",
            "Added documentation and clearer structure to improve the future developer experience in the codebase.",
          ],
        },
        {
          title: "OpenBridge - Designing User Interfaces for Sail Propulsion",
          company: "Master thesis",
          date: "Aug 2024 - Jun 2025",
          role: "Interaction designer and researcher",
          bullets: [
            "Led a full user-centred design process for cargo ship interfaces that monitor and control sail propulsion.",
            "Interviewed ship captains, created prototypes in Figma, specified user requirements, and evaluated usability against those requirements.",
            "Worked within OpenBridge 6.0 and ISO 9241-11:2018 guidance to design high-usability interfaces with low cognitive load.",
          ],
        },
        {
          title: "Finco AS - Innovative investment application",
          company: "Bachelor project",
          date: "Jan 2023 - Jun 2023",
          role: "Data engineer and frontend developer",
          bullets: [
            "Built a Python module that processed CSV-based financial data with pandas and applied Finco's prediction formulas.",
            "Connected the model flow to a database using a MySQL connector.",
            "Developed React-based frontend views including an admin dashboard and chart-driven stock history visualizations.",
          ],
        },
      ],
    },
  },
  no: {
    ui: {
      introLabel: "Oversikt",
      heroTitle: "Utvikler, designer og rolig problemløser.",
      heroSummary:
        "En interaktiv vinterhytte for Pål Djuve Vambheim. Roter rundt utsiden, undersøk gjenstandene på veggene og åpne detaljene direkte fra selve scenen.",
      legendLabel: "Hotspots på hytta",
      legend: [],
      sceneStatusLabel: "Utforsk hytta",
      sceneTitle: "Roter hytta og undersøk gjenstandene rundt veggene.",
      sceneHint:
        "Klikk navneskiltet for CV-en, lykten for en kort profil, skiene for verktøy eller skipet for masteroppgaven.",
      hotspotNames: {
        resume: "Navneskilt",
        about: "Lykt ved døra",
        thesis: "Rotorseilskipet i dammen",
        skills: "Skiene på sideveggen",
      },
      dockLabel: "Snarveier",
      dockText:
        "Laget for desktop og mobil, med to språk, kamerafokus på klikkbare objekter og et lite arkadeoppdrag ved siden av verandaen.",
      resumeShortcut: "Åpne CV",
      gameShortcut: "Spill mini-spill",
      githubShortcut: "GitHub-profil",
      themeDay: "Bytt til natt",
      themeNight: "Bytt til dag",
      modalKickerResume: "CV",
      modalKickerGithub: "GitHub",
      modalKickerAbout: "Profil",
      modalKickerThesis: "Masteroppgave",
      modalKickerSkills: "Verktøy",
      resumeTitle: "CV",
      aboutTitle: "Rundt hytta",
      thesisTitle: "Rotorseil og maritimt grensesnitt",
      skillsTitle: "Ski og stack",
      aboutText:
        "Pål kombinerer interaksjonsdesign, produktforståelse og implementasjon. Han fungerer best der designsamtaler og produksjonskode møtes.",
      aboutBullets: [
        "Komfortabel med frontend, backend, databasearbeid og Azure-infrastruktur.",
        "Erfaring med Scrum og med å oversette designinnsikt til tekniske beslutninger.",
        "Motiveres av intuitive web- og mobilapplikasjoner som løser reelle brukerbehov.",
      ],
      thesisText:
        "Dammen med skipet er et nikk til Påls masteroppgave ved NTNU om grensesnitt for seilfremdrift på lasteskip. Den lille modellen bruker rotorseil som en direkte referanse til dette arbeidet.",
      thesisBullets: [
        "User-centred design fra intervjuer via prototyper til brukbarhetstesting.",
        "Grensesnittkonsepter for å overvåke og styre seilfremdrift i bromiljø.",
        "Utviklet med OpenBridge 6.0 og ISO 9241-11 som brukbarhetsramme.",
      ],
      skillsText:
        "Skiene fungerer som en kompakt oversikt over verktøyene og arbeidsmåten bak prosjektene.",
      statCards: [
        ["Nåværende rolle", "Konsulent i Bouvet Norge AS"],
        [
          "Utdanning",
          "Master i informatikk + bachelor i digital forretningsutvikling",
        ],
        ["Kjernestack", "React, TypeScript, Node, Azure, Flutter"],
        [
          "Fokus",
          "Interaksjonsdesign, frontend-arkitektur og produktnær levering",
        ],
      ],
      sections: {
        summary: "Sammendrag",
        strengths: "Styrker",
        experience: "Utvalgt prosjekterfaring",
        education: "Utdanning",
        certifications: "Sertifiseringer",
        courses: "Kurs",
        skills: "Teknologi og metoder",
        industries: "Bransjeerfaring",
        roles: "Aktuelle roller",
        languages: "Språk",
      },
    },
    resume: {
      summary:
        "Pål Djuve Vambheim er utvikler med mastergrad i Informatikk fra NTNU, med spesialisering i Interaksjonsdesign, Spill og Læringsteknologi, samt bachelorgrad i Digital forretningsutvikling fra samme universitet. Han arbeider på tvers av frontend, backend, database og Azure-leveranser, og er særlig sterk i skjæringspunktet mellom design og utvikling.",
      strengths: [
        "Solid erfaring med moderne webutvikling og produktarbeid med tydelig designfokus.",
        "Trygg som bindeledd mellom designteam og utviklere i Scrum-prosjekter.",
        "Praktisk erfaring med JavaScript, TypeScript, Python, Dart, React, Next.js, SQL, Flutter, .NET, FastAPI og Azure.",
        "Prosjekterfaring fra energi, proptech, reiseliv, maritim UX og finans.",
      ],
      roles: ["Fullstack-utvikler", "Azure-utvikler"],
      languages: ["Norsk", "Engelsk"],
      industries: [
        "Maritim industri",
        "Finans og forsikring",
        "Forretningsmessig tjenesteyting",
        "Strøm og energi",
      ],
      education: [
        {
          title:
            "Master i informatikk, interaksjonsdesign, spill og læringsteknologi",
          place: "NTNU",
          date: "aug 2023 - jun 2025",
        },
        {
          title: "Bachelor i digital forretningsutvikling",
          place: "NTNU",
          date: "aug 2020 - jun 2023",
        },
      ],
      certifications: [
        {
          title: "AZ-900: Microsoft Azure Fundamentals",
          meta: "Microsoft / Pearson VUE, aug 2025",
        },
        {
          title: "AZ-204: Developing Solutions for Microsoft Azure",
          meta: "Pearson VUE, okt 2025",
        },
      ],
      courses: [
        "Presentasjonsteknikk: kunsten å formidle (sep 2025)",
        "AZ-204 Developing Solutions for Microsoft Azure (okt 2025)",
        "Systemutviklerskolen: unit testing for høyere kvalitet (des 2025)",
      ],
      skills: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Dart",
        ".NET",
        "Flutter",
        "FastAPI",
        "Express",
        "REST API",
        "Swagger",
        "Vitest",
        "Zod",
        "Azure",
        "Azure SQL Database",
        "Azure Blob Storage",
        "SQL",
        "Figma",
        "Miro",
        "Pulumi",
        "Scrum",
      ],
      experience: [
        {
          title: "Innovasjon Norge - Visit Norway Content API",
          company: "Bouvet-prosjekt",
          date: "des 2025 - mar 2026",
          role: "Backend-utvikler og Azure-utvikler",
          bullets: [
            "Bygget et legacy-API i Express og Swagger slik at kunder kunne beholde gammel Simpleview-struktur mens innholdet ble flyttet til Sanity CMS.",
            "Implementerte transformasjonslag med TypeScript og Zod for å konvertere mellom flat Simpleview-data og Sanitys dypere modeller.",
            "La til ruting, Vitest-dekning og mocking rundt API-et for å beskytte både funksjonalitet og rute-kompatibilitet.",
            "Videreutviklet Azure-brannmur med Pulumi og låste webapp og database bak kontrollerte IP-regler og nettverksgrenser.",
          ],
        },
        {
          title: "Wenn Property AS - Skadesaneringsrapport",
          company: "Bouvet-prosjekt",
          date: "jun 2024 - jul 2024",
          role: "Databasedesigner, arkitekt og frontend-utvikler",
          bullets: [
            "Bidro til datamodell og ER-diagram for en KI-støttet rapporteringsløsning i boligbransjen.",
            "Satte opp Azure Blob Storage for bildeopplasting og koblet frontend-flyten til backend og lagringstjenester.",
            "Bygget gjenbrukbare Next.js-komponenter i TypeScript, CSS og MUI som del av frontend-grunnmuren.",
            "Fungerte som bindeledd mellom design og backend, og oversatte feltinnsikt til tekniske krav.",
          ],
        },
        {
          title: "Lyse Energi - Lyse Forbruks-app",
          company: "Bouvet sommerprosjekt",
          date: "jun 2023 - jul 2023",
          role: "Fullstack-utvikler",
          bullets: [
            "Videreutviklet en eksisterende Flutter- og .NET-applikasjon med støtte for solcellepaneler, invertere og elbilladere via eksterne API-er.",
            "Koblet Enode-data inn i appen slik at brukere kunne sammenligne forbruk med egenprodusert strøm og se besparelser.",
            "Forbedret dokumentasjon og struktur for å gi bedre utvikleropplevelse i kodebasen.",
          ],
        },
        {
          title: "OpenBridge - Designing User Interfaces for Sail Propulsion",
          company: "Masteroppgave",
          date: "aug 2024 - jun 2025",
          role: "Interaksjonsdesigner og forsker",
          bullets: [
            "Ledet en full user-centred design-prosess for skipsgrensesnitt som overvåker og styrer seilfremdrift.",
            "Intervjuet kapteiner, laget prototyper i Figma, spesifiserte brukerkrav og evaluerte brukbarhet opp mot kravene.",
            "Arbeidet innenfor OpenBridge 6.0 og ISO 9241-11:2018 for å designe løsninger med høy brukbarhet og lav kognitiv belastning.",
          ],
        },
        {
          title: "Finco AS - Innovativ investeringsapplikasjon",
          company: "Bachelorprosjekt",
          date: "jan 2023 - jun 2023",
          role: "Data engineer og frontend-utvikler",
          bullets: [
            "Bygget en Python-modul som prosesserte CSV-basert finansdata med pandas og brukte Fincos egne prediksjonsformler.",
            "Koblet modellflyten til database via MySQL-connector.",
            "Utviklet React-baserte frontend-visninger, inkludert admin-dashboard og grafvisning av aksjehistorikk.",
          ],
        },
      ],
    },
  },
};

const sceneCanvas = document.querySelector("#scene-canvas");
const sceneStatusLabel = document.querySelector("#scene-status-label");
const sceneTitle = document.querySelector("#scene-title");
const sceneHint = document.querySelector("#scene-hint");
const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modal-body");
const modalTitle = document.querySelector("#modal-title");
const modalKicker = document.querySelector("#modal-kicker");
const languageButtons = [...document.querySelectorAll("[data-language]")];
const themeToggle = document.querySelector("#theme-toggle");
const closeModalButton = document.querySelector("#close-modal");
const modalBackdrop = document.querySelector("#modal-backdrop");

const state = {
  language: "no",
  theme: "night",
  activePanel: null,
  pointerDown: null,
  focusAnimation: null,
  hoveredPanel: null,
};

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({
  canvas: sceneCanvas,
  antialias: true,
  alpha: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;

const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
camera.position.set(8, 5.4, 9);

const controls = new OrbitControls(camera, sceneCanvas);
controls.enableDamping = true;
controls.minDistance = 5;
controls.maxDistance = 15;
controls.minPolarAngle = 0.6;
controls.maxPolarAngle = 1.35;
controls.target.set(0, 1.6, 0);

const clock = new THREE.Clock();
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const defaultFocus = {
  position: camera.position.clone(),
  target: controls.target.clone(),
};

const smokePuffs = [];
let snowGeometry;
let snowPositions;
let snowVelocities;
let snowPoints;
let thesisBoat = null;
const rotorSails = [];

const dayPalette = {
  background: new THREE.Color("#d7e2ee"),
  fog: new THREE.Color("#dce6ef"),
  ambient: 1.3,
  directional: 1.7,
  fill: 0.8,
  window: 0.7,
  moon: 0,
};

const nightPalette = {
  background: new THREE.Color("#07101a"),
  fog: new THREE.Color("#0f1725"),
  ambient: 0.38,
  directional: 1.25,
  fill: 0.22,
  window: 1.7,
  moon: 1.1,
};

scene.fog = new THREE.Fog(dayPalette.fog, 12, 34);

const ambientLight = new THREE.AmbientLight("#fff4dd", dayPalette.ambient);
scene.add(ambientLight);

const sunLight = new THREE.DirectionalLight("#fff1cf", dayPalette.directional);
sunLight.position.set(8, 12, 6);
scene.add(sunLight);

const fillLight = new THREE.DirectionalLight("#a6d4ff", dayPalette.fill);
fillLight.position.set(-6, 4, -5);
scene.add(fillLight);

const moonLight = new THREE.DirectionalLight("#98c7ff", 0);
moonLight.position.set(-8, 10, -3);
scene.add(moonLight);

const windowLight = new THREE.PointLight("#ffcc82", dayPalette.window, 18, 2);
windowLight.position.set(0, 2.6, 0);
scene.add(windowLight);

const moonMesh = new THREE.Mesh(
  new THREE.SphereGeometry(0.7, 24, 24),
  new THREE.MeshBasicMaterial({
    color: "#dbe7ff",
    transparent: true,
    opacity: 0,
  }),
);
moonMesh.position.set(-9, 8, -12);
scene.add(moonMesh);

const stars = new THREE.Points(
  new THREE.BufferGeometry(),
  new THREE.PointsMaterial({
    color: "#dbe6ff",
    size: 0.06,
    transparent: true,
    opacity: 0,
  }),
);
{
  const positions = new Float32Array(180 * 3);
  for (let i = 0; i < 180; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * 28;
    positions[i * 3 + 1] = 5 + Math.random() * 9;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 28;
  }
  stars.geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3),
  );
}
scene.add(stars);

const interactiveObjects = [];
const cabinGroup = new THREE.Group();
scene.add(cabinGroup);

function addInteractive(mesh, id, focus, options = {}) {
  mesh.userData.panelId = id;
  mesh.userData.focus = focus;
  if (options.marker !== false) {
    mesh.geometry?.computeBoundingBox?.();
    const bounds = mesh.geometry?.boundingBox;
    const marker = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 12, 12),
      new THREE.MeshStandardMaterial({
        color: "#ffd79e",
        emissive: "#ffbb63",
        emissiveIntensity: 1.2,
      }),
    );
    if (bounds) {
      marker.position.set(0, bounds.max.y + 0.18, bounds.max.z + 0.08);
    } else {
      marker.position.set(0, 0.24, 0.08);
    }
    if (options.markerOffset) {
      marker.position.add(options.markerOffset);
    }
    mesh.add(marker);
  }
  interactiveObjects.push(mesh);
}

function makeCanvasTexture(draw, { width = 512, height = 512 } = {}) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  draw(ctx, canvas);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function buildScene() {
  const woodTexture = makeCanvasTexture((ctx, canvas) => {
    ctx.fillStyle = "#85583f";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 8; i += 1) {
      const y = i * 64;
      ctx.fillStyle = i % 2 === 0 ? "#8f5d43" : "#7b513a";
      ctx.fillRect(0, y, canvas.width, 60);
      ctx.strokeStyle = "rgba(49, 26, 18, 0.35)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, y + 60);
      ctx.lineTo(canvas.width, y + 60);
      ctx.stroke();
      for (let j = 0; j < 14; j += 1) {
        ctx.fillStyle = "rgba(54, 31, 21, 0.18)";
        ctx.fillRect(j * 38, y + 14 + ((j * 11) % 20), 26, 6);
      }
    }
  });
  woodTexture.wrapS = woodTexture.wrapT = THREE.RepeatWrapping;
  woodTexture.repeat.set(2.5, 1.6);

  const trimTexture = makeCanvasTexture((ctx, canvas) => {
    ctx.fillStyle = "#57382a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 60; i += 1) {
      ctx.strokeStyle = `rgba(122, 88, 62, ${0.06 + (i % 3) * 0.03})`;
      ctx.beginPath();
      ctx.moveTo(0, i * 8);
      ctx.lineTo(canvas.width, i * 8 + (i % 2 ? 10 : -10));
      ctx.stroke();
    }
  });
  trimTexture.wrapS = trimTexture.wrapT = THREE.RepeatWrapping;
  trimTexture.repeat.set(2, 2);

  const roofTexture = makeCanvasTexture((ctx, canvas) => {
    ctx.fillStyle = "#4b5968";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < canvas.height; y += 38) {
      for (let x = 0; x < canvas.width; x += 54) {
        ctx.fillStyle = (x + y) % 108 === 0 ? "#617286" : "#566576";
        ctx.fillRect(x, y, 48, 24);
      }
    }
  });
  roofTexture.wrapS = roofTexture.wrapT = THREE.RepeatWrapping;
  roofTexture.repeat.set(2.8, 1.4);

  const stoneTexture = makeCanvasTexture((ctx, canvas) => {
    ctx.fillStyle = "#8f98a2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 40; i += 1) {
      ctx.fillStyle = i % 2 === 0 ? "#9da8b3" : "#7b8692";
      ctx.fillRect((i * 61) % canvas.width, (i * 47) % canvas.height, 66, 42);
      ctx.strokeStyle = "rgba(63, 73, 84, 0.3)";
      ctx.strokeRect((i * 61) % canvas.width, (i * 47) % canvas.height, 66, 42);
    }
  });
  stoneTexture.wrapS = stoneTexture.wrapT = THREE.RepeatWrapping;
  stoneTexture.repeat.set(1.6, 1.6);

  const iceTexture = makeCanvasTexture((ctx, canvas) => {
    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height,
    );
    gradient.addColorStop(0, "#9fd8e8");
    gradient.addColorStop(1, "#4e7ea2");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 14; i += 1) {
      ctx.strokeStyle = `rgba(255,255,255,${0.08 + i * 0.01})`;
      ctx.beginPath();
      ctx.moveTo((i * 34) % canvas.width, 0);
      ctx.lineTo(canvas.width - ((i * 28) % canvas.width), canvas.height);
      ctx.stroke();
    }
  });

  const snowMaterial = new THREE.MeshStandardMaterial({
    color: "#f8fbff",
    roughness: 0.95,
  });
  const snowShadowMaterial = new THREE.MeshStandardMaterial({
    color: "#e7eef8",
    roughness: 0.92,
  });
  const wallMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    map: woodTexture,
    roughness: 0.88,
  });
  const trimMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    map: trimTexture,
    roughness: 0.84,
  });
  const roofMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    map: roofTexture,
    roughness: 0.86,
  });
  const accentMaterial = new THREE.MeshStandardMaterial({
    color: "#be6d3d",
    roughness: 0.8,
  });
  const stoneMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    map: stoneTexture,
    roughness: 0.95,
  });
  const metalMaterial = new THREE.MeshStandardMaterial({
    color: "#69788b",
    roughness: 0.38,
    metalness: 0.45,
  });
  const glassMaterial = new THREE.MeshStandardMaterial({
    color: "#e3efff",
    emissive: "#ffd39b",
    emissiveIntensity: 0.18,
    transparent: true,
    opacity: 0.12,
    roughness: 0.06,
    metalness: 0.18,
  });

  const livingRoomLeftTexture = makeCanvasTexture((ctx, canvas) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#4f3427");
    gradient.addColorStop(1, "#24150f");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#7b4f36";
    ctx.fillRect(0, 340, canvas.width, 172);
    ctx.fillStyle = "#d8a05d";
    ctx.fillRect(32, 36, 448, 16);
    ctx.fillStyle = "#8e5b3e";
    ctx.fillRect(96, 276, 280, 110);
    ctx.fillStyle = "#614031";
    ctx.fillRect(114, 250, 246, 42);
    ctx.fillStyle = "#1f2934";
    ctx.beginPath();
    ctx.arc(238, 242, 36, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(220, 272, 38, 74);
    ctx.fillStyle = "#f4d585";
    ctx.fillRect(390, 140, 52, 126);
    ctx.fillStyle = "#c58d4f";
    ctx.fillRect(402, 92, 28, 60);
    ctx.fillStyle = "#2a1a13";
    ctx.fillRect(28, 308, 44, 62);
    ctx.fillStyle = "#ffb25e";
    ctx.fillRect(34, 314, 32, 50);
  });

  const livingRoomRightTexture = makeCanvasTexture((ctx, canvas) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#4c3226");
    gradient.addColorStop(1, "#22150f");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#80533c";
    ctx.fillRect(0, 336, canvas.width, 176);
    ctx.fillStyle = "#261813";
    ctx.fillRect(96, 122, 300, 178);
    ctx.fillStyle = "#111925";
    ctx.fillRect(118, 142, 256, 138);
    ctx.fillStyle = "#d6e4ff";
    ctx.font = "700 36px Arial";
    ctx.fillText("RACE DAY", 152, 176);
    ctx.fillStyle = "#ce3535";
    ctx.beginPath();
    ctx.moveTo(168, 240);
    ctx.lineTo(210, 218);
    ctx.lineTo(268, 214);
    ctx.lineTo(320, 232);
    ctx.lineTo(294, 254);
    ctx.lineTo(216, 256);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#f5f2ea";
    ctx.beginPath();
    ctx.arc(205, 258, 14, 0, Math.PI * 2);
    ctx.arc(292, 258, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ffc45d";
    ctx.fillRect(30, 74, 40, 186);
    ctx.fillStyle = "#634232";
    ctx.fillRect(26, 246, 48, 84);
  });

  const sideRoomTexture = makeCanvasTexture((ctx, canvas) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#563a2c");
    gradient.addColorStop(1, "#241711");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#885a42";
    ctx.fillRect(0, 338, canvas.width, 174);
    ctx.fillStyle = "#f0c977";
    ctx.fillRect(360, 72, 46, 190);
    ctx.fillStyle = "#7b513c";
    ctx.fillRect(84, 156, 132, 170);
    ctx.fillStyle = "#4f3328";
    ctx.fillRect(240, 186, 92, 148);
    ctx.fillStyle = "#f4d07f";
    ctx.fillRect(116, 122, 68, 28);
  });

  const ground = new THREE.Mesh(
    new THREE.CylinderGeometry(10.8, 11.8, 0.9, 16),
    snowMaterial,
  );
  ground.position.y = -0.45;
  scene.add(ground);

  const farGround = new THREE.Mesh(
    new THREE.RingGeometry(11.4, 22.8, 56),
    snowShadowMaterial,
  );
  farGround.rotation.x = -Math.PI * 0.5;
  farGround.position.y = -0.12;
  scene.add(farGround);

  const driftA = new THREE.Mesh(
    new THREE.SphereGeometry(2.1, 10, 10),
    snowShadowMaterial,
  );
  driftA.position.set(-2.8, 0.15, 4.25);
  driftA.scale.set(1.4, 0.42, 0.9);
  scene.add(driftA);

  const driftB = driftA.clone();
  driftB.position.set(3.3, 0.06, -2.1);
  driftB.scale.set(1.15, 0.35, 0.92);
  scene.add(driftB);

  const driftC = driftA.clone();
  driftC.position.set(-4.5, 0.12, -1.7);
  driftC.scale.set(0.9, 0.3, 0.72);
  scene.add(driftC);

  for (let i = 0; i < 6; i += 1) {
    const stone = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.12, 0.4),
      stoneMaterial,
    );
    stone.position.set(-0.2 + i * 0.28, -0.02 + i * 0.02, 4.4 + i * 0.34);
    stone.rotation.y = (i % 2 ? -1 : 1) * 0.35;
    scene.add(stone);
  }

  const pondSnowBank = new THREE.Mesh(
    new THREE.CylinderGeometry(2.4, 2.6, 0.28, 20),
    snowShadowMaterial,
  );
  pondSnowBank.position.set(5.8, -0.18, 1.05);
  pondSnowBank.scale.set(1.1, 1, 0.72);
  scene.add(pondSnowBank);
  const pond = new THREE.Mesh(
    new THREE.CylinderGeometry(2.08, 2.22, 0.18, 24),
    new THREE.MeshStandardMaterial({
      color: "#ffffff",
      map: iceTexture,
      roughness: 0.18,
      metalness: 0.08,
      emissive: "#7ab8d8",
      emissiveIntensity: 0.08,
    }),
  );
  pond.position.set(5.8, -0.04, 1.05);
  pond.scale.set(1, 1, 0.66);
  scene.add(pond);

  const ridgeLine = new THREE.Mesh(
    new THREE.CylinderGeometry(
      18,
      21,
      3.6,
      18,
      1,
      true,
      Math.PI * 0.16,
      Math.PI * 1.68,
    ),
    new THREE.MeshStandardMaterial({
      color: "#d8e4ef",
      roughness: 1,
      side: THREE.DoubleSide,
    }),
  );
  ridgeLine.position.set(0, 0.95, -1.6);
  scene.add(ridgeLine);

  for (let i = 0; i < 34; i += 1) {
    const angle = (i / 34) * Math.PI * 2;
    const z = Math.sin(angle);
    if (z > 0.52) {
      continue;
    }
    const tree = new THREE.Group();
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.14, 1.2, 7),
      trimMaterial,
    );
    const foliageLower = new THREE.Mesh(
      new THREE.ConeGeometry(0.72, 1.6, 8),
      new THREE.MeshStandardMaterial({ color: "#3f5a48", roughness: 0.95 }),
    );
    foliageLower.position.y = 1.02;
    const foliageUpper = new THREE.Mesh(
      new THREE.ConeGeometry(0.48, 1.1, 8),
      new THREE.MeshStandardMaterial({ color: "#334c3d", roughness: 0.95 }),
    );
    foliageUpper.position.y = 1.68;
    const snowCap = new THREE.Mesh(
      new THREE.ConeGeometry(0.5, 0.22, 8),
      snowMaterial,
    );
    snowCap.position.y = 2.18;
    tree.add(trunk, foliageLower, foliageUpper, snowCap);
    const radius = 13.4 + (i % 5) * 0.7 + Math.random() * 1.2;
    tree.position.set(
      Math.cos(angle) * radius,
      0,
      Math.sin(angle) * radius - 0.8,
    );
    tree.scale.setScalar(0.85 + (i % 4) * 0.18);
    scene.add(tree);
  }

  const foundation = new THREE.Mesh(
    new THREE.BoxGeometry(4.9, 0.65, 4.55),
    stoneMaterial,
  );
  foundation.position.y = 0.33;
  cabinGroup.add(foundation);

  const foundationSnow = new THREE.Mesh(
    new THREE.BoxGeometry(5.05, 0.12, 4.7),
    snowShadowMaterial,
  );
  foundationSnow.position.y = 0.72;
  cabinGroup.add(foundationSnow);

  const cabinCore = new THREE.Mesh(
    new THREE.BoxGeometry(4.6, 2.85, 3.3),
    wallMaterial,
  );
  cabinCore.position.set(0, 2.12, -0.44);
  cabinGroup.add(cabinCore);

  for (let i = 0; i < 12; i += 1) {
    const y = 0.88 + i * 0.23;
    const backLog = new THREE.Mesh(
      new THREE.BoxGeometry(4.9, 0.16, 0.22),
      trimMaterial,
    );
    backLog.position.y = y;
    backLog.position.z = -2.18;
    cabinGroup.add(backLog);
    const sideLog = new THREE.Mesh(
      new THREE.BoxGeometry(0.22, 0.16, 4.06),
      trimMaterial,
    );
    sideLog.position.set(2.33, y, 0);
    cabinGroup.add(sideLog);
    const sideLogOpposite = sideLog.clone();
    sideLogOpposite.position.x = -2.33;
    cabinGroup.add(sideLogOpposite);
  }

  const frontWallShape = new THREE.Shape();
  frontWallShape.moveTo(-2.36, 0.76);
  frontWallShape.lineTo(2.36, 0.76);
  frontWallShape.lineTo(2.36, 3.52);
  frontWallShape.lineTo(0, 5.04);
  frontWallShape.lineTo(-2.36, 3.52);
  frontWallShape.lineTo(-2.36, 0.76);

  const leftWindowHole = new THREE.Path();
  leftWindowHole.moveTo(-2.06, 1.5);
  leftWindowHole.lineTo(-0.88, 1.5);
  leftWindowHole.lineTo(-0.88, 2.74);
  leftWindowHole.lineTo(-2.06, 2.74);
  leftWindowHole.lineTo(-2.06, 1.5);
  frontWallShape.holes.push(leftWindowHole);

  const rightWindowHole = new THREE.Path();
  rightWindowHole.moveTo(1.0, 1.5);
  rightWindowHole.lineTo(2.18, 1.5);
  rightWindowHole.lineTo(2.18, 2.74);
  rightWindowHole.lineTo(1.0, 2.74);
  rightWindowHole.lineTo(1.0, 1.5);
  frontWallShape.holes.push(rightWindowHole);

  const doorHole = new THREE.Path();
  doorHole.moveTo(-0.37, 0.76);
  doorHole.lineTo(0.77, 0.76);
  doorHole.lineTo(0.77, 2.9);
  doorHole.lineTo(-0.37, 2.9);
  doorHole.lineTo(-0.37, 0.76);
  frontWallShape.holes.push(doorHole);

  const frontWallGeometry = new THREE.ExtrudeGeometry(frontWallShape, {
    depth: 0.14,
    bevelEnabled: false,
  });
  const frontWall = new THREE.Mesh(frontWallGeometry, wallMaterial);
  frontWall.position.z = 2.05;
  cabinGroup.add(frontWall);

  [
    [-2.2, -2.02],
    [2.2, -2.02],
    [-2.2, 2.02],
    [2.2, 2.02],
  ].forEach(([x, z]) => {
    const post = new THREE.Mesh(
      new THREE.BoxGeometry(0.24, 3.2, 0.24),
      trimMaterial,
    );
    post.position.set(x, 2.18, z);
    cabinGroup.add(post);
  });

  const eaveFront = new THREE.Mesh(
    new THREE.BoxGeometry(5.18, 0.18, 0.18),
    trimMaterial,
  );
  eaveFront.position.set(0, 3.54, 2.34);
  cabinGroup.add(eaveFront);
  const eaveBack = eaveFront.clone();
  eaveBack.position.z = -2.34;
  cabinGroup.add(eaveBack);

  const roofLeft = new THREE.Mesh(
    new THREE.BoxGeometry(3.1, 0.24, 5.35),
    roofMaterial,
  );
  roofLeft.position.set(-0.98, 4.24, 0);
  roofLeft.rotation.z = 0.62;
  cabinGroup.add(roofLeft);
  const roofRight = roofLeft.clone();
  roofRight.position.x = 0.98;
  roofRight.rotation.z = -0.62;
  cabinGroup.add(roofRight);

  const roofSnowLeft = new THREE.Mesh(
    new THREE.BoxGeometry(3.2, 0.14, 5.45),
    snowMaterial,
  );
  roofSnowLeft.position.set(-1.06, 4.38, 0);
  roofSnowLeft.rotation.z = 0.62;
  cabinGroup.add(roofSnowLeft);
  const roofSnowRight = roofSnowLeft.clone();
  roofSnowRight.position.x = 1.06;
  roofSnowRight.rotation.z = -0.62;
  cabinGroup.add(roofSnowRight);

  const gableShape = new THREE.Shape();
  gableShape.moveTo(-2.18, 0);
  gableShape.lineTo(2.18, 0);
  gableShape.lineTo(0, 1.52);
  gableShape.lineTo(-2.18, 0);
  const gableGeometry = new THREE.ExtrudeGeometry(gableShape, {
    depth: 0.12,
    bevelEnabled: false,
  });
  const backGable = new THREE.Mesh(gableGeometry, wallMaterial);
  backGable.position.set(0, 3.52, -2.24);
  cabinGroup.add(backGable);

  const ridge = new THREE.Mesh(
    new THREE.BoxGeometry(0.26, 0.26, 5.1),
    trimMaterial,
  );
  ridge.position.set(0, 5.03, 0);
  cabinGroup.add(ridge);

  const chimney = new THREE.Mesh(
    new THREE.BoxGeometry(0.62, 1.78, 0.62),
    stoneMaterial,
  );
  chimney.position.set(1.35, 5.02, -0.66);
  cabinGroup.add(chimney);
  const chimneyCap = new THREE.Mesh(
    new THREE.BoxGeometry(0.76, 0.12, 0.76),
    metalMaterial,
  );
  chimneyCap.position.set(1.35, 5.99, -0.66);
  cabinGroup.add(chimneyCap);

  const porch = new THREE.Mesh(
    new THREE.BoxGeometry(3.85, 0.28, 2.15),
    trimMaterial,
  );
  porch.position.set(0, 0.86, 3.05);
  cabinGroup.add(porch);

  const porchSnow = new THREE.Mesh(
    new THREE.BoxGeometry(3.95, 0.1, 2.22),
    snowShadowMaterial,
  );
  porchSnow.position.set(0, 1.05, 3.05);
  cabinGroup.add(porchSnow);

  const stepOne = new THREE.Mesh(
    new THREE.BoxGeometry(1.9, 0.18, 0.54),
    trimMaterial,
  );
  stepOne.position.set(0, 0.53, 4.02);
  cabinGroup.add(stepOne);
  const stepTwo = new THREE.Mesh(
    new THREE.BoxGeometry(1.36, 0.16, 0.42),
    trimMaterial,
  );
  stepTwo.position.set(0, 0.35, 4.38);
  cabinGroup.add(stepTwo);

  const door = new THREE.Mesh(
    new THREE.BoxGeometry(1.02, 2.14, 0.14),
    trimMaterial,
  );
  door.position.set(0.2, 1.82, 2.2);
  cabinGroup.add(door);
  const doorInset = new THREE.Mesh(
    new THREE.BoxGeometry(0.8, 1.84, 0.05),
    wallMaterial,
  );
  doorInset.position.set(0.2, 1.82, 2.29);
  cabinGroup.add(doorInset);
  const doorWindow = new THREE.Mesh(
    new THREE.BoxGeometry(0.46, 0.56, 0.04),
    glassMaterial,
  );
  doorWindow.position.set(0.2, 2.18, 2.31);
  cabinGroup.add(doorWindow);
  const doorHandle = new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 12, 12),
    accentMaterial,
  );
  doorHandle.position.set(0.48, 1.78, 2.32);
  cabinGroup.add(doorHandle);
  const wreath = new THREE.Mesh(
    new THREE.TorusGeometry(0.18, 0.05, 8, 18),
    accentMaterial,
  );
  wreath.position.set(0.2, 1.34, 2.29);
  cabinGroup.add(wreath);

  function createWindowUnit({
    position,
    rotationY = 0,
    texture,
    width = 1.06,
    height = 1.16,
  }) {
    const group = new THREE.Group();
    group.position.copy(position);
    group.rotation.y = rotationY;

    const topFrame = new THREE.Mesh(
      new THREE.BoxGeometry(width + 0.18, 0.12, 0.12),
      trimMaterial,
    );
    topFrame.position.y = height / 2 + 0.03;
    group.add(topFrame);
    const bottomFrame = topFrame.clone();
    bottomFrame.position.y *= -1;
    group.add(bottomFrame);
    const leftFrame = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, height + 0.06, 0.12),
      trimMaterial,
    );
    leftFrame.position.x = -(width / 2 + 0.03);
    group.add(leftFrame);
    const rightFrame = leftFrame.clone();
    rightFrame.position.x *= -1;
    group.add(rightFrame);

    const interior = new THREE.Mesh(
      new THREE.PlaneGeometry(width - 0.08, height - 0.08),
      new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide }),
    );
    interior.position.z = -0.14;
    group.add(interior);

    const glass = new THREE.Mesh(
      new THREE.BoxGeometry(width, height, 0.06),
      glassMaterial,
    );
    glass.position.z = 0.02;
    group.add(glass);

    const mullionVertical = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, height - 0.08, 0.08),
      trimMaterial,
    );
    group.add(mullionVertical);
    const mullionHorizontal = new THREE.Mesh(
      new THREE.BoxGeometry(width - 0.08, 0.08, 0.08),
      trimMaterial,
    );
    group.add(mullionHorizontal);

    cabinGroup.add(group);
    return { group, glass };
  }

  createWindowUnit({
    position: new THREE.Vector3(-1.47, 2.12, 2.17),
    texture: livingRoomLeftTexture,
  });
  createWindowUnit({
    position: new THREE.Vector3(1.6, 2.12, 2.17),
    texture: livingRoomRightTexture,
  });
  createWindowUnit({
    position: new THREE.Vector3(2.36, 2.05, -0.18),
    rotationY: -Math.PI * 0.5,
    texture: sideRoomTexture,
    width: 0.96,
    height: 1.08,
  });

  const sofaBase = new THREE.Mesh(
    new THREE.BoxGeometry(1.18, 0.42, 0.24),
    trimMaterial,
  );
  sofaBase.position.set(-1.46, 1.6, 1.72);
  cabinGroup.add(sofaBase);
  const sofaBack = new THREE.Mesh(
    new THREE.BoxGeometry(1.18, 0.52, 0.14),
    trimMaterial,
  );
  sofaBack.position.set(-1.46, 1.88, 1.58);
  cabinGroup.add(sofaBack);
  const personBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.24, 0.38, 0.16),
    accentMaterial,
  );
  personBody.position.set(-1.3, 1.88, 1.76);
  cabinGroup.add(personBody);
  const personHead = new THREE.Mesh(
    new THREE.SphereGeometry(0.09, 12, 12),
    new THREE.MeshStandardMaterial({ color: "#e7c6a0" }),
  );
  personHead.position.set(-1.3, 2.15, 1.76);
  cabinGroup.add(personHead);
  const interiorTvBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.76, 0.46, 0.12),
    trimMaterial,
  );
  interiorTvBody.position.set(1.58, 1.96, 1.64);
  cabinGroup.add(interiorTvBody);
  const interiorTvScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.62, 0.34),
    new THREE.MeshBasicMaterial({ map: livingRoomRightTexture }),
  );
  interiorTvScreen.position.set(1.58, 1.96, 1.71);
  cabinGroup.add(interiorTvScreen);

  const skiLeft = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 2.2, 0.08),
    accentMaterial,
  );
  skiLeft.position.set(2.86, 1.08, 3.72);
  skiLeft.rotation.z = -0.28;
  skiLeft.rotation.y = -0.18;
  cabinGroup.add(skiLeft);
  const skiRight = skiLeft.clone();
  skiRight.position.set(2.68, 1.08, 3.94);
  skiRight.rotation.z = -0.38;
  skiRight.rotation.y = -0.08;
  cabinGroup.add(skiRight);
  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 2.05, 6),
    metalMaterial,
  );
  pole.position.set(2.48, 1.05, 3.84);
  pole.rotation.z = -0.34;
  pole.rotation.y = 0.12;
  cabinGroup.add(pole);
  addInteractive(skiLeft, "skills", {
    position: new THREE.Vector3(5.3, 2.2, 5.1),
    target: new THREE.Vector3(2.74, 1.06, 3.84),
  });
  for (let i = 0; i < 4; i += 1) {
    const log = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.11, 0.72, 7),
      trimMaterial,
    );
    log.rotation.z = Math.PI * 0.5;
    log.position.set(-2.02, 0.96 + i * 0.17, 1.62 + (i % 2) * 0.12);
    cabinGroup.add(log);
  }

  const signTexture = makeCanvasTexture((ctx, canvas) => {
    const gradient = ctx.createLinearGradient(
      0,
      0,
      canvas.width,
      canvas.height,
    );
    gradient.addColorStop(0, "#6d4735");
    gradient.addColorStop(1, "#553426");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 8; i += 1) {
      ctx.strokeStyle = `rgba(255,255,255,${0.04 + i * 0.01})`;
      ctx.beginPath();
      ctx.moveTo(0, i * 64 + 18);
      ctx.lineTo(canvas.width, i * 64 + 6);
      ctx.stroke();
    }
    ctx.strokeStyle = "rgba(35,20,14,0.45)";
    ctx.lineWidth = 10;
    ctx.strokeRect(16, 16, canvas.width - 32, canvas.height - 32);
    ctx.fillStyle = "#f5e5c7";
    ctx.textAlign = "center";
    ctx.font = "700 62px Georgia";
    ctx.fillText("Pål Djuve Vambheim", canvas.width / 2, 156);
    ctx.font = "500 30px Georgia";
    ctx.fillText("Klikk for CV", canvas.width / 2, 244);
  }, { width: 768, height: 352 });

  const signBoard = new THREE.Mesh(
    new THREE.BoxGeometry(1.56, 0.72, 0.12),
    new THREE.MeshStandardMaterial({ map: signTexture, roughness: 0.82 }),
  );
  signBoard.position.set(0.22, 3.1, 2.27);
  cabinGroup.add(signBoard);
  addInteractive(signBoard, "resume", {
    position: new THREE.Vector3(-2.7, 3.25, 5.9),
    target: new THREE.Vector3(0.22, 3.1, 2.27),
  }, {
    markerOffset: new THREE.Vector3(0, 0, 0.12),
  });

  thesisBoat = new THREE.Group();
  thesisBoat.position.set(5.8, 0.06, 1.08);
  const hull = new THREE.Mesh(
    new THREE.BoxGeometry(1.35, 0.22, 0.42),
    trimMaterial,
  );
  hull.rotation.z = 0.02;
  thesisBoat.add(hull);
  const hullTop = new THREE.Mesh(
    new THREE.BoxGeometry(0.82, 0.12, 0.3),
    wallMaterial,
  );
  hullTop.position.y = 0.15;
  thesisBoat.add(hullTop);
  const mastDeck = new THREE.Mesh(
    new THREE.BoxGeometry(0.86, 0.05, 0.18),
    metalMaterial,
  );
  mastDeck.position.y = 0.23;
  thesisBoat.add(mastDeck);
  [-0.28, 0, 0.28].forEach((x) => {
    const rotor = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.06, 0.72, 18),
      new THREE.MeshStandardMaterial({
        color: "#e7edf6",
        roughness: 0.34,
        metalness: 0.24,
      }),
    );
    rotor.position.set(x, 0.63, 0);
    rotorSails.push(rotor);
    thesisBoat.add(rotor);
  });
  const wake = new THREE.Mesh(
    new THREE.PlaneGeometry(1.7, 0.34),
    new THREE.MeshBasicMaterial({
      color: "#d8eff8",
      transparent: true,
      opacity: 0.48,
    }),
  );
  wake.position.set(0, -0.02, -0.28);
  wake.rotation.x = -Math.PI * 0.5;
  thesisBoat.add(wake);
  scene.add(thesisBoat);
  addInteractive(hull, "thesis", {
    position: new THREE.Vector3(8.15, 1.95, 2.95),
    target: new THREE.Vector3(5.8, 0.62, 1.05),
  });

  const lanternHandle = new THREE.Mesh(
    new THREE.TorusGeometry(0.13, 0.02, 8, 20),
    trimMaterial,
  );
  const lanternBracket = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.05, 0.05),
    trimMaterial,
  );
  const lanternBody = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.22, 0.56, 6),
    new THREE.MeshStandardMaterial({
      color: "#d28639",
      emissive: "#ffbf60",
      emissiveIntensity: 0.92,
      flatShading: true,
    }),
  );
  lanternBracket.position.set(-1.02, 3.04, 2.34);
  lanternHandle.position.set(-1.02, 2.92, 2.58);
  lanternHandle.rotation.z = 0;
  lanternBody.position.set(-1.02, 2.56, 2.58);
  cabinGroup.add(lanternBracket, lanternHandle, lanternBody);
  addInteractive(lanternBody, "about", {
    position: new THREE.Vector3(-3.85, 3.15, 5.5),
    target: new THREE.Vector3(-1.02, 2.56, 2.58),
  });

  windowLight.position.set(0, 2.35, 1.15);

  for (let i = 0; i < 10; i += 1) {
    const puff = new THREE.Mesh(
      new THREE.SphereGeometry(0.16 + Math.random() * 0.08, 10, 10),
      new THREE.MeshStandardMaterial({
        color: "#d8dde6",
        transparent: true,
        opacity: 0.72,
        roughness: 1,
      }),
    );
    puff.position
      .copy(chimney.position)
      .add(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.08,
          0.72 + i * 0.24,
          (Math.random() - 0.5) * 0.08,
        ),
      );
    puff.userData.offset = Math.random() * Math.PI * 2;
    smokePuffs.push(puff);
    cabinGroup.add(puff);
  }

  for (let i = 0; i < 10; i += 1) {
    const snowLip = new THREE.Mesh(
      new THREE.BoxGeometry(0.36, 0.12, 0.36),
      snowMaterial,
    );
    snowLip.position.set(-1.72 + i * 0.38, 3.54, 2.24);
    cabinGroup.add(snowLip);
  }

  snowGeometry = new THREE.BufferGeometry();
  const count = 420;
  snowPositions = new Float32Array(count * 3);
  snowVelocities = new Float32Array(count);
  for (let i = 0; i < count; i += 1) {
    snowPositions[i * 3] = (Math.random() - 0.5) * 18;
    snowPositions[i * 3 + 1] = Math.random() * 10 + 1;
    snowPositions[i * 3 + 2] = (Math.random() - 0.5) * 18;
    snowVelocities[i] = 0.02 + Math.random() * 0.03;
  }
  snowGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(snowPositions, 3),
  );
  snowPoints = new THREE.Points(
    snowGeometry,
    new THREE.PointsMaterial({
      color: "#ffffff",
      size: 0.09,
      transparent: true,
      opacity: 0.82,
    }),
  );
  scene.add(snowPoints);
}

buildScene();

function resize() {
  const { clientWidth, clientHeight } = sceneCanvas;
  renderer.setSize(clientWidth, clientHeight, false);
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();
}

function setTheme(theme) {
  state.theme = theme;
  document.body.dataset.theme = theme;
  document.body.style.colorScheme = theme === "night" ? "dark" : "light";

  const palette = theme === "night" ? nightPalette : dayPalette;
  scene.background = palette.background;
  scene.fog.color.copy(palette.fog);
  ambientLight.intensity = palette.ambient;
  sunLight.intensity = palette.directional;
  fillLight.intensity = palette.fill;
  windowLight.intensity = palette.window;
  moonLight.intensity = palette.moon;
  moonMesh.material.opacity = theme === "night" ? 1 : 0;
  stars.material.opacity = theme === "night" ? 0.92 : 0;
  if (snowPoints) {
    snowPoints.material.opacity = theme === "night" ? 0.42 : 0.82;
  }

  themeToggle.textContent =
    content[state.language].ui[theme === "day" ? "themeDay" : "themeNight"];
}

function updateSceneStatus() {
  const { ui } = content[state.language];
  sceneStatusLabel.textContent = ui.sceneStatusLabel;
  sceneHint.textContent = ui.sceneHint;
  const panelKey = state.activePanel || state.hoveredPanel;
  sceneTitle.textContent = panelKey ? ui.hotspotNames[panelKey] : ui.sceneTitle;
}

function setLanguage(language) {
  state.language = language;
  const { ui } = content[language];
  document.documentElement.lang = language === "no" ? "no" : "en";
  document.querySelector("#eyebrow").textContent = ui.eyebrow;
  document.querySelector("#hero-name").textContent = "Pål Djuve Vambheim";

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.language === language);
  });

  setTheme(state.theme);
  updateSceneStatus();
  if (state.activePanel) {
    openPanel(state.activePanel, true);
  }
}

function animateFocus(focus, onComplete) {
  state.focusAnimation = {
    startPosition: camera.position.clone(),
    startTarget: controls.target.clone(),
    endPosition: focus.position.clone(),
    endTarget: focus.target.clone(),
    elapsed: 0,
    duration: 0.8,
    onComplete,
  };
  controls.enabled = false;
}

function resetFocus() {
  animateFocus(defaultFocus, () => {
    controls.enabled = true;
  });
}

function openPanel(panelId, skipFocus = false) {
  const { ui } = content[state.language];
  state.activePanel = panelId;
  updateSceneStatus();
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");

  if (!skipFocus) {
    const source = interactiveObjects.find(
      (mesh) => mesh.userData.panelId === panelId,
    );
    if (source?.userData.focus) {
      animateFocus(source.userData.focus, () => {
        controls.enabled = false;
      });
    }
  }

  if (panelId === "resume") {
    modalKicker.textContent = ui.modalKickerResume;
    modalTitle.textContent = ui.resumeTitle;
    modalBody.innerHTML = renderResume(state.language);
  }

  if (panelId === "about") {
    modalKicker.textContent = ui.modalKickerAbout;
    modalTitle.textContent = ui.aboutTitle;
    modalBody.innerHTML = `
      <div class="about-layout">
        <article class="info-card">
          <h3>Pål</h3>
          <p>${ui.aboutText}</p>
          <ul class="resume-bullets">
            ${ui.aboutBullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </article>
        <article class="info-card">
          <h3>${ui.sections.skills}</h3>
          <p><a href="https://github.com/paalvambheim" target="_blank" rel="noreferrer">github.com/paalvambheim</a></p>
          <div class="tag-row">
            ${content[state.language].resume.skills
              .slice(0, 12)
              .map((skill) => `<span class="tag">${skill}</span>`)
              .join("")}
          </div>
        </article>
      </div>
    `;
  }

  if (panelId === "thesis") {
    modalKicker.textContent = ui.modalKickerThesis;
    modalTitle.textContent = ui.thesisTitle;
    modalBody.innerHTML = `
      <div class="about-layout">
        <article class="info-card">
          <h3>${ui.thesisTitle}</h3>
          <p>${ui.thesisText}</p>
          <ul class="resume-bullets">
            ${ui.thesisBullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </article>
        <article class="info-card">
          <h3>${content[state.language].resume.experience[3].title}</h3>
          <p>${content[state.language].resume.experience[3].bullets[0]}</p>
          <p>${content[state.language].resume.experience[3].bullets[1]}</p>
          <p>${content[state.language].resume.experience[3].bullets[2]}</p>
        </article>
      </div>
    `;
  }

  if (panelId === "skills") {
    modalKicker.textContent = ui.modalKickerSkills;
    modalTitle.textContent = ui.skillsTitle;
    modalBody.innerHTML = `
      <div class="about-layout">
        <article class="info-card">
          <h3>${ui.skillsTitle}</h3>
          <p>${ui.skillsText}</p>
          <div class="tag-row">
            ${content[state.language].resume.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}
          </div>
        </article>
        <article class="info-card">
          <h3>${content[state.language].ui.sections.roles}</h3>
          <div class="tag-row">
            ${content[state.language].resume.roles.map((role) => `<span class="tag">${role}</span>`).join("")}
          </div>
          <h3>${content[state.language].ui.sections.languages}</h3>
          <div class="tag-row">
            ${content[state.language].resume.languages.map((languageValue) => `<span class="tag">${languageValue}</span>`).join("")}
          </div>
        </article>
      </div>
    `;
  }

}

function closePanel() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  state.activePanel = null;
  state.hoveredPanel = null;
  updateSceneStatus();
  resetFocus();
}

function renderResume(language) {
  const { resume, ui } = content[language];
  return `
    <div class="resume-layout">
      <article class="resume-card">
        <div class="resume-header">
          <h3>${ui.sections.summary}</h3>
          <span class="section-label">Bouvet Norge AS</span>
        </div>
        <p>${resume.summary}</p>
      </article>
      <article class="resume-card">
        <h3>${ui.sections.experience}</h3>
        <div class="timeline-list">
          ${resume.experience
            .map(
              (item) => `
                <section class="timeline-item">
                  <h3>${item.title}</h3>
                  <p class="timeline-meta">${item.company} · ${item.date} · ${item.role}</p>
                  <ul class="resume-bullets">
                    ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                  </ul>
                </section>
              `,
            )
            .join("")}
        </div>
      </article>
      <article class="resume-card">
        <h3>${ui.sections.education}</h3>
        <ul class="resume-list">
          ${resume.education
            .map(
              (item) => `
                <li>
                  <strong>${item.title}</strong>
                  <p>${item.place}</p>
                  <p class="timeline-meta">${item.date}</p>
                </li>
              `,
            )
            .join("")}
        </ul>
      </article>
      <article class="resume-card">
        <h3>${ui.sections.certifications}</h3>
        <ul class="resume-list">
          ${resume.certifications
            .map(
              (item) => `
                <li>
                  <strong>${item.title}</strong>
                  <p class="timeline-meta">${item.meta}</p>
                </li>
              `,
            )
            .join("")}
        </ul>
      </article>
      <article class="resume-card">
        <h3>${ui.sections.courses}</h3>
        <ul class="resume-list">
          ${resume.courses.map((course) => `<li>${course}</li>`).join("")}
        </ul>
      </article>
      <article class="resume-card">
        <h3>${ui.sections.roles}</h3>
        <div class="tag-row">${resume.roles.map((role) => `<span class="tag">${role}</span>`).join("")}</div>
      </article>
      <article class="resume-card">
        <h3>${ui.sections.languages}</h3>
        <div class="tag-row">${resume.languages.map((languageValue) => `<span class="tag">${languageValue}</span>`).join("")}</div>
      </article>
      <article class="resume-card">
        <h3>${ui.sections.skills}</h3>
        <div class="tag-row">${resume.skills.map((skill) => `<span class="tag">${skill}</span>`).join("")}</div>
      </article>
    </div>
  `;
}

function handlePointerMove(event) {
  const rect = sceneCanvas.getBoundingClientRect();
  pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  if (!state.activePanel && !state.pointerDown) {
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(interactiveObjects, false);
    state.hoveredPanel =
      hits.length > 0 ? hits[0].object.userData.panelId : null;
    sceneCanvas.style.cursor = hits.length > 0 ? "pointer" : "grab";
    updateSceneStatus();
  }
}

function handlePointerUp(event) {
  if (!state.pointerDown) {
    return;
  }

  const moved = Math.hypot(
    event.clientX - state.pointerDown.x,
    event.clientY - state.pointerDown.y,
  );
  state.pointerDown = null;
  if (moved > 6 || state.activePanel) {
    return;
  }

  handlePointerMove(event);
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(interactiveObjects, false);
  if (hits.length > 0) {
    openPanel(hits[0].object.userData.panelId);
  }
}

function updateSnow(delta) {
  if (!snowGeometry) {
    return;
  }

  const sway = state.theme === "night" ? 0.3 : 0.75;
  for (let i = 0; i < snowVelocities.length; i += 1) {
    snowPositions[i * 3] +=
      Math.sin((clock.elapsedTime + i) * 0.2) * 0.002 * sway;
    snowPositions[i * 3 + 1] -=
      snowVelocities[i] * (state.theme === "night" ? 0.55 : 1.05);
    if (snowPositions[i * 3 + 1] < 0) {
      snowPositions[i * 3 + 1] = 10 + Math.random() * 2;
      snowPositions[i * 3] = (Math.random() - 0.5) * 18;
      snowPositions[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
  }
  snowGeometry.attributes.position.needsUpdate = true;
}

function updateSmoke() {
  smokePuffs.forEach((puff, index) => {
    const time = clock.elapsedTime * 0.65 + puff.userData.offset;
    puff.position.x = 1.1 + Math.sin(time) * 0.18;
    puff.position.z = -0.4 + Math.cos(time * 1.1) * 0.1;
    puff.position.y = 4.8 + ((time + index * 0.2) % 2.2);
    puff.scale.setScalar(0.9 + ((time + index * 0.16) % 1) * 1.2);
    puff.material.opacity = Math.max(
      0,
      0.62 - ((time + index * 0.16) % 1) * 0.36,
    );
  });
}

function updateSceneMotion() {
  rotorSails.forEach((rotor, index) => {
    rotor.rotation.y += 0.08 + index * 0.01;
  });

  if (thesisBoat) {
    thesisBoat.position.y = 0.06 + Math.sin(clock.elapsedTime * 1.4) * 0.04;
    thesisBoat.rotation.z = Math.sin(clock.elapsedTime * 1.2) * 0.03;
  }
}

function updateFocusAnimation(delta) {
  if (!state.focusAnimation) {
    return;
  }

  const animation = state.focusAnimation;
  animation.elapsed += delta;
  const t = Math.min(animation.elapsed / animation.duration, 1);
  const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  camera.position.lerpVectors(
    animation.startPosition,
    animation.endPosition,
    eased,
  );
  controls.target.lerpVectors(
    animation.startTarget,
    animation.endTarget,
    eased,
  );
  if (t >= 1) {
    const onComplete = animation.onComplete;
    state.focusAnimation = null;
    onComplete?.();
  }
}

function animate() {
  const delta = clock.getDelta();
  controls.update();
  updateSnow(delta);
  updateSmoke();
  updateSceneMotion();
  updateFocusAnimation(delta);
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

sceneCanvas.addEventListener("pointerdown", (event) => {
  state.pointerDown = { x: event.clientX, y: event.clientY };
});
sceneCanvas.addEventListener("pointermove", handlePointerMove);
sceneCanvas.addEventListener("pointerup", handlePointerUp);
sceneCanvas.addEventListener("pointerleave", () => {
  state.hoveredPanel = null;
  sceneCanvas.style.cursor = "grab";
  updateSceneStatus();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

themeToggle.addEventListener("click", () => {
  setTheme(state.theme === "day" ? "night" : "day");
});

closeModalButton.addEventListener("click", closePanel);
modalBackdrop.addEventListener("click", closePanel);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.activePanel) {
    closePanel();
  }
});
window.addEventListener("resize", resize);

setLanguage("no");
resize();
animate();
