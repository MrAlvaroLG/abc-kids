# 📸 Guía de Imágenes para Hero Section

## Imagen Principal del Puzzle

Para reemplazar la imagen dentro de la pieza del rompecabezas, necesitas:

### 1. Ubicación del archivo
Coloca tu imagen en: `/public/hero-image.jpg` o `/public/hero-image.png`

### 2. Características recomendadas
- **Dimensiones:** 800x800px (cuadrada) o 1000x1000px para mejor calidad
- **Formato:** JPG o PNG
- **Contenido sugerido:**
  - Niños jugando felices en el daycare
  - Maestros interactuando con niños
  - Actividades coloridas y dinámicas
  - Rostros sonrientes (con permiso de los padres)
  
### 3. Optimización
- Tamaño de archivo: Máximo 500KB
- Usa herramientas como TinyPNG o Squoosh para optimizar
- Asegúrate de que la imagen tenga buena iluminación

### 4. Actualizar el código
En el archivo `/components/home/HeroSection.tsx`, línea ~143, cambia:

```tsx
<image 
    href="/logo.png"  // ← Cambia esto
    x="80" 
    y="30" 
    width="290" 
    height="290"
    clipPath="url(#puzzleClip)"
    className="opacity-90"
/>
```

Por:

```tsx
<image 
    href="/hero-image.jpg"  // ← Por tu imagen
    x="80" 
    y="30" 
    width="290" 
    height="290"
    clipPath="url(#puzzleClip)"
    className="opacity-90"
/>
```

## Otras imágenes opcionales

### Fondos para secciones futuras
- `/public/backgrounds/`
  - `classroom.jpg`
  - `playground.jpg`
  - `activities.jpg`

### Galería
- `/public/gallery/`
  - Múltiples imágenes del daycare
  - Nombra con números: `gallery-01.jpg`, `gallery-02.jpg`, etc.

### Testimonios
- `/public/testimonials/`
  - Fotos de familias o avatars

---

## 🎨 Tips de Diseño

1. **Consistencia de colores:** Usa imágenes que complementen tu paleta (Navy, Accent/Amarillo)
2. **Espacio negativo:** Deja espacio en las fotos para texto overlay
3. **Calidad profesional:** Usa fotos con buena luz natural
4. **Diversidad:** Muestra la diversidad de tu comunidad
5. **Acción:** Prefiere fotos con movimiento y actividad vs. poses estáticas

