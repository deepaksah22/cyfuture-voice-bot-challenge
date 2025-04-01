
import { motion } from "framer-motion";
import { CalendarCheck, Flag, Award, Users, FileText, PenTool, Trophy } from "lucide-react";

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="px-4 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background z-[-1]" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            The Complete Guide
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent">
            Cyfuture AI Hackathon 1.0 Roadmap
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Follow the complete hackathon journey from registration to the grand finale
          </p>
        </motion.div>

        {/* Professional Roadmap Design */}
        <div className="relative mt-16 mb-20">
          {/* Elegant background with depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/10 rounded-xl shadow-lg -z-10" />
          
          {/* Top Flow Path with glossy effect */}
          <div className="relative">
            <div className="absolute top-24 left-0 right-0 h-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-full z-0 opacity-80 hidden md:block shadow-md" />
            
            {/* Top Row Events */}
            <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto relative">
              <RoadmapNode 
                title="Registration Opens" 
                date="April 5, 2025" 
                icon={<CalendarCheck className="h-6 w-6" />}
                color="from-blue-600 to-blue-500"
                delay={0.1}
                position="top"
              />
              
              <RoadmapNode 
                title="Idea Submission" 
                date="April 28, 2025" 
                icon={<FileText className="h-6 w-6" />}
                color="from-cyan-500 to-cyan-400"
                delay={0.3}
                position="top"
              />
              
              <RoadmapNode 
                title="Team Selection" 
                date="May 5, 2025" 
                icon={<Users className="h-6 w-6" />}
                color="from-teal-500 to-teal-400"
                delay={0.5}
                position="top"
              />
            </div>
          </div>
          
          {/* Center Connector - Cyfuture Logo with enhanced glossy effect */}
          <div className="flex justify-center -my-8 relative z-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent p-1.5 flex items-center justify-center shadow-xl"
            >
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800"></div>
                <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-transparent to-white/20"></div>
                <span className="font-bold text-base relative z-10">CY<br/>FUTURE</span>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom Flow Path with glossy effect */}
          <div className="relative">
            <div className="absolute top-24 left-0 right-0 h-3 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full z-0 opacity-80 hidden md:block shadow-md" />
            
            {/* Bottom Row Events */}
            <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto relative">
              <RoadmapNode 
                title="Hackathon Starts" 
                date="May 15, 2025" 
                icon={<Flag className="h-6 w-6" />}
                color="from-purple-600 to-purple-500"
                delay={0.7}
                position="bottom"
              />
              
              <RoadmapNode 
                title="Project Submission" 
                date="May 16, 2025" 
                icon={<PenTool className="h-6 w-6" />}
                color="from-pink-600 to-pink-500"
                delay={0.9}
                position="bottom"
              />
              
              <RoadmapNode 
                title="Winners Announced" 
                date="May 16, 2025" 
                icon={<Trophy className="h-6 w-6" />}
                color="from-red-600 to-red-500"
                delay={1.1}
                position="bottom"
              />
            </div>
          </div>
          
          {/* Professional "Must Follow" label */}
          <div className="absolute -top-12 right-4 md:right-20 transform rotate-12 z-10">
            <div className="relative">
              <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-1 font-bold text-xl shadow-lg">MUST</div>
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-1 font-bold text-xl shadow-lg">FOLLOW!</div>
              <div className="absolute top-0 left-0 w-4 h-4 bg-red-700 transform -translate-x-4 shadow-md"></div>
              <div className="absolute top-[100%] left-0 w-4 h-4 bg-blue-700 transform -translate-x-4 shadow-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface RoadmapNodeProps {
  title: string;
  date: string;
  icon: React.ReactNode;
  color: string;
  delay: number;
  position: "top" | "bottom";
}

const RoadmapNode = ({ title, date, icon, color, delay, position }: RoadmapNodeProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: position === "top" ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center mb-12 md:mb-0 relative z-10"
    >
      {/* Enhanced Circle node with gradient and glossy effect */}
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white shadow-lg mb-4 md:mb-0 md:${position === "top" ? "mb-16" : "mt-16"} p-0.5`}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-black/80 to-black/90 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-t from-transparent to-white/30"></div>
          <div className="relative z-10">{icon}</div>
        </div>
      </div>
      
      {/* Enhanced Content with shadow and better spacing */}
      <div className={`text-center md:absolute md:w-56 ${position === "top" ? "md:-top-28" : "md:-bottom-28"}`}>
        <div className="font-bold text-lg mb-1">{title}</div>
        <div className="text-sm text-foreground/70 font-medium">{date}</div>
      </div>
      
      {/* Connector Line (visible only on mobile) */}
      <div className="h-8 w-0.5 bg-foreground/20 mt-4 md:hidden"></div>
    </motion.div>
  );
};

export default RoadmapSection;
