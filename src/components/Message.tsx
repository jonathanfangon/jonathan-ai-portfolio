import { useState } from 'react';

export default function MessageForm() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState<{
    name: string;
    message: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted({ name, message });
  };

  return (
    <div className='flex gap-8 items-start p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-64'>
        <input
          type='text'
          placeholder='Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <textarea
          placeholder='Your Message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          required
          className='p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          type='submit'
          className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
        >
          Send
        </button>
      </form>

      {submitted && (
        <div className='border border-gray-300 rounded p-4 shadow-sm min-w-'>
          <h3 className='text-lg font-semibold mb-2'>
            Message from {submitted.name}
          </h3>
          <p className='text-gray-700'>{submitted.message}</p>
        </div>
      )}
    </div>
  );
}
