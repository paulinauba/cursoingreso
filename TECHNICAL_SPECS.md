# 📐 Especificaciones Técnicas

## 🏗️ Stack Tecnológico

### Frontend
- **React.js** 18.2.0 - Biblioteca UI declarativa
- **Vite** 5.0.0 - Bundler moderno y rápido
- **Tailwind CSS** 3.3.6 - Framework CSS utilitario
- **Shadcn/ui Components** - Componentes accesibles reutilizables
- **Lucide React** - Iconografía moderna

### Backend & Base de Datos
- **Firebase 10.7.1**
  - **Authentication**: Login con Google + Custom Rules
  - **Firestore**: Base de datos NoSQL en tiempo real
  - **Storage**: Almacenamiento de archivos (futura expansión)

### Herramientas de Desarrollo
- **PostCSS** - Procesador de CSS
- **Autoprefixer** - Compatibilidad de navegadores
- **Clsx & Tailwind Merge** - Utilidades para clases Tailwind

---

## 📊 Modelo de Datos Firestore

### Documento: `admins`

**Ruta**: `/admins/{adminId}`

```typescript
{
  email: string           // Email único del usuario
  role: 'admin' | 'secretary'  // Rol del usuario
  nombre: string          // Nombre completo
  apellido?: string       // Apellido (opcional)
  telefono?: string       // Teléfono (opcional)
  createdAt: Timestamp    // Fecha de creación
  updatedAt?: Timestamp   // Última actualización
  estado: 'activo' | 'inactivo'  // Estado (default: activo)
}
```

**Índices**: email (únique)

---

### Colección: `cycles`

**Ruta**: `/cycles`

Agrupador de ciclos académicos (años).

---

### Documento en Ciclo: `{year}`

**Ruta**: `/cycles/{year}`

```typescript
{
  year: string            // Año: "2026"
  nombre: string          // Nombre del ciclo
  fechaInicio: Timestamp  // Fecha de inicio
  fechaFin: Timestamp     // Fecha de fin
  totalEstudiantes: number // Total de estudiantes
  createdAt: Timestamp    // Creación
  updatedAt: Timestamp    // Actualización
}
```

---

### Subcolección: `students`

**Ruta**: `/cycles/{year}/students/{studentId}`

```typescript
{
  id: string              // ID único: EST-001
  apellido: string        // Apellido del estudiante
  nombre: string          // Nombre del estudiante
  dnI: string            // Documento Nacional de Identidad
  fechaNacimiento: string // Fecha: YYYY-MM-DD
  comision: string        // Comisión: A, B, C...
  gestion: string         // Año de gestión: 2025
  partido: string         // Municipio/Partido
  cycle: string           // Ciclo: 2026
  
  // Array de exámenes
  exams: {
    'M1-2026': number | null    // Matemática 1
    'M2-2026': number | null    // Matemática 2
    'M3-2026': number | null    // Matemática 3
    'RM-2026': number | null    // Recuperatorio Matemática
    'L1-2026': number | null    // Lengua 1
    'L2-2026': number | null    // Lengua 2
    'L3-2026': number | null    // Lengua 3
    'RL-2026': number | null    // Recuperatorio Lengua
  }
  
  estado: 'active' | 'inactive' | 'graduated'
  notas?: string          // Observaciones
  
  createdAt: Timestamp    // Creación
  updatedAt: Timestamp    // Actualización
}
```

**Índices**:
- `cycle` (Ascending)
- `apellido, nombre` (Compound)
- `estado` (Ascending)

---

## 🗂️ Estructura de Carpetas Detallada

```
proyecto/
│
├── src/
│   ├── components/              # Componentes React
│   │   ├── auth/
│   │   │   ├── Login.jsx        # Panel de login
│   │   │   ├── ProtectedRoute.jsx
│   │   │   └── UserProfile.jsx  # Perfil del usuario
│   │   │
│   │   ├── dashboard/
│   │   │   ├── Dashboard.jsx    # Panel principal
│   │   │   ├── Sidebar.jsx      # Navegación lateral
│   │   │   └── Header.jsx       # Encabezado
│   │   │
│   │   ├── import/
│   │   │   ├── ImportStudents.jsx   # Importar CSV
│   │   │   └── ImportProgress.jsx   # Progreso de carga
│   │   │
│   │   ├── students/
│   │   │   ├── StudentsList.jsx     # Lista de estudiantes
│   │   │   ├── StudentDetail.jsx    # Detalle de estudiante
│   │   │   └── StudentForm.jsx      # Formulario edición
│   │   │
│   │   ├── grades/
│   │   │   ├── GradeUpload.jsx      # Carga de notas
│   │   │   └── GradeBoard.jsx       # Tablero de calificaciones
│   │   │
│   │   ├── reports/
│   │   │   ├── Reports.jsx          # Reportes principales
│   │   │   └── ExportData.jsx       # Exportar datos
│   │   │
│   │   └── ui/                   # Componentes reutilizables
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Input.jsx
│   │       ├── Label.jsx
│   │       ├── Alert.jsx
│   │       ├── Loading.jsx
│   │       ├── Modal.jsx
│   │       └── Table.jsx
│   │
│   ├── config/
│   │   ├── firebase.js          # Configuración Firebase
│   │   └── constants.js         # Constantes de la app
│   │
│   ├── utils/
│   │   ├── authUtils.js         # Funciones de auth
│   │   ├── csvUtils.js          # Parseo de CSV
│   │   ├── cn.js                # Utilidad Tailwind
│   │   ├── dateUtils.js         # Funciones de fecha
│   │   └── validations.js       # Validaciones
│   │
│   ├── hooks/                   # Custom React Hooks
│   │   ├── useAuth.js           # Hook de autenticación
│   │   ├── useFirestore.js      # Hook de Firestore
│   │   └── useNotification.js   # Hook de notificaciones
│   │
│   ├── App.jsx                  # Componente raíz
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
│
├── public/                       # Archivos estáticos
│   └── vite.svg
│
├── .env.example                  # Ejemplo de variables
├── .env.local                    # Variables secretas (NO commitear)
├── .gitignore                    # Archivos a ignorar
├── index.html                    # HTML principal
├── package.json                  # Dependencias del proyecto
├── vite.config.js               # Configuración Vite
├── tailwind.config.js           # Configuración Tailwind
├── postcss.config.js            # Configuración PostCSS
├── README.md                     # Documentación principal
└── SETUP_GUIDE.md               # Guía de instalación
```

