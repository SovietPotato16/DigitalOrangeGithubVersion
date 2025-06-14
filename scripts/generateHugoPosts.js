import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = '../src/data';
const OUTPUT_FILE = 'posts.json';

async function generatePosts() {
  // Asegurarse de que el directorio de salida existe
  if (!fs.existsSync(path.join(__dirname, OUTPUT_DIR))) {
    fs.mkdirSync(path.join(__dirname, OUTPUT_DIR), { recursive: true });
  }

  try {
    // Hacer una petición HTTP al servidor de Hugo
    const response = await fetch('http://localhost:1313/index.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts = await response.json();
    
    // Escribir el archivo JSON en el directorio de la aplicación React
    fs.writeFileSync(
      path.join(__dirname, OUTPUT_DIR, OUTPUT_FILE),
      JSON.stringify(posts, null, 2)
    );
    
    console.log(`Posts guardados en ${path.join(OUTPUT_DIR, OUTPUT_FILE)}`);
  } catch (error) {
    console.error('Error generando los posts:', error);
    process.exit(1);
  }
}

generatePosts(); 