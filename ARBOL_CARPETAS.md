# 🗂️ Árbol Completo de Carpetas y Archivos

## Estructura Visual Completa

```
d:\2026 D\app curso ingreso\
│
├── 📦 CARPETA RAÍZ (Configuración del Proyecto)
│
├── 📄 index.html                    # Punto de entrada (240 líneas)
│                                    # ↓ Carga src/main.jsx
│
├── 📄 package.json                  # Dependencias & scripts (30 líneas)
│                                    # Contiene: React, Firebase, Tailwind, Vite
│
├── 📄 package-lock.json             # Lock de versiones de npm (auto-generado)
│
├── ⚙️  CONFIGURACIÓN
│   ├── vite.config.js               # Configuración Vite (14 líneas)
│   ├── tailwind.config.js           # Configuración Tailwind (35 líneas)
│   ├── postcss.config.js            # Configuración PostCSS (6 líneas)
│   └── .gitignore                   # Archivos ignorados por Git (28 líneas)
│
├── 🔐 VARIABLES DE ENTORNO
│   ├── .env.example                 # Template para .env (7 líneas)
│   └── .env.local                   # Credenciales Firebase (⚠️ NO COMMITEAR)
│       └── DEBE CONTENER:
│           ├── VITE_FIREBASE_API_KEY
│           ├── VITE_FIREBASE_AUTH_DOMAIN
│           ├── VITE_FIREBASE_PROJECT_ID
│           ├── VITE_FIREBASE_STORAGE_BUCKET
│           ├── VITE_FIREBASE_MESSAGING_SENDER_ID
│           └── VITE_FIREBASE_APP_ID
│
├── 📚 DOCUMENTACIÓN (EMPIEZA AQUÍ)
│   ├── 📘 README.md                 # ← LEER PRIMERO (250+ líneas)
│   │   └── Guía general, requisitos, instalación
│   │
│   ├── 📗 QUICK_START.md            # Inicio rápido (200+ líneas)
│   │   └── 5 pasos rápidos + troubleshooting
│   │
│   ├── 📙 SETUP_GUIDE.md            # Instalación paso a paso (300+ líneas)
│   │   └── Instrucciones detalladas cada fase
│   │
│   ├── 📕 TECHNICAL_SPECS.md        # Especificaciones técnicas (400+ líneas)
│   │   └── Stack, modelo datos, reglas Firestore, APIs usadas
│   │
│   ├── 📓 ESTRUCTURA_PROYECTO.md    # Este árbol + descripción files (200+ líneas)
│   │   └── Tabla de todos los archivos, LoC, descripción
│   │
│   ├── 📔 VSCODE_GUIDE.md           # Guía para VS Code (300+ líneas)
│   │   └── Cómo usar VS Code, atajos, terminal, debugging
│   │
│   ├── ✅ CHECKLIST.md              # Verificación paso a paso (250+ líneas)
│   │   └── Checklist para verificar que todo funciona
│   │
│   └── 📝 CHANGELOG.md              # Histórico de cambios (150+ líneas)
│       └── v1.0.0 features, roadmap futuro
│
├── 📊 DATOS DE PRUEBA
│   └── ejemplo_estudiantes.csv      # 30 estudiantes de ejemplo (32 líneas)
│       └── Formato correcto para importar
│
├── 📁 node_modules/                 # ⚠️ NO EDITAR (auto-generado)
│   ├── react/
│   ├── firebase/
│   ├── tailwindcss/
│   └── ... 500+ paquetes
│
├── 📁 dist/                         # ⚠️ (se crea con npm run build)
│   └── Archivos compilados para producción
│
└── 📦 SRC/ (CÓDIGO FUENTE - AQUÍ DESARROLLAS)
    │
    ├── 🎯 App.jsx                   # Componente raíz (80 líneas)
    │   └── Maneja autenticación, redirige Login ↔ Dashboard
    │
    ├── 🚀 main.jsx                  # Entry point React (10 líneas)
    │   └── ReactDOM.createRoot(App)
    │
    ├── 🎨 index.css                 # Estilos globales (100+ líneas)
    │   └── Variables CSS, Tailwind directives, estilos base
    │
    ├── 🎨 COMPONENTS/ (Componentes React)
    │   │
    │   ├── 🔐 auth/
    │   │   ├── Login.jsx             # Pantalla de login (160 líneas)
    │   │   │   └── Google OAuth + validación whitelist
    │   │   │
    │   │   ├── ProtectedRoute.jsx    # (futuro: protejer rutas)
    │   │   └── UserProfile.jsx       # (futuro: perfil usuario)
    │   │
    │   ├── 📊 dashboard/
    │   │   ├── Dashboard.jsx         # Panel principal (220 líneas)
    │   │   │   ├── Header con usuario + logout
    │   │   │   ├── Sidebar con menú
    │   │   │   ├── Main content dinámico
    │   │   │   └── Cards de acceso rápido
    │   │   │
    │   │   ├── Sidebar.jsx           # (futuro: refactorizado)
    │   │   └── Header.jsx            # (futuro: refactorizado)
    │   │
    │   ├── 📤 import/
    │   │   ├── ImportStudents.jsx    # Importador CSV (260 líneas)
    │   │   │   ├── Validación CSV
    │   │   │   ├── Preview de datos
    │   │   │   ├── Carga en batch a Firestore
    │   │   │   └── Manejo de errores
    │   │   │
    │   │   └── ImportProgress.jsx    # (futuro: barra de progreso)
    │   │
    │   ├── 👥 students/ (futuro)
    │   │   ├── StudentsList.jsx      # (futuro: lista estudiantes)
    │   │   ├── StudentDetail.jsx     # (futuro: detalle estudiante)
    │   │   └── StudentForm.jsx       # (futuro: edición)
    │   │
    │   ├── 📝 grades/ (futuro)
    │   │   ├── GradeUpload.jsx       # (futuro: cargar notas)
    │   │   └── GradeBoard.jsx        # (futuro: tablero)
    │   │
    │   ├── 📊 reports/ (futuro)
    │   │   ├── Reports.jsx           # (futuro: reportes)
    │   │   └── ExportData.jsx        # (futuro: exportar)
    │   │
    │   └── 🧩 ui/ (Componentes Reutilizables - Shadcn/ui style)
    │       │
    │       ├── Button.jsx            # (30 líneas)
    │       │   └── 4 variantes: default, destructive, outline, ghost
    │       │
    │       ├── Card.jsx              # (60 líneas)
    │       │   ├── Card (contenedor)
    │       │   ├── CardHeader
    │       │   ├── CardTitle
    │       │   ├── CardDescription
    │       │   ├── CardContent
    │       │   └── CardFooter
    │       │
    │       ├── Input.jsx             # (20 líneas)
    │       │   └── Input text personalizado
    │       │
    │       ├── Label.jsx             # (15 líneas)
    │       │   └── Etiqueta para formularios
    │       │
    │       ├── Alert.jsx             # (40 líneas)
    │       │   ├── Alert (contenedor)
    │       │   ├── AlertTitle
    │       │   ├── AlertDescription
    │       │   └── 4 variantes: default, destructive, success, warning
    │       │
    │       ├── Loading.jsx           # (20 líneas)
    │       │   └── Spinner de carga
    │       │
    │       ├── Modal.jsx             # (futuro: diálogos)
    │       └── Table.jsx             # (futuro: tablas)
    │
    ├── ⚙️  CONFIG/ (Configuración de la App)
    │   │
    │   ├── firebase.js               # (30 líneas)
    │   │   └── Inicialización Firebase Auth + Firestore
    │   │       ├── initializeApp()
    │   │       ├── getAuth()
    │   │       └── getFirestore()
    │   │
    │   └── constants.js              # (futuro: constantes globales)
    │
    └── 🛠️  UTILS/ (Funciones Utilitarias)
        │
        ├── cn.js                     # (10 líneas)
        │   └── clsx + twMerge para Tailwind
        │
        ├── authUtils.js              # (50 líneas)
        │   ├── checkAdminWhitelist()  → Valida email en Firestore
        │   └── getUserRole()          → Obtiene rol del usuario
        │
        ├── csvUtils.js               # (150+ líneas)
        │   ├── parseCSV()             → Parsea archivo CSV
        │   ├── mapStudentData()       → Mapea a formato Firestore
        │   └── validateStudentData()  → Valida campos
        │
        ├── dateUtils.js              # (futuro: funciones de fecha)
        │
        └── validations.js            # (futuro: validaciones compartidas)

```

