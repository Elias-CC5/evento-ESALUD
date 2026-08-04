# Aniversario Hospital de Emergencias Grau — ESSALUD

Landing page premium, 100% frontend (Next.js 15 App Router + TypeScript + Tailwind CSS + Framer Motion).

## Instalación

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Reemplazar el video del Hero

Coloca tu archivo en:
```
public/videos/hero-placeholder.mp4
```
El componente `components/Hero.tsx` ya apunta a esa ruta.

## Reemplazar imágenes

Actualmente se usan imágenes de Unsplash como placeholder profesional. Para usar tus propias
imágenes, colócalas en `public/images/` y reemplaza las rutas `src` en:
- `components/About.tsx`
- `components/Buffet.tsx`
- `components/HoraLoca.tsx`
- `components/Gallery.tsx`

## Estructura

```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Timeline.tsx
  Benefits.tsx
  Buffet.tsx
  HoraLoca.tsx
  Gallery.tsx
  Stats.tsx
  Location.tsx
  Contact.tsx
  Footer.tsx
  ui/
    reveal.tsx
    counter.tsx
    glow-button.tsx
    cursor.tsx
lib/
  utils.ts
public/
  images/
  videos/
```

## Notas

- Sin backend, sin base de datos, sin autenticación, sin APIs externas.
- Todo el contenido es editable directamente en cada componente.
- El botón "Contactar" abre el cliente de correo (`mailto:`).
