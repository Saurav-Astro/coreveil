import { useState, useEffect, useRef } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import botImage from "@/asset/image_asset/bot_image.png";
import botTalkImage from "@/asset/image_asset/bot_talk.png";
import emailjs from '@emailjs/browser';

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface CollectingDetails {
  isCollecting: boolean;
  step: "name" | "email" | "service" | "project" | "confirm" | "edit" | "editField" | null;
  name?: string;
  email?: string;
  service?: string;
  project?: string;
  editingField?: "name" | "email" | "service" | "project";
}

const quickActions = [
  "Tell me about your services",
  "How can you help my business?",
  "What technologies do you use?",
  "I need AI automation",
  "Get Started",
];

const botResponses: Record<string, string> = {
  greeting: "Hi! 👋 I'm Coreveil's AI assistant. I'm here to help you learn about our engineering solutions and answer any questions you have. How can I assist you today?",
  services: "We offer 7 core services:\n\n• AI Calling Bots & Voice Automation\n• Conversational AI Agents\n• Sales & Support Automation\n• Custom AI Workflows & Integrations\n• Website & Web App Development\n• Backend Systems & APIs\n• Tech Consulting & MVP Development\n\nWhich area interests you most?",
  help: "We help businesses by:\n\n✓ Automating repetitive tasks with AI\n✓ Building custom software solutions\n✓ Scaling operations efficiently\n✓ Reducing costs by 40-70%\n✓ Improving customer engagement\n\nWhat specific challenge are you facing?",
  technologies: "We work with modern, proven technologies:\n\n• AI/ML: OpenAI, LangChain, Custom Models\n• Frontend: React, TypeScript, Next.js\n• Backend: Node.js, Python, PostgreSQL\n• Cloud: AWS, Vercel, Docker\n• APIs & Integrations: RESTful, WebSocket\n\nNeed details on any specific tech?",
  ai: "Our AI automation solutions include:\n\n🤖 AI Calling Bots for sales & support\n💬 Conversational AI agents\n⚡ Custom workflow automation\n📊 Intelligent data processing\n\nTypically saves businesses 70-80% on operational costs. Would you like to discuss your specific use case?",
  web: "Our web development services cover:\n\n🌐 Marketing websites\n💻 SaaS applications\n🛒 E-commerce platforms\n🔧 Internal tools\n\nWe use React, TypeScript, and modern cloud deployment for fast, scalable solutions. Pricing varies by scope. Want to schedule a discovery call?",
  pricing: "Our pricing depends on project scope and complexity. Here's what we typically offer:\n\n• Free discovery call to understand your needs\n• Transparent, fixed-price quotes\n• Flexible payment terms\n• No hidden fees\n\nWould you like to book a call to discuss your project?",
  contact: "Let's connect! You can:\n\n📧 Email: hello@coreveil.com\n📅 Book a discovery call via our Contact page\n💼 Check out our case studies\n\nI can also answer more questions right here. What would you like to know?",
  inquiry: "Great! I'd love to help you get started. I can collect your details and send them directly to our team. Ready to proceed? Just answer a few quick questions! 🚀",
  default: "That's a great question! While I can provide general information, our team would love to discuss your specific needs in detail. Would you like to:\n\n• Learn more about our services\n• See case studies\n• Let me collect your details so our team can reach out\n\nWhat interests you most?",
};

