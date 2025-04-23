"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, SendHorizonal, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MarkdownRenderer from "./MarkdownRendered"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })
      const data = await res.json()
      const botMessage: Message = { role: "assistant", content: data.text }
      setMessages((prev) => [...prev, botMessage])
    } catch (err) {
      console.error("Error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })

    const onResize = () => {
      if (window.visualViewport) {
        const bottomOffset = window.innerHeight - window.visualViewport.height
        document.documentElement.style.setProperty("--keyboard-offset", `${bottomOffset}px`)
      }
    }

    window.visualViewport?.addEventListener("resize", onResize)
    return () => {
      window.visualViewport?.removeEventListener("resize", onResize)
    }
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 z-50 w-20 h-20 flex items-end justify-end">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute right-0 w-80 h-[500px] bottom-[var(--keyboard-offset,1rem)] bg-white rounded-2xl shadow-2xl border flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div className="font-semibold text-sm">Ask Us Anything</div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 text-sm">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`whitespace-pre-wrap break-words p-3 rounded-lg text-sm ${
                    msg.role === "user"
                      ? "bg-brand-primary-100 self-end ml-auto"
                      : "bg-gray-100 self-start mr-auto"
                  }`}
                >
                  <MarkdownRenderer content={msg.content} />
                </div>
              ))}
              {loading && <div className="text-gray-400 text-xs">Typing...</div>}
              <div ref={bottomRef} />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="p-2 border-t flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="text-sm"
              />
              <Button className="bg-brand-primary hover:bg-brand-primary-900 transition-colors" type="submit" disabled={loading || input.trim() === ""}>
                <SendHorizonal className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        ) : (
          <motion.button
            key="toggle-button"
            onClick={() => setIsOpen(true)}
            className="bg-brand-primary text-white p-4 rounded-full shadow-lg flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bot className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
