<<<<<<< HEAD
# Gestión Curso Ingreso 2026

Sistema de gestión web para el curso de ingreso escolar con 520 alumnos. Construido con React.js, Vite, Tailwind CSS y Firebase.

## 🎯 Características

- ✅ **Autenticación Firebase**: Login con Google + Whitelist en Firestore
- ✅ **Control de Acceso**: Solo administradores y secretaría autorizados
- ✅ **Importación de Estudiantes**: Carga masiva desde CSV
- ✅ **Gestión de Roles**: Admin y Secretaría con permisos diferenciados
- ✅ **Sistema de Exámenes**: 8 exámenes por estudiante (M1, M2, M3, RM, L1, L2, L3, RL)
- ✅ **Interfaz Moderna**: Diseño Shadcn/ui - limpio y profesional
- ✅ **Responsive Design**: Compatible con desktop, tablet y mobile

## 📋 Requisitos Previos

- Node.js 16+ y npm/yarn
- Cuenta Firebase con Firestore configurado
- Google Cloud Project para OAuth

## 🚀 Instalación Rápida

### 1. Clonar/Descargar el Proyecto
```bash
cd "d:\2026 D\app curso ingreso"
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Configurar Firebase

**Paso 1**: Ve a [Firebase Console](https://console.firebase.google.com/)

**Paso 2**: Crea un nuevo proyecto o usa uno existente

**Paso 3**: En "Configuración del Proyecto", copia el SDK snippet (Config)

**Paso 4**: Crea `.env.local` basado en `.env.example`:
```bash
cp .env.example .env.local
```

**Paso 5**: Edita `.env.local` con tus credenciales:
```env
VITE_FIREBASE_API_KEY=tu_api_key_aqui
VITE_FIREBASE_AUTH_DOMAIN=tu_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

### 4. Configurar Firestore

**Paso 1**: En Firebase Console, ve a "Firestore Database"

**Paso 2**: Crea una base de datos en modo "test" (o producción con reglas)

**Paso 3**: Crea una colección `admins` con documentos:
```json
{
  "email": "tu_email@example.com",
  "role": "admin",
  "nombre": "Tu Nombre"
}
```

**Paso 4**: Crea la estructura inicial:
```
- cycles/
  - 2026/
    - students/ (se crea automáticamente al importar)
```

### 5. Habilitar Google OAuth

En Firebase Console:
1. Ve a "Authentication"
2. En "Sign-in method", habilita "Google"
3. En "Authorized domains", añade el dominio de tu app

### 6. Ejecutar el Proyecto
```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

## 📁 Estructura de Carpetas

```
src/
├── components/
│   ├── auth/               # Componentes de autenticación
│   │   └── Login.jsx
│   ├── dashboard/          # Panel principal
│   │   └── Dashboard.jsx
│   ├── import/             # Importación de datos
│   │   └── ImportStudents.jsx
│   └── ui/                 # Componentes reutilizables
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── Input.jsx
│       ├── Label.jsx
│       ├── Alert.jsx
│       └── Loading.jsx
├── config/
│   └── firebase.js         # Configuración de Firebase
├── utils/
│   ├── authUtils.js        # Funciones de autenticación
│   ├── csvUtils.js         # Funciones para parsear CSV
│   └── cn.js               # Utilidad para clases Tailwind
├── App.jsx                 # Componente principal
├── main.jsx                # Entrada de la app
└── index.css               # Estilos globales
```

## 🗄️ Estructura de Datos Firestore

### Colección: `admins`
```json
{
  "email": "admin@example.com",
  "role": "admin",
  "nombre": "Nombre Admin",
  "createdAt": timestamp
}
```

### Colección: `cycles/{year}/students`
```json
{
  "id": "EST-001",
  "apellido": "Pérez",
  "nombre": "Juan",
  "dni": "12345678",
  "fechaNacimiento": "2008-05-15",
  "comision": "A",
  "gestion": "2025",
  "partido": "La Matanza",
  "cycle": "2026",
  "createdAt": timestamp,
  "updatedAt": timestamp,
  "exams": {
    "M1-2026": null,
    "M2-2026": null,
    "M3-2026": null,
    "RM-2026": null,
    "L1-2026": null,
    "L2-2026": null,
    "L3-2026": null,
    "RL-2026": null
  },
  "status": "active"
}
```

## 📊 Formato CSV para Importar Estudiantes

El archivo CSV debe tener estas columnas (en cualquier orden):

| Columna | Tipo | Descripción |
|---------|------|-------------|
| id_estudiante | String | ID único del estudiante |
| apellido | String | Apellido |
| nombre | String | Nombre |
| dni | String | Documento Nacional de Identidad |
| fecha_nac | String | Fecha de nacimiento (ej: 2008-05-15) |
| comision | String | Comisión (A, B, C, etc.) |
| gestion | String | Año de gestión |
| partido | String | Partido/Municipio |

**Ejemplo CSV:**
```csv
id_estudiante,apellido,nombre,dni,fecha_nac,comision,gestion,partido
EST-001,Pérez,Juan,12345678,2008-05-15,A,2025,La Matanza
EST-002,García,María,87654321,2008-08-22,B,2025,Lomas de Zamora
EST-003,López,Carlos,11223344,2008-03-10,A,2025,Almirante Brown
```

## 🔐 Seguridad y Reglas de Firestore

**Reglas mínimas recomendadas** (habilitar después de testing):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Admins: solo lectura del próprio documento
    match /admins/{document=**} {
      allow read: if request.auth != null;
      allow write: if false;
    }
    
    // Ciclos y estudiantes: controlar acceso por rol
    match /cycles/{cycle}/students/{student} {
      allow read, write: if request.auth != null && 
        get(/databases/$(database)/documents/admins/$(request.auth.email)).data.role in ['admin', 'secretary'];
    }
  }
}
```

## 💻 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Lint del código
npm run lint
```

## 🎨 Personalización

### Cambiar Colors
Edita `src/index.css` en la sección `:root` para cambiar los colores CSS

### Cambiar Logo/Branding
- Logo en `src/components/dashboard/Dashboard.jsx` (línea 23)
- Nombre del sitio en `index.html` y `src/App.jsx`

## 🐛 Troubleshooting

### "Email no autorizado"
- Verifica que el email esté en la colección `admins` de Firestore
- Comprueba que el email sea exacto (case-sensitive en algunos casos)

### Error de CORS
- Asegúrate de que el dominio está en "Authorized domains" en Firebase

### CSV no se importa
- Verifica que los headers del CSV sean exactos (minúsculas)
- Comprueba que el archivo esté en formato UTF-8

## 📞 Soporte

Para problemas o sugerencias, contacta al administrador del sistema.

## 📄 Licencia

Proyecto interno - Uso exclusivo para el curso de ingreso 2026.

---

**Última actualización:** abril 2026  
**Versión:** 1.0.0