---

## 🔐 Sistema de Autenticación y Autorización

### Flujo de Login

```
1. Usuario hace clic en "Inicia sesión con Google"
   ↓
2. Firebase abre popup de Google OAuth
   ↓
3. Usuario se autentica
   ↓
4. Aplicación verifica email en colección 'admins'
   ↓
5. Si existe → Obtener rol (admin/secretary)
   Si NO existe → Logout automático y mostrar error
   ↓
6. Guardar sesión en memoria + localStorage
   ↓
7. Redirigir al Dashboard
```

### Niveles de Acceso

| Rol | Importar | Editar | Ver Notas | Reportes | Admin |
|-----|----------|--------|-----------|----------|-------|
| Admin | ✅ | ✅ | ✅ | ✅ | ✅ |
| Secretary | ✅ | ❌ | ✅ | ❌ | ❌ |
| Visitante | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## 📝 Reglas de Firestore (Producción)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Función auxiliar para validar email
    function isAuthenticated() {
      return request.auth != null;
    }
    
    function isAdmin() {
      return get(/databases/$(database)/documents/admins/$(request.auth.email))
        .data.role == 'admin';
    }
    
    function isSecretary() {
      return get(/databases/$(database)/documents/admins/$(request.auth.email))
        .data.role == 'secretary';
    }
    
    function isAuthorized() {
      return isAdmin() || isSecretary();
    }
    
    // Colección de admins
    match /admins/{document=**} {
      allow read: if isAuthenticated();
      allow write: if isAdmin();
    }
    
    // Ciclos
    match /cycles/{cycle} {
      allow read: if isAuthenticated();
      allow write: if isAdmin();
      
      // Estudiantes dentro de ciclo
      match /students/{student} {
        allow read: if isAuthenticated();
        allow write: if isAuthorized();
      }
    }
  }
}
```

---

## 🔗 API Firebase Usada

### Authentication
- `signInWithPopup()` - Login con Google
- `signOut()` - Cerrar sesión
- `onAuthStateChanged()` - Escuchar cambios de auth

### Firestore
- `getDoc()` - Obtener un documento
- `getDocs()` - Obtener múltiples documentos
- `addDoc()` - Crear documento con ID auto
- `setDoc()` - Crear/actualizar documento
- `updateDoc()` - Actualizar campos
- `deleteDoc()` - Eliminar documento
- `writeBatch()` - Escribir múltiples documentos
- `query()` - Consultas avanzadas
- `where()` - Filtros

---

## 🎨 Sistema de Colores (Tailwind)

Las variables CSS están definidas en `src/index.css`:

```css
--background      /* Fondo principal */
--foreground      /* Texto principal */
--primary         /* Color principal (azul oscuro) */
--secondary       /* Color secundario */
--accent          /* Acentos (rojo/naranja) */
--muted           /* Elementos deshabilitados */
--destructive     /* Acciones peligrosas */
--border          /* Bordes */
--input           /* Campos de entrada */
```

---

## 📦 Tamaño del Build

```
Build final:
- main.js: ~150 KB
- vendor.js: ~250 KB
- Total gzipped: ~100 KB
```

---

## ⚡ Optimizaciones Implementadas

- ✅ Code splitting automático con Vite
- ✅ Lazy loading de rutas (implementar)
- ✅ Images optimizadas
- ✅ CSS purging con Tailwind
- ✅ Minificación automática

---

## 🧪 Testing (Futuro)

Se recomienda añadir:
- Jest para pruebas unitarias
- React Testing Library
- Cypress para E2E testing

---

## 📱 Responsividad

Breakpoints Tailwind:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

La aplicación es 100% responsive en todos los dispositivos.

---

**Última actualización:** Abril 2026
