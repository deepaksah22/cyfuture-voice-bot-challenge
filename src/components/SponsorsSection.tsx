
import { motion } from "framer-motion";

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="section-padding px-4">
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
              Our Supporters
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Sponsors & Partners
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12"
          >
            We're proud to collaborate with industry leaders who are helping make this hackathon possible.
          </motion.p>
        </div>
        
        <div className="space-y-16">
          {/* Title Sponsors */}
          <div>
            <h3 className="text-xl font-medium text-center mb-8">Title Sponsor</h3>
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-glass rounded-2xl p-8 w-full max-w-md mx-auto shadow-soft backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyfuture-primary to-cyfuture-secondary mb-2">
                    Cyfuture
                  </div>
                  <p className="text-foreground/80">Cyfuture India Pvt Ltd</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Platinum Sponsors */}
          <div>
            <h3 className="text-xl font-medium text-center mb-8">Platinum Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platinumSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-glass rounded-2xl p-6 shadow-soft backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="font-display text-xl font-bold mb-2">
                      {sponsor}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Gold Sponsors */}
          <div>
            <h3 className="text-xl font-medium text-center mb-8">Gold Sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {goldSponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="bg-glass rounded-2xl p-4 shadow-soft backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="font-medium">
                      {sponsor}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Community Partners */}
          <div>
            <h3 className="text-xl font-medium text-center mb-8">Community Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {communityPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  className="bg-glass rounded-xl p-3 shadow-soft backdrop-blur-sm flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="font-medium text-sm">
                      {partner}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const platinumSponsors = [
  "IBM",
  "Microsoft",
  "Google Cloud",
];

const goldSponsors = [
  "AWS",
  "Azure",
  "Infosys",
  "TCS",
  "HCL Technologies",
  "Wipro",
  "Cognizant",
  "Tech Mahindra",
];

const communityPartners = [
  "AI Developers Community",
  "Innovate Noida",
  "CodeCrafters",
  "Data Science Hub",
  "Women in AI",
  "Tech Startups Alliance",
  "Student Developers Society",
  "Future Technologies Forum",
];

export default SponsorsSection;
