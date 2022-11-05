import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import Image from "next/image";


export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Rutvij's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-gradient-to-tr from-purple-600 to-red-400 bg-orange-400 px-10 snap-y overflow-scroll">
        <div className="container mx-auto justify-between items-center py-5 flex ">
          <div className="flex flex-wrap">
            <nav className='inline-block fixed left-percentage'>
              <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-40">
                <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav">
                  <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-5"> Home</span>
                </a>
                <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav">
                  <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-5"> Home</span>
                </a>
                <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav">
                  <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-5"> Home</span>
                </a>
                <a href="#" className="nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav">
                  <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-5"> Home</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
        <section className="min-h-screen snap-start">
          <nav className="py-10 mb-10 flex justify-between">
            <h1 className="text-xl font-burtons">BuiltbyRutvij</h1>
            <ul className="flex items-center">
              <li>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="handle"></span>
                </label>
                {/* <BsFillMoonStarsFill className="curson-pointer text-2xl" /> */}
              </li>
              <li>
                <a className="bg-gradient-to-r from-yellow-600 to-red-600 bg-amber-500 border-solid border-4 border-black text-white px-4 py-2 rounded-md ml-6" href="#">
                Resume
                </a>
              </li>
            </ul>
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
            <h2 className="text-5xl py-2 font-medium text-white">Rutvij Patel</h2>
            <h3 className="text-2xl py-2 text-white">UI/UX Frontend Developer</h3>
            <p className="text-md py-2 leading-8 text-white">
              Undergrad student at San Francisco State University
            </p>
          </div>
          {/* <div className="text-sm hover:text-base py-10 mb-12 text-center float-right rotate-90 text-gray-300">Visioniaries without the will to achieve are dreamers
          </div> */}
          <div className="text-5xl flex justify-center gap-32">
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillMail />
          </div>
        </section>
        <section className="min-h-screen snap-start">
          <h2 className="text-2xl py-2">About</h2>
          <h3 className="text-md py-2 text-white text-justify">Undergrad Computer Science student versed in reviewing plans,
            writing reports, researching solutions, and implementing company
            procedures. Willingness to learn, follow through instructions and
            work cooperatively within team environments.</h3>
        </section>
        <section className="min-h-screen snap-start">
          <h2 className="text-2xl py-2">Projects and Skills</h2>
          <h3 className="text-md py-2 text-white text-justify">
            Orion Clock: A basic Java GUI <br />
            Job-Gram: A responsive Web-App that allows students to connect to recruiters and vice versa. [In P.] <br />
            Profile Page: A responsive Profile page that serves as a medium for putting my portfolio out there in the world. [In P.] <br />
          </h3>
        </section>
        <section className="min-h-screen snap-start">
          <h2 className="text-2xl py-2">Contact Me</h2>
          <h3 className="text-md py-2 text-white text-justify">
           Contact Me Page Here
          </h3>
        </section>
      </main>
    </div>
  )
}
