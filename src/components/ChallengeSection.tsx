
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Phone, HeadphonesIcon, Bot, Braces, Cpu, HeartPulse, Coins, Leaf, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
              Challenge Tracks
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Hackathon Challenge Tracks
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-3xl mx-auto mb-6"
          >
            Choose from multiple challenge tracks and develop AI-powered solutions that can revolutionize industries. The top teams from each track will be invited to the grand finale at Cyfuture India Pvt Ltd.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-3xl mx-auto mb-12 bg-glass p-6 rounded-xl shadow-soft"
          >
            <h3 className="text-xl font-semibold mb-2 text-primary">Phase 1: Idea Submission</h3>
            <p className="text-foreground/80">
              Teams are required to submit a presentation (PPT) explaining their solution idea, approach, and implementation plan. Based on these submissions, the top 15 teams will be selected for Phase 2 (the grand finale).
            </p>
          </motion.div>
        </div>
        
        <Tabs defaultValue="voicebot" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 max-w-4xl mx-auto mb-8">
            <TabsTrigger value="voicebot">Voice Bot</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="voicebot">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Sparkles className="h-6 w-6 text-primary mr-3" />
                Voice Bot Solution for Call Centers
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Design an AI-powered voice bot that can handle customer service calls, understand different accents, and resolve common queries without human intervention.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Problem Statement:</h4>
                
                <p className="mb-4">
                  Call centers face challenges with high call volumes, repetitive customer queries, and staffing limitations. Traditional IVR systems are often frustrating for customers, leading to poor experiences and inefficient operations.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Your Challenge:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create a voice bot that can understand natural conversations across accents</li>
                  <li>Develop a system that can resolve common customer queries automatically</li>
                  <li>Implement a seamless handoff to human agents when needed</li>
                  <li>Design analytics to track performance and customer satisfaction</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="finance">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Coins className="h-6 w-6 text-primary mr-3" />
                AI-Powered Financial Solutions
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Create an AI solution that democratizes financial services, improves financial literacy, or enhances financial decision-making for college students and young adults.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Problem Statement:</h4>
                
                <p className="mb-4">
                  Many young adults and students lack access to financial education and tools, leading to poor financial decisions that can have long-term consequences.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Your Challenge:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Develop a solution for personalized financial education</li>
                  <li>Create tools for budgeting and financial planning for students</li>
                  <li>Design AI systems to help with basic investment decisions</li>
                  <li>Implement safeguards to prevent financial mistakes</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="healthcare">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <HeartPulse className="h-6 w-6 text-primary mr-3" />
                Healthcare Accessibility Solutions
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Create an AI application that improves healthcare accessibility, provides health education, or supports mental health for college students.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Problem Statement:</h4>
                
                <p className="mb-4">
                  Students often neglect their health due to busy schedules, limited resources, or lack of awareness about healthcare options available to them.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Your Challenge:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Build a solution for mental health support and stress management</li>
                  <li>Create a system for basic health assessment and guidance</li>
                  <li>Develop tools for medication and health appointment reminders</li>
                  <li>Design accessible health education resources</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sustainability">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Leaf className="h-6 w-6 text-primary mr-3" />
                Campus Sustainability Solutions
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Develop an AI solution that helps college campuses become more sustainable by reducing waste, conserving energy, or promoting eco-friendly practices.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Problem Statement:</h4>
                
                <p className="mb-4">
                  Many college campuses face challenges with resource consumption, waste management, and implementing sustainable practices across large student populations.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Your Challenge:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create a solution for tracking and reducing energy usage</li>
                  <li>Design systems for optimizing campus waste management</li>
                  <li>Develop tools to incentivize sustainable behaviors</li>
                  <li>Build applications that connect sustainability initiatives</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                Enhanced Learning Experiences
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Create an AI solution that enhances learning experiences, improves accessibility to educational content, or helps students master difficult concepts.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Problem Statement:</h4>
                
                <p className="mb-4">
                  Traditional education approaches don't always accommodate different learning styles, paces, or accessibility needs, making it difficult for some students to succeed.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Your Challenge:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Develop a personalized learning assistant for challenging courses</li>
                  <li>Create tools for converting educational content into accessible formats</li>
                  <li>Design AI systems that can answer subject-specific questions</li>
                  <li>Build collaborative learning platforms powered by AI</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
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
