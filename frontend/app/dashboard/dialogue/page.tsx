"use client";
import { Avatar, Button } from "flowbite-react"; // Ensure Flowbite is installed and configured
import React, { useState } from "react";

const knowledgeBase = {
  inflation: "Inflation affects the job market by...",
  benchmarks: "Market salary benchmarks provide insights into...",
  payTrends: "Pay trends can be analyzed by observing...",
  legalAdvising: "Legal advising involves understanding...",
  compliance: "Compliance data ensures adherence to...",
};

const DialoguePage: React.FC = () => {
  const [message, setMessage] = useState("");
  const [conversations, setConversations] = useState([
    {
      id: 1,
      user: "Paybot",
      text: "Welcome! How can I assist you today? You can ask about current inflation, market salary benchmarks, pay trends, legal advising, and updates on current labor laws and regulation issues in your country.",
      time: new Date().toLocaleTimeString(),
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Determine the response based on the message
      const lowerCaseMessage = message.toLowerCase();
      let response =
        "I'm not sure about that. Can you please provide more details?";

      if (lowerCaseMessage.includes("inflation")) {
        response = knowledgeBase.inflation;
      } else if (lowerCaseMessage.includes("benchmarks")) {
        response = knowledgeBase.benchmarks;
      } else if (lowerCaseMessage.includes("pay trends")) {
        response = knowledgeBase.payTrends;
      } else if (lowerCaseMessage.includes("legal")) {
        response = knowledgeBase.legalAdvising;
      } else if (lowerCaseMessage.includes("compliance")) {
        response = knowledgeBase.compliance;
      }

      setConversations([
        ...conversations,
        {
          id: Date.now(),
          user: "You",
          text: message,
          time: new Date().toLocaleTimeString(),
        },
        {
          id: Date.now() + 1,
          user: "Paybot",
          text: response,
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <aside className="hidden w-1/4 bg-gray-50 p-4 dark:bg-gray-800 md:block">
        {/* Additional Information */}
      </aside>
      <main className="relative flex-1 bg-white p-4 dark:bg-gray-700">
        <header className="flex items-center justify-between bg-slate-50 p-4 text-gray-700 dark:bg-slate-600 dark:text-gray-50">
          <h1 className="text-xl font-bold sm:text-2xl">Knowledge Base Chat</h1>
        </header>

        <div className="flex h-full flex-col">
          <div className="mb-16 flex-1 overflow-y-auto p-2">
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

          <div
            id="chat-input"
            className="absolute bottom-4 left-0 right-0 mx-4 flex items-center space-x-2 bg-gray-100 p-2 dark:bg-gray-800"
          >
            <input
              type="text"
              value={message}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMessage(e.target.value)
              }
              placeholder="Ask me about inflation, market salary benchmarks, pay trends, legal advising, or compliance data..."
              className="flex-1 rounded border border-gray-300 bg-white p-2 text-sm text-black dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:text-base"
            />
            <Button onClick={handleSendMessage} size="sm" color="light" pill>
              Send
            </Button>
          </div>
        </div>
      </main>
      <aside className="hidden w-1/4 bg-gray-50 p-4 dark:bg-gray-800 md:block">
        {/* Resources */}
      </aside>
    </div>
  );
};

export default DialoguePage;
