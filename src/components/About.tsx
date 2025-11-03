import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* === BLOK JUDUL === */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          {/* === BLOK FOTO === */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src="Foto.jpg" // <-- PASTIKAN INI ADALAH PATH FOTO ANDA
              alt="Foto Profil"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary/30 shadow-lg card-glow"
            />
          </motion.div>

          {/* === BLOK DESKRIPSI === */}
          <motion.div
            className="text-justify mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Welcome! I'm Afrizal Fauzi Firmansyah, an Industrial Engineer obsessed with making things run better. To me, industrial engineering is the art of looking at a system whether it's an assembly line, a bank queue, or even how you organize your computer files and finding a way to make it more efficient. I spend my days analyzing data, drawing flowcharts, and working with teams to turn good enough processes into exceptionally efficient ones. I thrive on the challenge of combing through complexity to find simple solutions that make a big impact. This website is where I share insights on productivity, operations management, and continuous improvement. Let's connect and discuss a smarter way of working!
            </p>
          </motion.div>

          {/* === BLOK KARTU FITUR TELAH DIHAPUS === */}
          
        </motion.div>
      </div>

      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};