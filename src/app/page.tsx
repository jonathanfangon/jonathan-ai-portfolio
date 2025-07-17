'use client';

import ChatBox from '@/components/ChatBox';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.15, duration: 0.6 },
  }),
};

export default function Home() {
  return (
    <main className='pt-24 md:pt-0 min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-10 overflow-hidden'>
      {/* Main Content */}
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center min-h-[100vh]'>
        {/* Left Side - Intro */}
        <motion.section
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <motion.h1
            className='text-4xl md:text-5xl font-bold mb-4'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Hey, I'm Jonathan Fangon
          </motion.h1>

          <motion.p
            className='text-lg md:text-xl text-gray-300 mb-6'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I'm a Software Engineer based in Los Angeles, currently interning at
            Sinclair Digital. I love building full-stack apps, going to the gym,
            and vibing to Kendrick.
          </motion.p>

          <motion.div
            className='flex flex-wrap gap-4 mb-8'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Link
              href='/projects'
              className='bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-2 rounded-lg text-white'
            >
              View Projects
            </Link>
            <Link
              href='/resume'
              className='border border-gray-500 hover:border-white px-6 py-2 rounded-lg'
            >
              See Resume
            </Link>
          </motion.div>

          <motion.div
            className='flex gap-4 text-blue-400'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a
              href='https://github.com/jonathanfangon'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/jonathanfangon/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.section>

        {/* Right Side - Chatbox */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className='bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-4 max-h-[90vh] overflow-hidden flex flex-col'>
            <h2 className='text-lg font-semibold mb-2'>
              Ask my AI assistant anything 👇
            </h2>
            <div className='flex-1 overflow-y-auto'>
              <ChatBox />
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
