const translations = {
  pl: {
    // index.html
    "greeting": "[Cześć, nazywam się]",
    "subtitle": "[i buduję systemy, które działają]",
    "aboutBtn-desktop": "Pokaż profil",
    "aboutBtn-mobile": "Pokaż profil",
    "mouseBtn-desktop": "Skąd ten efekt kursora?",
    "mouseBtn-mobile": "Co widać w tle?",
    "aboutAnswer-title": "$ whoami",
    "aboutAnswer-role": "Inżynier embedded i automatyki",
    "aboutAnswer-spec1": "▸ Robotyka (PWr)",
    "aboutAnswer-spec2": "▸ C++ | KiCAD | IoT | PCB",
    "aboutAnswer-spec3": "▸ Detekcja promieniowania",
    "aboutAnswer-spec4": "▸ Freelance: hardware / embedded",
    "aboutAnswer-hint": "// odsuń kursor, aby zamknąć",
    "mouseAnswer-title": "$ cat wilson_chamber.info",
    "mouseAnswer-desc": "Te ślady za kursorem?",
    "mouseAnswer-what": "To symulacja komory Wilsona",
    "mouseAnswer-viz": "Wizualizuje tory promieniowania jonizującego",
    "mouseAnswer-alpha": "▸ Alfa: krótkie, grube tory",
    "mouseAnswer-beta": "▸ Beta: długie, cienkie tory",
    "mouseAnswer-gamma": "▸ Gamma: długie, proste tory",
    "mouseAnswer-end": "Fizyka w wizualizacji.",
    "mouseAnswer-hint": "// odsuń kursor, aby zamknąć",
    
    // navbar
    "nav-about": "o mnie",
    "nav-projects": "projekty",
    "nav-singularity": "singularity",
    
    // aboutme.html
    "aboutme-maininfo-title": "┌─ MAIN_INFO ─────────────────────────────────────┐",
    "aboutme-username": "Username:",
    "aboutme-username-val": "Mateusz Kamiński",
    "aboutme-title": "Title:",
    "aboutme-title-val": "Inżynier systemów wbudowanych i automatyki",
    "aboutme-degree": "Degree:",
    "aboutme-degree-val": "Automatyka i Robotyka | Specjalizacja: Robotyka",
    "aboutme-specialty": "Specialty:",
    "aboutme-specialty-val": "PCB | C++ | IoT | detekcja promieniowania",
    "aboutme-license": "Prawo jazdy:",
    "aboutme-license-val": "kat. B",
    "aboutme-find": "$ find :",
    "aboutme-education": "edukacja",
    "aboutme-experience": "doświadczenie",
    "aboutme-skills": "umiejętności",
    "aboutme-contact": "kontakt",
    "aboutme-education-title": "┌─ EDUKACJA ────────────────────────────────────────┐",
    "aboutme-university": "⊡ Politechnika Wrocławska",
    "aboutme-degree-label": "Kierunek:",
    "aboutme-degree-val2": "Automatyka i Robotyka — spec. Robotyka",
    "aboutme-period": "Okres:",
    "aboutme-period-val": "wrzesień 2021 — luty 2026",
    "aboutme-focus": "Profil:",
    "aboutme-focus-val": "embedded, hardware, IoT",
    "aboutme-experience-title": "┌─ DOŚWIADCZENIE ────────────────────────────────────────┐",
    "aboutme-innew": "⊡ Inżynier detekcji promieniowania @ In-New Poland",
    "aboutme-period-label": "Okres:",
    "aboutme-period-innew": "grudzień 2021 — grudzień 2023 | Wrocław",
    "aboutme-tasks": "Zakres:",
    "aboutme-tasks-val": "projekt i budowa systemu detekcji promieniowania",
    "aboutme-stack": "Stack:",
    "aboutme-stack-val": "C++ | PCB | RTOS | sprzęt laboratoryjny",
    "aboutme-freelance": "⊡ Freelance — hardware engineer",
    "aboutme-status": "Status:",
    "aboutme-status-val": "kontrakt 2024",
    "aboutme-services": "Zakres:",
    "aboutme-services-val": "PCB | firmware | IoT",
    "aboutme-client": "Klient:",
    "aboutme-client-val": "Interelcom (produkcja PCB)",
    "aboutme-modena": "⊡ IT Specialist @ Drukarnia Modena",
    "aboutme-period-modena": "grudzień 2018 — obecnie | 7+ lat",
    "aboutme-modena-scope": "opieka nad infrastrukturą IT, systemy nowe i legacy",
    "aboutme-modena-note-label": "Uwaga:",
    "aboutme-modena-note": "współpraca w zespole od 16 roku życia, praca z różnymi generacjami tech",
    "aboutme-geopartner": "⊡ Geolog @ Geopartner Geofizyka",
    "aboutme-period-geo": "sie 2025 — wrzesień 2025 | Grębocice",
    "aboutme-geo-scope": "systemy geologiczne, pomiary geoinżynieryjne w terenie",
    "aboutme-skills-title": "┌─ UMIEJĘTNOŚCI ──────────────────────────────────────────┐",
    "aboutme-programming": "Kod:",
    "aboutme-programming-val": "C++ / Embedded C",
    "aboutme-hardware": "Hardware:",
    "aboutme-hardware-val": "KiCAD — PCB design",
    "aboutme-iot": "IoT:",
    "aboutme-iot-val": "ESP32 / nRF / LoRa",
    "aboutme-spec-label": "Specjalizacja:",
    "aboutme-spec-nuclear": "▸ detekcja promieniowania jądrowego",
    "aboutme-spec-realtime": "▸ firmware czasu rzeczywistego",
    "aboutme-spec-pcb": "▸ produkcja PCB (koordynacja)",
    "aboutme-spec-lab": "▸ integracja sprzętu laboratoryjnego",
    "aboutme-contact-title": "┌─ KONTAKT ──────────────────────────────────────────┐",
    "aboutme-email-label": "Email:",
    "aboutme-email-val": "mateusz@kaminski.dev",
    
    // projects.html
    "projects-timeline": "Oś czasu projektów",
    "projects-command": "$ ls -la ./projects/",
    "projects-singularity-date": "// 2019 - obecnie",
    "projects-singularity-title": "▸ Singularity — Sieć monitorowania środowiska",
    "projects-singularity-desc": "Rozproszona sieć stacji pomiarowych do monitorowania środowiska. To projekt, na którym uczyłem się elektroniki, C++/Pythona, UI i tego, jak czujniki grają ze sobą w jednym systemie. Teraz: prototypy + wdrożenia.",
    "projects-singularity-view": "Zobacz status projektu",
    "projects-radiometer-date": "// 2019 - obecnie (sporadyczne naprawy)",
    "projects-radiometer-title": "▸ Renowacja automatyki pomiarowej polon alfa",
    "projects-radiometer-desc": "Renowacja klasycznego polskiego sprzętu dozymetrycznego: detektory alfa RUST Polon, URS-3, SAPOS-90 oraz oscyloskop HP z lat 80. Dużo dłubania w starych układach: analiza odpowiedzi, naprawy HV, wzmacniacze i liczniki.",
    "projects-raysid-date": "// 2022 - obecnie",
    "projects-raysid-title": "▸ RaySID — Aplikacja spektrometru gamma",
    "projects-raysid-desc": "Aplikacja desktopowa do analizy widma gamma. Zbiera pomiary z detektorów scyntylacyjnych, przetwarza je na bieżąco i pokazuje wyniki bez zbędnych ozdobników.",
    "projects-thesis-date": "// 2025 - 2026",
    "projects-thesis-title": "▸ Modułowa platforma obrotowa — praca dyplomowa",
    "projects-thesis-desc": "Modułowa platforma obrotowa do zastosowań lab i przemysłowych: sterowanie, precyzyjne pozycjonowanie i prosty interfejs operatora.",
    "projects-interelcom-date": "// 2024 - projekt zespołowy",
    "projects-interelcom-title": "▸ Interelcom — projekt PCB 4-warstwowej",
    "projects-interelcom-desc": "Projekt dla Interelcom: 4-warstwowa PCB od zera (zasilanie + peryferia) oraz ścieżka pełniąca rolę anteny dla Bluetooth.",
    "projects-eof": "EOF",
    
    // singularity.html
    "singularity-status": "Status Sieci Singularity:",
    "singularity-offline": "[ OFFLINE ]",
    "singularity-command": "$ systemctl status singularity",
    "singularity-subsystems": "Podsystemy:",
    "singularity-air-quality": "Jakość Powietrza",
    "singularity-radiation": "Promieniowanie",
    "singularity-emp": "Puls EMP",
    "singularity-uv": "Promieniowanie UV",
    "singularity-overview-title": "Przegląd Projektu",
    "singularity-overview-desc": "Singularity to rozproszona sieć monitoringu środowiska. Rdzeń: czujniki ESP32 + komunikacja ESP-NOW + lokalny interfejs Nextion.",
    "singularity-feature1": "▸ Pomiary wielu parametrów w czasie rzeczywistym",
    "singularity-feature2": "▸ Komunikacja bezprzewodowa ESP-NOW",
    "singularity-feature3": "▸ Nextion HMI (lokalny panel)",
    "singularity-feature4": "▸ Zapis i historia pomiarów",
    "singularity-feature5": "▸ Alerty i progi",
    
    // Footer
    "connect": "$ connect :",
    "github": "[GitHub]",
    "linkedin": "[LinkedIn]",
    "email": "[Email]",
    "version-prefix": "Ostatnia aktualizacja",
  },
  
  en: {
    // index.html
    "greeting": "[Hi, my name is]",
    "subtitle": "[and I love to build stuff]",
    "aboutBtn-desktop": "Tell me about yourself",
    "aboutBtn-mobile": "Tell me about yourself",
    "mouseBtn-desktop": "What's the cursor effect?",
    "mouseBtn-mobile": "What's in the background?",
    "aboutAnswer-title": "$ whoami",
    "aboutAnswer-role": "Embedded & automation engineer",
    "aboutAnswer-spec1": "▸ Specialization: Robotics (PWr)",
    "aboutAnswer-spec2": "▸ Skills: C++ | KiCAD | IoT | PCB Design",
    "aboutAnswer-spec3": "▸ Experience: radiation detection systems",
    "aboutAnswer-spec4": "▸ Current: freelance — hardware / embedded",
    "aboutAnswer-hint": "// move mouse away to close",
    "mouseAnswer-title": "$ cat wilson_chamber.info",
    "mouseAnswer-desc": "Those trails following your cursor?",
    "mouseAnswer-what": " It's a simulation of Wilson Cloud Chamber",
    "mouseAnswer-viz": " It visualizes ionizing radiation tracks",
    "mouseAnswer-alpha": "▸ Alpha particles: short, thick curves",
    "mouseAnswer-beta": "▸ Beta particles: longer, thin curves",
    "mouseAnswer-gamma": "▸ Gamma rays: straight, long lines",
    "mouseAnswer-end": "Physics, made visible.",
    "mouseAnswer-hint": "// move mouse away to close",
    
    // navbar
    "nav-about": "about",
    "nav-projects": "projects",
    "nav-singularity": "singularity",
    
    // aboutme.html
    "aboutme-maininfo-title": "┌─ MAIN_INFO ─────────────────────────────────────┐",
    "aboutme-username": "Username:",
    "aboutme-username-val": "Mateusz Kamiński",
    "aboutme-title": "Title:",
    "aboutme-title-val": "Embedded & automation engineer",
    "aboutme-degree": "Degree:",
    "aboutme-degree-val": "Automatyka i Robotyka | Specjalizacja: Robotyka",
    "aboutme-specialty": "Specialty:",
    "aboutme-specialty-val": "PCB Design | C++ | IoT | Nuclear Detection",
    "aboutme-license": "License:",
    "aboutme-license-val": "cat. B (car)",
    "aboutme-find": "$ find :",
    "aboutme-education": "education",
    "aboutme-experience": "experience",
    "aboutme-skills": "skills",
    "aboutme-contact": "contact",
    "aboutme-education-title": "┌─ EDUCATION ────────────────────────────────────────┐",
    "aboutme-university": "⊡ Wrocław University of Science and Technology",
    "aboutme-degree-label": "Field:",
    "aboutme-degree-val2": "Automation & Robotics — Robotics spec.",
    "aboutme-period": "Period:",
    "aboutme-period-val": "Sep 2021 — Feb 2026",
    "aboutme-focus": "Profile:",
    "aboutme-focus-val": "embedded, hardware, IoT",
    "aboutme-experience-title": "┌─ EXPERIENCE ────────────────────────────────────────┐",
    "aboutme-innew": "⊡ Radiation detection engineer @ In-New Poland",
    "aboutme-period-label": "Period:",
    "aboutme-period-innew": "Dec 2021 — Dec 2023 | Wrocław",
    "aboutme-tasks": "Scope:",
    "aboutme-tasks-val": "radiation detection system — design & build",
    "aboutme-stack": "Stack:",
    "aboutme-stack-val": "C++ | PCB | RTOS | lab equipment",
    "aboutme-freelance": "⊡ Freelance — hardware engineer",
    "aboutme-status": "Status:",
    "aboutme-status-val": "contract (2024)",
    "aboutme-services": "Scope:",
    "aboutme-services-val": "PCB | firmware | IoT",
    "aboutme-client": "Client:",
    "aboutme-client-val": "Interelcom (PCB manufacturing)",
    "aboutme-modena": "⊡ IT Specialist @ Drukarnia Modena",
    "aboutme-period-modena": "Dec 2018 — present | 7+ yrs",
    "aboutme-modena-scope": "IT infrastructure, modern + legacy industrial systems",
    "aboutme-modena-note-label": "Note:",
    "aboutme-modena-note": "team environment since age 16, cross-generation tech",
    "aboutme-geopartner": "⊡ Geologist @ Geopartner Geofizyka",
    "aboutme-period-geo": "Aug 2025 — Sep 2025 | Grębocice",
    "aboutme-geo-scope": "geological systems, geoengineering field measurements",
    "aboutme-skills-title": "┌─ SKILLS ──────────────────────────────────────────┐",
    "aboutme-programming": "Code:",
    "aboutme-programming-val": "C++ / Embedded C",
    "aboutme-hardware": "Hardware:",
    "aboutme-hardware-val": "KiCAD — PCB design",
    "aboutme-iot": "IoT:",
    "aboutme-iot-val": "ESP32 / nRF / LoRa",
    "aboutme-spec-label": "Specialization:",
    "aboutme-spec-nuclear": "▸ radiation detection hardware",
    "aboutme-spec-realtime": "▸ real-time firmware",
    "aboutme-spec-pcb": "▸ PCB manufacturing pipeline",
    "aboutme-spec-lab": "▸ lab equipment integration",
    "aboutme-contact-title": "┌─ CONTACT ──────────────────────────────────────────┐",
    "aboutme-email-label": "Email:",
    "aboutme-email-val": "mateusz@kaminski.dev",
    
    // projects.html
    "projects-timeline": "Projects Timeline",
    "projects-command": "$ ls -la ./projects/",
    "projects-singularity-date": "// 2019 - Present",
    "projects-singularity-title": "▸ Singularity — Environmental Monitoring Network",
    "projects-singularity-desc": "A distributed network of monitoring stations. This is where I learned electronics, C++/Python, UI work, and how sensors behave as one system. Current status: prototypes + rollout.",
    "projects-singularity-view": "View Project Status",
    "projects-radiometer-date": "// 2019 - Present (sporadic repairs)",
    "projects-radiometer-title": "▸ Restoration of Polon Alpha Measurement Automation",
    "projects-radiometer-desc": "Restoration of classic Polish dosimetry equipment: RUST Polon alpha detectors, URS-3, SAPOS-90, and an HP oscilloscope from the 80s. Hands-on work with legacy circuits: response analysis, HV repairs, amplifiers, and counting electronics.",
    "projects-raysid-date": "// 2022 - Present",
    "projects-raysid-title": "▸ RaySID Gamma Spectrometer — Desktop Application",
    "projects-raysid-desc": "Desktop app for gamma spectrum analysis. Pulls data from scintillation detectors, processes it in real time, and keeps the output readable.",
    "projects-thesis-date": "// 2025 - 2026",
    "projects-thesis-title": "▸ Modular Rotating Platform — Engineering Thesis",
    "projects-thesis-desc": "Modular rotating platform for lab/industrial use: control system, precise positioning, and a simple operator UI.",
    "projects-interelcom-date": "// 2024 - Team Project",
    "projects-interelcom-title": "▸ Interelcom — 4-Layer PCB Design Contract",
    "projects-interelcom-desc": "4-layer PCB designed from scratch for Interelcom: power + peripherals, plus a PCB trace used as the Bluetooth antenna.",
    "projects-eof": "EOF",
    
    // singularity.html
    "singularity-status": "Singularity Network Status:",
    "singularity-offline": "[ OFFLINE ]",
    "singularity-command": "$ systemctl status singularity",
    "singularity-subsystems": "Subsystems:",
    "singularity-air-quality": "Air Quality",
    "singularity-radiation": "Radiation",
    "singularity-emp": "EMP Pulse",
    "singularity-uv": "UV Radiation",
    "singularity-overview-title": "Project Overview",
    "singularity-overview-desc": "Singularity is a distributed environmental monitoring network. Core stack: ESP32 nodes + ESP-NOW + a local Nextion HMI.",
    "singularity-feature1": "▸ Real-time readings for multiple parameters",
    "singularity-feature2": "▸ Wireless communication via ESP-NOW",
    "singularity-feature3": "▸ Nextion HMI (local panel)",
    "singularity-feature4": "▸ Logging and history",
    "singularity-feature5": "▸ Threshold alerts",
    
    // Footer
    "connect": "$ connect :",
    "github": "[GitHub]",
    "linkedin": "[LinkedIn]",
    "email": "[Email]",
    "version-prefix": "Last update",
  }
};

