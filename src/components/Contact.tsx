// src/components/Contact.tsx

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Linkedin, Instagram, MessageCircle, Loader2 } from "lucide-react"; 
import { toast } from "sonner";

const socialLinks = [
  { 
    icon: Linkedin, 
    href: "https://www.linkedin.com/in/afrizalfauzi-firmansyah425/", 
    label: "LinkedIn" 
  },
  { 
    icon: Mail, 
    href: "mailto:afrizalfauzi2003@gmail.com", 
    label: "Email" 
  },
  { 
    icon: Instagram, 
    href: "https://www.instagram.com/afrizalfauziii./", 
    label: "Instagram" 
  },
  { 
    icon: MessageCircle, 
    href: "https://wa.me/6285716910663", 
    label: "WhatsApp" 
  }
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false); // Status loading
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // === FUNGSI PENGIRIM PESAN (YANG DIPERBAIKI) ===
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // ⚠️ GANTI URL INI DENGAN PUNYA KAMU DARI FORMSPREE ⚠️
    const formspreeEndpoint = "https://formspree.io/f/mvoqbzqa";

    // Validasi sederhana: Cek jika link belum diganti
    if (formspreeEndpoint.includes("https://formspree.io/f/mvoqbzqa")) {
      toast.error("Link Formspree belum diganti di kodingan!");
      return;
    }

    setIsSubmitting(true); // Mulai loading
    console.log("Mengirim data ke:", formspreeEndpoint);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Pesan berhasil terkirim! Saya akan segera membalasnya.");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        const data = await response.json();
        console.error("Error dari Formspree:", data);
        toast.error("Gagal mengirim pesan. Cek koneksi atau coba lagi.");
      }
    } catch (error) {
      console.error("Error Jaringan:", error);
      toast.error("Terjadi kesalahan sistem.");
    } finally {
      setIsSubmitting(false); // Berhenti loading
    }
  };
  // === AKHIR FUNGSI ===

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? Let's create something amazing together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border-glow rounded-2xl p-8 card-glow"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    disabled={isSubmitting}
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Mengirim...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold mb-4">Find me on</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.label !== 'Email' ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <div className="bg-card border-glow rounded-2xl p-6">
                  <p className="text-sm text-muted-foreground mb-2">Email me directly at</p>
                  <button
                    onClick={() => {
                      window.location.href = 'mailto:afrizalfauzi2003@gmail.com'; 
                    }}
                    className="text-xl font-semibold text-primary hover:underline bg-transparent border-none p-0 cursor-pointer text-left w-full focus:outline-none focus:ring-0"
                  >
                    afrizalfauzi2003@gmail.com
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};