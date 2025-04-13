// Updated ChallengeSection.tsx

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  Phone,
  HeadphonesIcon,
  Bot,
  Braces,
  Cpu,
  HeartPulse,
  Coins,
  Leaf,
  GraduationCap,
  Lightbulb,
  UserCog,
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

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
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Challenge Tracks
          </motion.h2>
        </div>

        <Tabs defaultValue="callcenter" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 max-w-5xl mx-auto mb-8">
            <TabsTrigger value="callcenter">Call Centers</TabsTrigger>
            <TabsTrigger value="hr">HR</TabsTrigger>
            <TabsTrigger value="finance">Finance</TabsTrigger>
            <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="callcenter">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <HeadphonesIcon className="h-6 w-6 text-primary mr-3" />
                Call Centers
              </h3>
              <div className="space-y-4 text-foreground/90">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Build AI-based grievance redressal and ticket classification
                    system using voice and text.
                  </li>
                  <li>
                    Develop a voicebot for L1 query handling with live agent
                    handoff and knowledge base support.
                  </li>
                  <li>
                    Design an automated call summarizer with sentiment analysis
                    and intent detection to reduce agent workload.
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hr">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <UserCog className="h-6 w-6 text-primary mr-3" />
                HR
              </h3>
              <div className="space-y-4 text-foreground/90">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Build an AI chatbot/voicebot to screen resumes, shortlist
                    candidates, and engage them through automated
                    conversations.
                  </li>
                  <li>
                    Create an AI tool to search and match resumes from the web
                    for job openings, reducing dependency on job portals.
                  </li>
                  <li>
                    Identify high-potential employees using AI and recommend
                    personalized leadership plans.
                  </li>
                  <li>
                    Build a dashboard integrating real-time data for
                    performance, feedback, and appraisal.
                  </li>
                  <li>
                    Develop a gamified learning platform to enhance employee
                    engagement and skill building.
                  </li>
                  <li>
                    Analyze employee profiles and training records to identify
                    skill gaps and recommend upskilling.
                  </li>
                  <li>
                    Create a wellness platform to track employee health
                    activities and recommend improvement plans.
                  </li>
                  <li>
                    Design a centralized HR dashboard for actionable insights on
                    attrition, hiring pipeline, and engagement.
                  </li>
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
              <div className="space-y-4 text-foreground/90">
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Automate invoice data extraction from uploaded documents
                    using OCR + AI and support bulk uploads.
                  </li>
                  <li>
                    Build an AI tool to reconcile purchase records with GST
                    portal data and categorize discrepancies.
                  </li>
                  <li>
                    Design a system for fraud detection and anomaly tracking in
                    financial transactions using AI.
                  </li>
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
              <div className="space-y-4 text-foreground/90">
                <ul className="list-disc list-inside space-y-2">
                  <li>Use AI to assist in preliminary diagnosis based on symptoms.</li>
                  <li>Design a chatbot to guide patients in appointment scheduling and FAQs.</li>
                  <li>Create an AI tool for extracting and organizing EMR/EHR data.</li>
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
              <div className="space-y-4 text-foreground/90">
                <ul className="list-disc list-inside space-y-2">
                  <li>Develop AI tutors that can help with personalized learning paths.</li>
                  <li>Build automated grading and feedback generation systems.</li>
                  <li>Design tools for detecting student stress and recommending interventions.</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center text-muted-foreground italic mb-12">
          Participants are also free to propose innovative AI solutions beyond the listed domains.
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
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
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
