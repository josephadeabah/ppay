"use client";
import { Avatar, Button } from "flowbite-react"; // Ensure Flowbite is installed and configured
import React, { useState } from "react";

const DialoguePage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [conversations, setConversations] = useState([
    {
      id: 1,
      user: "John Doe",
      text: "How do you think inflation trends will affect the job market next week?",
      time: "10:15 AM",
    },
    // More sample conversations
  ]);
  const [members, setMembers] = useState([
    { id: 1, name: "Alice", status: "active" },
    { id: 2, name: "Bob", status: "inactive" },
    { id: 3, name: "Charlie", status: "active" },
    { id: 4, name: "David", status: "active" },
    { id: 5, name: "Eve", status: "inactive" },
    { id: 6, name: "Frank", status: "active" },
    // More sample members
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setConversations([
        ...conversations,
        {
          id: Date.now(),
          user: "You",
          text: message,
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen flex-col bg-gray-100 dark:bg-gray-900">
      <header className="flex items-center justify-between bg-slate-50 p-4 text-gray-700 dark:bg-slate-600 dark:text-gray-50">
        <h1 className="text-xl font-bold sm:text-2xl">Dialogue</h1>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="rounded border border-gray-300 bg-white p-2 text-sm text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:text-base"
          />
          <Button color="light" size="sm">
            Filter
          </Button>
        </div>
      </header>

      <div className="flex flex-1 flex-col overflow-hidden md:flex-row">
        <aside className="w-full overflow-y-auto bg-gray-200 p-4 dark:bg-gray-800 md:w-64">
          <h2 className="mb-4 text-lg font-semibold sm:text-xl">
            Active Members
          </h2>
          <ul>
            {members.map((member) => (
              <li
                key={member.id}
                className={`flex items-center p-2 ${member.status === "active" ? "bg-green-100" : "bg-gray-100"} mb-2 rounded-md`}
              >
                <Avatar size="sm" alt={member.name} className="mr-2" />
                <span className="font-semibold">{member.name}</span>
                <span
                  className={`ml-2 text-sm ${member.status === "active" ? "text-green-600" : "text-gray-500"}`}
                >
                  {member.status}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        <main className="flex flex-1 flex-col rounded-t-lg bg-white p-4 dark:bg-gray-700 md:rounded-l-lg md:rounded-r-lg md:rounded-t-none">
          <div className="flex-1 overflow-y-auto">
            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  className={`flex ${conversation.user === "You" ? "justify-end" : "justify-start"} mb-4`}
                >
                  <div
                    className={`flex items-start space-x-2 ${conversation.user === "You" ? "flex-row" : ""}`}
                  >
                    {conversation.user !== "You" && (
                      <Avatar
                        size="sm"
                        alt={conversation.user}
                        className="mr-2"
                      />
                    )}
                    <div
                      className={`max-w-xs flex-1 ${conversation.user === "You" ? "bg-slate-50 text-gray-700 dark:bg-slate-600 dark:text-gray-50" : "bg-gray-200 text-gray-700 dark:bg-slate-600 dark:text-gray-50"} rounded-lg p-2`}
                    >
                      <div className="font-semibold">{conversation.user}</div>
                      <div className="text-gray-800 dark:text-gray-300">
                        {conversation.text}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {conversation.time}
                      </div>
                    </div>
                    {conversation.user === "You" && (
                      <Avatar
                        size="sm"
                        alt={conversation.user}
                        className="ml-2"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMessage(e.target.value)
              }
              placeholder="Type your message..."
              className="flex-1 rounded border border-gray-300 bg-white p-2 text-sm text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:text-base"
            />
            <Button onClick={handleSendMessage} size="sm" color="light" pill>
              Send
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DialoguePage;
