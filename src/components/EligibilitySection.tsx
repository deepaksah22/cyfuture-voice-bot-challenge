
"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon, Users, Lightbulb, GraduationCap } from "lucide-react"

const EligibilitySection = () => {
  return (
    <section id="eligibility" className="section-padding px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyfuture-primary/5 to-cyfuture-secondary/5 z-[-1]" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyfuture-primary to-cyfuture-accent">
            Eligibility Criteria
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Participation is open exclusively to <span className="text-primary font-semibold">Indian residents</span>{" "}
            who are <span className="text-primary font-semibold">18 years or older</span> at the time of registration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-white shadow-md border border-cyfuture-primary/10 overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyfuture-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyfuture-primary/20 to-cyan-500/20">
                    <BriefcaseIcon className="h-8 w-8 text-cyfuture-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyfuture-primary">Working Professionals</h3>
                </div>
                <p className="text-foreground/80">
                  Step up and apply your expertise to create AI-driven solutions that address pressing social challenges
                  and spark innovation.
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
            <Card className="h-full bg-white shadow-md border border-cyfuture-primary/10 overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyfuture-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyfuture-primary/20 to-cyan-500/20">
                    <Users className="h-8 w-8 text-cyfuture-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyfuture-primary">Social Entrepreneurs</h3>
                </div>
                <p className="text-foreground/80">
                  Bring your vision to life by leveraging AI to create scalable, impactful solutions for underserved
                  communities.
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
            <Card className="h-full bg-white shadow-md border border-cyfuture-primary/10 overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyfuture-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyfuture-primary/20 to-cyan-500/20">
                    <Lightbulb className="h-8 w-8 text-cyfuture-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyfuture-primary">Technologists</h3>
                </div>
                <p className="text-foreground/80">
                  Use your technical skills to develop cutting-edge AI solutions that make a tangible difference in
                  real-world problems.
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
            <Card className="h-full bg-white shadow-md border border-cyfuture-primary/10 overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyfuture-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyfuture-primary/20 to-cyan-500/20">
                    <GraduationCap className="h-8 w-8 text-cyfuture-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-cyfuture-primary">Students</h3>
                </div>
                <p className="text-foreground/80">
                  Dive into hands-on experience and collaborate with experts to create AI solutions that drive social
                  good.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-cyfuture-primary/10 to-cyan-500/10 blur-[100px] -z-10"></div>
      </div>
    </section>
  )
}

export default EligibilitySection
