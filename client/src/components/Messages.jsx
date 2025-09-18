import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:3597/api/user/getuser");
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };

    fetchMessages();
  }, []);

  return (
    <section className="p-10 bg-gray-900 text-white min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Portfolio Messages</h2>
      {messages.length === 0 ? (
        <p>No messages received yet.</p>
      ) : (
        <div className="grid gap-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">Name: {msg.name}</h3>
              <p className="text-sm text-gray-400">Email Id: {msg.email}</p>
              <p className="mt-3">Message: {msg.message}</p>
                <p className="mt-2 italic text-gray-400">About: {msg.about}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
