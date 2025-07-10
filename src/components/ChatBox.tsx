'use client';
import { useState, useRef, useEffect } from 'react';

function formatMessage(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-400 underline hover:text-blue-300 transition-colors'
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export default function ChatBox() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'You', text: input };
    setMessages((prev) => [...prev, userMsg]);

    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const aiMsg = { sender: "Jonathan's AI", text: data.reply };
    setMessages((prev) => [...prev, aiMsg]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className='w-full text-white'>
      <div className='w-full max-w-2xl p-6 bg-gray-900 rounded-2xl shadow-xl border border-gray-700'>
        <h2 className='text-2xl font-bold mb-4 text-center text-white'>
          AI Chat
        </h2>
        <div className='h-96 overflow-y-auto space-y-4 bg-gray-800 p-4 rounded-xl border border-gray-700'>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === 'You' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-xl text-sm shadow-md ${
                  msg.sender === 'You'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-700 text-gray-100 rounded-bl-none'
                }`}
              >
                <strong className='block text-xs mb-1 opacity-70'>
                  {msg.sender}
                </strong>
                {formatMessage(msg.text)}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className='mt-4 flex gap-2'>
          <input
            className='flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Ask me something...'
            onKeyDown={(e) => {
              if (e.key === 'Enter') sendMessage();
            }}
          />
          <button
            onClick={sendMessage}
            className='bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-lg'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
