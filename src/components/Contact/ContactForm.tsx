'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent successfully! ✅', {
        style: {
          background: '#334155',
          color: '#d9f99d',
          border: '1px solid #65a30d'
        }
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      toast.error(`Failed to send message: ${error.text || 'Please try again.'} ❌`, {
        style: {
          background: '#334155',
          color: '#fca5a5',
          border: '1px solid #dc2626'
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section 
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
        }}
      />
      
      <motion.header 
        className="text-center mb-12"
        variants={itemVariants}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-lime-200 mb-3 font-bebas"
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-lime-300 mx-auto"
          variants={itemVariants}
        />
      </motion.header>

      <motion.form 
        ref={form}
        onSubmit={handleSubmit}
        className="space-y-6"
        variants={formVariants}
      >
        <motion.div variants={itemVariants}>
          <label htmlFor="name" className="font-roboto block text-sm font-medium text-lime-100 mb-2">
            Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="h-5 w-5 text-lime-300" />
            </div>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="font-roboto block w-full pl-10 pr-3 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent transition-all"
              placeholder="Your name"
              required
              disabled={isLoading}
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="email" className="font-roboto block text-sm font-medium text-lime-100 mb-2">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="h-5 w-5 text-lime-300" />
            </div>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="font-roboto block w-full pl-10 pr-3 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
              required
              disabled={isLoading}
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <label htmlFor="message" className="block text-sm font-medium text-lime-100 mb-2 font-roboto">
            Message
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3">
              <FiMessageSquare className="h-5 w-5 text-lime-300" />
            </div>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="font-roboto block w-full pl-10 pr-3 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:border-transparent transition-all"
              placeholder="Your message here..."
              required
              disabled={isLoading}
            />
          </div>
        </motion.div>

        <motion.div 
          className="pt-4"
          variants={itemVariants}
        >
          <motion.button
            type="submit"
            className={`font-roboto w-full sm:w-auto px-6 py-3 text-white font-medium rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-300 ${
              isLoading 
                ? 'bg-lime-800 cursor-not-allowed' 
                : 'bg-lime-600 hover:bg-lime-700 cursor-pointer'
            }`}
            whileHover={!isLoading ? { 
              scale: 1.03,
              boxShadow: "0 5px 15px rgba(132, 204, 22, 0.4)"
            } : {}}
            whileTap={!isLoading ? { scale: 0.98 } : {}}
            disabled={isLoading}
          >
            <FiSend className="h-5 w-5" />
            {isLoading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
}