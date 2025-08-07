import React, { useState } from 'react';

const AiMate = () => {
  const [input, setInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    setLoading(true);
    setError('');
    setAiResponse('');

    try {
      const res = await fetch('http://localhost:3000/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();

      if (data.response) {
        setAiResponse(data.response);
      } else {
        setError('No response from AI.');
      }
    } catch (err) {
      setError('Failed to get AI response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center">Ask to Stay-Mate</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <textarea
          rows="4"
          className="w-full border px-3 py-2 rounded"
          placeholder="Type your request here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? 'Thinking...' : 'Get AI Response'}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {aiResponse && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-bold mb-2">AI Response:</h3>
          <pre className="whitespace-pre-wrap text-gray-800">{aiResponse}</pre>
        </div>
      )}
    </div>
  );
};

export default AiMate;
