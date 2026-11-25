const I18N = {
    fr: {
        levelWord: "Niveau",
        scoreWord: "Trouvés",
        instruction: "Consigne : Glisse ton doigt ou ta souris de manière fluide pour relier les mots en ligne droite.",
        wordsTitle: "Mots à chercher :",
        modalSuccessTitle: "Niveau Validé ! ⚡",
        modalSuccessDesc: "Prêt pour le rayon suivant ?",
        modalFinalTitle: "Parcours Electro Solution Terminé ! 🏆",
        modalFinalDesc: "Félicitations ! Vous avez exploré tous les rayons énergie et électroménager d'Electro Solution !",
        nextBtn: "Niveau Suivant",
        replayBtn: "Rejouer depuis le début",
        timeLabel: "Temps réalisé :"
    },
    en: {
        levelWord: "Level",
        scoreWord: "Found",
        instruction: "Instruction: Slide your finger or mouse smoothly to connect words in a straight line.",
        wordsTitle: "Words to find:",
        modalSuccessTitle: "Level Validated! ⚡",
        modalSuccessDesc: "Ready for the next aisle?",
        modalFinalTitle: "Electro Solution Journey Completed! 🏆",
        modalFinalDesc: "Congratulations! You explored all energy and appliance aisles at Electro Solution!",
        nextBtn: "Next Level",
        replayBtn: "Play Again from Start",
        timeLabel: "Time taken:"
    },
    es: {
        levelWord: "Nivel",
        scoreWord: "Encontrados",
        instruction: "Instrucción: Desliza tu dedo o ratón suavemente para conectar las palabras en línea recta.",
        wordsTitle: "Palabras a buscar:",
        modalSuccessTitle: "¡Nivel Validado! ⚡",
        modalSuccessDesc: "¿Listo para el siguiente pasillo?",
        modalFinalTitle: "¡Recorrido Electro Solution Completado! 🏆",
        modalFinalDesc: "¡Felicidades! ¡Exploraste todos los pasillos de energía y electrodomésticos de Electro Solution!",
        nextBtn: "Siguiente Nivel",
        replayBtn: "Jugar de Nuevo",
        timeLabel: "Tiempo empleado:"
    }
};

