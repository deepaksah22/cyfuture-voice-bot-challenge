
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Initialize Dify chatbot configuration
    window.difyChatbotConfig = {
      token: '2cgXq1pPt6SkExgu',
      baseUrl: 'http://49.50.123.164'
    };
    
    // Dynamically load the Dify script
    const script = document.createElement('script');
    script.src = 'http://49.50.123.164/embed.min.js';
    script.id = '2cgXq1pPt6SkExgu';
    script.defer = true;
    document.body.appendChild(script);
    
    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
      #dify-chatbot-bubble-button {
        background-color: #1C64F2 !important;
      }
      #dify-chatbot-bubble-window {
        width: 24rem !important;
        height: 40rem !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      // Clean up when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    
    // If we're using our custom UI, we can toggle the Dify window here
    const difyChatbotButton = document.getElementById('dify-chatbot-bubble-button');
    if (difyChatbotButton) {
      difyChatbotButton.click();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <Button 
        onClick={toggleChatbot} 
        size="icon" 
        className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        aria-label="Open chatbot assistant"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ChatbotButton;
