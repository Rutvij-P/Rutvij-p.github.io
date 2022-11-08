import Head from 'next/head'
// import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';


export default function Home(): JSX.Element {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Rutvij's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-tr from-lime-400 to-blue-300 dark:from-black dark:to-gray-800 px-10 snap-y overflow-scroll">

        <section className="min-h-screen snap-start">
          <nav className="py-10 mb-10 flex justify-between">
            <h1 className="text-xl font-burtons mt-1 dark:text-white">BuiltbyRutvij</h1>
            <ul className="flex items-center">
              <li>
                <label className="switch">
                  <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
                  <span className="handle"></span>
                </label>
                {/* <BsFillMoonStarsFill className="curson-pointer text-2xl" /> */}
              </li>
              <li>
                <a className="bg-gradient-to-r from-yellow-600 to-red-600 bg-amber-500 dark:bg-gradient-to-l border-solid border-4 border-black text-white px-4 py-2 rounded-md ml-6" href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <nav className='inline-block fixed left-percentage'>
            <div className=" items-center absolute transform -translate-x-1/2 space-y-10 max-h-screen content-center mt-40">
              <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav dark:border-yellow-400">
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 text-white">Home</span>
              </a>
              <a href="#about" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav dark:border-yellow-400">
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 text-white">AboutMe</span>
              </a>
              <a href="#projects" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav dark:border-yellow-400">
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 text-white">Projects</span>
              </a>
              <a href="#contact" className="nav-dot block w-7 h-7 rounded-full border-4 border-nav dark:border-yellow-400">
                <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0 text-white">Contact</span>
              </a>
            </div>
          </nav>
          <div className="grid place-content-center">
            <Image
              src="/rutu_patel.jpg"
              alt="Your Student Coder"
              className="w-85 h-85 mt-8 rounded-lg transition-shadow duration-300 hover:shadow-2xl"
              width={350}
              height={350}
            />
          </div>
          <div className="text-center p-8">
            <h2 className="text-5xl py-2 font-medium text-white dark:text-red-500">Rutvij Patel</h2>
            <h3 className="text-2xl py-2 text-white">UI/UX Frontend Developer</h3>
            <p className="text-md py-1 leading-8 text-white">
              Undergrad student at San Francisco State University
            </p>
          </div>
          {/* <div className="text-sm hover:text-base py-10 mb-12 text-center float-right rotate-90 text-gray-300">Visioniaries without the will to achieve are dreamers
          </div> */}
          <div className="text-5xl flex justify-center gap-32">
            <Link href="https://github.com/Rutvij-P" className='dark:block dark:w-14 dark:h-14 dark:rounded-full dark:border-4 dark:border-red-400 dark:bg-gray-600'>
              <AiFillGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/jivtur/" className='dark:block dark:w-13 dark:h-13 dark:rounded-md dark:border-4 dark:border-red-400 dark:bg-gray-600'>
              <AiFillLinkedin />
            </Link>
            <Link href="mailto:rpatel5@mail.sfsu.edu/" className='dark:block dark:w-13 dark:h-13 dark:rounded-md dark:border-4 dark:border-red-400 dark:bg-gray-600'>
              <AiFillMail />
            </Link>
          </div>
        </section>
        <section id="about" className="min-h-screen snap-start px-10">
          <h2 className="text-2xl py-2 dark:text-red-500">About</h2>
          <h3 className="text-md py-2 text-white text-justify">Undergrad Computer Science student versed in reviewing plans,
            writing reports, researching solutions, and implementing company
            procedures. Willingness to learn, follow through instructions and
            work cooperatively within team environments.</h3>
        </section>
        <section id="projects" className="min-h-screen snap-start px-10">
          <h2 className="text-2xl py-2 dark:text-red-500">Projects and Skills</h2>
          <h3 className="text-md py-2 text-white text-justify">
            Orion Clock: A basic Java GUI <br />
            Job-Gram: A responsive Web-App that allows students to connect to recruiters and vice versa. [In P.] <br />
            Profile Page: A responsive Profile page that serves as a medium for putting my portfolio out there in the world. [In P.] <br />
          </h3>
        </section>
        <section id="contact" className="min-h-screen snap-start px-10">
          <h2 className="text-2xl py-2 dark:text-red-500">Contact Me</h2>
          <h3 className="text-md py-2 text-white text-justify">
            Contact Me Page Here
          </h3>
        </section>
      </main>
    </div>
  )
}
