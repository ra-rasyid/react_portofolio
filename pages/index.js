import Head from 'next/head'; // Komponen Head untuk memasukkan metadata halaman
import { BsFillMoonStarsFill } from 'react-icons/bs'; // Icon untuk mode gelap
import { IoLogoWhatsapp } from "react-icons/io"; // Icon untuk WhatsApp
import { AiFillLinkedin, AiFillInstagram, AiFillMail } from 'react-icons/ai'; // Icon untuk LinkedIn dan Instagram
import Image from 'next/image'; // Komponen Image dari Next.js untuk optimasi gambar
import rasyid from '../public/avatar_rasyid.png'; // Import gambar profil
import { useState } from 'react'; // Hook useState untuk mengelola state
import { motion } from "framer-motion"; // Library untuk animasi
import TypingEffect from '../components/TypingEffect'; // Komponen animasi mengetik

export default function Home() {
  const [darkMode, setDarkMode] = useState(true); // State untuk mode gelap
  
  return (
    <div className={darkMode ? 'dark' : ""}>
      {/* Metadata untuk halaman */}
      <Head>
        <title>Ragil Nur Rasyid Portofolio</title>
      </Head>

      {/* Main content */}
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="py-12 px-5 md:px-20 lg:px-40">
          
          {/* Navigasi dengan tombol mode gelap dan tautan resume */}
          <nav className="py-5 mb-12 flex justify-between items-center">
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

          <div className="text-center px-4 sm:px-6 md:px-10 py-8">
            <div className="inline-block text-left max-w-md mx-auto sm:max-w-xl md:max-w-3xl">
              <h2 className="text-2xl md:text-5xl font-medium text-left sm:text-justify">
                HEY, I'M RAGIL NUR RASYID <br />
                BUT YOU CAN CALL ME <span className="text-orange-700">RASYID!</span>
              </h2>

              <motion.h3
                className="text-xl md:text-3xl mt-4 text-left sm:text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                I'm <span className="text-orange-700">
                  <TypingEffect text="Prompt Engineering, Mobile, and Web Developer." />
                </span>
              </motion.h3>

              <p className="text-gray-500 dark:text-gray-300 text-md md:text-xl text-justify break-words leading-relaxed mt-4">
                I am a <span className="text-black dark:text-white font-semibold">Fullstack Developer</span> with strong expertise in <span className="text-black dark:text-white font-semibold">Prompt Engineering</span>, programming languages, and modern development tools. I specialize in building <span className="text-black dark:text-white font-semibold">Mobile and Web applications</span> with a focus on performance, efficiency, and user experience.
              </p>
            </div>
          </div>

          {/* Ikon media sosial dengan tautan */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 py-6 text-gray-600 text-4xl md:text-5xl">
            {/* Instagram */}
            <a href="https://www.instagram.com/nrrssyydd?igsh=eTAyYjFkbGltZzlp" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="cursor-pointer hover:text-orange-700" />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/ragil-nur-rasyid-10b5972b4/?originalSubdomain=id" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="cursor-pointer hover:text-orange-700" />
            </a>

            {/* Email */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ragilnurrasyid2004@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiFillMail className="cursor-pointer hover:text-orange-700" />
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/qr/UTKKEN4ZFP6UG1" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className="cursor-pointer hover:text-orange-700" />
            </a>
          </div>

          {/* Gambar profil dengan background gradient */}
          <div className='relative mx-auto bg-gradient-to-b from-orange-700 rounded-full w-72 h-72 mt-10 mb-6 md:w-96 md:h-96 md:mt-16'>
            <Image src={rasyid} layout='fill' objectFit='cover'/> {/* Gambar profil */}
          </div>
        </section>

        {/* Bagian proyek */}
        <section className="pt-10 pb-16 px-5 md:px-20 lg:px-40">
          <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* Contoh 2 */}
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <Image src="/Desain keyboard.png" alt="Keyboard Web" width={500} height={300} className="rounded-md" />
              <h3 className="text-xl font-semibold mt-4">Keyboard Showcase</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">A showcase web for mechanical keyboard built with React.</p>
              <a href="https://clackify.vercel.app/" target="_blank" className="text-orange-700 mt-3 inline-block">View Project</a>
            </div>

            {/* Contoh 2 */}
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <Image src="/Desain colorAcak.png" alt="Keyboard Web" width={500} height={300} className="rounded-md" />
              <h3 className="text-xl font-semibold mt-4">Random Color RGB</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">A Project Random with Page Random Color with RGB betwen colom and space!</p>
              <a href="https://color-acak.vercel.app/" target="_blank" className="text-orange-700 mt-3 inline-block">View Project</a>
            </div>

            {/* Contoh 2 */}
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <Image src="/Desain keyboard.png" alt="Keyboard Web" width={500} height={300} className="rounded-md" />
              <h3 className="text-xl font-semibold mt-4">Keyboard Showcase</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">A showcase web for mechanical keyboard built with React.</p>
              <a href="https://clackify.vercel.app/" target="_blank" className="text-orange-700 mt-3 inline-block">View Project</a>
            </div>

            {/* Tambahkan project lainnya di sini */}
          </div>
        </section>

      </main>
    </div>
  );
}
