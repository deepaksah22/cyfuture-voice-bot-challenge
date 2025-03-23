
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Phone, HeadphonesIcon, Bot, Braces, Cpu } from "lucide-react";

const ChallengeSection = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      }
    })
  };

  return (
    <section id="challenges" className="section-padding px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 z-[-1]" />
      
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
              Challenge Track
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Voice Bot Solution for Call Centers
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12"
          >
            Develop an advanced AI-powered voice bot solution that can transform customer service operations in call centers. The top 15 teams will be invited to the grand finale at Cyfuture India Pvt Ltd.
          </motion.p>
        </div>
        
        <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md mb-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Sparkles className="h-6 w-6 text-primary mr-3" />
            Problem Statement
          </h3>
          
          <div className="space-y-6 text-foreground/90">
            <p>
              Call centers are overwhelmed with high call volumes, repetitive customer queries, and staffing challenges.
              Traditional IVR systems often frustrate customers with rigid menus and limited capabilities,
              leading to poor customer experiences and high operational costs.
            </p>
            
            <h4 className="text-xl font-bold mt-8">Your Challenge:</h4>
            
            <p>
              Design and develop an intelligent Voice Bot solution using AI technologies that can:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Handle natural, human-like conversations with customers</li>
              <li>Effectively understand customer intent across different accents and languages</li>
              <li>Resolve common customer service requests without human intervention</li>
              <li>Seamlessly transfer complex queries to human agents with full context</li>
              <li>Learn and improve from interactions over time</li>
              <li>Integrate with existing call center systems and CRM platforms</li>
              <li>Provide analytics and insights to improve customer service operations</li>
              <li>Maintain high standards of data privacy and security</li>
            </ul>
            
            <h4 className="text-xl font-bold mt-8">Expected Deliverables:</h4>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>A working prototype of the AI Voice Bot</li>
              <li>Technical documentation explaining the architecture and technologies used</li>
              <li>Integration approach with existing call center infrastructure</li>
              <li>Analytics dashboard for monitoring performance metrics</li>
              <li>A demonstration of the system handling at least 5 common customer service scenarios</li>
              <li>Security and compliance considerations</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUpVariants}
            >
              <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: Phone,
    title: "Natural Conversation",
    description: "Create voice bots that can maintain natural, flowing conversations with customers, understanding context and responding appropriately."
  },
  {
    icon: HeadphonesIcon,
    title: "Call Center Integration",
    description: "Design solutions that seamlessly integrate with existing call center infrastructure and telephony systems."
  },
  {
    icon: Bot,
    title: "AI-Powered Understanding",
    description: "Implement advanced NLP and machine learning to accurately understand customer intent across accents and languages."
  },
  {
    icon: Braces,
    title: "Custom Workflows",
    description: "Create flexible workflows that can be customized for different industries and customer service scenarios."
  },
  {
    icon: Cpu,
    title: "Real-time Analytics",
    description: "Develop dashboards that provide insights into call metrics, customer satisfaction, and bot performance."
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description: "Build systems that learn from each interaction to improve response accuracy and customer satisfaction over time."
  }
];

export default ChallengeSection;
