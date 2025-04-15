import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const JurySection = () => {
  return (
    <section id="jury" className="section-padding px-4 relative">
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
              Expert Panel
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent"
          >
            Meet Our Distinguished Jury
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12"
          >
            Our panel of industry experts will evaluate your solutions and provide valuable feedback to help you succeed.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {juryMembers.map((member, index) => (
            <JuryMemberCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface JuryMember {
  name: string;
  title: string;
  company: string;
  imageUrl?: string;
  initials: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

interface JuryMemberCardProps {
  member: JuryMember;
  index: number;
}

const JuryMemberCard = ({ member, index }: JuryMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group"
    >
      <div className="bg-glass rounded-3xl p-6 shadow-glass backdrop-blur-md h-full border border-white/10 transition-all duration-300 hover:shadow-xl group-hover:translate-y-[-5px]">
        <div className="flex flex-col items-center mb-4">
          <Avatar className="h-24 w-24 mb-4 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
            {member.imageUrl ? (
              <AvatarImage src={member.imageUrl} alt={member.name} />
            ) : (
              <AvatarFallback className="text-lg bg-primary/10 text-primary">
                {member.initials}
              </AvatarFallback>
            )}
          </Avatar>
          
          <h3 className="text-xl font-bold text-center">{member.name}</h3>
          <p className="text-foreground/80 text-center mb-1">{member.title}</p>
          <p className="text-primary font-medium text-center">{member.company}</p>
        </div>
        
        <p className="text-foreground/80 text-sm mb-4 text-center">
          {member.bio}
        </p>
        
        <div className="flex justify-center gap-2">
          {member.social.linkedin && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-8 w-8"
              onClick={() => window.open(member.social.linkedin, '_blank')}
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          )}
          
          {member.social.twitter && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-8 w-8"
              onClick={() => window.open(member.social.twitter, '_blank')}
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          )}
          
          {member.social.website && (
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-8 w-8"
              onClick={() => window.open(member.social.website, '_blank')}
            >
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Website</span>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const juryMembers: JuryMember[] = [
  
  {
    name: "Anuj Bairathi",
    title: "CEO",
    company: "Cyfuture India Pvt Ltd",
    imageUrl: "/lovable-uploads/b513b31b-0d60-4ea6-bec1-da731902f2a3.png",
    initials: "AR",
    bio: "Leading the innovation and digital transformation initiatives at Cyfuture with a focus on emerging technologies and enterprise solutions.",
    social: {
      linkedin: "https://www.linkedin.com/in/abairathi/"
    }
  },
  {
    name: "Sachin Sharma",
    title: "Head of Engineering",
    company: "Publicis Sapient",
    imageUrl: "/lovable-uploads/ce0af48f-e736-4ece-8ce1-4e14cd731e89.png",
    initials: "SS",
    bio: "Engineering leader from IIT Roorkee with extensive experience in driving technological innovation and digital transformation.",
    social: {
      linkedin: "https://www.linkedin.com/in/trulysachin/"
    }
  },
  {
    name: "Munish Mahajan",
    title: "CHRO",
    company: "Cyfuture India Pvt Ltd",
    imageUrl: "/lovable-uploads/ac025763-8ff8-4c56-960a-e0905ad11a70.png",
    initials: "MM",
    bio: "Strategic HR leader driving talent acquisition, employee engagement, and organizational development to support Cyfuture's growth objectives.",
    social: {
      linkedin: "https://www.linkedin.com/in/munish-mahajan/"
    }
  },
  {
    name: "Ravish Sharma",
    title: "COO",
    company: "Cyfuture India Pvt Ltd",
    imageUrl: "/lovable-uploads/d8a767f9-359a-4b3a-ab9d-a0e6eefb5569.png",
    initials: "RS",
    bio: "Operations leader overseeing the execution and delivery of Cyfuture's services and ensuring operational excellence across the organization.",
    social: {
      linkedin: "https://www.linkedin.com/in/ravishsharma83/"
    }
  },
  {
    name: "Ajai Rai",
    title: "CTO",
    company: "Cyfuture India Pvt Ltd",
    imageUrl: "/lovable-uploads/6dda99ce-985b-4288-b6f0-5981c3101bd6.png",
    initials: "AR",
    bio: "Technology visionary driving the technical strategy and innovation roadmap for Cyfuture's suite of AI and cloud solutions.",
    social: {
      linkedin: "https://www.linkedin.com/in/ajai-rai-a786a2a/"
    }
  },
  {
    name: "Rana Roy",
    title: "CBO",
    company: "Cyfuture India Pvt Ltd",
    imageUrl: "/lovable-uploads/de00a99f-166f-44bb-868e-bd769c16388e.png",
    initials: "RR",
    bio: "Business development expert responsible for expanding Cyfuture's market presence and forging strategic partnerships across industries.",
    social: {
      linkedin: "https://www.linkedin.com/in/rana-roy-b08bb017/"
    }
  }
];

export default JurySection;
