# Guía Técnica del Proyecto OrangeDigital

> Este documento se dirige a desarrolladores. Contiene detalles técnicos, pero se incluyen **cajetines de "TL;DR"** para lectores sin experiencia que necesiten la idea general.

---

## Índice rápido

1. Resumen de la pila tecnológica
2. Scripts disponibles (npm)
3. Arquitectura de carpetas
4. Configuración: Vite, Tailwind y ESLint
5. Enrutamiento con React-Router
6. Gestión de estado y hooks
7. Componentes UI (shadcn/ui + Tailwind)
8. Flujo de construcción y CI/CD

---

## 1. Resumen de la pila tecnológica

| Herramienta                | Para qué se usa | TL;DR (no-técnicos) |
|----------------------------|-----------------|---------------------|
| `React 18`                | Renderizar la interfaz mediante componentes reutilizables. | "Biblioteca que pinta los bloques visuales" |
| `Vite`                    | Servidor de desarrollo ultra-rápido y empaquetador para producción. | "Motor que enciende la web" |
| `TypeScript`              | Tipado estático sobre JavaScript. | "Ortografía que evita errores" |
| `React Router DOM v6`     | Enrutamiento SPA. | "GPS de páginas" |
| `Tailwind CSS`            | Framework de clases utilitarias. | "Caja de pinturas" |
| `shadcn/ui`               | Conjunto de componentes accesibles pre-estilizados. | "Lego UI listo para usar" |
| `react-hot-toast`         | Toasts/avisos emergentes. | "Globos de notificación" |
| `Lucide Icons`            | Íconos SVG. | "Dibujitos" |

---

## 2. Scripts disponibles

Los scripts se definen en `package.json`.

```json
"dev"      → Ejecuta Vite en modo desarrollo con recarga en vivo.
"build"    → Genera la carpeta `dist/` optimizada.
"preview"  → Lanza un servidor local para revisar `dist/`.
"lint"     → Ejecuta ESLint con la configuración de este repo.
```

> TL;DR: Para arrancar localmente usa `pnpm dev` (o `npm run dev`).

---

## 3. Arquitectura de carpetas

```text
src/
├── main.tsx      # Punto de arranque: monta <App /> dentro de #root
├── App.tsx       # Layout general + Router (Navbar, Footer, etc.)
├── pages/        # Vistas de alto nivel (Home, About, Blog…)
│   └── services/ # Sub-rutas para /services/*
├── components/   # Piezas reutilizables específicas del negocio
│   └── ui/       # Piezas genéricas (shadcn/ui)
├── hooks/        # Custom hooks (use-toast, etc.)
├── data/         # Fuentes estáticas (posts.json)
└── index.css     # Import principal de Tailwind + capas personalizadas
public/           # Recursos estáticos copiados tal cual a dist/
```

> TL;DR: Todo el código "con lógica" vive en **src/**.

---

## 4. Configuración clave

### 4.1 `vite.config.ts`

* `@vitejs/plugin-react` habilita Fast Refresh.
* Alias `@/` → `./src` para imports limpios (`@/components/Button`).
* Plugins MDX y Prism activados para **syntax-highlighting** si se agregan archivos `.mdx`.
* `optimizeDeps.include: ['lucide-react']` pre-carga íconos.

```ts
resolve: { alias: { '@': path.resolve(__dirname, './src') } }
```

### 4.2 `tailwind.config.js`

* Usa `content: ['./index.html', './src/**/*.{ts,tsx}']` para purgar estilos.
* Paleta extendida con colores corporativos (orange-500, etc.).

### 4.3 `eslint.config.js`

* Configura reglas base de Airbnb + React.
* Plugins para hooks y TypeScript.

> TL;DR: Estas configuraciones automatizan recarga, colores y calidad de código.

---

## 5. Enrutamiento

`src/App.tsx` define las rutas:

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:slug" element={<BlogPost />} />
  {/* …otras rutas… */}
</Routes>
```

Cada `Route` recibe un componente que se renderiza solo cuando la URL coincide. El componente `ScrollToTop` escucha los cambios de `location` para hacer `window.scrollTo(0,0)` y **evitar quedarnos en medio de la página**.

> TL;DR: Cambiar de página es instantáneo porque solo se actualiza la parte central, no se recarga todo el sitio.

---

## 6. Gestión de estado y hooks

* `use-toast.ts` expone `useToast()` para mostrar notificaciones globales. Internamente envía eventos a `<Toaster />`.
* `src/pages/Blog.tsx` lee los artículos directamente del archivo JSON. Se usan `useState` y `useEffect` para filtros de búsqueda y categorías.

> Podrías conectar aquí una API REST o GraphQL sustituyendo la importación del JSON por `fetch()`.

---

## 7. Componentes UI

Los componentes de `components/ui/` provienen del proyecto **shadcn/ui**. Cada uno sigue la convención:

```tsx
export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
});
```

*Se añade `cn` (classNames) para mezclar variantes de Tailwind.*

> TL;DR: Piezas listas para usar que respetan accesibilidad y diseño.

---

## 8. Flujo de build y despliegue

1. `pnpm build` compila **TypeScript → JavaScript** y minimiza todo.
2. Vite genera hashes en los nombres de archivos para **cache busting**.
3. Los artefactos viven en `dist/` listos para cualquier hosting estático (Netlify, Vercel, etc.).

Si usas Heroku se aprovecha el buildpack **NodeJS** (ver archivo `.buildpacks`).

> TL;DR: Ejecuta un comando y obtendrás una carpeta que puedes subir donde quieras. 