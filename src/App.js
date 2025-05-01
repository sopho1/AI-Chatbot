import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme');
  };

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1',
        {
          inputs: `<s>[INST] You are a helpful AI assistant. Respond to the user's message: ${input} [/INST]`,
          parameters: {
            max_new_tokens: 500,
            temperature: 0.7,
            return_full_text: false,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_HF_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const aiResponse = response.data[0]?.generated_text || 'Sorry, no response generated.';
      const aiMessage = { text: aiResponse.trim(), sender: 'ai' };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error details:', error.response?.data, error.response?.status, error.response?.headers);
      const errorMessage = {
        text: error.response?.data?.error || 'Sorry, I couldn’t connect to the AI. Please try again.',
        sender: 'ai',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      sendMessage();
    }
  };

  return (
    <div className="App">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {isDarkTheme ? '☀️' : '🌙'}
      </button>
      <h1>AI Chatbot (Powered by Hugging Face)</h1>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'user' ? 'user' : 'ai'} ${isLoading && message.sender === 'ai' ? 'loading' : ''}`}
          >
            {message.text}
          </div>
        ))}
        {isLoading && <div className="message ai loading">Thinking...</div>}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;