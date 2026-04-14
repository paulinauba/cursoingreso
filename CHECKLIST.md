# ✅ Checklist de Verificación Paso a Paso

**Usa este documento para verificar que todo esté correctamente configurado.**

---

## 📋 Fase 1: Requisitos Previos

- [ ] **Node.js 16+ instalado**
  ```bash
  node --version  # Debe mostrar v16.0.0 o superior
  ```

- [ ] **npm instalado**
  ```bash
  npm --version   # Debe mostrar 7.0.0 o superior
  ```

- [ ] **Git instalado (opcional)**
  ```bash
  git --version   # Debe mostrar git version X.X.X
  ```

- [ ] **Visual Studio Code instalado**
  - Descargar: https://code.visualstudio.com

- [ ] **Navegador moderno (Chrome, Firefox, Edge, Safari)**

---

## 📁 Fase 2: Carpeta del Proyecto

- [ ] **Carpeta existe**: `d:\2026 D\app curso ingreso`

- [ ] **VS Code abre la carpeta correctamente**
  - Abre VS Code
  - `File` → `Open Folder`
  - Selecciona `d:\2026 D\app curso ingreso`
  - En la barra de arriba debería mostrar: `app curso ingreso`

- [ ] **Los archivos están presentes**

En el Explorer (izquierda) deberías ver:
```
✅ index.html
✅ package.json
✅ vite.config.js
✅ tailwind.config.js
✅ README.md
✅ .gitignore
✅ .env.example
✅ ejemplo_estudiantes.csv
✅ src/ (carpeta)
```

---

## 🔧 Fase 3: Instalar Dependencias

- [ ] **Terminal abierta en VS Code**
  - `Ctrl + Ñ` o `Ctrl + \``
  - O: **Terminal** → **New Terminal**

- [ ] **npm install completado**
  ```bash
  npm install
  ```
  - Debe mostrar: `added XXX packages in Xm Xs`

- [ ] **Carpeta node_modules creada**
  - En Explorer, verás `node_modules/` (gris/atenuada)
  - Contiene 500+ paquetes

- [ ] **package-lock.json creado**
  - Archivo que aparece en la raíz

---

## 🔥 Fase 4: Configurar Firebase

### 4.1: Crear Proyecto Firebase

- [ ] **Entrar a Firebase Console**
  - Ir a: https://console.firebase.google.com
  - Hacer login con Google

- [ ] **Crear nuevo proyecto**
  - Nombre: `curso-ingreso-2026`
  - Desactivar Google Analytics (optional)
  - Haz clic: "Create project"

- [ ] **Proyecto creado exitosamente**
  - Verás dashboard de Firebase

### 4.2: Obtener Credenciales

- [ ] **Copiar configuración**
  - En Firebase Console, busca el ícono `</>` ("Add Firebase to your web app")
  - Copia toda la configuración JSON

- [ ] **Crear archivo .env.local**
  ```bash
  Ctrl + Shift + P  # Paleta de comandos
  Escribe: "New File"
  Dale nombre: .env.local
  ```

- [ ] **Pegar credenciales en .env.local**
  ```env
  VITE_FIREBASE_API_KEY=YOUR_API_KEY
  VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
  VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
  VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
  VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
  VITE_FIREBASE_APP_ID=YOUR_APP_ID
  ```

- [ ] **Guardar .env.local**
  - `Ctrl + S`

### 4.3: Configurar Firestore Database

- [ ] **Crear Firestore Database**
  - Firebase Console → `Firestore Database`
  - Haz clic: "Create Database"
  - Modo: "Start in test mode"
  - Región: `southamerica-east1 (São Paulo)`
  - Haz clic: "Enable"

- [ ] **Firestore activado**
  - Deberías ver la interfaz de Firestore

### 4.4: Configurar Authentication

- [ ] **Activar método de Login**
  - Firebase Console → `Authentication`
  - Pestaña: `Sign-in method`
  - Busca: `Google`
  - Actívalo

- [ ] **Agregar email de soporte**
  - Usa tu email personal

