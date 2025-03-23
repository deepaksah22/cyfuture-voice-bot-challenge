
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section id="faq" className="section-padding px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5 z-[-1]" />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Got Questions?
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12"
          >
            Find answers to common questions about the Cyfuture AI Hackathon 1.0
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-glass rounded-3xl p-8 md:p-10 shadow-glass backdrop-blur-md"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 last:border-0">
                <AccordionTrigger className="text-lg font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-foreground/80 mb-4">
            Still have questions? Feel free to reach out to us.
          </p>
          <a 
            href="mailto:hackathon@cyfuture.com" 
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const faqItems = [
  {
    question: "Who can participate in the Cyfuture AI Hackathon?",
    answer: "The hackathon is open to students, professionals, and AI enthusiasts. Participants can form teams of 2-4 members. We welcome individuals with diverse skill sets including AI/ML, software development, UX/UI design, and business acumen."
  },
  {
    question: "Is there any registration fee?",
    answer: "No, there is no registration fee to participate in the Cyfuture AI Hackathon. It's completely free to join!"
  },
  {
    question: "How will the top 15 teams be selected?",
    answer: "The top 15 teams will be selected based on their initial idea submission, technical feasibility, innovation potential, and relevance to the problem statement. Each submission will be reviewed by our panel of judges."
  },
  {
    question: "What should we bring to the hackathon?",
    answer: "Participants should bring their own laptops, chargers, and any specific hardware they might need for their project. Food and refreshments will be provided during the event. For those participating in the grand finale at Cyfuture headquarters, accommodation arrangements will be communicated separately."
  },
  {
    question: "Do we need to have a solution ready before the hackathon?",
    answer: "No, you don't need to have a ready solution before the hackathon. However, it's beneficial to brainstorm ideas and do some preliminary research on AI voice bot technologies. The actual development will happen during the 24-hour hackathon period."
  },
  {
    question: "What technologies can we use for our solution?",
    answer: "You are free to use any technology stack of your choice. This includes but is not limited to speech recognition APIs, NLP libraries, cloud services, and programming languages. We encourage innovative use of technologies to solve the problem statement."
  },
  {
    question: "Will there be mentors available during the hackathon?",
    answer: "Yes, industry experts and mentors from Cyfuture and partner companies will be available throughout the hackathon to provide guidance and technical support."
  },
  {
    question: "What are the judging criteria?",
    answer: "Projects will be judged based on technical implementation, innovation, relevance to the problem statement, user experience, scalability, and business potential. The presentation quality and demonstration of the working prototype will also be considered."
  }
];

export default FaqSection;
