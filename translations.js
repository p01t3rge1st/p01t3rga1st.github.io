const translations = {
  pl: {
    // index.html
    "greeting": "[Cześć, jestem]",
    "subtitle": "[i uwielbiam tworzyć rzeczy]",
    "aboutBtn-desktop": "Opowiedz mi o sobie",
    "aboutBtn-mobile": "Opowiedz mi o sobie",
    "mouseBtn-desktop": "Co to za efekt kursora?",
    "mouseBtn-mobile": "Co jest w tle?",
    "aboutAnswer-title": "$ whoami",
    "aboutAnswer-role": "Inżynier Systemów Wbudowanych & Automatyki",
    "aboutAnswer-spec1": "▸ Specjalizacja: Robotyka (PWr)",
    "aboutAnswer-spec2": "▸ Umiejętności: C++ | KiCAD | IoT | Projektowanie PCB",
    "aboutAnswer-spec3": "▸ Doświadczenie: Systemy Detekcji Promieniotwórczości",
    "aboutAnswer-spec4": "▸ Aktualnie: Freelancer - Inżynier Hardware'u",
    "aboutAnswer-hint": "// przesuń mysz aby zamknąć",
    "mouseAnswer-title": "$ cat wilson_chamber.info",
    "mouseAnswer-desc": "Te ślady za twoim kursorem?",
    "mouseAnswer-what": "▸ Symulacja Komory Wilsona",
    "mouseAnswer-viz": "▸ Wizualizuje tory promieniowania jonizującego",
    "mouseAnswer-alpha": "▸ Cząstki alfa: krótkie, grube krzywe",
    "mouseAnswer-beta": "▸ Cząstki beta: dłuższe, cienkie krzywe",
    "mouseAnswer-gamma": "▸ Promienie gamma: proste, długie linie",
    "mouseAnswer-end": "To fizyka, zrobiona interaktywną.",
    "mouseAnswer-hint": "// przesuń mysz aby zamknąć",
    
    // navbar
    "nav-about": "o mnie",
    "nav-projects": "projekty",
    "nav-singularity": "singularity",
    
    // aboutme.html
    "aboutme-maininfo-title": "┌─ MAIN_INFO ─────────────────────────────────────┐",
    "aboutme-username": "Username:",
    "aboutme-username-val": "Mateusz Kamiński",
    "aboutme-title": "Title:",
    "aboutme-title-val": "Inżynier Systemów Wbudowanych & Automatyki",
    "aboutme-degree": "Degree:",
    "aboutme-degree-val": "Automatyka i Robotyka | Specjalizacja: Robotyka",
    "aboutme-specialty": "Specialty:",
    "aboutme-specialty-val": "Projektowanie PCB | C++ | IoT | Detekcja Promieniotwórczości",
    "aboutme-find": "$ find :",
    "aboutme-education": "edukacja",
    "aboutme-experience": "doświadczenie",
    "aboutme-skills": "umiejętności",
    "aboutme-contact": "kontakt",
    "aboutme-education-title": "┌─ EDUKACJA ────────────────────────────────────────┐",
    "aboutme-university": "⊡ Politechnika Wrocławska",
    "aboutme-degree-label": "Stopień:",
    "aboutme-degree-val2": "Robotyka, Elektrotechnika i Elektronika",
    "aboutme-period": "Okres:",
    "aboutme-period-val": "Wrz 2021 — Lut 2026",
    "aboutme-focus": "Fokus:",
    "aboutme-focus-val": "Systemy Wbudowane, Projektowanie Hardware'u, IoT",
    "aboutme-experience-title": "┌─ DOŚWIADCZENIE ────────────────────────────────────────┐",
    "aboutme-innew": "⊡ Inżynier Detekcji Promieniotwórczości @ In-New Poland",
    "aboutme-period-label": "Okres:",
    "aboutme-period-innew": "Gru 2021 — Gru 2023 | Wrocław",
    "aboutme-tasks": "Zadania:",
    "aboutme-tasks-val": "Projektowanie i rozwój systemu detekcji promieniotwórczości",
    "aboutme-stack": "Stack:",
    "aboutme-stack-val": "C++, Projektowanie PCB, Systemy Czasu Rzeczywistego, Sprzęt Laboratoryjny",
    "aboutme-freelance": "⊡ Freelance Inżynier Hardware'u",
    "aboutme-status": "Status:",
    "aboutme-status-val": "Umowa kontraktowa 2024",
    "aboutme-services": "Usługi:",
    "aboutme-services-val": "Projektowanie PCB, Firmware Wbudowany, Integracja IoT",
    "aboutme-client": "Klient:",
    "aboutme-client-val": "Interelcom (Umowa Produkcji PCB)",
    "aboutme-skills-title": "┌─ UMIEJĘTNOŚCI ──────────────────────────────────────────┐",
    "aboutme-programming": "Programowanie:",
    "aboutme-programming-val": "C++ / Embedded C",
    "aboutme-hardware": "Hardware:",
    "aboutme-hardware-val": "Projektowanie PCB w KiCAD",
    "aboutme-iot": "Systemy IoT:",
    "aboutme-iot-val": "Embedded IoT",
    "aboutme-spec-label": "Specialization:",
    "aboutme-spec-nuclear": "▸ Systemy Detekcji Promieniotwórczości",
    "aboutme-spec-realtime": "▸ Programowanie Firmware'u Czasu Rzeczywistego",
    "aboutme-spec-pcb": "▸ Koordynacja Produkcji PCB",
    "aboutme-spec-lab": "▸ Integracja Sprzętu Laboratoryjnego",
    "aboutme-contact-title": "┌─ KONTAKT ──────────────────────────────────────────┐",
    "aboutme-email-label": "Email:",
    "aboutme-email-val": "mateusz@kaminski.dev",
    
    // projects.html
    "projects-timeline": "Oś czasu projektów",
    "projects-command": "$ ls -la ./projects/",
    "projects-singularity-date": "// 2019 - obecnie",
    "projects-singularity-title": "▸ Singularity — Sieć monitorowania środowiska",
    "projects-singularity-desc": "Rozproszona sieć czujników do monitorowania zagrożeń środowiskowych. Ten długoterminowy projekt rozpoczął moją przygodę z elektroniką, rozwojem interfejsów, programowaniem w C++ i Pythonie, integracją API oraz poznawaniem współpracy czujników. Obecnie trwa faza wdrożenia i rozwoju.",
    "projects-singularity-view": "Zobacz status projektu",
    "projects-radiometer-date": "// 2019 - obecnie (sporadyczne naprawy)",
    "projects-radiometer-title": "▸ Renowacja automatyki pomiarowej polon alfa",
    "projects-radiometer-desc": "Renowacja klasycznego polskiego sprzętu dozymetrycznego: detektory alfa RUST polon, URS-3, SAPOS-90 oraz oscyloskop HP z lat 80. Zdobyłem praktyczne doświadczenie w pracy ze starymi układami, analizie odpowiedzi pamięci, naprawach modułów wysokiego napięcia, wzmacniaczach i licznikach.",
    "projects-raysid-date": "// 2022 - obecnie",
    "projects-raysid-title": "▸ RaySID — Aplikacja spektrometru gamma",
    "projects-raysid-desc": "Aplikacja desktopowa do analizy widma promieniowania gamma. Integruje pomiary z detektorów scyntylacyjnych, przetwarza dane na bieżąco i prezentuje wyniki w czytelnej formie.",
    "projects-thesis-date": "// 2025 - 2026",
    "projects-thesis-title": "▸ Modułowa platforma obrotowa — praca dyplomowa",
    "projects-thesis-desc": "Projekt innowacyjnej platformy obrotowej do zastosowań laboratoryjnych i przemysłowych. Obejmuje zaawansowany system sterowania, precyzyjne pozycjonowanie oraz projekt interfejsu użytkownika.",
    "projects-interelcom-date": "// 2024 - projekt zespołowy",
    "projects-interelcom-title": "▸ Interelcom — projekt PCB 4-warstwowej",
    "projects-interelcom-desc": "Projekt dla firmy Interelcom. Zaprojektowałem od podstaw płytkę PCB z zasilaniem i przyłączeniem peryferiów. Wymagane było zaprojektowanie ścieżki PCB będącej anteną dla sygnału bluetooth.",
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
    "singularity-overview-desc": "Sieć monitorowania środowiska Singularity to zaawansowany system detekcji zagrożeń. System wykorzystuje rozproszone czujniki ESP32 komunikujące się poprzez ESP-NOW, obsługujący wiele standardów transmisji i zaawansowany interfejs użytkownika Nextion.",
    "singularity-feature1": "▸ Monitoring czasu rzeczywistego wielu parametrów",
    "singularity-feature2": "▸ Komunikacja bezprzewodowa ESP-NOW",
    "singularity-feature3": "▸ Interfejs Nextion HMI",
    "singularity-feature4": "▸ Archiwizacja danych w chmurze",
    "singularity-feature5": "▸ Alerty i powiadomienia",
    
    // Footer
    "connect": "$ connect :",
    "github": "[GitHub]",
    "linkedin": "[LinkedIn]",
    "email": "[Email]",
    "version": "v1.0.0 | Ostatnia aktualizacja: 2026-02-05 @ 23:45",
  },
  
  en: {
    // index.html
    "greeting": "[Hi, my name is]",
    "subtitle": "[and I love to build stuff]",
    "aboutBtn-desktop": "Tell me about you",
    "aboutBtn-mobile": "Tell me about you",
    "mouseBtn-desktop": "What's the cursor effect?",
    "mouseBtn-mobile": "What's in the background?",
    "aboutAnswer-title": "$ whoami",
    "aboutAnswer-role": "Embedded Systems & Automation Engineer",
    "aboutAnswer-spec1": "▸ Specialization: Robotics (PWr)",
    "aboutAnswer-spec2": "▸ Skills: C++ | KiCAD | IoT | PCB Design",
    "aboutAnswer-spec3": "▸ Experience: Nuclear Detection Systems",
    "aboutAnswer-spec4": "▸ Current: Freelance Hardware Engineer",
    "aboutAnswer-hint": "// move mouse away to close",
    "mouseAnswer-title": "$ cat wilson_chamber.info",
    "mouseAnswer-desc": "Those trails following your cursor?",
    "mouseAnswer-what": "▸ Simulation of Wilson Cloud Chamber",
    "mouseAnswer-viz": "▸ Visualizes ionizing radiation tracks",
    "mouseAnswer-alpha": "▸ Alpha particles: short, thick curves",
    "mouseAnswer-beta": "▸ Beta particles: longer, thin curves",
    "mouseAnswer-gamma": "▸ Gamma rays: straight, long lines",
    "mouseAnswer-end": "It's physics, made interactive.",
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
    "aboutme-title-val": "Embedded Systems & Automation Engineer",
    "aboutme-degree": "Degree:",
    "aboutme-degree-val": "Automatyka i Robotyka | Specjalizacja: Robotyka",
    "aboutme-specialty": "Specialty:",
    "aboutme-specialty-val": "PCB Design | C++ | IoT | Nuclear Detection",
    "aboutme-find": "$ find :",
    "aboutme-education": "education",
    "aboutme-experience": "experience",
    "aboutme-skills": "skills",
    "aboutme-contact": "contact",
    "aboutme-education-title": "┌─ EDUCATION ────────────────────────────────────────┐",
    "aboutme-university": "⊡ Wrocław University of Science and Technology",
    "aboutme-degree-label": "Degree:",
    "aboutme-degree-val2": "Robotics, Electrical & Electronics Engineering",
    "aboutme-period": "Period:",
    "aboutme-period-val": "Sep 2021 — Feb 2026",
    "aboutme-focus": "Focus:",
    "aboutme-focus-val": "Embedded Systems, Hardware Design, IoT",
    "aboutme-experience-title": "┌─ EXPERIENCE ────────────────────────────────────────┐",
    "aboutme-innew": "⊡ Nuclear Detection Engineer @ In-New Poland",
    "aboutme-period-label": "Period:",
    "aboutme-period-innew": "Dec 2021 — Dec 2023 | Wrocław",
    "aboutme-tasks": "Tasks:",
    "aboutme-tasks-val": "Radiation detection system design & development",
    "aboutme-stack": "Stack:",
    "aboutme-stack-val": "C++, PCB Design, Real-time Systems, Lab Equipment",
    "aboutme-freelance": "⊡ Freelance Hardware Engineer",
    "aboutme-status": "Status:",
    "aboutme-status-val": "Active | Contract-based",
    "aboutme-services": "Services:",
    "aboutme-services-val": "PCB Design, Embedded Firmware, IoT Integration",
    "aboutme-client": "Client:",
    "aboutme-client-val": "Interelcom (PCB Manufacturing Contract)",
    "aboutme-skills-title": "┌─ SKILLS ──────────────────────────────────────────┐",
    "aboutme-programming": "Programming:",
    "aboutme-programming-val": "C++ / Embedded C",
    "aboutme-hardware": "Hardware:",
    "aboutme-hardware-val": "KiCAD PCB Design",
    "aboutme-iot": "IoT Systems:",
    "aboutme-iot-val": "Embedded IoT",
    "aboutme-spec-label": "Specialization:",
    "aboutme-spec-nuclear": "▸ Nuclear Detection Systems",
    "aboutme-spec-realtime": "▸ Real-time Firmware Development",
    "aboutme-spec-pcb": "▸ PCB Manufacturing Coordination",
    "aboutme-spec-lab": "▸ Laboratory Equipment Integration",
    "aboutme-contact-title": "┌─ CONTACT ──────────────────────────────────────────┐",
    "aboutme-email-label": "Email:",
    "aboutme-email-val": "mateusz@kaminski.dev",
    
    // projects.html
    "projects-timeline": "Projects Timeline",
    "projects-command": "$ ls -la ./projects/",
    "projects-singularity-date": "// 2019 - Present",
    "projects-singularity-title": "▸ Singularity — Environmental Monitoring Network",
    "projects-singularity-desc": "A distributed sensor network for monitoring environmental hazards. This long-term project sparked my journey into electronics, UI development, C++/Python programming, API integration, and understanding sensor interdependencies. Currently in active development and deployment phase.",
    "projects-singularity-view": "View Project Status",
    "projects-radiometer-date": "// 2019 - Present (sporadic repairs)",
    "projects-radiometer-title": "▸ Restoration ofPolon Alpha Measurement Automation",
    "projects-radiometer-desc": "Restoration of classic Polish dosimetry equipment: RUST Polon alpha detectors, URS-3, SAPOS-90, and HP oscilloscope from the 80s. Gained hands-on experience with legacy circuits, integrated memory response analysis, high-voltage module repairs, amplification and counting circuits.",
    "projects-raysid-date": "// 2022 - Present",
    "projects-raysid-title": "▸ RaySID Gamma Spectrometer — Desktop Application",
    "projects-raysid-desc": "Desktop application for gamma radiation spectrum analysis. Integrates measurements from scintillation detectors, processes data in real-time, and displays results in an accessible manner.",
    "projects-thesis-date": "// 2025 - 2026",
    "projects-thesis-title": "▸ Modular Rotating Platform — Engineering Thesis",
    "projects-thesis-desc": "Innovative rotating platform design for laboratory and industrial applications. Includes advanced control systems, precise positioning, and user interface design.",
    "projects-interelcom-date": "// 2024 - Team Project",
    "projects-interelcom-title": "▸ Interelcom — 4-Layer PCB Design Contract",
    "projects-interelcom-desc": "Project for Interelcom company. Designed a 4-layer PCB from scratch with power supply and peripheral connections on PCB, designed and calculated PCB antenna (parameters like impedance, etc.). IoT project.",
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
    "singularity-overview-desc": "Singularity Environmental Monitoring Network is an advanced hazard detection system. The system uses distributed ESP32 sensors communicating via ESP-NOW, supporting multiple transmission standards and an advanced Nextion HMI interface.",
    "singularity-feature1": "▸ Real-time monitoring of multiple parameters",
    "singularity-feature2": "▸ Wireless communication via ESP-NOW",
    "singularity-feature3": "▸ Nextion HMI Interface",
    "singularity-feature4": "▸ Cloud-based data archival",
    "singularity-feature5": "▸ Alerts and notifications",
    
    // Footer
    "connect": "$ connect :",
    "github": "[GitHub]",
    "linkedin": "[LinkedIn]",
    "email": "[Email]",
    "version": "v1.1.0 | Last update: 2026-02-06 @ 11:33",
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
