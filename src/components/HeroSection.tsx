
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Rocket, CloudLightning, DollarSign } from "lucide-react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("June 20, 2025 00:00:00");
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
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-[-1]" />
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-[-1]">
        <div className="absolute top-16 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full filter blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute top-60 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Cyfuture AI Hackathon 1.0
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyfuture-primary via-cyfuture-secondary to-cyfuture-accent"
          >
            Innovating Across Multiple Domains with AI
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl"
          >
            Develop cutting-edge AI solutions for real-world problems and present your project at the Grand AI Hackathon by Cyfuture. Win prizes up to ₹5 Lakhs, plus startup opportunities with revenue-sharing, cloud hosting, marketing support, and seed funding up to ₹50 Lakhs.
          </motion.p>
          
          {/* Countdown Timer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <CountdownItem value={timeLeft.days} label="Days" />
            <CountdownItem value={timeLeft.hours} label="Hours" />
            <CountdownItem value={timeLeft.minutes} label="Minutes" />
            <CountdownItem value={timeLeft.seconds} label="Seconds" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            {/* Enhanced Register Now Button with Animation */}
            <motion.div
              animate={{ 
                y: [0, -8, 0],
                boxShadow: [
                  "0 0 10px rgba(79, 70, 229, 0.5)",
                  "0 0 20px rgba(79, 70, 229, 0.7)",
                  "0 0 10px rgba(79, 70, 229, 0.5)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Button 
                className="h-12 px-8 bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent text-white rounded-full text-lg font-medium transition-all relative overflow-hidden group"
                onClick={() => window.open('https://forms.gle/RgFmduC1seRnN4F5A', '_blank')}
              >
                <span className="relative z-10">Register Now</span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                  bg-gradient-to-r from-cyan-400 to-blue-500 
                  blur-xl rounded-full scale-150 -z-10"></span>
              </Button>
            </motion.div>
            
            <Button variant="outline" className="h-12 px-8 rounded-full text-lg font-medium border-2">
              Learn More
            </Button>
          </motion.div>
        </div>
        
        {/* Event Details Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <div className="bg-glass rounded-2xl p-6 backdrop-blur-sm shadow-soft flex items-center">
            <Calendar className="h-6 w-6 text-primary mr-4" />
            <div>
              <h3 className="font-medium text-sm text-foreground/60">Date</h3>
              <p className="font-medium">May 15-16, 2025</p>
            </div>
          </div>
          
          <div className="bg-glass rounded-2xl p-6 backdrop-blur-sm shadow-soft flex items-center">
            <Clock className="h-6 w-6 text-primary mr-4" />
            <div>
              <h3 className="font-medium text-sm text-foreground/60">Duration</h3>
              <p className="font-medium">24 Hours</p>
            </div>
          </div>
          
          <div className="bg-glass rounded-2xl p-6 backdrop-blur-sm shadow-soft flex items-center">
            <MapPin className="h-6 w-6 text-primary mr-4" />
            <div>
              <h3 className="font-medium text-sm text-foreground/60">Venue</h3>
              <p className="font-medium">Cyfuture India Pvt Ltd, NSEZ, Noida</p>
            </div>
          </div>
        </motion.div>
        
        {/* Startup opportunity brief */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-6"
        >
          <div className="bg-glass rounded-2xl p-6 backdrop-blur-sm shadow-soft flex items-center">
            <Rocket className="h-6 w-6 text-primary mr-4" />
            <div>
              <h3 className="font-medium text-sm text-foreground/60">Partnership</h3>
              <p className="font-medium">Revenue Sharing Model</p>
            </div>
          </div>
          
          <div className="bg-glass rounded-2xl p-6 backdrop-blur-sm shadow-soft flex items-center">
            <CloudLightning className="h-6 w-6 text-primary mr-4" />
            <div>
              <h3 className="font-medium text-sm text-foreground/60">Support</h3>
              <p className="font-medium">Cloud Hosting & Marketing</p>
            </div>
          </div>
          
          <div className="bg-glass rounded-2xl p-6 backdrop-blur-sm shadow-soft flex items-center">
            <DollarSign className="h-6 w-6 text-primary mr-4" />
            <div>
              <h3 className="font-medium text-sm text-foreground/60">Funding</h3>
              <p className="font-medium">Up to ₹50 Lakhs Seed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// New Countdown Item Component
const CountdownItem = ({ value, label }: { value: number, label: string }) => {
  return (
    <div className="flex flex-col items-center mx-2">
      <div className="bg-gradient-to-br from-cyfuture-primary to-cyfuture-accent p-0.5 rounded-xl shadow-glow">
        <div className="bg-background h-20 w-20 flex items-center justify-center rounded-xl">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent">
            {value}
          </span>
        </div>
      </div>
      <span className="mt-2 text-foreground/80 font-medium text-sm">{label}</span>
    </div>
  );
};

export default HeroSection;