// 22 Niveaux de 6 mots courts chacun autour de l'électroménager, l'énergie et les services magasin (FR, EN, ES)
const LEVELS = [
    {
        title: { fr: "Niveau 1 : Énergie & Génératrices", en: "Level 1: Power & Generators", es: "Nivel 1: Energía y Generadores" },
        words: {
            fr: ["MOTEUR", "VOLT", "WATT", "COURANT", "CABLE", "PRISE"],
            en: ["ENGINE", "VOLT", "WATT", "POWER", "CABLE", "PLUG"],
            es: ["MOTOR", "VOLTIO", "VATIO", "CORRIENT", "CABLE", "ENCHUFE"]
        }
    },
    {
        title: { fr: "Niveau 2 : Ventilation & Fraîcheur", en: "Level 2: Fans & Cooling", es: "Nivel 2: Ventilación y Frescura" },
        words: {
            fr: ["VENTILO", "BRISE", "SOUFFLE", "AIR", "HELICE", "FRAIS"],
            en: ["FAN", "BREEZE", "BLOW", "AIR", "BLADE", "COOL"],
            es: ["VENTILA", "BRISA", "SOPLO", "AIRE", "HELICE", "FRESCO"]
        }
    },
    {
        title: { fr: "Niveau 3 : Énergie Solaire", en: "Level 3: Solar Energy", es: "Nivel 3: Energía Solar" },
        words: {
            fr: ["SOLAIRE", "PANNEAU", "SOLEIL", "CHARGE", "LITHIUM", "CELLULE"],
            en: ["SOLAR", "PANEL", "SUN", "CHARGE", "LITHIUM", "CELL"],
            es: ["SOLAR", "PANEL", "SOL", "CARGA", "LITIO", "CELDA"]
        }
    },
    {
        title: { fr: "Niveau 4 : Froid & Réfrigération", en: "Level 4: Cold & Refrigeration", es: "Nivel 4: Frío y Refrigeración" },
        words: {
            fr: ["FRIGO", "GLACE", "FROID", "BAC", "GIVRE", "CLIM"],
            en: ["FRIDGE", "ICE", "COLD", "TRAY", "FROST", "AC"],
            es: ["NEVERA", "HIELO", "FRIO", "CAJON", "ESCARCHA", "CLIMA"]
        }
    },
    {
        title: { fr: "Niveau 5 : Petit Électroménager", en: "Level 5: Small Appliances", es: "Nivel 5: Pequeños Electrodomésticos" },
        words: {
            fr: ["MIXEUR", "GRILL", "FOUR", "FER", "ROBOT", "TOAST"],
            en: ["MIXER", "GRILL", "OVEN", "IRON", "BLENDER", "TOAST"],
            es: ["BATIDOR", "ASADOR", "HORNO", "PLANCHA", "LICUAD", "TOSTAD"]
        }
    },
    {
        title: { fr: "Niveau 6 : Lavage & Entretien", en: "Level 6: Laundry & Care", es: "Nivel 6: Lavado y Cuidado" },
        words: {
            fr: ["LAVAGE", "LINGE", "TAMBOUR", "CYCLE", "ESSOR", "VAPEUR"],
            en: ["WASH", "LAUNDRY", "DRUM", "CYCLE", "SPIN", "STEAM"],
            es: ["LAVADO", "ROPA", "TAMBOR", "CICLO", "CENTRIF", "VAPOR"]
        }
    },
    {
        title: { fr: "Niveau 7 : Éclairage & Ampoules", en: "Level 7: Lighting & Bulbs", es: "Nivel 7: Iluminación y Bombillas" },
        words: {
            fr: ["LAMPE", "LEDS", "AMPOULE", "LUMIERE", "SPOT", "NEON"],
            en: ["LAMP", "LEDS", "BULB", "LIGHT", "SPOT", "NEON"],
            es: ["LAMPARA", "LEDS", "BOMBILLA", "LUZ", "FOCO", "NEON"]
        }
    },
    {
        title: { fr: "Niveau 8 : Batteries & Onduleurs", en: "Level 8: Batteries & Inverters", es: "Nivel 8: Baterías e Inversores" },
        words: {
            fr: ["ONDULE", "ACCU", "AMPERE", "BORNE", "RELAIS", "BACKUP"],
            en: ["INVERT", "BATTERY", "AMP", "POLE", "RELAY", "BACKUP"],
            es: ["INVERS", "BATERIA", "AMPERIO", "BORNE", "RELE", "RESPALD"]
        }
    },
    {
        title: { fr: "Niveau 9 : Image & Télévision", en: "Level 9: Display & TV", es: "Nivel 9: Imagen y Televisión" },
        words: {
            fr: ["ECRAN", "TELE", "SMART", "CABLE", "HDMI", "IMAGE"],
            en: ["SCREEN", "TV", "SMART", "CABLE", "HDMI", "PICTURE"],
            es: ["PANTALLA", "TELE", "SMART", "CABLE", "HDMI", "IMAGEN"]
        }
    },
    {
        title: { fr: "Niveau 10 : Audio & Sonorisation", en: "Level 10: Audio & Sound", es: "Nivel 10: Audio y Sonido" },
        words: {
            fr: ["BAFFLE", "SON", "RADIO", "AMPLI", "BASS", "MICRO"],
            en: ["SPEAKER", "SOUND", "RADIO", "AMP", "BASS", "MIC"],
            es: ["PARLANT", "SONIDO", "RADIO", "AMPLI", "BAJO", "MICRO"]
        }
    },
    {
        title: { fr: "Niveau 11 : Cuisine & Café", en: "Level 11: Kitchen & Coffee", es: "Nivel 11: Cocina y Café" },
        words: {
            fr: ["CAFE", "TASSE", "PLAQUE", "HOTTE", "CUISINE", "BOUILL"],
            en: ["COFFEE", "CUP", "STOVE", "HOOD", "KITCHEN", "KETTLE"],
            es: ["CAFE", "TAZA", "PLACA", "CAMPANA", "COCINA", "HERVID"]
        }
    },
    {
        title: { fr: "Niveau 12 : Protection Électrique", en: "Level 12: Electrical Protection", es: "Nivel 12: Protección Eléctrica" },
        words: {
            fr: ["FUSIBLE", "TERRE", "PHASE", "NEUTRE", "COUPURE", "SECUR"],
            en: ["FUSE", "GROUND", "PHASE", "NEUTRAL", "BREAKER", "SAFE"],
            es: ["FUSIBLE", "TIERRA", "FASE", "NEUTRO", "CORTE", "SEGURO"]
        }
    },
    {
        title: { fr: "Niveau 13 : Outillage & Installation", en: "Level 13: Tools & Setup", es: "Nivel 13: Herramientas e Instalación" },
        words: {
            fr: ["PINCE", "VIS", "PERCE", "TESTEUR", "FIL", "POSE"],
            en: ["PLIERS", "SCREW", "DRILL", "TESTER", "WIRE", "MOUNT"],
            es: ["PINZA", "TORNILL", "TALADRO", "PROBAD", "HILO", "MONTAJE"]
        }
    },
    {
        title: { fr: "Niveau 14 : Service Client & Magasin", en: "Level 14: Customer Service & Store", es: "Nivel 14: Atención y Tienda" },
        words: {
            fr: ["MAGASIN", "CLIENT", "RAYON", "ACCUEIL", "CONSEIL", "OFFRE"],
            en: ["STORE", "CLIENT", "AISLE", "WELCOME", "ADVICE", "DEAL"],
            es: ["TIENDA", "CLIENTE", "PASILLO", "ACOGIDA", "CONSEJO", "OFERTA"]
        }
    },
    {
        title: { fr: "Niveau 15 : Vente, Devis & Garantie", en: "Level 15: Sales, Quote & Warranty", es: "Nivel 15: Venta, Cotización y Garantía" },
        words: {
            fr: ["VENTE", "PRIX", "DEVIS", "FACTURE", "GARANT", "CAISSE"],
            en: ["SALE", "PRICE", "QUOTE", "INVOICE", "WARRANT", "CASHIER"],
            es: ["VENTA", "PRECIO", "COTIZA", "FACTURA", "GARANT", "CAJA"]
        }
    },
    {
        title: { fr: "Niveau 16 : Livraison & Stock", en: "Level 16: Delivery & Stock", es: "Nivel 16: Entrega y Stock" },
        words: {
            fr: ["STOCK", "LIVRER", "CARTON", "COLIS", "DEPOT", "NEUF"],
            en: ["STOCK", "DELIVER", "BOX", "PARCEL", "DEPOT", "NEW"],
            es: ["STOCK", "ENTREGA", "CAJA", "PAQUETE", "DEPOSIT", "NUEVO"]
        }
    },
    {
        title: { fr: "Niveau 17 : Carburant & Groupe", en: "Level 17: Fuel & Generator", es: "Nivel 17: Combustible y Planta" },
        words: {
            fr: ["DIESEL", "HUILE", "FILTRE", "CAPOT", "DEMAR", "RESERV"],
            en: ["DIESEL", "OIL", "FILTER", "HOOD", "START", "TANK"],
            es: ["DIESEL", "ACEITE", "FILTRO", "CAPO", "ARRANQ", "TANQUE"]
        }
    },
    {
        title: { fr: "Niveau 18 : Maison Connectée", en: "Level 18: Smart Home", es: "Nivel 18: Hogar Conectado" },
        words: {
            fr: ["WIFI", "CAPTEUR", "MINUTE", "ALARME", "CAMERA", "DOMO"],
            en: ["WIFI", "SENSOR", "TIMER", "ALARM", "CAMERA", "SMART"],
            es: ["WIFI", "SENSOR", "RELOJ", "ALARMA", "CAMARA", "DOMO"]
        }
    },
    {
        title: { fr: "Niveau 19 : Réparation & Atelier", en: "Level 19: Repair & Workshop", es: "Nivel 19: Reparación y Taller" },
        words: {
            fr: ["ATELIER", "PANNE", "PIECE", "SOUDER", "REGLER", "TEST"],
            en: ["SHOP", "FAULT", "PART", "SOLDER", "TUNE", "TEST"],
            es: ["TALLER", "FALLA", "PIEZA", "SOLDAR", "AJUSTAR", "PRUEBA"]
        }
    },
    {
        title: { fr: "Niveau 20 : Rallonges & Accessoires", en: "Level 20: Cords & Accessories", es: "Nivel 20: Extensiones y Accesorios" },
        words: {
            fr: ["ADAPT", "FICHE", "SOCLE", "BOBINE", "BOITIER", "SUPPORT"],
            en: ["ADAPT", "PLUG", "SOCKET", "REEL", "BOX", "STAND"],
            es: ["ADAPT", "CLAVIJA", "BASE", "BOBINA", "CAJA", "SOPORTE"]
        }
    },
    {
        title: { fr: "Niveau 21 : Économie & Rendement", en: "Level 21: Saving & Efficiency", es: "Nivel 21: Ahorro y Rendimiento" },
        words: {
            fr: ["ECO", "DURABLE", "GAIN", "PUISS", "FLUX", "STABLE"],
            en: ["ECO", "DURABLE", "SAVE", "POWER", "FLOW", "STABLE"],
            es: ["ECO", "DURABLE", "AHORRO", "POTENC", "FLUJO", "ESTABLE"]
        }
    },
    {
        title: { fr: "Niveau 22 : Electro Solution Ultime", en: "Level 22: Ultimate Electro Solution", es: "Nivel 22: Electro Solution Último" },
        words: {
            fr: ["ELECTRO", "SOLUT", "ENERGIE", "MAISON", "QUALITE", "SERVICE"],
            en: ["ELECTRO", "SOLUT", "ENERGY", "HOME", "QUALITY", "SERVICE"],
            es: ["ELECTRO", "SOLUC", "ENERGIA", "HOGAR", "CALIDAD", "SERVIC"]
        }
    }
];

