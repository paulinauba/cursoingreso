# 🖥️ Instrucciones en Visual Studio Code

## 1️⃣ Abrir el Proyecto en VS Code

### Opción A: Desde VS Code
1. **VS Code** → `File` → `Open Folder`
2. Navega a: `d:\2026 D\app curso ingreso`
3. Haz clic en **Select Folder**

### Opción B: Desde Terminal/PowerShell
```bash
# Abre VS Code en la carpeta actual
code "d:\2026 D\app curso ingreso"
```

### Opción C: Arrastra la carpeta
1. Abre VS Code
2. Arrastra la carpeta `d:\2026 D\app curso ingreso` a VS Code

---

## 2️⃣ Abrir Terminal en VS Code

Hay varias formas:

### Método 1: Menú
**Terminal** → **New Terminal**

### Método 2: Atajo de teclado
```
Ctrl + Ñ    (Windows/Latino)
o
Ctrl + `    (Teclado QWERTY)
```

### Método 3: Paleta de Comandos
1. `Ctrl + Shift + P`
2. Escribe: "terminal"
3. Selecciona "Toggle Integrated Terminal"

---

## 3️⃣ Estructura de Carpetas en VS Code

En el **Explorer** (izquierda) verás:

```
📁 app curso ingreso/
 ├─ 📁 src/
 │  ├─ 📁 components/
 │  │  ├─ 📁 auth/
 │  │  │  └─ Login.jsx          ← Pantalla login
 │  │  ├─ 📁 dashboard/
 │  │  │  └─ Dashboard.jsx      ← Panel principal
 │  │  ├─ 📁 import/
 │  │  │  └─ ImportStudents.jsx ← Importador CSV
 │  │  └─ 📁 ui/
 │  │     ├─ Button.jsx
 │  │     ├─ Card.jsx
 │  │     ├─ Input.jsx
 │  │     ├─ Label.jsx
 │  │     ├─ Alert.jsx
 │  │     └─ Loading.jsx
 │  ├─ 📁 config/
 │  │  └─ firebase.js           ← Config Firebase ⚠️
 │  ├─ 📁 utils/
 │  │  ├─ authUtils.js
 │  │  ├─ csvUtils.js
 │  │  └─ cn.js
 │  ├─ App.jsx                  ← Componente raíz
 │  ├─ main.jsx                 ← Entry point
 │  └─ index.css                ← Estilos globales
 │
 ├─ .env.example                ← Copiar para .env.local
 ├─ .env.local                  ← Crear este archivo ⚠️
 ├─ package.json                ← Dependencias
 ├─ vite.config.js              ← Config Vite
 ├─ tailwind.config.js
 ├─ index.html                  ← HTML principal
 │
 ├─ 📄 README.md                ← LEER PRIMERO
 ├─ 📄 QUICK_START.md           ← Inicio rápido
 ├─ 📄 SETUP_GUIDE.md           ← Instalación paso a paso
 ├─ 📄 TECHNICAL_SPECS.md       ← Especificaciones
 ├─ 📄 CHANGELOG.md             ← Versiones
 ├─ 📄 ESTRUCTURA_PROYECTO.md   ← Este archivo
 │
 └─ ejemplo_estudiantes.csv     ← Datos de prueba
```

---

## 4️⃣ Instalación Completa (Terminal VS Code)

En la terminal integrada de VS Code, ejecuta:

```bash
# 1. Verificar que npm está instalado
npm --version

# 2. Instalar dependencias (toma 2-5 minutos)
npm install

# Verás algo como:
# added 500 packages in 2m30s
```

---

## 5️⃣ Configurar .env.local

### Paso 1: Crear archivo
1. Haz clic en el ícono de "New File" (arriba del Explorer)
2. O presiona `Ctrl + N`
3. Dale el nombre: `.env.local` (exacto, con el punto)

### Paso 2: Añadir credenciales de Firebase
Copia y pega esto en `.env.local`:

```env
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

Reemplaza `YOUR_...` con tus valores de Firebase Console.

### Paso 3: Guardar
`Ctrl + S`

