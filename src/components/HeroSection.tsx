
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket, Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("July 5, 2025 00:00:00");
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-20 pb-6 md:pt-28 md:pb-10 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-[-1]" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-[-1]">
        <div className="absolute top-16 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full filter blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute top-60 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-8 rounded-xl overflow-hidden shadow-lg"
        >
          <img 
            src="/lovable-uploads/03e8c020-e7c2-4377-88c6-526d37eed64c.png" 
            alt="Cyfuture AI Hackathon 2025" 
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-3">
          {/* Left Side with Event Date Badge */}
          <div className="w-full md:w-3/5">            
            {/* Event Date Badge on Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <div className="flex items-center gap-2 py-2 px-4 bg-black/70 text-white rounded-full border border-white/10 shadow-md">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">Demo Day: July 5-6, 2025</span>
              </div>
              <div className="flex items-center gap-2 py-2 px-4 bg-black/70 text-white rounded-full border border-white/10 shadow-md">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Cyfuture Premise, Noida</span>
              </div>
            </motion.div>
          </div>
          
          {/* Right Side with Countdown and Register Button */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-2/5 flex flex-col items-center"
          >
            {/* Enhanced Countdown Timer with more professional design */}
            <div className="relative z-10 mb-6 p-6 rounded-2xl bg-black/90 border border-white/10 shadow-2xl backdrop-blur-md">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Registration Closing In</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <CountdownItem value={timeLeft.days} label="Days" />
                <CountdownItem value={timeLeft.hours} label="Hours" />
                <CountdownItem value={timeLeft.minutes} label="Minutes" />
                <CountdownItem value={timeLeft.seconds} label="Seconds" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-700/20 rounded-2xl blur-lg -z-10"></div>
            </div>
            
            {/* Enhanced Register Now Button */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -8, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <Button 
                className="h-14 px-10 bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent text-white rounded-full text-lg font-medium transition-all overflow-hidden group"
                onClick={() => window.open('https://forms.gle/RgFmduC1seRnN4F5A', '_blank')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Register Now
                </span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
              
              {/* Enhanced button glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-70 group-hover:opacity-100 blur-md transition duration-300 group-hover:blur-xl -z-10"></div>
              <div className="absolute -inset-px bg-gradient-to-r from-white/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-300 -z-5"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Enhanced Countdown Item Component
const CountdownItem = ({ value, label }: { value: number, label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-cyan-500 to-blue-700 p-[1px] rounded-lg shadow-xl overflow-hidden">
        <div className="bg-black h-16 w-16 flex items-center justify-center rounded-lg">
          <span className="text-2xl font-bold text-white">
            {value}
          </span>
        </div>
      </div>
      <span className="mt-2 text-white/90 font-medium text-xs uppercase tracking-wider">{label}</span>
    </div>
  );
};

export default HeroSection;