let currentLang = 'fr';
let currentLevelIndex = 0;
let grid = [];
let placedWords = [];
let foundWords = new Set();
let selectedCells = [];
let isInteracting = false;
let startCell = null;

let timerInterval = null;
let secondsElapsed = 0;
const GRID_SIZE = 10;

function normalizeWord(word) {
    return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z]/g, '').toUpperCase();
}

document.addEventListener('DOMContentLoaded', () => {
    initLevel(currentLevelIndex);

    document.getElementById('langSelect').addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateUIStaticTexts();
        initLevel(currentLevelIndex);
    });

    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        document.body.classList.toggle('theme-light');
        const btn = document.getElementById('themeToggleBtn');
        btn.innerText = document.body.classList.contains('theme-light') ? '🌙' : '☀️';
    });

    document.getElementById('nextLevelBtn').addEventListener('click', () => {
        document.getElementById('levelModal').classList.add('hidden');
        currentLevelIndex++;
        if (currentLevelIndex >= LEVELS.length) {
            currentLevelIndex = 0;
        }
        initLevel(currentLevelIndex);
    });

    window.addEventListener('mouseup', endSelection);
    window.addEventListener('touchend', endSelection);
});

function updateUIStaticTexts() {
    const t = I18N[currentLang];
    document.getElementById('gameInstruction').innerText = t.instruction;
    document.getElementById('wordsToFindTitle').innerText = t.wordsTitle;
}

