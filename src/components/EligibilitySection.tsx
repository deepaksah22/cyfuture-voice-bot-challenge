
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BriefcaseIcon, Users, Lightbulb, GraduationCap } from "lucide-react";

const EligibilitySection = () => {
  return (
    <section id="eligibility" className="py-10 px-4 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">Eligibility Criteria</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Participation is open exclusively to <span className="text-amber-400 font-semibold">Indian residents</span> who are <span className="text-amber-400 font-semibold">18 years or older</span> at the time of registration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-amber-800/40 bg-black/60 backdrop-blur-sm overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20">
                    <BriefcaseIcon className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-400">Working Professionals</h3>
                </div>
                <p className="text-white/90">
                  Step up and apply your expertise to create AI-driven solutions that address pressing social challenges and spark innovation.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-amber-800/40 bg-black/60 backdrop-blur-sm overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20">
                    <Users className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-400">Social Entrepreneurs</h3>
                </div>
                <p className="text-white/90">
                  Bring your vision to life by leveraging AI to create scalable, impactful solutions for underserved communities.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-amber-800/40 bg-black/60 backdrop-blur-sm overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20">
                    <Lightbulb className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-400">Technologists</h3>
                </div>
                <p className="text-white/90">
                  Use your technical skills to develop cutting-edge AI solutions that make a tangible difference in real-world problems.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border border-amber-800/40 bg-black/60 backdrop-blur-sm overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20">
                    <GraduationCap className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-400">Students</h3>
                </div>
                <p className="text-white/90">
                  Dive into hands-on experience and collaborate with experts to create AI solutions that drive social good.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-purple-700/30 to-amber-600/30 blur-[100px] -z-10"></div>
      </div>
    </section>
  );
};

export default EligibilitySection;
