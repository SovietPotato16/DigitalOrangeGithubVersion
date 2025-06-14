import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'react-hot-toast';

// Component for the coming soon banner with email subscription
const ComingSoonBanner = () => {
  // State to manage the email input
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    // For now, we'll just show a success message
    toast.success('¡Gracias por tu interés! Te notificaremos cuando esté disponible.');
    setEmail('');
  };

  return (
    <div className="relative w-full bg-orange-500 py-12">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl" />
        <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Warning icon and title */}
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-yellow-400" />
            <h2 className="text-3xl font-bold text-white">¡Próximamente!</h2>
          </div>

          {/* Description */}
          <p className="text-white/90 text-lg mb-8 max-w-2xl">
            Estamos trabajando en algo increíble. Déjanos tu correo electrónico y te notificaremos cuando esté disponible.
          </p>

          {/* Email subscription form */}
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white/50"
                />
              </div>
              <Button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-orange-900 font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Notificarme
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonBanner; 