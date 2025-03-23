
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
            Transformative Innovation Challenges
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12"
          >
            Choose from multiple challenge tracks and develop AI-powered solutions that can revolutionize industries. The top teams from each track will be invited to the grand finale at Cyfuture India Pvt Ltd.
          </motion.p>
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
          </TabsContent>
          
          <TabsContent value="finance">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Coins className="h-6 w-6 text-primary mr-3" />
                AI-Powered Financial Inclusion Platform
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Millions of people worldwide remain unbanked or underbanked, lacking access to essential financial services.
                  Traditional banking models often exclude low-income populations, rural communities, and those without formal documentation.
                </p>
                
                <h4 className="text-xl font-bold mt-8">Your Challenge:</h4>
                
                <p>
                  Create an innovative AI-powered financial inclusion platform that can:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accessible banking services to underserved populations</li>
                  <li>Develop alternative credit scoring models using non-traditional data</li>
                  <li>Facilitate micro-lending with intelligent risk assessment</li>
                  <li>Offer financial literacy education through interactive AI tools</li>
                  <li>Enable secure transactions with minimal infrastructure requirements</li>
                  <li>Support multiple languages and accommodate varying levels of literacy</li>
                  <li>Implement fraud detection and prevention mechanisms</li>
                  <li>Ensure compliance with relevant financial regulations</li>
                </ul>
                
                <h4 className="text-xl font-bold mt-8">Expected Deliverables:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>A functional prototype of the financial inclusion platform</li>
                  <li>Technical architecture overview and implementation details</li>
                  <li>Alternative credit scoring algorithms and validation metrics</li>
                  <li>Security and privacy design documentation</li>
                  <li>User experience design for low-literacy and first-time users</li>
                  <li>Deployment strategy for areas with limited connectivity</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="healthcare">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <HeartPulse className="h-6 w-6 text-primary mr-3" />
                Early Disease Detection & Remote Diagnosis System
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Early detection of diseases significantly improves treatment outcomes, yet many conditions are diagnosed too late, especially in regions with limited healthcare access.
                  Traditional diagnostic processes often require expensive equipment and specialist expertise.
                </p>
                
                <h4 className="text-xl font-bold mt-8">Your Challenge:</h4>
                
                <p>
                  Develop an AI-powered early disease detection and remote diagnosis system that can:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identify early warning signs of common diseases using accessible data points</li>
                  <li>Enable remote diagnosis through smartphones or basic computing devices</li>
                  <li>Analyze medical images, sounds, or descriptions with high accuracy</li>
                  <li>Provide preliminary diagnosis and triage recommendations</li>
                  <li>Connect patients with appropriate healthcare providers</li>
                  <li>Function effectively with limited or intermittent internet connectivity</li>
                  <li>Maintain patient privacy and data security</li>
                  <li>Generate clear explanations of findings for both patients and healthcare workers</li>
                </ul>
                
                <h4 className="text-xl font-bold mt-8">Expected Deliverables:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Working prototype of the disease detection system</li>
                  <li>Technical documentation of algorithms and models used</li>
                  <li>Validation data showing accuracy compared to traditional diagnosis</li>
                  <li>User interface designs for patients and healthcare providers</li>
                  <li>Data handling and privacy protection mechanisms</li>
                  <li>Implementation roadmap for resource-constrained settings</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sustainability">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Leaf className="h-6 w-6 text-primary mr-3" />
                AI for Sustainable Resource Management
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Inefficient resource management contributes significantly to environmental degradation, waste generation, and climate change.
                  Many organizations and communities lack tools to optimize their resource usage and reduce their ecological footprint.
                </p>
                
                <h4 className="text-xl font-bold mt-8">Your Challenge:</h4>
                
                <p>
                  Create an AI solution for sustainable resource management that can:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Monitor and optimize energy consumption in real-time</li>
                  <li>Predict and prevent resource wastage through smart analytics</li>
                  <li>Suggest sustainable alternatives based on usage patterns</li>
                  <li>Track carbon footprint and provide reduction strategies</li>
                  <li>Optimize supply chains for minimal environmental impact</li>
                  <li>Enable circular economy practices through intelligent recycling and reuse</li>
                  <li>Generate actionable sustainability reports for decision-makers</li>
                  <li>Quantify financial benefits of sustainable practices</li>
                </ul>
                
                <h4 className="text-xl font-bold mt-8">Expected Deliverables:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Functional prototype of the resource management platform</li>
                  <li>Technical documentation of AI models and algorithms</li>
                  <li>Data collection and processing methodology</li>
                  <li>Dashboard for monitoring sustainability metrics</li>
                  <li>Case studies demonstrating potential impact</li>
                  <li>Integration capabilities with existing infrastructure</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                Personalized Adaptive Learning System
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Traditional education follows a one-size-fits-all approach that doesn't address individual learning styles, paces, and needs.
                  Many students struggle with concepts that aren't presented in ways that match their optimal learning methods.
                </p>
                
                <h4 className="text-xl font-bold mt-8">Your Challenge:</h4>
                
                <p>
                  Develop an AI-powered personalized adaptive learning system that can:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identify individual learning styles, strengths, and challenges</li>
                  <li>Dynamically adjust content presentation based on learner responses</li>
                  <li>Generate personalized learning pathways for each student</li>
                  <li>Provide real-time feedback and targeted interventions</li>
                  <li>Support multiple subjects and educational levels</li>
                  <li>Function effectively in low-resource educational settings</li>
                  <li>Track progress and identify knowledge gaps accurately</li>
                  <li>Engage learners through interactive and immersive content</li>
                </ul>
                
                <h4 className="text-xl font-bold mt-8">Expected Deliverables:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Working prototype of the adaptive learning platform</li>
                  <li>Technical documentation of the adaptation algorithms</li>
                  <li>Content generation and customization methodology</li>
                  <li>User interface for learners, educators, and administrators</li>
                  <li>Learning analytics dashboard with actionable insights</li>
                  <li>Demonstration of adaptation for different learning profiles</li>
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
