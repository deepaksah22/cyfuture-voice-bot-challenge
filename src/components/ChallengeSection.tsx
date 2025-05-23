import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkles,
  Phone,
  Users,
  Coins,
  HeartPulse,
  Leaf,
  GraduationCap,
  Lightbulb,
  Bot,
  Braces,
  Cpu,
  Tractor,
  ShoppingCart,
  Factory,
  Truck,
  Gavel,
  Zap,
} from "lucide-react";
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
      },
    }),
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

        <Tabs defaultValue="customercare" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 gap-2 max-w-5xl mx-auto mb-8">
            <TabsTrigger value="customercare" className="text-blue-600">
              Customer Care
            </TabsTrigger>
            <TabsTrigger value="hr" className="text-blue-600">
              HR
            </TabsTrigger>
            <TabsTrigger value="finance" className="text-blue-600">
              Finance
            </TabsTrigger>
            <TabsTrigger value="healthcare" className="text-blue-600">
              Healthcare
            </TabsTrigger>
            <TabsTrigger value="sustainability" className="text-blue-600">
              Sustainability
            </TabsTrigger>
            <TabsTrigger value="education" className="text-blue-600">
              Education
            </TabsTrigger>
            <TabsTrigger value="agriculture" className="text-blue-600">
              Agriculture
            </TabsTrigger>
            <TabsTrigger value="ecommerce" className="text-blue-600">
              E-commerce
            </TabsTrigger>
            <TabsTrigger value="manufacturing" className="text-blue-600">
              Manufacturing
            </TabsTrigger>
            <TabsTrigger value="transport" className="text-blue-600">
              Transport
            </TabsTrigger>
            <TabsTrigger value="legal" className="text-blue-600">
              Legal
            </TabsTrigger>
            <TabsTrigger value="power" className="text-blue-600">
              Power & Energy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="customercare">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3" />
                Customer Care
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  <span className="font-bold">1. AI-Powered L1 Automation:</span>{" "}
                  Design intelligent voicebots and chatbots to resolve basic
                  customer queries autonomously.
                </p>
                <p>
                  <span className="font-bold">2. Smart Grievance Management:</span>{" "}
                  Develop a real-time complaint classification and routing system
                  for efficient redressal.
                </p>
                <p>
                  <span className="font-bold">3. Call Intelligence via NLP:</span>{" "}
                  Leverage natural language processing to summarize and tag support
                  calls for training and quality analysis.
                </p>
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
                <p>
                  <span className="font-bold">1. AI for Resume Screening:</span>{" "}
                  Build a chatbot/voicebot to screen resumes, shortlist top
                  candidates, and manage initial interactions.
                </p>
                <p>
                  <span className="font-bold">2. Smart Talent Sourcing:</span>{" "}
                  Create an AI tool to extract candidate profiles from open web
                  platforms, minimizing reliance on job portals.
                </p>
                <p>
                  <span className="font-bold">3. Leadership Potential Identifier:</span>{" "}
                  Develop a system to detect high-potential employees and recommend
                  personalized growth paths.
                </p>
                <p>
                  <span className="font-bold">4. AI-Driven Appraisals:</span>{" "}
                  Create a real-time feedback and performance appraisal dashboard
                  powered by AI insights.
                </p>
                <p>
                  <span className="font-bold">5. Gamified Learning Platform:</span>{" "}
                  Build an engaging, gamified LMS to enhance training participation
                  and completion.
                </p>
                <p>
                  <span className="font-bold">6. AI-Based Skill Gap Analysis:</span>{" "}
                  Design a system to identify skill gaps and suggest tailored
                  upskilling recommendations.
                </p>
                <p>
                  <span className="font-bold">7. Employee Wellness Tracker:</span>{" "}
                  Implement an AI-powered platform for mental health check-ins and
                  wellness suggestions.
                </p>
                <p>
                  <span className="font-bold">8. Unified HR Insights Dashboard:</span>{" "}
                  Build a centralized dashboard offering actionable insights from
                  HR data (attendance, exits, surveys, etc.).
                </p>
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
                  <span className="font-bold">1. Automated Invoice Processing:</span>{" "}
                  Create a tool to extract data from invoices and enable bulk
                  upload for streamlined processing.
                </p>
                <p>
                  <span className="font-bold">2. GST Reconciliation Assistant:</span>{" "}
                  Build an AI-based system to categorize invoices and generate GST
                  match reports.
                </p>
                <p>
                  <span className="font-bold">3. Smart Financial Operations:</span>{" "}
                  Propose AI solutions to enhance efficiency and reduce manual
                  intervention in finance workflows.
                </p>
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
                  <span className="font-bold">1. AI Symptom Checker:</span> Build
                  a virtual assistant for symptom analysis, triage, and doctor
                  recommendations.
                </p>
                <p>
                  <span className="font-bold">2. Predictive Patient Risk Models:</span>{" "}
                  Develop tools to forecast hospital readmissions and calculate
                  patient risk scores.
                </p>
                <p>
                  <span className="font-bold">3. Automated Clinical Documentation:</span>{" "}
                  Use voice recognition and NLP to generate accurate clinical
                  notes automatically.
                </p>
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
                  <span className="font-bold">1. Energy Optimization via AI:</span>{" "}
                  Develop models to monitor and reduce energy consumption and
                  carbon footprint in various sectors.
                </p>
                <p>
                  <span className="font-bold">2. Smart Waste Management:</span>{" "}
                  Build predictive waste management systems using sensors and AI
                  algorithms.
                </p>
                <p>
                  <span className="font-bold">3. Environmental Impact Analytics:</span>{" "}
                  Create tools for real-time monitoring and forecasting of key
                  sustainability metrics.
                </p>
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
                  <span className="font-bold">1. Personalized AI Tutors:</span>{" "}
                  Design intelligent tutors for real-time doubt solving and
                  adaptive learning.
                </p>
                <p>
                  <span className="font-bold">2. Automated Assessment Tools:</span>{" "}
                  Build systems for generating and grading tests automatically.
                </p>
                <p>
                  <span className="font-bold">3. Student Risk Prediction:</span>{" "}
                  Use AI to identify at-risk students and recommend timely
                  interventions.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="agriculture">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Tractor className="h-6 w-6 text-primary mr-3" />
                Agriculture
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  <span className="font-bold">1. Crop Health Monitoring:</span>{" "}
                  Develop AI-driven tools to analyze satellite/drone imagery for early detection of crop diseases.
                </p>
                <p>
                  <span className="font-bold">2. Precision Farming Assistant:</span>{" "}
                  Build a system to optimize irrigation and fertilizer use based on soil and weather data.
                </p>
                <p>
                  <span className="font-bold">3. Yield Prediction Models:</span>{" "}
                  Create predictive models to forecast crop yields using historical and real-time data.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ecommerce">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <ShoppingCart className="h-6 w-6 text-primary mr-3" />
                E-commerce & Retail
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  <span className="font-bold">1. Personalized Product Recommendations:</span>{" "}
                  Design AI algorithms to suggest products based on user behavior and preferences.
                </p>
                <p>
                  <span className="font-bold">2. Inventory Optimization:</span>{" "}
                  Build a system to predict demand and manage stock levels efficiently.
                </p>
                <p>
                  <span className="font-bold">3. AI Chatbot for Customer Support:</span>{" "}
                  Develop a conversational AI to handle customer queries and returns.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="manufacturing">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Factory className="h-6 w-6 text-primary mr-3" />
                Manufacturing
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  <span className="font-bold">1. Predictive Maintenance:</span>{" "}
                  Create AI models to predict equipment failures and schedule maintenance.
                </p>
                <p>
                  <span className="font-bold">2. Quality Control Automation:</span>{" "}
                  Develop computer vision systems to detect defects in manufactured goods.
                </p>
                <p>
                  <span className="font-bold">3. Supply Chain Optimization:</span>{" "}
                  Build AI tools to streamline supply chain logistics and reduce costs.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="transport">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Truck className="h-6 w-6 text-primary mr-3" />
                Transport & Logistics
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  <span className="font-bold">1. Route Optimization:</span>{" "}
                  Develop AI algorithms to optimize delivery routes for time and fuel efficiency.
                </p>
                <p>
                  <span className="font-bold">2. Fleet Management System:</span>{" "}
                  Build a system to monitor vehicle health and driver performance in real-time.
                </p>
                <p>
                  <span className="font-bold">3. Demand Forecasting:</span>{" "}
                  Create models to predict transportation demand for better resource allocation.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="legal">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Gavel className="h-6 w-6 text-primary mr-3" />
                Legal
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  <span className="font-bold">1. Contract Analysis Tool:</span>{" "}
                  Build an AI system to extract key clauses and risks from legal documents.
                </p>
                <p>
                  <span className="font-bold">2. Legal Research Assistant:</span>{" "}
                  Develop a tool to summarize case laws and provide relevant precedents.
                </p>
                <p>
                  <span className="font-bold">3. Compliance Monitoring:</span>{" "}
                  Create an AI solution to track regulatory changes and ensure compliance.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="power">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Zap className="h-6 w-6 text-primary mr-3" />
                Power & Energy
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  <span className="font-bold">1. Energy Consumption Forecasting:</span>{" "}
                  Develop AI models to predict energy demand for efficient grid management.
                </p>
                <p>
                  <span className="font-bold">2. Renewable Energy Optimization:</span>{" "}
                  Build systems to optimize solar/wind energy production based on weather data.
                </p>
                <p>
                  <span className="font-bold">3. Smart Grid Monitoring:</span>{" "}
                  Create AI tools to detect and resolve grid anomalies in real-time.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center text-xl font-semibold text-blue-600 mb-12">
          <p className="text-2xl md:text-3xl">Other Domains</p>
          <p className="mt-2">
            Participants are encouraged to come up with innovative AI-based
            solutions in any other domains as well!
          </p>
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
    description:
      "Develop novel AI solutions that address real problems faced by industries and demonstrate creative thinking.",
  },
  {
    icon: Bot,
    title: "AI-Powered Understanding",
    description:
      "Implement advanced machine learning to accurately understand context, data patterns, and user needs.",
  },
  {
    icon: Phone,
    title: "User-Centered Design",
    description:
      "Create solutions that prioritize user experience and make complex technologies accessible to everyday users.",
  },
  {
    icon: Braces,
    title: "Technical Feasibility",
    description:
      "Build prototypes that demonstrate technical viability and can be implemented within the hackathon timeframe.",
  },
  {
    icon: Cpu,
    title: "Impact Assessment",
    description:
      "Showcase how your solution can drive meaningful impact and provide measurable improvements.",
  },
  {
    icon: Sparkles,
    title: "Presentation Quality",
    description:
      "Communicate your ideas effectively through clear, compelling presentations that highlight your solution's value.",
  },
];

export default ChallengeSection;
