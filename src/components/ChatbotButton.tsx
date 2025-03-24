
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 rounded-lg border shadow-lg bg-white overflow-hidden w-[380px] h-[600px] md:w-[400px] md:h-[700px]">
          <div className="flex items-center justify-between bg-primary p-2">
            <h3 className="text-primary-foreground font-medium">Cyfuture AI Hackathon Assistant</h3>
            <Button variant="ghost" size="icon" onClick={toggleChatbot} className="text-primary-foreground hover:bg-primary/90">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <iframe
            src="http://49.50.123.164/chatbot/2cgXq1pPt6SkExgu"
            style={{ width: '100%', height: 'calc(100% - 40px)' }}
            frameBorder="0"
            allow="microphone"
          ></iframe>
        </div>
      )}
      
      <Button 
        onClick={toggleChatbot} 
        size="icon" 
        className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ChatbotButton;
