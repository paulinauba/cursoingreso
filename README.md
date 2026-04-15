# Sistema de Gestión - Curso de Ingreso
### Colegio Preuniversitario Dr. Ramón A. Cereijo · UBA Escobar

Aplicación web para la gestión integral del curso de ingreso: importación de estudiantes, carga de calificaciones mediante lectora de código de barras, generación de boletines en PDF y orden de mérito con condiciones de ingreso.

---

## 🚀 Tecnologías

| Capa | Tecnología |
|---|---|
| Frontend | React 18 + Vite 5 |
| Estilos | Tailwind CSS |
| Base de datos | Firebase Cloud Firestore |
| Autenticación | Firebase Authentication (Google OAuth) |
| Hosting actual | Firebase Hosting (entorno de prueba) |
| Generación PDF | jsPDF + jspdf-autotable |
| Exportación Excel | SheetJS (xlsx) |
| Código de barras | JsBarcode (CODE128) |

---

## 🏗️ Arquitectura

La aplicación es un **SPA (Single Page Application)** completamente estática. No requiere servidor backend propio — toda la lógica corre en el navegador del cliente y se comunica directamente con Firebase (Google Cloud).

```
Navegador del usuario
       │
       ├── React SPA (archivos estáticos: HTML + JS + CSS)
       │         Puede servirse desde cualquier servidor web
       │         (Apache, Nginx, IIS, Firebase Hosting, etc.)
       │
       └── Firebase (Google Cloud) ──► Firestore (base de datos)
                                   ──► Authentication (login)
```

**Requisitos de hosting:**
- Servidor capaz de servir archivos estáticos (HTML/JS/CSS)
- HTTPS obligatorio (requerido por Firebase Authentication)
- Soporte para SPA: redirigir todas las rutas a `index.html`

**No requiere:** PHP, Node.js, Python, base de datos SQL, ni ningún proceso de servidor.

---

## 🔐 Autenticación y Roles

El acceso está restringido por una **whitelist** en Firestore (colección `admins`). Solo los emails registrados pueden ingresar.

| Rol | Permisos |
|---|---|
| `admin` | Acceso completo: importar estudiantes, cargar notas, gestionar ciclos |
| `secretary` | Acceso parcial: cargar notas, consultar listas, imprimir boletines y orden de mérito |

El login utiliza **Google OAuth** — los usuarios ingresan con su cuenta Google institucional. No se manejan contraseñas en la aplicación.

---

## 📋 Funcionalidades

- **Gestión de ciclos:** Sistema multi-año. El admin archiva el ciclo vigente y activa el nuevo al comenzar cada año. Los ciclos archivados quedan en modo solo lectura para consulta.
- **Importación de estudiantes:** Carga masiva desde archivo CSV.
- **Carátulas de examen:** Generación de PDF con código de barras (CODE128) por estudiante o por comisión.
- **Carga de notas:** Lectura mediante pistola lectora de código de barras. Escala 0–100 puntos.
- **Boletines:** PDF con dos ejemplares por página (original escuela / copia estudiante). Exportación individual, por comisión o masiva.
- **Orden de mérito:** Clasificación automática con reglas de ingreso (piso por materia, mínimo de exámenes rendidos, cupo de vacantes configurable). Exportación a Excel.

---

## 🗄️ Estructura de la Base de Datos (Firestore)

```
firestore/
├── admins/                        # Whitelist de usuarios autorizados
│   └── {docId}/
│       ├── email: string
│       ├── role: "admin" | "secretary"
│       └── name: string
│
└── cycles/                        # Ciclos lectivos
    └── {año}/                     # Ej: "2026"
        ├── status: "active" | "archived"
        ├── createdAt: timestamp
        ├── archivedAt: timestamp
        └── students/              # Subcolección de estudiantes
            └── {id}/              # Ej: "2026-001"
                ├── id: string
                ├── apellido: string
                ├── nombre: string
                ├── dni: string
                ├── comision: string
                ├── fechaNacimiento: string
                ├── gestion: string
                ├── partido: string
                ├── exams: map      # Estructura fija de exámenes
                └── grades: map     # Calificaciones cargadas
```

---

## 🛠️ Instalación local (desarrollo)

**Requisitos previos:** Node.js 18+ y npm.

```bash
# 1. Clonar el repositorio
git clone https://github.com/[usuario]/[repositorio].git
cd [repositorio]

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con las credenciales del proyecto Firebase

# 4. Iniciar servidor de desarrollo
npm run dev
# La app queda disponible en http://localhost:5173
```

---

## 🚢 Deploy en producción

```bash
# Generar build optimizado
npm run build
# Los archivos estáticos quedan en la carpeta /dist
```

La carpeta `/dist` puede desplegarse en cualquier servidor web. Para hosting en subdominio propio (ej: `ingreso.colegioubaescobar.gob.ar`):

1. Subir el contenido de `/dist` al servidor
2. Configurar el servidor para redirigir todas las rutas a `index.html` (necesario para SPA)
3. Asegurarse de que el dominio tenga HTTPS activo
4. Agregar el dominio en Firebase Console → Authentication → Dominios autorizados

**Configuración Nginx (ejemplo):**
```nginx
server {
    listen 443 ssl;
    server_name ingreso.colegioubaescobar.gob.ar;
    root /var/www/curso-ingreso/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Configuración Apache (ejemplo):**
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔑 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las credenciales de Firebase:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

> ⚠️ Estas credenciales son públicas por diseño (Firebase las expone al cliente). La seguridad está implementada a nivel de **Firestore Security Rules** y la whitelist de usuarios autorizados.

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── auth/          # Login
│   ├── cycles/        # Gestión de ciclos (CycleManager)
│   ├── dashboard/     # Layout principal (Dashboard)
│   ├── grades/        # Notas, boletines, orden de mérito
│   │   ├── GradeBoard.jsx
│   │   ├── GradeUpload.jsx
│   │   ├── MeritOrder.jsx
│   │   └── ReportsManager.jsx
│   ├── import/        # Importación CSV (ImportStudents)
│   ├── students/      # Lista y edición de estudiantes
│   └── ui/            # Componentes reutilizables
├── config/
│   └── firebase.js    # Inicialización Firebase
└── utils/
    ├── authUtils.js   # Verificación de whitelist
    └── csvUtils.js    # Parseo e importación CSV
public/
└── logo2.png          # Logo institucional
```