- [ ] **Agregar dominio localhost**
  - `Authentication` → Settings (⚙️)
  - Pestaña: `Authorized domains`
  - Haz clic: "Add domain"
  - Añade: `localhost:5173`

---

## 👥 Fase 5: Crear Whitelist de Admins

- [ ] **Crear colección "admins"**
  - Firestore Database
  - Haz clic: "Create collection"
  - Nombre: `admins`
  - Haz clic: "Next"

- [ ] **Añadir documento admin**
  - ID del documento: `admin_1` (o tu email)
  - Campos:
    ```
    email          → string   → tu_email@gmail.com
    role           → string   → admin
    nombre         → string   → Tu Nombre
    createdAt      → timestamp → (fecha actual)
    ```

- [ ] **Documento guardado**
  - Ves el documento en Firestore

- [ ] **Añadir admins adicionales (opcional)**
  - email: secretaria@example.com
  - role: secretary
  - Repite para cada secretaria

---

## 🚀 Fase 6: Ejecutar la Aplicación

- [ ] **Terminal lista en VS Code**
  - Ver `Ctrl + Ñ` abierto

- [ ] **Ejecutar comando**
  ```bash
  npm run dev
  ```

- [ ] **Compilación exitosa**
  - Ver mensaje:
    ```
    VITE v5.0.0 ready in XXX ms
    
    ➜  Local:   http://localhost:5173/
    ```

- [ ] **Navegador abre automáticamente**
  - O abre manualmente: `http://localhost:5173`

- [ ] **Aplicación carga**
  - Ves pantalla de login

---

## 🔐 Fase 7: Probar Login

- [ ] **Pantalla de login visible**
  - Título: "Gestión Curso Ingreso"
  - Botón: "Inicia sesión con Google"

- [ ] **Haz clic en el botón**
  - Se abre popup de Google

- [ ] **Login con tu email (que está en admins)**
  - Usa el mismo email que registraste

- [ ] **Google te pide permiso**
  - Acepta los permisos

- [ ] **Redirige al Dashboard**
  - Ves: "Bienvenido" + Dashboard

- [ ] **Usuario muestra en header**
  - Ves tu nombre + rol "admin"

- [ ] **Botón de logout funciona**
  - Haz clic en "Salir"
  - Vuelve a pantalla de login

---

## 📊 Fase 8: Probar Importación de CSV

- [ ] **Vuelve a hacer login**

- [ ] **En Dashboard, haz clic en "Importar Estudiantes"**

- [ ] **Ves formulario de carga**
  - Área de drag & drop
  - Texto: "Arrastra tu archivo CSV aquí"

- [ ] **Selecciona archivo de ejemplo**
  - `ejemplo_estudiantes.csv`

- [ ] **Preview de datos muestra**
  - Tabla con primeros 5 estudiantes
  - Columnas: ID, Apellido, Nombre, DNI, Comisión

- [ ] **Haz clic en "Importar Estudiantes"**

- [ ] **Progreso de carga**
  - Ves mensaje: "Importando..."
  - Después: "✓ 30 estudiantes importados exitosamente"

- [ ] **Verifica en Firestore**
  - Firebase Console → Firestore
  - `cycles` → `2026` → `students`
  - Deberías ver 30 documentos

---

## 🔗 Fase 9: Verificar Estructura de Datos

- [ ] **Abre Firestore Console**
  - Firebase Console → `Firestore Database`

- [ ] **Verifica colecciones**
  ```
  ✅ admins/
     - admin_1 (email, role, nombre)
  
  ✅ cycles/
     - 2026/
       - students/
         - EST-001 (id, apellido, nombre, exams, etc.)
         - EST-002
         - ...
         - EST-030 (30 total)
  ```

- [ ] **Verifica campos de estudiante**
  - Abre un estudiante (EST-001)
  - Debe tener:
    ```
    ✅ id
    ✅ apellido
    ✅ nombre
    ✅ dni
    ✅ fechaNacimiento
    ✅ comision
    ✅ gestion
    ✅ partido
    ✅ exams (object con M1, M2, M3, RM, L1, L2, L3, RL)
    ✅ status: "active"
    ✅ createdAt
    ✅ updatedAt
    ```

