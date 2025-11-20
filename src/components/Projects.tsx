// src/components/Projects.tsx

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// "ExternalLink" dihapus dari impor karena tidak lagi digunakan
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./ui/dialog";

// 1. Perbarui array projects dengan data Anda
const projects = [
  {
    title: "Bot Customer Service", 
    description:"Automated customer service bot with multi-platform integration and intelligent workflow automation.",
    tech: ["N8N", "Gemini API", "SerpAPI", "Google Sheets API"],
    image: "/images/Bot-Customer-Service.jpg", // <-- Ganti dengan path gambar Anda
    demoUrl: "#", // <-- Ganti dengan link demo live Anda
    fullDescription: 
      "Proyek ini adalah sistem otomatisasi layanan pelanggan yang dibangun menggunakan N8N, Gemini API, SerpAPI, dan Google Sheets API. Bot ini mampu menjawab pertanyaan umum, mengeksekusi alur kerja otomatis, serta mengambil data real-time dari berbagai sumber untuk meningkatkan efisiensi layananFitur utama termasuk pengolahan pesan otomatis, penarikan data eksternal, manajemen database berbasis Google Sheets, dan kemampuan integrasi dengan berbagai platform komunikasi.",
  },
  {
    title: "Meme Coin Trading Crypto", 
    description: "Automated crypto analysis and monitoring tool designed for meme-coin market tracking.", 
    tech: ["Phantom", "Trojan Telegram Bot", "GmGn"],
    image: "/images/Meme-Coin.jpg", // <-- Ganti dengan path gambar Anda
    demoUrl: "#",
    fullDescription:
      "Proyek ini merupakan platform monitoring dan analisis pasar cryptocurrency, khususnya pada kategori meme coin. Sistem ini menggunakan integrasi API seperti Phantom dan modul bot untuk mengumpulkan data pasar, memantau pergerakan harga, serta memberikan laporan atau notifikasi otomatisFokus utama proyek ini adalah riset, pengujian strategi, dan monitoring data real-time dalam konteks edukasi dan eksplorasi teknologi blockchain, bukan untuk aktivitas trading berisiko. Platform ini menampilkan bagaimana data market dikumpulkan, diproses, dan divisualisasikan secara otomatis."
  },
  {
    title: "Design Shirt", 
    description: "Data visualization dashboard with AI-powered insights...", 
    tech: ["Adobe Photoshop", "Canva"],
    image: "/images/Canva.jpg", // <-- Ganti dengan path gambar Anda
    demoUrl: "#",
    fullDescription:
      "Proyek ini adalah pembuatan desain grafis untuk kebutuhan T-shirt dan brand identity menggunakan Adobe Photoshop dan Canva. Prosesnya mencakup pembuatan konsep visual, ilustrasi, komposisi warna, serta penyusunan layout final yang siap di-printing.",
  }
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            {/* ... (Judul section tetap sama) ... */}
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A selection of recent work showcasing innovative solutions and creative implementations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Dialog key={project.title}>
                <motion.div
                  // ... (props motion.div tetap sama)
                  className="group"
                >
                  <div className="bg-card rounded-2xl overflow-hidden border-glow card-glow h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                
                        
                        {/* Tombol "Demo" (DialogTrigger) di card tetap ada */}
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            className="flex-1 bg-primary hover:bg-primary/90"
                          >
                            {/* Ikon ExternalLink masih digunakan di sini */}
                            <motion.img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWV4dGVybmFsLWxpbmsiPjxwYXRoIGQ9Ik0xOCAxM3Y2YTIgMiAwIDAgMS0yIDJoLTljLTIgMC00LTQgMC02VjciLz48cG9seWxpbmUgcG9pbnRzPSIxNSA4IDggOCA4IDE1Ii8+PC9zdmc+" alt="External Link" className="w-4 h-4 mr-2 filter" />
                            Detail
                          </Button>
                        </DialogTrigger>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Konten Modal (Dialog) */}
                <DialogContent className="max-w-3xl bg-card border-glow text-foreground p-8">
                  <DialogHeader>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg mb-4 w-full h-64 object-cover"
                    />
                    <DialogTitle className="text-3xl font-bold text-gradient mb-4">
                      {project.title}
                    </DialogTitle>
                    <div className="flex flex-wrap gap-2 my-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <DialogDescription className="text-muted-foreground text-lg leading-relaxed">
                      {project.fullDescription}
                    </DialogDescription>
                  </DialogHeader>
                  
                  {/* === BAGIAN INI TELAH DIHAPUS ===
                  <div className="flex gap-4 mt-6">
                    ... (Tombol View Code dan View Live Demo tadinya di sini) ...
                  </div>
                  === AKHIR BAGIAN YANG DIHAPUS === */}

                </DialogContent>
              </Dialog>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};