import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, FileText, Trophy, Calendar, Clock, MapPin, Rocket, Award, Flag, Target } from "lucide-react";

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-padding px-4 py-12 relative">
      {/* Background elements for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background z-[-1]" />
      <div className="absolute -top-20 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background/50 z-[-1]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Journey to Innovation
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent"
          >
            The Journey
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-8"
          >
            Mark your calendars! From registration to the grand finale, here's your complete guide to the Cyfuture AI Hackathon 1.0
          </motion.p>
        </div>

        <Tabs defaultValue="timeline" className="mb-10">
          <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="timeline" className="text-base">Roadmap Stages</TabsTrigger>
            <TabsTrigger value="evaluation" className="text-base">Evaluation Criteria</TabsTrigger>
          </TabsList>
          
          <TabsContent value="timeline">
            <div className="relative">
              {/* Decorative Timeline Elements */}
              <div className="absolute left-0 top-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
              <div className="absolute right-0 bottom-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
              
              {/* Timeline Line with Glow Effect */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 shadow-glow" />
              
              {/* Timeline Events */}
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <TimelineEvent 
                    key={index}
                    date={event.date}
                    title={event.title}
                    description={event.description}
                    icon={event.icon}
                    position={index % 2 === 0 ? "left" : "right"}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="evaluation">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Phase 1 Evaluation */}
              <div className="bg-glass rounded-3xl p-8 backdrop-blur-sm shadow-glass">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Phase 1: Project Submission</h3>
                </div>
                
                <p className="text-foreground/80 mb-6">
                  Teams must submit their project ideas, presentation slides, GitHub repository, and demo link. The top 15 ideas will be selected for the grand finale.
                </p>
                
                <h4 className="text-lg font-semibold mb-3">Evaluation Criteria:</h4>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Innovation and Originality (25%)</span>
                      <p className="text-sm text-foreground/70">Uniqueness and novelty of the proposed solution</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Technical Feasibility (25%)</span>
                      <p className="text-sm text-foreground/70">Viability of implementation within the hackathon timeframe</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Problem-Solution Fit (20%)</span>
                      <p className="text-sm text-foreground/70">How well the solution addresses the chosen challenge</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Potential Impact (20%)</span>
                      <p className="text-sm text-foreground/70">Expected benefits and scale of impact</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Presentation Quality (10%)</span>
                      <p className="text-sm text-foreground/70">Clarity and organization of the idea presentation</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Phase 2 Evaluation */}
              <div className="bg-glass rounded-3xl p-8 backdrop-blur-sm shadow-glass">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Grand Finale Evaluation</h3>
                </div>
                
                <p className="text-foreground/80 mb-6">
                  Selected teams will participate in the 24-hour onsite hackathon at Cyfuture India Pvt Ltd, NSEZ, Noida, where they will build and demonstrate their solutions.
                </p>
                
                <h4 className="text-lg font-semibold mb-3">Evaluation Criteria:</h4>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Functionality (25%)</span>
                      <p className="text-sm text-foreground/70">Working solution that fulfills the stated objectives</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Technical Implementation (25%)</span>
                      <p className="text-sm text-foreground/70">Quality of code, architecture, and use of AI technologies</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">User Experience (15%)</span>
                      <p className="text-sm text-foreground/70">Usability, interface design, and user journey</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Innovation and Creativity (15%)</span>
                      <p className="text-sm text-foreground/70">Unique approaches and creative problem-solving</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Business Potential (10%)</span>
                      <p className="text-sm text-foreground/70">Scalability, market potential, and business viability</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">Presentation and Demo (10%)</span>
                      <p className="text-sm text-foreground/70">Clarity of explanation and effective demonstration</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  icon: string;
  position: "left" | "right";
  index: number;
}

const TimelineEvent = ({ date, title, description, icon, position, index }: TimelineEventProps) => {
  // Map for dynamic icon selection
  const iconMap: Record<string, React.ReactNode> = {
    "register": <Rocket className="h-5 w-5 text-white" />,
    "deadline": <Clock className="h-5 w-5 text-white" />,
    "submission": <FileText className="h-5 w-5 text-white" />,
    "selection": <CheckCircle2 className="h-5 w-5 text-white" />,
    "kickoff": <Flag className="h-5 w-5 text-white" />,
    "hacking": <Target className="h-5 w-5 text-white" />,
    "project": <FileText className="h-5 w-5 text-white" />,
    "judging": <Trophy className="h-5 w-5 text-white" />,
    "awards": <Award className="h-5 w-5 text-white" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={cn(
        "relative flex items-center md:items-start",
        position === "right" ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      {/* Timeline Point with Icon */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center z-10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-glow z-20">
          {iconMap[icon]}
        </div>
        <div className="absolute w-16 h-16 bg-primary/10 rounded-full animate-ping opacity-50" />
      </div>
      
      {/* Content */}
      <div className={cn(
        "flex-1 md:w-1/2",
        position === "right" ? "md:pl-12 md:pr-0" : "md:pr-12 md:pl-0",
        "pl-8"
      )}>
        <div className="bg-glass rounded-2xl p-6 backdrop-blur-sm shadow-soft hover:shadow-md transition-all duration-300 border border-white/10">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            {date}
          </span>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-foreground/80">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const timelineEvents = [
  {
    date: "April 5, 2025",
    title: "Registration Opens",
    description: "Registration for the Cyfuture AI Hackathon 1.0 begins. Form your teams and prepare for an exciting challenge!",
    icon: "register"
  },
  {
    date: "May 20, 2025",
    title: "Registration Closes",
    description: "Last day to register your team for the hackathon. Make sure to complete your registration before the deadline.",
    icon: "deadline"
  },
  {
    date: "May 25, 2025",
    title: "Project Submission Phase 1",
    description: "All teams must submit their project ideas, presentation slides, GitHub repository, and demo link for Phase 1 evaluation by this date.",
    icon: "submission"
  },
  {
    date: "June 25, 2025",
    title: "Team Selection Announcement",
    description: "Top 15 teams will be selected based on idea submissions and notified for participation in the grand finale at Cyfuture headquarters.",
    icon: "selection"
  },
  {
    date: "July 4, 2025 - 10:00 AM",
    title: "Hackathon Kick-off",
    description: "The 24-hour hackathon begins! Selected teams gather at Cyfuture India Pvt Ltd, NSEZ, Noida for the opening ceremony.",
    icon: "kickoff"
  },
  {
    date: "July 4-5, 2025",
    title: "Hacking Period",
    description: "Teams work on their solutions for 24 hours straight. Mentors will be available to provide guidance and support.",
    icon: "hacking"
  },
  {
    date: "July 5, 2025 - 10:00 AM",
    title: "Project Submission",
    description: "All teams must submit their final projects, including code, documentation, and presentation materials.",
    icon: "project"
  },
  {
    date: "July 5, 2025 - 11:00 AM",
    title: "Presentations & Judging",
    description: "Teams present their solutions to a panel of judges from Cyfuture and industry experts.",
    icon: "judging"
  },
  {
    date: "July 5, 2025 - 4:00 PM",
    title: "Awards Ceremony",
    description: "Winners will be announced and prizes will be awarded during the closing ceremony.",
    icon: "awards"
  }
];

export default TimelineSection;