---

## 📊 Estadísticas del Proyecto

### Por Tipo de Archivo

```
Configuración:       4 archivos  (80 líneas)
Documentación:       8 archivos  (2,000+ líneas)
Datos de Prueba:     1 archivo   (32 líneas)
Estilos CSS:         1 archivo   (100+ líneas)
React Componentes:   15 archivos (1,300+ líneas)
Utils/Config:        7 archivos  (300+ líneas)
                     ─────────────────────────
TOTAL:              36 archivos  (3,800+ líneas)
```

### Por Carpeta

```
/src/components/auth/        120 líneas
/src/components/dashboard/   220 líneas
/src/components/import/      260 líneas
/src/components/ui/          250 líneas
/src/config/                  30 líneas
/src/utils/                  300 líneas
Raíz (documentación)       2,50+ líneas
```

### Dependencias Principales

```json
{
  "runtime": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "firebase": "10.7.1",
    "react-router-dom": "6.20.0",
    "lucide-react": "0.294.0",
    "tailwindcss": "3.3.6",
    "clsx": "2.0.0",
    "tailwind-merge": "2.2.0"
  },
  "devDependencies": {
    "vite": "5.0.0",
    "@vitejs/plugin-react": "4.2.0",
    "postcss": "8.4.31",
    "autoprefixer": "10.4.16"
  }
}
```

