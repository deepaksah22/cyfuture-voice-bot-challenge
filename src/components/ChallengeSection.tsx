
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Phone, HeadphonesIcon, Bot, Braces, Cpu, HeartPulse, Coins, Leaf, GraduationCap, Lightbulb } from "lucide-react";
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
            Empowering Industries with AI Innovation
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-3xl mx-auto mb-6"
          >
            In an era of rapid technological advancement, industries face unique challenges that demand smarter, more efficient, and scalable solutions. AI has the potential to revolutionize these sectors, but unlocking this potential requires creative, practical, and impactful applications tailored to real-world needs.
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
        
        <Tabs defaultValue="callcenter" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 max-w-4xl mx-auto mb-8">
            <TabsTrigger value="callcenter">Call Centers</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="callcenter">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3" />
                Call Centers
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Improve customer service efficiency, reduce wait times, enhance agent performance, or personalize customer interactions using AI technologies.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Problem Statement:</h4>
                
                <p className="mb-4">
                  Call centers face challenges with high call volumes, agent burnout, and maintaining service quality. Traditional solutions often lead to customer frustration and operational inefficiencies.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Your Challenge:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Design AI solutions that can understand natural language and different accents</li>
                  <li>Create systems to automatically resolve common customer queries</li>
                  <li>Develop tools to assist agents in real-time during complex interactions</li>
                  <li>Build analytics dashboards to identify improvement opportunities</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="finance">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Coins className="h-6 w-6 text-primary mr-3" />
                Finance
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Streamline fraud detection, optimize investment strategies, automate financial planning, or improve risk assessment through AI innovations.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Problem Statement:</h4>
                
                <p className="mb-4">
                  Financial institutions struggle with fraud prevention, personalized financial advice, and making financial services accessible to all demographics, especially students and young adults.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Your Challenge:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create AI tools for detecting unusual financial activities</li>
                  <li>Develop applications that provide personalized financial education</li>
                  <li>Build systems that simplify financial planning for students</li>
                  <li>Design solutions that make investing more accessible</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="healthcare">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <HeartPulse className="h-6 w-6 text-primary mr-3" />
                Healthcare
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Enhance patient care, predict disease outbreaks, optimize resource allocation, or simplify medical record management with AI solutions.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Problem Statement:</h4>
                
                <p className="mb-4">
                  Healthcare providers face challenges with resource constraints, timely diagnosis, and making healthcare accessible to all. Students often neglect their health due to limited awareness and busy schedules.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Your Challenge:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Build solutions for mental health support and stress management</li>
                  <li>Develop systems for early health issue detection</li>
                  <li>Create applications that improve healthcare accessibility</li>
                  <li>Design tools to simplify health record management</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sustainability">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Leaf className="h-6 w-6 text-primary mr-3" />
                Sustainability
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Tackle climate change, optimize energy consumption, reduce waste, or promote eco-friendly practices using AI technologies.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Problem Statement:</h4>
                
                <p className="mb-4">
                  Educational institutions and businesses struggle with implementing sustainable practices, reducing carbon footprints, and making environmental initiatives practical and measurable.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Your Challenge:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Create solutions for tracking and reducing energy consumption</li>
                  <li>Develop applications that optimize waste management</li>
                  <li>Build systems that encourage sustainable behaviors</li>
                  <li>Design tools to measure environmental impact of activities</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                Education
              </h3>
              
              <div className="space-y-6 text-foreground/90">
                <p>
                  Personalize learning experiences, automate administrative tasks, improve accessibility, or predict student performance with innovative AI solutions.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Problem Statement:</h4>
                
                <p className="mb-4">
                  Educational institutions face challenges with personalized learning, identifying at-risk students, and making education accessible to diverse learning styles and needs.
                </p>
                
                <h4 className="text-xl font-bold mt-6 mb-3">Your Challenge:</h4>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Design AI tutors that adapt to individual learning paces</li>
                  <li>Create systems that identify concepts students struggle with</li>
                  <li>Build tools that make educational content more accessible</li>
                  <li>Develop applications that streamline administrative tasks</li>
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
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Develop novel AI solutions that address real problems faced by industries and demonstrate creative thinking."
  },
  {
    icon: Bot,
    title: "AI-Powered Understanding",
    description: "Implement advanced machine learning to accurately understand context, data patterns, and user needs."
  },
  {
    icon: Phone,
    title: "User-Centered Design",
    description: "Create solutions that prioritize user experience and make complex technologies accessible to everyday users."
  },
  {
    icon: Braces,
    title: "Technical Feasibility",
    description: "Build prototypes that demonstrate technical viability and can be implemented within the hackathon timeframe."
  },
  {
    icon: Cpu,
    title: "Impact Assessment",
    description: "Showcase how your solution can drive meaningful impact and provide measurable improvements."
  },
  {
    icon: Sparkles,
    title: "Presentation Quality",
    description: "Communicate your ideas effectively through clear, compelling presentations that highlight your solution's value."
  }
];

export default ChallengeSection;
