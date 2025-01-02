"use client"; // This will ensure that this component is client-side only

import { useState } from "react";

export default function ChatUI() {
    const [messages, setMessages] = useState<string[]>([]);

    const handleSend = () => {
        setMessages([...messages, "User: Hello!", "Character: How can I help you?"]);
    };

    return (
        <div className="chat-box">
            <div className="messages">
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>

            <textarea className="message-input" placeholder="Type a message..." />
            <button className="send-btn" onClick={handleSend}>Send</button>
        </div>
    );
}