// Funkcja do przełączania języka
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  
  // Zaktualizuj przełącznik flagi
  updateLanguageToggle(lang);
}

// Funkcja do aktualizacji UI przełącznika
function updateLanguageToggle(lang) {
  const flags = document.querySelectorAll('[data-lang-flag]');
  flags.forEach(flag => {
    const flagLang = flag.getAttribute('data-lang-flag');
    if (flagLang === lang) {
      flag.style.opacity = '1';
      flag.style.cursor = 'default';
    } else {
      flag.style.opacity = '0.5';
      flag.style.cursor = 'pointer';
    }
  });
}

// Inicjalizuj język na podstawie localStorage lub przeglądarki
document.addEventListener('DOMContentLoaded', () => {
  let lang = localStorage.getItem('language') || 'en';
  
  // Jeśli przeglądarką jest PL, domyślnie ustaw PL
  if (!localStorage.getItem('language')) {
    const browserLang = navigator.language.startsWith('pl') ? 'pl' : 'en';
    lang = browserLang;
  }
  
  setLanguage(lang);
  
  // Dodaj event listenery do przełączników
  document.querySelectorAll('[data-lang-flag]').forEach(flag => {
    flag.addEventListener('click', function() {
      setLanguage(this.getAttribute('data-lang-flag'));
    });
  });
});