---

## 🔄 Flujo de Datos Principales

```
Usuario intenta acceder
    ↓
App.jsx (root component)
    ↓
¿Autenticado? → onAuthStateChanged()
    │
    ├─→ SÍ → checkAdminWhitelist() → authUtils.js
    │         ↓
    │         ¿En whitelist?
    │         ├→ SÍ → setUser() → Dashboard
    │         └→ NO → signOut() → Login (error)
    │
    └─→ NO → Login.jsx
             ├─ Google OAuth
             ├─ signInWithPopup()
             └─ Repite validación

DESDE DASHBOARD:
    Importar CSV → ImportStudents.jsx
    ├─ parseCSV() → csvUtils.js
    ├─ mapStudentData() → csvUtils.js
    ├─ validateStudentData() → csvUtils.js
    └─ writeBatch() → Firestore DB
        └─ cycles/2026/students/{id}
```

---

## 🎯 Archivos Más Importantes (Para Editar)

### 1️⃣ Para Cambiar UI/Estilos
```
src/index.css           ← Colores globales
src/components/ui/      ← Componentes reutilizables
src/components/*/       ← Componentes específicos
```

### 2️⃣ Para Añadir Funcionalidad
```
src/components/        ← Nuevos componentes
src/utils/             ← Nuevas funciones
src/config/            ← Nueva configuración
```

### 3️⃣ Para Comprender la App
```
README.md              ← Empezar aquí
TECHNICAL_SPECS.md     ← Modelo de datos
SETUP_GUIDE.md         ← Instalación
VSCODE_GUIDE.md        ← Guía VS Code
```

---

## 📱 Dónde Hace Cada Cosa

| Acción | Dónde | Archivo | Línea |
|--------|-------|---------|-------|
| Usuario hace login | UI | Login.jsx | 15-50 |
| Valida whitelist | Lógica | authUtils.js | 10-25 |
| Muestra Dashboard | UI | Dashboard.jsx | 1-50 |
| Menú lateral | UI | Dashboard.jsx | 50-80 |
| Importar CSV | UI | ImportStudents.jsx | 1-80 |
| Parsear CSV | Lógica | csvUtils.js | 1-40 |
| Validar datos | Lógica | csvUtils.js | 40-80 |
| Guardar en Firebase | DB | ImportStudents.jsx | 80-120 |
| Estilos globales | CSS | index.css | 1-50 |
| Variables CSS | CSS | index.css | 6-30 |
| Inicializar Firebase | Config | firebase.js | 1-30 |

---

## 🔗 Cómo Las Carpetas se Conectan

```
index.html
    └── src/main.jsx
        └── src/App.jsx (maneja estado global)
            ├── Renderiza: components/auth/Login.jsx
            │   └── Llama: utils/authUtils.js
            │
            └── Renderiza: components/dashboard/Dashboard.jsx
                ├── Contiene: components/import/ImportStudents.jsx
                │   └── Llama: utils/csvUtils.js
                │       └── Escribe a: config/firebase.js
                │
                └── Usa: components/ui/* (Button, Card, Alert, etc.)
                    └── Aplicados: tailwind.config.js + index.css
```

---

## 📈 Que Falta Implementar (Road Map)

```
FASE 2:
├── components/students/StudentsList.jsx
├── components/students/StudentDetail.jsx
└── components/students/StudentForm.jsx

FASE 3:
├── components/grades/GradeUpload.jsx
├── components/grades/GradeBoard.jsx

FASE 4:
├── components/reports/Reports.jsx
├── components/reports/ExportData.jsx

UTILITIES:
├── utils/dateUtils.js
├── utils/validations.js
├── hooks/useAuth.js
├── hooks/useFirestore.js
└── hooks/useNotification.js
```

---

## 💡 Tips de Navegación

**En VS Code**, para encontrar algo rápido:

```
Ctrl + P           → Buscar archivo por nombre
Ctrl + Shift + P   → Paleta de comandos
Ctrl + F           → Buscar en archivo actual
Ctrl + H           → Buscar y reemplazar
Ctrl + G           → Ir a línea específica
```

---

**Última actualización**: Abril 2026