function startTimer() {
    clearInterval(timerInterval);
    secondsElapsed = 0;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        secondsElapsed++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay() {
    const mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
    const secs = (secondsElapsed % 60).toString().padStart(2, '0');
    document.getElementById('timerDisplay').innerText = `⏱️ ${mins}:${secs}`;
}

function formatTime(totalSeconds) {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (currentLang === 'fr') {
        if (mins > 0) return `${mins} minute(s) et ${secs} seconde(s)`;
        return `${secs} seconde(s)`;
    } else if (currentLang === 'es') {
        if (mins > 0) return `${mins} minuto(s) y ${secs} segundo(s)`;
        return `${secs} segundo(s)`;
    } else {
        if (mins > 0) return `${mins} minute(s) and ${secs} second(s)`;
        return `${secs} second(s)`;
    }
}

function initLevel(levelIdx) {
    const levelData = LEVELS[levelIdx];
    const t = I18N[currentLang];
    const wordsForLang = levelData.words[currentLang];

    document.getElementById('levelDisplay').innerText = `${t.levelWord} ${levelIdx + 1} / ${LEVELS.length}`;
    document.getElementById('levelThemeTitle').innerText = levelData.title[currentLang];
    updateUIStaticTexts();

    foundWords.clear();
    generateGrid(wordsForLang);
    renderWordList(wordsForLang);
    renderGrid();
    startTimer();
}

function generateGrid(words) {
    grid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));
    placedWords = [];

    words.forEach(word => {
        let placed = false;
        let attempts = 0;
        const cleanWord = normalizeWord(word);

        while (!placed && attempts < 150) {
            attempts++;
            const direction = Math.floor(Math.random() * 3); // 0: Horizontal, 1: Vertical, 2: Diagonal
            let row = Math.floor(Math.random() * GRID_SIZE);
            let col = Math.floor(Math.random() * GRID_SIZE);

            if (canPlaceWord(cleanWord, row, col, direction)) {
                placeWord(cleanWord, row, col, direction);
                placedWords.push({ original: word, clean: cleanWord, coords: getWordCoords(cleanWord, row, col, direction) });
                placed = true;
            }
        }
    });

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            if (grid[r][c] === '') {
                grid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
            }
        }
    }
}

