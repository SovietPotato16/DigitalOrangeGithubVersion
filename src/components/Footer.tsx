import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4 text-left">
            <Link to="/" className="text-2xl font-bold block flex items-center gap-2">
              <img src="/logo.png" alt="Digital Orange Logo" className="h-8 w-auto" />
              <div>
                <span className="text-orange-500">Digital </span>
                <span className="text-white">Orange</span>
              </div>
            </Link>
            <p className="text-gray-400">
              Transformando ideas en experiencias digitales extraordinarias.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition-colors group">
                <Facebook className="h-4 w-4 text-white group-hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition-colors group">
                <Twitter className="h-4 w-4 text-white group-hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition-colors group">
                <Instagram className="h-4 w-4 text-white group-hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-500 transition-colors group">
                <Linkedin className="h-4 w-4 text-white group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email: hola@digitalorange.com.mx
              </li>
              <li className="text-gray-400">
                Tel: +52 722 177 2135
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Orange Digital. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="https://www.iubenda.com/privacy-policy/12418386" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Política de Privacidad" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
            <a href="https://www.iubenda.com/privacy-policy/12418386/cookie-policy" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Política de Cookies" target="_blank" rel="noopener noreferrer">Política de Cookies</a>
            <a href="https://www.iubenda.com/condiciones-de-uso/12418386" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Términos y Condiciones" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a>
          </div>
          <script type="text/javascript" dangerouslySetInnerHTML={{__html:`(function (w,d) {var loader = function () {var s = d.createElement('script'), tag = d.getElementsByTagName('script')[0]; s.src='https://cdn.iubenda.com/iubenda.js'; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener('load', loader, false);}else if(w.attachEvent){w.attachEvent('onload', loader);}else{w.onload = loader;}})(window, document);`}} />
        </div>
      </div>
    </footer>
  );
};

export default Footer; 