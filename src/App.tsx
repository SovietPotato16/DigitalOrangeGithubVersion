import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import FAQ from '@/pages/FAQ';
import Pricing from '@/pages/Pricing';
import Portfolio from '@/pages/Portfolio';
import WebSites from '@/pages/services/WebSites';
import Ecommerce from '@/pages/services/Ecommerce';
import EnterpriseSystems from '@/pages/services/EnterpriseSystems';
import OrangeDr from '@/pages/services/OrangeDr';
import OrangeLic from '@/pages/services/OrangeLic';
import AuthorPage from '@/pages/AuthorPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/author/:authorId" element={<AuthorPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services/websites" element={<WebSites />} />
            <Route path="/services/ecommerce" element={<Ecommerce />} />
            <Route path="/services/enterprise-systems" element={<EnterpriseSystems />} />
            <Route path="/services/orange-dr" element={<OrangeDr />} />
            <Route path="/services/orange-lic" element={<OrangeLic />} />
          </Routes>
        </main>
        <Footer />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#1f2937',
              color: '#fff',
              borderRadius: '0.75rem',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;