function canPlaceWord(word, row, col, dir) {
    const len = word.length;
    if (dir === 0 && col + len > GRID_SIZE) return false;
    if (dir === 1 && row + len > GRID_SIZE) return false;
    if (dir === 2 && (col + len > GRID_SIZE || row + len > GRID_SIZE)) return false;

    for (let i = 0; i < len; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        if (grid[r][c] !== '' && grid[r][c] !== word[i]) {
            return false;
        }
    }
    return true;
}

function placeWord(word, row, col, dir) {
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        grid[r][c] = word[i];
    }
}

function getWordCoords(word, row, col, dir) {
    let coords = [];
    for (let i = 0; i < word.length; i++) {
        let r = row + (dir === 1 || dir === 2 ? i : 0);
        let c = col + (dir === 0 || dir === 2 ? i : 0);
        coords.push(`${r}-${c}`);
    }
    return coords;
}

function renderGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = '';

    for (let r = 0; r < GRID_SIZE; r++) {
        for (let c = 0; c < GRID_SIZE; c++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.innerText = grid[r][c];

            cell.addEventListener('mousedown', (e) => { e.preventDefault(); startSelection(r, c); });
            cell.addEventListener('mouseenter', () => { if (isInteracting) updateSelection(r, c); });

            cell.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startSelection(r, c);
            }, { passive: false });

            cell.addEventListener('touchmove', (e) => {
                e.preventDefault();
                if (!isInteracting) return;
                const touch = e.touches[0];
                const target = document.elementFromPoint(touch.clientX, touch.clientY);
                if (target && target.classList.contains('grid-cell')) {
                    updateSelection(parseInt(target.dataset.row), parseInt(target.dataset.col));
                }
            }, { passive: false });

            container.appendChild(cell);
        }
    }
}

