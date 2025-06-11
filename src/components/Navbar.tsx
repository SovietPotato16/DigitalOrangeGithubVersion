import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Acerca de', path: '/about' },
    { name: 'Precios', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
  ];

  const getNavBackground = () => {
    if (!isHomePage) {
      return 'bg-black/80 backdrop-blur-xl border-b border-white/5';
    }
    return isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent';
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavBackground()}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group z-50">
              <motion.div 
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg overflow-hidden"
              >
                <img src="/logo.png" alt="Digital Orange Sites Logo" className="w-full h-full object-contain" />
              </motion.div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-black text-orange-400">
                  Digital
                </span>
                <span className="text-xl font-black text-white">
                  Orange
                </span>
                <span className="text-lg font-bold text-gray-400">
                  Sites
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      className={`relative px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                        location.pathname === item.path
                          ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400 backdrop-blur-sm border border-orange-500/30'
                          : 'text-gray-300 hover:bg-white/10 hover:text-white backdrop-blur-sm'
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full border border-orange-400/30"
                          transition={{ type: "spring", duration: 0.6 }}
                        />
                      )}
                    </Button>
                  </motion.div>
                </Link>
              ))}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <Button className="ml-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:from-orange-600 hover:via-pink-600 hover:to-purple-700 rounded-full px-6 py-3 font-bold shadow-lg shadow-orange-500/25">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Comenzar
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden z-50"
            >
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 rounded-full"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link to={item.path}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start mb-3 rounded-xl font-medium py-4 text-lg ${
                          location.pathname === item.path
                            ? 'bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-400'
                            : 'text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6"
                >
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-xl font-bold py-4 text-lg">
                      <Sparkles className="mr-2 h-5 w-5" />
                      Comenzar
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;