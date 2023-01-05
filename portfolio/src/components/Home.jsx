import React from 'react'
import {FaAngellist} from 'react-icons/fa'
import {IoLogoLinkedin} from 'react-icons/io'
import { useState } from 'react'


const Home = () => {
  const [darkMode, setDarkMode]= useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
    <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900  dark:text-white'>
    <section className='min-h-screen'>
    <nav className='py-10 mb-12 flex justify-between'>
      <h1 className='text-xl font-burtons'>Elizabeths Portfolio</h1>
      <ul className='flex items-center'>
        <li>
    <FaAngellist onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-xl'/>
    </li>
    <li>
      <a className='bg-gradient-to-r from-pink-400 to-pink-800 text-white px-4 py-2 rounded-md ml-8'
       href="#">Resume</a>
    </li>
    </ul>
    </nav>
    <div className='text-center p-10'>
      <h2 className='text-5xl py-2 text-pink-700 font-medium md:text-6xl'>Elizabeth Ucar</h2>
      <h3 className='text-2xl py-2 md:text-3xl'>Frontend Developer</h3>
      <p className='text-md py-5 leading- text-gray-800 md:text-xl max-w-xl mx-auto  dark:text-white'>Love both front and backend development Love both front and backend development Love both front and backend development</p>
    </div>
    <div className='text-5xl flex justify-center '>
      <IoLogoLinkedin />
    </div>
    <div className=''>
      <img src="../images/Elizabeth.jpg" alt="Elizabeths" className='relative mx-auto  rounded-full w-80 h-80 mt-20 md:h-96 md:w-96 ' />
    </div>
    <div>

    </div>
    </section>
    <section>
      <div>
        <h3 className='text-3xl py-1'>Experiense</h3>
        <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ex culpa similique enim, labore totam tempora minus modi. Excepturi omnis ut placeat, voluptas reprehenderit rerum quibusdam eveniet molestias fugit optio.

        </p>
        <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ex culpa similique enim, labore totam tempora minus modi. Excepturi omnis ut placeat, voluptas reprehenderit rerum quibusdam eveniet molestias fugit optio.

        </p>
      </div>
      <div className='lg:flex gap-10 dark:text-white'>
      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <h3 className='text-lg font-medium pt-8 pb-2'>Design</h3>
        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione optio eaque facilis quaerat voluptate eos corrupti dolores.</p>
        <h4 className='py-4 text-teal-600'>Tools i use</h4>
        <p className='text-gray-800 py-1 dark:text-white'>Design</p>
        <p className='text-gray-800 py-1  dark:text-white'>Experience</p>
        <p className='text-gray-800 py-1  dark:text-white'>Figma</p>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <h3 className='text-lg font-medium pt-8 pb-2'>Design</h3>
        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione optio eaque facilis quaerat voluptate eos corrupti dolores.</p>
        <h4 className='py-4 text-teal-600'>Tools i use</h4>
        <p className='text-gray-800 py-1  dark:text-white'>Design</p>
        <p className='text-gray-800 py-1  dark:text-white'>Experience</p>
        <p className='text-gray-800 py-1  dark:text-white'>Figma</p>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10'>
        <h3 className='text-lg font-medium pt-8 pb-2'>Design</h3>
        <p className='py-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione optio eaque facilis quaerat voluptate eos corrupti dolores.</p>
        <h4 className='py-4 text-teal-600'>Tools i use</h4>
        <p className='text-gray-800 py-1  dark:text-white'>Design</p>
        <p className='text-gray-800 py-1  dark:text-white'>Experience</p>
        <p className='text-gray-800 py-1  dark:text-white'>Figma</p>
      </div>
      </div>
    </section>
<section>
  <div>
    <h3 className='text-3xl py-1'>Portfolio</h3>

        <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ex culpa similique enim, labore totam tempora minus modi. Excepturi omnis ut placeat, voluptas reprehenderit rerum quibusdam eveniet molestias fugit optio.

        </p>
        <p className='text-md py-2 leading-8 text-gray-800  dark:text-white'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ex culpa similique enim, labore totam tempora minus modi. Excepturi omnis ut placeat, voluptas reprehenderit rerum quibusdam eveniet molestias fugit optio.

        </p>
  </div>
</section>
    </main>
    </div>
  )
}

export default Home