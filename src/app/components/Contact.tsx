import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle, XCircle, Loader2 } from 'lucide-react';


// ─────────────────────────────────────────────
// CHOOSE YOUR EMAIL SERVICE
// Set ACTIVE_SERVICE to 'emailjs' or 'formspree'
// ─────────────────────────────────────────────

// Switch to formspree
const ACTIVE_SERVICE: 'emailjs' | 'formspree' = 'formspree';

// Paste your endpoint here
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbdpywpy';
// ── EmailJS config ────────────────────────────
// 1. Sign up at https://www.emailjs.com (free)
// 2. Add an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template — use these variables:
//    {{from_name}}, {{from_email}}, {{subject}}, {{message}}
// 4. Paste your IDs below
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',   // e.g. "service_abc123"
  templateId: 'YOUR_TEMPLATE_ID', // e.g. "template_xyz789"
  publicKey: 'YOUR_PUBLIC_KEY',   // e.g. "abcDEFghiJKL..."
};

// ── Formspree config ──────────────────────────
// 1. Sign up at https://formspree.io (free)
// 2. Create a new form → copy your form endpoint
// 3. Paste it below (just the ID part after /f/)


// ─────────────────────────────────────────────

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };



  // ── Formspree sender ────────────────────────
  const sendViaFormspree = async () => {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data?.errors?.[0]?.message ?? 'Formspree error');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    try {
      if (ACTIVE_SERVICE === 'emailjs') {
      } else {
        await sendViaFormspree();
      }
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err?.message ?? 'Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    { icon: Mail,   label: 'Email',     value: 'akintolaalameen5@gmail.com', href: 'https://mail.google.com/mail/?view=cm&to=akintolaalameen5@gmail.com'},
    { icon: Phone,  label: 'Phone',     value: '07042225803',                href: 'tel:+2347042225803' },
    { icon: MapPin, label: 'Location',  value: 'Lagos, Nigeria',             href: null },
    { icon: Phone,  label: 'WhatsApp',  value: '07042225803',                href: 'https://wa.me/2347042225803' },
  ];

  const socialLinks = [
    { icon: Github,   href: 'https://github.com/alameen16',                    label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/akintola-al-ameen',   label: 'LinkedIn' },
    { icon: Twitter,  href: 'https://x.com/folarin_dev',                       label: 'Twitter' },
  ];

  const isLoading = status === 'loading';

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-wider text-sm font-medium">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out. I'm always open to
            discussing new projects and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact info card */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {info.label === 'WhatsApp' ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-primary"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      ) : (
                        <info.icon className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm mb-1">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} 
                         target="_blank"
                         rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-foreground">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social links card */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right column: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-6 md:p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-foreground text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-foreground text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-foreground text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-foreground text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status feedback */}
              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3 mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">Message sent! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3 mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl"
                  >
                    <XCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">{errorMessage || 'Something went wrong. Please try again.'}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
