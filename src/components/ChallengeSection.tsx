import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
    visible: (i) => ({
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
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-blue-600"
          >
            Challenge Tracks
          </motion.h2>
        </div>

        <Tabs defaultValue="customercare" className="mb-16">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 max-w-5xl mx-auto mb-8">
            <TabsTrigger value="customercare" className="text-blue-600 text-sm sm:text-base">
              Customer Care
            </TabsTrigger>
            <TabsTrigger value="hr" className="text-blue-600 text-sm sm:text-base">
              HR
            </TabsTrigger>
            <TabsTrigger value="finance" className="text-blue-600 text-sm sm:text-base">
              Finance
            </TabsTrigger>
            <TabsTrigger value="healthcare" className="text-blue-600 text-sm sm:text-base">
              Healthcare
            </TabsTrigger>
            <TabsTrigger value="sustainability" className="text-blue-600 text-sm sm:text-base">
              Sustainability
            </TabsTrigger>
            <TabsTrigger value="education" className="text-blue-600 text-sm sm:text-base">
              Education
            </TabsTrigger>
            <TabsTrigger value="agriculture" className="text-blue-600 text-sm sm:text-base">
              Agriculture
            </TabsTrigger>
            <TabsTrigger value="ecommerce" className="text-blue-600 text-sm sm:text-base">
              E-commerce
            </TabsTrigger>
            <TabsTrigger value="manufacturing" className="text-blue-600 text-sm sm:text-base">
              Manufacturing
            </TabsTrigger>
            <TabsTrigger value="transport" className="text-blue-600 text-sm sm:text-base">
              Transport
            </TabsTrigger>
            <TabsTrigger value="legal" className="text-blue-600 text-sm sm:text-base">
              Legal
            </TabsTrigger>
            <TabsTrigger value="power" className="text-blue-600 text-sm sm:text-base">
              Power & Energy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="customercare">
            <div className="bg-glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3" />
                Customer Care
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  Design intelligent voicebots and chatbots to resolve basic customer queries autonomously. Develop a real-time complaint classification and routing system for efficient redressal. Leverage natural language processing to summarize and tag support calls for training and quality analysis.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hr">
            <div className="bg-glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <Users className="h-6 w-6 text-primary mr-3" />
                HR
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  Build a chatbot or voicebot to screen resumes, shortlist top candidates, and manage initial interactions. Create an AI tool to extract candidate profiles from open web platforms, minimizing reliance on job portals. Develop a system to detect high-potential employees and recommend personalized growth paths. Create a real-time feedback and performance appraisal dashboard powered by AI insights. Build an engaging, gamified LMS to enhance training participation and completion. Design a system to identify skill gaps and suggest tailored upskilling recommendations. Implement an AI-powered platform for mental health check-ins and wellness suggestions. Build a centralized dashboard offering actionable insights from HR data including attendance, exits, and surveys.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="finance">
            <div className="bg-glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <Coins className="h-6 w-6 text-primary mr-3" />
                Finance
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  Create a tool to extract data from invoices and enable bulk upload for streamlined processing. Build an AI-based system to categorize invoices and generate GST match reports. Propose AI solutions to enhance efficiency and reduce manual intervention in finance workflows.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="healthcare">
            <div className="bg-glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <HeartPulse className="h-6 w-6 text-primary mr-3" />
                Healthcare
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  Build a virtual assistant for symptom analysis, triage, and doctor recommendations. Develop tools to forecast hospital readmissions and calculate patient risk scores. Use voice recognition and NLP to generate accurate clinical notes automatically.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="sustainability">
            <div className="bg-glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <Leaf className="h-6 w-6 text-primary mr-3" />
                Sustainability
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  Develop models to monitor and reduce energy consumption and carbon footprint in various sectors. Build predictive waste management systems using sensors and AI algorithms. Create tools for real-time monitoring and forecasting of key sustainability metrics.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="bg-glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                Education
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  Design intelligent tutors for real-time doubt solving and adaptive learning. Build systems for generating and grading tests automatically. Use AI to identify at-risk students and recommend timely interventions.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="agriculture">
            <div className="bg-glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <Tractor className="h-6 w-6 text-primary mr-3" />
                Agriculture
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  Transform agriculture with AI-driven innovations that empower farmers. Develop predictive models using satellite imagery, weather, and soil data to forecast crop yields and enable data-driven decisions. Create autonomous robots or drones for planting, harvesting, or monitoring crop health to enhance efficiency. Build tools to optimize resource use, such as water and fertilizers, promoting sustainable and environmentally friendly farming practices. Shape the future of agriculture with intelligent solutions!
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ecommerce">
            <div className="bg-glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <ShoppingCart className="h-6 w-6 text-primary mr-3" />
                E-commerce & Retail
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  Revolutionize retail with AI-powered solutions that enhance customer experiences and business efficiency. Develop algorithms for hyper-personalized product recommendations tailored to user behavior and trends. Create NLP systems to analyze customer reviews, extract sentiments, and deliver actionable insights. Build tools to predict demand and optimize inventory, minimizing overstock and stockouts. Lead the charge in redefining e-commerce innovation!
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="manufacturing">
            <div className="bg-glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <Factory className="h-6 w-6 text-primary mr-3" />
                Manufacturing
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  Redefine manufacturing with AI tools that drive efficiency and innovation. Develop systems to monitor equipment health and predict maintenance needs to reduce downtime. Create solutions to optimize production processes and resource utilization. Implement computer vision for real-time defect detection to ensure superior quality. Push the boundaries of smart manufacturing with your visionary ideas!
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="transport">
            <div className="bg-glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <Truck className="h-6 w-6 text-primary mr-3" />
                Transport & Logistics
              </h3>
              <div className "space-y-6 text-foreground/90">
                <p>
                  Transform logistics with AI innovations that redefine efficiency. Develop algorithms to optimize delivery routes, cutting fuel costs and speeding up deliveries. Create systems for real-time tracking to keep customers and managers informed. Build predictive models to forecast transportation needs and streamline fleet operations. Drive the future of smart logistics with groundbreaking solutions!
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="legal">
            <div className="bg-glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <Gavel className="h-6 w-6 text-primary mr-3" />
                Legal
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  Innovate the legal field with AI tools that enhance accessibility and efficiency. Develop smart contract analyzers to extract critical terms and identify risks. Create conversational AI assistants to answer basic legal questions and guide users through processes. Build systems to predict case outcomes, supporting legal professionals in strategic planning. Make legal services smarter and more transparent with your technology!
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="power">
            <div className="bg-glass rounded-3xl p-6 sm:p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center">
                <Zap className="h-6 w-6 text-primary mr-3" />
                Power & Energy
              </h3>
              <div className="space-y-6 text-foreground/90">
                <p>
                  Address global energy challenges with AI solutions that promote sustainability. Develop systems to optimize energy distribution in smart grids for maximum efficiency. Create models to forecast renewable energy production from solar or wind sources. Build tools to track and reduce carbon emissions, fostering sustainable practices. Power a cleaner future with your innovative technology!
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center text-lg sm:text-xl font-semibold text-blue-600 mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl">Additional Domains</p>
          <p className="mt-2">
            Unleash your creativity and develop innovative AI solutions for any industry or challenge to drive impactful change!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
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
