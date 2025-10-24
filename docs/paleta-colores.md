# 🎨 Paleta de Colores ABC Kids

## Colores Principales

### Navy 900 (Primario oscuro)
- **Hex:** `#001D3D`
- **Variable CSS:** `--navy-900`
- **Clase Tailwind:** `bg-navy` / `text-navy`
- **Uso:** Header, Footer, textos principales sobre fondos claros

### Blue 800 (Secundario)
- **Hex:** `#003566`
- **Variable CSS:** `--blue-800`
- **Clase Tailwind:** `bg-[#003566]` / `text-blue-800`
- **Uso:** Acentos profundos, elementos secundarios, hover states

### Accent (CTA principal)
- **Hex:** `#FFC300`
- **Variable CSS:** `--accent`
- **Clase Tailwind:** `bg-accent` / `text-accent`
- **Uso:** Botones principales, call-to-action, estrellas, elementos destacados
- **Nota:** Color vibrante que llama la atención

### Accent 2 (CTA alternativo)
- **Hex:** `#FFD60A`
- **Variable CSS:** `--accent-2`
- **Uso:** Hover en botones principales, variante suave del accent

### Danger (Errores)
- **Hex:** `#DC562E`
- **Variable CSS:** `--danger`
- **Clase Tailwind:** `bg-danger`
- **Uso:** Mensajes de error, badges de alerta, advertencias

## Fondos y Superficies

### Background (Fondo de página)
- **Hex:** `#EBEBEB`
- **Variable CSS:** `--bg`
- **Clase Tailwind:** `bg-bg` / `bg-[#EBEBEB]`
- **Uso:** Fondo general de todas las páginas

### Surface (Tarjetas)
- **Hex:** `#FFFFFF`
- **Variable CSS:** `--surface`
- **Clase Tailwind:** `bg-surface`
- **Uso:** Tarjetas, cards, modales, superficies elevadas

## Textos

### Text Dark (Texto principal)
- **Hex:** `#0B1220`
- **Variable CSS:** `--text-dark`
- **Uso:** Texto principal sobre fondos claros (muy oscuro, casi negro)

### Text Light (Texto sobre oscuro)
- **Hex:** `#FFFFFF`
- **Variable CSS:** `--text-light`
- **Uso:** Texto sobre fondos oscuros (navy, blue)

## Combinaciones Recomendadas

### Header / Footer
```css
background: var(--navy-900);
color: var(--text-light);
```

### Botón Principal
```css
background: var(--accent);
color: var(--navy-900);
hover: var(--accent-2);
```

### Botón Secundario
```css
background: var(--blue-800);
color: var(--text-light);
hover: var(--navy-900);
```

### Cards
```css
background: var(--surface);
color: var(--text-dark);
box-shadow: rgba(0, 0, 0, 0.1);
```

## Gradientes

### Gradient Primary
```css
background: linear-gradient(135deg, #001D3D 0%, #003566 100%);
```

### Gradient Accent
```css
background: linear-gradient(135deg, #FFC300 0%, #FFD60A 100%);
```

## Accesibilidad

### Contrastes Verificados
- ✅ Navy 900 + Text Light: **AAA** (excelente)
- ✅ Blue 800 + Text Light: **AAA** (excelente)
- ✅ Accent + Navy 900: **AA** (bueno)
- ✅ Text Dark + Background: **AAA** (excelente)
- ✅ Danger + Text Light: **AA** (bueno)

## Uso en Componentes

### Clases CSS Personalizadas
- `.btn-primary` - Botón con fondo accent
- `.btn-secondary` - Botón con fondo blue-800
- `.card` - Tarjeta blanca con sombra
- `.badge-danger` - Badge de alerta rojo
- `.bg-navy` - Fondo navy
- `.text-accent` - Texto amarillo

## Notas de Diseño

- 🎯 El **Accent (#FFC300)** es el color estrella, úsalo con moderación para máximo impacto
- 🌊 Los tonos **Navy y Blue** transmiten confianza y profesionalismo
- ⚠️ El **Danger (#DC562E)** solo para alertas y errores
- 💡 El fondo **#EBEBEB** es suave y no cansa la vista
- ⭐ Usa la estrella emoji (⭐) en combinación con el color accent para reforzar la identidad

---

**Actualizado:** 24 de octubre de 2025  
**Proyecto:** ABC Kids - Guardería Infantil
