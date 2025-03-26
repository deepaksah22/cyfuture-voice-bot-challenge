
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
            className="text-3xl md:text-4xl font-bold mb-6"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-block bg-glass rounded-full px-6 py-3 backdrop-blur-md shadow-glass">
            <p className="text-foreground/80">
              Additional jury members will be announced soon!
            </p>
          </div>
        </motion.div>
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
    name: "Dr. Ananya Sharma",
    title: "Chief AI Officer",
    company: "Cyfuture India Pvt Ltd",
    initials: "AS",
    bio: "Expert in artificial intelligence with over 15 years of experience building enterprise AI solutions across multiple industries.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Rajiv Mehta",
    title: "CEO & Founder",
    company: "TechVentures Inc",
    initials: "RM",
    bio: "Serial entrepreneur who has founded three successful tech startups with expertise in scaling businesses and product development.",
    social: {
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  },
  {
    name: "Monu Kumar",
    title: "Innovation Director",
    company: "Cyfuture Labs",
    initials: "MK",
    bio: "Technology visionary with expertise in AI/ML applications and a track record of mentoring successful tech startups in emerging markets.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    name: "Priya Patel",
    title: "VP of Innovation",
    company: "Global Technologies",
    initials: "PP",
    bio: "Innovation strategist focused on emerging technologies with experience in evaluating and investing in early-stage startups.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    name: "Dr. Vikram Singh",
    title: "Director of Research",
    company: "National Institute of AI",
    initials: "VS",
    bio: "Leading researcher in machine learning and computer vision with multiple patents and publications in top AI conferences.",
    social: {
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  },
  {
    name: "Meena Krishnan",
    title: "CTO",
    company: "HealthTech Solutions",
    initials: "MK",
    bio: "Technology leader specializing in healthcare AI applications with a background in implementing large-scale ML systems.",
    social: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Arun Joshi",
    title: "Managing Partner",
    company: "Accel Ventures",
    initials: "AJ",
    bio: "Venture capitalist with a portfolio of over 30 AI startups and deep expertise in identifying promising technology ventures.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
];

export default JurySection;
