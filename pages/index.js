import Head from 'next/head'; // Komponen Head untuk memasukkan metadata halaman
import { BsFillMoonStarsFill } from 'react-icons/bs'; // Icon untuk mode gelap
import { IoLogoWhatsapp } from "react-icons/io"; // Icon untuk WhatsApp
import { AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'; // Icon untuk LinkedIn dan Instagram
import Image from 'next/image'; // Komponen Image dari Next.js untuk optimasi gambar
import rasyid from '../public/avatar_rasyid.png'; // Import gambar profil
import { useState } from 'react'; // Hook useState untuk mengelola state
import { motion } from "framer-motion"; // Library untuk animasi
import TypingEffect from '../components/TypingEffect'; // Komponen animasi mengetik

export default function Home() {
  const [darkMode, setDarkMode] = useState(false); // State untuk mode gelap
  
  return (
    <div className={darkMode ? 'dark' : ""}>
      {/* Metadata untuk halaman */}
      <Head>
        <title>Ragil Nur Rasyid Portofolio</title>
      </Head>

      {/* Main content */}
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          
          {/* Navigasi dengan tombol mode gelap dan tautan resume */}
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">myPortofolio</h1>
            <ul className="flex items-center">
              <li>
                {/* Toggle mode gelap */}
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
              </li>
              <li>
                {/* Tombol resume */}
                <a className="bg-orange-700 text-white px-4 py-2 rounded-md ml-8" href="https://www.cake.me/s--CyOAI61FE2tHNUu9tEiOYw--/ragil-nur-rasyid">Resume</a>
              </li>
            </ul>
          </nav>

          {/* Informasi teks profil */}
          <div className="text-center p-10">
            <div className="inline-block text-left">
              <h2 className="text-4xl py-0 font-medium md:text-6xl">
                Ragil Nur Rasyid
              </h2>

              {/* Animasi teks menggunakan framer-motion */}
              <motion.h3
                className="text-2xl py-2 md:text-3xl"
                initial={{ opacity: 0 }} // Awal opacity 0
                animate={{ opacity: 1 }} // Opacity menjadi 1
                transition={{ delay: 0.5, duration: 1 }} // Durasi dan jeda animasi
              >
                I'm <span className="text-orange-700"><TypingEffect text="Mobile and Web Developer." /></span>
              </motion.h3>

              {/* Deskripsi singkat */}
              <p className="text-justify text-md py-3 leading-6 text-gray-500 md:text-xl max-w-lg mx-auto">
                I am a <span className="text-black dark:text-white">Fullstack Developer</span> with solid expertise in programming languages and experience in building <span className="text-black dark:text-white">Mobile and Web applications</span>. I focus on creating efficient and user-friendly solutions.
              </p>
            </div>
          </div>

          {/* Ikon media sosial dengan tautan */}
          <div className="text-5xl flex justify-center gap-16 py-0 text-gray-600 flex-wrap">
            {/* Instagram */}
            <a href="https://www.instagram.com/nrrssyydd?igsh=eTAyYjFkbGltZzlp" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="cursor-pointer hover:text-orange-700 text-4xl md:text-5xl" />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/ragil-nur-rasyid-10b5972b4/?originalSubdomain=id" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="cursor-pointer hover:text-orange-700 text-4xl md:text-5xl" />
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/qr/UTKKEN4ZFP6UG1" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className="cursor-pointer hover:text-orange-700 text-4xl md:text-5xl" />
            </a>
          </div>

          {/* Gambar profil dengan background gradient */}
          <div className='relative mx-auto bg-gradient-to-b from-orange-700 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={rasyid} layout='fill' objectFit='cover'/> {/* Gambar profil */}
          </div>
        </section>
      </main>
    </div>
  );
}
