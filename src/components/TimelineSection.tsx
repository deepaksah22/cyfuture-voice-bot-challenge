import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle2,
  FileText,
  Trophy,
  Calendar,
  Clock,
  MapPin,
  Rocket,
  CloudLightning,
  DollarSign,
  Flag,
  Target,
  Award,
} from "lucide-react";

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-padding px-4 py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background z-[-1]" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent"
          >
            Hackathon Roadmap
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto"
          >
            Mark your calendars! Here’s your complete guide to the Cyfuture AI Hackathon 1.0.
          </motion.p>
        </div>

        <Tabs defaultValue="timeline" className="mb-12">
          <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="timeline">Roadmap Stages</TabsTrigger>
            <TabsTrigger value="evaluation">Evaluation Criteria</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline">
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <TimelineEvent 
                  key={index} 
                  date={event.date} 
                  title={event.title} 
                  description={event.description} 
                  icon={event.icon} 
                  index={index} 
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="evaluation">
            <EvaluationCriteria />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const TimelineEvent = ({ date, title, description, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="relative flex items-center"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
        {icon}
      </div>
      <div className="ml-6">
        <span className="text-sm font-medium text-primary">{date}</span>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-foreground/80">{description}</p>
      </div>
    </motion.div>
  );
};

const EvaluationCriteria = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      <EvaluationCard 
        title="Phase 1: Idea Submission"
        icon={<FileText className="h-5 w-5 text-primary" />}
        criteria={["Problem Statement Clarity", "Innovation & Novelty", "Technical Feasibility", "Market Potential", "Team Composition"]}
      />
      <EvaluationCard 
        title="Grand Finale Evaluation Criteria"
        icon={<Trophy className="h-5 w-5 text-primary" />}
        criteria={["Functionality", "Technical Implementation", "User Experience", "Innovation", "Presentation", "Business Potential"]}
      />
    </motion.div>
  );
};

const EvaluationCard = ({ title, icon, criteria }) => {
  return (
    <div className="bg-glass rounded-3xl p-8 backdrop-blur-sm shadow-glass">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-3">
        {criteria.map((criterion, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
            <span>{criterion}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const timelineEvents = [
  { date: "April 5, 2025", title: "Registration Opens", description: "Sign up and form your teams!", icon: <Rocket className="h-5 w-5 text-white" /> },
  { date: "April 25, 2025", title: "Registration Closes", description: "Last chance to join!", icon: <Clock className="h-5 w-5 text-white" /> },
  { date: "April 28, 2025", title: "Idea Submission Deadline", description: "Submit your innovative ideas.", icon: <FileText className="h-5 w-5 text-white" /> },
];

export default TimelineSection;
