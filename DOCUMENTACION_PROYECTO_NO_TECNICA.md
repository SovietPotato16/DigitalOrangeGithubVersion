# Documentación no técnica del proyecto OrangeDigital

Bienvenido/a. Este documento describe **de forma sencilla y sin jerga técnica** cómo está construido el sitio web de Orange Digital que encuentras en esta carpeta.

---

## 1. ¿Qué es este proyecto?

Imagina un conjunto de piezas de LEGO que, al ensamblarse, construyen el sitio web completo de Orange Digital. Cada pieza es un archivo o carpeta con una función específica:

* Mostrar la página de inicio, contacto o blog.
* Dibujar la barra de navegación y el pie de página.
* Guardar estilos de colores, tamaños de texto y espaciados.
* Conectar todas las páginas para que, al hacer clic en un enlace, cambie la vista sin recargar la página entera.

---

## 2. Tecnologías clave (las "piezas" principales)

1. **Vite**            → Es el "motor" que enciende el proyecto cuando estamos desarrollando y luego lo empaqueta para publicar.
2. **React**           → El sistema de piezas reutilizables para pintar la interfaz (páginas y componentes).  
3. **React Router**    → El GPS que decide qué página mostrar según la dirección URL.  
4. **TypeScript**      → Reglas adicionales que ayudan a evitar errores mientras se escribe código.  
5. **Tailwind CSS**    → La "caja de pintura" con clases listas para dar color, tamaño y espaciado.  
6. **Shadcn UI**       → Una biblioteca de botones, menús y tarjetas ya prediseñadas que se adaptan al estilo Tailwind.  
7. **react-hot-toast** → Muestra avisos emergentes (toasts) como "Mensaje enviado con éxito".

> ⭐ No necesitas saber programar para entender que estas herramientas sólo sirven para **preparar, ordenar y mostrar** los contenidos.

---

## 3. Vista de carpetas

```
├── index.html              ← Punto de entrada para el navegador
├── vite.config.ts          ← Configuración del "motor" Vite
├── tailwind.config.js      ← Colores y tipografías globales
├── src/                    ← Toda la lógica de la web vive aquí
│   ├── main.tsx            ← Engancha React dentro de index.html
│   ├── App.tsx             ← Define el menú, el pie y las rutas (mapa de páginas)
│   ├── pages/              ← Cada archivo pinta una página completa
│   ├── components/         ← Piezas reutilizables (Navbar, Footer, etc.)
│   ├── components/ui/      ← Widgets genéricos (botones, menús, tarjetas…)
│   ├── hooks/              ← Funciones auxiliares (traer posts, mostrar toasts)
│   ├── data/               ← Datos de ejemplo (posts del blog)
│   └── index.css           ← Estilos globales de Tailwind
└── public/                 ← Imágenes y recursos estáticos
```

### 3.1 Carpeta `src/pages`

Cada archivo representa una **página completa**. Por ejemplo:

* `Home.tsx`   → Página principal con la propuesta de valor.
* `About.tsx`  → Quiénes somos.
* `Pricing.tsx`→ Planes y precios.
* `Blog.tsx`   → Listado de artículos.
* `BlogPost.tsx` → Detalle de un artículo concreto.
* `services/`  → Cinco páginas dedicadas a cada servicio (Sitios Web, E-Commerce, etc.).

### 3.2 Carpeta `src/components`

Agrupa piezas repetidas en casi todas las páginas:

* **Navbar**   → La barra superior con enlaces.
* **Footer**   → Información y enlaces finales.
* **Hero**     → Sección grande inicial de cada página.
* **ScrollToTop** → Hace que, al cambiar de página, la vista vuelva arriba.

Los sub-componentes dentro de `components/ui/` son elementos genéricos (botón, pestañas, diálogo, etc.) basados en Shadcn UI.

---

## 4. El viaje cuando visitas la web

1. **Tu navegador abre `index.html`.**  
   Dentro hay un div vacío con id="root".
2. **`main.tsx`** detecta ese div y "inyecta" React dentro.
3. **`App.tsx`** se carga. Dentro encontramos:
   * **BrowserRouter** → Vigila la barra de direcciones.
   * **Routes** con varias **Route**: cada una indica "si la URL es X muestra la página Y".
   * **Navbar** y **Footer** envuelven el contenido para que se vean siempre.
4. **Navegación**: al pulsar un enlace, React Router cambia la URL, busca la Route correspondiente y sólo reemplaza el área central; el resto de la página no se recarga (experiencia rápida).

---

## 5. Datos del Blog

El blog consume un archivo `src/data/posts.json` como fuente de artículos.

Las páginas `Blog.tsx` y `BlogPost.tsx` leen directamente este JSON para mostrar el listado y cada artículo.

---

## 6. Estilos y colores

* **Tailwind** propone clases como `bg-gray-900` o `text-white`.  
  Así se evita escribir CSS tradicional; basta con colocar la clase en el elemento.
* En `tailwind.config.js` se añaden colores corporativos y tamaños personalizados.

Ejemplo: `className="min-h-screen bg-gray-900 text-white"` pinta el fondo oscuro y texto blanco ocupando el alto de la pantalla.

---

## 7. Componentes destacados explicados

1. **Navbar (`src/components/Navbar.tsx`)**  
   Construye el menú horizontal. Detecta la ruta actual para resaltar el enlace activo y colapsa en móviles.

2. **ScrollToTop (`src/components/ScrollToTop.tsx`)**  
   Escucha los cambios de ruta y, cuando detecta uno nuevo, ejecuta `window.scrollTo({ top: 0 })` para comenzar en la parte superior.

3. **ProjectWizard (`src/components/ProjectWizard.tsx`)**  
   Un formulario paso a paso que guía al usuario para describir su proyecto. Mide el progreso y al final muestra un resumen.

4. **use-toast (`src/hooks/use-toast.ts`)**  
   Prepara la función `toast({ title, description })` para mostrar avisos emergentes. `App.tsx` incorpora el contenedor `Toaster` donde se exhiben.

---

## 8. Construcción y despliegue

Cuando se ejecuta el comando de "construir":

1. **Vite** lee `vite.config.ts`, procesa los archivos y genera una carpeta `dist/` con todo optimizado (imágenes, CSS, JavaScript minificado).
2. Esa carpeta es la que se sube al servidor o servicio de hosting.

---

## 9. ¿Cómo se añade una nueva página?

1. Crear un archivo, por ejemplo `src/pages/Nueva.tsx` con el contenido deseado.
2. Abrir `src/App.tsx` y añadir:
   ```tsx
   <Route path="/nueva" element={<Nueva />} />
   ```
3. Añadir un enlace en `Navbar.tsx`.
4. ¡Listo! React Router se encargará del resto.

---

## 10. Resumen final

* **Todo** se organiza dentro de `src/`.
* **`App.tsx`** es el "director de orquesta" que decide qué página mostrar.
* **Tailwind** mantiene el estilo coherente sin escribir CSS manualmente.
* **Vite** hace que la experiencia de desarrollo sea veloz y genera la versión final para producción.

Con esta guía deberías poder navegar por las carpetas y entender, a grandes rasgos, qué hace cada pieza. ¡Felices descubrimientos!  

---

> Creado automáticamente para explicar la base de código a un público no técnico. 