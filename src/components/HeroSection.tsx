import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}

const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: TypewriterEffectProps) => {
  const renderWords = () => {
    return (
      <div className={cn("inline-block", className)}>
        {words.map((word, idx) => {
          return (
            <motion.span
              key={`${word}-${idx}`}
              className={cn("text-white/80 dark:text-white/80", word.className)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: idx / 5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word.text}
              {idx < words.length - 1 && " "}
            </motion.span>
          );
        })}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "inline-block rounded-sm w-[4px] h-4 md:h-6 bg-primary",
            cursorClassName
          )}
        />
      </div>
    );
  };

  return <>{renderWords()}</>;
};

const CountdownTimer = () => {
  const targetDate = new Date("2025-07-15T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
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
    <div className="flex justify-center gap-4 md:gap-8 my-8">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

const TimeUnit = ({ value, label }: { value: number, label: string }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-glass backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary/20 shadow-glow">
      <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent">
        {value.toString().padStart(2, '0')}
      </span>
    </div>
    <span className="text-xs md:text-sm mt-2 text-foreground/70">{label}</span>
  </div>
);

const HeroSection = () => {
  const words = [
    {
      text: "Cyfuture",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent font-bold",
    },
    {
      text: "AI",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent font-bold",
    },
    {
      text: "Hackathon",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent font-bold",
    },
    {
      text: "1.0",
      className: "text-transparent bg-clip-text bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent font-bold",
    },
  ];

  return (
    <section className="py-24 md:py-28 lg:py-36 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent z-[-1]" />
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-1/2 bg-gradient-to-t from-background to-transparent z-[-1]" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 inline-block">
                <TypewriterEffect words={words} />
              </h1>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Build innovative AI solutions for real-world challenges and showcase your project at Cyfuture's Grand Finale before top juries and investors. Win prizes up to ₹5 Lakhs, plus gain startup opportunities with revenue sharing, incubation, cloud hosting, marketing support, and seed funding up to ₹50 Lakhs.
            </p>
            
            {/* Countdown Timer */}
            <CountdownTimer />
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto relative group overflow-hidden rounded-full bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent hover:from-cyfuture-accent hover:to-cyfuture-primary"
                onClick={() => window.open("https://forms.gle/VZow2H73JxZG5tx96", "_blank")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />
                <span className="relative flex items-center gap-2">
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full border-foreground/20 hover:bg-foreground/10"
                onClick={() => {
                  const element = document.getElementById('challenges');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group w-full max-w-5xl"
          >
            <div className="overflow-hidden rounded-xl border border-primary/20 shadow-glow bg-black/50 backdrop-blur-sm">
              <div className="p-2">
                <img
                  src="/lovable-uploads/e79a9902-b32a-4d7e-a707-c24e9def20ae.png"
                  alt="AI Hackathon Banner"
                  className="rounded-lg object-cover w-full max-w-5xl mx-auto transform group-hover:scale-[1.02] transition-transform duration-300"
                  width={1200}
                  height={675}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