---

## 6️⃣ Iniciar la Aplicación

En la terminal VS Code, ejecuta:

```bash
npm run dev
```

Verás algo como:

```
  VITE v5.0.0  ready in 324 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

**Automáticamente abrirá el navegador en `http://localhost:5173`**

---

## 7️⃣ Editar el Código

### Cambiar el Título de la App

1. En el Explorer, abre **index.html**
2. Busca la línea: `<title>Gestión Curso Ingreso 2026</title>`
3. Cambia a lo que quieras
4. Guarda: `Ctrl + S`
5. El navegador se refrescará automáticamente ✨

### Cambiar Colores

1. Abre **src/index.css**
2. Busca `:root {` (línea ~6)
3. Modifica los colores:

```css
--primary: 0 0% 9%;           /* Azul → cambia este valor */
--accent: 0 84.2% 60.2%;      /* Rojo/Naranja */
--background: 0 0% 100%;      /* Blanco */
```

4. Guarda: `Ctrl + S`
5. Los cambios se verán inmediatamente en el navegador

### Editar Componentes

Ejemplo: Cambiar el texto del botón de Login

1. Abre **src/components/auth/Login.jsx**
2. Busca: `"Inicia sesión con Google"`
3. Cambia a: `"Entra con tu email Google"` (por ejemplo)
4. Guarda: `Ctrl + S`
5. El cambio aparecerá al actualizar la página

---

## 8️⃣ Uso de Extensiones Útiles

### Extensiones Recomendadas

Instala estas en VS Code (**Extensions** sidebar):

1. **ES7+ React/Redux/React-Native snippets**
   - ID: `dsznajder.es7-react-js-snippets`
   - Ayuda a escribir código React más rápido

2. **Tailwind CSS IntelliSense**
   - ID: `bradlc.vscode-tailwindcss`
   - Autocompletado para Tailwind

3. **Prettier - Code formatter**
   - ID: `esbenp.prettier-vscode`
   - Formatea código automáticamente

4. **Thunder Client**
   - ID: `rangav.vscode-thunder-client`
   - Prueba APIs (para futuro)

5. **Firebase Explorer**
   - ID: `ChakrounAmine.firebase-explorer`
   - Navega Firestore desde VS Code

### Cómo instalar una extensión:

1. **View** → **Extensions** (o `Ctrl + Shift + X`)
2. Busca por ID o nombre
3. Haz clic en **Install**

---

## 9️⃣ Debugging (Troubleshooting)

### El navegador no abre automáticamente
```bash
# Copia manualmente en el navegador:
http://localhost:5173
```

### Error: "Port 5173 in use"
```bash
# Usa otro puerto:
npm run dev -- --port 5174
```

### Los cambios no se actualizan
```bash
# Recarga la página del navegador:
F5  o  Ctrl + R
```

### Error de "firebase not found"
```bash
# En terminal VS Code:
npm install
```

### .env.local no se reconoce
```bash
# Reinicia VS Code completamente y vuelve a intentar
```

---

## 🔟 Ver Errores en VS Code

Si hay errores, los verás en:

1. **PROBLEMS tab** (abajo)
2. **Squiggly lines** rojos bajo el código
3. **Terminal** (si hay errores de compilación)

### Ejemplo de error:

```
Login.jsx
Line 15: 'setError' is not defined
```

Significa que olvidaste importar algo o hay un typo.

---

## 1️⃣1️⃣ Guardar Arhivos

Todas tus ediciones se guardan con:

```
Ctrl + S    ← Guardar archivo actual
Ctrl + Shift + S  ← Guardar todos
```

Cuando VS Code guarda automáticamente, ves un punto blanco desaparecer del tab del archivo.

---

## 1️⃣2️⃣ Navegar por el Código

### Atajos útiles:

