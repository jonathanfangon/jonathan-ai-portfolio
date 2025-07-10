'use client';

import ChatBox from '@/components/ChatBox';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-10'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center min-h-[calc(100vh-5rem)]'>
        {/* Left Side - Intro */}
        <section>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Hey, I'm Jonathan Fangon 👋
          </h1>
          <p className='text-lg md:text-xl text-gray-300 mb-6'>
            I'm a Software Engineer based in Los Angeles, currently interning at
            Sinclair Digital. I love building full-stack apps, going to the gym,
            and vibing to Kendrick.
          </p>

          <div className='flex flex-wrap gap-4 mb-8'>
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
          </div>

          <div className='flex gap-4 text-blue-400'>
            <a
              href='https://github.com/jonathanfangon'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/jonathanfangon/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Right Side - Chatbox */}
        <section>
          <div className='bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-4 max-h-[90vh] overflow-hidden flex flex-col'>
            <h2 className='text-lg font-semibold mb-2'>
              Ask my AI assistant anything 👇
            </h2>
            <div className='flex-1 overflow-y-auto'>
              <ChatBox />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
