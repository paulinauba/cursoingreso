# 🚀 Guía de Instalación Paso a Paso

Esta guía te ayudará a configurar completamente la aplicación de gestión del curso de ingreso.

---

## 📋 Tabla de Contenidos
1. [Requisitos](#requisitos)
2. [Instalación Local](#instalación-local)
3. [Configuración Firebase](#configuración-firebase)
4. [Crear Whitelist de Admins](#crear-whitelist-de-admins)
5. [Importar Estudiantes](#importar-estudiantes)
6. [Despliegue](#despliegue)

---

## ✅ Requisitos

Antes de empezar, asegúrate de tener instalado:

- **Node.js** versión 16 o superior - [Descargar](https://nodejs.org/)
- **npm** (viene con Node.js) o **yarn**
- **Git** (opcional, para control de versiones)
- Una **Cuenta Google** para Firebase
- Un navegador moderno (Chrome, Firefox, Safari, Edge)

### Verificar instalación:
```bash
node --version   # Debería mostrar v16.0.0 o superior
npm --version    # Debería mostrar 7.0.0 o superior
```

---

## 🔧 Instalación Local

### Paso 1: Abrir Terminal/PowerShell

Navega a la carpeta del proyecto:
```bash
cd "d:\2026 D\app curso ingreso"
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

Este comando instalará todas las librerías necesarias en una carpeta `node_modules` (esto toma 2-5 minutos).

### Paso 3: Crear Archivo .env.local

En VS Code:
1. Con `Ctrl + Shift + P` abre el buscador de comandos
2. Escribe "New File"
3. Crea un archivo llamado `.env.local` en la raíz del proyecto

Alternativa en terminal:
```bash
# Windows (PowerShell)
echo "" > .env.local

# Linux/Mac
touch .env.local
```

Tu proyecto debería verse así:
```
d:\2026 D\app curso ingreso\
├── src/
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── .env.local          ← Este archivo
├── .env.example
└── README.md
```

---

## 🔥 Configuración Firebase

### Paso 1: Crear Proyecto Firebase

1. Ve a [console.firebase.google.com](https://console.firebase.google.com/)
2. Haz clic en "+ Añadir proyecto"
3. Nombre del proyecto: `curso-ingreso-2026`
4. Disables Google Analytics (opcional)
5. Haz clic en "Crear proyecto"

### Paso 2: Obtener Credenciales

1. En la página del proyecto, busca el ícono `</>`  ("Agrega Firebase a tu app web")
2. Copia toda la configuración
3. Pega en `.env.local`:

```env
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

**IMPORTANTE**: El archivo `.env.local` NO debe subirse a repositorios públicos (está en `.gitignore`).

### Paso 3: Configurar Firestore Database

1. En Firebase Console, ve a **Firestore Database**
2. Haz clic en "Crear base de datos"
3. Selecciona "Modo de prueba" (para desarrollo)
4. Selecciona región: `southamerica-east1 (São Paulo)`
5. Haz clic en "Habilitar"

### Paso 4: Habilitar Google OAuth

1. En Firebase Console, ve a **Authentication**
2. En "Sign-in method", busca "Google"
3. Haz clic en Google y actívalo
4. En "Email de soporte del proyecto": usa tu email
5. Guarda cambios

### Paso 5: Autorizar Dominio Local

1. En Authentication, ve a la pestaña "Settings" (engranaje)
2. En "Authorized domains", haz clic en "Add domain"
3. Añade: `localhost:5173`

---

## 👥 Crear Whitelist de Admins

### Paso 1: Crear Colección

En Firestore Database:
1. Haz clic en "+ Empezar colección"
2. Nombre de colección: `admins`
3. Haz clic en "Siguiente"

### Paso 2: Añadir Administrador

1. ID del documento: `admin_1` (o tu email sin símbolos especiales)
2. Campos:
   ```
   email          | string | tu_email@gmail.com
   role           | string | admin
   nombre         | string | Tu Nombre Completo
   createdAt      | timestamp | (fecha actual)
   ```

3. Haz clic en "Guardar"

### Paso 3: Añadir más Admins (opcional)

Repite el paso anterior para otros administradores:
- secretaria_1 (email: secretaria1@example.com, role: secretary)
- secretaria_2 (email: secretaria2@example.com, role: secretary)

---

## 📊 Importar Estudiantes

### Paso 1: Preparar archivo CSV

Crea un archivo `estudiantes.csv` con este formato:

```csv
id_estudiante,apellido,nombre,dni,fecha_nac,comision,gestion,partido
EST-001,Pérez,Juan,12345678,2008-05-15,A,2025,La Matanza
EST-002,García,María,87654321,2008-08-22,B,2025,Lomas de Zamora
EST-003,López,Carlos,11223344,2008-03-10,C,2025,Almirante Brown
```

**Importante**:
- Los headers deben ser exactamente esos (minúsculas)
- El archivo debe estar en UTF-8
- Máximo 10 MB

### Paso 2: Ejecutar Aplicación

En terminal:
```bash
npm run dev
```

La aplicación se abrirá en `http://localhost:5173`

### Paso 3: Login y Importar

1. Inicia sesión con tu email (el que agregaste en la whitelist)
2. En el dashboard, ve a "Importar Estudiantes"
3. Haz clic en el área de carga o arrastra el CSV
4. Verifica el preview de datos
5. Haz clic en "Importar Estudiantes"

✅ Los estudiantes estarán disponibles en Firestore

---

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado - GRATUITO)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Opción 2: Firebase Hosting

```bash
# Instalar Firebase CLI
npm i -g firebase-tools

# Login
firebase login

# Build
npm run build

# Deploy
firebase deploy
```

### Opción 3: Netlify

1. Haz push a GitHub
2. Conecta el repo en [netlify.com](https://netlify.com)
3. Configura Build Command: `npm run build`
4. Configura Publish directory: `dist`

---

## 🧪 Pruebas Locales

### Verificar la instalación

```bash
# Ver versión de Node
node --version

# Ver versión de npm
npm --version

# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev
```

### Troubleshooting

| Problema | Solución |
|----------|----------|
| "Port 5173 is already in use" | Cambia puerto: `npm run dev -- --port 5174` |
| ".env.local no reconocido" | Reinicia VS Code |
| "Email no autorizado" | Verifica que esté exacto en colección `admins` |
| "CORS error" | Añade tu dominio en Firebase > Authorized domains |

---

## 📞 Soporte

Para problemas o preguntas:
1. Revisa el [README.md](./README.md)
2. Consulta la [Firebase Docs](https://firebase.google.com/docs)
3. Contacta al administrador

---

**¡Listo para usar! 🎉** La aplicación está completamente configurada y lista para gestionar 520 estudiantes.