function renderWordList(words) {
    const container = document.getElementById('wordList');
    container.innerHTML = '';
    const t = I18N[currentLang];
    words.forEach((word, idx) => {
        const chip = document.createElement('div');
        chip.classList.add('word-chip');
        chip.id = `chip-${idx}`;
        chip.innerText = word;
        container.appendChild(chip);
    });
    document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : 0 / ${words.length}`;
}

function startSelection(r, c) {
    isInteracting = true;
    startCell = { r, c };
    selectedCells = [`${r}-${c}`];
    updateCellStyles();
}

function updateSelection(r, c) {
    if (!isInteracting || !startCell) return;

    let dr = r - startCell.r;
    let dc = c - startCell.c;

    let steps = Math.max(Math.abs(dr), Math.abs(dc));
    if (steps === 0) {
        selectedCells = [`${startCell.r}-${startCell.c}`];
        updateCellStyles();
        return;
    }

    let stepR = dr === 0 ? 0 : dr / steps;
    let stepC = dc === 0 ? 0 : dc / steps;

    // Verrouille strictement les mouvements aux lignes droites (horizontale, verticale, diagonale à 45°)
    if (Math.abs(stepR) !== Math.abs(stepC) && stepR !== 0 && stepC !== 0) {
        return;
    }

    selectedCells = [];
    for (let i = 0; i <= steps; i++) {
        let currR = Math.round(startCell.r + (i * stepR));
        let currC = Math.round(startCell.c + (i * stepC));
        selectedCells.push(`${currR}-${currC}`);
    }

    updateCellStyles();
}

function endSelection() {
    if (!isInteracting) return;
    isInteracting = false;
    startCell = null;

    let formedWord = selectedCells.map(key => {
        const [r, c] = key.split('-').map(Number);
        return grid[r][c];
    }).join('');

    const currentWords = LEVELS[currentLevelIndex].words[currentLang];
    const t = I18N[currentLang];

    placedWords.forEach((pw, idx) => {
        const isMatch = pw.clean === formedWord || pw.clean === formedWord.split('').reverse().join('');
        if (isMatch && !foundWords.has(idx)) {
            foundWords.add(idx);

            selectedCells.forEach(key => {
                const cell = document.querySelector(`[data-row='${key.split('-')[0]}'][data-col='${key.split('-')[1]}']`);
                if (cell) cell.classList.add('found');
            });

            const chip = document.getElementById(`chip-${idx}`);
            if (chip) chip.classList.add('found');

            document.getElementById('scoreDisplay').innerText = `${t.scoreWord} : ${foundWords.size} / ${currentWords.length}`;

            if (foundWords.size === currentWords.length) {
                stopTimer();
                setTimeout(showLevelModal, 400);
            }
        }
    });

    selectedCells = [];
    updateCellStyles();
}

function updateCellStyles() {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        const key = `${cell.dataset.row}-${cell.dataset.col}`;
        if (selectedCells.includes(key)) {
            cell.classList.add('selected');
        } else {
            cell.classList.remove('selected');
        }
    });
}

function showLevelModal() {
    const modal = document.getElementById('levelModal');
    const t = I18N[currentLang];
    const timeFormatted = formatTime(secondsElapsed);

    document.getElementById('modalTimeResult').innerText = `${t.timeLabel} ${timeFormatted}`;

    if (currentLevelIndex === LEVELS.length - 1) {
        document.getElementById('modalTitle').innerText = t.modalFinalTitle;
        document.getElementById('modalDesc').innerText = t.modalFinalDesc;
        document.getElementById('nextLevelBtn').innerText = t.replayBtn;
    } else {
        document.getElementById('modalTitle').innerText = t.modalSuccessTitle;
        document.getElementById('modalDesc').innerText = t.modalSuccessDesc;
        document.getElementById('nextLevelBtn').innerText = t.nextBtn;
    }
    modal.classList.remove('hidden');
}