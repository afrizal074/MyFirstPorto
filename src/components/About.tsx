 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 
 export const About = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-50px" });
 
   return (
     <section id="about" className="py-16 md:py-28 relative overflow-hidden">
       <div className="container px-4 sm:px-6">
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
               <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed text-justify">
                 Hi Everyone, My Name is Afrizal Fauzi Firmansyah. Now I am a student at Pamulang University majoring in Industrial Engineering. I like things related to the world of technology, therefore I created this website not because I am in the IT field but in my opinion creating this website is a basic knowledge that I must learn in the current era which makes it easier for us to create anything. I hope I can find good things and good relationships to support my better future.
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
                src="MyFoto.jpg" // < PASTIKAN INI ADALAH PATH FOTO ANDA
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