function getBotResponse(userMessage: string): string {
  const msg = userMessage.toLowerCase();
  
  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return botResponses.greeting;
  }
  if (msg.includes("service") || msg.includes("what do you") || msg.includes("what can you")) {
    return botResponses.services;
  }
  if (msg.includes("help") || msg.includes("business") || msg.includes("solve")) {
    return botResponses.help;
  }
  if (msg.includes("tech") || msg.includes("stack") || msg.includes("tools") || msg.includes("framework")) {
    return botResponses.technologies;
  }
  if (msg.includes("ai") || msg.includes("automat") || msg.includes("bot")) {
    return botResponses.ai;
  }
  if (msg.includes("web") || msg.includes("website") || msg.includes("app") || msg.includes("development")) {
    return botResponses.web;
  }
  if (msg.includes("price") || msg.includes("cost") || msg.includes("pricing") || msg.includes("quote")) {
    return botResponses.pricing;
  }
  if (msg.includes("contact") || msg.includes("call") || msg.includes("email") || msg.includes("reach")) {
    return botResponses.contact;
  }
  if (msg.includes("interested") || msg.includes("inquiry") || msg.includes("proposal") || msg.includes("quote")) {
    return botResponses.inquiry;
  }
  
  return botResponses.default;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [collectingDetails, setCollectingDetails] = useState<CollectingDetails>({
    isCollecting: false,
    step: null,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // EmailJS configuration
  const sanitize = (value?: string) => value?.trim() || '';
  const serviceId = sanitize(import.meta.env.VITE_EMAILJS_SERVICE_ID);
  const templateId = sanitize(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  const publicKey = sanitize(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  // Initialize EmailJS
  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, [publicKey]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send welcome message when chat opens for the first time
      setTimeout(() => {
        addBotMessage(botResponses.greeting);
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "bot",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setIsTyping(false);
  };

  const sendEmailFromChat = async (name: string, email: string, service: string, project: string) => {
    try {
      const now = new Date();
      const formattedTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      const templateParams = {
        name,
        email,
        service: service || 'Not specified',
        message: project,
        time: formattedTime,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Handle detail collection flow
    if (collectingDetails.isCollecting) {
      if (collectingDetails.step === "name") {
        setCollectingDetails((prev) => ({ ...prev, name: messageText, step: "email" }));
        setIsTyping(true);
        setTimeout(() => {
          addBotMessage("Perfect! What's your company email address?");
        }, 800);
        return;
      }
      if (collectingDetails.step === "email") {
        setCollectingDetails((prev) => ({ ...prev, email: messageText, step: "service" }));
        setIsTyping(true);
        setTimeout(() => {
          addBotMessage("Thanks! What service are you interested in?\n\n1. Website Development\n2. Web App Development\n3. AI Automation\n4. ERP System\n5. Calling Bot\n6. Other");
        }, 800);
        return;
      }
      if (collectingDetails.step === "service") {
        setCollectingDetails((prev) => ({ ...prev, service: messageText, step: "project" }));
        setIsTyping(true);
        setTimeout(() => {
          addBotMessage("Great! Tell us about your project or challenges. What are you looking to build or solve?");
        }, 800);
        return;
      }
      if (collectingDetails.step === "project") {
        // Move to confirmation step
        setCollectingDetails((prev) => ({ ...prev, project: messageText, step: "confirm" }));
        setIsTyping(true);
        setTimeout(() => {
          const confirmationMessage = `Perfect! Let me confirm your details before sending:\n\n📝 **Name:** ${collectingDetails.name}\n📧 **Email:** ${collectingDetails.email}\n🎯 **Service:** ${collectingDetails.service}\n💬 **Project Details:** ${messageText}\n\nDoes everything look correct? Reply with **Yes** to send or **No** to make changes.`;
          addBotMessage(confirmationMessage);
        }, 800);
        return;
      }
      if (collectingDetails.step === "confirm") {
        // Handle confirmation response
        const response = messageText.toLowerCase();
        if (response.includes("yes") || response === "y") {
          // Send email
          setIsTyping(true);
          const name = collectingDetails.name || "";
          const email = collectingDetails.email || "";
          const service = collectingDetails.service || "";
          const project = collectingDetails.project || "";
          
          setTimeout(async () => {
            const success = await sendEmailFromChat(name, email, service, project);
            if (success) {
              addBotMessage("Perfect! 🎉 I've sent your details to our team. We'll review your request and get back to you within 24 business hours.\n\nIs there anything else I can help you with?");
            } else {
              addBotMessage("I had trouble sending your information. No worries though! You can also reach us directly at hello@coreveil.com or use the Get Started form on our website. We're here to help!");
            }
            setCollectingDetails({ isCollecting: false, step: null });
          }, 1000);
          return;
        } else if (response.includes("no") || response === "n") {
          // Don't send, offer to restart or change details
          setCollectingDetails((prev) => ({ ...prev, step: "edit" }));
          setIsTyping(true);
          setTimeout(() => {
            addBotMessage("No problem! Which detail would you like to change?\n\n1. **Name**\n2. **Email**\n3. **Service**\n4. **Project Details**\n5. **Cancel** - Go back\n\nJust reply with the number or detail name!");
          }, 800);
          return;
        } else {
          // Invalid response, ask again
          setIsTyping(true);
          setTimeout(() => {
            addBotMessage("Please confirm by typing:\n\n✅ **Yes** - Send the email\n❌ **No** - Make changes\n\nWhich would you prefer?");
          }, 800);
          return;
        }
      }

      if (collectingDetails.step === "edit") {
        // Handle which field to edit
        const response = messageText.toLowerCase();
        if (response.includes("name") || response === "1") {
          setCollectingDetails((prev) => ({ ...prev, step: "editField", editingField: "name" }));
          setIsTyping(true);
          setTimeout(() => {
            addBotMessage(`Current name: **${collectingDetails.name}**\n\nWhat's the correct name?`);
          }, 800);
          return;
        } else if (response.includes("email") || response === "2") {
          setCollectingDetails((prev) => ({ ...prev, step: "editField", editingField: "email" }));
          setIsTyping(true);
          setTimeout(() => {
            addBotMessage(`Current email: **${collectingDetails.email}**\n\nWhat's the correct email?`);
          }, 800);
          return;
        } else if (response.includes("service") || response === "3") {
          setCollectingDetails((prev) => ({ ...prev, step: "editField", editingField: "service" }));
          setIsTyping(true);
          setTimeout(() => {
            addBotMessage(`Current service: **${collectingDetails.service}**\n\nWhat service are you interested in?\n\n1. Website Development\n2. Web App Development\n3. AI Automation\n4. ERP System\n5. Calling Bot\n6. Other`);
          }, 800);
          return;
        } else if (response.includes("project") || response === "4") {
          setCollectingDetails((prev) => ({ ...prev, step: "editField", editingField: "project" }));
          setIsTyping(true);
          setTimeout(() => {
            addBotMessage(`Current project details: **${collectingDetails.project}**\n\nWhat should the correct project details be?`);
          }, 800);
          return;
        } else if (response.includes("cancel") || response === "5") {
          // Go back to confirmation
          setCollectingDetails((prev) => ({ ...prev, step: "confirm" }));
          setIsTyping(true);
          setTimeout(() => {
            const confirmationMessage = `No problem! Back to your details:\n\n📝 **Name:** ${collectingDetails.name}\n📧 **Email:** ${collectingDetails.email}\n🎯 **Service:** ${collectingDetails.service}\n💬 **Project Details:** ${collectingDetails.project}\n\nDoes everything look correct? Reply with **Yes** to send or **No** to make changes.`;
            addBotMessage(confirmationMessage);
          }, 800);
          return;
        } else {
          // Invalid response
          setIsTyping(true);
          setTimeout(() => {
            addBotMessage("I didn't understand that. Which detail would you like to change?\n\n1. **Name**\n2. **Email**\n3. **Service**\n4. **Project Details**\n5. **Cancel** - Go back");
          }, 800);
          return;
        }
      }

      if (collectingDetails.step === "editField") {
        // Handle editing individual fields
        const field = collectingDetails.editingField;
        
        if (field === "name") {
          setCollectingDetails((prev) => ({ ...prev, name: messageText, step: "confirm" }));
          setIsTyping(true);
          setTimeout(() => {
            const confirmationMessage = `Perfect! I've updated your name to **${messageText}**\n\n📝 **Name:** ${messageText}\n📧 **Email:** ${collectingDetails.email}\n🎯 **Service:** ${collectingDetails.service}\n💬 **Project Details:** ${collectingDetails.project}\n\nEverything look good? Reply with **Yes** to send or **No** to make more changes.`;
            addBotMessage(confirmationMessage);
          }, 800);
          return;
        } else if (field === "email") {
          setCollectingDetails((prev) => ({ ...prev, email: messageText, step: "confirm" }));
          setIsTyping(true);
          setTimeout(() => {
            const confirmationMessage = `Perfect! I've updated your email to **${messageText}**\n\n📝 **Name:** ${collectingDetails.name}\n📧 **Email:** ${messageText}\n🎯 **Service:** ${collectingDetails.service}\n💬 **Project Details:** ${collectingDetails.project}\n\nEverything look good? Reply with **Yes** to send or **No** to make more changes.`;
            addBotMessage(confirmationMessage);
          }, 800);
          return;
        } else if (field === "service") {
          setCollectingDetails((prev) => ({ ...prev, service: messageText, step: "confirm" }));
          setIsTyping(true);
          setTimeout(() => {
            const confirmationMessage = `Perfect! I've updated your service to **${messageText}**\n\n📝 **Name:** ${collectingDetails.name}\n📧 **Email:** ${collectingDetails.email}\n🎯 **Service:** ${messageText}\n💬 **Project Details:** ${collectingDetails.project}\n\nEverything look good? Reply with **Yes** to send or **No** to make more changes.`;
            addBotMessage(confirmationMessage);
          }, 800);
          return;
        } else if (field === "project") {
          setCollectingDetails((prev) => ({ ...prev, project: messageText, step: "confirm" }));
          setIsTyping(true);
          setTimeout(() => {
            const confirmationMessage = `Perfect! I've updated your project details to **${messageText}**\n\n📝 **Name:** ${collectingDetails.name}\n📧 **Email:** ${collectingDetails.email}\n🎯 **Service:** ${collectingDetails.service}\n💬 **Project Details:** ${messageText}\n\nEverything look good? Reply with **Yes** to send or **No** to make more changes.`;
            addBotMessage(confirmationMessage);
          }, 800);
          return;
        }
      }
    }

    // Show typing indicator
    setIsTyping(true);

    // Check if user is responding to the default menu options
    if (handleDefaultOptionResponse(messageText)) {
      return;
    }

    // Simulate bot thinking time and respond
    setTimeout(() => {
      const response = getBotResponse(messageText);
      addBotMessage(response);
    }, 1000 + Math.random() * 1000);
  };

  const startDetailsCollection = () => {
    setCollectingDetails({ isCollecting: true, step: "name" });
    setIsTyping(true);
    setTimeout(() => {
      addBotMessage("Awesome! Let's get started. What's your name?");
    }, 800);
  };

  const handleDefaultOptionResponse = (text: string) => {
    const msg = text.toLowerCase();
    
    // Check if user wants to learn more about services
    if (msg.includes("learn") || msg.includes("service") || msg === "1") {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage("Perfect! 🚀 Check out our services page to explore all our offerings:\n\n📌 **Services:** [Visit Services Page](/services)\n\nYou'll find detailed information about:\n• AI Calling Bots & Voice Automation\n• Conversational AI Agents\n• Sales & Support Automation\n• Custom AI Workflows\n• Website & Web App Development\n• Backend Systems\n• Tech Consulting\n\nHave any other questions?");
      }, 800);
      return true;
    }
    
    // Check if user wants to see case studies
    if (msg.includes("case") || msg.includes("stud") || msg.includes("portfolio") || msg === "2") {
      setIsTyping(true);
      setTimeout(() => {
        addBotMessage("Great! 💼 Check out our **Services page** to see our real-world projects and case studies:\n\n📌 **View Our Work:** [Visit Services Page](/services)\n\nYou'll see:\n• Real project examples\n• Technologies we used\n• Results & impact\n• Client success stories\n\nReady to start your project? Let me collect your details!");
      }, 800);
      return true;
    }
    
    // Check if user wants to collect details
    if (msg.includes("collect") || msg.includes("detail") || msg.includes("reach") || msg.includes("get start") || msg === "3") {
      startDetailsCollection();
      return true;
    }
    
    return false;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group overflow-hidden"
        aria-label="Open chat"
      >
        {isOpen ? (
          <img
            src={botTalkImage}
            alt="Chat Open"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={botImage}
            alt="Chat"
            className="w-full h-full object-cover"
          />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-80 h-[calc(100vh-6rem)] sm:h-[500px] max-h-[75vh] bg-background/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden card-hover">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-1 flex items-center justify-between gap-1">
            <div className="flex items-center gap-1">
              <img
                src={botImage}
                alt="Coreveil Assistant"
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-background text-lg">Coreveil Assistant</h3>
                <p className="text-sm text-background/80">Online • Ready to help</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-primary text-background"
                      : "bg-card border border-border text-foreground"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-card border border-border rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-grey-soft rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-grey-soft rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-grey-soft rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions (show when no messages or after welcome) */}
          {messages.length <= 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-grey-soft mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    onClick={() => {
                      if (action === "Get Started") {
                        startDetailsCollection();
                      } else {
                        handleSendMessage(action);
                      }
                    }}
                    className="text-xs px-3 py-1.5 rounded-full bg-card border border-border hover:border-primary transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border bg-card/50 backdrop-blur-sm">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-background border-border focus:border-primary"
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                size="icon"
                className="bg-primary hover:bg-primary/90 text-background"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
