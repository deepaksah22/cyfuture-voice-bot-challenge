
import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";
import { cn } from "@/lib/utils";

const PrizesSection = () => {
  return (
    <section id="prizes" className="section-padding px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-[-1]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Rewards
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Exciting Prizes Worth ₹5,00,000
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12"
          >
            The top teams will receive amazing prizes and opportunities to showcase their innovations.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <PrizeCard 
            position="1st"
            title="First Prize"
            amount="₹2,00,000"
            icon={Trophy}
            color="from-amber-400 to-amber-500"
            iconColor="text-amber-500"
            delay={0}
          />
          
          <PrizeCard 
            position="2nd"
            title="Second Prize"
            amount="₹1,00,000"
            icon={Award}
            color="from-gray-400 to-gray-500"
            iconColor="text-gray-500"
            delay={0.1}
          />
          
          <PrizeCard 
            position="3rd"
            title="Third Prize"
            amount="₹50,000"
            icon={Medal}
            color="from-amber-600 to-amber-700"
            iconColor="text-amber-700"
            delay={0.2}
          />
        </div>
        
        <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
          <h3 className="text-2xl font-bold mb-6">Additional Rewards</h3>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalPrizes.map((prize, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start"
              >
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                  <prize.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{prize.title}</h4>
                  <p className="text-foreground/80">{prize.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

interface PrizeCardProps {
  position: string;
  title: string;
  amount: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
  delay: number;
}

const PrizeCard = ({ position, title, amount, icon: Icon, color, iconColor, delay }: PrizeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="bg-glass rounded-3xl p-8 shadow-glass backdrop-blur-md h-full border border-white/10 transition-all duration-300 hover:shadow-xl group-hover:translate-y-[-5px]">
        <div className="flex justify-between items-start mb-6">
          <div className={cn(
            "h-16 w-16 rounded-2xl flex items-center justify-center",
            `bg-gradient-to-br ${color}`,
            "shadow-glow"
          )}>
            <Icon className={cn("h-8 w-8 text-white")} />
          </div>
          <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
            {position}
          </span>
        </div>
        
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
          {amount}
        </p>
        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-foreground/80">Plus additional benefits including mentorship, networking opportunities, and more!</p>
        </div>
      </div>
    </motion.div>
  );
};

const additionalPrizes = [
  {
    icon: Trophy,
    title: "Internship Opportunities",
    description: "Top performers will get internship opportunities at Cyfuture India and partner companies."
  },
  {
    icon: Award,
    title: "Incubation Support",
    description: "Best solutions may receive incubation support to turn their prototype into a product."
  },
  {
    icon: Medal,
    title: "Special Category Awards",
    description: "Awards for most innovative solution, best technical implementation, and best UI/UX."
  },
  {
    icon: Trophy,
    title: "Developer Credits",
    description: "Cloud computing credits, API access, and development tools from our sponsors."
  },
  {
    icon: Award,
    title: "Swag & Goodies",
    description: "All participants will receive hackathon swag, certificates, and goodies from sponsors."
  },
  {
    icon: Medal,
    title: "Networking Opportunities",
    description: "Connect with industry professionals, mentors, and potential employers."
  }
];

export default PrizesSection;