---

## 🧪 Fase 10: Pruebas Adicionales

- [ ] **Prueba con email no autorizado**
  - Logout
  - Intenta login con otro email (que NO esté en `admins`)
  - Debería mostrar: "Tu email no está autorizado"

- [ ] **Prueba CSV inválido**
  - Vuelve a login con tu email admin
  - Intenta importar un archivo CSV con headers incorrectos
  - Debería mostrar error de validación

- [ ] **Verificar responsive design**
  - En navegador: `F12` (abre Developer Tools)
  - Haz clic en dispositivos (tablet, mobile)
  - La interfaz se adapta correctamente

- [ ] **Verificar console sin errores**
  - En Developer Tools (F12), pestaña `Console`
  - No debe haber errores rojos
  - Solo warnings triviales es OK

---

## 📝 Fase 11: Documentación

- [ ] **Todos los archivos README leídos**
  - [ ] README.md
  - [ ] QUICK_START.md
  - [ ] SETUP_GUIDE.md
  - [ ] VSCODE_GUIDE.md

- [ ] **Entiendes la estructura**
  - [ ] Dónde están los componentes
  - [ ] Cómo funcionan las rutas
  - [ ] Estructura de datos Firestore

---

## 🚀 Fase 12: Listo para Desarrollo

- [ ] **Todo funcionando correctamente**

- [ ] **Puedes hacer cambios en el código**
  - Abre `src/index.css`
  - Cambia un color
  - Ver cambio inmediatamente

- [ ] **Conoces los comandos básicos**
  ```bash
  npm run dev      # Desarrollo
  npm run build    # Producción
  npm run preview  # Preview build
  ```

- [ ] **Conoces carpetas principales**
  ```
  - src/components/    ← Aquí están todos los componentes
  - src/config/        ← Configuración de Firebase
  - src/utils/         ← Funciones útiles
  ```

---

## 🎯 ¿Qué Viene Después?

Si TODOS los ✅ están marcados:

1. **Siguiente fase**: Implementar lista de estudiantes
2. **Después**: Carga de calificaciones
3. **Luego**: Reportes y estadísticas
4. **Finalmente**: Deploy a producción

---

## 🆘 Si Algo Falla

| Problema | Solución | Paso |
|----------|----------|------|
| "Port already in use" | Cambiar puerto | `npm run dev -- --port 5174` |
| "Email no autorizado" | Agregar a Firebase admins | Volver a Fase 5 |
| ".env.local no reconocido" | Reiniciar VS Code | Cierra y abre |
| "Firestore error" | Activar Firestore | Volver a Fase 4.3 |
| "CORS error" | Agregar dominio | Volver a Fase 4.4 |
| "CSV no importa" | Verificar headers | Usar archivo ejemplo |
| "npm install falla" | Borrar node_modules | `rm -r node_modules && npm install` |

---

## 📞 Checklist Final

Marca estos items antes de considerar "completado":

- [ ] ✅ Node.js y npm instalados
- [ ] ✅ Proyecto en VS Code
- [ ] ✅ npm install ejecutado
- [ ] ✅ .env.local configurado
- [ ] ✅ Firebase proyecto creado
- [ ] ✅ Firestore activada
- [ ] ✅ Google OAuth configurado
- [ ] ✅ Colección admins creada
- [ ] ✅ Tu email en admins
- [ ] ✅ npm run dev ejecutado
- [ ] ✅ Login exitoso
- [ ] ✅ CSV de ejemplo importado
- [ ] ✅ Datos verificados en Firestore
- [ ] ✅ No hay errores en console
- [ ] ✅ Documentación leída

---

## 🎉 ¡ÉXITO!

Si llegas aquí con todos los checks marcados, tu aplicación está:

✅ **Instalada correctamente**
✅ **Configurada con Firebase**
✅ **Autenticación funcionando**
✅ **Importación de datos funcionando**
✅ **Descpuesta para desarrollo**

**Felicidades, ya puedes comenzar con las siguientes fases! 🚀**

---

**Última actualización**: abril 2026
