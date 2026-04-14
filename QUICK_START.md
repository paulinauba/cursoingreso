# ⚡ Guía Rápida de Referencia

## 🚀 5 Pasos para Comenzar

### 1. Instalación (2 minutos)
```bash
# En PowerShell, navega a la carpeta
cd "d:\2026 D\app curso ingreso"

# Instala las dependencias
npm install
```

### 2. Firebase (10 minutos)
```
1. Ve a https://console.firebase.google.com
2. Crea proyecto: "curso-ingreso-2026"
3. En "Configuración del Proyecto" copia las credenciales
4. Pega en archivo .env.local
5. Activa Firestore Database (modo prueba)
6. Activa Google OAuth en Authentication
```

### 3. Whitelist de Admins (5 minutos)
```
En Firestore Database:
1. Crea colección "admins"
2. Añade documento con:
   - email: tu_email@gmail.com
   - role: admin
   - nombre: Tu Nombre
3. Guarda cambios
```

### 4. Ejecutar App (1 minuto)
```bash
npm run dev
```

Abre: http://localhost:5173

### 5. Probar (5 minutos)
```
1. Inicia sesión con tu email Google
2. Valida que seas admin
3. Carga ejemplo_estudiantes.csv
4. Verifica datos en Firestore
```

**⏱️ Total: ~25 minutos completo**

---

## 📁 Dónde Encontrar Cada Cosa

### Pantalla de Login
📍 [src/components/auth/Login.jsx](src/components/auth/Login.jsx)

```jsx
// Para customizar:
// - Logo: busca "LogIn" icon
// - Texto: busca strings entre comillas
// - Colores: usa clases Tailwind
```

### Importador CSV
📍 [src/components/import/ImportStudents.jsx](src/components/import/ImportStudents.jsx)

```jsx
// Para customizar:
// - Headers del CSV: EXPECTED_HEADERS (línea 8)
// - Columnas mostradas en preview: tabla (línea 140)
// - Validaciones: validateStudentData en csvUtils.js
```

### Panel Principal
📍 [src/components/dashboard/Dashboard.jsx](src/components/dashboard/Dashboard.jsx)

```jsx
// Para customizar:
// - Menú lateral: menuItems array (línea 8)
// - Contenido: condicionales por activeSection
// - Header: agrupa info del usuario
```

### Configuración Firebase
📍 [src/config/firebase.js](src/config/firebase.js)

```javascript
// ⚠️ IMPORTANTE: Configurar con .env.local
// Variables que deben estar en .env.local:
// - VITE_FIREBASE_API_KEY
// - VITE_FIREBASE_PROJECT_ID
// - etc...
```

### Estilos Globales
📍 [src/index.css](src/index.css)

```css
/* Cambiar colores aquí en :root */
--primary: 0 0% 9%;           /* Azul oscuro */
--accent: 0 84.2% 60.2%;      /* Rojo/Naranja */
--background: 0 0% 100%;      /* Blanco */
```

---

## 🔧 Problemas Comunes & Soluciones

| Problema | Causa | Solución |
|----------|-------|----------|
| "Este puerto ya está en uso" | Python/Node usa puerto 5173 | `npm run dev -- --port 5174` |
| "Email no autorizado" | No está en colección `admins` | Añade tu email a Firestore |
| "CORS error" | Dominio no autorizado | Añade `localhost:5173` en Firebase |
| "import firebase failed" | .env.local vacío o incorrecto | Verifica credenciales en .env.local |
| "CSV no se importa" | Headers incorrectos | Comprueba que CSV tengan exactamente: id_estudiante, apellido, nombre, dni, fecha_nac, comision, gestion, partido |

---

## 📦 Comandos Útiles

```bash
# Desarrollo
npm run dev                 # Inicia servidor local

# Build para producción
npm run build              # Crea carpeta 'dist/'

# Preview del build
npm run preview            # Muestra cómo se vería en producción

# Linting
npm run lint               # Busca errores en el código

# Instalar nuevas dependencias
npm install nombre-paquete # Instala un paquete

# Ver qué versión de node tienes
node --version

# Ver qué versión de npm tienes
npm --version
```

---

