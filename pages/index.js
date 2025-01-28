import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs'; // library icon logo 
import { IoLogoWhatsapp } from "react-icons/io"; // libraru icon logo
import { 
  AiFillLinkedin, 
  AiFillInstagram
} from 'react-icons/ai'; // import icon logo
import Image from 'next/image';
import rasyid from '../public/avatar_rasyid.png'
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Ragil Nur Rasyid Portofolio</title>
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">myPortofolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className="bg-orange-700 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <div className="inline-block text-left">
              <h2 className="text-4xl py-0 font-medium md:text-6xl">
                Ragil Nur Rasyid
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl">
                I'm <span className="text-orange-700">Mobile and Web Developer.</span>
              </h3>
              <p className="text-justify text-md py-3 leading-6 text-gray-500 md:text-xl max-w-lg mx-auto">
                I am a <span className="text-black dark:text-white">Fullstack Developer</span> with solid expertise in programming languages and experience in building <span className="text-black dark:text-white">Mobile and Web applications</span>. I focus on creating efficient and user-friendly solutions.
              </p>
            </div>
          </div>

          {/* Responsif pada ikon sosial */}
          <div className="text-5xl flex justify-center gap-16 py-0 text-gray-600 flex-wrap">
            <a href="https://www.instagram.com/nrrssyydd?igsh=eTAyYjFkbGltZzlp" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="cursor-pointer hover:text-orange-700 text-5xl md:text-5xl" />
            </a>
            <a href="https://www.linkedin.com/in/ragil-nur-rasyid-10b5972b4/?originalSubdomain=id" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin className="cursor-pointer hover:text-orange-700 text-5xl md:text-5xl" />
            </a>
            <a href="https://wa.me/qr/UTKKEN4ZFP6UG1" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className="cursor-pointer hover:text-orange-700 text-5xl md:text-5xl" />
            </a>
          </div>

          <div className='relative mx-auto bg-gradient-to-b from-orange-700 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={rasyid} layout='fill' objectFit='cover'/>
          </div>
        </section>
      </main>
    </div>
  );
}