| Atajo | Función |
|-------|---------|
| `Ctrl + P` | Buscar archivo por nombre |
| `Ctrl + F` | Buscar texto en archivo actual |
| `Ctrl + H` | Buscar y reemplazar |
| `Ctrl + Click` | Ir a definición |
| `F12` | Ir a definición |
| `Ctrl + G` | Ir a línea específica |
| `Ctrl + /` | Comentar/descomenta línea |
| `Alt + Up/Down` | Mover línea arriba/abajo |
| `Ctrl + D` | Seleccionar palabra siguiente |

---

## 1️⃣3️⃣ Git & Versionado (Opcional)

Si quieres controlar versiones con Git:

### Inicializar repositorio
```bash
git init
git add .
git commit -m "Initial commit: estructura base"
```

### Después de cambios
```bash
git add .
git commit -m "Feature: descripción de cambios"
git push  # Si tienes repositorio remoto (GitHub, etc.)
```

VS Code muestra cambios en el **Source Control** tab.

---

## 1️⃣4️⃣ Limpiar Líneas en Blanco

Para mantener el código limpio:

1. **View** → **Command Palette** (`Ctrl + Shift + P`)
2. Escribe: "Format Document"
3. Presiona Enter

Automáticamente:
- Indenta correctamente
- Elimina espacios extras
- Aplica formato Prettier

---

## 1️⃣5️⃣ Cambiar Tema de VS Code

A muchos les gusta un tema oscuro:

1. **File** → **Preferences** → **Theme** → **Color Theme**
2. O presiona: `Ctrl + K` luego `Ctrl + T`
3. Elige:
   - **Dark+** (oscuro, recomendado)
   - **Light+** (claro)
   - **Dracula** (popular)
   - Etc.

---

## 🎯 Tu Flujo de Trabajo Típico

```
1. Abre VS Code
2. Terminal: npm run dev
3. Navegador abre: http://localhost:5173
4. Edita archivos en VS Code (Ctrl + S para guardar)
5. El navegador se actualiza automáticamente
6. Ves cambios en tiempo real
7. Cuando termines: Ctrl + C en terminal para detener
```

---

## 📊 Estructura de Proyectos similares

Si quieres explorar cómo se hacen aplicaciones React profesionales:

- [Create React App examples](https://github.com/facebook/create-react-app)
- [Next.js examples](https://github.com/vercel/next.js/tree/canary/examples)
- [Shadcn/ui examples](https://github.com/shadcn-ui/ui)

---

## 🆘 Si Algo Sale Mal

**Paso 1**: Lee los mensajes de error (en rojo)

**Paso 2**: Reinicia todo:
```bash
# 1. Detén el servidor (Ctrl + C en terminal)
# 2. Cierra el navegador
# 3. En terminal VS Code:
npm run dev
# 4. Abre navegador: http://localhost:5173
```

**Paso 3**: Borra caché:
```bash
# Borra node_modules:
rm -r node_modules
npm install
npm run dev
```

**Paso 4**: Consulta la documentación (README.md, SETUP_GUIDE.md)

**Paso 5**: Contacta con soporte/administrador

---

## ✨ Tips Profesionales

1. **Usa snippets de React**
   - Escribe `rafce` + Tab → genera componente funcional completo

2. **Autoformat al guardar**
   - **File** → **Preferences** → **Settings**
   - Busca: "format on save"
   - Actívalo

3. **Pequeño panel lateral**
   - Haz clic en los iconos de la izquierda para:
     - Explorer (📁)
     - Search (🔍)
     - Source Control (📝)
     - Run (▶️)
     - Extensions (🧩)

4. **Zoom de navegador**
   - `Ctrl + +` para aumentar
   - `Ctrl + -` para disminuir
   - `Ctrl + 0` para resetear

---

## 🚀 Próximos Pasos Después del Setup

1. ✅ Instalar proyecto
2. ✅ Configurar Firebase
3. ✅ Crear archivo .env.local
4. ✅ Ejecutar `npm run dev`
5. ⬜ Importar datos de ejemplo
6. ⬜ Crear lista de estudiantes
7. ⬜ Implementar carga de notas
8. ⬜ Hacer reportes

**¡Ya estás listo para desarrollar! 🎉**

Cualquier duda sobre VS Code, presiona `F1` para acceder a la ayuda integrada.