## 🎨 Customización Rápida

### Cambiar Nombre de la App
Edita estos archivos:
- **index.html** línea 8: cambiar `<title>`
- **src/components/dashboard/Dashboard.jsx** línea 23: cambiar "Gestión Curso Ingreso"

### Cambiar Colores
Edita **src/index.css** en la sección `:root`:

```css
--primary: 0 0% 9%;        /* Azul → cambiar valores */
--accent: 0 84.2% 60.2%;   /* Rojo → cambiar valores */
--background: 0 0% 100%;   /* Blanco → cambiar valores */
```

Usar sitios como [Colordot](https://color.hailpixel.com/) para obtener valores HSL.

### Cambiar Mensajes de Error/Bienvenida
Busca `alertDictionary` o strings entre comillas en los componentes.

---

## 🔐 Variables de Entorno (.env.local)

```env
# Obtienes estos valores de Firebase Console
# Configuración del Proyecto > SDK snippet (Config)

VITE_FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxx
VITE_FIREBASE_AUTH_DOMAIN=xxx.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxx
VITE_FIREBASE_APP_ID=xxxxxxxxxxxxxxxxxx

# ⚠️ IMPORTANTE:
# - NO hacer commit de este archivo
# - NO compartir estas credenciales
# - Está en .gitignore (protegido)
```

---

## 📱 Estructura CSV

**Tu CSV debe tener exactamente estas columnas:**

```
id_estudiante | apellido | nombre | dni | fecha_nac | comision | gestion | partido
```

**Ejemplo correcto:**
```csv
id_estudiante,apellido,nombre,dni,fecha_nac,comision,gestion,partido
EST-001,Pérez,Juan,12345678,2008-05-15,A,2025,La Matanza
```

**Errores comunes:**
```csv
# ❌ INCORRECTO - Headers diferentes
ID,Last Name,First Name,ID Card,Birth Date,Class,Year,District

# ❌ INCORRECTO - Falta una columna
id_estudiante,apellido,nombre,dni,comision,gestion

# ❌ INCORRECTO - Datos sin encabezado
EST-001,Pérez,Juan,12345678,2008-05-15,A,2025,La Matanza
```

---

## 📞 Soporte Rápido

### Si algo no funciona:

1. **Verifica .env.local**
   ```bash
   cat .env.local  # Ver contenido (Windows PowerShell)
   ```

2. **Reinicia el servidor**
   ```bash
   Ctrl+C  # Detiene npm run dev
   npm run dev  # Reinicia
   ```

3. **Borra node_modules y reinstala**
   ```bash
   rm -r node_modules
   npm install
   ```

4. **Verifica que Firebase esté configurado**
   - Firestore activa ✓
   - Auth habilitada ✓
   - Google OAuth ✓
   - `admins` colección ✓

---

## 🚀 Deployment (Producción)

### Opción Más Rápida: Vercel (5 minutos)

```bash
# Instala Vercel CLI
npm install -g vercel

# Haz login
vercel login

# Deploy
vercel
```

Automáticamente:
- Se conecta a GitHub
- Compila el proyecto
- Sube a servidores Vercel
- Da URL pública

**URL de ejemplo**: `tu-app.vercel.app`

---

## 📚 Recursos Útiles

- **React Docs**: https://react.dev
- **Firebase Docs**: https://firebase.google.com/docs
- **Tailwind CSS**: https://tailwindcss.com
- **Vite Docs**: https://vitest.dev
- **Shadcn/ui**: https://ui.shadcn.com (referencia de componentes)

---

## 🎯 Próxima Tarea

Después de que todo funcione:

1. Importa todos tus estudiantes (520)
2. Crea una lista de estudiantes en Dashboard
3. Prueba búsqueda y filtros
4. Implementa carga de notas
5. Crea reportes

**Ver CHANGELOG.md para roadmap completo.**

---

**¡Éxito con tu proyecto! 🚀**

Recuerda: Si tienes dudas, consulta lo correspondiente:
- **Setup** → SETUP_GUIDE.md
- **Técnica** → TECHNICAL_SPECS.md
- **Cambios** → CHANGELOG.md
- **General** → README.md
