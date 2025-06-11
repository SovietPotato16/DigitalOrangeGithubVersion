# Guía del Sistema de Blog - Digital Orange Sites

## Estructura del Blog

```
src/
  content/
    blog/
      posts/          # Archivos MDX de los posts
        post-1.mdx
        post-2.mdx
      authors/        # Información de autores
        authors.json  # Lista de autores y sus detalles
      categories/     # Categorías del blog
        categories.json
      images/        # Imágenes de los posts
        post-1/      # Carpeta para cada post
          cover.jpg
          image-1.jpg
```

## Crear un Nuevo Post

1. **Crear archivo MDX**:
   ```bash
   # En src/content/blog/posts/
   touch mi-nuevo-post.mdx
   ```

2. **Estructura del Post**:
   ```mdx
   ---
   title: "Título del Post"
   excerpt: "Breve descripción para SEO y previsualizaciones (150-160 caracteres)"
   date: "2024-03-20"
   author: "autor-1"
   categories: ["categoria-1", "categoria-2"]
   coverImage: "/images/blog/mi-nuevo-post/cover.jpg"
   seo:
     keywords: ["palabra-clave-1", "palabra-clave-2"]
     description: "Descripción SEO específica (si es diferente del excerpt)"
   ---

   # Contenido Principal

   Tu contenido aquí usando Markdown y componentes MDX.

   ## Secciones con H2

   - Usa listas
   - Para organizar contenido

   ### Subsecciones con H3

   Incluye `código` cuando sea necesario:

   ```javascript
   const ejemplo = "código";
   ```

   <Callout type="tip">
     Usa componentes especiales para contenido destacado
   </Callout>

   ![Descripción de imagen](/images/blog/mi-nuevo-post/imagen-1.jpg)
   ```

## Gestión de Autores

1. **Editar authors.json**:
   ```json
   {
     "autor-1": {
       "name": "Nombre Completo",
       "role": "Cargo/Especialidad",
       "avatar": "/images/authors/autor-1.jpg",
       "bio": "Biografía corta (2-3 líneas)",
       "social": {
         "twitter": "@handle",
         "linkedin": "url-perfil",
         "github": "url-perfil"
       },
       "expertise": ["área-1", "área-2"]
     }
   }
   ```

2. **Agregar Avatar**:
   - Tamaño recomendado: 400x400px
   - Formato: JPG o PNG
   - Ubicación: `/public/images/authors/`

## Optimización SEO

1. **Metadata del Post**:
   - Título: 50-60 caracteres
   - Descripción: 150-160 caracteres
   - Keywords: 3-5 palabras clave principales

2. **Imágenes**:
   - Nombres descriptivos: `diseno-responsivo-ejemplo.jpg`
   - Alt text informativo
   - Optimizar peso (< 200KB para imágenes normales)
   - Dimensiones recomendadas:
     - Cover: 1200x630px
     - Contenido: máx 800px de ancho

3. **Estructura de Contenido**:
   - Un solo H1 por post
   - Estructura jerárquica de H2, H3
   - Párrafos cortos (2-3 oraciones)
   - Incluir enlaces internos relevantes

## Mejores Prácticas

1. **Escritura**:
   - Tono conversacional pero profesional
   - Párrafos cortos y concisos
   - Usar bullets para listas
   - Incluir ejemplos prácticos

2. **Imágenes**:
   - Crear carpeta específica para cada post
   - Nombrar archivos descriptivamente
   - Optimizar antes de subir
   - Incluir alt text SEO-friendly

3. **Categorización**:
   - Usar categorías existentes cuando sea posible
   - Limitar a 2-3 categorías por post
   - Mantener consistencia en nombres

4. **Enlaces**:
   - Internos: vincular a otros posts relevantes
   - Externos: abrir en nueva pestaña
   - Verificar enlaces rotos regularmente

## Proceso de Publicación

1. **Preparación**:
   - Escribir contenido en MDX
   - Preparar y optimizar imágenes
   - Revisar metadata y SEO

2. **Revisión**:
   - Verificar formato y estilo
   - Comprobar enlaces
   - Validar imágenes y recursos
   - Revisar ortografía y gramática

3. **Publicación**:
   - Commit y push al repositorio
   - Verificar build exitoso
   - Comprobar en producción

4. **Post-Publicación**:
   - Compartir en redes sociales
   - Monitorear analytics
   - Responder comentarios

## Componentes Disponibles

1. **Callout**:
   ```mdx
   <Callout type="tip|warning|info">
     Contenido destacado
   </Callout>
   ```

2. **CodeBlock**:
   ```mdx
   <CodeBlock language="javascript|typescript|html">
     // Tu código aquí
   </CodeBlock>
   ```

3. **ImageGallery**:
   ```mdx
   <ImageGallery
     images={[
       {
         src: "/ruta/imagen1.jpg",
         alt: "Descripción 1"
       },
       {
         src: "/ruta/imagen2.jpg",
         alt: "Descripción 2"
       }
     ]}
   />
   ```

## Mantenimiento

1. **Actualización de Contenido**:
   - Revisar posts antiguos cada 6 meses
   - Actualizar información obsoleta
   - Verificar enlaces rotos
   - Actualizar ejemplos de código

2. **Backups**:
   - Mantener copia local de imágenes
   - Documentar cambios importantes
   - Versionar contenido cuando sea necesario

3. **Monitoreo**:
   - Revisar analytics mensualmente
   - Analizar engagement
   - Identificar contenido popular
   - Planificar actualizaciones

## Resolución de Problemas

1. **Imágenes no cargan**:
   - Verificar ruta correcta
   - Comprobar permisos de archivo
   - Validar formato soportado

2. **Errores de Build**:
   - Revisar sintaxis MDX
   - Verificar imports
   - Comprobar rutas de recursos

3. **Problemas de Formato**:
   - Validar frontmatter
   - Comprobar markdown
   - Revisar componentes MDX

## Recursos Útiles

1. **Herramientas**:
   - Optimización de imágenes: TinyPNG
   - Editor Markdown: VS Code + plugins
   - SEO: Yoast SEO guidelines

2. **Documentación**:
   - MDX: https://mdxjs.com/
   - Markdown: https://www.markdownguide.org/
   - SEO: https://developers.google.com/search

3. **Plantillas**:
   - Post básico
   - Tutorial técnico
   - Caso de estudio
   - Artículo de noticias 