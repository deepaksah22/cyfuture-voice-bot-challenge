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
  Users,
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
          <TabsList className="grid grid-cols-2 md:grid-cols-6 max-w-6xl mx-auto mb-8">
            <TabsTrigger value="callcenter">Call Centers</TabsTrigger>
            <TabsTrigger value="hr">HR</TabsTrigger>
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
                <p className="text-xl font-semibold text-center py-8">
                  Releasing Soon...
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hr">
            <div className="bg-glass rounded-3xl p-8 md:p-12 shadow-glass backdrop-blur-md">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Users className="h-6 w-6 text-primary mr-3" />
                Human Resources
              </h3>
              <div className="space-y-4 text-foreground/90">
                <p>
                  <strong>Challenge:</strong> Revolutionizing Human Resources
                  with AI-powered Talent Management and Workforce Intelligence.
                </p>
                <p>
                  Despite multiple sourcing platforms and traditional HR systems,
                  recruitment and workforce management continue to face critical
                  inefficiencies. Your task is to build AI-powered solutions that
                  address these real-world challenges.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Resume Screening & Candidate Engagement:</strong>{" "}
                    Automate resume analysis and engage candidates via AI chatbots.
                  </li>
                  <li>
                    <strong>AI Resume Mining:</strong> Use AI to intelligently mine
                    resumes from open web using Boolean logic.
                  </li>
                  <li>
                    <strong>Identify High-Potential Employees:</strong> Analyze data
                    to recommend leadership development plans.
                  </li>
                  <li>
                    <strong>Performance Management:</strong> Create real-time
                    dashboards for appraisals.
                  </li>
                  <li>
                    <strong>Gamified HR Tools:</strong> Make training & engagement
                    fun with AI-driven gamification.
                  </li>
                  <li>
                    <strong>Skill Gap Detection:</strong> Suggest upskilling paths
                    using data analysis and AI models.
                  </li>
                  <li>
                    <strong>Employee Wellness:</strong> Build platforms that track
                    well-being and suggest improvements.
                  </li>
                  <li>
                    <strong>HR Analytics:</strong> Unified dashboards with actionable
                    AI insights.
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
              <div className="space-y-6 text-foreground/90">
                <p className="text-xl font-semibold text-center py-8">
                  Releasing Soon
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
                <p className="text-xl font-semibold text-center py-8">
                  Releasing Soon
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
                <p className="text-xl font-semibold text-center py-8">
                  Releasing Soon
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
                <p className="text-xl font-semibold text-center py-8">
                  Releasing Soon
                </p>
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
