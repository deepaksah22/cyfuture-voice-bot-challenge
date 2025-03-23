
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
              Our Sponsor
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Proudly Sponsored By
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-foreground/80 max-w-3xl mx-auto mb-12"
          >
            We're grateful to our exclusive sponsor who is making this hackathon possible.
          </motion.p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-glass rounded-3xl p-12 shadow-glass backdrop-blur-sm"
          >
            <div className="text-center">
              <div className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyfuture-primary to-cyfuture-secondary mb-4">
                Cyfuture
              </div>
              <p className="text-xl text-foreground/80 mb-8">Cyfuture India Pvt Ltd</p>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                Cyfuture India Pvt Ltd is a leading technology company committed to fostering innovation 
                and developing the next generation of AI talent through initiatives like the Cyfuture AI Hackathon 1.0.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
