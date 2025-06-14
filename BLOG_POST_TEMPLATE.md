---
# Plantilla para crear una nueva entrada de Blog

Sigue estos pasos y copia-pega este bloque en `src/data/posts.json`, respetando la coma separadora dentro del array.

```jsonc
{
  "title": "Título del artículo",
  "date": "YYYY-MM-DD",
  "slug": "titulo-del-articulo",          // todo en minúsculas y con guiones
  "summary": "Resumen atractivo 1–2 líneas.",
  "content": "<p>Contenido en HTML o Markdown convertido a HTML.</p>",
  "author": {
    "name": "Nombre del Autor",            // ya debe existir en authors.json
    "avatar": "URL de avatar (opcional)",
    "bio": "Bio corta (opcional)"
  },
  "categories": ["Categoría1", "Categoría2"],
  "tags": ["tag1", "tag2"],
  "coverImage": "https://source.unsplash.com/featured/800x450?keyword"
}
```

1. Asegúrate de que `slug` sea único.  
2. Agrega la coma `,` después del objeto anterior en `posts.json`.  
3. Si el autor no existe, agrégalo en `src/data/authors.json` con un nuevo `id`.

---

## Atajos de imagen

• Portada: usa Unsplash con la query `/featured/800x450?tema`.  
• Avatares: usa `https://randomuser.me/api/portraits/men/ID.jpg` o `women/ID.jpg`.

---

## Ejecución

1. Guarda los cambios.  
2. Ejecuta `pnpm dev` y verifica en `/blog` que la tarjeta aparezca.  

¡Listo! Tu nueva entrada está publicada. 