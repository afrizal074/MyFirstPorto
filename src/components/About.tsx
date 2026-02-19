import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >

          {/* === BLOK JUDUL (DIPINDAHKAN KE ATAS & DIBUAT RATA TENGAH) === */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>

          {/* === WRAPPER FLEXBOX === */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 mb-16">
            
            {/* === BLOK DESKRIPSI (KIRI) === */}
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-justify">
                Welcome! I'm Afrizal Fauzi Firmansyah, an Industrial Engineer obsessed with making things run better. To me, industrial engineering is the art of looking at a system whether it's an assembly line, a bank queue, or even how you organize your computer files and finding a way to make it more efficient. I spend my days analyzing data, drawing flowcharts, and working with teams to turn good enough processes into exceptionally efficient ones. I thrive on the challenge of combing through complexity to find simple solutions that make a big impact. This website is where I share insights on productivity, operations management, and continuous improvement. Let's connect and discuss a smarter way of working!
              </p>
            </motion.div>

            {/* === BLOK FOTO (KANAN) === */}
            <motion.div 
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img 
                src="Foto.jpg" // <-- PASTIKAN INI ADALAH PATH FOTO ANDA
                alt="Foto Profil"
                className="w-56 h-56 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full object-cover border-4 border-primary/30 shadow-lg card-glow"
              />
            </motion.div>

          </div>
          
        </motion.div>
      </div>

    </section>
  );
};