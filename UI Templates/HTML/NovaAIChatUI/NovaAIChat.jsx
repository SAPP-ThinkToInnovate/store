import React, { useState } from "react";
import "./NovaAIChat.css";

const initialMessages = [
  {
    id: 1,
    type: "assistant",
    text: "Hello! How can I help you today?",
  },
];

export default function NovaAIChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        type: "assistant",
        text: "This is a sample AI response template.",
      };

      setMessages((prev) => [...prev, botMessage]);
      setTyping(false);
    }, 1500);
  };

  return (
    <div className="nova-chat-app">
      <aside className="nova-sidebar">
        <div className="nova-logo">Nova AI</div>

        <button className="new-chat-btn">+ New Chat</button>

        <div className="chat-history">
          <div className="history-item active">
            AI UI Discussion
          </div>

          <div className="history-item">
            React Optimization
          </div>

          <div className="history-item">
            API Architecture
          </div>
        </div>
      </aside>

      <main className="nova-chat-container">
        <div className="messages-container">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message-row ${msg.type}`}
            >
              <div className="avatar">
                {msg.type === "assistant" ? "AI" : "U"}
              </div>

              <div className="message-bubble">
                {msg.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="message-row assistant">
              <div className="avatar">AI</div>

              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>

        <div className="chat-input-section">
          <div className="chat-input-wrapper">
            <textarea
              placeholder="Send a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
