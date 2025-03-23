
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, FileText, Trophy } from "lucide-react";

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-padding px-4">
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
              Event Schedule
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Hackathon Timeline
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12"
          >
            Mark your calendars! Here's the complete timeline for the Cyfuture AI Hackathon 1.0
          </motion.p>
        </div>

        <Tabs defaultValue="timeline" className="mb-12">
          <TabsList className="grid grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="evaluation">Evaluation Criteria</TabsTrigger>
          </TabsList>
          
          <TabsContent value="timeline">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />
              
              {/* Timeline Events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <TimelineEvent 
                    key={index}
                    date={event.date}
                    title={event.title}
                    description={event.description}
                    position={index % 2 === 0 ? "left" : "right"}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="evaluation">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phase 1 Evaluation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-glass rounded-3xl p-8 backdrop-blur-sm shadow-glass"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Phase 1: Idea Submission</h3>
                </div>
                
                <p className="text-foreground/80 mb-6">
                  The first round of evaluation will be based on your idea submission through a presentation. The top 15 teams will be selected to participate in the grand finale.
                </p>
                
                <h4 className="text-lg font-semibold mb-3">Evaluation Criteria:</h4>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Innovation and Originality (25%): Uniqueness and novelty of the proposed solution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Technical Feasibility (25%): Viability of implementation within the hackathon timeframe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Problem-Solution Fit (20%): How well the solution addresses the chosen challenge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Potential Impact (20%): Expected benefits and scale of impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Presentation Quality (10%): Clarity and organization of the idea presentation</span>
                  </li>
                </ul>
              </motion.div>
              
              {/* Phase 2 Evaluation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-glass rounded-3xl p-8 backdrop-blur-sm shadow-glass"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Phase 2: Grand Finale</h3>
                </div>
                
                <p className="text-foreground/80 mb-6">
                  Selected teams will participate in the 24-hour onsite hackathon at Cyfuture India Pvt Ltd, NSEZ, Noida, where they will build and demonstrate their solutions.
                </p>
                
                <h4 className="text-lg font-semibold mb-3">Evaluation Criteria:</h4>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Functionality (25%): Working solution that fulfills the stated objectives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Technical Implementation (25%): Quality of code, architecture, and use of AI technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>User Experience (15%): Usability, interface design, and user journey</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Innovation and Creativity (15%): Unique approaches and creative problem-solving</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Presentation and Demo (10%): Clarity of explanation and effective demonstration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Business Potential (10%): Scalability, market potential, and business viability</span>
                  </li>
                </ul>
              </motion.div>
            </div>
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
  position: "left" | "right";
  index: number;
}

const TimelineEvent = ({ date, title, description, position, index }: TimelineEventProps) => {
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
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary shadow-glow z-10" />
      
      {/* Content */}
      <div className={cn(
        "flex-1 md:w-1/2",
        position === "right" ? "md:pl-12 md:pr-0" : "md:pr-12 md:pl-0",
        "pl-8"
      )}>
        <div className="bg-glass rounded-2xl p-6 backdrop-blur-sm shadow-soft hover:shadow-md transition-all duration-300">
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
    description: "Registration for the Cyfuture AI Hackathon 1.0 begins. Form your teams and prepare for an exciting challenge!"
  },
  {
    date: "April 25, 2025",
    title: "Registration Closes",
    description: "Last day to register your team for the hackathon. Make sure to complete your registration before the deadline."
  },
  {
    date: "April 28, 2025",
    title: "Idea Submission Deadline",
    description: "All teams must submit their project ideas and presentation slides for Phase 1 evaluation by this date."
  },
  {
    date: "May 5, 2025",
    title: "Team Selection Announcement",
    description: "Top 15 teams will be selected based on idea submissions and notified for participation in the grand finale at Cyfuture headquarters."
  },
  {
    date: "May 15, 2025 - 10:00 AM",
    title: "Hackathon Kick-off",
    description: "The 24-hour hackathon begins! Selected teams gather at Cyfuture India Pvt Ltd, NSEZ, Noida for the opening ceremony."
  },
  {
    date: "May 15-16, 2025",
    title: "Hacking Period",
    description: "Teams work on their solutions for 24 hours straight. Mentors will be available to provide guidance and support."
  },
  {
    date: "May 16, 2025 - 10:00 AM",
    title: "Project Submission",
    description: "All teams must submit their final projects, including code, documentation, and presentation materials."
  },
  {
    date: "May 16, 2025 - 11:00 AM",
    title: "Presentations & Judging",
    description: "Teams present their solutions to a panel of judges from Cyfuture and industry experts."
  },
  {
    date: "May 16, 2025 - 4:00 PM",
    title: "Awards Ceremony",
    description: "Winners will be announced and prizes will be awarded during the closing ceremony."
  }
];

export default TimelineSection;
