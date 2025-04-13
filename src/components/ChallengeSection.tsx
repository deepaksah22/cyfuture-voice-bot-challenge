import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Phone, HeadphonesIcon, Bot, Braces, Cpu, HeartPulse, Coins, Leaf, GraduationCap, Lightbulb, Users } from "lucide-react";
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-blue-600"
          >
            Challenge Tracks
          </motion.h2>
        </div>

        <Tabs defaultValue="callcenter" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 max-w-5xl mx-auto mb-8">
            <TabsTrigger value="callcenter" className="text-blue-600">Call Centers</TabsTrigger>
            <TabsTrigger value="hr" className="text-blue-600">HR</TabsTrigger>
            <TabsTrigger value="finance" className="text-blue-600">Finance</TabsTrigger>
            <TabsTrigger value="healthcare" className="text-blue-600">Healthcare</TabsTrigger>
            <TabsTrigger value="sustainability" className="text-blue-600">Sustainability</TabsTrigger>
            <TabsTrigger value="education" className="text-blue-600">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="callcenter">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3" />
                Call Centers
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>1. Automate L1 support using AI-powered Voicebots and Chatbots to resolve basic customer queries.</p>
                <p>2. Build an intelligent grievance redressal system that classifies, routes, and responds to complaints in real time.</p>
                <p>3. Use NLP to summarize and tag support calls for training and quality enhancement.</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hr">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Users className="h-6 w-6 text-primary mr-3" />
                HR
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>1. AI chatbot/voicebot for resume screening, top-10 profile shortlisting, and candidate interactions.</p>
                <p>2. AI tool for sourcing resumes from open web platforms to reduce reliance on job portals.</p>
                <p>3. AI-driven identification of high-potential employees with personalized leadership plans.</p>
                <p>4. AI dashboard for appraisal process with real-time inputs and feedback.</p>
                <p>5. Gamified learning platform for better training completion and engagement.</p>
                <p>6. Skill gap analysis and personalized upskilling recommendations using AI.</p>
                <p>7. Wellness tracking and mental health check-in platform with AI recommendations.</p>
                <p>8. Centralized HR dashboard with AI-powered insights from attendance, exits, engagement surveys, etc.</p>
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
                <p>1. Automate data extraction from invoices and enable bulk uploading for efficient processing.</p>
                <p>2. AI-based GST input reconciliation tool that categorizes invoices and provides match reports.</p>
                <p>3. Explore other AI-driven solutions to optimize financial operations and reduce manual workload.</p>
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
                <p>1. Build an AI-based assistant for symptom analysis, triage, and doctor recommendations.</p>
                <p>2. Develop predictive models for hospital readmissions and patient risk scores.</p>
                <p>3. Automate clinical documentation using voice recognition and NLP.</p>
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
                <p>1. Use AI to optimize energy usage and reduce carbon footprint in industrial and urban areas.</p>
                <p>2. Build smart waste management systems using real-time sensors and predictive AI models.</p>
                <p>3. Develop AI tools for monitoring and predicting environmental impact metrics.</p>
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
                <p>1. Personalized AI tutors for concept clarification and learning reinforcement.</p>
                <p>2. Automated test paper generation and grading systems.</p>
                <p>3. Use AI to identify at-risk students and suggest interventions to educators.</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

       <div className="text-center text-xl font-semibold text-blue-600 mb-12">
  <p className="text-2xl md:text-3xl">Other Domains</p>
  <p className="mt-2">Participants are encouraged to come up with innovative AI-based solutions in any other domains as well!</p>
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
