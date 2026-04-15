# Sistema de Gestión - Curso de Ingreso 2026

Aplicación web para la gestión de calificaciones y generación de boletines del Colegio Preuniversitario Ramón Cereijo.

## 🚀 Tecnologías
* **Frontend:** React + Vite
* **Estilos:** Tailwind CSS
* **Base de Datos:** Firebase Cloud Firestore
* **Reportes:** jsPDF (Generación de boletines duplicados en A4)

## 📋 Lógica de Negocio Implementada
* **Boletines:** Emisión de Original (Escuela) y Copia (Estudiante) con cálculos automáticos de totales y recuperatorios.
* **Orden de Mérito:** * Requisito de ingreso: ≥ 360 puntos (Gran Total) y ≥ 180 puntos por materia (Matemática y P.L.).
  * Numeración automática: Los estudiantes que no cumplen el piso por materia figuran con "***" sin consumir número de orden oficial.

## 🛠️ Instalación y Deploy
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Crear archivo `.env` con las credenciales de Firebase (ver `.env.example`).
4. Ejecutar `npm run build` para generar la carpeta `/dist`.